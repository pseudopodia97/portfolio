import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.scss";
import ContentContainer from "./core/ContentContainer";
import Header from "./core/Header";
import Footer from "./core/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Sarthak Chitade",
  description: "Hire a skilled web developer! Browse Sarthak Chitade's portfolio for creative & functional website design & development. Contact me today!",
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
