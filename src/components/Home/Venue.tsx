import Image from "next/image";
import { BodySection, Section } from "./Section";
import { Heading } from "./Heading";
import { ParkingCircleIcon, TrainFrontIcon } from "lucide-react";
import { A } from "./A";
import { LINKS } from "~/lib/links";

export function Venue() {
  return (
    <Section id="venue">
      <Image
        src="/wedding_svgs/Others/4.svg"
        width={3000}
        height={3000}
        alt="swans"
        className="h-[200px] w-[200px] lg:h-[300px] lg:w-[300px]"
      />

      <Heading className="mt-8">the Venue</Heading>

      <BodySection className="mt-8 items-start">
        <div>
          <p>
            <A href={LINKS.venue}>Water&apos;s Edge</A> is in the leafy village
            of Ewen in the Cotswolds.
          </p>
          <p className="mt-4">
            It&apos;s 10 minutes drive from the nearby town of Cirencester.
          </p>
        </div>

        <div className="mt-4">
          <h4 className="font-semibold">Address:</h4>
          <p>Water&apos;s Edge at Ewen</p>
          <p>Cirencester</p>
          <p> Gloucestershire</p>
          <p>GL7 6BY</p>
        </div>

        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d37044.80319690021!2d-2.0260409331662785!3d51.698418648815185!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487115cca7d91803%3A0xf99b5ef1b62d743f!2sWater&#39;s%20Edge%20at%20Ewen!5e0!3m2!1sen!2s!4v1727598320939!5m2!1sen!2s"
          width="600"
          height="450"
          className="mt-8 h-[400px] w-full rounded-lg border-0"
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>

        <div className="mt-8">
          <ParkingCircleIcon className="mr-2 inline" />
          <span>
            If you&apos;re driving, there&apos;s plenty of parking at the venue.
            Just rock up!
          </span>
        </div>

        <div className="mt-4">
          <TrainFrontIcon className="mr-2 inline" />
          <span>
            The nearest train station is <A href={LINKS.kemble}>Kemble</A>.
            It&apos;s a 1 hour 10 minutes direct train from London Paddington.
            The station is a 30-minute walk or a 5-minute taxi ride from the
            venue. See{" "}
            <A href="#taxis" target="_self">
              taxis
            </A>{" "}
            below.
          </span>
        </div>
      </BodySection>
    </Section>
  );
}
