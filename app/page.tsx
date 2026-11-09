import Hero from "@/components/home/Hero";
import Marquee from "@/components/home/Marquee";
import Features from "@/components/home/Features";
import Demos from "@/components/home/Demos";
import Process from "@/components/home/Process";
import Pricing from "@/components/Pricing";
import CTABand from "@/components/CTABand";

export default function Home() {
  return (
    <>
      <Hero />
      <Marquee />
      <Features />
      <Demos />
      <Process />
      <Pricing />
      <CTABand />
    </>
  );
}
