"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import Logo from "./Logo";

const LINKS = [
  { href: "/", label: "Home" },
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
    const onScroll = () => setScrolled(window.scrollY > 24);
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("keydown", onKey);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("keydown", onKey);
    };
  }, []);

  return (
    <header className="fixed inset-x-0 top-4 z-50 flex justify-center px-4 sm:top-5">
      <nav
        aria-label="Primary"
        className={`relative flex w-full items-center justify-between gap-7 rounded-xl border border-[#23272b]/15 py-2 pl-5 pr-3 shadow-[0_3px_16px_rgba(25,28,31,0.06)] backdrop-blur-[18px] transition-colors md:w-max ${
          scrolled ? "bg-white/95" : "bg-[rgba(250,250,248,0.9)]"
        }`}
      >
        <Link href="/" aria-label="South Bay Web Studios home" className="rounded-md">
          <Logo />
        </Link>

        <div className="hidden items-center gap-6 md:flex">
          {LINKS.map((l) => (
            <Link
              key={l.href}
              href={l.href === "/" ? "/" : `${l.href}/`}
              aria-current={pathname === l.href ? "page" : undefined}
              className={`inline-flex min-h-11 items-center text-[15px] underline-offset-[5px] hover:underline ${
                pathname === l.href ? "font-semibold underline" : ""
              }`}
            >
              {l.label}
            </Link>
          ))}
          <Link href="/contact/" className="btn-primary !min-h-11 !px-5 !py-2 !text-[15px]">
            Get a Free Preview
          </Link>
        </div>

        <button
          type="button"
          className="inline-flex min-h-11 min-w-[68px] items-center justify-center rounded-md text-[15px] font-semibold md:hidden"
          aria-expanded={open}
          aria-controls="mobile-menu"
          onClick={() => setOpen((o) => !o)}
        >
          {open ? "Close" : "Menu"}
        </button>

        {open && (
          <div
            id="mobile-menu"
            className="absolute left-0 right-0 top-[calc(100%+8px)] flex flex-col gap-2 rounded-xl border border-line bg-[rgba(250,250,248,0.97)] p-4 md:hidden"
          >
            {LINKS.map((l) => (
              <Link key={l.href} href={l.href === "/" ? "/" : `${l.href}/`} className="flex min-h-12 items-center rounded-md px-3 font-medium hover:bg-sand">
                {l.label}
              </Link>
            ))}
            <Link href="/contact/" className="btn-primary mt-1">
              Get a Free Preview
            </Link>
          </div>
        )}
      </nav>
    </header>
  );
}
