import PublicHeader from "@/src/features/headers/public/PublicHeader";

export default function PublicLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      <PublicHeader />
      {children}
    </div>
  );
}
