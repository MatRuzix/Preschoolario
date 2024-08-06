"use client";

import React from "react";
import { SessionProvider } from "next-auth/react";
import { SnackbarProvider } from "notistack";
import { Session } from "next-auth";
import { Spinner } from "flowbite-react";

type AppProviderProps = {
  children: React.ReactNode;
  session: Session | null;
};

const AppProvider = ({ children, session }: AppProviderProps) => {
  return (
    <React.Suspense fallback={<Spinner color="info" size="xl" />}>
      <SessionProvider session={session}>
        <SnackbarProvider>{children}</SnackbarProvider>
      </SessionProvider>
    </React.Suspense>
  );
};

export default AppProvider;
