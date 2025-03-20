"use client";

import { createNumberArray } from "@/libs/utils/array";

const numbArray = createNumberArray(10);

export default function Preloader() {
  const renderSplitText = (text: string) => {
    return text.split("").map((char) => (
      <span
        key={char}
        className="inline-block translate-y-[101%] text-5xl leading-none font-medium text-white"
      >
        {char}
      </span>
    ));
  };

  return (
    <section className="preloader fixed inset-0 z-50 h-full w-full">
      {/* Top Background with `danko` text */}
      <div className="bg-primary top-bg absolute inset-0 top-0 -z-[10] flex h-1/2 w-full flex-col items-center justify-end">
        <p className="heading mb-10 flex w-fit items-center overflow-hidden text-center">
          {renderSplitText("danko")}
        </p>
      </div>
      {/* Bottom Background with `tech` text */}
      <div className="bg-primary bottom-bg absolute inset-0 top-1/2 -z-[10] flex h-1/2 w-full flex-col items-center">
        <p className="heading mt-10 flex w-fit items-center overflow-hidden text-center">
          {renderSplitText("tech")}
        </p>
      </div>

      <div className="progress absolute right-20 bottom-10 left-20 flex w-0 items-end gap-1">
        <div className="bar mb-4 h-1 w-full rounded-lg bg-white" />
        <div className="flex shrink-0 items-end overflow-hidden text-white">
          <span className="first-digits w-fit translate-y-full text-9xl leading-none font-bold">
            1
          </span>

          <div className="mid-digits flex h-32 flex-col">
            {numbArray.map((num) => (
              <span key={num} className="w-fit text-9xl leading-none font-bold">
                {num}
              </span>
            ))}
            <span className="w-fit text-9xl leading-none font-bold">0</span>
          </div>

          <div className="last-digits flex h-32 flex-col">
            {numbArray.map((num) => (
              <span key={num} className="w-fit text-9xl leading-none font-bold">
                {num}
              </span>
            ))}
            <span className="w-fit text-9xl leading-none font-bold">0</span>
          </div>

          <span className="percentage inline-block text-8xl leading-none font-light">
            %
          </span>
        </div>
      </div>
    </section>
  );
}
