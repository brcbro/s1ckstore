"use client";

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/Button";

const REF = "/Refrence%20photo%20from%20orignal%20website";

/* ─── Data ───────────────────────────────────────────────────────────── */

const WHY = [
  { icon: "🪙", text: "Save up to 35% off retail pricing" },
  { icon: "🧠", text: "Curated drops monthly — never the same routine twice" },
  { icon: "🔄", text: "Skip, cancel, or switch anytime — zero contracts" },
  { icon: "💎", text: "Exclusive formulas only available to subscribers" },
  { icon: "💥", text: "Pheromone-powered attraction, delivered to your door" },
];

const PLANS = [
  {
    id: "tease",
    name: "The Tease",
    price: 39,
    tagline: "Choose 1 10ml Perfume",
    benefit: "Affordable entry — enjoy one curated scent each month",
    perk: "Flexible — pause, switch, or cancel anytime",
    cta: "Start with Tease",
    featured: false,
    tone: "standard" as const,
  },
  {
    id: "double",
    name: "Double Dip",
    price: 79,
    tagline: "Choose 2 Perfumes",
    benefit: "Two scents/month for day & night variety. Great for sharing!",
    perk: "Early access to seasonal drops",
    cta: "Go Double",
    featured: false,
    tone: "standard" as const,
  },
  {
    id: "arsenal",
    name: "The Arsenal",
    price: 99,
    tagline: "Choose 3 Perfumes",
    benefit: "Full rotation of 3 fragrances every month — never get bored!",
    perk: "Best value 25% off for 3 + Private Members Group",
    cta: "Fill It Up",
    featured: true,
    tone: "gold" as const,
  },
  {
    id: "blacklabel",
    name: "Black Label Access",
    price: 125,
    tagline: "2 Sprays + 1 Luxury Roll-On Oil",
    benefit: "2 Premium Pheromone Sprays + 1 Luxury Roll-On Oil ($70 value)",
    perk: "VIP Private Members Group + Bonus Perks + 1st Access to new drops",
    cta: "Unlock Black Label",
    featured: false,
    tone: "black" as const,
  },
];

const FEATURES = [
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M5 12h14M12 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
        <rect x="1" y="3" width="15" height="13" rx="1" />
        <path d="M16 8h4l3 5v3h-7V8z" />
      </svg>
    ),
    title: "Free Shipping",
    sub: "Fast, free delivery on every monthly box",
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    title: "Luxury Scents",
    sub: "Premium, exclusive fragrances in every drop",
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M20 12V22H4V12" /><path d="M22 7H2v5h20V7z" /><path d="M12 22V7" />
        <path d="M12 7H7.5a2.5 2.5 0 010-5C11 2 12 7 12 7z" />
        <path d="M12 7h4.5a2.5 2.5 0 000-5C13 2 12 7 12 7z" />
      </svg>
    ),
    title: "Member's Only Pricing",
    sub: "Eligibility for Black Label perks and exclusive discounts",
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <circle cx="12" cy="12" r="10" /><path d="M15 9l-6 6M9 9l6 6" strokeLinecap="round" />
      </svg>
    ),
    title: "Cancel Anytime",
    sub: "No contracts. Pause, skip, or stop anytime",
  },
];

const STEPS = [
  {
    emoji: "🛒",
    title: "Choose Your Tier",
    body: "Pick your monthly subscription — Tease, Double Dip, Arsenal, or VIP Black Label!",
  },
  {
    emoji: "📦",
    title: "We Ship, Fast & Free",
    body: "Your curated scent (or exclusive oil) is expertly packed and shipped to your door — free delivery every month.",
  },
  {
    emoji: "🔥",
    title: "Enjoy, Switch, or Pause",
    body: "Try new drops every month and reactivate, skip, or pause anytime. No contracts, just new vibes!",
  },
];

