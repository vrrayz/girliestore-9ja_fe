import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { cookies } from "next/headers";
import { GoogleOAuthProvider } from "@react-oauth/google";
import StyledComponentsRegistry from "@/lib/registry";
import { config } from "@fortawesome/fontawesome-svg-core";
import { Providers } from "./providers";

const inter = Inter({ subsets: ["latin"] });
config.autoAddCss = false;

export const metadata: Metadata = {
  title: "Girliestore 9ja",
  description: "Empower your style, Embrace your elegance",
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
        <StyledComponentsRegistry>
          <GoogleOAuthProvider clientId={`${process.env.GOOGLE_CLIENT_ID}`}>
            {/* <Providers access_token={access_token}>{children}</Providers> */}
            <Providers>{children}</Providers>
          </GoogleOAuthProvider>
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
