"use client";

import Header from "@/components/header";
import Preloader from "@/components/preloader";
import { initPreloader } from "@/libs/anim/preloader";
import { ReactScan } from "@/react-scan";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { IBM_Plex_Mono } from "next/font/google";
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
  useGSAP(initPreloader);

  return (
    <html lang="en">
      <head>
        <title>2025.Portfolio</title>
        <meta name="description" content="My Portfolio in 2025" />
        <ReactScan />
      </head>
      <body className={`${ibmPlexMono.className} antialiased`}>
        <Preloader />
        <Header />
        {children}
      </body>
    </html>
  );
}
