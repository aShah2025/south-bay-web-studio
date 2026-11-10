import type { ReactNode } from "react";

export default function PageHeader({
  eyebrow,
  title,
  subtitle,
}: {
  eyebrow: string;
  title: ReactNode;
  subtitle: string;
}) {
  return (
    <section className="relative overflow-hidden">
      <div aria-hidden="true" className="bg-grid absolute inset-0 -z-10" />
      <div aria-hidden="true" className="absolute -top-24 left-1/4 -z-10 h-72 w-72 animate-blob rounded-full bg-blue-400/30 blur-3xl" />
      <div aria-hidden="true" className="absolute -top-10 right-1/4 -z-10 h-72 w-72 animate-blob rounded-full bg-sky-300/30 blur-3xl [animation-delay:-6s]" />
      <div className="mx-auto max-w-4xl px-4 pb-16 pt-20 text-center sm:px-6 sm:pb-20 sm:pt-28">
        <p className="eyebrow mx-auto">{eyebrow}</p>
        <h1 className="mt-6 text-4xl font-extrabold leading-[1.1] tracking-tight sm:text-6xl">{title}</h1>
        <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-slate-600">{subtitle}</p>
      </div>
    </section>
  );
}
