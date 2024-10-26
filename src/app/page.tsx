import { Accommodation } from "~/components/Home/Accommodation";
import { Contact } from "~/components/Home/Contact";
import { FAQ } from "~/components/Home/FAQ";
import { Gifts } from "~/components/Home/Gifts";
import { Hands } from "~/components/Home/Hands";
import { Hero } from "~/components/Home/Hero";
import { Intro } from "~/components/Home/Intro";
import { Schedule } from "~/components/Home/Schedule";
import { Taxis } from "~/components/Home/Taxis";
import { Venue } from "~/components/Home/Venue";
import { HomepageNav } from "~/components/HomepageNav";

export default async function Home() {
  return (
    <div className="flex h-full w-full overflow-x-hidden">
      <HomepageNav className="w-[68px]" />

      <main className="relative inline-block h-full flex-1">
        <Hands />
        <Hero />
        <Intro />
        <Venue />
        <Schedule />
        <Accommodation />
        <Taxis />
        <Gifts />
        <FAQ />
        <Contact />
      </main>
    </div>
  );
}
