import Reveal from "./Reveal";

const ITEMS = [
  {
    q: "What does “zero monthly fees” mean?",
    a: "You pay one price for your site and that's it. We build fast, static sites that don't need a monthly hosting plan, so there's no recurring bill from us. If you need a new domain name, that's a small yearly cost paid directly to the registrar.",
  },
  {
    q: "How long does it take?",
    a: "We build quickly and focus on days, not months. Send us your details through the free preview form and we'll give you a realistic timeline for your tier.",
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
