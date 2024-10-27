import Image from "next/image";
import { BodySection, Section } from "./Section";
import { Heading } from "./Heading";
import { A } from "./A";
import { LINKS } from "~/lib/links";

export function FAQ() {
  return (
    <Section id="faqs">
      <Image
        src="/wedding_svgs/Dinner/Cakes/2.svg"
        alt="cake"
        width={2000}
        height={2000}
        className="h-[200px] w-[200px] lg:h-[300px] lg:w-[300px]"
      />

      <Heading className="mt-8 tracking-[10px]">F.A.Qs</Heading>

      <BodySection className="gap-4">
        <div className="flex flex-col gap-3">
          <h3 className="font-semibold">What should I wear?</h3>
          <p>
            The dress code is{" "}
            <span className="font-semibold text-green2">
              summer garden party
            </span>
            . Colourful and fun is encouraged. Don&apos;t forget your dancing
            shoes!
          </p>

          <p>
            Please note that the ceremony and reception drinks will be held
            outdoors, so please dress appropriately.
          </p>

          <p>
            Ladies - we recommend block heels, wedges or flats to avoid sinking
            into the lawn!
          </p>

          <p>
            Weather permitting we&apos;ll do a pub walk on Sunday - if joining,
            you might want to bring some comfortable shoes too.
          </p>
        </div>

        <div className="flex flex-col gap-3">
          <h3 className="font-semibold">May I bring my kids?</h3>

          <p>
            As much as we love your little ones, sadly we&apos;re not able to
            accommodate babies or children outside of those in the wedding
            party. However, we recognise that some of you will be travelling
            with kids, so please know they are welcome at the Friday drinks and
            Sunday brunch!
          </p>

          <p>The venue recommends the following local babysitting services:</p>

          <ul className="ml-4 list-disc">
            <li>
              <A href="http://www.elfsitters.co.uk">Elf Sitters</A> |{" "}
              <A href="mailto:emma@elfsitters.co.uk">emma@elfsitters.co.uk</A>
            </li>
            <li>
              <A href="https://www.pitchupandplay.co.uk/weddingchildcare">
                Pitch Up and Play
              </A>{" "}
              |{" "}
              <A href="mailto:hello@pitchupandplay.co.uk">
                hello@pitchupandplay.co.uk
              </A>
            </li>
          </ul>

          <p>Please reach out if you have questions!</p>
        </div>

        <div className="flex flex-col gap-3">
          <h3 className="font-semibold">
            When is the RSVP deadline? And how do I let you know if I have any
            dietary requirements?
          </h3>
          <p>
            Please RSVP by 30 April 2025. You can let us know about any dietary
            requirements on the{" "}
            <A href={LINKS.rsvp} target="_self">
              RSVP form
            </A>
            . You can also email us at{" "}
            <A href={LINKS.ruthieAndLozEmail}>ruthieandloz@gmail.com</A>
          </p>
        </div>
      </BodySection>
    </Section>
  );
}
