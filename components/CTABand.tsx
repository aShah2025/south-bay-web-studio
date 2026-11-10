import Link from "next/link";
import Reveal from "./Reveal";

export default function CTABand() {
  return (
    <section className="wrap pb-20 sm:pb-28">
      <Reveal>
        <div className="panel px-6 py-16 text-center sm:px-12 sm:py-20">
          <h2 className="mx-auto max-w-2xl">See your homepage before you pay a cent.</h2>
          <p className="mx-auto mt-5 max-w-xl text-lg text-muted">
            Send us your business details and we&apos;ll mock up a free homepage preview. No obligation, no monthly fees.
          </p>
          <Link href="/contact/" className="btn-primary mt-9">
            Request Your Free Homepage Preview
          </Link>
        </div>
      </Reveal>
    </section>
  );
}
