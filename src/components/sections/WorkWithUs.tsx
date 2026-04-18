"use client";

import { useRef, useState } from "react";
import { Button } from "@/components/ui/Button";

const REF = "/Refrence%20photo%20from%20orignal%20website";

type UGCClip = {
  user: string;
  caption: string;
  likes: string;
  video: string;
  poster: string;
  tag: string;
};

const STATS = [
  { value: "20%", label: "Commission" },
  { value: "$8K", label: "Top monthly" },
  { value: "48hr", label: "Payout" },
  { value: "2K+", label: "Ambassadors" },
];

const BENEFITS = [
  "Real-time dashboard — clicks, sales, earnings all tracked",
  "Custom vanity link + exclusive promo code from day one",
  "Monthly performance bonuses with zero earnings cap",
  "One free bottle every quarter, yours to keep",
  "Early access to unreleased formulas before public drop",
  "Featured on @s1ckshop when you hit milestones",
];

const UGC: UGCClip[] = [
  {
    user: "@marc.s",
    caption: "First day with Liquid Silver. My barista asked me out.",
    likes: "14.2K",
    video: "/video/liquid-silver.mp4",
    poster: `${REF}/Liquid_Silver_Holy_Grail_Edition.webp`,
    tag: "Liquid Silver",
  },
  {
    user: "@jonah",
    caption: "Three weeks in. Wife keeps stealing my bottle.",
    likes: "9.8K",
    video: "/video/enchantress.mp4",
    poster: `${REF}/Enchantress_For_Women.webp`,
    tag: "Enchantress",
  },
  {
    user: "@ethan.k",
    caption: "Tested it at the gym. Got three phone numbers.",
    likes: "22.1K",
    video: "/video/nd-mood.mp4",
    poster: `${REF}/N_D_Mood_Pheromone_Perfume_For_Women.webp`,
    tag: "N.D. Mood",
  },
  {
    user: "@dev",
    caption: "I'm a chemist. The compound ratio is genuinely insane.",
    likes: "31.5K",
    video: "/video/Perfume_bottle_floating_202604182122.mp4",
    poster: `${REF}/Le_Toxiqu_Luxury_Pheromone_Cologne_for_Men.webp`,
    tag: "Le Toxiquè",
  },
  {
    user: "@luca",
    caption: "Wedding cologne. Three bridesmaids asked what I was wearing.",
    likes: "8.4K",
    video: "/video/liquid-silver.mp4",
    poster: `${REF}/Liquid_Silver_Holy_Grail_Edition_2.webp`,
    tag: "Liquid Silver",
  },
  {
    user: "@sam.j",
    caption: "Le Toxiquè is dangerous. You've been warned.",
    likes: "18.7K",
    video: "/video/Perfume_bottle_floating_202604182124.mp4",
    poster: `${REF}/Enchantress_For_Women_attract_Men.webp`,
    tag: "Enchantress",
  },
];

