import Logo from "./Logo";
import { SITE } from "@/lib/site";

export default function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white">
      <div className="mx-auto flex max-w-6xl flex-col gap-8 px-4 py-12 sm:px-6 md:flex-row md:items-start md:justify-between">
        <div className="max-w-sm">
          <Logo />
          <p className="mt-4 text-sm leading-relaxed text-slate-600">
            Modern, mobile-first websites for small businesses across the South Bay. One-time pricing,
            zero monthly fees.
          </p>
        </div>
        <div className="grid grid-cols-2 gap-10 text-sm">
          <div>
            <h4 className="font-semibold">Explore</h4>
            <ul className="mt-3 space-y-2 text-slate-600">
              <li><a className="hover:text-blue-600" href="#work">Work</a></li>
              <li><a className="hover:text-blue-600" href="#pricing">Pricing</a></li>
              <li><a className="hover:text-blue-600" href="#contact">Free Preview</a></li>
            </ul>
          </div>
          <div>
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
      </div>
      <div className="border-t border-slate-100 py-6 text-center text-xs text-slate-500">
        © {new Date().getFullYear()} {SITE.name}. All rights reserved.
      </div>
    </footer>
  );
}
