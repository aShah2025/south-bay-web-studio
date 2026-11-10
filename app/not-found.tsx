import Link from "next/link";

export default function NotFound() {
  return (
    <section className="mx-auto max-w-xl px-4 py-32 text-center">
      <p className="eyebrow mx-auto">404</p>
      <h1 className="mt-6 text-4xl font-extrabold tracking-tight">Page not found</h1>
      <p className="mt-4 text-slate-600">That page doesn&apos;t exist, but your free homepage preview does.</p>
      <div className="mt-8 flex justify-center gap-3">
        <Link href="/" className="btn-secondary">Go home</Link>
        <Link href="/contact/" className="btn-primary">Get a Free Preview</Link>
      </div>
    </section>
  );
}
