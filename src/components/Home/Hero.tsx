import Image from "next/image";
import { BodySection, Section } from "./Section";
import { TypingAnimation } from "../FlashingMarriageText";
import Link from "next/link";
import { cn } from "~/lib/cn.util";
import { LINKS } from "~/lib/links";

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

export function Hero() {
  return (
    <Section id="home" className="w-full pt-0">
      <Image
        src="/wedding_svgs/Others/7.svg"
        width={200}
        height={200}
        alt="disco ball"
        className="h-[100px] w-[100px] lg:h-[200px] lg:w-[200px]"
      />

      <BodySection className="w-[200px] flex-1">
        <div className="flex justify-center">
          <h1 className="inline-block font-reinkies">
            <span className="text-[100px] leading-[80px]">Ruthie</span>
            <br />
            <span className="text-[80px] leading-[60px]">&</span>
            <span className="ml-8 text-[100px] leading-[100px]">Loz</span>
          </h1>
        </div>

        <div className="flex flex-col items-center px-2 text-2xl">
          <p>are</p>
          <p className="h-[85px] w-[250px] text-center text-pink1 lg:w-[380px]">
            <TypingAnimation />
          </p>
        </div>

        <div className="text-center text-base lg:text-lg">
          <p className="font-semibold">26 July 2025</p>
          <p>Water&apos;s Edge at Ewen</p>
          <p>Gloucestershire</p>
        </div>

        <div className="mt-4 flex w-full flex-col gap-2 text-center text-base lg:mt-8">
          <p className="">Please</p>
          <Link
            className={cn(
              "rounded-full",
              "flex items-center justify-center",
              "px-8 py-2",
              "text-[20px]",
              "flex items-center justify-center",
              "border border-black",
              "hover:border-pink1 hover:bg-pink1 hover:text-white",
            )}
            href={LINKS.rsvp}
            prefetch
          >
            RSVP
          </Link>
          <p className="mt-2">by 30 April 2025</p>
        </div>
      </BodySection>
    </Section>
  );
}
