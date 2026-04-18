"use client";

import { useState } from "react";
import { Button } from "@/components/ui/Button";

const faqs = [
  {
    q: "How do I track my order?",
    a: "You'll receive a tracking link via email within 24 hours of your order shipping. Standard orders ship in 1–2 business days. Expedited ships same-day if ordered before 12pm EST.",
  },
  {
    q: "What is the 30-day Attraction Guarantee?",
    a: "If you don't notice a measurable difference in how people interact with you within 30 days, contact us with your order number and we'll refund every penny — no questions, no restocking fees, no fine print.",
  },
  {
    q: "How do I cancel or pause my subscription?",
    a: "Log into your account and go to Subscription Settings. You can skip a month, pause for up to 3 months, or cancel entirely with one click. There are no cancellation fees.",
  },
  {
    q: "Can I combine a subscription with a one-time order?",
    a: "Yes. Subscribers automatically receive 15–35% off all single orders (depending on tier) at checkout. Your discount code is in your welcome email.",
  },
  {
    q: "Do you ship internationally?",
    a: "We ship to 43 countries. International orders typically arrive in 5–10 business days. Customs duties, if applicable, are the responsibility of the recipient.",
  },
  {
    q: "What if my bottle arrives damaged?",
    a: "Photograph the damage and email support@s1ckshop.com within 48 hours of delivery. We'll ship a replacement at no charge — usually within 1 business day.",
  },
];

function FAQItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-white/5">
      <button
        onClick={() => setOpen(!open)}
        className="flex w-full items-center justify-between gap-4 py-5 text-left"
      >
        <span className="font-display text-base font-bold text-ivory sm:text-lg">{q}</span>
        <span className={`shrink-0 text-gold transition-transform duration-300 ${open ? "rotate-45" : ""}`}>
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M12 5v14M5 12h14" strokeLinecap="round" />
          </svg>
        </span>
      </button>
      <div className={`overflow-hidden transition-all duration-300 ${open ? "max-h-40 pb-5" : "max-h-0"}`}>
        <p className="text-sm leading-relaxed text-ivory-dim">{a}</p>
      </div>
    </div>
  );
}

