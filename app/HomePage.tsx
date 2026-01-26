import { About } from "@/app/components/About";
import { Gallery } from "@/app/components/Gallery";
import { Hero } from "@/app/components/Hero";
import { Projects } from "@/app/components/Projects";
import Schedule from "@/app/components/Schedule";
import { Tracks } from "@/app/components/Tracks";

export function HomePage() {
  return (
    <>
      <Hero />
      <About />
      <Tracks />
      <Schedule />
      <Gallery />
      <Projects />
    </>
  );
}
