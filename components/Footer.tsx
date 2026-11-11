import Link from "next/link";
import Logo from "./Logo";
import { SITE } from "@/lib/site";

export default function Footer() {
  return (
    <footer className="mx-auto mb-3 w-[min(94%,1440px)] rounded-xl bg-night text-paper">
      <div className="grid gap-10 px-6 py-12 md:grid-cols-[1.6fr_1fr_1fr] md:px-16 md:py-16">
        <div className="max-w-sm">
          <Logo />
          <p className="mt-4 text-[15px] leading-relaxed text-paper/75">
            Modern, mobile-first websites for small businesses across the South Bay. One simple, one-time price with hosting included.
          </p>
        </div>
        <div className="text-[15px]">
          <h2 className="!text-base !tracking-normal">Explore</h2>
          <ul className="mt-3 space-y-1 text-paper/75">
            {[["/work/", "Work"], ["/pricing/", "Pricing"], ["/about/", "About"], ["/contact/", "Free Preview"]].map(([h, l]) => (
              <li key={h}>
                <Link className="inline-flex min-h-9 items-center hover:text-paper hover:underline" href={h}>{l}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="text-[15px]">
          <h2 className="!text-base !tracking-normal">Location</h2>
          <address className="mt-3 not-italic leading-relaxed text-paper/75">
            {SITE.location}
            <br />
            Serving San Jose, Willow Glen,
            <br />
            Almaden &amp; the South Bay
            <br />
            <a className="hover:text-paper hover:underline" href={`mailto:${SITE.email}`}>{SITE.email}</a>
          </address>
        </div>
      </div>
      <div className="border-t border-paper/15 px-6 py-5 text-sm text-paper/60 md:px-16">
        © {new Date().getFullYear()} {SITE.name}. All rights reserved. Hero illustration from the MIT-licensed{" "}
        <a className="underline" href="https://github.com/rishith-c/rishithc">rishithc</a> design skill.
      </div>
    </footer>
  );
}
