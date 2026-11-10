import Hero from "@/components/home/Hero";
import Trades from "@/components/home/Trades";
import FeatureTabs from "@/components/home/FeatureTabs";
import Demos from "@/components/home/Demos";
import Process from "@/components/home/Process";
import Comparison from "@/components/Comparison";
import Pricing from "@/components/Pricing";
import CTABand from "@/components/CTABand";

export default function Home() {
  return (
    <>
      <Hero />
      <Trades />
      <FeatureTabs />
      <Demos />
      <Process />
      <Comparison />
      <Pricing />
      <CTABand />
    </>
  );
}
