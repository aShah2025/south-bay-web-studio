import Link from "next/link";
import Reveal from "./Reveal";

export default function CTABand() {
  return (
    <section className="px-4 pb-20 sm:px-6 sm:pb-28">
      <Reveal>
        <div className="relative mx-auto max-w-6xl overflow-hidden rounded-3xl bg-slate-900 px-6 py-16 text-center sm:px-12 sm:py-20">
          <div aria-hidden="true" className="absolute -left-20 -top-20 h-72 w-72 animate-blob rounded-full bg-blue-600/50 blur-3xl" />
          <div aria-hidden="true" className="absolute -bottom-24 -right-16 h-72 w-72 animate-blob rounded-full bg-sky-400/30 blur-3xl [animation-delay:-8s]" />
          <div className="relative">
            <h2 className="mx-auto max-w-2xl text-3xl font-extrabold tracking-tight text-white sm:text-5xl">
              See your homepage <span className="text-sky-400">before you pay a cent.</span>
            </h2>
            <p className="mx-auto mt-5 max-w-xl text-slate-300">
              Send us your business details and we&apos;ll mock up a free homepage preview. No obligation, no monthly fees.
            </p>
            <Link href="/contact/" className="mt-9 inline-flex items-center justify-center rounded-full bg-white px-8 py-3.5 text-sm font-bold text-slate-900 shadow-xl transition hover:-translate-y-0.5 hover:bg-sky-50">
              Request Your Free Homepage Preview →
            </Link>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
