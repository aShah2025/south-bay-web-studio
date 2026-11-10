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
    <section className="wrap pb-12 pt-36 text-center sm:pb-16 sm:pt-44">
      <p className="text-[15px] font-semibold text-muted">{eyebrow}</p>
      <h1 className="mx-auto mt-4 max-w-4xl">{title}</h1>
      <p className="mx-auto mt-6 max-w-xl text-lg text-muted sm:text-xl">{subtitle}</p>
    </section>
  );
}
