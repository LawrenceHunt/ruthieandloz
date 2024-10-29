"use client";

import Image from "next/image";
import Link from "next/link";
import { cn } from "~/lib/cn.util";

const homepageLinks = [
  {
    name: "rsvp",
    id: "home",
    imageSrc: "/wedding_svgs/Others/7.svg",
  },
  {
    name: "R & L",
    id: "r_and_l",
    imageSrc: "/wedding_svgs/Cupids/3.svg",
  },
  {
    name: "venue",
    id: "venue",
    imageSrc: "/wedding_svgs/Others/4.svg",
  },
  {
    name: "schedule",
    id: "schedule",
    imageSrc: "/wedding_svgs/Dinner/Drinks/3.svg",
  },
  {
    name: "accomm.",
    id: "accommodation",
    imageSrc: "/wedding_svgs/Candles/9.svg",
  },
  {
    name: "taxis",
    id: "taxis",
    imageSrc: "/wedding_svgs/Others/8.svg",
  },
  {
    name: "gifts",
    id: "gifts",
    imageSrc: "/wedding_svgs/Others/9.svg",
  },
  {
    name: "faqs",
    id: "faqs",
    imageSrc: "/wedding_svgs/Dinner/Cakes/2.svg",
  },
  {
    name: "contact",
    id: "contact",
    imageSrc: "/wedding_svgs/Others/5.svg",
  },
];

export function HomepageNav({ className }: { className?: string }) {
  return (
    <nav className={cn("h-screen", className)}>
      <ul className="flex h-full w-full flex-col border-r border-dashed border-slate-800">
        {homepageLinks.map((link) => {
          return (
            <li key={link.name} className="w-full flex-1">
              <Link
                href={`#${link.id}`}
                className="flex h-full w-full flex-col items-center justify-center gap-1 hover:bg-pink1/10"
              >
                <Image width={30} height={30} src={link.imageSrc} alt="image" />
                <span className="text-[10px] uppercase">{link.name}</span>
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
