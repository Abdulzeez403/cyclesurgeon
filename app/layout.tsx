import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { HomeLayout } from "../app/homelayout";
import { Footer } from "./home/footer";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Cycle Surgeon",
  description:
    "Dealing in selling and buying in all bicyle parts as well as reparing them",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <HomeLayout />

        {children}
        <Footer />
      </body>
    </html>
  );
}
