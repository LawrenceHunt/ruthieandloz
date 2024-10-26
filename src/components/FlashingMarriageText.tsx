"use client";

import { useEffect, useState } from "react";

const MARRIAGE_EXPRESSIONS = [
  "getting married",
  "jumping the broom",
  "putting a ring on it",
  "tying the knot",
  "getting hitched",
  "taking the plunge",
  "celebrating their nuptials",
  "saying “I do”",
  "becoming Mr. and Mrs.",
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
  "signing the papers",
  "consciously coupling",
];

export function TypingAnimation({
  words = MARRIAGE_EXPRESSIONS,
}: {
  words?: string[];
}) {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [currentLetterIndex, setCurrentLetterIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const [usedIndices, setUsedIndices] = useState<number[]>([]);

  useEffect(() => {
    const handleTyping = () => {
      if (isPaused) return;

      if (isDeleting) {
        if (currentLetterIndex > 0) {
          setCurrentLetterIndex(currentLetterIndex - 1);
        } else {
          setIsDeleting(false);
          setIsPaused(true);

          setTimeout(() => {
            let nextIndex: number;
            const remainingIndices = words
              .map((_, index) => index)
              .filter((index) => !usedIndices.includes(index));

            if (remainingIndices.length === 0) {
              nextIndex = Math.floor(Math.random() * words.length);
              setUsedIndices([nextIndex]);
            } else {
              nextIndex =
                remainingIndices[
                  Math.floor(Math.random() * remainingIndices.length)
                ]!;
              setUsedIndices([...usedIndices, nextIndex]);
            }

            setCurrentWordIndex(nextIndex);
            setIsPaused(false);
          }, 300);
        }
      } else {
        if (currentLetterIndex < words[currentWordIndex]!.length) {
          setCurrentLetterIndex(currentLetterIndex + 1);
        } else {
          setIsDeleting(true);
          setIsPaused(true);

          setTimeout(() => {
            setIsPaused(false);
          }, 3500);
        }
      }
    };

    const interval = setInterval(handleTyping, 50);

    return () => clearInterval(interval);
  }, [
    currentLetterIndex,
    isDeleting,
    currentWordIndex,
    words,
    isPaused,
    usedIndices,
  ]);

  return (
    <>
      {words[currentWordIndex]!.substring(0, currentLetterIndex)}
      <span className="inline-block translate-y-[-2px] animate-blink text-2xl">
        |
      </span>
    </>
  );
}
