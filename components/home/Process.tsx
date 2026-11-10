import Reveal from "../Reveal";

const STEPS = [
  { n: "01", title: "Free preview", body: "Tell us about your business. We mock up your homepage at no cost." },
  { n: "02", title: "Pick your tier", body: "Starter, Growth or Pro. One clear price, paid once." },
  { n: "03", title: "Build & revise", body: "We build it mobile-first and refine it with your feedback." },
  { n: "04", title: "Launch & own it", body: "Your site goes live and it's yours. No lock-in." },
];

export default function Process() {
  return (
    <section className="relative overflow-hidden bg-slate-900 py-20 text-white sm:py-28">
      <div aria-hidden="true" className="absolute -left-24 top-10 h-80 w-80 animate-blob rounded-full bg-blue-600/30 blur-3xl" />
      <div aria-hidden="true" className="absolute -right-24 bottom-0 h-80 w-80 animate-blob rounded-full bg-sky-400/20 blur-3xl [animation-delay:-9s]" />
      <div className="relative mx-auto max-w-6xl px-4 sm:px-6">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="mx-auto inline-flex rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-xs font-semibold text-sky-300">How it works</p>
          <h2 className="mt-5 text-3xl font-extrabold tracking-tight sm:text-5xl">From hello to live, in four steps</h2>
        </Reveal>
        <ol className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {STEPS.map((s, i) => (
            <Reveal key={s.n} delay={i * 100}>
              <li className="glass-dark h-full p-6">
                <span className="bg-gradient-to-br from-sky-300 to-blue-500 bg-clip-text text-4xl font-extrabold text-transparent">{s.n}</span>
                <h3 className="mt-4 text-lg font-bold">{s.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-300">{s.body}</p>
              </li>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
