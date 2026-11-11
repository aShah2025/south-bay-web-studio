/* Real screenshots of the demo sites, shown in simple device frames. */

export function BrowserFrame({
  src,
  alt,
  url,
  priority = false,
  className = "",
}: {
  src: string;
  alt: string;
  url: string;
  priority?: boolean;
  className?: string;
}) {
  return (
    <div className={`overflow-hidden rounded-xl border border-line bg-surface shadow-xl shadow-ink/10 ${className}`}>
      <div className="flex items-center gap-1.5 border-b border-line bg-paper px-3 py-2.5">
        <span className="h-2.5 w-2.5 rounded-full bg-line" />
        <span className="h-2.5 w-2.5 rounded-full bg-line" />
        <span className="h-2.5 w-2.5 rounded-full bg-line" />
        <div className="ml-3 min-w-0 flex-1 truncate rounded-md bg-surface px-3 py-1 text-[11px] text-muted ring-1 ring-line">{url}</div>
      </div>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={src}
        alt={alt}
        width={1280}
        height={800}
        loading={priority ? "eager" : "lazy"}
        fetchPriority={priority ? "high" : "auto"}
        className="block aspect-[16/10] w-full object-cover object-top"
      />
    </div>
  );
}

export function PhoneFrame({ src, alt, className = "" }: { src: string; alt: string; className?: string }) {
  return (
    <div className={`overflow-hidden rounded-[1.6rem] border-[5px] border-charcoal bg-charcoal shadow-xl shadow-ink/20 ${className}`}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={src} alt={alt} width={390} height={844} loading="lazy" className="block aspect-[390/844] w-full rounded-[1.1rem] object-cover object-top" />
    </div>
  );
}
