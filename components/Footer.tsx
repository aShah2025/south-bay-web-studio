import Link from "next/link";
import Logo from "./Logo";
import { SITE } from "@/lib/site";

export default function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-slate-50 pb-20 md:pb-0">
      <div className="container-x grid gap-10 py-14 md:grid-cols-[1.5fr_1fr_1fr]">
        <div className="max-w-sm">
          <Logo />
          <p className="mt-4 text-[15px] text-slate-600">
            Modern, mobile-first websites for small businesses across the South Bay. One simple, one-time price with hosting included.
          </p>
        </div>
        <div className="text-[15px]">
          <h2 className="!text-base">Explore</h2>
          <ul className="mt-3 space-y-1 text-slate-600">
            {[["/work/", "Work"], ["/pricing/", "Pricing"], ["/about/", "About"], ["/contact/", "Free Preview"]].map(([h, l]) => (
              <li key={h}>
                <Link className="inline-flex min-h-9 items-center hover:text-blue-600" href={h}>{l}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="text-[15px]">
          <h2 className="!text-base">Location</h2>
          <address className="mt-3 not-italic text-slate-600">
            {SITE.location}
            <br />
            Serving San Jose, Willow Glen,
            <br />
            Almaden &amp; the South Bay
            <br />
            <a className="hover:text-blue-600" href={`mailto:${SITE.email}`}>{SITE.email}</a>
          </address>
        </div>
      </div>
      <div className="border-t border-slate-200 py-6 text-center text-sm text-slate-500">
        © {new Date().getFullYear()} {SITE.name}. All rights reserved.
      </div>
    </footer>
  );
}
