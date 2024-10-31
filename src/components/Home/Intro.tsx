import Image from "next/image";
import { Carousel } from "../Carousel";
import { Heading } from "./Heading";
import { Section } from "./Section";
import { cn } from "~/lib/cn.util";
// import { PolaroidImage } from "../Polaroid";

type Photo = {
  src: string;
  caption: string | JSX.Element;
  className?: string;
};

const photos: Photo[] = [
  {
    src: "first_date.jpg",
    caption:
      "June 2020 - our first date in lockdown! Loz made a daring journey to Wandsworth. Ruth enforced strict social distancing.",
    className: "",
  },
  {
    src: "lockdown_drinks.jpg",
    caption:
      "Dating in and out of lockdown meant spending a lot of our early days indoors...",
    className: "",
  },
  {
    src: "whitstable.jpg",
    caption:
      "July 2020 - we escaped London for a trip to Whitstable. Ruth tried an oyster to impress Loz, and just about managed not to throw up on his shoes.",
    className: "object-[32%_100%]",
  },
  {
    src: "moving_in.jpg",
    caption:
      "August 2021 - Moving into our first home together in Tooting - let the chaos commence!",
    className: "",
  },
  {
    src: "berlin.jpg",
    caption:
      "November 2021 - a weekend in Berlin, our first trip overseas. We shared the highs of the Berlin Wall and the lows of rejection by nightclub bouncers.",
    className: "object-[32%_70%]",
  },
  {
    src: "salta.jpg",
    caption:
      "February 2022 - Our favourite trip so far - two blissful weeks in Argentina admiring the scenery and drinking malbec!",
    className: "object-[40%_100%]",
  },
  {
    src: "eagles.jpg",
    caption:
      "July 2022 - Seeing the Eagles perform live, wrinkly rockers that we are",
  },
  {
    src: "on_the_plane.jpg",
    caption: "August 2022 - relocating to Vietnam!",
  },
  {
    src: "motorbike_2.jpg",
    caption:
      "Dodging traffic in Hanoi (no daughters were harmed in the making of this photo)",
    className: "object-[30%_100%]",
  },
  {
    src: "quintessential_vietnam_2.jpg",
    caption: "Dec 2022 - by now fully immersed in Vietnamese culture...",
    className: "object-[20%_100%]",
  },
  {
    src: "angkor_wat.jpg",
    caption: "Exploring the temples of Angkor Wat in Cambodia",
    className: "",
  },
  {
    src: "engagement_1.jpg",
    caption:
      "August 2023 - She said yes! Getting engaged on a beach in the Gili Islands",
    className: "transform scale-10",
  },
];

const borderClasses = [
  "bg-border2",
  "bg-border3",
  "bg-border4",
  "bg-border5",
  "bg-border7",
  "bg-border9",
  "bg-border10",
  "bg-border11",
];

export function Intro() {
  return (
    <Section className="flex flex-col items-center" id="r_and_l">
      {/* <PolaroidImage
        src="/intro_photos/with_friends/beer_mile.jpg"
        caption="The infamous beer mile"
        className="absolute left-5 top-16 h-[250px] w-[250px] rotate-6 transform opacity-0 transition-transform hover:rotate-0 hover:scale-150 lg:opacity-100"
      />

      <PolaroidImage
        src="/intro_photos/with_friends/festival.jpg"
        caption="Seeing Madness perform live"
        className="absolute bottom-24 left-5 h-[250px] w-[250px] -rotate-3 transform opacity-0 transition-transform hover:rotate-0 hover:scale-150 lg:opacity-100"
      />

      <PolaroidImage
        src="/intro_photos/with_friends/train_street.jpg"
        caption="Train Street, Hanoi"
        className="absolute bottom-24 right-5 h-[250px] w-[250px] -rotate-3 transform opacity-0 transition-transform hover:rotate-0 hover:scale-150 lg:opacity-100"
      />

      <PolaroidImage
        src="/intro_photos/with_friends/pub_shed.jpg"
        caption="Au Pub"
        className="absolute right-5 top-24 h-[250px] w-[250px] -rotate-3 transform opacity-0 transition-transform hover:rotate-0 hover:scale-150 lg:opacity-100"
      /> */}

      <Heading className="text-center leading-[45px]">
        We can&apos;t wait to celebrate with you
      </Heading>

      <div className="mx-auto mt-8 max-w-[600px]">
        <p>
          How has it been four years already? When we met in deepest, darkest
          lockdown, we never imagined we&apos;d be here today, planning our
          wedding from Vietnam.
        </p>

        <p className="mt-4">
          But that time has been filled with so many adventures. And we&apos;re
          thrilled to have you with us on our big day – surrounded by some of
          the good food, wine, scenery and music that have fueled our journey so
          far!
        </p>
      </div>

      <div className="relative mx-auto mt-8 w-[280px] lg:mt-12 lg:w-[900px]">
        <Carousel direction="right">
          {photos.map((photo, index) => {
            return (
              <div key={photo.src} className="w-full">
                <div
                  className={cn(
                    "h-full w-full",
                    "flex flex-col items-center",
                    "bg-contain bg-center bg-no-repeat",
                    "p-8 lg:px-16 lg:py-16",
                    borderClasses[index % borderClasses.length],
                  )}
                >
                  <Image
                    src={`/intro_photos/${photo.src}`}
                    width={3000}
                    height={3000}
                    alt="Photo"
                    className={cn(
                      "max-h-[300px] min-h-[300px]",
                      "lg:max-h-[350px] lg:min-h-[350px]",
                      "w-[200px] lg:w-[250px]",
                      "rounded-md",
                      "object-cover object-[20%_10%]",
                      photo.className ?? "",
                    )}
                  />
                </div>

                <div className="mt-2 flex w-full items-center justify-center gap-8">
                  <p className="w-[250px] text-center text-sm">
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
