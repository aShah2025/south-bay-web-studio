export default function BrowserMock({
  level,
  accent,
  url,
  className = "",
}: {
  level: 1 | 2 | 3;
  accent: string;
  url: string;
  className?: string;
}) {
  return (
    <div
      aria-hidden="true"
      className={`overflow-hidden rounded-xl border border-slate-200 bg-white shadow-2xl shadow-slate-900/10 ${className}`}
    >
      <div className="flex items-center gap-1.5 border-b border-slate-100 bg-slate-50 px-3 py-2">
        <span className="h-2.5 w-2.5 rounded-full bg-red-300" />
        <span className="h-2.5 w-2.5 rounded-full bg-yellow-300" />
        <span className="h-2.5 w-2.5 rounded-full bg-green-300" />
        <div className="ml-3 flex-1 truncate rounded-md bg-white px-3 py-1 text-[10px] text-slate-400 ring-1 ring-slate-200">
          {url}
        </div>
      </div>
      <div className="p-3">
        {level >= 2 && (
          <div className="mb-3 flex items-center justify-between">
            <div className="h-2.5 w-14 rounded bg-slate-800" />
            <div className="flex gap-2">
              <span className="h-1.5 w-8 rounded bg-slate-200" />
              <span className="h-1.5 w-8 rounded bg-slate-200" />
              <span className="h-1.5 w-8 rounded bg-slate-200" />
            </div>
          </div>
        )}
        <div className={`rounded-lg bg-gradient-to-br ${accent} p-4`}>
          <div className="h-3 w-3/4 rounded bg-white/90" />
          <div className="mt-2 h-2 w-1/2 rounded bg-white/60" />
          <div className="mt-4 h-6 w-20 rounded-full bg-white" />
        </div>
        {level >= 2 && (
          <div className="mt-3 grid grid-cols-3 gap-2">
            {[0, 1, 2].map((i) => (
              <div key={i} className="rounded-md border border-slate-100 p-2">
                <div className="h-6 rounded bg-slate-100" />
                <div className="mt-2 h-1.5 w-3/4 rounded bg-slate-200" />
              </div>
            ))}
          </div>
        )}
        {level === 3 && (
          <div className="mt-3 rounded-md border border-slate-100 p-2">
            <div className="mb-2 flex items-center justify-between">
              <div className="h-2 w-16 rounded bg-slate-800" />
              <div className="flex gap-0.5">
                {[0, 1, 2, 3, 4].map((i) => (
                  <span key={i} className="h-2 w-2 rounded-sm bg-yellow-400" />
                ))}
              </div>
            </div>
            <div className="grid grid-cols-7 gap-1">
              {Array.from({ length: 14 }).map((_, i) => (
                <span key={i} className={`h-3 rounded ${i === 9 ? "bg-blue-600" : "bg-slate-100"}`} />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
