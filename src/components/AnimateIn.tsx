"use client";

import { motion } from "framer-motion";
import { cn } from "~/lib/cn.util";

export function AnimateIn({
  children,
  duration = 0.5,
  delay = 0,
  className,
}: {
  children: React.ReactNode;
  duration?: number;
  delay?: number;
  className?: string;
}) {
  return (
    <motion.div
      className={cn("h-full w-full", className)}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration, delay, ease: "easeInOut" }}
      exit={{ opacity: 0 }}
    >
      {children}
    </motion.div>
  );
}
