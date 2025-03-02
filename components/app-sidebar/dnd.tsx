"use client";

import {
  closestCenter,
  DndContext,
  DragEndEvent,
  KeyboardSensor,
  PointerSensor,
  useSensor,
  useSensors,
} from "@dnd-kit/core";
import {
  arrayMove,
  SortableContext,
  sortableKeyboardCoordinates,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";
import React from "react";

import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import { Item } from "./customizable-menu";
import { toast } from "sonner";

type RenderItem = ({
  item,
  dndProps,
}: {
  item: Item;
  dndProps?: any;
}) => React.ReactNode;

export function SortableItem({
  item,
  renderItem,
}: {
  item: Item;
  renderItem: RenderItem;
}) {
  const { attributes, listeners, setNodeRef, transform, transition } =
    useSortable({ id: item.id });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };

  return (
    <div ref={setNodeRef} style={style}>
      {renderItem({ item, dndProps: { ...attributes, ...listeners } })}
    </div>
  );
}

export function ItemsDnd({
  items,
  setItems,
  renderItem,
  disableDnd = false,
}: {
  items: Item[];
  setItems: React.Dispatch<React.SetStateAction<Item[]>>;
  renderItem: RenderItem;
  disableDnd?: boolean;
}) {
  const sensors = useSensors(
    useSensor(PointerSensor),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    })
  );

  const postTrackData = async ({
    id,
    from,
    to,
  }: {
    id: number;
    from: number;
    to: number;
  }) => {
    try {
      const response = await fetch("/api/track", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id, from, to }),
      });

      if (response.status === 204) {
        console.log(`Item ${id} moved from ${from} to ${to} `);
      } else {
        const errorData = await response.json();
        toast.error(`Error: ${errorData.error}`);
      }
    } catch (error) {
      toast.error("Failed to send data.");
    }
  };

  function handleDragEnd(event: DragEndEvent) {
    const { active, over } = event;

    if (active.id !== over?.id) {
      setItems((items) => {
        const oldIndex = items.findIndex((item) => item.id === active.id);
        const newIndex = items.findIndex((item) => item.id === over?.id);
        postTrackData({
          id: Number(active.id),
          from: oldIndex,
          to: newIndex,
        });
        return arrayMove(items, oldIndex, newIndex);
      });
    }
  }

  return disableDnd ? (
    items
      .filter((item) => item.visible !== false)
      .map((item) => renderItem({ item }))
  ) : (
    <DndContext
      sensors={sensors}
      collisionDetection={closestCenter}
      onDragEnd={handleDragEnd}
    >
      <SortableContext items={items} strategy={verticalListSortingStrategy}>
        {items.map((item) => {
          return (
            <SortableItem key={item.id} item={item} renderItem={renderItem} />
          );
        })}
      </SortableContext>
    </DndContext>
  );
}
