"use client";

import {
  CalendarIcon,
  CarTaxiFront,
  CastleIcon,
  CircleHelpIcon,
  GiftIcon,
  PartyPopperIcon,
  PhoneIcon,
  TreesIcon,
} from "lucide-react";
import { usePathname } from "next/navigation";

const homepageLinks = [
  {
    name: "rsvp",
    id: "home",
    icon: PartyPopperIcon,
  },
  {
    name: "venue",
    id: "venue",
    icon: TreesIcon,
  },
  {
    name: "taxis",
    id: "taxis",
    icon: CarTaxiFront,
  },
  {
    name: "schedule",
    id: "schedule",
    icon: CalendarIcon,
  },
  {
    name: "accomm.",
    id: "accommodation",
    icon: CastleIcon,
  },
  {
    name: "gifts",
    id: "gifts",
    icon: GiftIcon,
  },
  {
    name: "faq",
    id: "faqs",
    icon: CircleHelpIcon,
  },
  {
    name: "contact",
    id: "contact",
    icon: PhoneIcon,
  },
];

export function HomepageNav() {
  const pathname = usePathname();

  console.log("pathname", pathname);

  return (
    <nav className="h-screen w-[68px]">
      <ul className="flex h-full w-full flex-col border-r-2 border-slate-100">
        {homepageLinks.map((link) => {
          const Icon = link.icon;

          return (
            <li key={link.name} className="w-full flex-1">
              <button
                onClick={() => {
                  const element = document.getElementById(link.id);
                  element?.scrollIntoView({ behavior: "smooth" });
                }}
                className="flex h-full w-full flex-col items-center justify-center gap-1 hover:bg-slate-100"
              >
                <Icon />
                <span className="text-[10px] uppercase">{link.name}</span>
              </button>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
