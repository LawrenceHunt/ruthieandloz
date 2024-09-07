import { HydrateClient } from "~/trpc/server";
import { RSVPForm } from "~/components/RSVPForm";

export default async function Home() {
  return (
    <HydrateClient>
      <main className="pl-8">
        <p className="mt-8">Dearest friends</p>

        <p className="">Please join</p>

        <div className="w-full">
          <h1 className="flex gap-1">
            <span className="">Ruth</span>
            <span className="">&</span>
            <span className="">Lawrence</span>
          </h1>
        </div>

        <p className="">on the occasion of their wedding</p>

        <div className="mb-8">
          <p>26th July 2025</p>
          <p>Ewen, Gloucestershire</p>
        </div>

        <RSVPForm />
      </main>
    </HydrateClient>
  );
}
