import Link from "next/link";

export default function CTABand() {
  return (
    <section className="container-x pb-16 sm:pb-24">
      <div className="rounded-3xl bg-blue-600 px-6 py-14 text-center sm:px-12 sm:py-20">
        <h2 className="mx-auto max-w-2xl !text-white text-3xl sm:text-4xl">See your homepage before you pay a cent.</h2>
        <p className="mx-auto mt-4 max-w-xl text-lg text-blue-100">
          Send us your business details and we&apos;ll mock up a free homepage preview. No obligation.
        </p>
        <Link href="/contact/" className="mt-8 inline-flex min-h-12 items-center justify-center rounded-full bg-white px-8 py-3 text-base font-semibold text-blue-700 shadow-sm transition hover:bg-blue-50">
          Request Your Free Homepage Preview
        </Link>
      </div>
    </section>
  );
}
