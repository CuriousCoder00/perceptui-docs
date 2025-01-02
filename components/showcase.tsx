import React from "react";
import { ComponentShowCaseItems } from "@/lib/data";

export const ComponentsShowCase = () => {
  return (
    <div className="grid lg:grid-cols-4 sm:grid-cols-3 grid-cols-2 z-50 gap-4 min-h-[50dvh] max-w-screen-2xl no-scrollbar xl:px-24 px-6 relative mb-12">
      {ComponentShowCaseItems.map((item, index) => (
        <div
          key={index}
          className="col-span-1 h-52 z-50 p-4 rounded-md border border-slate-800 bg-zinc-950 hover:bg-zinc-900 hover:scale-105 transition-all duration-400 flex flex-col items-center justify-center relative"
        >
          <div>{item.component}</div>
          <div className="flex w-full absolute justify-center text-center bottom-2 font-mono text-xs text-slate-400">
            {item.title}
          </div>
        </div>
      ))}
    </div>
  );
};
