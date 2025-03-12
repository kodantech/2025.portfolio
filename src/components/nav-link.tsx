"use client";

import {
  SHOULD_SHUFFLE_ON_MOUNTED,
  TOTAL_SHUFFLE_EACH_CHARACTER,
} from "@/libs/constants/nav-link";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import Link from "next/link";
import { useRef } from "react";
import { useScramble } from "use-scramble";

export default function NavLink({
  item,
}: {
  item: { title: string; href: string };
}) {
  const containerRef = useRef<HTMLAnchorElement | null>(null);
  const bgRef = useRef<HTMLSpanElement | null>(null);

  const { ref: textRef, replay: startShuffleTextAnimation } = useScramble({
    text: item.title,
    scramble: TOTAL_SHUFFLE_EACH_CHARACTER,
    playOnMount: SHOULD_SHUFFLE_ON_MOUNTED,
  });

  const { contextSafe } = useGSAP({ scope: containerRef });

  const startAnimation = contextSafe(() => {
    gsap.set(textRef.current, { color: "black" });
    gsap.to(bgRef.current, { x: 0, autoAlpha: 1 });
    startShuffleTextAnimation();
  });

  const exitAnimation = contextSafe(() => {
    gsap.set(textRef.current, { color: "white" });
    gsap.to(bgRef.current, {
      x: "101%",
      onComplete() {
        gsap.set(bgRef.current, { x: "-101%", autoAlpha: 0 });
      },
    });
  });

  return (
    <Link
      ref={containerRef}
      href={item.href}
      className="relative inline-block overflow-hidden uppercase"
      onMouseEnter={startAnimation}
      onMouseLeave={exitAnimation}
    >
      <span ref={textRef} className="text-white uppercase">
        {item.title}
      </span>
      <span
        ref={bgRef}
        className="absolute inset-0 -z-[1] block -translate-x-full bg-white"
      />
    </Link>
  );
}
