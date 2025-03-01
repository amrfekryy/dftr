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

  return (
    <Sidebar
      collapsible={isMobile ? "offcanvas" : "none"}
      side={isMobile ? "right" : "left"}
    >
      <SidebarHeader className="h-[98px] px-10">
        <div>Menu</div>
        <CogIcon />
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
                    <Link href={item.target || "#"}>
                      <span>{item.title}</span>
                    </Link>
                    {item.children && (
                      <CollapsibleTrigger
                        onClick={() => setExpandedId(item.id)}
                      >
                        {expandedId === item.id ? (
                          <ArrowUpIcon />
                        ) : (
                          <ArrowDownIcon />
                        )}
                      </CollapsibleTrigger>
                    )}
                  </div>
                  <CollapsibleContent>
                    {item.children && (
                      <SidebarMenuSub>
                        {item.children.map((child) => (
                          <SidebarMenuSubItem key={child.id}>
                            <div className="h-[52px] flex justify-between items-center">
                              <Link href={child.target || "#"}>
                                <span>{child.title}</span>
                              </Link>
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
