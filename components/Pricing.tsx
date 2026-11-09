import { PLANS } from "@/lib/site";

function Check() {
  return (
    <svg className="mt-0.5 h-5 w-5 shrink-0 text-blue-600" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
      <path
        fillRule="evenodd"
        d="M16.7 5.3a1 1 0 010 1.4l-7.5 7.5a1 1 0 01-1.4 0L3.3 9.7a1 1 0 011.4-1.4l3.8 3.8 6.8-6.8a1 1 0 011.4 0z"
        clipRule="evenodd"
      />
    </svg>
  );
}

export default function Pricing() {
  return (
    <section id="pricing" className="section-anchor py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Simple, one-time pricing</h2>
          <p className="mt-4 text-slate-600">
            Pay once. <strong className="text-slate-900">Zero Monthly Hosting Fees</strong>, ever.
          </p>
        </div>
        <div className="mt-14 grid items-stretch gap-6 lg:grid-cols-3">
          {PLANS.map((p) => (
            <div
              key={p.name}
              className={`glass relative flex flex-col p-8 ${
                p.popular ? "border-blue-600 ring-2 ring-blue-600 lg:-translate-y-3" : ""
              }`}
            >
              {p.popular && (
                <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 rounded-full bg-blue-600 px-4 py-1 text-xs font-bold text-white shadow-md">
                  Most Popular
                </span>
              )}
              <h3 className="text-lg font-bold">{p.name}</h3>
              <p className="mt-1 text-sm text-slate-500">{p.tagline}</p>
              <p className="mt-6 flex items-baseline gap-1">
                <span className="text-5xl font-extrabold tracking-tight">{p.price}</span>
                <span className="text-sm font-medium text-slate-500">one-time</span>
              </p>
              <p className="mt-3 inline-flex w-fit rounded-full bg-blue-50 px-3 py-1 text-xs font-semibold text-blue-700">
                $0/month hosting fees
              </p>
              {p.inherits && <p className="mt-6 text-sm font-semibold text-slate-900">{p.inherits}</p>}
              <ul className={`${p.inherits ? "mt-3" : "mt-6"} flex-1 space-y-3 text-sm text-slate-700`}>
                {p.features.map((f) => (
                  <li key={f} className="flex gap-3">
                    <Check />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
              <a href="#contact" className={`${p.popular ? "btn-primary" : "btn-secondary"} mt-8`}>
                Get a Free Preview
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
