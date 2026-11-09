"use client";

import { useState, type FormEvent } from "react";
import { SITE } from "@/lib/site";

type Status = "idle" | "sending" | "success" | "error";

const inputClass =
  "mt-1.5 block w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm text-slate-900 placeholder:text-slate-400 transition focus:border-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-600/30";

export default function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    setStatus("sending");
    try {
      const data = new FormData(form);
      // Web3Forms fields. For Formspree, set SITE.formEndpoint to your Formspree URL;
      // the same fields work as-is.
      data.append("access_key", SITE.web3formsKey);
      data.append("subject", "New free homepage preview request");
      data.append("from_name", SITE.name);
      const res = await fetch(SITE.formEndpoint, {
        method: "POST",
        headers: { Accept: "application/json" },
        body: data,
      });
      if (!res.ok) throw new Error(String(res.status));
      form.reset();
      setStatus("success");
    } catch {
      setStatus("error");
    }
  }

  return (
    <form onSubmit={onSubmit} className="glass space-y-5 p-6 sm:p-8">
      {/* Honeypot for spam bots */}
      <input type="checkbox" name="botcheck" className="hidden" tabIndex={-1} autoComplete="off" />

      <div className="grid gap-5 sm:grid-cols-2">
        <label className="block text-sm font-medium">
          Business Name
          <input name="business_name" required autoComplete="organization" className={inputClass} placeholder="Almaden Mobile Detailing" />
        </label>
        <label className="block text-sm font-medium">
          Owner Name
          <input name="name" required autoComplete="name" className={inputClass} placeholder="Jane Doe" />
        </label>
        <label className="block text-sm font-medium">
          Email
          <input name="email" type="email" required autoComplete="email" className={inputClass} placeholder="jane@example.com" />
        </label>
        <label className="block text-sm font-medium">
          Phone
          <input name="phone" type="tel" required autoComplete="tel" className={inputClass} placeholder="(408) 555-0123" />
        </label>
      </div>
      <label className="block text-sm font-medium">
        Current Website <span className="font-normal text-slate-500">(optional)</span>
        <input name="current_website" type="url" autoComplete="url" className={inputClass} placeholder="https://" />
      </label>

      <button type="submit" disabled={status === "sending"} className="btn-primary w-full disabled:opacity-60">
        {status === "sending" ? "Sending…" : "Request My Free Preview"}
      </button>

      <div aria-live="polite" className="min-h-6 text-center text-sm">
        {status === "success" && (
          <p className="font-medium text-green-700">Thanks! We&apos;ll be in touch within one business day.</p>
        )}
        {status === "error" && (
          <p className="font-medium text-red-700">Something went wrong. Please try again or email {SITE.email}.</p>
        )}
      </div>
    </form>
  );
}
