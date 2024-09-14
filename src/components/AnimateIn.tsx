"use client";

import { motion } from "framer-motion";

export function AnimateIn({
  children,
  duration,
  className,
}: {
  children: React.ReactNode;
  duration?: number;
  className?: string;
}) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: duration ?? 0.5, ease: "easeInOut" }}
      exit={{ opacity: 0 }}
    >
      {children}
    </motion.div>
  );
}
