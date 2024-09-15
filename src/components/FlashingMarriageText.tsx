"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { cn } from "~/lib/cn.util";

const MARRIAGE_EXPRESSIONS = [
  "tying the knot",
  "getting hitched",
  "saying 'I do'",
  "getting married",
  "becoming one",
  "becoming Mr & Mrs",
  "upgrading their home contents insurance",
  "making it official",
  "getting spliced",
  "getting wed",
  "joining hands in marriage",
  "becoming husband and wife",
  "walking down the aisle",
  "joining in holy matrimony",
  "becoming an item",
];

function getRandomMarriageExpression() {
  return MARRIAGE_EXPRESSIONS[
    Math.floor(Math.random() * MARRIAGE_EXPRESSIONS.length)
  ] as string;
}

export function FlashingMarriageText() {
  // A bit of animated text to show the different ways to say "getting married".
  // Every 3 seconds, the text will change to a different expression.
  // This will loop through all the expressions and then start again.

  const [currentExpression, setCurrentExpression] = useState<string>(
    MARRIAGE_EXPRESSIONS[0] as string,
  );

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentExpression(getRandomMarriageExpression());
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return currentExpression === null ? null : (
    <motion.span
      key={currentExpression}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 3 }}
      //   className={cn("animate-pulse")}
    >
      {currentExpression}
    </motion.span>
  );
}
