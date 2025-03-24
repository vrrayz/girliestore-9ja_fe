import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Wishlist",
  description: "Wishlist",
};

export default function WishlistLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return { children };
}