function UGCCard({ clip }: { clip: UGCClip }) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [playing, setPlaying] = useState(false);

  const handleEnter = () => {
    videoRef.current?.play().catch(() => {});
    setPlaying(true);
  };
  const handleLeave = () => {
    const v = videoRef.current;
    if (v) { v.pause(); v.currentTime = 0; }
    setPlaying(false);
  };

  return (
    <figure
      className="group relative aspect-[9/16] cursor-pointer overflow-hidden border border-white/8 transition-all duration-300 hover:border-gold/50 hover:shadow-[0_0_30px_rgba(201,169,97,0.12)]"
      onMouseEnter={handleEnter}
      onMouseLeave={handleLeave}
    >
      {/* Product photo — default state */}
      <img
        src={clip.poster}
        alt={clip.tag}
        className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-500 ${
          playing ? "opacity-0" : "opacity-100"
        }`}
      />

      {/* Video — plays on hover */}
      <video
        ref={videoRef}
        src={clip.video}
        muted
        playsInline
        loop
        className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-500 ${
          playing ? "opacity-100" : "opacity-0"
        }`}
      />

      {/* Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-ink/95" />

      {/* Play icon — idle */}
      <div
        className={`absolute inset-0 flex items-center justify-center transition-opacity duration-300 ${
          playing ? "opacity-0 pointer-events-none" : "opacity-100"
        }`}
      >
        <div className="flex h-11 w-11 items-center justify-center rounded-full border border-white/25 bg-ink/55 backdrop-blur-sm transition-transform duration-200 group-hover:scale-110 group-hover:border-gold/60">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" className="ml-0.5 text-ivory">
            <path d="M8 5v14l11-7z" />
          </svg>
        </div>
      </div>

      {/* Caption overlay */}
      <figcaption className="absolute inset-x-0 bottom-0 p-3">
        <div className="mb-1 flex items-center justify-between">
          <span className="text-[10px] font-semibold uppercase tracking-[0.18em] text-gold">
            {clip.user}
          </span>
          <span className="flex items-center gap-1 text-[10px] text-ivory/55">
            <svg width="9" height="9" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
            </svg>
            {clip.likes}
          </span>
        </div>
        <p className="line-clamp-2 text-[11px] leading-snug text-ivory/85">{clip.caption}</p>
        <span className="mt-2 inline-block border border-gold/35 px-2 py-0.5 text-[9px] uppercase tracking-[0.2em] text-gold/75">
          {clip.tag}
        </span>
      </figcaption>
    </figure>
  );
}

function Stat({ value, label }: { value: string; label: string }) {
  return (
    <div className="border-l-2 border-gold/40 pl-5">
      <div className="font-display text-3xl font-black text-ivory md:text-4xl">{value}</div>
      <div className="mt-1 text-[10px] uppercase tracking-[0.22em] text-ivory-dim">{label}</div>
    </div>
  );
}

