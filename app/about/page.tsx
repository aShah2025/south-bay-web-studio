import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import Reveal from "@/components/Reveal";
import CTABand from "@/components/CTABand";

export const metadata: Metadata = {
  title: "About",
  description: "South Bay Web Studios is a local San Jose web design studio building fast, fair-priced websites for small businesses.",
};

const VALUES = [
  { title: "Fair, flat pricing", body: "One clear price per site. No monthly hosting fees, retainers or hidden add-ons." },
  { title: "Mobile-first always", body: "Most local customers find you on their phone, so every site starts there." },
  { title: "Local to the core", body: "We're a San Jose studio. We know the neighborhoods and how people here search." },
];

const AREAS = [
  "San Jose", "Willow Glen", "Almaden Valley", "Evergreen", "Berryessa", "Japantown",
  "Campbell", "Los Gatos", "Santa Clara", "Cupertino", "Milpitas", "Sunnyvale",
];

export default function AboutPage() {
  return (
    <>
      <PageHeader
        eyebrow="About the studio"
        title={<>A local studio for local businesses.</>}
        subtitle="South Bay Web Studios builds fast, beautiful websites for San Jose small businesses, without the monthly bill."
      />

      <section className="wrap pb-20 sm:pb-28">
        <div className="grid items-start gap-10 lg:grid-cols-[1.3fr_1fr] lg:gap-20">
          <Reveal>
            <h2>Why we do it differently.</h2>
            <div className="mt-6 space-y-4 text-lg text-muted">
              <p>Too many small businesses pay every month for a simple website. We think a good local site should be a one-time purchase that you own.</p>
              <p>So we build fast, lightweight, mobile-first sites and price them clearly: $300, $500 or $800. When it&apos;s done, it&apos;s yours.</p>
              <p>And before you spend anything, we&apos;ll mock up your homepage for free so you can see it on your own business.</p>
            </div>
          </Reveal>
          <Reveal delay={100}>
            <div className="panel p-8 sm:p-10">
              <p className="text-7xl font-semibold tracking-[-0.05em]">$0<span className="text-2xl font-medium text-muted"> / month</span></p>
              <p className="mt-3 text-muted">Hosting fees on every plan. That&apos;s the whole idea.</p>
              <dl className="mt-8 grid grid-cols-3 gap-3 text-center">
                {[["3", "Simple tiers"], ["1×", "One-time price"], ["100%", "Mobile-first"]].map(([n, l]) => (
                  <div key={l} className="rounded-lg border border-line bg-paper p-3">
                    <dt className="text-2xl font-semibold">{n}</dt>
                    <dd className="mt-1 text-xs text-muted">{l}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="wrap pb-20 sm:pb-28">
        <Reveal>
          <h2>What we stand for.</h2>
        </Reveal>
        <div className="mt-12 grid gap-x-10 gap-y-10 md:grid-cols-3">
          {VALUES.map((v, i) => (
            <Reveal key={v.title} delay={i * 80}>
              <div className="border-t border-ink pt-5">
                <h3>{v.title}</h3>
                <p className="mt-3 text-muted">{v.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="wrap pb-20 sm:pb-28">
        <Reveal>
          <h2>Proudly serving the South Bay.</h2>
          <ul className="mt-8 flex flex-wrap gap-3">
            {AREAS.map((a) => (
              <li key={a} className="rounded-md border border-line bg-surface px-4 py-2 text-[15px] font-medium">{a}</li>
            ))}
          </ul>
        </Reveal>
      </section>
      <CTABand />
    </>
  );
}
