const TRADES = [
  "Mobile Detailing", "Plumbing", "Tutoring", "Landscaping", "Dental Offices", "Hair Salons",
  "HVAC", "Restaurants", "Electricians", "Photographers", "Fitness Studios", "Auto Repair",
];

export default function Marquee() {
  const row = TRADES.map((t) => (
    <span key={t} className="mx-6 flex items-center gap-6 whitespace-nowrap text-sm font-semibold text-slate-500">
      {t} <span className="h-1.5 w-1.5 rounded-full bg-blue-400" />
    </span>
  ));
  return (
    <div className="border-y border-slate-200 bg-white py-5" aria-label="Businesses we build websites for">
      <p className="mb-3 text-center text-xs font-semibold uppercase tracking-widest text-slate-400">
        Built for South Bay businesses like
      </p>
      <div className="overflow-hidden [mask-image:linear-gradient(to_right,transparent,#000_15%,#000_85%,transparent)]">
        <div className="flex w-max animate-marquee" aria-hidden="true">
          <div className="flex">{row}</div>
          <div className="flex">{row}</div>
        </div>
      </div>
    </div>
  );
}
