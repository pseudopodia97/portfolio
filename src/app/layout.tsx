import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.scss";
import ContentContainer from "./core/ContentContainer";
import Header from "./core/Header";
import Footer from "./core/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Sarthak Chitade",
  description: "Sarthak Chitade, Senior Frontend Engineer in Pune. React, Next.js, Angular and TypeScript, micro-frontends, web performance and AI agents for engineering workflows.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
        <body className={inter.className}>
        <Header/>
          <ContentContainer>
            {children}
          </ContentContainer>
        <Footer/>
        </body>
    </html>
  );
}
