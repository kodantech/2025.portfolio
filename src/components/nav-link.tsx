"use client";

import { PLAY_ON_MOUNT, SCRAMBLE_AMOUNT } from "@/libs/constants/nav-link";
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
  const bgRef = useRef<HTMLSpanElement | null>(null);

  const { ref: textRef, replay: playScramble } = useScramble({
    text: item.title,
    scramble: SCRAMBLE_AMOUNT,
    playOnMount: PLAY_ON_MOUNT,
  });

  const { contextSafe } = useGSAP();

  const startAnimation = contextSafe(() => {
    gsap.set(textRef.current, { color: "black" });
    gsap.to(bgRef.current, { x: 0, autoAlpha: 1 });
    playScramble();
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
        className="absolute inset-0 -z-[1] block -translate-x-[101%] bg-white"
      />
    </Link>
  );
}
