import Image from "next/image";
import { BodySection, Section } from "./Section";
import { Heading } from "./Heading";
import { LINKS } from "~/lib/links";
import { A } from "./A";

const accommodationOptions = {
  cirencester: {
    description: ["Cirencester is the nearest town to the venue."],
    options: [
      {
        name: "Stratton House Hotel",
        address: "Stratton House Hotel & Spa, Stratton, Cirencester, GL7 2LE",
        description:
          "A 4-star hotel with a spa and pool, just outside of Cirencester.",
        link: "https://www.strattonhousehotel.com/",
        photos: [
          {
            src: "/accommodation_photos/stratton_house/1.jpg",
          },
        ],
      },
      {
        name: "The Fleece",
        address: "The Fleece, Market Place, Cirencester, GL7 2NZ",
        link: "https://www.thefleececirencester.co.uk/",
        photos: [],
      },
      {
        name: "The Barrel Store",
        address: "The Barrel Store, Brewery Court, Cirencester, GL7 1JH",
        link: "https://www.thebarrelstore.co.uk/",
      },
    ],
  },
  barnsley: {
    description: [
      "Barnsley is another beautiful village just a few minutes drive from the venue.",
      "It's a great place to stay if you want to be close to the action.",
    ],
    options: [
      {
        name: "The Pig Hotel",
        address: "Barnsley House, Barnsley, Cirencester, GL7 5EE",
        link: "https://www.thepighotel.com/in-the-cotswolds/",
      },
      {
        name: "The Village Pub",
        address: "The Village Pub, Barnsley, Cirencester, GL7 5EF",
        link: "https://www.thevillagepub.co.uk/",
      },
    ],
  },
};

export function Accommodation() {
  return (
    <Section id="accommodation" className="pt-16">
      <Image
        src="/wedding_svgs/Candles/9.svg"
        alt="candelabra"
        width={2000}
        height={2000}
        className="h-[200px] w-[200px] lg:h-[300px] lg:w-[300px]"
      />

      <Heading className="mt-4">Where to stay</Heading>

      <BodySection className="gap-4">
        <p>
          There are a number of great places to stay in the area. We would love
          to make a weekend of it with you!
        </p>

        <p>
          Visit our{" "}
          <A href={LINKS.accommodation} target="_self">
            accommodation page
          </A>{" "}
          for more information.
        </p>

        {/* <p>
          If you want to extend your stay beyond the weekend, here are some
          suggestions of things to do.
        </p> */}

        <p>
          We definitely recommend booking ASAP - the area can get busy in the
          summer.
        </p>
      </BodySection>
    </Section>
  );
}
