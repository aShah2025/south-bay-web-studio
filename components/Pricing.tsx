import Link from "next/link";
import { PLANS } from "@/lib/site";
import Reveal from "./Reveal";

export default function Pricing({ heading = true }: { heading?: boolean }) {
  return (
    <section className="wrap py-16 sm:py-24">
      {heading && (
        <Reveal className="grid gap-6 md:grid-cols-[1.3fr_1fr] md:gap-20">
          <h2>Pay once. Own it forever.</h2>
          <p className="text-lg text-muted md:text-xl">
            <strong className="text-ink">Zero Monthly Hosting Fees</strong> on every plan.
          </p>
        </Reveal>
      )}
      <div className={`${heading ? "mt-14" : ""} grid items-stretch gap-5 lg:grid-cols-3`}>
        {PLANS.map((p, i) => (
          <Reveal key={p.name} delay={i * 80} className="h-full">
            <div
              className={`relative flex h-full flex-col rounded-xl bg-surface p-7 sm:p-8 ${
                p.popular ? "border-2 border-charcoal" : "border border-line"
              }`}
            >
              {p.popular && (
                <span className="absolute -top-3.5 left-7 rounded-md bg-charcoal px-3 py-1 text-xs font-semibold text-surface">
                  Most Popular
                </span>
              )}
              <h3>{p.name}</h3>
              <p className="mt-1 text-[15px] text-muted">{p.tagline}</p>
              <p className="mt-6 flex items-baseline gap-2">
                <span className="text-6xl font-semibold tracking-[-0.05em]">{p.price}</span>
                <span className="text-[15px] text-muted">one-time</span>
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                <span className="tag">$0/month hosting fees</span>
                <span className="tag !border-charcoal !bg-charcoal !text-surface">{p.delivery}</span>
              </div>
              {p.inherits && <p className="mt-6 text-[15px] font-semibold">{p.inherits}</p>}
              <ul className={`${p.inherits ? "mt-3" : "mt-6"} flex-1 space-y-3 text-[15px]`}>
                {p.features.map((f) => (
                  <li key={f} className="flex gap-3">
                    <svg className="mt-1 h-4 w-4 shrink-0" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
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
          </Reveal>
        ))}
      </div>
    </section>
  );
}
