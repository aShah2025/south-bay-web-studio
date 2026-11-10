import Reveal from "../Reveal";
import Spotlight from "../Spotlight";
import Icon, { type IconName } from "../Icon";

const FEATURES: { icon: IconName; title: string; body: string; span: string; hero?: boolean }[] = [
  { icon: "dollar", title: "One-time price", body: "Pay once for your website. No retainers and no surprise invoices. Hosting is included, and the only yearly cost is your domain name.", span: "md:col-span-2 md:row-span-2", hero: true },
  { icon: "phone", title: "Mobile-first", body: "Designed for the phone in your customer's hand, then scaled up beautifully.", span: "" },
  { icon: "bolt", title: "Blazing fast", body: "Lightweight static pages that load in a blink.", span: "" },
  { icon: "search", title: "Local SEO", body: "Be found by people searching in San Jose.", span: "" },
  { icon: "mail", title: "Lead capture", body: "Forms that land straight in your inbox.", span: "" },
  { icon: "key", title: "You own it", body: "No lock-in. Your site, your domain, your call.", span: "md:col-span-4" },
];

export default function Features() {
  return (
    <section className="py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="eyebrow mx-auto">Why South Bay Web Studios</p>
          <h2 className="mt-5 text-3xl font-extrabold tracking-tight sm:text-5xl">Everything your business needs. Nothing it doesn&apos;t.</h2>
        </Reveal>
        <div className="mt-14 grid gap-4 md:grid-cols-4">
          {FEATURES.map((f, i) => (
            <Reveal key={f.title} delay={i * 70} className={f.span}>
              <Spotlight
                className={`group h-full p-7 transition hover:-translate-y-1 hover:shadow-xl ${
                  f.hero ? "rounded-2xl bg-gradient-to-br from-blue-600 to-indigo-700 text-white md:p-10" : "glass"
                }`}
              >
                <span className={`grid h-11 w-11 place-items-center rounded-xl ${f.hero ? "bg-white/15 text-white" : "bg-blue-50 text-blue-600"}`}>
                  <Icon name={f.icon} />
                </span>
                <h3 className={`mt-5 font-bold ${f.hero ? "text-3xl sm:text-4xl" : "text-lg"}`}>{f.title}</h3>
                <p className={`mt-2 leading-relaxed ${f.hero ? "max-w-sm text-blue-100" : "text-sm text-slate-600"}`}>{f.body}</p>
                {f.hero && <p className="mt-10 text-7xl font-extrabold tracking-tight text-white/90">1×<span className="text-2xl font-semibold text-blue-200"> payment</span></p>}
              </Spotlight>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
