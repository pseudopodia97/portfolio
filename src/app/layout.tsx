import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.scss";
import ContentContainer from "./core/ContentContainer";
import Header from "./core/Header";
import Footer from "./core/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Sarthak Chitade",
  description: "Front-End Developer Portfolio | Build beautiful, user-friendly web experiences. Hire me for your next project!",
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
