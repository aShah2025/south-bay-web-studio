import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative isolate mx-auto min-h-[940px] w-[min(96%,1440px)] bg-paper md:min-h-[760px] md:w-[min(94%,1440px)]">
      <div className="hero-visual" aria-hidden="true">
        <picture>
          <source media="(max-width: 800px)" srcSet="/art/valley-mobile.webp" />
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/art/valley-scene.webp" alt="" width={1536} height={1024} fetchPriority="high" />
        </picture>
      </div>
      <div className="hero-veil" />
      <div className="relative z-[2] max-w-[780px] px-5 pt-32 md:pl-16 md:pr-0 md:pt-44">
        <h1 className="!text-[clamp(42px,5.4vw,78px)]">
          Modern Websites for San Jose Small Businesses. One Simple Price.
        </h1>
        <p className="mt-6 max-w-[480px] text-lg text-ink sm:text-xl">
          A fast, mobile-first website in 2 to 4 weeks. Pay once for the design and own it. Hosting is included, and your domain name is the only yearly cost.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <Link href="/contact/" className="btn-primary">Request Your Free Homepage Preview</Link>
          <Link href="/work/" className="btn-secondary">See Live Demos</Link>
        </div>
        <p className="mt-6 text-[15px] font-medium text-muted">
          Free preview first &nbsp;·&nbsp; Built for phones &nbsp;·&nbsp; From $300, one time
        </p>
      </div>
    </section>
  );
}
