import type { Metadata } from "next";
import { AdminSidebar } from "@/components/Admin/AdminSidebar";

export const metadata: Metadata = {
  title: "Admin Area",
  description: "Admin Panel",
};

export default function StoreLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="my-[40px] lg:grid lg:grid-cols-[27.5%_72.5%] items-start">
      <AdminSidebar />
      {children}
    </div>
  );
}
