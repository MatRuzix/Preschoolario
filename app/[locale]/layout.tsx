import type { Metadata } from "next";
import { Alfa_Slab_One, Inter } from "next/font/google";
import React from "react";

import clsx from "clsx";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { getServerSession } from "next-auth";
import { Spinner } from "flowbite-react";

import { authOptions } from "../api/auth/[...nextauth]/options";
import AppProvider from "@/lib/providers/AppProvider";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });
export const alfaSlab = Alfa_Slab_One({ weight: "400", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Prescoolario",
  description: "Application for preschools.",
};

export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: { locale: string };
}>) {
  const messages = await getMessages();
  const session = await getServerSession(authOptions);

  return (
    <html lang="en">
      <body
        className={clsx(
          inter.className,
          alfaSlab.className,
          "bg-gray-800 h-screen w-screen"
        )}
      >
        <NextIntlClientProvider messages={messages}>
          <AppProvider session={session}> {children}</AppProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
