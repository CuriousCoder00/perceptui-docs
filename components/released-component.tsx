import React from "react";
import { Button } from "./ui/button";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

const ReleasedComponent = ({
  isNew,
  name,
  isReleased,
  isComponent,
  link,
}: {
  isNew?: boolean;
  name: string;
  isReleased?: boolean;
  isComponent?: boolean;
  link?: string;
}) => {
  return (
    <Button
      disabled={!isReleased && !isComponent}
      variant={"outline"}
      className="flex items-center border-l-4 border-l-zinc-500 hover:border-l-blue-600 w-full h-12 z-40"
    >
      {isComponent ? (
        <Link
          className="flex items-center justify-between w-full"
          href={`/docs/components/${name.toLowerCase()}`}
        >
          <h1 className="relative text-xl font-bold">
            {name}
            {isNew && (
              <span className="absolute top-0 -right-10 text-green-500 text-xs px-1 rounded-tl-md animate-pulse">
                New
              </span>
            )}
          </h1>
          <span>
            <ArrowRight />
          </span>
        </Link>
      ) : isReleased ? (
        <Link
          className="flex items-center justify-between w-full"
          href={`${link}`}
        >
          <h1 className="text-xl font-bold">{name}</h1>
          <span className="text-green-500 text-xs px-1 rounded-tl-md animate-pulse">
            Live Now
          </span>
        </Link>
      ) : (
        <div className="flex items-center justify-between w-full">
          <h1 className="text-xl font-bold">{name}</h1>
          <span className=" text-red-500 text-xs px-1 rounded-tl-md animate-pulse">
            Coming Soon
          </span>
        </div>
      )}
    </Button>
  );
};

export default ReleasedComponent;
