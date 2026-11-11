export default function Logo({ className = "" }: { className?: string }) {
  return (
    <span className={`font-serif text-[23px] leading-none tracking-tight sm:text-[27px] ${className}`}>
      South Bay Web Studios
    </span>
  );
}
