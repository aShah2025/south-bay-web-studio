import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import ContactForm from "@/components/ContactForm";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "Free Homepage Preview",
  description: "Request a free homepage mockup for your San Jose business. No obligation.",
};

const NEXT = [
  { title: "You send the details", body: "Fill in the short form. It takes under a minute." },
  { title: "We mock up your homepage", body: "A free preview, built around your business." },
  { title: "You decide", body: "Love it? Pick a plan. Not for you? No hard feelings." },
];

export default function ContactPage() {
  return (
    <>
      <PageHeader
        eyebrow="Free homepage preview"
        title={<>Let&apos;s see your business online</>}
        subtitle="Tell us about your business and we'll mock up your homepage at no cost, no obligation."
      />
      <section className="section">
        <div className="container-x grid gap-8 lg:grid-cols-[1.3fr_1fr] lg:gap-12">
          <ContactForm />
          <div className="space-y-5">
            <div className="card bg-sand p-7 sm:p-8">
              <h2 className="text-2xl">What happens next</h2>
              <ol className="mt-6 space-y-5">
                {NEXT.map((n, i) => (
                  <li key={n.title} className="flex gap-4">
                    <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-charcoal text-sm font-bold text-surface">{i + 1}</span>
                    <div>
                      <p className="font-semibold">{n.title}</p>
                      <p className="mt-0.5 text-[15px] text-muted">{n.body}</p>
                    </div>
                  </li>
                ))}
              </ol>
            </div>
            <div className="card p-6 text-[15px]">
              <p className="font-semibold">Prefer email?</p>
              <p className="mt-1"><a className="text-ink hover:underline" href={`mailto:${SITE.email}`}>{SITE.email}</a></p>
              <p className="mt-3 text-muted">{SITE.location}</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
