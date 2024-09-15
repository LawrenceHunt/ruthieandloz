"use client";

import React, { useEffect } from "react";
import useEmblaCarousel from "embla-carousel-react";
import AutoScroll from "embla-carousel-auto-scroll";
import { cn } from "~/lib/cn.util";

export function Carousel({
  children,
  direction,
}: {
  children: React.ReactElement[];
  direction: "left" | "right" | "up" | "down";
}) {
  const isVertical = direction === "up" || direction === "down";
  const isBackward = direction === "up" || direction === "left";

  const [emblaRef, emblaApi] = useEmblaCarousel(
    {
      loop: true,
      axis: isVertical ? "y" : "x",
    },
    [
      AutoScroll({
        speed: 0.3,
        direction: isBackward ? "backward" : "forward",
      }),
    ],
  );

  useEffect(() => {
    if (emblaApi) {
      const autoScroll = emblaApi.plugins().autoScroll;
      if (autoScroll) {
        autoScroll.play();
      }
    }
  }, [emblaApi]);

  return (
    <div
      className="h-full w-full overflow-scroll"
      onClick={() => emblaApi?.scrollNext()}
      ref={emblaRef}
    >
      <div
        className={cn(
          "flex items-center gap-2",
          isVertical ? "flex-col" : "flex-row",
        )}
      >
        {children}
      </div>
    </div>
  );
}
