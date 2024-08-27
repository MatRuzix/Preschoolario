import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

import { authOptions } from "@/app/api/auth/[...nextauth]/options";
import PublicHeader from "@/src/features/headers/public/PublicHeader";

export default async function PublicLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const session = await getServerSession(authOptions);

  if (session) {
    redirect("/dashboard");
  }
  return (
    <div className="flex h-full w-full">
      <PublicHeader />
      {children}
    </div>
  );
}
