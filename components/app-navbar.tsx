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

export default function AppNavbar() {
  const isMobile = useIsMobile();
  return isMobile ? <MobileNavbar /> : <DesktopNavbar />;
}

function MobileNavbar() {
  return (
    <nav className="bg-[#161616] p-4 shadow-md w-full">
      <div className="container mx-auto flex justify-between items-center">
        <Sheet>
          <SheetTrigger>
            <div className="text-white text-xl font-bold">
              IZAM
            </div>
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
      </div>
    </nav>
  );
}

function DesktopNavbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-[#161616] p-4 shadow-md w-full">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="text-white text-xl font-bold">
          IZAM
        </Link>

        <div className="md:hidden">
          <SidebarTrigger />
          {/* {isOpen ? <X size={24} /> : <Menu size={24} />} */}
        </div>
        {/* <div className="md:hidden">
      <button onClick={() => setIsOpen(!isOpen)} className="text-white">
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>
    </div> */}

        <ul
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
        </ul>
      </div>
    </nav>
  );
}
