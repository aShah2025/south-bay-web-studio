import type { Metadata } from "next";
import { DEMOS, hostOf } from "@/lib/site";
import PageHeader from "@/components/PageHeader";
import BrowserMock from "@/components/BrowserMock";
import Reveal from "@/components/Reveal";
import CTABand from "@/components/CTABand";

export const metadata: Metadata = {
  title: "Work",
  description: "Live demo sites for each South Bay Web Studio tier: Starter, Growth and Pro.",
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
        title={<>Real sites. <span className="gradient-text">Real results.</span></>}
        subtitle="One live demo for every tier. These are fictional sample businesses, built so you can see exactly what your business could look like."
      />
      <section className="pb-20 sm:pb-28">
        <div className="mx-auto max-w-6xl space-y-20 px-4 sm:space-y-28 sm:px-6">
          {DEMOS.map((d, i) => (
            <div key={d.name} className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
              <Reveal className={i % 2 ? "lg:order-2" : ""}>
                <a href={d.url} target="_blank" rel="noopener noreferrer" className="group block" aria-label={`Open ${d.name} demo (opens in a new tab)`}>
                  <div className={`relative rounded-3xl bg-gradient-to-br ${d.accent} p-6 sm:p-10`}>
                    <BrowserMock level={(i + 1) as 1 | 2 | 3} accent={d.accent} url={hostOf(d.url)} className="transition duration-500 group-hover:-translate-y-2 group-hover:rotate-1" />
                    <span className="absolute right-4 top-4 rounded-full bg-slate-900/85 px-3 py-1 text-xs font-semibold text-white sm:right-6 sm:top-6">{d.price} Demo</span>
                  </div>
                </a>
              </Reveal>
              <Reveal delay={120}>
                <p className="eyebrow">{d.tier} · {d.type}</p>
                <p className="mt-3 inline-flex rounded-full border border-amber-200 bg-amber-50 px-3 py-1 text-xs font-bold uppercase tracking-wide text-amber-700">Sample business · Not a real company</p>
                <h2 className="mt-5 text-3xl font-extrabold tracking-tight sm:text-4xl">{d.name}</h2>
                <p className="mt-4 leading-relaxed text-slate-600">{d.blurb}</p>
                <ul className="mt-6 grid gap-3 sm:grid-cols-2">
                  {DETAILS[d.tier].map((f) => (
                    <li key={f} className="flex items-center gap-2.5 text-sm font-medium text-slate-700">
                      <svg className="h-5 w-5 shrink-0 text-blue-600" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
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
