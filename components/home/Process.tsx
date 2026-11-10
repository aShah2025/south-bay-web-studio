import Reveal from "../Reveal";

const STEPS = [
  { title: "Free preview", body: "Tell us about your business. We mock up your homepage at no cost." },
  { title: "Pick your tier", body: "Starter, Growth or Pro. One clear price, no monthly fees." },
  { title: "Build and revise", body: "We build it mobile-first and refine it with your feedback." },
  { title: "Launch and own it", body: "Your site goes live and it's yours. No lock-in." },
];

export default function Process() {
  return (
    <section className="mx-auto w-[min(94%,1440px)] rounded-xl bg-night px-6 py-20 text-paper md:px-16 md:py-24">
      <Reveal>
        <h2 className="max-w-2xl">From hello to live, in four steps.</h2>
      </Reveal>
      <ol className="mt-14 grid gap-x-10 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
        {STEPS.map((s, i) => (
          <Reveal key={s.title} delay={i * 80}>
            <li className="border-t border-paper/25 pt-5">
              <h3>{s.title}</h3>
              <p className="mt-3 text-[15px] text-paper/75">{s.body}</p>
            </li>
          </Reveal>
        ))}
      </ol>
    </section>
  );
}
