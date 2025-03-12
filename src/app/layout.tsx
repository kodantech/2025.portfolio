import Header from "@/components/header";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import type { Metadata } from "next";
import { IBM_Plex_Mono } from "next/font/google";
import "./globals.css";
import Script from "next/script";

const ibmPlexMono = IBM_Plex_Mono({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "2025.Portfolio",
  description: "My Portfolio in 2025",
};

gsap.registerPlugin(useGSAP); // register the hook to avoid React version discrepancies

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <Script
          src="//unpkg.com/react-scan/dist/auto.global.js"
          crossOrigin="anonymous"
        />
      </head>
      <body className={`${ibmPlexMono.className} antialiased`}>
        <Header />
        {children}
      </body>
    </html>
  );
}
