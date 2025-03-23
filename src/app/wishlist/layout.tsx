import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../globals.css";
import { Body } from "@/components/Styled";
import { Header } from "@/components/Header/Header";

export const metadata: Metadata = {
  title: "Wishlist",
  description: "Wishlist",
};

export default function WishlistLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Body>
      <Header displaySearch={true} />
      <section className="w-full max-w-[1200px] mx-auto px-[16px]">
        {children}
      </section>
    </Body>
  );
}
