export default function Hero() {
  return (
    <section id="top" className="section-anchor relative overflow-hidden">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(60%_50%_at_50%_0%,rgba(37,99,235,0.14),transparent)]"
      />
      <div className="mx-auto max-w-4xl px-4 pb-20 pt-16 text-center sm:px-6 sm:pb-28 sm:pt-24">
        <p className="mx-auto mb-6 inline-flex items-center gap-2 rounded-full border border-blue-100 bg-blue-50 px-4 py-1.5 text-xs font-semibold text-blue-700">
          <span className="h-1.5 w-1.5 rounded-full bg-blue-600" /> Proudly serving San Jose, CA
        </p>
        <h1 className="text-4xl font-extrabold leading-[1.1] tracking-tight text-slate-900 sm:text-6xl">
          Modern Websites for San Jose Small Businesses.{" "}
          <span className="text-blue-600">Zero Monthly Fees.</span>
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-slate-600">
          Get a fast, mobile-first website live in days, not months. Pay once, own it forever. No
          hosting fees, no retainers, no surprises.
        </p>
        <div className="mt-10 flex flex-col items-stretch justify-center gap-3 sm:flex-row sm:items-center">
          <a href="#contact" className="btn-primary">
            Request Your Free Homepage Preview
          </a>
          <a href="#work" className="btn-secondary">
            See Live Demos
          </a>
        </div>
        <dl className="mx-auto mt-14 grid max-w-2xl grid-cols-3 gap-4 text-center">
          {[
            ["Days", "Fast turnaround"],
            ["Mobile-first", "Built for phones"],
            ["$0/mo", "No hosting fees"],
          ].map(([big, small]) => (
            <div key={big} className="glass px-2 py-4">
              <dt className="text-lg font-bold text-slate-900 sm:text-2xl">{big}</dt>
              <dd className="mt-1 text-xs text-slate-500 sm:text-sm">{small}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
