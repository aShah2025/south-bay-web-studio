import Link from "next/link";
import { DEMOS } from "@/lib/site";
import BrowserMock from "../BrowserMock";
import Reveal from "../Reveal";
import Spotlight from "../Spotlight";

export default function Demos() {
  return (
    <section className="bg-slate-50 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="eyebrow mx-auto">Live demos</p>
          <h2 className="mt-5 text-3xl font-extrabold tracking-tight sm:text-5xl">See it before you buy it</h2>
          <p className="mt-4 text-slate-600">Three live demo sites, one for each tier. Click through on your phone or desktop.</p>
        </Reveal>
        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {DEMOS.map((d, i) => (
            <Reveal key={d.name} delay={i * 100} className="h-full">
              <Spotlight className="glass h-full transition hover:-translate-y-1 hover:shadow-2xl">
                <a
                  href={d.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex h-full flex-col focus-visible:outline focus-visible:outline-2 focus-visible:outline-blue-600"
                >
                  <div className={`relative bg-gradient-to-br ${d.accent} p-5`}>
                    <BrowserMock level={(i + 1) as 1 | 2 | 3} accent={d.accent} url={d.name.toLowerCase().replace(/\s+/g, "-") + ".com"} className="transition group-hover:scale-[1.03]" />
                    <span className="absolute right-7 top-7 rounded-full bg-slate-900/85 px-2.5 py-1 text-xs font-semibold text-white">{d.price} Demo</span>
                  </div>
                  <div className="flex flex-1 flex-col p-6">
                    <p className="text-xs font-semibold uppercase tracking-wider text-blue-600">{d.tier} · {d.type}</p>
                    <h3 className="mt-2 text-xl font-bold">{d.name}</h3>
                    <p className="mt-2 flex-1 text-sm leading-relaxed text-slate-600">{d.blurb}</p>
                    <span className="mt-5 inline-flex items-center gap-1 text-sm font-semibold text-blue-600">
                      View live demo <span aria-hidden="true" className="transition group-hover:translate-x-1">→</span>
                      <span className="sr-only"> (opens in a new tab)</span>
                    </span>
                  </div>
                </a>
              </Spotlight>
            </Reveal>
          ))}
        </div>
        <div className="mt-10 text-center">
          <Link href="/work/" className="btn-secondary">Explore all work</Link>
        </div>
      </div>
    </section>
  );
}
