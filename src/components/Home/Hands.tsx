import Image from "next/image";

export function Hands() {
  return (
    <div className="pointer-events-none absolute left-0 top-0 z-[-1] hidden h-screen w-full md:block">
      <div className="relative h-full w-full">
        <div className="absolute left-0 top-0 flex h-full flex-col justify-between">
          <Image
            src="/wedding_svgs/Dinner/Hands/1.svg"
            alt="hand"
            width={200}
            height={200}
          />
          <Image
            src="/wedding_svgs/Dinner/Hands/3.svg"
            alt="hand"
            width={200}
            height={200}
          />
          <Image
            src="/wedding_svgs/Dinner/Hands/4.svg"
            alt="hand"
            width={200}
            height={200}
          />
        </div>

        <div className="absolute right-0 top-0 flex h-full flex-col justify-between">
          <Image
            src="/wedding_svgs/Dinner/Hands/2.svg"
            alt="hand"
            width={200}
            height={200}
          />
          <Image
            src="/wedding_svgs/Dinner/Hands/5.svg"
            alt="hand"
            width={200}
            height={200}
          />
          <Image
            src="/wedding_svgs/Dinner/Hands/8.svg"
            alt="hand"
            width={200}
            height={200}
          />
        </div>
      </div>
    </div>
  );
}
