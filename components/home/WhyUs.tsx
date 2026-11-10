import Icon, { type IconName } from "../Icon";

const ITEMS: { icon: IconName; title: string; body: string }[] = [
  { icon: "phone", title: "Built for phones", body: "Most local customers find you on their phone, so every site is designed there first, with a tap-to-call button." },
  { icon: "bolt", title: "Fast and lightweight", body: "Lean pages with very little JavaScript, so visitors aren't left waiting." },
  { icon: "search", title: "Found locally", body: "Basic SEO on every plan, plus local San Jose optimization on Growth and Pro." },
];

export default function WhyUs() {
  return (
    <section className="section">
      <div className="container-x">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl sm:text-4xl">What every site gets</h2>
        </div>
        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {ITEMS.map((it) => (
            <div key={it.title} className="text-center md:text-left">
              <span className="mx-auto grid h-12 w-12 place-items-center rounded-xl bg-blue-50 text-blue-600 md:mx-0">
                <Icon name={it.icon} />
              </span>
              <h3 className="mt-5 text-xl">{it.title}</h3>
              <p className="mt-2 text-[15px] text-slate-600">{it.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
