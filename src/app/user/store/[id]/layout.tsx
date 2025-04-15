import type { Metadata } from "next";
import { Sidebar } from "@/components/Store/Sidebar";

export const metadata: Metadata = {
  title: "User Store",
  description: "User Store Section",
};

export default function StoreLayout({
  params,
  children,
}: {
  params: { id: string };
  children: React.ReactNode;
}) {
  return (
    <div className="my-[40px] lg:grid lg:grid-cols-[27.5%_72.5%] items-start">
      <Sidebar id={params.id} />
      {children}
    </div>
  );
}
