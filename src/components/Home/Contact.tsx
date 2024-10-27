import Image from "next/image";
import { BodySection, Section } from "./Section";
import { Heading } from "./Heading";
import { A } from "./A";
import { LINKS } from "~/lib/links";

export function Contact() {
  return (
    <Section id="contact" className="pt-16">
      <Image
        src="/wedding_svgs/Others/5.svg"
        alt="dove"
        width={2000}
        height={2000}
        className="h-[200px] w-[200px] lg:h-[300px] lg:w-[300px]"
      />

      <Heading className="mt-8">Contact us</Heading>

      <BodySection className="items-start">
        <p className="font-semibold">Questions for us?</p>
        <p>
          Just drop an email to{" "}
          <A href={LINKS.ruthieAndLozEmail}>ruthieandloz@gmail.com</A>.
        </p>
      </BodySection>
    </Section>
  );
}
