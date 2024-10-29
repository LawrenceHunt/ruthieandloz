import Image from "next/image";
import { BodySection, Section } from "~/components/Home/Section";
import { Heading } from "~/components/Home/Heading";
import { A } from "~/components/Home/A";
import { ArrowLeft } from "lucide-react";

type TownHotel = {
  name: string;
  description: string;
  pricePerNight: string;
  links: {
    website: string;
    booking: string;
  };
  photos: string[];
};

const accommodationOptions: Record<
  string,
  { description: string; options: TownHotel[] }
> = {
  cirencester: {
    description:
      "The nearest town to the venue. A lovely market town with lots of shops and restaurants.",
    options: [
      {
        name: "Stratton House Hotel & Spa",
        description:
          "A hotel with a spa and big garden, 1 mile outside Cirencester.",
        pricePerNight: "£100-£200",
        links: {
          website: "https://www.strattonhousehotel.com/",
          booking: "https://www.booking.com/Share-vLbtibA",
        },
        photos: ["stratton_1.jpg", "stratton_2.jpg"],
      },
      {
        name: "The Kings Head Hotel",
        pricePerNight: "£200-£300",
        description: "Boutique hotel in the middle of town.",
        links: {
          website: "https://www.kingshead-hotel.co.uk/",
          booking: "https://www.booking.com/Share-0LNal1",
        },
        photos: ["kings_head_1.jpg", "kings_head_2.jpg"],
      },
      {
        name: "The Barrel Store",
        pricePerNight: "£50-£100",
        description: "Cute & simple hostel in the middle of town.",
        links: {
          website: "https://www.thebarrelstore.co.uk/",
          booking: "https://www.booking.com/Share-O3Ftd4",
        },
        photos: ["barrel_store_1.jpg", "barrel_store_2.jpg"],
      },
      {
        name: "Corinium Hotel",
        pricePerNight: "£100-£200",
        description: "Quiet hotel on a historic street in the middle of town.",
        links: {
          website: "https://www.coriniumhotel.com/",
          booking: "https://www.booking.com/Share-FQAXCeM",
        },
        photos: ["corinium_1.jpg", "corinium_2.jpg"],
      },
      {
        name: "The Fleece",
        pricePerNight: "£100-£200",
        description: "A pub with some fancy 'boutique bedrooms'.",
        links: {
          website: "https://www.thefleececirencester.co.uk/",
          booking: "https://www.booking.com/Share-CeWabxQ",
        },
        photos: ["fleece_1.jpg", "fleece_2.jpg"],
      },
      {
        name: "Ingleside House",
        pricePerNight: "£200-£300",
        description: "Grandiose hotel in a Grade II listed building.",
        links: {
          website: "https://inglesidehouse.co.uk/",
          booking: "https://www.booking.com/Share-vRh1iB",
        },
        photos: ["ingleside_1.jpg", "ingleside_2.jpg"],
      },
    ],
  },
  barnsley: {
    description:
      "Barnsley is another beautiful village just a few minutes drive from the venue. It's a great place to stay if you want to be close to the action.",
    options: [
      {
        name: "The Pig Hotel",
        description: 'Latest addition to the "Pig" posh pub hotel chain',
        pricePerNight: "£300-£400",
        links: {
          website: "https://www.thepighotel.com/in-the-cotswolds/",
          booking: "",
        },
        photos: ["pig_1.webp", "pig_2.webp"],
      },
      {
        name: "The Village Pub",
        description: "A pub with some fancy 'boutique bedrooms'",
        pricePerNight: "£200-£300",
        links: {
          website: "https://www.thevillagepub.co.uk/",
          booking: "",
        },
        photos: ["village_pub_1.jpg", "village_pub_2.jpg"],
      },
    ],
  },
  crudwell: {
    description:
      "Crudwell is a small village near the venue, again about 10 mins drive. It has a few B&Bs and a pub.",
    options: [
      {
        name: "The Rectory Hotel",
        description: "A beautiful hotel with a pool and spa.",
        pricePerNight: "£300-£400",
        links: {
          website: "https://therectoryhotel.com/",
          booking: "",
        },
        photos: ["rectory_1.jpg", "rectory_2.jpg"],
      },
    ],
  },
  malmesbury: {
    description:
      "Malmesbury is a beautiful town on a hill with a cathedral and a rich history. It's a bit further away from the venue (~20 mins drive) but a wonderful place to stay.",
    options: [
      {
        name: "The Old Bell Hotel",
        description: "Really unique and cool hotel, has won lots of awards.",
        pricePerNight: "£200-£300",
        links: {
          website: "https://www.oldbellhotel.co.uk/",
          booking: "",
        },
        photos: ["old_bell_1.jpg", "old_bell_2.jpg"],
      },
    ],
  },
};

