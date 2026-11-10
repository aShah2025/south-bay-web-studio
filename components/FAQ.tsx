import Reveal from "./Reveal";

const ITEMS = [
  {
    q: "Is there really no monthly fee?",
    a: "You pay us one time. There's no monthly design, maintenance or retainer fee from us, and hosting is included. Two things are separate and normal for any website: your domain name (see below), and any paid third-party tools you choose to add later.",
  },
  {
    q: "What is a domain name, and what does it cost?",
    a: "A domain name is your website's address, like yourbusiness.com. You buy it from a domain registrar, it's registered in your name, and it renews every year, typically about $10 to $20 a year for a .com. If you already own your domain, there's nothing extra to buy.",
  },
  {
    q: "What is web hosting?",
    a: "Hosting is the computer that delivers your website to visitors. Many companies charge $50 to $150 a month for it. Your site is built so we can host it without a monthly hosting bill, so hosting is included in your one-time price.",
  },
  {
    q: "How long does it take?",
    a: "Starter sites are delivered in 2 weeks, Growth in 3 weeks and Pro in 4 weeks. Traditional agencies typically take 6 to 10 weeks.",
  },
  {
    q: "Which plan should I choose?",
    a: "Starter is perfect if you just need a polished, mobile-friendly page with your phone number and hours. Growth adds Home, About and Contact pages with a lead form and local SEO. Pro adds online booking, Google Reviews and 30 days of free edits.",
  },
  {
    q: "Do I own my website?",
    a: "Yes. It's a one-time purchase, so the finished site is yours.",
  },
  {
    q: "What if I want changes after launch?",
    a: "Every plan includes revision rounds while we build. Pro also includes 30 days of free edits after launch. For anything beyond that, just reach out.",
  },
  {
    q: "What is the free homepage preview?",
    a: "A no-obligation mockup of your homepage so you can see your business on a real design before spending anything.",
  },
];

export default function FAQ() {
  return (
    <section className="bg-slate-50 py-20 sm:py-28">
      <div className="mx-auto max-w-3xl px-4 sm:px-6">
        <Reveal className="text-center">
          <p className="eyebrow mx-auto">FAQ</p>
          <h2 className="mt-5 text-3xl font-extrabold tracking-tight sm:text-4xl">Questions, answered</h2>
        </Reveal>
        <div className="mt-12 space-y-3">
          {ITEMS.map((it, i) => (
            <Reveal key={it.q} delay={i * 50}>
              <details className="glass group p-5 open:bg-white">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-semibold">
                  {it.q}
                  <span className="grid h-7 w-7 shrink-0 place-items-center rounded-full bg-blue-50 text-blue-600 transition group-open:rotate-45">
                    <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" aria-hidden="true">
                      <path d="M12 5v14M5 12h14" />
                    </svg>
                  </span>
                </summary>
                <p className="mt-3 text-sm leading-relaxed text-slate-600">{it.a}</p>
              </details>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
