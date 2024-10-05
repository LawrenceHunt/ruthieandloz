import Image from "next/image";
import { BodySection, Section } from "./Section";
import { Heading } from "./Heading";
import { LINKS } from "~/lib/links";
import { A } from "./A";

export function Accommodation() {
  return (
    <Section id="accommodation" className="pt-0">
      <Image
        src="/wedding_svgs/Candles/9.svg"
        alt="candelabra"
        width={200}
        height={200}
        className="translate-y-[-5px]"
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
        <p>
          If you want to extend your stay beyond the weekend, here are some
          suggestions of things to do.
        </p>

        <p>
          We definitely recommend booking ASAP as the area can get busy in the
          summer!
        </p>
      </BodySection>
    </Section>
  );
}
