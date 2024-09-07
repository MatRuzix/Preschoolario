import React from "react";

import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

import PrivateHeader from "@/src/features/headers/private/admin/PrivateHeader";
import { authOptions } from "@/app/api/auth/[...nextauth]/options";
import Sidebar from "@/src/features/sidebar/components/Sidebar";

export default async function PrivateLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const session = await getServerSession(authOptions);

  if (!session) {
    redirect("/landing");
  }

  return (
    <div className="flex h-full w-full">
      <PrivateHeader />
      <Sidebar />
      <div id="outer-wrapper" className="flex h-full w-full pt-28 pb-6 pl-16">
        {children}
      </div>
    </div>
  );
}
