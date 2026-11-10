import Link from "next/link";

export default function NotFound() {
  return (
    <section className="wrap max-w-xl pb-24 pt-44 text-center">
      <p className="text-[15px] font-semibold text-muted">404</p>
      <h1 className="mt-4">Page not found</h1>
      <p className="mt-4 text-lg text-muted">That page doesn&apos;t exist, but your free homepage preview does.</p>
      <div className="mt-8 flex justify-center gap-3">
        <Link href="/" className="btn-secondary">Go home</Link>
        <Link href="/contact/" className="btn-primary">Get a Free Preview</Link>
      </div>
    </section>
  );
}
