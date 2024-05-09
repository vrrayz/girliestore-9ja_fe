import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../globals.css";
import { Body } from "@/components/Styled";
import { Header } from "@/components/Header";


export const metadata: Metadata = {
  title: "User Store",
  description: "User Store Section",
};

export default function StoreLayout({
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
