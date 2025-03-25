"use client";

import { createNumberArray } from "@/libs/utils/array";

const numbArray = createNumberArray(10);

export default function Preloader() {
  const renderSplitText = (text: string) => {
    return text.split("").map((char) => (
      <span
        key={char}
        className="inline-block translate-y-[101%] text-[5vw] leading-none font-medium"
      >
        {char}
      </span>
    ));
  };

  return (
    <section className="preloader fixed inset-0 z-50 h-full w-full">
      {/* Top Background with `danko` text */}
      <div className="preloader-bg-top absolute inset-0 top-0 -z-[10] flex h-1/2 w-full flex-col items-center justify-end bg-white">
        <p className="preloader-heading mb-10 flex w-fit items-center overflow-hidden text-center">
          {renderSplitText("danko")}
        </p>
      </div>
      {/* Bottom Background with `tech` text */}
      <div className="preloader-bg-bottom absolute inset-0 top-1/2 -z-[10] flex h-1/2 w-full flex-col items-center bg-white">
        <p className="preloader-heading mt-10 flex w-fit items-center overflow-hidden text-center">
          {renderSplitText("tech")}
        </p>
      </div>

      <div className="preloader-progress absolute right-20 bottom-10 left-20 flex w-0 items-end gap-1">
        <div className="mb-4 h-1 w-full rounded-lg bg-black" />
        <div className="flex shrink-0 items-end overflow-hidden">
          <span className="preloader-percent-first-digits w-fit translate-y-full text-[9vw] leading-none font-bold">
            1
          </span>

          <div className="preloader-percent-mid-digits flex h-[9vw] flex-col">
            {numbArray.map((num) => (
              <span
                key={num}
                className="w-fit text-[9vw] leading-none font-bold"
              >
                {num}
              </span>
            ))}
            <span className="w-fit text-[9vw] leading-none font-bold">0</span>
          </div>

          <div className="preloader-percent-last-digits flex h-[9vw] flex-col">
            {numbArray.map((num) => (
              <span
                key={num}
                className="w-fit text-[9vw] leading-none font-bold"
              >
                {num}
              </span>
            ))}
            <span className="w-fit text-[9vw] leading-none font-bold">0</span>
          </div>

          <span className="inline-block text-[8vw] leading-none font-light">
            %
          </span>
        </div>
      </div>
    </section>
  );
}
