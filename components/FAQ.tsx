
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
    a: "Starter is a single, polished page with tap-to-call, your hours and a map, perfect if you just need to be found and called. Growth adds Home, About and Contact pages, a quote-request form, a photo gallery and local San Jose SEO, so your site starts bringing in leads. Pro adds online booking, a Google Reviews showcase, an FAQ and 30 days of free edits.",
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

export default function FAQ({ limit }: { limit?: number }) {
  const items = limit ? ITEMS.slice(0, limit) : ITEMS;
  return (
    <section className="section bg-sand">
      <div className="container-x max-w-3xl">
        <div className="text-center">
          <h2 className="text-3xl">Questions, answered</h2>
        </div>
        <div className="mt-12 space-y-3">
          {items.map((it) => (
            <details key={it.q} className="card group p-5 open:shadow-md">
              <summary className="flex min-h-11 cursor-pointer list-none items-center justify-between gap-4 text-[17px] font-semibold">
                {it.q}
                <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-sand text-ink transition group-open:rotate-45" aria-hidden="true">
                  <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                    <path d="M12 5v14M5 12h14" />
                  </svg>
                </span>
              </summary>
              <p className="mt-2 pb-1 text-[15px] text-muted">{it.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
