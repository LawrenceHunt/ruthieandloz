import { Accommodation } from "~/components/Home/Accommodation";
import { Contact } from "~/components/Home/Contact";
import { FAQ } from "~/components/Home/FAQ";
import { Gifts } from "~/components/Home/Gifts";
import { Hands } from "~/components/Home/Hands";
import { Hero } from "~/components/Home/Hero";
import { Schedule } from "~/components/Home/Schedule";
import { Taxis } from "~/components/Home/Taxis";
import { Venue } from "~/components/Home/Venue";
import { HomepageNav } from "~/components/HomepageNav";

export default async function Home() {
  return (
    <div className="flex h-screen">
      <HomepageNav />

      <main className="relative h-full flex-1 overflow-x-hidden overflow-y-scroll p-4 py-0">
        <Hands />
        <Hero />
        <Venue />
        <Schedule />
        <Accommodation />
        <Taxis />
        <Gifts />
        <FAQ />
        <Contact />
        <div id="gallery"></div>
      </main>
    </div>
  );
}
