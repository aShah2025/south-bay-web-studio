import Link from "next/link";
import { DEMOS, hostOf } from "@/lib/site";
import BrowserMock from "../BrowserMock";
import Reveal from "../Reveal";

export default function Demos() {
  return (
    <section className="wrap py-20 sm:py-28">
      <Reveal className="grid gap-6 md:grid-cols-[1.3fr_1fr] md:gap-20">
        <h2>See it before you buy it.</h2>
        <p className="text-lg text-muted md:text-xl">
          Three live demo sites, one for each tier. They&apos;re fictional sample businesses, built to show what we can do.
        </p>
      </Reveal>
      <div className="mt-12 grid gap-5 md:grid-cols-3">
        {DEMOS.map((d, i) => (
          <Reveal key={d.name} delay={i * 80} className="h-full">
            <a
              href={d.url}
              target="_blank"
              rel="noopener noreferrer"
              className="panel group flex h-full flex-col transition hover:shadow-[0_8px_28px_rgba(21,27,34,0.10)]"
            >
              <div className={`bg-gradient-to-br ${d.accent} p-5`}>
                <BrowserMock level={(i + 1) as 1 | 2 | 3} accent={d.accent} url={hostOf(d.url)} className="transition group-hover:-translate-y-1" />
              </div>
              <div className="flex flex-1 flex-col p-6">
                <p className="text-sm font-semibold text-muted">
                  {d.tier} · {d.price} demo · {d.type}
                </p>
                <h3 className="mt-2">{d.name}</h3>
                <span className="mt-3 inline-flex w-fit rounded-md bg-[#f6ecd0] px-2.5 py-1 text-xs font-semibold text-ink">
                  Sample business · Not real
                </span>
                <p className="mt-3 flex-1 text-[15px] text-muted">{d.blurb}</p>
                <span className="mt-5 text-[15px] font-semibold underline underline-offset-4">
                  View live demo<span className="sr-only"> (opens in a new tab)</span>
                </span>
              </div>
            </a>
          </Reveal>
        ))}
      </div>
      <div className="mt-10">
        <Link href="/work/" className="btn-secondary">Explore all work</Link>
      </div>
    </section>
  );
}
