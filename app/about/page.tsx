import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
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
        title={<>A local studio for local businesses</>}
        subtitle="South Bay Web Studios builds fast, beautiful websites for San Jose small businesses, with one clear, one-time price."
      />

      <section className="section">
        <div className="container-x grid items-start gap-10 lg:grid-cols-[1.3fr_1fr] lg:gap-16">
          <div>
            <h2 className="text-3xl">Why we do it differently</h2>
            <div className="mt-6 space-y-4 text-lg text-muted">
              <p>Too many small businesses pay every month for a simple website. We think a good local site should be a one-time purchase that you own.</p>
              <p>So we build fast, lightweight, mobile-first sites and price them clearly: $300, $500 or $800. When it&apos;s done, it&apos;s yours.</p>
              <p>And before you spend anything, we&apos;ll mock up your homepage for free so you can see it on your own business.</p>
            </div>
          </div>
          <div className="card p-8">
            <p className="text-6xl font-bold tracking-tight text-ink">1×</p>
            <p className="mt-2 text-lg font-semibold">One-time price</p>
            <p className="mt-2 text-[15px] text-muted">Hosting included. We spell out exactly what you pay for, including your yearly domain name.</p>
            <dl className="mt-6 grid grid-cols-2 gap-3 text-center">
              {[["3", "Simple plans"], ["2–4", "Weeks to deliver"]].map(([n, l]) => (
                <div key={l} className="rounded-xl bg-sand p-4">
                  <dt className="text-2xl font-bold">{n}</dt>
                  <dd className="mt-1 text-sm text-muted">{l}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </section>

      <section className="section bg-sand">
        <div className="container-x">
          <h2 className="text-center">What we stand for</h2>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {VALUES.map((v) => (
              <div key={v.title} className="card p-7">
                <span className="grid h-12 w-12 place-items-center rounded-xl bg-charcoal text-surface"><Icon name={v.icon} /></span>
                <h3 className="mt-5 text-xl">{v.title}</h3>
                <p className="mt-2 text-[15px] text-muted">{v.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container-x max-w-4xl text-center">
          <h2 className="text-3xl">Proudly serving the South Bay</h2>
          <ul className="mt-10 flex flex-wrap justify-center gap-3">
            {AREAS.map((a) => (
              <li key={a} className="inline-flex items-center gap-1.5 rounded-full border border-line bg-surface px-4 py-2 text-[15px] font-medium shadow-sm">
                <Icon name="pin" className="h-4 w-4 text-ink" /> {a}
              </li>
            ))}
          </ul>
        </div>
      </section>
      <CTABand />
    </>
  );
}
