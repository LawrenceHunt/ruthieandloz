import { api, HydrateClient } from "~/trpc/server";
import { RSVPForm } from "~/components/RSVPForm";

export default async function Home() {
  return (
    <HydrateClient>
      <main>
        <p>Dearest friends</p>

        <p className="text-3xl">Please join</p>

        <div className="w-full">
          <h1 className="flex flex-col">
            <span className="">Ruth</span>
            <span className="">&</span>
            <span className="">Lawrence</span>
          </h1>
        </div>

        <p className="text-3xl">on the occasion of their wedding</p>

        <div>
          <p>26th July 2025</p>
          <p>Ewen, Gloucestershire</p>
        </div>
      </main>

      <RSVPForm />
    </HydrateClient>
  );
}
