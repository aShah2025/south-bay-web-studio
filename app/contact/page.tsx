import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import ContactForm from "@/components/ContactForm";
import Reveal from "@/components/Reveal";
import Icon, { type IconName } from "@/components/Icon";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "Free Homepage Preview",
  description: "Request a free homepage mockup for your San Jose business. No obligation.",
};

const NEXT: { icon: IconName; title: string; body: string }[] = [
  { icon: "mail", title: "You send the details", body: "Fill in the short form. It takes under a minute." },
  { icon: "bolt", title: "We mock up your homepage", body: "A free preview, built around your business." },
  { icon: "star", title: "You decide", body: "Love it? Pick a tier. Not for you? No hard feelings." },
];

export default function ContactPage() {
  return (
    <>
      <PageHeader
        eyebrow="Free homepage preview"
        title={<>Let&apos;s see your business <span className="gradient-text">online.</span></>}
        subtitle="Tell us about your business and we'll mock up your homepage at no cost, no obligation."
      />
      <section className="pb-20 sm:pb-28">
        <div className="mx-auto grid max-w-6xl gap-10 px-4 sm:px-6 lg:grid-cols-[1.3fr_1fr]">
          <Reveal>
            <ContactForm />
          </Reveal>
          <Reveal delay={120}>
            <div className="space-y-6">
              <div className="rounded-2xl bg-slate-900 p-8 text-white">
                <h2 className="text-xl font-bold">What happens next</h2>
                <ol className="mt-6 space-y-6">
                  {NEXT.map((n, i) => (
                    <li key={n.title} className="flex gap-4">
                      <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-blue-600"><Icon name={n.icon} className="h-5 w-5" /></span>
                      <div>
                        <p className="font-semibold"><span className="text-sky-300">{i + 1}.</span> {n.title}</p>
                        <p className="mt-1 text-sm text-slate-300">{n.body}</p>
                      </div>
                    </li>
                  ))}
                </ol>
              </div>
              <div className="glass p-6 text-sm">
                <p className="flex items-center gap-3 font-medium"><Icon name="mail" className="h-5 w-5 text-blue-600" /><a className="hover:text-blue-600" href={`mailto:${SITE.email}`}>{SITE.email}</a></p>
                <p className="mt-3 flex items-center gap-3 font-medium"><Icon name="pin" className="h-5 w-5 text-blue-600" />{SITE.location}</p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