/* ─── Countdown Timer ─────────────────────────────────────────────── */
function useCountdown() {
  const getTarget = () => {
    const now = new Date();
    const target = new Date(now.getFullYear(), now.getMonth() + 1, 1, 0, 0, 0);
    return target.getTime();
  };

  const calc = () => {
    const diff = Math.max(0, getTarget() - Date.now());
    return {
      days:    Math.floor(diff / 86400000),
      hours:   Math.floor((diff % 86400000) / 3600000),
      minutes: Math.floor((diff % 3600000)  / 60000),
      seconds: Math.floor((diff % 60000)    / 1000),
    };
  };

  const [time, setTime] = useState(calc);
  useEffect(() => {
    const id = setInterval(() => setTime(calc()), 1000);
    return () => clearInterval(id);
  }, []);
  return time;
}

function Digit({ n, label }: { n: number; label: string }) {
  const val = String(n).padStart(2, "0");
  return (
    <div className="flex flex-col items-center gap-1">
      <div className="flex gap-0.5">
        {val.split("").map((d, i) => (
          <div
            key={i}
            className="flex h-14 w-10 items-center justify-center border border-gold/30 bg-elevated font-display text-3xl font-black text-ivory sm:h-16 sm:w-12 sm:text-4xl"
          >
            {d}
          </div>
        ))}
      </div>
      <span className="text-[9px] uppercase tracking-[0.25em] text-ivory/40">{label}</span>
    </div>
  );
}

/* ─── Plan Card ──────────────────────────────────────────────────── */
const planStyles = {
  standard: "border-white/10 bg-elevated",
  gold:     "border-gold bg-gradient-to-b from-gold/15 via-elevated to-elevated shadow-[0_0_60px_-10px_rgba(201,169,97,0.4)] scale-[1.03]",
  black:    "border-gold/25 bg-gradient-to-b from-[#0a0a0a] via-ink to-ink relative overflow-hidden",
};

function PlanCard({ plan }: { plan: typeof PLANS[number] }) {
  return (
    <article className={`relative flex flex-col border p-7 transition-all duration-300 hover:border-gold/60 ${planStyles[plan.tone]}`}>
      {plan.featured && (
        <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-gold px-5 py-1 text-[10px] font-bold uppercase tracking-[0.25em] text-ink">
          Most Popular
        </span>
      )}
      {plan.tone === "black" && (
        <div className="gold-shimmer pointer-events-none absolute inset-0 opacity-25" />
      )}

      <div className="relative">
        {plan.tone === "black" && (
          <span className="mb-3 inline-block border border-gold/40 bg-gold/10 px-3 py-1 text-[9px] uppercase tracking-[0.3em] text-gold">
            VIP Tier
          </span>
        )}
        <h3 className="font-display text-2xl font-black text-ivory">{plan.name}</h3>
        <p className="mt-1 text-xs italic text-ivory-dim">{plan.tagline}</p>

        <div className="mt-5 flex items-baseline gap-1">
          <span className="font-display text-5xl font-black text-ivory">${plan.price}</span>
          <span className="text-sm text-ivory-dim">/month</span>
        </div>

        <div className="my-6 h-px bg-white/5" />

        <ul className="space-y-3">
          <li className="flex items-start gap-2.5 text-sm text-ivory">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="mt-0.5 shrink-0 text-gold">
              <path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            {plan.benefit}
          </li>
          <li className="flex items-start gap-2.5 text-sm text-ivory-dim">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="mt-0.5 shrink-0 text-gold/60">
              <path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            {plan.perk}
          </li>
          <li className="flex items-start gap-2.5 text-sm text-ivory-dim">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="mt-0.5 shrink-0 text-gold/60">
              <path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            Free shipping every month
          </li>
        </ul>
      </div>

      <div className="relative mt-8">
        <Button
          size="lg"
          variant={plan.featured ? "gold" : plan.tone === "black" ? "gold" : "outline"}
          className="w-full justify-center"
        >
          {plan.cta}
        </Button>
      </div>
    </article>
  );
}

