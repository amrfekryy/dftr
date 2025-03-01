"use client";

import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import {
  Sidebar,
  SidebarContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubItem,
  SidebarSeparator,
} from "@/components/ui/sidebar";
import { useIsMobile } from "@/hooks/use-mobile";
import Link from "next/link";
import React from "react";
import { ItemsDnd } from "./dnd";
import { ArrowDownIcon } from "./icons/arrow-down";
import { ArrowUpIcon } from "./icons/arrow-up";
import { CancelIcon } from "./icons/cancel";
import { CogIcon } from "./icons/cog";
import { DoneIcon } from "./icons/done";
import { DragIcon } from "./icons/drag";
import { EditIcon } from "./icons/edit";
import { HideIcon } from "./icons/hide";
import { ViewIcon } from "./icons/view";

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
  const [items, setItems] = React.useState(initialItems);
  const [expandedId, setExpandedId] = React.useState<number | null>(null);
  const [isEditMode, setIsEditMode] = React.useState(false);

  return (
    <Sidebar
      collapsible={isMobile ? "offcanvas" : "none"}
      side={isMobile ? "right" : "left"}
    >
      <Header isEditMode={isEditMode} setIsEditMode={setIsEditMode} />
      <SidebarSeparator />
      <SidebarContent>
        <SidebarMenu>
          <ItemsDnd
            disableDnd={!isEditMode}
            items={items}
            setItems={setItems}
            renderItem={(item) => (
              <MenuItem
                key={item.id}
                item={item}
                isEditMode={isEditMode}
                isExpanded={expandedId === item.id}
                setExpandedId={setExpandedId}
                setItems={setItems}
              />
            )}
          />
        </SidebarMenu>
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
}: {
  item: Item;
  isEditMode: boolean;
  isExpanded: boolean;
  setExpandedId: (id: number | null) => void;
  setItems: React.Dispatch<React.SetStateAction<Item[]>>;
}) {
  // const pathname = usePathname();
  // const isOpen =
  //   pathname === item.target ||
  //   item.children?.some((child) => child.target === pathname);

  function setSubItems(subItems: Item[]) {
    setItems((items) => {
      return items.map((i) => {
        if (i.id === item.id) {
          return { ...i, children: subItems };
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
            <EditableItem item={item} />
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
                setItems={setSubItems}
                renderItem={(item) => (
                  <MenuSubItem
                    key={item.id}
                    item={item}
                    isEditMode={isEditMode}
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
}: {
  item: Item;
  isEditMode: boolean;
}) {
  return (
    <SidebarMenuSubItem key={item.id}>
      <div className="h-[52px] flex justify-between items-center pr-6">
        {isEditMode ? (
          <EditableItem item={item} />
        ) : (
          <Link href={item.target || "#"}>{item.title}</Link>
        )}
      </div>
    </SidebarMenuSubItem>
  );
}

function Header({
  isEditMode,
  setIsEditMode,
}: {
  isEditMode: boolean;
  setIsEditMode: (value: boolean) => void;
}) {
  return (
    <SidebarHeader className="h-[98px] px-10">
      <div>Menu</div>
      {isEditMode ? (
        <div className="flex gap-3 items-center">
          <IconButton
            icon={<CancelIcon />}
            onClick={() => setIsEditMode(false)}
          />
          <IconButton
            icon={<DoneIcon />}
            onClick={() => setIsEditMode(false)}
          />
        </div>
      ) : (
        <IconButton icon={<CogIcon />} onClick={() => setIsEditMode(true)} />
      )}
    </SidebarHeader>
  );
}

function EditableItem({ item }: { item: Item }) {
  return (
    <>
      <div className="flex gap-3 items-center">
        <IconButton icon={<DragIcon />} onClick={() => {}} />
        <span>{item.title}</span>
      </div>
      <div className="flex gap-3 items-center">
        <IconButton icon={<EditIcon />} onClick={() => {}} />
        <IconButton icon={<ViewIcon />} onClick={() => {}} />
        <IconButton icon={<HideIcon />} onClick={() => {}} />
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
