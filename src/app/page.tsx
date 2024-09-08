import {
  CalendarIcon,
  CarTaxiFront,
  CircleHelpIcon,
  GiftIcon,
  HouseIcon,
  LuggageIcon,
  ParkingCircleIcon,
  PhoneIcon,
  TrainFrontIcon,
  TreesIcon,
} from "lucide-react";
import Link from "next/link";
import { HomepageNav } from "~/components/HomepageNav";
import { cn } from "~/lib/cn.util";
import { LINKS } from "~/lib/links";

function Section({
  id,
  children,
  className,
}: {
  id: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <section id={id} className={cn("pt-8", className)}>
      {children}
    </section>
  );
}

export default async function Home() {
  return (
    <div className="flex h-screen">
      <HomepageNav />

      <main className="h-full flex-1 overflow-x-hidden overflow-y-scroll px-4">
        <Section id="home" className="">
          <div>
            <p className="">Please join</p>
            <h1 className="flex gap-1">
              <span>Ruth</span>
              <span>&</span>
              <span>Lawrence</span>
            </h1>
            <p>on the occasion of their wedding</p>
            <p>at 2pm on 26th July 2025</p>
            <p>Water's Edge at Ewen, Gloucestershire GL7 6BY</p>
          </div>

          <Link className="text-blue-600 underline" href={LINKS.rsvp} prefetch>
            RSVP
          </Link>
        </Section>

        <Section id="venue" className="flex flex-col gap-4">
          <div className="flex gap-2">
            <TreesIcon />
            <h3>Getting to the venue</h3>
          </div>

          <div>
            <p>
              Water's Edge is located in the leafy village of Ewen in
              Gloucestershire.
            </p>
            <p>
              It&apos;s 10 minutes drive from the nearby town of Cirencester.
            </p>
          </div>

          <div>
            <div className="flex gap-2">
              <h4>Address:</h4>
            </div>
            <p>Water's Edge at Ewen</p>
            <p>Cirencester</p>
            <p> Gloucestershire</p>
            <p>GL7 6BY</p>
          </div>

          <Link
            href={LINKS.venue}
            target="_blank"
            className="text-blue-500 underline"
          >
            Link to venue
          </Link>

          <div className="flex gap-2">
            <ParkingCircleIcon />
            Parking
          </div>
          <p>There is plenty of parking at the venue, just rock up!</p>

          <div>
            <div className="flex gap-2">
              <TrainFrontIcon />
              <h4>Getting there by train</h4>
            </div>

            <p>
              The nearest train station is{" "}
              <span className="font-bold">
                <Link
                  href={LINKS.kemble}
                  target="_blank"
                  className="text-blue-500 underline"
                >
                  Kemble
                </Link>
              </span>
              .
              <br />
              It&apos;s 2 hours from Paddington, and a 5-minute drive from the
              venue.
              <br />A list of recommended taxi companies is below.
            </p>
          </div>
        </Section>

        <Section id="taxis" className="flex flex-col gap-4">
          <div className="flex gap-2">
            <CarTaxiFront />
            <h3>A list of local taxi companies:</h3>
          </div>
          <ul>
            <li>Reliance Taxis, Cirencester - 01285-640950</li>
            <li>Cirencester Taxis 247 - 07735-602648</li>
            <li>Forum Taxi, Cirencester - 01285-402270</li>
            <li>First Taxi, Cirencester - 01285-407407</li>
            <li>Smart Taxi, Cirencester - 01285-270270</li>
          </ul>
        </Section>

        <Section id="schedule" className="flex h-auto flex-col gap-4">
          <div className="flex gap-2">
            <CalendarIcon />
            <h3>Schedule</h3>
          </div>

          <div>
            <h4>Friday 25 July</h4>
            <p>
              18:00-21:00 - Welcome drinks and nibbles at the Golden Cross Inn,
              Cirencester
            </p>
          </div>

          <div>
            <h4>Saturday 26 July</h4>
            <p>
              1:30 - Guests arrive at Water's Edge, Ewen
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
              19:00 - Cake/Tea & Coffee's
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
            <p>Sunday 27 July</p>
            <p>
              10:00-14:00 - Pub walk and lunch at the Tunnel House Inn, Coates
              (please let us know via the RSVP form if you&apos;ll be joining!)
              <br />
            </p>
          </div>
        </Section>

        <Section id="accommodation">
          <div className="flex flex-col gap-2">
            <HouseIcon />
            <h3>Where should I stay?</h3>

            <p>
              There are a number of lovely places to stay in the area.
              <br />
              Visit our{" "}
              <Link
                href={LINKS.accommodation}
                className="text-blue-500 underline"
              >
                accommodation page
              </Link>{" "}
              for more information.
            </p>

            <p>
              We definitely recommend booking early as the area can get busy in
              the summer!
            </p>
          </div>
        </Section>

        <Section id="dress-code" className="flex flex-col gap-4">
          <div className="flex gap-2">
            <LuggageIcon />
            <h3>What should I wear?</h3>
          </div>

          <div>
            <p>
              The theme is "summer garden party". Colourful and fun is
              encouraged. And don't forget your dancing shoes!
            </p>
            <p>
              Please note that the ceremony and reception will be held outdoors,
              so please dress appropriately.
            </p>
            <p>
              If joining for the pub walk on Sunday, you might want to bring
              some comfortable shoes too.
            </p>
          </div>
        </Section>

        <Section id="gifts" className="flex flex-col gap-4">
          <div className="flex gap-2">
            <GiftIcon />
            <h3>Gifts</h3>
          </div>

          <div>
            <p>
              Your company on our big day is the most amazing wedding present we
              could ask for.
            </p>
            <p>
              However, if you wish to honour us with a gift, please donate to
              our favourite charities or make a contribution to our honeymoon on
              the links below. Thank you!
            </p>
          </div>

          <div className="flex flex-col gap-2">
            <Link
              href={LINKS.honeymoonFund}
              className="text-blue-500 underline"
            >
              Charity donation
            </Link>

            <Link href={LINKS.charityFund} className="text-blue-500 underline">
              Honeymoon fund
            </Link>
          </div>
        </Section>

        <Section id="faqs" className="flex flex-col gap-4">
          <div className="flex gap-2">
            <CircleHelpIcon />
            <h3>FAQs</h3>
          </div>

          <div>
            <h3>Is it okay to take pictures during the wedding?</h3>
            <p>
              We have two fabulous photographers so please enjoy the phone-free
              ceremony. But we would love for you to take photos any other time
              and share them with us on the link below.
            </p>
            <Link href={LINKS.photoUpload} className="text-blue-500 underline">
              Photo upload
            </Link>
          </div>

          <div>
            <h3>Can I bring my kids?</h3>
            <p>
              As much as we love your little ones, sadly we're not able to
              accommodate babies or children outside of those in the wedding
              party. However, we recognize that some of you will be traveling
              with your kids, so please know they are welcome at the Friday
              drinks and Sunday brunch! The venue recommends the following local
              babysitting services […] Please reach out if you have questions!
            </p>
          </div>

          <div>
            <h3>
              When is the RSVP deadline? And how do I let you know if I have any
              dietary requirements?
            </h3>
            <p>
              Please RSVP by 30 April 2025. You can let us know about any
              dietary requirements on the{" "}
              <Link href={LINKS.rsvp} className="text-blue-500 underline">
                RSVP form
              </Link>
              . You can also email us at{" "}
              <Link
                href="mailto:ruthieandloz@gmail.com"
                className="text-blue-500 underline"
              >
                ruthieandloz@gmail.com
              </Link>
            </p>
          </div>
        </Section>

        <Section id="contact">
          <div className="flex gap-2">
            <PhoneIcon />
            <h3>I have questions - who should I ask?</h3>
          </div>
          <p>
            Just drop an email to{" "}
            <Link href="mailto:ruthieandloz@gmail.com">
              ruthieandloz@gmail.com
            </Link>
            .
          </p>
          <h3>
            Questions on the day? Call our Maid of Honour Ness on [Ness phone
            number], or Best Man Adam on [Adam phone number].
          </h3>
        </Section>

        <div id="gallery"></div>
      </main>
    </div>
  );
}
