"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const MARRIAGE_EXPRESSIONS = [
  "getting married",
  "jumping the broom",
  "putting a ring on it",
  "tying the knot",
  "getting hitched",
  "taking the plunge",
  "celebrating their nuptials",
  "saying “I do”",
  "becoming one",
  "becoming Mr & Mrs",
  "upgrading their home insurance",
  "making it official",
  "getting spliced",
  "sailing into the sunset",
  "becoming husband and wife",
  "walking down the aisle",
  "joining in holy matrimony",
  "plighting one's troth",
  "dropping anchor",
  "deleting the apps",
  "sharing dessert forever",
  "going fully legal",
  "taking their vows",
  "locking it down",
  "updating their relationship status",
  "sealing the deal",
  "sharing a Netflix account",
];

function getRandomMarriageExpression() {
  return MARRIAGE_EXPRESSIONS[
    Math.floor(Math.random() * MARRIAGE_EXPRESSIONS.length)
  ]!;
}

export function FlashingMarriageText() {
  // A bit of animated text to show the different ways to say "getting married".
  // Every 3 seconds, the text will change to a different expression.
  // This will loop through all the expressions and then start again.

  const [currentExpression, setCurrentExpression] = useState<string>(
    MARRIAGE_EXPRESSIONS[0]!,
  );

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentExpression(getRandomMarriageExpression());
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return currentExpression === null ? null : (
    <motion.span
      key={currentExpression}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 2, ease: "easeInOut" }}
      className="text-center text-pink1"
    >
      {currentExpression}
    </motion.span>
  );
}
