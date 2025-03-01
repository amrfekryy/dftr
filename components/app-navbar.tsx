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

export default function AppNavbar() {
  const isMobile = useIsMobile();
  return isMobile ? <MobileNavbar /> : <DesktopNavbar />;
}

function MobileNavbar() {
  return (
    <nav className="bg-[#161616] p-5 h-[85px] w-full flex justify-between items-center">
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

  return (
    <nav className="bg-[#161616] px-10 py-4 shadow-md h-[98px] w-full flex justify-between items-center">
      <Link href="/">
        <IzamLogo width={81} height={27} />
      </Link>
      {/* <ul
        className={`md:flex gap-6 md:static absolute top-16 left-0 w-full bg-blue-600 md:w-auto md:bg-transparent md:p-0 p-4 transition-all ${
          isOpen ? "block" : "hidden"
        }`}
      >
        <li>
          <Link href="/" className="text-white hover:text-gray-300">
            Home
          </Link>
        </li>
        <li>
          <Link href="/about" className="text-white hover:text-gray-300">
            About
          </Link>
        </li>
        <li>
          <Link href="/contact" className="text-white hover:text-gray-300">
            Contact
          </Link>
        </li>
      </ul> */}
      <UserAvatar size={30} />
    </nav>
  );
}
