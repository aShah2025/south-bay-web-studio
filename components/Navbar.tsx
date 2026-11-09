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
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => setOpen(false), [pathname]);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 border-b bg-white/80 backdrop-blur-xl transition-shadow ${
        scrolled ? "border-slate-200 shadow-sm" : "border-transparent"
      }`}
    >
      <nav aria-label="Primary" className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
        <Link href="/" aria-label="South Bay Web Studio home">
          <Logo />
        </Link>

        <div className="hidden items-center gap-8 md:flex">
          {LINKS.map((l) => (
            <Link
              key={l.href}
              href={`${l.href}/`}
              aria-current={pathname === l.href ? "page" : undefined}
              className={`relative text-sm font-medium transition hover:text-slate-900 ${
                pathname === l.href ? "text-slate-900" : "text-slate-600"
              }`}
            >
              {l.label}
              {pathname === l.href && <span className="absolute -bottom-1.5 left-0 h-0.5 w-full rounded bg-blue-600" />}
            </Link>
          ))}
          <Link href="/contact/" className="btn-primary !px-5 !py-2">
            Get a Free Preview
          </Link>
        </div>

        <button
          type="button"
          className="-mr-2 rounded-lg p-2 md:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((o) => !o)}
        >
          <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
            {open ? <path d="M6 6l12 12M18 6L6 18" /> : <path d="M4 7h16M4 12h16M4 17h16" />}
          </svg>
        </button>
      </nav>

      {open && (
        <div className="border-t border-slate-100 bg-white px-4 pb-6 pt-3 md:hidden">
          <ul className="space-y-1">
            {LINKS.map((l) => (
              <li key={l.href}>
                <Link href={`${l.href}/`} className="block rounded-lg px-3 py-3 text-base font-medium hover:bg-slate-50">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
          <Link href="/contact/" className="btn-primary mt-4 w-full">
            Get a Free Preview
          </Link>
        </div>
      )}
    </header>
  );
}
