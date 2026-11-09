import { DEMOS } from "@/lib/site";

export default function Demos() {
  return (
    <section id="work" className="section-anchor bg-slate-50 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">See it before you buy it</h2>
          <p className="mt-4 text-slate-600">
            Three live demo sites, one for each tier. Click through them on your phone or desktop.
          </p>
        </div>
        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {DEMOS.map((d) => (
            <a
              key={d.name}
              href={d.url}
              target="_blank"
              rel="noopener noreferrer"
              className="glass group flex flex-col overflow-hidden transition hover:-translate-y-1 hover:shadow-xl focus-visible:outline focus-visible:outline-2 focus-visible:outline-blue-600"
            >
              <div className={`relative h-44 bg-gradient-to-br ${d.accent} p-4`}>
                <div className="h-full rounded-lg bg-white/90 p-3 shadow-inner">
                  <div className="flex gap-1">
                    <span className="h-2 w-2 rounded-full bg-slate-300" />
                    <span className="h-2 w-2 rounded-full bg-slate-300" />
                    <span className="h-2 w-2 rounded-full bg-slate-300" />
                  </div>
                  <div className="mt-3 h-3 w-2/3 rounded bg-slate-800/80" />
                  <div className="mt-2 h-2 w-full rounded bg-slate-200" />
                  <div className="mt-1.5 h-2 w-5/6 rounded bg-slate-200" />
                  <div className="mt-4 h-6 w-20 rounded-full bg-blue-600" />
                </div>
                <span className="absolute right-6 top-6 rounded-full bg-slate-900/80 px-2.5 py-1 text-xs font-semibold text-white">
                  {d.price} Demo
                </span>
              </div>
              <div className="flex flex-1 flex-col p-6">
                <p className="text-xs font-semibold uppercase tracking-wider text-blue-600">
                  {d.tier} · {d.type}
                </p>
                <h3 className="mt-2 text-xl font-bold">{d.name}</h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-slate-600">{d.blurb}</p>
                <span className="mt-5 inline-flex items-center gap-1 text-sm font-semibold text-blue-600">
                  View live demo
                  <span aria-hidden="true" className="transition group-hover:translate-x-1">
                    →
                  </span>
                  <span className="sr-only"> (opens in a new tab)</span>
                </span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
