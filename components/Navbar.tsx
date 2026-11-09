import Logo from "./Logo";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/70 bg-white/80 backdrop-blur-xl">
      <nav
        aria-label="Primary"
        className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6"
      >
        <a href="#top" aria-label="South Bay Web Studio home">
          <Logo />
        </a>
        <div className="flex items-center gap-3 sm:gap-6">
          <a href="#work" className="hidden text-sm font-medium text-slate-600 hover:text-slate-900 sm:block">
            Work
          </a>
          <a href="#pricing" className="hidden text-sm font-medium text-slate-600 hover:text-slate-900 sm:block">
            Pricing
          </a>
          <a href="#contact" className="btn-primary !px-4 !py-2">
            Get a Free Preview
          </a>
        </div>
      </nav>
    </header>
  );
}
