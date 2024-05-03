import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { url } from "inspector";
import Image from "next/image";
import bg from "@/public/bg.jpg";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Spline",
  description:
    "Where Content Comes Full Circle ! Transform one idea into ready-to-post content for blogs, social media, and YouTube, saving you hours of effort.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
