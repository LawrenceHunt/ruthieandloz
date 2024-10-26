"use client";

import React, { useEffect } from "react";
import useEmblaCarousel from "embla-carousel-react";
import AutoScroll from "embla-carousel-auto-scroll";
import Autoplay from "embla-carousel-autoplay";
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
      Autoplay({
        delay: 10000,
        stopOnInteraction: true,
      }),
    ],
    // [
    //   AutoScroll({
    //     speed: 0.3,
    //     direction: isBackward ? "backward" : "forward",
    //   }),
    // ],
  );

  return (
    <div
      ref={emblaRef}
      className="no-scrollbar h-full w-full overflow-x-scroll"
      onClick={() => emblaApi?.scrollNext()}
    >
      <div
        className={cn(
          "flex h-full items-start gap-2",
          isVertical ? "flex-col" : "flex-row",
        )}
      >
        {React.Children.map(children, (child) => {
          return (
            <div className="h-full w-full flex-shrink-0">
              {React.cloneElement(child, {})}
            </div>
          );
        })}
      </div>
    </div>
  );
}
