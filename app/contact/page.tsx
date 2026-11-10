import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import ContactForm from "@/components/ContactForm";
import Reveal from "@/components/Reveal";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "Free Homepage Preview",
  description: "Request a free homepage mockup for your San Jose business. No obligation.",
};

const NEXT = [
  { title: "You send the details", body: "Fill in the short form. It takes under a minute." },
  { title: "We mock up your homepage", body: "A free preview, built around your business." },
  { title: "You decide", body: "Love it? Pick a tier. Not for you? No hard feelings." },
];

export default function ContactPage() {
  return (
    <>
      <PageHeader
        eyebrow="Free homepage preview"
        title={<>Let&apos;s see your business online.</>}
        subtitle="Tell us about your business and we'll mock up your homepage at no cost, no obligation."
      />
      <section className="wrap pb-20 sm:pb-28">
        <div className="grid gap-8 lg:grid-cols-[1.3fr_1fr] lg:gap-14">
          <Reveal>
            <ContactForm />
          </Reveal>
          <Reveal delay={100}>
            <div className="space-y-5">
              <div className="panel p-7 sm:p-8">
                <h2 className="!text-[26px]">What happens next</h2>
                <ol className="mt-6 space-y-5">
                  {NEXT.map((n) => (
                    <li key={n.title} className="border-t border-line pt-4">
                      <p className="font-semibold">{n.title}</p>
                      <p className="mt-1 text-[15px] text-muted">{n.body}</p>
                    </li>
                  ))}
                </ol>
              </div>
              <div className="panel p-6 text-[15px]">
                <p className="font-semibold">Prefer email?</p>
                <p className="mt-1"><a className="underline underline-offset-4" href={`mailto:${SITE.email}`}>{SITE.email}</a></p>
                <p className="mt-3 text-muted">{SITE.location}</p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
