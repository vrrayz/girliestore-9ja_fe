import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../globals.css";
import { Body } from "@/components/Styled";
import { Header } from "@/components/Header";

export const metadata: Metadata = {
  title: "Cart Items",
  description: "All your cart items",
};

export default function CartLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Body headerSpace={80}>
      <Header displaySearch={false} />
      <div></div>
      {children}
    </Body>
  );
}
