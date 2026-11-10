import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import Pricing from "@/components/Pricing";
import FAQ from "@/components/FAQ";
import Comparison from "@/components/Comparison";
import CTABand from "@/components/CTABand";

export const metadata: Metadata = {
  title: "Pricing",
  description: "One-time website pricing from $300. Hosting included on every plan.",
};

const ROWS: [string, boolean | string, boolean | string, boolean | string][] = [
  ["Mobile-responsive design", true, true, true],
  ["Click-to-call button", true, true, true],
  ["Hours & Google Map embed", true, true, true],
  ["Basic SEO", true, true, true],
  ["Number of pages", "1", "3", "5"],
  ["Working lead capture form", false, true, true],
  ["Local San Jose SEO optimization", false, true, true],
  ["Embedded online booking widget", false, false, true],
  ["Google Reviews showcase", false, false, true],
  ["Delivery time", "2 weeks", "3 weeks", "4 weeks"],
  ["Rounds of revisions", "1", "2", "2 + 30 days of free edits"],
];

function Cell({ v }: { v: boolean | string }) {
  if (v === true)
    return (
      <svg className="mx-auto h-5 w-5 text-blue-600" viewBox="0 0 20 20" fill="currentColor" role="img" aria-label="Included">
        <path fillRule="evenodd" d="M16.7 5.3a1 1 0 010 1.4l-7.5 7.5a1 1 0 01-1.4 0L3.3 9.7a1 1 0 011.4-1.4l3.8 3.8 6.8-6.8a1 1 0 011.4 0z" clipRule="evenodd" />
      </svg>
    );
  if (v === false) return <span className="text-slate-300" aria-label="Not included">—</span>;
  return <span className="text-sm font-semibold">{v}</span>;
}

export default function PricingPage() {
  return (
    <>
      <PageHeader
        eyebrow="Transparent pricing"
        title={<>One price. No surprises.</>}
        subtitle="Starter, Growth or Pro. Pay once for your site. Hosting is included, and your domain name is the only yearly cost."
      />
      <Comparison />
      <Pricing heading={false} />
      <section className="section pt-0 sm:pt-0">
        <div className="container-x max-w-4xl">
          <div>
            <h2 className="text-center text-3xl sm:text-4xl">Compare plans</h2>
            <div className="card mt-10 overflow-x-auto">
              <table className="w-full min-w-[560px] text-left text-sm">
                <thead>
                  <tr className="border-b border-slate-200">
                    <th scope="col" className="p-4 font-semibold">Feature</th>
                    <th scope="col" className="p-4 text-center font-semibold">Starter<br /><span className="text-blue-600">$300</span></th>
                    <th scope="col" className="bg-blue-50/70 p-4 text-center font-semibold">Growth<br /><span className="text-blue-600">$500</span></th>
                    <th scope="col" className="p-4 text-center font-semibold">Pro<br /><span className="text-blue-600">$800</span></th>
                  </tr>
                </thead>
                <tbody>
                  {ROWS.map(([label, a, b, c]) => (
                    <tr key={label} className="border-b border-slate-100 last:border-0">
                      <th scope="row" className="p-4 font-medium text-slate-700">{label}</th>
                      <td className="p-4 text-center"><Cell v={a} /></td>
                      <td className="bg-blue-50/70 p-4 text-center"><Cell v={b} /></td>
                      <td className="p-4 text-center"><Cell v={c} /></td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>
      <FAQ />
      <div className="pt-16 sm:pt-24">
        <CTABand />
      </div>
    </>
  );
}
