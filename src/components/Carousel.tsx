"use client";

import React from "react";
import useEmblaCarousel from "embla-carousel-react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import Autoplay from "embla-carousel-autoplay";
import { cn } from "~/lib/cn.util";

const CarouselContext = React.createContext<{
  prev: () => void;
  next: () => void;
}>({
  prev: () => void 0,
  next: () => void 0,
});

export function PrevButton({ className }: { className?: string }) {
  const { prev } = React.useContext(CarouselContext);
  return (
    <ArrowLeft role="button" className={cn("", className)} onClick={prev} />
  );
}

export function NextButton({ className }: { className?: string }) {
  const { next } = React.useContext(CarouselContext);
  return (
    <ArrowRight role="button" className={cn("", className)} onClick={next} />
  );
}

export function Carousel({
  children,
  direction,
  autoPlay = false,
}: {
  children: React.ReactElement[];
  direction: "left" | "right" | "up" | "down";
  autoPlay?: boolean;
}) {
  const isVertical = direction === "up" || direction === "down";
  // const isBackward = direction === "up" || direction === "left";

  const [emblaRef, emblaApi] = useEmblaCarousel(
    {
      loop: true,
      axis: isVertical ? "y" : "x",
    },
    autoPlay
      ? [
          Autoplay({
            delay: 10000,
            stopOnInteraction: true,
          }),
        ]
      : [],
  );

  return (
    <CarouselContext.Provider
      value={{
        prev: () => emblaApi?.scrollPrev(),
        next: () => emblaApi?.scrollNext(),
      }}
    >
      <div className="relative h-full w-full">
        <div
          ref={emblaRef}
          className="no-scrollbar z-0 h-full w-full overflow-x-scroll"
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

        <PrevButton className="absolute bottom-14 left-[20%]" />
        <NextButton className="absolute bottom-14 right-[20%]" />
      </div>
    </CarouselContext.Provider>
  );
}
