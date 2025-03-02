"use client";

import { useIsMobile } from "@/hooks/use-mobile";
import Link from "next/link";
import { useState } from "react";
import { SidebarTrigger } from "./ui/sidebar";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { IzamLogo } from "./izam-logo";
import { UserAvatar } from "./user-avatar";
import { HomeIcon } from "./icons/home";
import { JobsIcon } from "./icons/jobs";
import { NotificationsIcon } from "./icons/notifications";
import { EmployersIcon } from "./icons/employers";
import { MessagingIcon } from "./icons/messaging";

const items = [
  { name: "Home", icon: <HomeIcon /> },
  { name: "Jobs", icon: <JobsIcon /> },
  { name: "Employers", icon: <EmployersIcon /> },
  { name: "Notifications", icon: <NotificationsIcon /> },
  { name: "Messaging", icon: <MessagingIcon /> },
  { name: "Profile", icon: <UserAvatar size={30} /> },
];

export default function AppNavbar() {
  const isMobile = useIsMobile();
  return isMobile ? <MobileNavbar /> : <DesktopNavbar />;
}

function MobileNavbar() {
  return (
    <nav className="bg-[#161616] p-5 h-[85px] w-screen flex justify-between items-center">
      <Sheet>
        <SheetTrigger>
          <UserAvatar size={42} />
        </SheetTrigger>
        <SheetContent>
          <SheetHeader>
            <SheetTitle>Are you absolutely sure?</SheetTitle>
            <SheetDescription>
              This action cannot be undone. This will permanently delete your
              account and remove your data from our servers.
            </SheetDescription>
          </SheetHeader>
        </SheetContent>
      </Sheet>
      <IzamLogo width={59} height={18} />
    </nav>
  );
}

function DesktopNavbar() {
  const [isOpen, setIsOpen] = useState(false);

  const list = items.map((item) => (
    <li
      key={item.name}
      className="flex flex-col items-center justify-center gap-1 hover:cursor-pointer"
    >
      {item.icon}
      <div className="text-[#E6E6E6] font-normal text-lg">{item.name}</div>
    </li>
  ));

  return (
    <nav className="bg-[#161616] px-10 shadow-md h-[98px] w-full md:static">
      <div className="h-[98px] flex justify-between items-center">
        <Link href="/">
          <IzamLogo width={81} height={27} />
        </Link>
        <ul
          className={`flex gap-6 lg:gap-12 w-full bg-blue-600 md:w-auto md:bg-transparent md:p-0 p-4`}
        >
          {list.slice(0, 3)}
          <li key="divider" className="h-14 border-l border-[#D6D6D699]" />
          {list.slice(3)}
        </ul>
      </div>
    </nav>
  );
}
