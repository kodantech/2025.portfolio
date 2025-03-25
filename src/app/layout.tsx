"use client";

import Header from "@/components/header";
import { initGlobalAnimations } from "@/libs/anim/global";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { IBM_Plex_Mono } from "next/font/google";
import Preloader from "@/components/preloader";

import "./globals.css";

const ibmPlexMono = IBM_Plex_Mono({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
  display: "swap",
});

gsap.registerPlugin(useGSAP); // register the hook to avoid React version discrepancies

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  useGSAP(initGlobalAnimations);

  return (
    <html lang="en">
      <head>
        <title>2025.Portfolio</title>
        <meta name="description" content="My Portfolio in 2025" />
        {/* <ReactScan /> */}
      </head>
      <body className={`${ibmPlexMono.className} antialiased select-none`}>
        <div className="magic-mouse pointer-events-none fixed top-0 left-0 z-[9999] h-10 w-10 -translate-1/2 rounded-full border-2 border-white" />
        <Preloader />
        <Header />
        <main className="text-white">{children}</main>
      </body>
    </html>
  );
}
