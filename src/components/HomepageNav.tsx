"use client";

import Image from "next/image";

const homepageLinks = [
  {
    name: "rsvp",
    id: "home",
    imageSrc: "/wedding_svgs/Others/7.svg",
  },
  {
    name: "venue",
    id: "venue",
    imageSrc: "/wedding_svgs/Others/4.svg",
  },
  {
    name: "taxis",
    id: "taxis",
    imageSrc: "/wedding_svgs/Others/8.svg",
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

export function HomepageNav() {
  return (
    <nav className="h-screen w-[68px]">
      <ul className="flex h-full w-full flex-col border-r border-dashed border-slate-800">
        {homepageLinks.map((link) => {
          return (
            <li key={link.name} className="w-full flex-1">
              <button
                onClick={() => {
                  const element = document.getElementById(link.id);
                  element?.scrollIntoView({ behavior: "smooth" });
                }}
                className="flex h-full w-full flex-col items-center justify-center gap-1 hover:bg-slate-100"
              >
                <Image width={40} height={40} src={link.imageSrc} alt="image" />
                <span className="text-[10px] uppercase">{link.name}</span>
              </button>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
