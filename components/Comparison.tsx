import Reveal from "./Reveal";

const ROWS = [
  { label: "Upfront cost", them: "$2,500 – $5,000+", us: "$300 – $800 one-time" },
  { label: "Hosting fees", them: "$50 – $150 / month", us: "$0 / month" },
  { label: "Turnaround", them: "6 – 10 weeks", us: "2 – 4 weeks" },
  { label: "Free preview", them: "No free preview", us: "Free live homepage preview before paying" },
];

function Mark({ good }: { good: boolean }) {
  return good ? (
    <svg className="h-5 w-5 shrink-0 text-blue-600" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
      <path fillRule="evenodd" d="M16.7 5.3a1 1 0 010 1.4l-7.5 7.5a1 1 0 01-1.4 0L3.3 9.7a1 1 0 011.4-1.4l3.8 3.8 6.8-6.8a1 1 0 011.4 0z" clipRule="evenodd" />
    </svg>
  ) : (
    <svg className="h-5 w-5 shrink-0 text-slate-300" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
      <path d="M6.3 5l3.7 3.7L13.7 5 15 6.3 11.3 10l3.7 3.7-1.3 1.3L10 11.3 6.3 15 5 13.7 8.7 10 5 6.3 6.3 5z" />
    </svg>
  );
}

export default function Comparison() {
  return (
    <section className="bg-slate-50 py-20 sm:py-28">
      <div className="mx-auto max-w-4xl px-4 sm:px-6">
        <Reveal className="text-center">
          <p className="eyebrow mx-auto">Why choose us</p>
          <h2 className="mt-5 text-3xl font-extrabold tracking-tight sm:text-5xl">
            Why Choose Us vs. Traditional Agencies
          </h2>
        </Reveal>

        <Reveal delay={100}>
          <div className="glass mt-12 overflow-hidden">
            <table className="w-full table-fixed text-left text-sm sm:text-base">
              <caption className="sr-only">Comparison of traditional agencies and South Bay Web Studios</caption>
              <thead>
                <tr className="border-b border-slate-200">
                  <th scope="col" className="w-[26%] p-3 sm:p-5"><span className="sr-only">Feature</span></th>
                  <th scope="col" className="p-3 text-center text-xs font-semibold text-slate-500 sm:p-5 sm:text-sm">
                    Traditional Agencies
                  </th>
                  <th scope="col" className="bg-blue-600 p-3 text-center text-xs font-bold text-white sm:p-5 sm:text-sm">
                    South Bay Web Studios
                  </th>
                </tr>
              </thead>
              <tbody>
                {ROWS.map((r) => (
                  <tr key={r.label} className="border-b border-slate-100 last:border-0">
                    <th scope="row" className="p-3 text-xs font-semibold text-slate-900 sm:p-5 sm:text-sm">{r.label}</th>
                    <td className="p-3 sm:p-5">
                      <span className="flex items-center justify-center gap-2 text-center text-slate-500">
                        <Mark good={false} />
                        <span>{r.them}</span>
                      </span>
                    </td>
                    <td className="bg-blue-50/80 p-3 sm:p-5">
                      <span className="flex items-center justify-center gap-2 text-center font-semibold text-slate-900">
                        <Mark good />
                        <span>{r.us}</span>
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Reveal>

        <Reveal delay={150}>
          <p className="mx-auto mt-8 max-w-2xl text-center text-sm leading-relaxed text-slate-600 sm:text-base">
            <strong className="text-slate-900">How we keep prices low:</strong> we avoid bloated agency overhead and
            pass those savings directly to San Jose small businesses.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
