import { type HTMLAttributeAnchorTarget } from "react";
import { ParkingCircleIcon, TrainFrontIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { FlashingMarriageText } from "~/components/FlashingMarriageText";
import { HomepageNav } from "~/components/HomepageNav";
import { cn } from "~/lib/cn.util";
import { LINKS } from "~/lib/links";

function Heading({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <h2 className={cn("font-reinkies text-[60px]", className)}>{children}</h2>
  );
}

function A({
  children,
  href,
  className,
  target = "_blank",
}: {
  children: React.ReactNode;
  href: string;
  className?: string;
  target?: HTMLAttributeAnchorTarget;
}) {
  return (
    <Link
      href={href}
      target={target}
      className={cn("text-pink1 hover:underline", className)}
    >
      {children}
    </Link>
  );
}

function BodySection({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "mx-auto mt-8 flex w-[400px] max-w-full flex-col gap-4",
        className,
      )}
    >
      {children}
    </div>
  );
}

function Hands() {
  return (
    <div className="pointer-events-none absolute left-0 top-0 z-[-1] hidden h-screen w-full md:block">
      <div className="relative h-full w-full">
        <div className="absolute left-0 top-0 flex h-full flex-col justify-between">
          <Image
            src="/wedding_svgs/Dinner/Hands/1.svg"
            alt="hand"
            width={200}
            height={200}
          />
          <Image
            src="/wedding_svgs/Dinner/Hands/3.svg"
            alt="hand"
            width={200}
            height={200}
          />
          <Image
            src="/wedding_svgs/Dinner/Hands/4.svg"
            alt="hand"
            width={200}
            height={200}
          />
        </div>

        <div className="absolute right-0 top-0 flex h-full flex-col justify-between">
          <Image
            src="/wedding_svgs/Dinner/Hands/2.svg"
            alt="hand"
            width={200}
            height={200}
          />
          <Image
            src="/wedding_svgs/Dinner/Hands/5.svg"
            alt="hand"
            width={200}
            height={200}
          />
          <Image
            src="/wedding_svgs/Dinner/Hands/8.svg"
            alt="hand"
            width={200}
            height={200}
          />
        </div>
      </div>
    </div>
  );
}

function Section({
  id,
  children,
  className,
}: {
  id?: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <section
      id={id}
      className={cn(
        "relative flex min-h-screen w-full flex-col items-center pt-8",
        "text-lg",
        className,
      )}
    >
      {children}
    </section>
  );
}

