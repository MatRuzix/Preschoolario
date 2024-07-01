import PublicHeader from "@/src/features/headers/public/PublicHeader";

export default function PublicLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="h-full w-full">
      <PublicHeader />
      {children}
    </div>
  );
}
