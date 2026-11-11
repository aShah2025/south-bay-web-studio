import type { Metadata } from "next";
import { DEMOS, hostOf } from "@/lib/site";
import PageHeader from "@/components/PageHeader";
import { BrowserFrame, PhoneFrame } from "@/components/Frames";
import CTABand from "@/components/CTABand";

export const metadata: Metadata = {
  title: "Work",
  description: "Live demo sites for each South Bay Web Studios plan: Starter, Growth and Pro.",
};

const DETAILS: Record<string, string[]> = {
  Starter: ["Tap-to-call and text buttons", "Services, hours & map", "Mobile-responsive", "Basic SEO"],
  Growth: ["Home, About & Contact pages", "Quote-request form", "Local San Jose SEO", "Photo gallery"],
  Pro: ["5 full pages", "Online booking widget", "Google Reviews showcase", "FAQ + 30 days of free edits"],
};

export default function WorkPage() {
  return (
    <>
      <PageHeader
        eyebrow="Live demos"
        title={<>Real sites you can click through</>}
        subtitle="One demo for every plan. They're fictional sample businesses, built so you can see exactly what your business could look like."
      />
      <section className="section">
        <div className="container-x space-y-20 sm:space-y-28">
          {DEMOS.map((d, i) => (
            <article key={d.name} className="grid items-center gap-10 lg:grid-cols-[1.15fr_1fr] lg:gap-16">
              <a
                href={d.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Open the ${d.name} demo (opens in a new tab)`}
                className={`relative block pb-8 ${i % 2 ? "lg:order-2" : ""}`}
              >
                <BrowserFrame
                  src={`/demos/${d.shot}-desktop.jpg`}
                  alt={`Screenshot of the ${d.name} sample website on a laptop`}
                  url={hostOf(d.url)}
                />
                <PhoneFrame
                  src={`/demos/${d.shot}-mobile.jpg`}
                  alt={`Screenshot of the ${d.name} sample website on a phone`}
                  className="absolute -bottom-0 right-4 w-[26%] max-w-[140px]"
                />
              </a>
              <div>
                <div className="flex flex-wrap items-center gap-3">
                  <p className="text-sm font-semibold text-ink">{d.tier} plan · {d.price} demo · {d.type}</p>
                  <span className="tag-sample">Sample business · Not a real company</span>
                </div>
                <h2 className="mt-3">{d.name}</h2>
                <p className="mt-4 text-lg text-muted">{d.blurb}</p>
                <ul className="mt-6 grid gap-3 sm:grid-cols-2">
                  {DETAILS[d.tier].map((f) => (
                    <li key={f} className="flex items-center gap-2.5 text-[15px] font-medium text-ink">
                      <svg className="h-5 w-5 shrink-0 text-ink" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                        <path fillRule="evenodd" d="M16.7 5.3a1 1 0 010 1.4l-7.5 7.5a1 1 0 01-1.4 0L3.3 9.7a1 1 0 011.4-1.4l3.8 3.8 6.8-6.8a1 1 0 011.4 0z" clipRule="evenodd" />
                      </svg>
                      {f}
                    </li>
                  ))}
                </ul>
                <a href={d.url} target="_blank" rel="noopener noreferrer" className="btn-primary mt-8">
                  Open live demo <span className="sr-only">(opens in a new tab)</span>
                </a>
              </div>
            </article>
          ))}
        </div>
      </section>
      <CTABand />
    </>
  );
}
