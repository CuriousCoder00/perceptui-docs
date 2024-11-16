import Link from "next/link";
import React from "react";
const Footer = () => {
  return (
    <div className="flex justify-between items-center w-full">
      <div className="flex gap-2">
        {new Date().getFullYear()} © <Link href={"/"}>Percept UI</Link>
      </div>
      <div className="flex gap-1"></div>
    </div>
  );
};

export default Footer;
