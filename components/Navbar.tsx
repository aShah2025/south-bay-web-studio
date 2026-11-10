"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import Logo from "./Logo";

const LINKS = [
  { href: "/work", label: "Work" },
  { href: "/pricing", label: "Pricing" },
  { href: "/about", label: "About" },
];

export default function Navbar() {
  const pathname = (usePathname() ?? "/").replace(/\/$/, "") || "/";
  const [open, setOpen] = useState(false);

  useEffect(() => setOpen(false), [pathname]);
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white">
      <nav aria-label="Primary" className="container-x flex h-16 items-center justify-between">
        <Link href="/" aria-label="South Bay Web Studios home">
          <Logo />
        </Link>

        <div className="hidden items-center gap-8 md:flex">
          {LINKS.map((l) => (
            <Link
              key={l.href}
              href={`${l.href}/`}
              aria-current={pathname === l.href ? "page" : undefined}
              className={`text-[15px] font-medium transition hover:text-blue-600 ${
                pathname === l.href ? "text-blue-600" : "text-slate-700"
              }`}
            >
              {l.label}
            </Link>
          ))}
          <Link href="/contact/" className="btn-primary !min-h-10 !px-5 !py-2 !text-[15px]">
            Get a Free Preview
          </Link>
        </div>

        <button
          type="button"
          className="-mr-2 inline-flex h-11 items-center gap-2 rounded-lg px-3 text-[15px] font-semibold md:hidden"
          aria-expanded={open}
          aria-controls="mobile-menu"
          onClick={() => setOpen((o) => !o)}
        >
          {open ? "Close" : "Menu"}
          <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
            {open ? <path d="M6 6l12 12M18 6L6 18" /> : <path d="M4 7h16M4 12h16M4 17h16" />}
          </svg>
        </button>
      </nav>

      {open && (
        <div id="mobile-menu" className="border-t border-slate-100 bg-white px-5 pb-6 pt-3 md:hidden">
          <ul>
            {LINKS.map((l) => (
              <li key={l.href}>
                <Link href={`${l.href}/`} className="flex min-h-12 items-center text-lg font-medium">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
          <Link href="/contact/" className="btn-primary mt-3 w-full">
            Get a Free Preview
          </Link>
        </div>
      )}
    </header>
  );
}
