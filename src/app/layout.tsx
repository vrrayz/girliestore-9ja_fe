import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";
import { cookies } from "next/headers";
import { GoogleOAuthProvider } from "@react-oauth/google";
import { Body } from "@/components/Styled";
import { Header } from "@/components/Header";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const access_token = cookies().get("access_token")?.value;
  return (
    <html lang="en">
      <body className={inter.className}>
        <GoogleOAuthProvider clientId={`${process.env.GOOGLE_CLIENT_ID}`}>
          {/* <Providers access_token={access_token}>{children}</Providers> */}
          <Body>
            <Header displaySearch={true} />
            <div></div>
            {children}
          </Body>
        </GoogleOAuthProvider>
      </body>
    </html>
  );
}
