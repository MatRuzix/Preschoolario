"use client";

import Link from "next/link";
import { signOut } from "next-auth/react";
import { useSession } from "next-auth/react";
import Image from "next/image";

import Logo from "@/src/icons/Logo";
import { Button } from "@/src/components";

const PrivateHeader = () => {
  const session = useSession();

  return (
    <div className="fixed flex w-full h-20 px-10 bg-gradient-to-r from-schoolarioOrange from-20% to-gray-200 to-40% backdrop-blur-md justify-between border-b-4">
      <Link href="/landing" className="flex">
        <Logo />
      </Link>
      <div className="flex space-x-12 items-center">
        <div className="flex items-center space-x-4 px-2 border-2 border-black">
          {/* @ts-ignore */}
          <p>{`${session.data?.user?.firstName} ${session.data?.user?.lastName}`}</p>
          <Image src="/stock_avatar.jpg" alt="avatar" width={40} height={40} />
        </div>
        <div className="flex flex-col space-y-1">
          <Button
            name="Konto"
            variant="black"
            fontColor="white"
            className="flex w-20 justify-center items-center text-xs"
            onClick={() => {
              signOut();
            }}
          />
          <Button
            name="Ustawienia"
            variant="black"
            fontColor="white"
            className="flex w-20 justify-center items-center text-xs"
            onClick={() => {
              signOut();
            }}
          />
        </div>

        <Button
          name="Wyloguj się"
          variant="transparent"
          fontColor="black"
          className="flex w-40 h-3/4 justify-center items-center text-l border-4 border-black hover:border-slate-600"
          onClick={() => {
            signOut();
          }}
        />
      </div>
    </div>
  );
};

export default PrivateHeader;
