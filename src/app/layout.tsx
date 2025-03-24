import type { Metadata } from "next";
import "./globals.css";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { cookies } from "next/headers";
import { GoogleOAuthProvider } from "@react-oauth/google";
import StyledComponentsRegistry from "@/lib/registry";
import { config } from "@fortawesome/fontawesome-svg-core";
import { Providers } from "./providers";
import { Header } from "@/components/Header/Header";
import { Body } from "@/components/Styled";

config.autoAddCss = false;

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
      <body>
        <StyledComponentsRegistry>
          <GoogleOAuthProvider clientId={`${process.env.GOOGLE_CLIENT_ID}`}>
            {/* <Providers access_token={access_token}>{children}</Providers> */}
            <Providers>
              <Body>
                <Header displaySearch={true} />
                <section className="w-full max-w-[1200px] mx-auto px-[16px]">
                  {children}
                </section>
              </Body>
            </Providers>
          </GoogleOAuthProvider>
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
