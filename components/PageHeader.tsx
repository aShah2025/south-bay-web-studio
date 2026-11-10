import type { ReactNode } from "react";

export default function PageHeader({ eyebrow, title, subtitle }: { eyebrow: string; title: ReactNode; subtitle: string }) {
  return (
    <section className="border-b border-slate-100 bg-gradient-to-b from-slate-50 to-white">
      <div className="container-x max-w-4xl py-16 text-center sm:py-24">
        <p className="text-sm font-semibold text-blue-600">{eyebrow}</p>
        <h1 className="mt-3 text-4xl sm:text-5xl">{title}</h1>
        <p className="mx-auto mt-5 max-w-2xl text-lg text-slate-600 sm:text-xl">{subtitle}</p>
      </div>
    </section>
  );
}
