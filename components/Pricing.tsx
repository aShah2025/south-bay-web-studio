import Link from "next/link";
import { PLANS } from "@/lib/site";

export default function Pricing({ heading = true }: { heading?: boolean }) {
  return (
    <section className="section">
      <div className="container-x">
        {heading && (
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl sm:text-4xl">Simple, one-time pricing</h2>
            <p className="mt-4 text-lg text-slate-600">
              Pick a plan, pay once. <strong className="text-slate-900">Hosting is included</strong> on every plan.
            </p>
          </div>
        )}
        <div className={`${heading ? "mt-14" : ""} grid items-stretch gap-6 lg:grid-cols-3`}>
          {PLANS.map((p) => (
            <div
              key={p.name}
              className={`card relative flex flex-col p-7 sm:p-8 ${p.popular ? "border-2 border-blue-600 shadow-lg lg:-translate-y-2" : ""}`}
            >
              {p.popular && (
                <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 rounded-full bg-blue-600 px-4 py-1 text-xs font-bold text-white">
                  Most Popular
                </span>
              )}
              <h3 className="text-xl">{p.name}</h3>
              <p className="mt-1 text-[15px] text-slate-500">{p.tagline}</p>
              <p className="mt-6 flex items-baseline gap-2">
                <span className="text-5xl font-bold tracking-tight">{p.price}</span>
                <span className="text-[15px] text-slate-500">one-time</span>
              </p>
              <p className="mt-3 inline-flex w-fit rounded-full bg-slate-900 px-3 py-1 text-xs font-semibold text-white">{p.delivery}</p>
              <p className="mt-4 text-[15px] text-slate-600">
                <span className="font-semibold text-slate-900">Best for:</span> {p.bestFor}
              </p>
              <hr className="my-6 border-slate-200" />
              {p.inherits && <p className="mb-3 text-[15px] font-semibold">{p.inherits}</p>}
              <ul className="flex-1 space-y-3 text-[15px] text-slate-700">
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
            </div>
          ))}
        </div>

        <div className="card mt-12 bg-slate-50 p-6 sm:p-10">
          <h3 className="text-xl sm:text-2xl">What you pay for, in plain English</h3>
          <div className="mt-6 grid gap-5 md:grid-cols-3">
            {[
              ["Your website design", "$300, $500 or $800, one time", "Paid to us. Covers the design, the build and your revision rounds."],
              ["Web hosting", "Included, $0 per month", "Hosting is the computer that shows your site to visitors. Most agencies bill $50 to $150 a month for it. We include it."],
              ["Your domain name", "About $10 to $20 per year", "Your address, like yourbusiness.com. You buy it from a registrar, it's in your name, and it renews yearly. Already own one? Nothing extra."],
            ].map(([t, price, body]) => (
              <div key={t} className="rounded-xl border border-slate-200 bg-white p-5">
                <p className="text-sm font-semibold text-slate-500">{t}</p>
                <p className="mt-1 text-lg font-bold">{price}</p>
                <p className="mt-2 text-[15px] text-slate-600">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
