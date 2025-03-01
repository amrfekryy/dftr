"use client";

import { initialItems } from "@/components/customizable-menu";
import { Dnd } from "@/components/dnd";
import React from "react";

export default function Home() {
  const [items, setItems] = React.useState(initialItems);
  return (
    <div className="w-full h-full">
      <Dnd items={items} setItems={setItems} />
    </div>
  );
}
