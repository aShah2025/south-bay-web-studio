import Link from "next/link";
import Logo from "./Logo";
import { SITE } from "@/lib/site";

export default function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-slate-50">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-14 sm:px-6 md:grid-cols-[1.5fr_1fr_1fr]">
        <div className="max-w-sm">
          <Logo />
          <p className="mt-4 text-sm leading-relaxed text-slate-600">
            Modern, mobile-first websites for small businesses across the South Bay. One-time pricing, zero monthly fees.
          </p>
        </div>
        <div className="text-sm">
          <h4 className="font-semibold">Explore</h4>
          <ul className="mt-3 space-y-2 text-slate-600">
            <li><Link className="hover:text-blue-600" href="/work/">Work</Link></li>
            <li><Link className="hover:text-blue-600" href="/pricing/">Pricing</Link></li>
            <li><Link className="hover:text-blue-600" href="/about/">About</Link></li>
            <li><Link className="hover:text-blue-600" href="/contact/">Free Preview</Link></li>
          </ul>
        </div>
        <div className="text-sm">
          <h4 className="font-semibold">Location</h4>
          <address className="mt-3 not-italic leading-relaxed text-slate-600">
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
      <div className="border-t border-slate-200 py-6 text-center text-xs text-slate-500">
        © {new Date().getFullYear()} {SITE.name}. All rights reserved.
      </div>
    </footer>
  );
}