/* ─── Page ───────────────────────────────────────────────────────── */
export default function SubscribePage() {
  const time = useCountdown();

  return (
    <>
      {/* ── Hero ── */}
      <section
        className="relative overflow-hidden bg-ink"
        style={{ paddingTop: "var(--hdr-h, 112px)" }}
      >
        <div className="noise" />
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_70%_60%_at_50%_100%,rgba(201,169,97,0.09),transparent)]" />

        <div className="relative mx-auto max-w-[1400px] px-6 pb-20 pt-16 text-center">
          <div className="mb-5 inline-flex items-center gap-2 border border-gold/30 bg-gold/10 px-4 py-2 text-[10px] uppercase tracking-[0.3em] text-gold">
            ⭐ Rated #1 Pheromones · 6 Years Running
          </div>
          <h1
            className="mx-auto max-w-4xl font-display font-black leading-[0.93] text-ivory"
            style={{ fontSize: "var(--text-hero)" }}
          >
            Power. Chemistry.
            <br />
            <span className="italic text-gold">Obsession.</span>
          </h1>
          <p className="mx-auto mt-4 max-w-lg text-base leading-relaxed text-ivory-dim">
            Delivered Monthly. Subscribe to our 10ml pheromone decants and save up to 35% off retail — while supplies last.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <Button href="#plans" size="lg">Explore Plans</Button>
            <Button href="#how-it-works" variant="outline" size="lg">How It Works</Button>
          </div>
          <p className="mt-5 text-[10px] uppercase tracking-[0.25em] text-ivory/30">
            Over 100,000+ Happy Customers · 30-Day Attraction Guarantee
          </p>
        </div>
        <div className="gold-rule" />
      </section>

      {/* ── Why Join ── */}
      <section className="border-b border-white/5 bg-surface py-16">
        <div className="mx-auto max-w-[1400px] px-6">
          <div className="mb-10 text-center">
            <p className="text-[11px] uppercase tracking-[0.3em] text-gold">The Case for Subscribing</p>
            <h2 className="mt-3 font-display text-4xl font-black text-ivory">
              Why Join the S1CK Sub Club?
            </h2>
          </div>
          <div className="mx-auto grid max-w-3xl gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {WHY.map((w) => (
              <div key={w.text} className="flex items-start gap-4 border border-white/5 bg-elevated p-5">
                <span className="text-2xl">{w.icon}</span>
                <p className="text-sm leading-snug text-ivory">{w.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Plans ── */}
      <section id="plans" className="bg-ink py-24">
        <div className="mx-auto max-w-[1400px] px-6">
          <div className="mb-16 text-center">
            <p className="mb-4 text-[11px] uppercase tracking-[0.3em] text-gold">S1CKSHOP Subscription</p>
            <h2 className="font-display text-4xl font-black text-ivory md:text-5xl">
              Choose Your
              <span className="italic text-gold"> Weapon.</span>
            </h2>
            <p className="mx-auto mt-4 max-w-lg text-sm text-ivory-dim">
              Our signature 10ml bottles deliver luxury fragrance blends crafted for maximum impact — designed for convenience and premium results.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 md:items-stretch lg:grid-cols-4">
            {PLANS.map((p) => <PlanCard key={p.id} plan={p} />)}
          </div>
        </div>
      </section>

      {/* ── Benefits table ── */}
      <section className="border-t border-white/5 bg-surface py-16">
        <div className="mx-auto max-w-[1400px] px-6">
          <div className="mb-10 text-center">
            <p className="mb-3 text-[11px] uppercase tracking-[0.3em] text-gold">Key Benefits</p>
            <h2 className="font-display text-3xl font-black text-ivory">All Plans Come With Upgrades.</h2>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full min-w-[600px] border-collapse text-sm">
              <thead>
                <tr className="border-b border-white/10">
                  {["Subscription Plan", "Key Benefit(s)", "Special Subscriber Only Perk"].map((h) => (
                    <th key={h} className="px-5 py-3.5 text-left text-[10px] uppercase tracking-[0.22em] text-gold">
                      {h}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {PLANS.map((p, i) => (
                  <tr key={p.id} className={`border-b border-white/5 ${i % 2 === 0 ? "bg-elevated/50" : ""} transition-colors hover:bg-gold/5`}>
                    <td className="px-5 py-4 font-display font-bold text-ivory">{p.name}</td>
                    <td className="px-5 py-4 text-ivory-dim">{p.benefit}</td>
                    <td className="px-5 py-4 text-ivory-dim">{p.perk}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ── As Seen On / social proof ── */}
      <section className="border-y border-white/5 bg-ink py-10">
        <div className="mx-auto max-w-[1400px] px-6">
          <p className="mb-6 text-center text-[10px] uppercase tracking-[0.3em] text-ivory/30">As Seen On</p>
          <div className="flex flex-wrap items-center justify-center gap-8 md:gap-14">
            {["FOX", "USA TODAY", "MARKETWATCH", "DIGITAL JOURNAL"].map((logo) => (
              <span
                key={logo}
                className="font-display text-sm font-black tracking-[0.15em] text-ivory/25 transition-colors hover:text-ivory/60"
              >
                {logo}
              </span>
            ))}
          </div>
          <div className="mt-8 text-center">
            <p className="font-display text-2xl font-black text-ivory">
              ⭐⭐⭐⭐⭐{" "}
              <span className="text-gold">Over 100,000+ Happy Customers</span>
            </p>
            <p className="mt-2 text-xs uppercase tracking-[0.25em] text-ivory-dim">
              Scientifically Formulated to Attract · Rated #1 Pheromones 6 Years In A Row
            </p>
          </div>
        </div>
      </section>

      {/* ── Black Label Feature ── */}
      <section className="relative overflow-hidden bg-ink py-24">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_60%_80%_at_100%_50%,rgba(201,169,97,0.07),transparent)]" />
        <div className="noise" />
        <div className="relative mx-auto grid max-w-[1400px] items-center gap-12 px-6 lg:grid-cols-2">

          {/* Media */}
          <div className="relative aspect-[3/4] overflow-hidden border border-gold/20">
            <img
              src={`${REF}/Le_Toxiqu_Luxury_Pheromone_Cologne_for_Men.webp`}
              alt="Black Label Access"
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/40 to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-r from-transparent to-ink/30" />
            <div className="gold-shimmer absolute inset-0 opacity-15" />
            <div className="absolute bottom-6 left-6">
              <span className="bg-gold px-4 py-2 font-display text-sm font-black uppercase tracking-[0.2em] text-ink">
                Black Label Access
              </span>
            </div>
          </div>

          {/* Copy */}
          <div>
            <span className="mb-4 inline-block border border-gold/40 bg-gold/10 px-4 py-1.5 text-[10px] uppercase tracking-[0.3em] text-gold">
              VIP Tier · $125/Month
            </span>
            <h2
              className="font-display font-black leading-[0.93] text-ivory"
              style={{ fontSize: "clamp(2.2rem, 4vw, 3.5rem)" }}
            >
              Black Label Access.
              <br />
              <span className="italic text-gold">The Inner Circle.</span>
            </h2>
            <p className="mt-4 text-base italic leading-snug text-ivory">
              "This isn&apos;t your average subscription. It&apos;s like getting VIP bottle service... but for attraction."
            </p>
            <p className="mt-3 text-sm text-ivory-dim">
              You&apos;re not just joining a tier. You&apos;re unlocking the inner circle. 🔑
            </p>

            <ul className="mt-8 space-y-3.5">
              {[
                { e: "🔥", t: "2 Premium Pheromone Sprays of Your Choice" },
                { e: "💧", t: "1 Luxury Roll-On Oil (worth $70 alone — hits like a secret weapon)" },
                { e: "💬", t: "Access to the VIP Members-Only Group & Private Forum" },
                { e: "🚨", t: "Early Access to New Drops Before They Go Public" },
                { e: "🎁", t: "Surprise Bonus perks every quarter" },
              ].map(({ e, t }) => (
                <li key={t} className="flex items-start gap-3 text-sm text-ivory">
                  <span className="text-base">{e}</span>
                  {t}
                </li>
              ))}
            </ul>

            <p className="mt-5 text-xs text-ivory/40">
              🔒 The roll-on oil is part of the Black Label secret stash — made for insiders only.
            </p>

            <div className="mt-8">
              <Button size="lg">Unlock Black Label Access</Button>
            </div>
          </div>
        </div>
      </section>

      {/* ── Countdown ── */}
      <section className="border-y border-gold/20 bg-gradient-to-r from-gold/5 via-gold/10 to-gold/5 py-14">
        <div className="mx-auto max-w-[1400px] px-6 text-center">
          <p className="mb-2 text-[11px] uppercase tracking-[0.3em] text-gold">Limited Availability</p>
          <h2 className="font-display text-3xl font-black text-ivory md:text-4xl">
            Claim This Month&apos;s Ultimate Attraction Pack
            <br />
            <span className="italic text-gold">Before These Slots End!</span>
          </h2>
          <div className="mt-8 flex flex-wrap items-start justify-center gap-3 sm:gap-5">
            <Digit n={time.days}    label="Days"    />
            <span className="mt-3 font-display text-4xl font-black text-gold/60 sm:mt-4">:</span>
            <Digit n={time.hours}   label="Hours"   />
            <span className="mt-3 font-display text-4xl font-black text-gold/60 sm:mt-4">:</span>
            <Digit n={time.minutes} label="Minutes" />
            <span className="mt-3 font-display text-4xl font-black text-gold/60 sm:mt-4">:</span>
            <Digit n={time.seconds} label="Seconds" />
          </div>
          <div className="mt-8">
            <Button href="#plans" size="lg">Subscribe Now →</Button>
          </div>
        </div>
      </section>

      {/* ── How It Works ── */}
      <section id="how-it-works" className="bg-ink py-24">
        <div className="mx-auto max-w-[1400px] px-6">
          <div className="mb-14 text-center">
            <p className="mb-3 text-[11px] uppercase tracking-[0.3em] text-gold">Simple Process</p>
            <h2 className="font-display text-4xl font-black text-ivory">How It Works.</h2>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {STEPS.map((s, i) => (
              <div key={s.title} className="relative border border-white/8 bg-elevated p-8 transition-colors hover:border-gold/30">
                <div className="mb-4 font-display text-6xl font-black text-gold/10">0{i + 1}</div>
                <div className="mb-3 text-3xl">{s.emoji}</div>
                <h3 className="font-display text-xl font-bold text-ivory">{s.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-ivory-dim">{s.body}</p>
                {i < STEPS.length - 1 && (
                  <div className="absolute -right-3 top-1/2 hidden -translate-y-1/2 text-gold/30 md:block">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M5 12h14M13 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Feature cards ── */}
      <section className="border-t border-white/5 bg-surface pb-24 pt-16">
        <div className="mx-auto max-w-[1400px] px-6">
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {FEATURES.map((f) => (
              <div key={f.title} className="flex flex-col items-center gap-4 border border-white/8 bg-elevated p-8 text-center transition-colors hover:border-gold/30">
                <div className="flex h-12 w-12 items-center justify-center border border-gold/30 text-gold">
                  {f.icon}
                </div>
                <h3 className="font-display text-lg font-bold text-ivory">{f.title}</h3>
                <p className="text-xs leading-relaxed text-ivory-dim">{f.sub}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Final CTA ── */}
      <section className="bg-ink py-20 text-center">
        <div className="mx-auto max-w-xl px-6">
          <p className="mb-4 text-[11px] uppercase tracking-[0.3em] text-gold">Ready?</p>
          <h2 className="font-display text-4xl font-black text-ivory">
            Your Subscription.
            <span className="italic text-gold"> Your Arsenal.</span>
          </h2>
          <p className="mx-auto mt-4 text-sm text-ivory-dim">
            Join 2,000+ members already wearing S1CK every day. Skip anytime. Cancel anytime. No excuses needed.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <Button href="#plans" size="lg">Choose Your Plan</Button>
            <Button href="/science" variant="outline" size="lg">Read the Science First</Button>
          </div>
        </div>
      </section>
    </>
  );
}
