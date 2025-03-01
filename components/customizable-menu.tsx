"use client";

import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { Separator } from "@/components/ui/separator";
import {
  Sidebar,
  SidebarContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubItem,
} from "@/components/ui/sidebar";
import { useIsMobile } from "@/hooks/use-mobile";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import { ArrowDownIcon } from "./icons/arrow-down";
import { ArrowUpIcon } from "./icons/arrow-up";
import { CogIcon } from "./icons/cog";
import { EditIcon } from "./icons/edit";
import { ViewIcon } from "./icons/view";
import { HideIcon } from "./icons/hide";
import { DragIcon } from "./icons/drag";
import { DoneIcon } from "./icons/done";
import { CancelIcon } from "./icons/cancel";

// Menu items.
const items = [
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
  const pathname = usePathname();
  const [expandedId, setExpandedId] = React.useState<number | null>(null);
  const [isEditMode, setIsEditMode] = React.useState(false);

  return (
    <Sidebar
      collapsible={isMobile ? "offcanvas" : "none"}
      side={isMobile ? "right" : "left"}
    >
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
      <Separator />
      <SidebarContent>
        <SidebarMenu>
          {items.map((item) => {
            // const isOpen =
            //   pathname === item.target ||
            //   item.children?.some((child) => child.target === pathname);
            return (
              <Collapsible
                key={item.id}
                className="group/collapsible"
                open={expandedId === item.id}
                onOpenChange={(open) => setExpandedId(open ? item.id : null)}
              >
                <SidebarMenuItem key={item.title}>
                  <div className="w-[412px] h-[65px] bg-[#F7F7F7] px-6 rounded-sm flex justify-between items-center">
                    {isEditMode ? (
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
                    ) : (
                      <>
                        <Link href={item.target || "#"}>{item.title}</Link>
                        {item.children && (
                          <CollapsibleTrigger>
                            <IconButton
                              icon={
                                expandedId === item.id ? (
                                  <ArrowUpIcon />
                                ) : (
                                  <ArrowDownIcon />
                                )
                              }
                            />
                          </CollapsibleTrigger>
                        )}
                      </>
                    )}
                  </div>
                  <CollapsibleContent>
                    {item.children && (
                      <SidebarMenuSub>
                        {item.children.map((item) => (
                          <SidebarMenuSubItem key={item.id}>
                            <div className="h-[52px] flex justify-between items-center pr-6">
                              {isEditMode ? (
                                <>
                                  <div className="flex gap-3 items-center">
                                    <IconButton
                                      icon={<DragIcon />}
                                      onClick={() => {}}
                                    />
                                    <span>{item.title}</span>
                                  </div>
                                  <div className="flex gap-3 items-center">
                                    <IconButton
                                      icon={<EditIcon />}
                                      onClick={() => {}}
                                    />
                                    <IconButton
                                      icon={<ViewIcon />}
                                      onClick={() => {}}
                                    />
                                    <IconButton
                                      icon={<HideIcon />}
                                      onClick={() => {}}
                                    />
                                  </div>
                                </>
                              ) : (
                                <Link href={item.target || "#"}>
                                  {item.title}
                                </Link>
                              )}
                            </div>
                          </SidebarMenuSubItem>
                        ))}
                      </SidebarMenuSub>
                    )}
                  </CollapsibleContent>
                </SidebarMenuItem>
              </Collapsible>
            );
          })}
        </SidebarMenu>
      </SidebarContent>
    </Sidebar>
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
