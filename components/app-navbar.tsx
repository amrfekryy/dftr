"use client";

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { useIsMobile } from "@/hooks/use-mobile";
import Link from "next/link";
import { useState } from "react";
import { EmployersIcon, EmployersMobileIcon } from "./icons/employers";
import { HomeIcon, HomeMobileIcon } from "./icons/home";
import { JobsIcon, JobsMobileIcon } from "./icons/jobs";
import { MessagingIcon, MessagingMobileIcon } from "./icons/messaging";
import {
  NotificationsIcon,
  NotificationsMobileIcon,
} from "./icons/notifications";
import { IzamLogo } from "./izam-logo";
import { UserAvatar } from "./user-avatar";
import { Separator } from "./ui/separator";

const items = [
  { name: "Home", icon: <HomeIcon />, iconMobile: <HomeMobileIcon /> },
  { name: "Jobs", icon: <JobsIcon />, iconMobile: <JobsMobileIcon /> },
  {
    name: "Employers",
    icon: <EmployersIcon />,
    iconMobile: <EmployersMobileIcon />,
  },
  {
    name: "Notifications",
    icon: <NotificationsIcon />,
    iconMobile: <NotificationsMobileIcon />,
  },
  {
    name: "Messaging",
    icon: <MessagingIcon />,
    iconMobile: <MessagingMobileIcon />,
  },
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
          <div className="py-10 flex flex-col gap-6">
            <div className="px-10 flex justify-between">
              <div className="flex items-center gap-6">
                <UserAvatar size={57} />
                <div className="flex flex-col">
                  <div className="font-medium text-lg text-[#161616]">
                    Ahmed Amaar
                  </div>
                  <div className="font-normal text-[#707070]">
                    UX UI designer
                  </div>
                </div>
              </div>
            </div>
            <Separator />
            <ul className="px-10 flex flex-col items-start gap-6">
              {items.slice(0, 5).map((item) => {
                return (
                  <li
                    key={item.name}
                    className="flex items-center justify-center gap-3 hover:cursor-pointer"
                  >
                    {item.iconMobile}
                    <div className="text-[#5B5B5B] font-medium text-[14px]">
                      {item.name}
                    </div>
                  </li>
                );
              })}
            </ul>
            <Separator />
            <div className="px-10 flex flex-col gap-5">
              {["Setting and privacy", "Language", "Help"].map((i) => (
                <div key={i} className="text-[#707070] font-medium text-[16px]">
                  {i}
                </div>
              ))}
            </div>
            <Separator />
            <div className="px-10 text-[#ED1F03] font-medium text-lg hover:cursor-pointer">
              Logout
            </div>
          </div>
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
