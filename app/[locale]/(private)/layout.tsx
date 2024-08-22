import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

import PrivateHeader from "@/src/features/headers/private/admin/PrivateHeader";
import { authOptions } from "@/app/api/auth/[...nextauth]/options";

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
    <div>
      <PrivateHeader />
      {children}
    </div>
  );
}
