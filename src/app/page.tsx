import { ParkingCircleIcon, TrainFrontIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { HTMLAttributeAnchorTarget } from "react";
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
        "relative flex h-auto min-h-screen w-full flex-col items-center pt-16",
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

      <main className="h-full flex-1 overflow-x-hidden overflow-y-scroll p-4">
        <Section id="home" className="relative w-full pt-0">
          <div className="pointer-events-none absolute left-0 top-0 z-[-1] hidden h-full w-full md:block">
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

          <div className="absolute left-0 top-0 z-[1] flex h-full w-full flex-1 flex-col justify-between">
            <Section>
              <Image
                src="/wedding_svgs/Others/7.svg"
                width={200}
                height={200}
                alt="disco ball"
              />

              <div>
                <h1 className="font-reinkies mt-8 inline-block">
                  <span className="text-[100px] leading-[80px]">Ruthie</span>
                  <br />
                  <span className="text-[80px] leading-[60px]">&</span>
                  <span className="ml-8 text-[100px] leading-[100px]">Loz</span>
                </h1>
              </div>

              <p className="text-2xl">
                are <FlashingMarriageText />!
              </p>

              <div className="mt-8 text-base">
                <p className="font-semibold">2pm, 26th July 2025</p>
                <p>Water&apos;s Edge at Ewen</p>
                <p>Gloucestershire</p>
              </div>

              <div className="mb-20 mt-8 flex flex-col gap-2 text-base">
                <p className="">Please</p>
                <Link
                  className={cn(
                    "rounded-full",
                    "px-8 py-2",
                    "text-2xl",
                    "flex items-center justify-center",
                    "border border-black",
                    "hover:bg-pink1 hover:border-pink1 hover:text-white",
                  )}
                  href={LINKS.rsvp}
                  prefetch
                >
                  RSVP
                </Link>
                <p className="ml-auto mt-2">by 30th April 2025</p>
              </div>
            </Section>
          </div>
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
                Water&apos;s Edge is located in the leafy village of Ewen in
                Gloucestershire.
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

            <A href={LINKS.venue} target="_blank">
              Link to venue
            </A>

            <div>
              <div className="mt-4 flex gap-2">
                <ParkingCircleIcon />
                Parking
              </div>

              <p>There is plenty of parking at the venue, just rock up!</p>
            </div>

            <div>
              <div className="mt-4 flex gap-2">
                <TrainFrontIcon />
                <h4>Getting there by train</h4>
              </div>

              <p>
                The nearest train station is <A href={LINKS.kemble}>Kemble</A>
                .
                <br />
                It&apos;s 2 hours from Paddington, and a 5-minute drive from the
                venue.
                <br />A list of recommended taxi companies is below.
              </p>
            </div>
          </BodySection>
        </Section>

        <Section id="taxis" className="pt-24">
          <Image
            src="/wedding_svgs/Others/8.svg"
            alt="wedding car"
            width={200}
            height={200}
          />

          <Heading className="mt-8">taxis</Heading>

          <div className="mt-8 text-base">
            <p>Here&apos;s a list of local taxi companies:</p>

            <ul className="mt-4">
              <li>Reliance Taxis, Cirencester - 01285-640950</li>
              <li>Cirencester Taxis 247 - 07735-602648</li>
              <li>Forum Taxi, Cirencester - 01285-402270</li>
              <li>First Taxi, Cirencester - 01285-407407</li>
              <li>Smart Taxi, Cirencester - 01285-270270</li>
            </ul>
          </div>
        </Section>

        <Section id="schedule" className="flex flex-col gap-4">
          <Image
            src="/wedding_svgs/Dinner/Drinks/3.svg"
            alt="drink"
            width={200}
            height={200}
          />

          <Heading className="mt-8">Schedule</Heading>

          <BodySection className="mx-auto mt-4 flex w-[400px] flex-col gap-4 text-base">
            <div>
              <h4 className="font-semibold">Friday 25 July</h4>
              <p>
                18:00 - Welcome drinks and nibbles at the Golden Cross Inn,
                Cirencester
              </p>
            </div>

            <div>
              <h4 className="font-semibold">Saturday 26 July</h4>
              <p>
                1:30 - Guests arrive at Water&apos;s Edge, Ewen
                <br />
                14:00 - Ceremony
                <br />
                14:30 - Drinks reception
                <br />
                16:30 - Call for Dinner
                <br />
                16:45 - Speeches
                <br />
                17:00 - Wedding breakfast served
                <br />
                19:00 - Cake/Tea & Coffee
                <br />
                19:30 - Evening entertainment starts (Band/DJ)
                <br />
                21:30 - Evening food served
                <br />
                11:30 - Last orders
                <br />
                00:00 - Carriages
              </p>
            </div>

            <div>
              <h4 className="font-semibold">Sunday 27 July</h4>
              <p>
                10:00-14:00 - Pub walk and lunch at the Tunnel House Inn, Coates
                (please let us know via the <A href="/rsvp">RSVP form</A> if
                you&apos;ll be joining!)
              </p>
            </div>
          </BodySection>
        </Section>

        <Section id="accommodation" className="pt-24">
          <Image
            src="/wedding_svgs/Candles/9.svg"
            alt="candelabra"
            width={200}
            height={200}
          />

          <Heading className="mt-4">Where to stay</Heading>

          <BodySection>
            <p>
              There are a number of lovely places to stay in the area.
              <br />
              Visit our <A href={LINKS.accommodation}>accommodation page</A> for
              more information.
            </p>

            <p>
              We definitely recommend booking early as the area can get busy in
              the summer!
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

          <div className="mx-auto mt-8 w-[400px]">
            <p>
              Your company on our big day is the most amazing wedding present we
              could ask for.
            </p>
            <p className="mt-4">
              However, if you wish to honour us with a gift, please donate to
              our favourite charities or make a contribution to our honeymoon on
              the links below. Thank you!
            </p>
          </div>

          <div className="mt-4 flex gap-12">
            <A href={LINKS.honeymoonFund}>Charity fund</A>

            <A href={LINKS.charityFund}>Honeymoon fund</A>
          </div>
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
                <span className="font-semibold">summer garden party</span>.
                Colourful and fun is encouraged. And don&apos;t forget your
                dancing shoes!
              </p>

              <p>
                Please note that the ceremony and reception will be held
                outdoors, so please dress appropriately.
              </p>
              <p>
                If joining for the pub walk on Sunday, you might want to bring
                some comfortable shoes too.
              </p>
            </div>

            <div>
              <h3 className="font-semibold">
                Is it okay to take pictures during the wedding?
              </h3>
              <p>
                We have two fabulous photographers so please enjoy the
                phone-free ceremony. But we would love for you to take photos
                any other time - and share them with us!{" "}
              </p>

              {/* <A href={LINKS.photoUpload}>Photo upload</A> */}
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
                The venue recommends the following local babysitting services
                […]
              </p>

              <p>Please reach out if you have questions!</p>
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
                <A href="mailto:ruthieandloz@gmail.com">
                  ruthieandloz@gmail.com
                </A>
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
                <A href="mailto:ruthieandloz@gmail.com">
                  ruthieandloz@gmail.com
                </A>
                .
              </p>
            </div>

            <div>
              <p className="font-semibold">Questions on the day?</p>
              <p>
                Call or Whatsapp our Maid of Honour Ness on [Ness phone number],
                or Best Man Adam on [Adam phone number].
              </p>
            </div>
          </BodySection>
        </Section>

        <div id="gallery"></div>
      </main>
    </div>
  );
}