export default function ContactPage() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent">("idle");
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    setTimeout(() => setStatus("sent"), 1500);
  };

  return (
    <>
      {/* Hero */}
      <section className="relative bg-ink pt-[112px]">
        <div className="noise" />
        <div className="relative mx-auto max-w-[1400px] px-6 pb-16 pt-16">
          <p className="mb-4 text-[11px] uppercase tracking-[0.3em] text-gold">We're Here</p>
          <h1
            className="font-display font-black leading-[0.93] text-ivory"
            style={{ fontSize: "var(--text-display)" }}
          >
            Get in
            <span className="italic text-gold"> Touch.</span>
          </h1>
          <p className="mt-5 max-w-md text-sm leading-relaxed text-ivory-dim">
            Questions, feedback, partnership inquiries, or just want to tell us your story — we read everything.
          </p>
        </div>
        <div className="gold-rule" />
      </section>

      {/* Main content */}
      <section className="bg-ink py-16">
        <div className="mx-auto max-w-[1400px] px-6">
          <div className="grid gap-16 lg:grid-cols-[1fr_1.2fr]">

            {/* Left — info cards + hours */}
            <div className="space-y-6">
              {[
                {
                  icon: (
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" /><polyline points="22,6 12,13 2,6" /></svg>
                  ),
                  title: "Email",
                  value: "support@s1ckshop.com",
                  sub: "Response within 4 hours, Mon–Fri",
                },
                {
                  icon: (
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 2H3v16h5l4 4 4-4h5V2z" /></svg>
                  ),
                  title: "Live Chat",
                  value: "Available on the site",
                  sub: "Mon–Fri, 9am–9pm EST",
                },
                {
                  icon: (
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81 19.79 19.79 0 01.1 1.2 2 2 0 012.11 0h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L6.41 7.6a16 16 0 006 6l1-1a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 13.92v3z" /></svg>
                  ),
                  title: "Phone",
                  value: "+1 (888) S1CK-SHOP",
                  sub: "Mon–Fri, 10am–6pm EST",
                },
              ].map((card) => (
                <div key={card.title} className="flex items-start gap-5 border border-white/8 bg-elevated p-6">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center border border-gold/30 text-gold">
                    {card.icon}
                  </div>
                  <div>
                    <div className="text-[10px] uppercase tracking-[0.25em] text-gold">{card.title}</div>
                    <div className="mt-1 font-display text-lg font-bold text-ivory">{card.value}</div>
                    <div className="mt-0.5 text-xs text-ivory-dim">{card.sub}</div>
                  </div>
                </div>
              ))}

              {/* Quick links */}
              <div className="border border-white/8 bg-elevated p-6">
                <p className="mb-4 text-[10px] uppercase tracking-[0.25em] text-gold">Quick Links</p>
                <div className="space-y-2">
                  {[
                    { label: "Track My Order", href: "#" },
                    { label: "Start a Return", href: "#" },
                    { label: "Manage Subscription", href: "#" },
                    { label: "Ambassador Program", href: "/#affiliate" },
                    { label: "The Science FAQ", href: "/science" },
                  ].map((l) => (
                    <a
                      key={l.label}
                      href={l.href}
                      className="flex items-center justify-between py-2 text-sm text-ivory-dim transition-colors hover:text-gold"
                    >
                      {l.label}
                      <span className="text-gold/40">→</span>
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Right — form */}
            <div className="border border-gold/20 bg-elevated p-8 md:p-10">
              {status === "sent" ? (
                <div className="flex min-h-[400px] flex-col items-center justify-center text-center">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full border border-gold/40 text-gold">
                    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                  <h3 className="mt-5 font-display text-2xl font-black text-ivory">Message Sent.</h3>
                  <p className="mt-3 text-sm text-ivory-dim">We'll get back to you within 4 hours.</p>
                  <button
                    onClick={() => { setStatus("idle"); setForm({ name: "", email: "", subject: "", message: "" }); }}
                    className="mt-6 text-xs uppercase tracking-[0.2em] text-gold hover:underline"
                  >
                    Send another
                  </button>
                </div>
              ) : (
                <>
                  <p className="mb-2 text-[11px] uppercase tracking-[0.3em] text-gold">Send a Message</p>
                  <h2 className="mb-8 font-display text-3xl font-black text-ivory">We Read Everything.</h2>
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="grid gap-5 sm:grid-cols-2">
                      <div>
                        <label className="mb-1.5 block text-[10px] uppercase tracking-[0.2em] text-ivory-dim">Name</label>
                        <input
                          required
                          value={form.name}
                          onChange={(e) => setForm({ ...form, name: e.target.value })}
                          className="w-full border border-white/10 bg-ink px-4 py-3 text-sm text-ivory outline-none focus:border-gold placeholder:text-ivory/20 transition-colors"
                          placeholder="Your name"
                        />
                      </div>
                      <div>
                        <label className="mb-1.5 block text-[10px] uppercase tracking-[0.2em] text-ivory-dim">Email</label>
                        <input
                          required
                          type="email"
                          value={form.email}
                          onChange={(e) => setForm({ ...form, email: e.target.value })}
                          className="w-full border border-white/10 bg-ink px-4 py-3 text-sm text-ivory outline-none focus:border-gold placeholder:text-ivory/20 transition-colors"
                          placeholder="your@email.com"
                        />
                      </div>
                    </div>
                    <div>
                      <label className="mb-1.5 block text-[10px] uppercase tracking-[0.2em] text-ivory-dim">Subject</label>
                      <select
                        value={form.subject}
                        onChange={(e) => setForm({ ...form, subject: e.target.value })}
                        className="w-full border border-white/10 bg-ink px-4 py-3 text-sm text-ivory outline-none focus:border-gold transition-colors"
                      >
                        <option value="">Select a topic</option>
                        <option>Order / Tracking</option>
                        <option>Returns & Refunds</option>
                        <option>Subscription</option>
                        <option>Product Question</option>
                        <option>Ambassador Program</option>
                        <option>Wholesale / Retail</option>
                        <option>Other</option>
                      </select>
                    </div>
                    <div>
                      <label className="mb-1.5 block text-[10px] uppercase tracking-[0.2em] text-ivory-dim">Message</label>
                      <textarea
                        required
                        rows={6}
                        value={form.message}
                        onChange={(e) => setForm({ ...form, message: e.target.value })}
                        className="w-full resize-none border border-white/10 bg-ink px-4 py-3 text-sm text-ivory outline-none focus:border-gold placeholder:text-ivory/20 transition-colors"
                        placeholder="Tell us what's on your mind..."
                      />
                    </div>
                    <Button type="submit" size="lg" className="w-full justify-center" disabled={status === "sending"}>
                      {status === "sending" ? "Sending…" : "Send Message"}
                    </Button>
                  </form>
                </>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="border-t border-white/5 bg-surface py-20">
        <div className="mx-auto max-w-[900px] px-6">
          <div className="mb-12 text-center">
            <p className="mb-4 text-[11px] uppercase tracking-[0.3em] text-gold">Support</p>
            <h2 className="font-display text-4xl font-black text-ivory">Common Questions.</h2>
          </div>
          <div className="divide-y divide-white/0">
            {faqs.map((item) => <FAQItem key={item.q} {...item} />)}
          </div>
        </div>
      </section>
    </>
  );
}
