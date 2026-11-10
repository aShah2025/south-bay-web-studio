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
      className={`overflow-hidden rounded-lg border border-line bg-surface shadow-[0_10px_30px_rgba(21,27,34,0.10)] ${className}`}
    >
      <div className="flex items-center gap-1.5 border-b border-line bg-paper px-3 py-2">
        <span className="h-2.5 w-2.5 rounded-full bg-line" />
        <span className="h-2.5 w-2.5 rounded-full bg-line" />
        <span className="h-2.5 w-2.5 rounded-full bg-line" />
        <div className="ml-3 flex-1 truncate rounded bg-surface px-3 py-1 text-[10px] text-muted ring-1 ring-line">{url}</div>
      </div>
      <div className="p-3">
        {level >= 2 && (
          <div className="mb-3 flex items-center justify-between">
            <div className="h-2.5 w-14 rounded bg-ink/80" />
            <div className="flex gap-2">
              <span className="h-1.5 w-8 rounded bg-line" />
              <span className="h-1.5 w-8 rounded bg-line" />
              <span className="h-1.5 w-8 rounded bg-line" />
            </div>
          </div>
        )}
        <div className={`rounded-md bg-gradient-to-br ${accent} p-4`}>
          <div className="h-3 w-3/4 rounded bg-ink/80" />
          <div className="mt-2 h-2 w-1/2 rounded bg-ink/30" />
          <div className="mt-4 h-6 w-20 rounded bg-charcoal" />
        </div>
        {level >= 2 && (
          <div className="mt-3 grid grid-cols-3 gap-2">
            {[0, 1, 2].map((i) => (
              <div key={i} className="rounded border border-line p-2">
                <div className="h-6 rounded bg-sand" />
                <div className="mt-2 h-1.5 w-3/4 rounded bg-line" />
              </div>
            ))}
          </div>
        )}
        {level === 3 && (
          <div className="mt-3 rounded border border-line p-2">
            <div className="mb-2 flex items-center justify-between">
              <div className="h-2 w-16 rounded bg-ink/80" />
              <div className="flex gap-0.5">
                {[0, 1, 2, 3, 4].map((i) => (
                  <span key={i} className="h-2 w-2 rounded-sm bg-amber-400" />
                ))}
              </div>
            </div>
            <div className="grid grid-cols-7 gap-1">
              {Array.from({ length: 14 }).map((_, i) => (
                <span key={i} className={`h-3 rounded-sm ${i === 9 ? "bg-charcoal" : "bg-sand"}`} />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
