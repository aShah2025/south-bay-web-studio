import Link from "next/link";
import { PLANS } from "@/lib/site";
import Reveal from "./Reveal";
import Spotlight from "./Spotlight";
import Icon from "./Icon";

export default function Pricing({ heading = true }: { heading?: boolean }) {
  return (
    <section className="py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        {heading && (
          <Reveal className="mx-auto max-w-2xl text-center">
            <p className="eyebrow mx-auto">Transparent pricing</p>
            <h2 className="mt-5 text-3xl font-extrabold tracking-tight sm:text-5xl">Pay once. Own it forever.</h2>
            <p className="mt-4 text-slate-600">
              <strong className="text-slate-900">Hosting included</strong> on every plan. Your domain name is the only yearly cost.
            </p>
          </Reveal>
        )}
        <div className="mt-14 grid items-stretch gap-6 lg:grid-cols-3">
          {PLANS.map((p, i) => (
            <Reveal key={p.name} delay={i * 100} className="h-full">
              <Spotlight
                className={`glass flex h-full flex-col p-8 transition hover:-translate-y-1 hover:shadow-2xl ${
                  p.popular ? "border-blue-600 ring-2 ring-blue-600 lg:-translate-y-3 lg:hover:-translate-y-4" : ""
                }`}
              >
                {p.popular && (
                  <span className="absolute -top-0 left-1/2 -translate-x-1/2 rounded-b-xl bg-blue-600 px-4 py-1 text-xs font-bold text-white shadow-md">
                    Most Popular
                  </span>
                )}
                <h3 className="text-lg font-bold">{p.name}</h3>
                <p className="mt-1 text-sm text-slate-500">{p.tagline}</p>
                <p className="mt-6 flex items-baseline gap-1">
                  <span className="text-5xl font-extrabold tracking-tight">{p.price}</span>
                  <span className="text-sm font-medium text-slate-500">one-time</span>
                </p>
                <div className="mt-3 flex flex-wrap gap-2">
                  <p className="inline-flex w-fit items-center gap-1.5 rounded-full bg-blue-50 px-3 py-1 text-xs font-semibold text-blue-700">
                    <Icon name="shield" className="h-3.5 w-3.5" /> Hosting included
                  </p>
                  <p className="inline-flex w-fit items-center gap-1.5 rounded-full bg-slate-900 px-3 py-1 text-xs font-semibold text-white">
                    <Icon name="calendar" className="h-3.5 w-3.5" /> {p.delivery}
                  </p>
                </div>
                {p.inherits && <p className="mt-6 text-sm font-semibold text-slate-900">{p.inherits}</p>}
                <ul className={`${p.inherits ? "mt-3" : "mt-6"} flex-1 space-y-3 text-sm text-slate-700`}>
                  {p.features.map((f) => (
                    <li key={f} className="flex gap-3">
                      <svg className="mt-0.5 h-5 w-5 shrink-0 text-blue-600" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                        <path fillRule="evenodd" d="M16.7 5.3a1 1 0 010 1.4l-7.5 7.5a1 1 0 01-1.4 0L3.3 9.7a1 1 0 011.4-1.4l3.8 3.8 6.8-6.8a1 1 0 011.4 0z" clipRule="evenodd" />
                      </svg>
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
                <Link href="/contact/" className={`${p.popular ? "btn-primary" : "btn-secondary"} mt-8`}>
                  Get a Free Preview
                </Link>
              </Spotlight>
            </Reveal>
          ))}
        </div>

        <Reveal delay={100}>
          <div className="glass mt-12 p-6 sm:p-10">
            <h3 className="text-xl font-bold sm:text-2xl">What you pay for, in plain English</h3>
            <div className="mt-6 grid gap-6 md:grid-cols-3">
              {[
                ["Your website design", "$300, $500 or $800, one time", "Paid to us. Covers the design, the build and your revision rounds."],
                ["Web hosting", "Included, $0 per month", "Hosting is the computer that shows your site to visitors. Most agencies bill $50 to $150 a month for it. We include it."],
                ["Your domain name", "About $10 to $20 per year", "Your address, like yourbusiness.com. You buy it from a registrar, it's in your name, and it renews yearly. Already own one? Nothing extra."],
              ].map(([t, price, body]) => (
                <div key={t} className="rounded-xl border border-slate-200 bg-white p-5">
                  <p className="text-sm font-semibold text-slate-500">{t}</p>
                  <p className="mt-1 text-lg font-bold text-slate-900">{price}</p>
                  <p className="mt-2 text-sm leading-relaxed text-slate-600">{body}</p>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
