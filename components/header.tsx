import Link from "next/link";
import React from "react";
import { FaGithub } from "react-icons/fa6";

const Header = () => {
  return (
    <header className="fixed top-0 px-4 py-6 bg-black w-full md:px-12 shadow-lg border-b z-50">
      <nav className="flex justify-between items-center w-full">
        <Link href="/" className="text-2xl font-bold">
          Percept UI
        </Link>
        <div className="flex items-center space-x-4">
          <Link href="/docs" className="font-medium hover:underline">
            Documentation
          </Link>
          <Link href="/templates" className="font-medium hover:underline">
            Templates
          </Link>
          <Link href="/framer" className="font-medium hover:underline">
            Framer Components
          </Link>
          <Link
            href="https://github.com/perceptui/ui"
            className="text-sm font-medium hover:underline"
          >
            <FaGithub className="h-6 w-6" />
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Header;
