"use client";

import { useRef, useEffect, useState, useCallback } from "react";
import { Button } from "@/components/ui/Button";

type BottleId = "bottle1" | "bottle2" | "bottle3";

const STEP        = 2;
const FRAME_COUNT = 96;          // 192 total / STEP
const WRAPPER_VH  = 400;         // 100vh sticky + 3 acts × 100vh of scroll each

function frameSrc(bottle: BottleId, i: number) {
  const n = i * STEP + 1;
  return `/frames/${bottle}/frame_${String(n).padStart(4, "0")}.jpg`;
}

const ACTS = [
  {
    bottle: "bottle1" as BottleId,
    name: "Liquid Silver",
    subtitle: "Holy Grail Edition",
    desc: "The scent that started the obsession. Worn by 100,000+ who refuse to go unnoticed.",
    price: "$180",
    badge: "Bestseller",
  },
  {
    bottle: "bottle2" as BottleId,
    name: "Enchantress",
    subtitle: "Pheromone Eau De Parfum",
    desc: "For the woman who commands every room without saying a word.",
    price: "$210",
    badge: "His & Hers",
  },
  {
    bottle: "bottle3" as BottleId,
    name: "N.D. Mood",
    subtitle: "Eau De Parfum",
    desc: "Quiet dominance. The scent of certainty.",
    price: "$195",
    badge: "Top Rated",
  },
] as const;

// Particles distributed along all four edges of the canvas frame
const PARTICLES = [
  // Top edge
  { x: "12%",  y: "-6px",   size: 3,   opacity: 0.7, blur: 0.5, duration: 3.8, delay: 0    },
  { x: "31%",  y: "-4px",   size: 2,   opacity: 0.5, blur: 0.5, duration: 4.5, delay: 0.6  },
  { x: "53%",  y: "-7px",   size: 4,   opacity: 0.6, blur: 1,   duration: 3.2, delay: 1.3  },
  { x: "74%",  y: "-5px",   size: 2.5, opacity: 0.55,blur: 0.5, duration: 5.1, delay: 0.9  },
  { x: "89%",  y: "-4px",   size: 3,   opacity: 0.45,blur: 1,   duration: 4.0, delay: 1.8  },
  // Bottom edge
  { x: "8%",   y: "calc(100% + 4px)",  size: 2.5, opacity: 0.5, blur: 0.5, duration: 4.2, delay: 0.4  },
  { x: "28%",  y: "calc(100% + 6px)",  size: 3,   opacity: 0.65,blur: 1,   duration: 3.6, delay: 1.1  },
  { x: "55%",  y: "calc(100% + 5px)",  size: 2,   opacity: 0.5, blur: 0.5, duration: 4.8, delay: 0.2  },
  { x: "78%",  y: "calc(100% + 4px)",  size: 3.5, opacity: 0.6, blur: 1,   duration: 3.9, delay: 1.5  },
  { x: "93%",  y: "calc(100% + 5px)",  size: 2,   opacity: 0.4, blur: 0.5, duration: 5.3, delay: 0.7  },
  // Left edge
  { x: "-5px", y: "18%",   size: 2.5, opacity: 0.55,blur: 0.5, duration: 4.4, delay: 0.3  },
  { x: "-6px", y: "42%",   size: 3,   opacity: 0.6, blur: 1,   duration: 3.7, delay: 1.2  },
  { x: "-4px", y: "67%",   size: 2,   opacity: 0.45,blur: 0.5, duration: 4.9, delay: 0.8  },
  { x: "-6px", y: "85%",   size: 3.5, opacity: 0.5, blur: 1,   duration: 3.4, delay: 1.6  },
  // Right edge
  { x: "calc(100% + 4px)", y: "22%",  size: 3,   opacity: 0.6, blur: 1,   duration: 4.1, delay: 0.5  },
  { x: "calc(100% + 5px)", y: "48%",  size: 2,   opacity: 0.5, blur: 0.5, duration: 5.0, delay: 1.0  },
  { x: "calc(100% + 4px)", y: "73%",  size: 3.5, opacity: 0.55,blur: 1,   duration: 3.5, delay: 1.4  },
];

