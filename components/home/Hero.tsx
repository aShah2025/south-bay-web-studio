import Link from "next/link";
import BrowserMock from "../BrowserMock";
import Icon from "../Icon";

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div aria-hidden="true" className="bg-grid absolute inset-0 -z-10" />
      <div aria-hidden="true" className="absolute -left-20 top-0 -z-10 h-96 w-96 animate-blob rounded-full bg-blue-400/30 blur-3xl" />
      <div aria-hidden="true" className="absolute right-0 top-20 -z-10 h-96 w-96 animate-blob rounded-full bg-sky-300/40 blur-3xl [animation-delay:-7s]" />
      <div aria-hidden="true" className="absolute bottom-0 left-1/3 -z-10 h-80 w-80 animate-blob rounded-full bg-indigo-300/30 blur-3xl [animation-delay:-12s]" />

      <div className="mx-auto grid max-w-6xl items-center gap-14 px-4 pb-24 pt-16 sm:px-6 sm:pt-24 lg:grid-cols-[1.1fr_1fr]">
        <div className="text-center lg:text-left">
          <p className="eyebrow">
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-blue-600" /> Proudly serving San Jose, CA
          </p>
          <h1 className="mt-6 text-4xl font-extrabold leading-[1.08] tracking-tight sm:text-6xl">
            Modern Websites for San Jose Small Businesses. <span className="gradient-text">One Simple Price.</span>
          </h1>
          <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-slate-600 lg:mx-0">
            Get a fast, mobile-first website live in weeks, not months. Pay once for the design and own it. Hosting is included, and your domain name is the only yearly cost.
          </p>
          <div className="mt-10 flex flex-col items-stretch justify-center gap-3 sm:flex-row sm:items-center lg:justify-start">
            <Link href="/contact/" className="btn-primary">Request Your Free Homepage Preview</Link>
            <Link href="/work/" className="btn-secondary">See Live Demos</Link>
          </div>
          <ul className="mt-10 flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm text-slate-600 lg:justify-start">
            {["Fast turnaround", "Mobile-first design", "One-time pricing"].map((t) => (
              <li key={t} className="flex items-center gap-2">
                <svg className="h-4 w-4 text-blue-600" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                  <path fillRule="evenodd" d="M16.7 5.3a1 1 0 010 1.4l-7.5 7.5a1 1 0 01-1.4 0L3.3 9.7a1 1 0 011.4-1.4l3.8 3.8 6.8-6.8a1 1 0 011.4 0z" clipRule="evenodd" />
                </svg>
                {t}
              </li>
            ))}
          </ul>
        </div>

        <div className="relative mx-auto w-full max-w-md lg:max-w-none">
          <div className="animate-float">
            <BrowserMock level={3} accent="from-blue-500 to-indigo-600" url="silicon-valley-tutoring.com" className="rotate-2" />
          </div>
          <div className="absolute -bottom-8 -left-4 w-44 animate-float [animation-delay:-3s] sm:-left-10 sm:w-56">
            <BrowserMock level={1} accent="from-sky-400 to-blue-600" url="almaden-detailing.com" className="-rotate-3" />
          </div>
          <div className="glass absolute -right-2 top-6 flex items-center gap-2 px-3 py-2 text-xs font-semibold shadow-xl sm:-right-6">
            <span className="grid h-7 w-7 place-items-center rounded-full bg-blue-600 text-white"><Icon name="dollar" className="h-4 w-4" /></span>
            Hosting included
          </div>
          <div className="glass absolute -left-2 top-1/2 hidden items-center gap-2 px-3 py-2 text-xs font-semibold shadow-xl sm:flex">
            <span className="grid h-7 w-7 place-items-center rounded-full bg-sky-500 text-white"><Icon name="phone" className="h-4 w-4" /></span>
            Mobile-first
          </div>
        </div>
      </div>
    </section>
  );
}
