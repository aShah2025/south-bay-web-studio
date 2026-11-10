import Link from "next/link";
import { DEMOS, hostOf } from "@/lib/site";

export default function Demos() {
  return (
    <section className="section">
      <div className="container-x">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl sm:text-4xl">See real sites before you buy</h2>
          <p className="mt-4 text-lg text-slate-600">
            One live demo for each plan. They&apos;re fictional sample businesses, built so you can see what yours could look like.
          </p>
        </div>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {DEMOS.map((d) => (
            <a
              key={d.name}
              href={d.url}
              target="_blank"
              rel="noopener noreferrer"
              className="card group flex flex-col overflow-hidden transition hover:-translate-y-1 hover:shadow-lg"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={`/demos/${d.shot}-desktop.jpg`}
                alt={`Screenshot of the ${d.name} sample website`}
                width={1280}
                height={800}
                loading="lazy"
                className="aspect-[16/10] w-full border-b border-slate-200 object-cover object-top"
              />
              <div className="flex flex-1 flex-col p-6">
                <div className="flex items-center justify-between gap-3">
                  <p className="text-sm font-semibold text-blue-600">{d.tier} · {d.price}</p>
                  <span className="tag-sample">Sample business</span>
                </div>
                <h3 className="mt-3 text-xl">{d.name}</h3>
                <p className="mt-1 text-sm text-slate-500">{d.type}</p>
                <p className="mt-3 flex-1 text-[15px] text-slate-600">{d.blurb}</p>
                <span className="mt-5 text-[15px] font-semibold text-blue-600 group-hover:underline">
                  Open live demo →<span className="sr-only"> (opens in a new tab)</span>
                </span>
                <span className="sr-only">{hostOf(d.url)}</span>
              </div>
            </a>
          ))}
        </div>
        <div className="mt-10 text-center">
          <Link href="/work/" className="btn-secondary">See all work</Link>
        </div>
      </div>
    </section>
  );
}
