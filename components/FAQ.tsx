import Reveal from "./Reveal";

const ITEMS = [
  {
    q: "What does “zero monthly fees” mean?",
    a: "You pay one price for your site and that's it. We build fast, static sites that don't need a monthly hosting plan, so there's no recurring bill from us. If you need a new domain name, that's a small yearly cost paid directly to the registrar.",
  },
  {
    q: "How long does it take?",
    a: "Starter sites are delivered in 2 weeks, Growth in 3 weeks and Pro in 4 weeks. Traditional agencies typically take 6 to 10 weeks.",
  },
  {
    q: "Which plan should I choose?",
    a: "Starter is perfect if you just need a polished, mobile-friendly page with your phone number and hours. Growth adds Home, About and Contact pages with a lead form and local SEO. Pro adds online booking, Google Reviews and 30 days of free edits.",
  },
  { q: "Do I own my website?", a: "Yes. It's a one-time purchase, so the finished site is yours." },
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
    <section className="wrap py-20 sm:py-28">
      <Reveal className="grid gap-6 md:grid-cols-[1.3fr_1fr] md:gap-20">
        <h2>Questions, answered.</h2>
      </Reveal>
      <div className="mt-10 max-w-3xl border-t border-line">
        {ITEMS.map((it) => (
          <Reveal key={it.q}>
            <details className="group border-b border-line">
              <summary className="flex min-h-16 cursor-pointer list-none items-center justify-between gap-4 py-4 font-semibold">
                {it.q}
                <span className="text-2xl font-normal leading-none transition group-open:rotate-45" aria-hidden="true">+</span>
              </summary>
              <p className="pb-6 text-muted">{it.a}</p>
            </details>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
