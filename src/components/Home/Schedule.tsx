import Image from "next/image";
import { BodySection, Section } from "./Section";
import { Heading } from "./Heading";

export function Schedule() {
  return (
    <Section id="schedule" className="mt-8">
      <Image
        src="/wedding_svgs/Dinner/Drinks/3.svg"
        alt="drink"
        width={200}
        height={200}
      />

      <Heading className="mt-8">Schedule</Heading>

      <BodySection className="items-start gap-4">
        <div>
          <h4 className="font-semibold">Friday 25 July</h4>
          <p className="text-sm lg:text-base">18:00 - Welcome drinks</p>
          <p className="text-sm lg:text-base">[location TBC]</p>
        </div>

        <div>
          <h4 className="font-semibold">Saturday 26 July</h4>
          <p className="text-sm lg:text-base">
            13:30 - Guests arrive at Water&apos;s Edge, Ewen
            <br />
            14:00 - Ceremony
            <br />
            14:30 - Celebration time
            <br />
            00:00 - Carriages
          </p>
        </div>

        <div>
          <h4 className="font-semibold">Sunday 27 July</h4>
          <p className="text-sm lg:text-base">
            11:00 - Happily ever afterparty!
          </p>
          <p className="text-sm lg:text-base">[location TBC]</p>
        </div>
      </BodySection>
    </Section>
  );
}
