import Link from "next/link";
import { BrowserFrame, PhoneFrame } from "../Frames";

export default function Hero() {
  return (
    <section className="overflow-hidden bg-gradient-to-b from-slate-50 to-white">
      <div className="container-x grid items-center gap-12 py-14 sm:py-20 lg:grid-cols-[1fr_1.1fr] lg:gap-14 lg:py-24">
        <div>
          <p className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-1.5 text-sm font-medium text-slate-700">
            <span className="h-2 w-2 rounded-full bg-green-500" /> Web design studio in San Jose, CA
          </p>
          <h1 className="mt-6 text-4xl sm:text-5xl lg:text-[3.4rem]">
            Modern Websites for San Jose Small Businesses. <span className="text-blue-600">One Simple Price.</span>
          </h1>
          <p className="mt-6 max-w-xl text-lg text-slate-600 sm:text-xl">
            A fast, mobile-first website for your business in 2 to 4 weeks. Pay once for the design and own it. Hosting is included, and your domain name is the only yearly cost.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <Link href="/contact/" className="btn-primary">Request Your Free Homepage Preview</Link>
            <Link href="/work/" className="btn-secondary">See Live Demos</Link>
          </div>
          <ul className="mt-8 grid gap-2 text-[15px] text-slate-700 sm:grid-cols-3 sm:gap-4">
            {["Free preview first", "Built for phones", "From $300, one time"].map((t) => (
              <li key={t} className="flex items-center gap-2">
                <svg className="h-5 w-5 shrink-0 text-blue-600" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                  <path fillRule="evenodd" d="M16.7 5.3a1 1 0 010 1.4l-7.5 7.5a1 1 0 01-1.4 0L3.3 9.7a1 1 0 011.4-1.4l3.8 3.8 6.8-6.8a1 1 0 011.4 0z" clipRule="evenodd" />
                </svg>
                {t}
              </li>
            ))}
          </ul>
        </div>

        <div className="relative pb-10 pl-6 sm:pl-10">
          <BrowserFrame
            src="/demos/silicon-desktop.jpg"
            alt="Screenshot of the Silicon Valley Elite Tutoring sample website on a laptop"
            url="silicon-valley-elite-tutoring.vercel.app"
            priority
          />
          <PhoneFrame
            src="/demos/almaden-mobile.jpg"
            alt="Screenshot of the Almaden Mobile Detailing sample website on a phone"
            className="absolute bottom-0 left-0 w-[24%] max-w-[125px]"
          />
        </div>
      </div>
    </section>
  );
}
