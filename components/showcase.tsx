import React from "react";
import { Slider, Alert, Button } from "@perceptui/ui";
import Link from "next/link";

const ShowCase = () => {
  return (
    <div className="max-h-52 flex z-50 relative overflow-x-auto gap-4 min-h-[50dvh] max-w-screen-2xl no-scrollbar md:px-24 px-4">
      {showCaseItems.map((item, index) => (
        <div
          key={index}
          className="min-w-96 min-h-52 z-50 h-full p-4 rounded-md border border-slate-900 flex flex-col items-center justify-center relative"
        >
          {item.component}
          <div className="absolute flex w-full justify-center text-center bottom-2 font-mono text-xs text-slate-400">
            {item.title}
          </div>
        </div>
      ))}
    </div>
  );
};

export default ShowCase;

const showCaseItems = [
  { title: "Slider", component: <Slider /> },
  {
    title: "Alert",
    component: (
      <div className="flex flex-col gap-2 justify-center items-center">
        <Alert
          message="Percept UI Library Built Successfully"
          variant="ghost"
          type="success"
          className="text-xs"
        />
      </div>
    ),
  },
  {
    title: "Button",
    component: (
      <Button className="bg-sky-600 hover:bg-sky-500" size="xs" variant="solid">
        Start Building
      </Button>
    ),
  },
  {
    title: "Hover Effects",
    component: (
      <div className="grid grid-cols-4 gap-5 w-full mx-auto  place-items-center">
        <div className="col-span-2">
          <Link
            href="#"
            className="no-underline relative group text-base hover:dark:text-sky-400 hover:text-sky-600 text-gray-600 dark:text-gray-400"
          >
            Hover Me
            <span className="absolute -bottom-1 left-0 w-full h-[2px] bg-sky-600 dark:bg-sky-500 rounded transition-transform origin-right scale-x-0 group-hover:origin-left group-hover:scale-x-100 duration-300 ease-in-out"></span>
          </Link>
        </div>
        <div className="col-span-2">
          <Link
            href="#"
            className="relative text-inherit no-underline after:content-[''] after:bg-sky-600 hover:after:bg-gradient-to-r hover:after:from-red-500 hover:after:via-pink-500 hover:after:to-blue-500 after:absolute after:bottom-0 after:left-0 after:w-full after:h-[3px] after:bg-no-repeat after:bg-[length:0%_3px] after:transition-[background-size] after:duration-1000 hover:after:bg-[length:100%_3px]"
          >
            Hover Me
          </Link>
        </div>
        <div className="col-span-2">
          <Link href="#" className="relative font-bold no-underline group">
            Hover Me
            <span className="absolute left-0 bottom-[3px] w-full h-[8px] dark:bg-sky-700 bg-sky-500 z-[-1] transition-all duration-300 ease-in-out group-hover:bottom-0 group-hover:h-full"></span>
          </Link>
        </div>
        <div className="col-span-2">
          <Link
            href="#"
            className="relative inline-block px-1 pr-3 -mx-1 text-sky-700 dark:text-sky-500 dark:hover:text-white font-bold text-md leading-[1.5] no-underline shadow-[inset_0_0_0_0_#04bbff] transition-all duration-300 ease-in-out hover:text-white hover:shadow-[inset_250px_0_0_0_#04bbff] w-full text-nowrap"
          >
            Hover Me
          </Link>
        </div>
      </div>
    ),
  },
];
