import Link from "next/link";

export default function NotFound() {
  return (
    <section className="container-x max-w-xl py-24 text-center">
      <p className="text-sm font-semibold text-ink">404</p>
      <h1 className="mt-3 text-4xl">Page not found</h1>
      <p className="mt-4 text-lg text-muted">That page doesn&apos;t exist, but your free homepage preview does.</p>
      <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
        <Link href="/" className="btn-secondary">Go home</Link>
        <Link href="/contact/" className="btn-primary">Get a Free Preview</Link>
      </div>
    </section>
  );
}
