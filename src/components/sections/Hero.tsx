"use client";

import { useRef, useEffect, useState, useCallback, type CSSProperties } from "react";
import { Button } from "@/components/ui/Button";

const FRAME_COUNT  = 192;
const WRAPPER_VH   = 500; // section stays pinned for this many vh of scroll

function frameSrc(i: number) {
  return `/frames/hero/frame_${String(i + 1).padStart(4, "0")}.jpg`;
}

export function Hero() {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLElement>(null);
  const canvasRef  = useRef<HTMLCanvasElement>(null);
  const framesRef  = useRef<HTMLImageElement[]>([]);
  const rafRef     = useRef(0);

  const [ready, setReady] = useState(false);

  /* ─ Preload all 192 frames ─────────────────────────────────────── */
  useEffect(() => {
    const imgs = Array.from({ length: FRAME_COUNT }, (_, i) => {
      const img = new Image();
      img.src = frameSrc(i);
      return img;
    });
    framesRef.current = imgs;
    if (imgs[0].complete) setReady(true);
    else imgs[0].onload = () => setReady(true);
  }, []);

  /* ─ Sync canvas size to section (cover fill) ───────────────────── */
  useEffect(() => {
    const canvas  = canvasRef.current;
    const section = sectionRef.current;
    if (!canvas || !section) return;
    const ro = new ResizeObserver(() => {
      canvas.width  = section.clientWidth;
      canvas.height = section.clientHeight;
    });
    ro.observe(section);
    canvas.width  = section.clientWidth;
    canvas.height = section.clientHeight;
    return () => ro.disconnect();
  }, []);

  /* ─ Draw one frame (cover-fill) ────────────────────────────────── */
  const drawFrame = useCallback((idx: number) => {
    const canvas = canvasRef.current;
    const ctx    = canvas?.getContext("2d");
    if (!ctx || !canvas) return;
    const img = framesRef.current[Math.max(0, Math.min(FRAME_COUNT - 1, idx))];
    if (img?.complete && img.naturalWidth > 0) {
      const scale = Math.max(canvas.width / img.naturalWidth, canvas.height / img.naturalHeight);
      const drawW = img.naturalWidth  * scale;
      const drawH = img.naturalHeight * scale;
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.drawImage(img, (canvas.width - drawW) / 2, (canvas.height - drawH) / 2, drawW, drawH);
    }
  }, []);

  /* ─ Scroll-driven frame update ──────────────────────────────────── */
  useEffect(() => {
    function update() {
      const wrapper = wrapperRef.current;
      if (!wrapper) return;
      const scrolled   = -wrapper.getBoundingClientRect().top;
      const scrollable = wrapper.offsetHeight - window.innerHeight;
      if (scrollable <= 0) return;
      const p = Math.max(0, Math.min(1, scrolled / scrollable));
      cancelAnimationFrame(rafRef.current);
      rafRef.current = requestAnimationFrame(() =>
        drawFrame(Math.floor(p * (FRAME_COUNT - 1)))
      );
    }

    window.addEventListener("scroll", update, { passive: true });
    update();
    return () => {
      window.removeEventListener("scroll", update);
      cancelAnimationFrame(rafRef.current);
    };
  }, [drawFrame]);

  const reveal = (delay: number): CSSProperties => ({
    animation: `line-reveal 1s cubic-bezier(0.22,1,0.36,1) ${delay}ms both`,
  });
  const rise = (delay: number): CSSProperties => ({
    animation: `rise-in 0.8s cubic-bezier(0.22,1,0.36,1) ${delay}ms both`,
  });

  return (
    <div ref={wrapperRef} style={{ height: `${WRAPPER_VH}vh` }}>
      <section ref={sectionRef} className="sticky top-0 h-screen overflow-hidden bg-ink">

        {/* Full-background canvas */}
        {!ready && (
          <div className="absolute inset-0 z-0 flex items-center justify-center">
            <div className="h-2 w-2 animate-ping rounded-full bg-gold/60" />
          </div>
        )}
        <canvas
          ref={canvasRef}
          className={`absolute inset-0 transition-opacity duration-700 ${
            ready ? "opacity-100" : "opacity-0"
          }`}
        />

        {/* Vignettes — left panel on desktop, full dimmer on mobile */}
        <div className="absolute inset-0 bg-gradient-to-r from-ink/90 via-ink/60 to-ink/30 md:to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-b from-ink/60 via-transparent to-ink/80" />
        <div className="noise" />

        {/* Marquee strip — sits at top-0, revealed when fixed nav auto-hides */}
        <div className="absolute inset-x-0 top-0 z-40 overflow-hidden border-b border-gold/20 bg-ink/70 py-2 backdrop-blur-sm">
          <div className="flex animate-marquee whitespace-nowrap">
            {/* 20 items total (10 per half) — guarantees no gap on any screen width */}
            {Array.from({ length: 20 }, (_, i) => (
              <span
                key={i}
                className="mx-8 text-[10px] uppercase tracking-[0.3em] text-gold"
              >
                {i % 2 === 0 ? "BUY ANY 3 GET 20% OFF" : "BUY ANY 2 GET 15% OFF"}
                <span className="ml-8 text-gold/40">✦</span>
              </span>
            ))}
          </div>
        </div>

        {/* Ghost wordmark */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-x-0 top-1/2 -translate-y-1/2 select-none text-center font-display font-black leading-none tracking-[-0.04em] text-ivory/[0.03]"
          style={{ fontSize: "clamp(8rem, 22vw, 22rem)" }}
        >
          S1CK
        </div>

        {/*
          Content layer.
          pt-[112px] clears the fixed header (37px announcement + 72px nav + 3px buffer).
          Two-column grid: copy on the left, empty right so the
          centred bottle in the background canvas stays visible.
        */}
        <div className="relative z-10 flex h-full flex-col pt-[112px]">
          <div className="mx-auto grid w-full max-w-[1400px] flex-1 grid-cols-1 md:grid-cols-2 items-center px-5 sm:px-8 md:px-14">

            {/* ── LEFT: copy ── */}
            <div className="flex flex-col py-4 md:py-6">

              {/* Badge */}
              <div
                style={rise(0)}
                className="mb-6 inline-flex w-fit items-center gap-2 border border-gold/30 bg-ink/60 px-3 py-1.5 text-[10px] uppercase tracking-[0.25em] text-gold backdrop-blur-sm"
              >
                <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-gold" />
                Rated #1 Pheromones · 6 Years Running
              </div>

              {/* Headline — each line slides up through a clip mask */}
              <h1
                className="font-display font-black leading-[0.92] tracking-[-0.02em] text-ivory"
                style={{ fontSize: "clamp(2.4rem, 5.5vw, 6.5rem)" }}
              >
                <span className="block overflow-hidden pb-1">
                  <span className="block" style={reveal(100)}>Scientifically</span>
                </span>
                <span className="block overflow-hidden pb-1">
                  <span className="block italic text-gold" style={reveal(280)}>Formulated</span>
                </span>
                <span className="block overflow-hidden pb-1">
                  <span className="block" style={reveal(460)}>to Attract.</span>
                </span>
              </h1>

              {/* Body */}
              <p
                className="mt-5 max-w-[380px] text-sm leading-relaxed text-ivory-dim md:text-base"
                style={rise(660)}
              >
                A dose of quiet dominance. Engineered pheromone fragrances trusted
                by 100,000+ customers — backed by a 30-day attraction guarantee.
              </p>

              {/* CTAs */}
              <div className="mt-7 flex flex-wrap items-center gap-3" style={rise(800)}>
                <Button href="#bestsellers" size="lg">Discover Your Scent →</Button>
                <Button href="#discover" variant="ghost" size="lg">Find Your Vibe</Button>
              </div>

              {/* Social proof */}
              <div
                className="mt-6 flex items-center gap-5 text-xs uppercase tracking-[0.2em] text-ivory-dim"
                style={rise(940)}
              >
                <Stars />
                <span>100,000+ Happy Customers</span>
              </div>
            </div>

            {/* ── RIGHT: empty — bottle visible through background ── */}
            <div aria-hidden />
          </div>

          {/* Scroll cue */}
          <div className="flex justify-center pb-6" style={rise(1080)}>
            <div className="flex flex-col items-center gap-2 text-[10px] uppercase tracking-[0.4em] text-ivory-dim">
              <span>Scroll</span>
              <span className="block h-7 w-px bg-gradient-to-b from-gold/50 to-transparent" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

function Stars() {
  return (
    <div className="flex items-center gap-1 text-gold">
      {[...Array(5)].map((_, i) => (
        <svg key={i} width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2l2.9 6.9L22 10l-5.4 4.7L18.2 22 12 18.3 5.8 22l1.6-7.3L2 10l7.1-1.1z" />
        </svg>
      ))}
    </div>
  );
}
