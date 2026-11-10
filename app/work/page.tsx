import type { Metadata } from "next";
import { DEMOS, hostOf } from "@/lib/site";
import PageHeader from "@/components/PageHeader";
import BrowserMock from "@/components/BrowserMock";
import Reveal from "@/components/Reveal";
import CTABand from "@/components/CTABand";

export const metadata: Metadata = {
  title: "Work",
  description: "Live demo sites for each South Bay Web Studios tier: Starter, Growth and Pro.",
};

const DETAILS: Record<string, string[]> = {
  Starter: ["Click-to-call button", "Hours & Google Map", "Mobile-responsive", "Basic SEO"],
  Growth: ["Home, About & Contact pages", "Working lead form", "Local San Jose SEO", "Mobile-responsive"],
  Pro: ["5 full pages", "Online booking widget", "Google Reviews showcase", "30 days of free edits"],
};

export default function WorkPage() {
  return (
    <>
      <PageHeader
        eyebrow="Live demos"
        title={<>Real sites. Real results.</>}
        subtitle="One live demo for every tier. These are fictional sample businesses, built so you can see exactly what your business could look like."
      />
      <section className="wrap pb-20 sm:pb-28">
        <div className="space-y-16 sm:space-y-24">
          {DEMOS.map((d, i) => (
            <div key={d.name} className="grid items-center gap-8 lg:grid-cols-2 lg:gap-16">
              <Reveal className={i % 2 ? "lg:order-2" : ""}>
                <a href={d.url} target="_blank" rel="noopener noreferrer" className="group block" aria-label={`Open ${d.name} demo (opens in a new tab)`}>
                  <div className={`rounded-xl bg-gradient-to-br ${d.accent} p-6 sm:p-10`}>
                    <BrowserMock level={(i + 1) as 1 | 2 | 3} accent={d.accent} url={hostOf(d.url)} className="transition duration-500 group-hover:-translate-y-1" />
                  </div>
                </a>
              </Reveal>
              <Reveal delay={100}>
                <p className="text-[15px] font-semibold text-muted">{d.tier} · {d.price} demo · {d.type}</p>
                <h2 className="mt-3 !text-[clamp(30px,3.4vw,44px)]">{d.name}</h2>
                <span className="mt-4 inline-flex rounded-md bg-[#f6ecd0] px-2.5 py-1 text-xs font-semibold">Sample business · Not a real company</span>
                <p className="mt-4 text-lg text-muted">{d.blurb}</p>
                <ul className="mt-6 grid gap-3 sm:grid-cols-2">
                  {DETAILS[d.tier].map((f) => (
                    <li key={f} className="flex items-center gap-2.5 text-[15px] font-medium">
                      <svg className="h-4 w-4 shrink-0" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                        <path fillRule="evenodd" d="M16.7 5.3a1 1 0 010 1.4l-7.5 7.5a1 1 0 01-1.4 0L3.3 9.7a1 1 0 011.4-1.4l3.8 3.8 6.8-6.8a1 1 0 011.4 0z" clipRule="evenodd" />
                      </svg>
                      {f}
                    </li>
                  ))}
                </ul>
                <a href={d.url} target="_blank" rel="noopener noreferrer" className="btn-primary mt-8">
                  View live demo <span className="sr-only">(opens in a new tab)</span>
                </a>
              </Reveal>
            </div>
          ))}
        </div>
      </section>
      <CTABand />
    </>
  );
}
