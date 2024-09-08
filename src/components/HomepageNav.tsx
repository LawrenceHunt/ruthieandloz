"use client";

import {
  CalendarIcon,
  CarTaxiFront,
  CircleHelpIcon,
  GiftIcon,
  HouseIcon,
  LuggageIcon,
  ParkingCircleIcon,
  PartyPopperIcon,
  PhoneIcon,
  TrainFrontIcon,
  TreesIcon,
} from "lucide-react";
import Link from "next/link";

const homepageLinks = [
  {
    name: "top",
    id: "hero",
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
    name: "accommodation",
    id: "accommodation",
    icon: HouseIcon,
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
  return (
    <nav className="h-screen w-[40px]">
      <ul className="flex h-full w-full flex-col">
        {homepageLinks.map((link) => {
          const Icon = link.icon;

          return (
            <li key={link.name} className="w-full flex-1">
              <button
                onClick={() => {
                  const element = document.getElementById(link.id);
                  element?.scrollIntoView({ behavior: "smooth" });
                }}
                className="flex h-full w-full items-center justify-center rounded-r-lg hover:bg-slate-100"
              >
                <Icon />
              </button>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
