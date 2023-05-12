"use client";
import AddListForm from "components/AddListForm";
import useLists from "hooks/useLists";

import { useState } from "react";
import Button from "shared/Button";
import { twMerge } from "tailwind-merge";

export default function Sidebar() {
  const { lists, setSelected, selectedIndex } = useLists();
  const [showAddList, setShowAddList] = useState(false);
  return (
    <div className="drop-shadow-xl bg-slate-700 text-white rounded-lg p-4">
      <div className="font-semibold text-xl text-slate-200">My Lists</div>

      <div className="my-4 bg-gradient-to-r from-sky-300 to-slate-900 h-[1px] space-y-8"></div>
      {lists.map((list, index) => (
        <div
          key={`list_link_${list.id || index}`}
          className={twMerge([
            "p-4",
            "font-semibold",
            "uppercase",
            "tracking-wide",
            "cursor-pointer",
            list.isComplete && "line-through",
            selectedIndex === index
              ? "bg-slate-200 text-slate-900 rounded-xl"
              : "text-slate-200",
          ])}
          onClick={() => setSelected(index)}
        >
          {list.title}
        </div>
      ))}
      <div className="mt-16 mb-8">
        <AddListForm />
      </div>
    </div>
  );
}
