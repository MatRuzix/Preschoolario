"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

import clsx from "clsx";

type SidebarLinkProps = {
  name: string;
  icon: React.ReactNode;
  path: string;
  isSidebarOpen: boolean;
};

const SidebarLink: React.FC<SidebarLinkProps> = ({
  name,
  icon,
  path,
  isSidebarOpen,
}) => {
  const pathname = usePathname();

  return (
    <Link href={path}>
      <div
        id="sidebarLinkWrapper"
        className={clsx(
          "flex w-full h-5 space-x-5 transition-all duration-75 delay-75",
          {
            "w-16 hover:scale-125": !isSidebarOpen,
            "w-60 hover:translate-x-2 hover:scale-110": isSidebarOpen,
            " text-white": pathname != `/pl${path}`,
            "text-schoolarioOrange": pathname == `/pl${path}`,
          }
        )}
      >
        <div
          id="iconBox"
          className="pl-6 w-10 h-6 z-40 bg-gradient-to-r from-gray-800 from-55% to-transparent to-65%"
        >
          {icon}
        </div>
        <p
          id="linkText"
          className={clsx("z-30 transition-all", {
            "-translate-x-44": !isSidebarOpen,
            "duration-500 ease-out delay-200": isSidebarOpen,
          })}
        >
          {name}
        </p>
      </div>
    </Link>
  );
};

export default SidebarLink;