export function BottleShowcase() {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const canvasRef  = useRef<HTMLCanvasElement>(null);
  const framesMap  = useRef<Map<BottleId, HTMLImageElement[]>>(new Map());
  const rafRef     = useRef(0);

  const [ready,    setReady]    = useState(false);
  const [actIndex, setActIndex] = useState(0);
  const [localPct, setLocalPct] = useState(0);

  /* ─ Preload all 3 × 96 frames ─────────────────────────────────── */
  useEffect(() => {
    let firsts = 0;
    (["bottle1", "bottle2", "bottle3"] as BottleId[]).forEach((b) => {
      const imgs = Array.from({ length: FRAME_COUNT }, (_, i) => {
        const img = new Image();
        img.src = frameSrc(b, i);
        return img;
      });
      framesMap.current.set(b, imgs);
      const onLoad = () => { if (++firsts >= 3) setReady(true); };
      if (imgs[0].complete) onLoad(); else imgs[0].onload = onLoad;
    });
  }, []);

  /* ─ Draw one frame ─────────────────────────────────────────────── */
  const drawFrame = useCallback((bottle: BottleId, idx: number) => {
    const canvas = canvasRef.current;
    const ctx    = canvas?.getContext("2d");
    if (!ctx || !canvas) return;
    const imgs = framesMap.current.get(bottle);
    if (!imgs) return;
    const img = imgs[Math.max(0, Math.min(FRAME_COUNT - 1, idx))];
    if (img?.complete && img.naturalWidth > 0) {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
    }
  }, []);

  /* ─ Scroll-driven animation ─────────────────────────────────────── */
  useEffect(() => {
    function update() {
      const wrapper = wrapperRef.current;
      if (!wrapper) return;
      const scrolled   = -wrapper.getBoundingClientRect().top;
      const scrollable = wrapper.offsetHeight - window.innerHeight;
      if (scrollable <= 0) return;

      const p         = Math.max(0, Math.min(1, scrolled / scrollable));
      const totalActP = p * ACTS.length;
      const act       = Math.min(ACTS.length - 1, Math.floor(totalActP));
      const localP    = Math.min(1, totalActP - act);

      cancelAnimationFrame(rafRef.current);
      rafRef.current = requestAnimationFrame(() => {
        drawFrame(ACTS[act].bottle, Math.floor(localP * FRAME_COUNT));
        setActIndex(act);
        setLocalPct(localP);
      });
    }

    window.addEventListener("scroll", update, { passive: true });
    update();
    return () => {
      window.removeEventListener("scroll", update);
      cancelAnimationFrame(rafRef.current);
    };
  }, [drawFrame]);

  /* ─ Dot click — scroll to that act's start position ────────────── */
  const goToAct = useCallback((i: number) => {
    const wrapper = wrapperRef.current;
    if (!wrapper) return;
    const scrollable = wrapper.offsetHeight - window.innerHeight;
    const targetY    = wrapper.offsetTop + (i / ACTS.length) * scrollable;
    window.scrollTo({ top: targetY, behavior: "smooth" });
  }, []);

  const act        = ACTS[actIndex];
  const overallPct = (actIndex + localPct) / ACTS.length;

  return (
    <div ref={wrapperRef} style={{ height: `${WRAPPER_VH}vh` }}>
      <section className="sticky top-0 h-screen overflow-hidden bg-ink">

        {/* Ambient bg */}
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_70%_70%_at_65%_50%,rgba(201,169,97,0.05),transparent)]" />
        <div className="noise" />

        <div className="relative z-10 mx-auto flex h-full w-full max-w-[1400px] flex-col-reverse items-center gap-4 px-5 py-4 sm:px-6 md:flex-row md:gap-16 md:py-0 lg:gap-24">

          {/* ── Left: copy ── */}
          <div className="w-full flex-shrink-0 md:w-[300px] lg:w-[340px]">
            <p className="mb-3 text-[11px] uppercase tracking-[0.3em] text-gold md:mb-5">
              {actIndex + 1} / {ACTS.length} · The Collection
            </p>

            <div key={actIndex} className="fx-rise">
              <span className="mb-3 inline-block bg-gold px-3 py-1 text-[10px] font-bold uppercase tracking-[0.25em] text-ink">
                {act.badge}
              </span>

              <h2
                className="mt-2 font-display font-black leading-[0.95] text-ivory"
                style={{ fontSize: "clamp(2rem, 4vw, 4.5rem)" }}
              >
                {act.name}
              </h2>

              <p className="mt-1 text-sm italic text-gold md:text-base">{act.subtitle}</p>

              <p className="mt-3 max-w-xs text-sm leading-relaxed text-ivory-dim md:mt-5">
                {act.desc}
              </p>

              <div className="mt-5 flex items-center gap-4 md:mt-8">
                <span className="font-display text-4xl font-black text-ivory md:text-5xl">
                  {act.price}
                </span>
                <Button size="md">Add to Cart</Button>
              </div>
            </div>

            {/* ── Dot navigation ── */}
            <div className="mt-6 flex items-center gap-4 md:mt-14">
              {ACTS.map((a, i) => (
                <button
                  key={i}
                  onClick={() => goToAct(i)}
                  title={a.name}
                  className={`h-[3px] cursor-pointer rounded-full transition-all duration-500 hover:opacity-80 ${
                    i < actIndex
                      ? "w-10 bg-gold/50"
                      : i === actIndex
                      ? "w-10 bg-gold"
                      : "w-4 bg-ivory/20"
                  }`}
                />
              ))}
            </div>

            <div className="mt-2 flex items-center gap-4">
              {ACTS.map((a, i) => (
                <button
                  key={i}
                  onClick={() => goToAct(i)}
                  className={`text-[9px] uppercase tracking-[0.2em] transition-colors duration-300 ${
                    i === actIndex ? "text-gold" : "text-ivory/30 hover:text-ivory/60"
                  }`}
                >
                  {a.name}
                </button>
              ))}
            </div>
          </div>

          {/* ── Right: canvas ── */}
          <div className="relative flex min-h-0 w-full flex-1 items-center justify-center">
            {/* Ambient glow */}
            <div
              aria-hidden
              className="pointer-events-none absolute h-[200px] w-[200px] rounded-full blur-[80px] md:h-[500px] md:w-[500px] md:blur-[100px]"
              style={{ background: "rgba(201,169,97,0.07)" }}
            />

            {/* Bordered frame wrapper */}
            <div className="relative w-full max-w-[640px] max-h-[42vh] md:max-h-none">
              {/* Main border */}
              <div className="absolute inset-0 border border-gold/30 pointer-events-none z-20" />

              {/* Corner accents */}
              <span className="absolute -top-px -left-px z-20 block h-5 w-5 border-t-2 border-l-2 border-gold" />
              <span className="absolute -top-px -right-px z-20 block h-5 w-5 border-t-2 border-r-2 border-gold" />
              <span className="absolute -bottom-px -left-px z-20 block h-5 w-5 border-b-2 border-l-2 border-gold" />
              <span className="absolute -bottom-px -right-px z-20 block h-5 w-5 border-b-2 border-r-2 border-gold" />

              {/* Floating edge particles */}
              {PARTICLES.map((p, i) => (
                <span
                  key={i}
                  aria-hidden
                  className="pointer-events-none absolute z-30 rounded-full bg-gold"
                  style={{
                    width:  p.size,
                    height: p.size,
                    left:   p.x,
                    top:    p.y,
                    opacity: p.opacity,
                    filter: `blur(${p.blur}px)`,
                    animation: `float ${p.duration}s ease-in-out ${p.delay}s infinite`,
                  }}
                />
              ))}

              {!ready && (
                <div className="absolute inset-0 z-10 flex items-center justify-center">
                  <div className="h-2 w-2 animate-ping rounded-full bg-gold/60" />
                </div>
              )}

              <canvas
                ref={canvasRef}
                width={960}
                height={540}
                className={`relative z-10 w-full object-contain transition-opacity duration-700 ${
                  ready ? "opacity-100" : "opacity-0"
                }`}
              />
            </div>
          </div>
        </div>

        {/* ── Overall progress bar ── */}
        <div className="absolute inset-x-0 bottom-0 h-[2px] bg-ivory/10">
          <div
            className="h-full bg-gold"
            style={{ width: `${overallPct * 100}%`, transition: "width 75ms linear" }}
          />
        </div>

        {/* ── Scroll hint ── */}
        <p className="absolute bottom-5 right-8 text-[10px] uppercase tracking-[0.35em] text-ivory/30">
          Scroll to explore · ↑↓ to reverse
        </p>
      </section>
    </div>
  );
}
