import type { Metadata } from "next";
import "../globals.css";
export const metadata: Metadata = {
  title: "Products",
  description: "All GS9ja Products",
};

export default function ProductsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