export default async function Home() {
  return (
    <div className="flex h-screen">
      <HomepageNav />

      <main className="relative h-full flex-1 overflow-x-hidden overflow-y-scroll p-4 py-0">
        <Hands />

        <Section id="home" className="w-full pt-0">
          <Image
            src="/wedding_svgs/Others/7.svg"
            width={200}
            height={200}
            alt="disco ball"
            className="h-[100px] w-[100px] lg:h-[200px] lg:w-[200px]"
          />

          <BodySection className="w-[200px] flex-1">
            <div className="flex justify-center">
              <h1 className="inline-block font-reinkies">
                <span className="text-[100px] leading-[80px]">Ruthie</span>
                <br />
                <span className="text-[80px] leading-[60px]">&</span>
                <span className="ml-8 text-[100px] leading-[100px]">Loz</span>
              </h1>
            </div>

            <p className="mx-auto h-[80px] w-full text-left text-2xl">
              are <FlashingMarriageText />
            </p>

            <div className="text-base">
              <p className="font-semibold">2pm, 26 July 2025</p>
              <p>Water&apos;s Edge at Ewen</p>
              <p>Gloucestershire</p>
            </div>

            <div className="flex w-full flex-col gap-2 text-base lg:mt-8">
              <p className="">Please</p>
              <Link
                className={cn(
                  "rounded-full",
                  "px-8 py-2",
                  "text-2xl",
                  "flex items-center justify-center",
                  "border border-black",
                  "hover:border-pink1 hover:bg-pink1 hover:text-white",
                )}
                href={LINKS.rsvp}
                prefetch
              >
                RSVP
              </Link>
              <p className="ml-auto mt-2">by 30th April 2025</p>
            </div>
          </BodySection>
        </Section>

        <Section id="venue">
          <Image
            src="/wedding_svgs/Others/4.svg"
            width={300}
            height={300}
            alt="swans"
          />

          <Heading className="mt-8">the Venue</Heading>

          <BodySection className="mt-8">
            <div>
              <p>
                <A href={LINKS.venue}>Water&apos;s Edge</A> is located in the
                leafy village of Ewen in the Cotswolds.
              </p>
              <p>
                It&apos;s 10 minutes drive from the nearby town of Cirencester.
              </p>
            </div>

            <div>
              <div className="mt-4 flex gap-2">
                <h4>Address:</h4>
              </div>
              <p>Water&apos;s Edge at Ewen</p>
              <p>Cirencester</p>
              <p> Gloucestershire</p>
              <p>GL7 6BY</p>
            </div>

            <div className="mt-4">
              <ParkingCircleIcon className="mr-2 inline" />
              <span>
                If you&apos;re driving, there&apos;s plenty of parking at the
                venue. Just rock up!
              </span>
            </div>

            <div className="mt-4">
              <TrainFrontIcon className="mr-2 inline" />
              <span>
                The nearest train station is <A href={LINKS.kemble}>Kemble</A>.
                It&apos;s 2 hours from Paddington, and a 5-minute drive from the
                venue.
              </span>
            </div>
          </BodySection>
        </Section>

        <Section id="taxis">
          <Image
            src="/wedding_svgs/Others/8.svg"
            alt="wedding car"
            width={200}
            height={200}
          />

          <Heading className="mt-8">taxis</Heading>

          <div className="mt-8">
            <p>
              In the lovely rural Cotswolds, you will need to book taxis in
              advance.
            </p>
            <p>Here&apos;s a list of local taxi companies:</p>

            <ul className="mt-4">
              <li>A2B - 01285-655651</li>
              <li>Cirencester taxi - 01285-408407</li>
              <li>Cirencester Taxis 247 - 07735-602648</li>
              <li>First Taxi - 01285-407407</li>
              <li>Forum Taxi - 01285402270</li>
              <li>Home James - 01285-641339</li>
              <li>Radio cars - 01285-650850</li>
              <li>Reliance - 01285-640950</li>
              <li>Siren Cars - 01285-652388</li>
              <li>Smart Taxi - 01285-270270</li>
            </ul>
          </div>
        </Section>

        <Section id="schedule">
          <Image
            src="/wedding_svgs/Dinner/Drinks/3.svg"
            alt="drink"
            width={200}
            height={200}
          />

          <Heading className="mt-8">Schedule</Heading>

          <BodySection>
            <div>
              <h4 className="font-semibold">Friday 25 July</h4>
              <p>
                18:00 - Welcome drinks [location TBC] Join us for a pre-marital
                mingle.
              </p>
            </div>

            <div>
              <h4 className="font-semibold">Saturday 26 July</h4>
              <p>
                1:30 - Guests arrive at Water&apos;s Edge, Ewen
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
              <p>11:00 - Happily ever afterparty! [location TBC]</p>
            </div>
          </BodySection>
        </Section>

        <Section id="accommodation">
          <Image
            src="/wedding_svgs/Candles/9.svg"
            alt="candelabra"
            width={200}
            height={200}
          />

          <Heading className="mt-4">Where to stay</Heading>

          <BodySection>
            <p>
              There are a number of lovely places to stay in the area. We would
              love to make a weekend of it with you!
            </p>
            <p>
              Visit our <A href={LINKS.accommodation}>accommodation page</A> for
              more information.
            </p>
            <p>
              If you want to extend your stay beyond the weekend, here are some
              suggestions of things to do.
            </p>
          </BodySection>
        </Section>

        <Section id="gifts" className="flex flex-col gap-4">
          <Image
            src="/wedding_svgs/Others/9.svg"
            alt="gift image"
            width={200}
            height={200}
          />

          <Heading className="mt-8">Gifts</Heading>

          <BodySection className="mt-8">
            <p>
              Spending our big day with you is the most amazing wedding present
              we could ask for.
            </p>

            <p className="mt-4">
              However, if you wish to honour us with a gift, please donate to
              our favourite charities or make a contribution to our honeymoon on
              the links below. Thank you!
            </p>

            <div className="mt-4 flex gap-12">
              <A href={LINKS.honeymoonFund}>Charity fund</A>

              <A href={LINKS.charityFund}>Honeymoon fund</A>
            </div>
          </BodySection>
        </Section>

        <Section id="faqs">
          <Image
            src="/wedding_svgs/Dinner/Cakes/2.svg"
            alt="cake"
            width={200}
            height={200}
          />

          <Heading className="mt-8 tracking-[10px]">F.A.Qs</Heading>

          <BodySection>
            <div>
              <h3 className="font-semibold">What should I wear?</h3>
              <p>
                The theme is{" "}
                <span className="font-semibold text-green2">
                  summer garden party
                </span>
                . Colourful and fun is encouraged. Don&apos;t forget your
                dancing shoes!
              </p>

              <p>
                Please note that the ceremony and reception will be held
                outdoors, so please dress appropriately.
              </p>

              <p>
                Ladies - we recommend block heels, wedges or flats to avoid
                sinking into the lawn!
              </p>

              <p>
                If joining for the pub walk on Sunday, you might want to bring
                some comfortable shoes too.
              </p>
            </div>

            <div>
              <h3 className="font-semibold">May I bring my kids?</h3>

              <p>
                As much as we love your little ones, sadly we&apos;re not able
                to accommodate babies or children outside of those in the
                wedding party. However, we recognize that some of you will be
                traveling with your kids, so please know they are welcome at the
                Friday drinks and Sunday brunch!
              </p>

              <p>
                The venue recommends the following local babysitting services:
              </p>

              <ul className="ml-4 list-disc">
                <li>
                  <A href="http://www.elfsitters.co.uk">Elf Sitters</A> |{" "}
                  <A href="mailto:emma@elfsitters.co.uk">
                    emma@elfsitters.co.uk
                  </A>
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

            <div>
              <h3 className="font-semibold">
                Is it okay to take pictures during the wedding?
              </h3>
              <p>
                We have two fabulous photographers so please enjoy the
                phone-free ceremony. But we would love for you to take photos
                any other time - and share them with us!
              </p>
            </div>

            <div>
              <h3 className="font-semibold">
                When is the RSVP deadline? And how do I let you know if I have
                any dietary requirements?
              </h3>
              <p>
                Please RSVP by 30 April 2025. You can let us know about any
                dietary requirements on the{" "}
                <A href={LINKS.rsvp} target="_self">
                  RSVP form
                </A>
                . You can also email us at{" "}
                <A href={LINKS.ruthieAndLozEmail}>ruthieandloz@gmail.com</A>
              </p>
            </div>
          </BodySection>
        </Section>

        <Section id="contact" className="pt-16">
          <Image
            src="/wedding_svgs/Others/5.svg"
            alt="dove"
            width={200}
            height={200}
          />

          <Heading className="mt-8">Contact us</Heading>

          <BodySection>
            <div>
              <p className="font-semibold">Questions for us?</p>
              <p>
                Just drop an email to{" "}
                <A href={LINKS.ruthieAndLozEmail}>ruthieandloz@gmail.com</A>.
              </p>
            </div>

            <div>
              <p className="font-semibold">Questions on the day?</p>
              <p>
                Call or Whatsapp our Maid of Honour Ness on 07704-423611, or
                Best Man Adam on 07515-017052.
              </p>
            </div>
          </BodySection>
        </Section>

        <div id="gallery"></div>
      </main>
    </div>
  );
}
