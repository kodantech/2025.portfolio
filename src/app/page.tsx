"use client";

import BigTitle from "@/components/big-title";
import HireMe from "@/components/hire-me";

export default function Home() {
  return (
    <>
      <div className="flex w-full flex-col">
        <div className="flex flex-col overflow-hidden">
          <BigTitle text="DANG">
            <HireMe />
          </BigTitle>

          <span className="horizontal-line block h-px w-full bg-white"></span>

          <BigTitle text="KHOA" align="right">
            <p className="bio flex items-center p-8 text-[1.4vw]">
              {`A web developer specializing in front-end development with 3+ years of experience. 
                I'm enthusiastic about web development and eager to apply new skills and the latest technologies.`}
            </p>
          </BigTitle>
        </div>

        <div className="flex flex-col gap-2">
          <div className="horizontal-line h-px bg-white" />
          <div className="flex w-full items-center justify-around overflow-hidden text-[1.4vw]">
            <p className="text-slide-up">web design</p>
            <p className="text-slide-up">&copy;{new Date().getFullYear()}</p>
            <p className="text-slide-up">developer</p>
          </div>
        </div>

        <div className="horizontal-line mt-2 h-px bg-white" />
      </div>

      <div className="scroll mx-auto mt-8 flex flex-col items-center gap-8">
        <div className="shrink-0 overflow-hidden">
          <p className="animate-up-down text-[1.5vw] uppercase">
            {"{ scroll to explore }"}
          </p>
        </div>

        <div className="scroll-it relative h-[10vw] w-0.5 overflow-hidden rounded-full bg-white"></div>
      </div>
    </>
  );
}
