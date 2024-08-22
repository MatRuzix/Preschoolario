"use client";

import Link from "next/link";
import { signOut } from "next-auth/react";

import Logo from "@/src/icons/Logo";
import { Button } from "@/src/components";
import { HeaderLink } from "@/src/components";

const PrivateHeader = () => {
  return (
    <div className="fixed flex w-full h-20 px-10 bg-gradient-to-r from-schoolarioOrange from-20% to-gray-200 to-40% backdrop-blur-md justify-between border-b-4">
      <Link href="/landing" className="flex">
        <Logo />
      </Link>
      <div className="flex space-x-16">
        <HeaderLink href="/aboutUs" text="O nas" />
        <Link
          href="/news"
          className="flex justify-center items-center text-xl hover:zoom-in-50"
        >
          Aktualności
        </Link>
        <Link
          href="/contactUs"
          className="flex justify-center items-center text-xl"
        >
          Kontakt
        </Link>
        <Button
          name="Wyloguj się"
          className="flex justify-center items-center text-xl"
          onClick={() => {
            signOut();
          }}
        />
      </div>
    </div>
  );
};

export default PrivateHeader;
