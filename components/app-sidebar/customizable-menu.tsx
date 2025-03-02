"use client";

import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { Input } from "@/components/ui/input";
import {
  Sidebar,
  SidebarContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubItem,
  useSidebar,
} from "@/components/ui/sidebar";
import { useIsMobile } from "@/hooks/use-mobile";
import { cn } from "@/lib/utils";
import Link from "next/link";
import React, { useEffect } from "react";
import { ArrowDownIcon } from "../icons/arrow-down";
import { ArrowLeftIcon } from "../icons/arrow-left";
import { ArrowUpIcon } from "../icons/arrow-up";
import { CancelIcon } from "../icons/cancel";
import { CogIcon } from "../icons/cog";
import { DoneIcon } from "../icons/done";
import { DragIcon } from "../icons/drag";
import { EditIcon } from "../icons/edit";
import { HideIcon } from "../icons/hide";
import { ViewIcon } from "../icons/view";
import { Separator } from "../ui/separator";
import { ItemsDnd } from "./dnd";

export interface Item {
  id: number;
  title: string;
  target?: string;
  visible?: boolean;
  children?: Item[];
}

export const initialItems: Item[] = [
  { id: 1, title: "Dashboard", target: "/" },
  {
    id: 2,
    title: "Job Applications",
    target: "/applications",
    children: [
      { id: 7, title: "John Doe", target: "/applications/john-doe" },
      { id: 10, title: "James Bond", target: "/applications/james-bond" },
      {
        id: 20,
        title: "Scarlett Johansson",
        target: "/applications/scarlett-johansson",
        visible: false,
      },
    ],
  },
  {
    id: 3,
    title: "Companies",
    target: "/companies",
    visible: false,
    children: [
      { id: 8, title: "Tanqeeb", target: "/companies/1" },
      { id: 9, title: "Daftra", target: "/companies/2" },
      { id: 11, title: "TBD", target: "/companies/14" },
    ],
  },
  {
    id: 4,
    title: "Qualifications",
    children: [
      { id: 14, title: "Q1", target: "/q1" },
      { id: 15, title: "Q2", target: "/q2" },
    ],
  },
  { id: 5, title: "About", target: "/about" },
  { id: 6, title: "Contact", target: "/contact" },
];

export function CustomizableMenu() {
  const isMobile = useIsMobile();
  const [items, setItems] = React.useState<Item[]>([]);
  const [itemsBackup, setItemsBackup] = React.useState<Item[]>([]);
  const [expandedId, setExpandedId] = React.useState<number | null>(null);
  const [isEditMode, setIsEditMode] = React.useState(false);

  useEffect(() => {
    fetch("/api/nav")
      .then((res) => res.json())
      .then((data) => {
        setItems(data);
        setItemsBackup(data);
      });
  }, []);

  const onUpdateStart = () => {
    setItemsBackup(items);
    setIsEditMode(true);
  };

  const onUpdateSave = () => {
    setIsEditMode(false);
  };

  const onUpdateCancel = () => {
    setItems(itemsBackup);
    setIsEditMode(false);
  };

  return (
    <Sidebar
      collapsible={isMobile ? "offcanvas" : "none"}
      side={isMobile ? "right" : "left"}
    >
      <Header
        isEditMode={isEditMode}
        onUpdateStart={onUpdateStart}
        onUpdateCancel={onUpdateCancel}
        onUpdateSave={onUpdateSave}
      />
      <Separator />
      <SidebarContent>
        <SidebarMenu>
          <ItemsDnd
            disableDnd={!isEditMode}
            items={items}
            setItems={setItems}
            renderItem={({ item, dndProps }) => (
              <MenuItem
                key={item.id}
                item={item}
                isEditMode={isEditMode}
                isExpanded={expandedId === item.id}
                setExpandedId={setExpandedId}
                setItems={setItems}
                dndProps={dndProps}
              />
            )}
          />
        </SidebarMenu>
        {isMobile && isEditMode && <CancelButton onClick={onUpdateCancel} />}
      </SidebarContent>
    </Sidebar>
  );
}

