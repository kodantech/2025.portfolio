"use client";

export default function Loader() {
  return (
    <section className="fixed inset-0 z-50 h-full w-full">
      <h1 className="absolute top-1/2 left-1/2 w-full -translate-1/2 text-center text-[12.5rem] font-semibold">
        Dankotech
      </h1>
      <div className="bg-secondary loader-top-bg absolute inset-0 top-0 h-1/2 w-full" />
      <div className="loader-line absolute top-1/2 left-0 z-50 h-[0.03125rem] bg-black" />
      <div className="bg-secondary loader-bottom-bg absolute inset-0 top-1/2 h-1/2 w-full" />

      <div className="absolute right-10 bottom-10 overflow-hidden">
        <span className="loader-percentage-num inline-block text-[11rem] leading-none font-semibold">
          100
        </span>
        <span className="loader-percentage inline-block text-9xl leading-none font-light">
          %
        </span>
      </div>
    </section>
  );
}
