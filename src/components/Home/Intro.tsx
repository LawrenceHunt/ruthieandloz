import Image from "next/image";
import { Carousel } from "../Carousel";
import { Heading } from "./Heading";
import { Section } from "./Section";
import { cn } from "~/lib/cn.util";

const photos = [
  {
    src: "first_date.jpg",
    caption: (
      <span>
        Our first date in lockdown. Loz made a{" "}
        <span className="line-through">criminal</span> daring journey to
        Wandsworth, Ruth enforced strict social distancing.
      </span>
    ),
    clasName: "",
  },
  {
    src: "whitstable.jpg",
    caption:
      "Date #6 in Whitstable. Ruth tried an oyster to impress Loz - seafood diplomacy at its finest.",
    className: "object-[32%_100%]",
  },
  {
    src: "moving_in.jpg",
    caption: "Our first home together in Tooting - let the chaos commence!",
    className: "",
  },
  {
    src: "getting_ready_to_move.jpg",
    caption:
      "Packing up for South-East Asia - because who needs stability anyway?",
    className: "",
  },
  {
    src: "on_the_plane.jpg",
    caption: "Off to Vietnam - let's see what all the pho-ss is about!",
  },
  {
    src: "quintessential_vietnam_2.jpg",
    caption: "Exploring the Mekong Delta...",
    className: "object-[20%_100%]",
  },
  {
    src: "jeep.jpg",
    caption: "Christmas Day in sunny Hoi An - festive vibes and sunshine!",
  },
  {
    src: "engagement_1.jpg",
    caption: "She said yes! Celebrating our engagement on a beach in Bali!",
    className: "transform scale-10",
  },
  //   { src: "engagement_2.jpg", caption: "", className: "transform scale-10" },
  // { src: "engagement_3.jpg", caption: "", className: "transform scale-10" },
  // { src: "engagement_4.jpg", caption: "", className: "transform" },
];

export function Intro() {
  return (
    <Section className="relative flex flex-col items-center">
      <Heading className="text-center leading-[45px]">
        We can&apos;t wait to celebrate with you
      </Heading>

      <div className="relative mx-auto mt-8 w-[300px] lg:mt-20 lg:w-[700px]">
        <Carousel direction="right">
          {photos.map((photo, index) => {
            return (
              <div key={photo.src} className="w-full">
                <div
                  className={cn(
                    "flex h-full w-full flex-col items-center bg-contain bg-center bg-no-repeat p-8 lg:p-20",
                    [
                      "bg-border2",
                      "bg-border3",
                      "bg-border4",
                      "bg-border5",
                      "bg-border7",
                      "bg-border9",
                      "bg-border10",
                      "bg-border11",
                    ][index % 8],
                  )}
                >
                  <Image
                    src={`/intro_photos/${photo.src}`}
                    width={3000}
                    height={3000}
                    alt="Photo"
                    className={cn(
                      "max-h-[300px] min-h-[300px] w-[200px] flex-1 rounded-md object-cover object-[20%_10%] lg:w-[250px]",
                      photo.className ?? "",
                    )}
                  />
                </div>

                <div className="mt-12 flex w-full items-center justify-center gap-8 lg:mt-4">
                  <p className="w-[250px] text-center text-xs lg:text-sm">
                    {photo.caption}
                  </p>
                </div>
              </div>
            );
          })}
        </Carousel>
      </div>
    </Section>
  );
}
