"use client";

import { AnimateIn } from "~/components/AnimateIn";

export default function Template({ children }: { children: React.ReactNode }) {
  return <AnimateIn>{children}</AnimateIn>;
}