function MenuItem({
  item,
  isEditMode,
  isExpanded,
  setExpandedId,
  setItems,
  dndProps,
}: {
  item: Item;
  isEditMode: boolean;
  isExpanded: boolean;
  setExpandedId: (id: number | null) => void;
  setItems: React.Dispatch<React.SetStateAction<Item[]>>;
  dndProps: any;
}) {
  // const pathname = usePathname();
  // const isOpen =
  //   pathname === item.target ||
  //   item.children?.some((child) => child.target === pathname);

  function setSubItems(setter: (items: Item[]) => Item[]) {
    setItems((items) => {
      return items.map((i) => {
        if (i.id === item.id) {
          return { ...i, children: setter(i.children || []) };
        }
        return i;
      });
    });
  }

  return (
    <SidebarMenuItem key={item.id}>
      <Collapsible
        key={item.id}
        className="group/collapsible"
        open={isExpanded}
        onOpenChange={(open) => setExpandedId(open ? item.id : null)}
      >
        <div className="w-[412px] h-[65px] bg-[#F7F7F7] px-6 rounded-sm flex justify-between items-center">
          {isEditMode ? (
            <EditableItem item={item} dndProps={dndProps} setItems={setItems} />
          ) : (
            <>
              <Link href={item.target || "#"}>{item.title}</Link>
              {item.children && (
                <CollapsibleTrigger>
                  <IconButton
                    icon={isExpanded ? <ArrowUpIcon /> : <ArrowDownIcon />}
                  />
                </CollapsibleTrigger>
              )}
            </>
          )}
        </div>
        <CollapsibleContent>
          {item.children && (
            <SidebarMenuSub>
              <ItemsDnd
                disableDnd={!isEditMode}
                items={item.children}
                // @ts-ignore
                setItems={setSubItems}
                renderItem={({ item, dndProps }) => (
                  <MenuSubItem
                    key={item.id}
                    item={item}
                    isEditMode={isEditMode}
                    dndProps={dndProps}
                    setItems={setItems}
                  />
                )}
              />
            </SidebarMenuSub>
          )}
        </CollapsibleContent>
      </Collapsible>
    </SidebarMenuItem>
  );
}

function MenuSubItem({
  item,
  isEditMode,
  dndProps,
  setItems,
}: {
  item: Item;
  isEditMode: boolean;
  dndProps: any;
  setItems: React.Dispatch<React.SetStateAction<Item[]>>;
}) {
  return (
    <SidebarMenuSubItem key={item.id}>
      <div className="h-[52px] flex justify-between items-center pr-6">
        {isEditMode ? (
          <EditableItem item={item} dndProps={dndProps} setItems={setItems} />
        ) : (
          <Link href={item.target || "#"}>{item.title}</Link>
        )}
      </div>
    </SidebarMenuSubItem>
  );
}

function Header({
  isEditMode,
  onUpdateStart,
  onUpdateCancel,
  onUpdateSave,
}: {
  isEditMode: boolean;
  onUpdateStart: () => void;
  onUpdateCancel: () => void;
  onUpdateSave: () => void;
}) {
  const { toggleSidebar, isMobile } = useSidebar();

  return (
    <SidebarHeader className="h-[98px] px-10">
      <div className="flex gap-3 items-center">
        {isMobile && (
          <IconButton icon={<ArrowLeftIcon />} onClick={toggleSidebar} />
        )}
        <div>Menu</div>
      </div>
      {isEditMode ? (
        <div className="flex gap-3 items-center">
          {!isMobile && (
            <IconButton icon={<CancelIcon />} onClick={onUpdateCancel} />
          )}
          <IconButton icon={<DoneIcon />} onClick={onUpdateSave} />
        </div>
      ) : (
        <IconButton icon={<CogIcon />} onClick={onUpdateStart} />
      )}
    </SidebarHeader>
  );
}

function EditableItem({
  item,
  setItems,
  dndProps,
}: {
  item: Item;
  setItems: React.Dispatch<React.SetStateAction<Item[]>>;
  dndProps: any;
}) {
  const [isEditing, setIsEditing] = React.useState(false);

  function updateItem(update: Partial<Item>) {
    setItems((items) => {
      return items.map((i) => {
        if (i.id === item.id) {
          return {
            ...i,
            ...update,
          };
        }
        if (i.children) {
          return {
            ...i,
            children: i.children.map((c) => {
              if (c.id === item.id) {
                return {
                  ...c,
                  ...update,
                };
              }
              return c;
            }),
          };
        }
        return i;
      });
    });
  }

  return (
    <>
      <div
        className={cn("flex gap-3 items-center", {
          "opacity-50": item.visible === false,
        })}
      >
        <IconButton
          icon={<DragIcon {...dndProps} className="hover:cursor-grab" />}
        />
        {isEditing ? (
          <Input
            autoFocus
            type="text"
            value={item.title}
            onBlur={() => setIsEditing(false)}
            onChange={(e) => updateItem({ title: e.target.value })}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                setIsEditing(false);
              }
            }}
          />
        ) : (
          <span>{item.title}</span>
        )}
      </div>
      <div className="flex gap-3 items-center">
        {!isEditing && (
          <IconButton icon={<EditIcon />} onClick={() => setIsEditing(true)} />
        )}
        {item.visible === false ? (
          <IconButton
            icon={<HideIcon />}
            onClick={() => updateItem({ visible: true })}
          />
        ) : (
          <IconButton
            icon={<ViewIcon />}
            onClick={() => updateItem({ visible: false })}
          />
        )}
      </div>
    </>
  );
}

function IconButton({
  icon,
  onClick,
}: {
  icon: React.ReactNode;
  onClick?: () => void;
}) {
  return (
    <div className="hover:cursor-pointer" onClick={onClick}>
      {icon}
    </div>
  );
}

function CancelButton({ onClick }: { onClick?: () => void }) {
  return (
    <div
      onClick={onClick}
      className="font-medium text-lg text-[#ED1F03] flex justify-center items-center mt-5 hover:cursor-pointer"
    >
      Cancel
    </div>
  );
}
