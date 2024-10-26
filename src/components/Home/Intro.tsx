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
        We met in lockdown on Hinge. Loz made a{" "}
        <span className="line-through">criminal</span> daring journey to
        Wandsworth for our first date, only for Ruth to enforce strict social
        distancing rules.
      </span>
    ),
  },
  {
    src: "whitstable.jpg",
    caption:
      "The time we went to Whitstable. Ruth tried an oyster to impress Loz and nearly died.",
  },
  {
    src: "moving_in.jpg",
    caption: "Moving in together at our new place in Tooting.",
  },
  {
    src: "getting_ready_to_move.jpg",
    caption:
      "Twelve months later, putting all our stuff in storage so we could move to South-East Asia!",
  },
  { src: "on_the_plane.jpg", caption: "On the plane to Vietnam!" },
  {
    src: "quintessential_vietnam_2.jpg",
    caption: "Exploring the Mekong Delta.",
    className: "object-[20%_100%]",
  },
  {
    src: "jeep.jpg",
    caption:
      "Christmas Day in Hoi An - riding through the paddy fields in a US Army Jeep!",
  },
  {
    src: "engagement_1.jpg",
    caption: "Getting engaged in Bali!",
    className: "transform scale-10",
  },
  //   { src: "engagement_2.jpg", caption: "", className: "transform scale-10" },
  //   { src: "engagement_3.jpg", caption: "", className: "transform scale-10" },
  //   { src: "engagement_4.jpg", caption: "", className: "transform scale-10" },
];

export function Intro() {
  return (
    <Section className="relative flex flex-col items-center">
      <Heading className="text-center leading-[45px]">
        We can&apos;t wait to celebrate with you
      </Heading>

      <div className="relative mt-20 h-[500px] w-[500px]">
        <Carousel direction="right">
          {photos.map((photo, index) => {
            return (
              <div
                key={photo.src}
                className={cn(
                  "flex h-full w-full flex-col items-center bg-contain bg-center bg-no-repeat p-8",
                  [
                    "bg-border2",
                    "bg-border3",
                    "bg-border4",
                    "bg-border5",
                    "bg-border7",
                    "bg-border9",
                    "bg-border10",
                    "bg-border11",
                  ][index],
                )}
              >
                <Image
                  src={`/intro_photos/${photo.src}`}
                  width={3000}
                  height={3000}
                  alt="Photo"
                  className={cn(
                    "mt-8 max-h-[300px] min-h-[300px] w-[250px] flex-1 rounded-md object-cover object-[20%_10%]",
                    photo.className ?? "",
                  )}
                />
                <div>
                  <p className="mt-2 w-[250px] text-center text-sm">
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