export function WorkWithUs() {
  return (
    <section id="affiliate" className="relative bg-ink py-28">
      <div className="noise" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_0%,rgba(201,169,97,0.04),transparent)]" />

      <div className="relative mx-auto max-w-[1400px] px-6">

        {/* ── Section header ── */}
        <div className="mb-20 text-center">
          <p className="mb-4 text-[11px] uppercase tracking-[0.3em] text-gold">Work With Us</p>
          <h2
            className="font-display font-black leading-[0.95] text-ivory"
            style={{ fontSize: "var(--text-section)" }}
          >
            We&apos;re Building
            <span className="italic text-gold"> A Movement.</span>
          </h2>
          <p className="mx-auto mt-5 max-w-lg text-sm leading-relaxed text-ivory-dim">
            Join 2,000+ ambassadors turning their audience into a real income stream —
            while wearing the most-talked-about fragrance they've ever owned.
          </p>
        </div>

        {/* ── Founder + Program split ── */}
        <div className="grid items-stretch gap-8 lg:grid-cols-[1fr_1.15fr]">

          {/* Cinematic founder card */}
          <div className="relative min-h-[280px] overflow-hidden border border-gold/20 sm:min-h-[380px] lg:min-h-[640px]">
            <video
              className="h-full w-full object-cover"
              autoPlay
              muted
              loop
              playsInline
            >
              <source src="/video/Bottle_floating_in_202604182221.mp4" type="video/mp4" />
            </video>

            {/* Cinematic overlays */}
            <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/50 to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-r from-ink/40 to-transparent" />

            {/* Ambient glow */}
            <div
              className="pointer-events-none absolute inset-0 opacity-30"
              style={{ background: "radial-gradient(ellipse 60% 40% at 50% 70%, rgba(201,169,97,0.15), transparent)" }}
            />

            {/* Quote */}
            <div className="absolute inset-x-0 bottom-0 p-4 sm:p-6 md:p-8 lg:p-10">
              <div className="border border-gold/20 bg-ink/80 p-4 backdrop-blur-md sm:p-5 md:p-6">
                <svg width="18" height="18" viewBox="0 0 32 32" fill="currentColor" className="mb-3 text-gold sm:mb-4">
                  <path d="M10 8C6.7 8 4 10.7 4 14c0 2.7 1.7 5 4.2 5.9L6 24h4l2.8-5.6c.9-.6 1.2-1.4 1.2-2.4V8h-4zm14 0c-3.3 0-6 2.7-6 6 0 2.7 1.7 5 4.2 5.9L20 24h4l2.8-5.6c.9-.6 1.2-1.4 1.2-2.4V8h-4z" />
                </svg>
                <p className="font-display text-sm italic leading-snug text-ivory sm:text-base md:text-xl lg:text-2xl">
                  "I built S1CK because I wanted a fragrance that actually worked. If you believe in what we're doing, let's build this together."
                </p>
                <div className="mt-3 flex items-center gap-4 sm:mt-5">
                  <div className="h-px flex-1 bg-gold/20" />
                  <span className="shrink-0 text-[10px] uppercase tracking-[0.25em] text-gold sm:text-[11px] sm:tracking-[0.3em]">
                    Jonny Truelove · Founder
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Program details */}
          <div className="flex flex-col justify-center py-4">
            <p className="text-[11px] uppercase tracking-[0.3em] text-gold">The Ambassador Program</p>
            <h3
              className="mt-4 font-display font-black leading-[0.93] text-ivory"
              style={{ fontSize: "clamp(2rem, 3vw, 3rem)" }}
            >
              Get Paid to
              <br />
              <span className="italic text-gold">Smell This Good.</span>
            </h3>
            <p className="mt-5 max-w-md text-sm leading-relaxed text-ivory-dim">
              No gatekeeping. No follower minimums. Every ambassador gets a real link,
              a real code, and real commissions from day one.
            </p>

            {/* Stats row */}
            <div className="mt-8 grid grid-cols-2 gap-x-6 gap-y-6 sm:grid-cols-4 md:mt-10 md:gap-y-8 lg:grid-cols-2 xl:grid-cols-4">
              {STATS.map((s) => <Stat key={s.label} {...s} />)}
            </div>

            {/* Benefits */}
            <ul className="mt-8 space-y-3 md:mt-10 md:space-y-3.5">
              {BENEFITS.map((b) => (
                <li key={b} className="flex items-start gap-3 text-sm text-ivory">
                  <svg
                    width="16" height="16" viewBox="0 0 24 24" fill="none"
                    stroke="currentColor" strokeWidth="2.5"
                    className="mt-0.5 shrink-0 text-gold"
                  >
                    <path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  {b}
                </li>
              ))}
            </ul>

            {/* CTAs */}
            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap md:mt-10">
              <Button size="lg" className="w-full justify-center sm:w-auto">Apply to Be an Ambassador</Button>
              <Button size="lg" variant="outline" className="w-full justify-center sm:w-auto">See the Program</Button>
            </div>

            <p className="mt-5 text-[10px] uppercase tracking-[0.22em] text-ivory/35">
              No follower minimum · Apply in under 2 minutes
            </p>
          </div>
        </div>

        {/* ── UGC Wall ── */}
        <div className="mt-28">
          <div className="mb-10 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-[11px] uppercase tracking-[0.3em] text-gold">
                Real Customers · Real Reactions
              </p>
              <h3 className="mt-2 font-display text-3xl font-black text-ivory md:text-4xl">
                Tag us{" "}
                <span className="italic text-gold">@s1ckshop</span>
              </h3>
              <p className="mt-2 text-sm text-ivory-dim">
                Hover any clip to watch · Every post is organic — zero paid.
              </p>
            </div>
            <Button href="#" variant="ghost" size="sm" className="shrink-0">
              View All on Instagram →
            </Button>
          </div>

          <div className="grid grid-cols-2 gap-2.5 sm:grid-cols-3 md:grid-cols-6">
            {UGC.map((clip, i) => (
              <UGCCard key={i} clip={clip} />
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
