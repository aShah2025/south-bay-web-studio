"use client";

import { useRef, useState, type KeyboardEvent } from "react";
import Reveal from "../Reveal";

const TABS = [
  {
    label: "Zero monthly fees",
    title: "Pay once. Own it.",
    body: "One clear price: $300, $500 or $800. No hosting bills, no retainers and no surprise invoices. The finished site is yours to keep.",
    points: ["$0/month hosting fees on every plan", "You own the finished site", "No retainers or lock-in"],
  },
  {
    label: "Mobile-first",
    title: "Built for the phone in your customer's hand.",
    body: "Most local customers find you on their phone, so every site is designed there first and then scaled up for tablets and desktops.",
    points: ["Click-to-call button on every plan", "Tap-friendly buttons and forms", "Responsive from small phones to wide screens"],
  },
  {
    label: "Fast",
    title: "Lightweight pages that load in a blink.",
    body: "We build lean, static pages with very little JavaScript instead of heavy page builders, so visitors aren't left waiting.",
    points: ["Static pages, minimal JavaScript", "No bloated plugins", "Built with strong page speed in mind"],
  },
  {
    label: "Local SEO",
    title: "Be found by people searching in San Jose.",
    body: "Every site includes basic SEO. Growth and Pro add local San Jose optimization so nearby customers can find you.",
    points: ["Basic SEO on every plan", "Local San Jose SEO on Growth and Pro", "Hours and Google Map embedded"],
  },
  {
    label: "Lead capture",
    title: "Turn visitors into customers.",
    body: "Growth adds a working lead form that lands in your inbox. Pro adds an embedded online booking widget and a Google Reviews showcase.",
    points: ["Lead capture form (Growth and Pro)", "Online booking widget (Pro)", "Google Reviews showcase (Pro)"],
  },
];

export default function FeatureTabs() {
  const [active, setActive] = useState(0);
  const refs = useRef<(HTMLButtonElement | null)[]>([]);

  function onKeyDown(e: KeyboardEvent<HTMLDivElement>) {
    const last = TABS.length - 1;
    let next = active;
    if (e.key === "ArrowRight") next = active === last ? 0 : active + 1;
    else if (e.key === "ArrowLeft") next = active === 0 ? last : active - 1;
    else if (e.key === "Home") next = 0;
    else if (e.key === "End") next = last;
    else return;
    e.preventDefault();
    setActive(next);
    refs.current[next]?.focus();
  }

  const t = TABS[active];

  return (
    <section className="wrap py-20 sm:py-28">
      <Reveal className="grid gap-6 md:grid-cols-[1.3fr_1fr] md:gap-20">
        <h2>Everything your business needs. Nothing it doesn&apos;t.</h2>
        <p className="text-lg text-muted md:text-xl">
          A simple, honest website for local businesses: fast, easy to use on a phone and priced once.
        </p>
      </Reveal>

      <Reveal delay={80}>
        <div className="panel mt-12">
          <div
            role="tablist"
            aria-label="What you get"
            onKeyDown={onKeyDown}
            className="grid grid-cols-2 gap-1.5 border-b border-line p-3 sm:grid-cols-3 md:flex md:gap-3 md:p-5"
          >
            {TABS.map((tab, i) => (
              <button
                key={tab.label}
                ref={(el) => {
                  refs.current[i] = el;
                }}
                role="tab"
                type="button"
                id={`tab-${i}`}
                aria-selected={active === i}
                aria-controls={`panel-${i}`}
                tabIndex={active === i ? 0 : -1}
                onClick={() => setActive(i)}
                className={`min-h-[52px] rounded-[7px] px-3 py-2 text-[15px] font-semibold transition-colors md:min-h-[60px] md:flex-1 ${
                  active === i ? "bg-paper text-ink shadow-[inset_0_0_0_1px_#dcded3]" : "text-muted hover:text-ink"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
          <div
            role="tabpanel"
            id={`panel-${active}`}
            aria-labelledby={`tab-${active}`}
            tabIndex={0}
            className="min-h-[300px] p-7 md:p-12"
          >
            <h3 className="max-w-xl !text-[clamp(26px,3vw,34px)]">{t.title}</h3>
            <p className="mt-4 max-w-2xl text-lg text-muted">{t.body}</p>
            <ul className="mt-8 grid gap-3 sm:grid-cols-3">
              {t.points.map((p) => (
                <li key={p} className="rounded-lg border border-line bg-paper px-4 py-3 text-[15px] font-medium">
                  {p}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
