import Image from "next/image";
import { Section } from "./Section";
import { Heading } from "./Heading";

const taxis = [
  {
    name: "A2B",
    number: "01285655651",
  },
  {
    name: "Cirencester Taxi",
    number: "01285408407",
  },
  {
    name: "Cirencester Taxis 247",
    number: "07735602648",
  },
  {
    name: "First Taxi",
    number: "01285407407",
  },
  {
    name: "Forum Taxi",
    number: "01285402270",
  },
  {
    name: "Home James",
    number: "01285641339",
  },
  {
    name: "Radio Cars",
    number: "01285650850",
  },
  {
    name: "Reliance",
    number: "01285640950",
  },
  {
    name: "Siren Cars",
    number: "01285652388",
  },
  {
    name: "Smart Taxi",
    number: "01285270270",
  },
];

export function Taxis() {
  return (
    <Section id="taxis" className="mt-12">
      <Image
        src="/wedding_svgs/Others/8.svg"
        alt="wedding car"
        width={2000}
        height={2000}
        className="h-[200px] w-[200px] lg:h-[300px] lg:w-[300px]"
      />

      <Heading className="mt-8">taxis</Heading>

      <div className="mt-8">
        <p>
          In the lovely rural Cotswolds, you will need to book taxis in advance.
        </p>

        <p>Here&apos;s a list of local taxi companies:</p>

        <ul className="ml-4 mt-4 list-disc">
          {taxis.map(({ name, number }) => (
            <li key={name}>
              <p className="font-semibold">{name}</p>
              <p>{number}</p>
            </li>
          ))}
        </ul>
      </div>
    </Section>
  );
}
