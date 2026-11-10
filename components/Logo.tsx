export default function Logo() {
  return (
    <span className="flex items-center gap-2 font-bold tracking-tight">
      <svg width="28" height="28" viewBox="0 0 28 28" aria-hidden="true">
        <rect width="28" height="28" rx="8" className="fill-blue-600" />
        <path
          d="M7 17c2.5 0 2.5-6 5-6s2.5 6 5 6 2.5-6 4-6"
          className="stroke-white"
          strokeWidth="2.2"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
        />
      </svg>
      <span className="text-base sm:text-lg">
        South Bay <span className="text-blue-600">Web Studios</span>
      </span>
    </span>
  );
}
