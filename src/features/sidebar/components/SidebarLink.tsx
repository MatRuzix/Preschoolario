import React from "react";
import Link from "next/link";

type SidebarLinkProps = {
  name: string;
  icon: React.ReactNode;
  path: string;
};

const SidebarLink: React.FC<SidebarLinkProps> = ({ name, icon, path }) => {
  return (
    <Link href={path}>
      <div className="flex w-3/4 h-5 space-x-5 ml-5 text-white hover:scale-110 hover:translate-x-2 transition-all duration-75 bg-gray-800">
        <div className="w-4 h-4 z-40"> {icon}</div>
        <p className="z-30 transition-all">{name}</p>
      </div>
    </Link>
  );
};

export default SidebarLink;
