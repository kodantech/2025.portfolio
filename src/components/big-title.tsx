"use client";

import { cn } from "@/libs/utils/cn";
import { PropsWithChildren, useMemo } from "react";

type Align = "left" | "right";

type Props = PropsWithChildren & {
  align?: Align;
  text: string;
};

export default function BigTitle({ align = "left", text, children }: Props) {
  const chars = useMemo(() => text.split(""), [text]);
  const alignLeft = useMemo(() => align === "left", [align]);

  return (
    <div className={cn("flex", { "flex-end": align === "right" })}>
      {!alignLeft && children}

      <p className="name relative flex w-fit shrink-0 items-center overflow-hidden border-white px-8 font-bold tracking-wider uppercase">
        {!alignLeft && (
          <span className="vertical-line absolute top-0 left-0 block w-px bg-white"></span>
        )}

        {chars.map((char, i) => (
          <span className="char block text-[22vw] leading-none" key={i}>
            {char}
          </span>
        ))}

        {alignLeft && (
          <span className="vertical-line absolute top-0 right-0 block w-px bg-white"></span>
        )}
      </p>

      {alignLeft && children}
    </div>
  );
}
