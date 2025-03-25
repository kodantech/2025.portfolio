import Image from "next/image";

export default function HireMe() {
  return (
    <div className="qr flex w-full origin-[center_right] items-center justify-end px-8">
      <div className="flex flex-1 flex-col text-[1.7vw]">
        <p className="flex items-center gap-6">
          <span className="indicator" />
          Wanna talk?
        </p>
        <p className="self-end text-[2vw] font-semibold">My CV →</p>
      </div>

      <Image
        alt="Scan QR to get CV"
        src="/images/qr.svg"
        width={1}
        height={1}
        className="h-[20vw] w-[20vw]"
      />
    </div>
  );
}
