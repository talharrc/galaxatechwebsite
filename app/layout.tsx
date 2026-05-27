import type { Metadata } from "next";
import { Syne, Inter } from "next/font/google";
import "./globals.css";

const syne = Syne({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-syne",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Galaxa Tech — Digital Ecosystem Agency | Audit, Optimize, Build",
  description:
    "Galaxa Tech audits your digital presence, identifies what's holding you back, and builds the systems that move you forward. Based in Dhaka, working globally.",
  keywords: [
    "digital agency",
    "digital audit",
    "web development",
    "app development",
    "AI automation",
    "brand design",
    "Notion systems",
    "Dhaka",
    "Bangladesh",
  ],
  openGraph: {
    title: "Galaxa Tech — Digital Ecosystem Agency",
    description: "Audit. Optimize. Build. Systems-driven creative tech agency.",
    type: "website",
    siteName: "Galaxa Tech",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${syne.variable} ${inter.variable}`}>
      <body className="font-sans">{children}</body>
    </html>
  );
}
