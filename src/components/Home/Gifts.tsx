import Image from "next/image";
import { BodySection, Section } from "./Section";
import { Heading } from "./Heading";
import { A } from "./A";
import { LINKS } from "~/lib/links";

export function Gifts() {
  return (
    <Section id="gifts" className="mt-12 flex flex-col gap-4">
      <Image
        src="/wedding_svgs/Others/9.svg"
        alt="gift image"
        width={200}
        height={200}
      />

      <Heading className="mt-8">Gifts</Heading>

      <BodySection className="mt-8">
        <p>
          Spending our big day with you is the most amazing wedding present we
          could ask for!
        </p>

        <p className="mt-4">
          However, if you&apos;d like to give a gift, please donate to our
          favourite charities or make a contribution to our honeymoon on the
          link below.
        </p>

        <div className="mt-4 flex gap-12">
          <A href={LINKS.honeymoonFund}>Charity & Honeymoon fund</A>
        </div>
      </BodySection>
    </Section>
  );
}
