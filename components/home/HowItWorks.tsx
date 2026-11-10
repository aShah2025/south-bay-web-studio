const STEPS = [
  { title: "Get a free preview", body: "Tell us about your business. We mock up your homepage at no cost, so you can see it before you pay." },
  { title: "Pick your plan", body: "Starter, Growth or Pro. One clear price, paid once, with hosting included." },
  { title: "We build, you launch", body: "Delivered in 2 to 4 weeks depending on your plan, with revision rounds included." },
];

export default function HowItWorks() {
  return (
    <section className="section bg-slate-50">
      <div className="container-x">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl sm:text-4xl">How it works</h2>
          <p className="mt-4 text-lg text-slate-600">Three simple steps from hello to live.</p>
        </div>
        <ol className="mt-12 grid gap-6 md:grid-cols-3">
          {STEPS.map((s, i) => (
            <li key={s.title} className="card p-7">
              <span className="grid h-10 w-10 place-items-center rounded-full bg-blue-600 text-base font-bold text-white">{i + 1}</span>
              <h3 className="mt-5 text-xl">{s.title}</h3>
              <p className="mt-2 text-[15px] text-slate-600">{s.body}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
