import Image from "next/image";
import { BodySection, Section } from "./Section";
import { Heading } from "./Heading";
import { A } from "./A";

export function Schedule() {
  return (
    <Section id="schedule" className="pt-24">
      <Image
        src="/wedding_svgs/Dinner/Drinks/3.svg"
        alt="drink"
        width={2000}
        height={2000}
        className="h-[200px] w-[200px] lg:h-[300px] lg:w-[300px]"
      />

      <Heading className="mt-8">Schedule</Heading>

      <BodySection className="items-start gap-4">
        <div className="mt-4 w-full">
          <h4 className="w-full text-center font-semibold">Friday 25 July</h4>
          <p className="">
            6PM - Welcome drinks at{" "}
            <A href="https://maps.app.goo.gl/MenYXp53CHbGeSnD7">
              The Tavern Inn, Kemble
            </A>{" "}
            (next to Kemble Station)
          </p>
        </div>

        <div className="w-full">
          <h4 className="w-full text-center font-semibold">Saturday 26 July</h4>
          <p className="">
            1:30PM - Guests arrive
            <br />
            2PM - Ceremony
            <br />
            2:30PM - Celebration time
            <br />
            12AM - Carriages
          </p>
        </div>
      </BodySection>
    </Section>
  );
}
