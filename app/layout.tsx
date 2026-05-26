import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-poppins",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Galaxa Tech — Ecosystems, Optimized.",
  description:
    "Galaxa Tech builds digital ecosystems that generate, optimize, and scale revenue for modern businesses. Web development, AI automation, digital marketing, and more.",
  keywords: [
    "digital agency",
    "web development",
    "AI automation",
    "digital marketing",
    "app development",
    "brand design",
    "Notion systems",
  ],
  openGraph: {
    title: "Galaxa Tech — Ecosystems, Optimized.",
    description:
      "We build digital ecosystems that generate, optimize, and scale revenue for modern businesses.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={poppins.variable}>
      <body>{children}</body>
    </html>
  );
}
