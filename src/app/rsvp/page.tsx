import { api, HydrateClient } from "~/trpc/server";
import { RSVPForm } from "~/components/RSVPForm";

export default async function RSVP() {
  void api.guests.getGuests.prefetch();

  return (
    <HydrateClient>
      <main className="p-8">
        <RSVPForm />
      </main>
    </HydrateClient>
  );
}