function HotelEntry({ hotel }: { hotel: TownHotel }) {
  return (
    <div className="my-4 py-4">
      <h4 className="font-semibold">{hotel.name}</h4>
      <p>{hotel.description}</p>
      <p>Price / room / night: {hotel.pricePerNight}</p>

      <div className="flex gap-2">
        {hotel.photos.map((photo) => (
          <Image
            key={photo}
            src={`/accommodation_photos/${photo}`}
            alt={hotel.name}
            width={2000}
            height={2000}
            className="h-[150px] w-[200px] rounded-md object-cover"
          />
        ))}
      </div>

      <div className="mt-2">
        {hotel.links.website ? (
          <A href={hotel.links.website} target="_blank">
            website
          </A>
        ) : null}

        {hotel.links.booking ? (
          <>
            {" "}
            |{" "}
            <A href={hotel.links.booking} target="_blank">
              booking.com
            </A>
          </>
        ) : null}
      </div>
    </div>
  );
}

export default function AccommodationPage() {
  return (
    <Section id="accommodation" className="p-8">
      <A
        href="/"
        target="_self"
        className="flex items-center gap-2 self-start text-lg"
      >
        <ArrowLeft className="" /> Back home
      </A>

      <Image
        src="/wedding_svgs/Candles/9.svg"
        alt="candelabra"
        width={2000}
        height={2000}
        className="h-[200px] w-[200px] lg:h-[300px] lg:w-[300px]"
      />

      <Heading className="mt-4">Accommodation</Heading>

      <BodySection className="mb-24 w-[500px] gap-4">
        <div className="mt-8 flex flex-col gap-4">
          <p>There are loads of great places to stay in the area!</p>

          <p>
            Here are a few suggestions but of course there are plenty more
            options on Airbnb and Booking.com.
          </p>
        </div>

        <h3 className="mt-4 text-2xl font-semibold">Cirencester</h3>

        <p>{accommodationOptions.cirencester!.description}</p>

        <div className="w-full">
          {accommodationOptions.cirencester!.options.map((option) => (
            <HotelEntry key={option.name} hotel={option} />
          ))}
        </div>

        <h3 className="mt-4 text-2xl font-semibold">Barnsley</h3>

        <p>{accommodationOptions.barnsley!.description}</p>

        <div className="w-full">
          {accommodationOptions.barnsley!.options.map((option) => (
            <HotelEntry key={option.name} hotel={option} />
          ))}
        </div>

        <h3 className="mt-4 text-2xl font-semibold">Crudwell</h3>

        <p>{accommodationOptions.crudwell!.description}</p>

        <div className="w-full">
          {accommodationOptions.crudwell!.options.map((option) => (
            <HotelEntry key={option.name} hotel={option} />
          ))}
        </div>

        <h3 className="mt-4 text-2xl font-semibold">Malmesbury</h3>

        <p>{accommodationOptions.malmesbury!.description}</p>

        <div className="w-full">
          {accommodationOptions.malmesbury!.options.map((option) => (
            <HotelEntry key={option.name} hotel={option} />
          ))}
        </div>
      </BodySection>
    </Section>
  );
}
