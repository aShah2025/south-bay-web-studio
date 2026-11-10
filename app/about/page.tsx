import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import Reveal from "@/components/Reveal";
import Spotlight from "@/components/Spotlight";
import Icon, { type IconName } from "@/components/Icon";
import CTABand from "@/components/CTABand";

export const metadata: Metadata = {
  title: "About",
  description: "South Bay Web Studios is a local San Jose web design studio building fast, fair-priced websites for small businesses.",
};

const VALUES: { icon: IconName; title: string; body: string }[] = [
  { icon: "dollar", title: "Fair, flat pricing", body: "One clear price per site. Hosting included, no retainers and no hidden add-ons." },
  { icon: "phone", title: "Mobile-first always", body: "Most local customers find you on their phone, so every site starts there." },
  { icon: "pin", title: "Local to the core", body: "We're a San Jose studio. We know the neighborhoods and how people here search." },
];

const AREAS = [
  "San Jose", "Willow Glen", "Almaden Valley", "Evergreen", "Berryessa", "Japantown",
  "Campbell", "Los Gatos", "Santa Clara", "Cupertino", "Milpitas", "Sunnyvale",
];

export default function AboutPage() {
  return (
    <>
      <PageHeader
        eyebrow="About the studio"
        title={<>A local studio for <span className="gradient-text">local businesses.</span></>}
        subtitle="South Bay Web Studios builds fast, beautiful websites for San Jose small businesses, with one clear, one-time price."
      />

      <section className="pb-20 sm:pb-28">
        <div className="mx-auto grid max-w-6xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-2">
          <Reveal>
            <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">Why we do it differently</h2>
            <div className="mt-6 space-y-4 leading-relaxed text-slate-600">
              <p>Too many small businesses pay every month for a simple website. We think a good local site should be a one-time purchase that you own.</p>
              <p>So we build fast, lightweight, mobile-first sites and price them clearly: $300, $500 or $800. When it&apos;s done, it&apos;s yours.</p>
              <p>And before you spend anything, we&apos;ll mock up your homepage for free so you can see it on your own business.</p>
            </div>
          </Reveal>
          <Reveal delay={120}>
            <div className="relative overflow-hidden rounded-3xl bg-slate-900 p-8 text-white sm:p-10">
              <div aria-hidden="true" className="absolute -right-10 -top-10 h-56 w-56 animate-blob rounded-full bg-blue-600/50 blur-3xl" />
              <p className="relative text-6xl font-extrabold tracking-tight sm:text-7xl">1×<span className="text-2xl font-semibold text-sky-300"> one-time price</span></p>
              <p className="relative mt-3 text-slate-300">One simple price, with hosting included. We spell out exactly what you pay for.</p>
              <div className="relative mt-8 grid grid-cols-3 gap-3 text-center">
                {[["3", "Simple tiers"], ["1×", "One-time price"], ["100%", "Mobile-first"]].map(([n, l]) => (
                  <div key={l} className="glass-dark p-3">
                    <div className="text-2xl font-extrabold">{n}</div>
                    <div className="mt-1 text-xs text-slate-300">{l}</div>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="bg-slate-50 py-20 sm:py-28">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <Reveal className="text-center">
            <p className="eyebrow mx-auto">What we stand for</p>
            <h2 className="mt-5 text-3xl font-extrabold tracking-tight sm:text-4xl">Our principles</h2>
          </Reveal>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {VALUES.map((v, i) => (
              <Reveal key={v.title} delay={i * 100} className="h-full">
                <Spotlight className="glass h-full p-8 transition hover:-translate-y-1 hover:shadow-xl">
                  <span className="grid h-12 w-12 place-items-center rounded-xl bg-blue-600 text-white"><Icon name={v.icon} /></span>
                  <h3 className="mt-5 text-xl font-bold">{v.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-600">{v.body}</p>
                </Spotlight>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 sm:py-28">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6">
          <Reveal>
            <p className="eyebrow mx-auto">Service area</p>
            <h2 className="mt-5 text-3xl font-extrabold tracking-tight sm:text-4xl">Proudly serving the South Bay</h2>
            <div className="mt-10 flex flex-wrap justify-center gap-3">
              {AREAS.map((a) => (
                <span key={a} className="inline-flex items-center gap-1.5 rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-medium shadow-sm transition hover:border-blue-600 hover:text-blue-600">
                  <Icon name="pin" className="h-4 w-4 text-blue-600" /> {a}
                </span>
              ))}
            </div>
          </Reveal>
        </div>
      </section>
      <CTABand />
    </>
  );
}
