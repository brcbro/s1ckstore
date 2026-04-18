"use client";

import { useState } from "react";
import { Button } from "@/components/ui/Button";

type Vibe = {
  id: string;
  label: string;
  scent: string;
  notes: string;
  product: string;
  bg: string;
  accent: string;
  sticker: string;
  stickerRot: string;
  stickerDelay: string;
};

const vibes: Vibe[] = [
  {
    id: "club",
    label: "The Club",
    scent: "Liquid Silver",
    notes: "Sharp citrus · Black pepper · Amber · Leather",
    product: "Opens loud. Settles into warmth. Follows you home.",
    bg: "from-[#1a0a2a] via-[#2d0a3d] to-ink",
    accent: "#d946ef",
    sticker: "🎧",
    stickerRot: "10deg",
    stickerDelay: "0s",
  },
  {
    id: "date",
    label: "The Date",
    scent: "Le Toxiquè",
    notes: "Bergamot · Rose absolute · Oud · Musk",
    product: "Close-range magic. Worn for the second glance.",
    bg: "from-[#2a0a0a] via-[#3d1414] to-ink",
    accent: "#dc2626",
    sticker: "🌹",
    stickerRot: "-8deg",
    stickerDelay: "0.4s",
  },
  {
    id: "boardroom",
    label: "The Boardroom",
    scent: "Alpha Q",
    notes: "Vetiver · Cedar · Saffron · Dry tobacco",
    product: "Calm authority. Nothing you need to announce.",
    bg: "from-[#0a1a2a] via-[#14273d] to-ink",
    accent: "#C9A961",
    sticker: "💎",
    stickerRot: "14deg",
    stickerDelay: "0.8s",
  },
  {
    id: "weekend",
    label: "The Weekend",
    scent: "Liquid Silver Lite",
    notes: "Grapefruit · Sea salt · Driftwood · White musk",
    product: "Effortless. Golden-hour friendly.",
    bg: "from-[#2a1f0a] via-[#3d2e14] to-ink",
    accent: "#E6C87A",
    sticker: "🌊",
    stickerRot: "-12deg",
    stickerDelay: "1.2s",
  },
  {
    id: "gym",
    label: "The Gym",
    scent: "Alpha Q Kinetic",
    notes: "Mint · Ginger · Iron · Warm skin",
    product: "For the moment right after.",
    bg: "from-[#0a0a0a] via-[#1a1a1a] to-ink",
    accent: "#F5F1E8",
    sticker: "⚡",
    stickerRot: "8deg",
    stickerDelay: "1.6s",
  },
  {
    id: "bedroom",
    label: "The Bedroom",
    scent: "Le Toxiquè Noir",
    notes: "Cashmere · Vanilla · Animalic musk · Smoke",
    product: "Skin scent. Says things words can't.",
    bg: "from-[#1a0a1a] via-[#2a0a2a] to-ink",
    accent: "#C9A961",
    sticker: "🌙",
    stickerRot: "-10deg",
    stickerDelay: "2s",
  },
];

export function VibePicker() {
  const [active, setActive] = useState<Vibe>(vibes[0]);

  return (
    <section id="discover" className="relative overflow-hidden bg-ink py-28">
      <div
        className={`absolute inset-0 bg-gradient-to-br ${active.bg} transition-all duration-1000`}
      />
      <div className="noise" />

      <div className="relative mx-auto max-w-[1400px] px-6">
        <div className="mb-16 text-center">
          <p className="mb-4 text-[11px] uppercase tracking-[0.3em] text-gold">
            The Discovery Ritual
          </p>
          <h2
            className="font-display font-black leading-[0.95] text-ivory"
            style={{ fontSize: "var(--text-section)" }}
          >
            Find Your
            <span className="italic text-gold"> Signature Scent.</span>
          </h2>
          <p className="mt-5 text-sm text-ivory-dim">
            Pick a vibe. We'll match the scent.
          </p>
        </div>

        <div className="grid items-center gap-8 md:gap-12 lg:grid-cols-2">
          {/* Vibe buttons — flex-wrap on mobile, scattered on desktop */}
          <div className="flex flex-wrap justify-center gap-3 md:relative md:block md:min-h-[420px] md:gap-0">
            {vibes.map((v, i) => {
              const isActive = v.id === active.id;
              const positions = [
                "md:top-[8%] md:left-[8%]",
                "md:top-[4%] md:right-[12%]",
                "md:top-[38%] md:left-[32%]",
                "md:bottom-[30%] md:right-[8%]",
                "md:bottom-[8%] md:left-[14%]",
                "md:bottom-[12%] md:right-[28%]",
              ];
              return (
                <button
                  key={v.id}
                  onClick={() => setActive(v)}
                  className={`relative md:absolute ${positions[i]} rounded-full border px-5 py-2.5 font-display text-base italic transition-all duration-500 md:px-6 md:py-3 md:text-lg ${
                    isActive
                      ? "border-gold bg-gold text-ink scale-105 shadow-[0_0_30px_rgba(201,169,97,0.4)] md:scale-110 md:shadow-[0_0_40px_rgba(201,169,97,0.5)]"
                      : "border-ivory/20 bg-ink/60 text-ivory hover:border-gold/60 hover:text-gold backdrop-blur-sm"
                  }`}
                >
                  {v.label}
                  <span
                    className="animate-sticker pointer-events-none absolute -top-3 -right-3 text-sm drop-shadow-[0_1px_4px_rgba(0,0,0,0.6)] md:text-base"
                    style={{
                      "--sticker-rot": v.stickerRot,
                      animationDelay: v.stickerDelay,
                    } as React.CSSProperties}
                  >
                    {v.sticker}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Reveal panel */}
          <div className="relative">
            <div
              key={active.id}
              className="relative overflow-hidden border border-gold/30 bg-ink/80 p-6 backdrop-blur-sm animate-in fade-in duration-700 md:p-10"
            >
              <div
                className="absolute -inset-24 opacity-30 blur-3xl"
                style={{
                  background: `radial-gradient(circle, ${active.accent}55, transparent 65%)`,
                }}
              />
              <div className="relative">
                <p className="text-[11px] uppercase tracking-[0.3em]" style={{ color: active.accent }}>
                  For {active.label}
                </p>
                <h3 className="mt-3 font-display text-3xl font-black text-ivory md:text-5xl">
                  {active.scent}
                </h3>
                <p className="mt-4 text-xs uppercase tracking-[0.25em] text-ivory-dim md:mt-5">
                  {active.notes}
                </p>
                <p className="mt-4 font-display text-base italic leading-snug text-ivory md:mt-6 md:text-xl">
                  "{active.product}"
                </p>

                <div className="mt-5 flex items-center gap-3 text-xs text-ivory-dim md:mt-8">
                  <span className="inline-flex h-2 w-2 rounded-full bg-gold animate-pulse" />
                  Worn by 12,000+ S1CK members
                </div>

                <div className="mt-5 flex flex-wrap gap-3 md:mt-6">
                  <Button size="md">Add to Cart</Button>
                  <Button size="md" variant="outline">Learn More</Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
