import { HydrateClient } from "~/trpc/server";

export default async function Home() {
  return (
    <HydrateClient>
      <main>
        <p>Dearest friends</p>

        <p className="text-3xl">Please join</p>

        <div className="w-full">
          <h1 className="font-vintage-brush flex flex-col text-center text-green-800">
            <span className="mr-[200px] text-[100px] leading-[100px]">
              Ruth
            </span>
            <span className="my-[40px] text-[140px] leading-[100px]">&</span>
            <span className="ml-[240px] text-[100px] leading-[100px]">
              Lawrence
            </span>
          </h1>
        </div>

        <p className="text-3xl">on the occasion of their wedding</p>

        <div>
          <p>26th July 2025</p>
          <p>Ewen, Gloucestershire</p>
        </div>
      </main>
    </HydrateClient>
  );
}
