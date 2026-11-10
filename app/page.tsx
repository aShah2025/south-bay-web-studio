import Hero from "@/components/home/Hero";
import Demos from "@/components/home/Demos";
import HowItWorks from "@/components/home/HowItWorks";
import WhyUs from "@/components/home/WhyUs";
import Comparison from "@/components/Comparison";
import Pricing from "@/components/Pricing";
import FAQ from "@/components/FAQ";
import CTABand from "@/components/CTABand";

export default function Home() {
  return (
    <>
      <Hero />
      <Demos />
      <HowItWorks />
      <WhyUs />
      <Comparison />
      <Pricing />
      <FAQ limit={4} />
      <div className="pt-16 sm:pt-24">
        <CTABand />
      </div>
    </>
  );
}
