"use client";

import { useEffect, useRef, useState, useCallback } from "react";

type BottleId = "bottle1" | "bottle2" | "bottle3";

const TOTAL_FRAMES = 192;
const STEP = 4; // every 4th → 48 frames
const FRAME_COUNT = Math.floor(TOTAL_FRAMES / STEP);

function src(bottle: BottleId, i: number) {
  const n = i * STEP + 1;
  return `/frames/${bottle}/frame_${String(n).padStart(4, "0")}.jpg`;
}

function preload(bottle: BottleId): Promise<HTMLImageElement[]> {
  return Promise.all(
    Array.from({ length: FRAME_COUNT }, (_, i) =>
      new Promise<HTMLImageElement>((res) => {
        const img = new Image();
        img.src = src(bottle, i);
        img.onload = () => res(img);
        img.onerror = () => res(img);
      })
    )
  );
}

// ─── Pin mode: outer section ref drives animation (for Hero) ─────────────────
interface PinProps {
  bottle: BottleId;
  mode: "pin";
  /** The outer section element — must be taller than 100vh */
  sectionRef: React.RefObject<HTMLElement | null>;
  className?: string;
}

// ─── Card mode: self-contained — observes its own position in viewport ────────
interface CardProps {
  bottle: BottleId;
  mode: "card";
  className?: string;
}

type Props = PinProps | CardProps;

export function BottleSequence(props: Props) {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const framesRef = useRef<HTMLImageElement[]>([]);
  const rafRef = useRef(0);
  const [ready, setReady] = useState(false);

  const draw = useCallback((idx: number) => {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext("2d");
    if (!ctx || !canvas) return;
    const img = framesRef.current[Math.max(0, Math.min(FRAME_COUNT - 1, idx))];
    if (img?.complete && img.naturalWidth > 0) {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
    }
  }, []);

  // Preload frames on mount
  useEffect(() => {
    preload(props.bottle).then((imgs) => {
      framesRef.current = imgs;
      draw(0);
      setReady(true);
    });
  }, [props.bottle, draw]);

  // Pin mode — scroll progress through the tall outer section
  useEffect(() => {
    if (props.mode !== "pin") return;
    const section = props.sectionRef.current;
    if (!section) return;

    function update() {
      const rect = section!.getBoundingClientRect();
      const scrollable = section!.offsetHeight - window.innerHeight;
      const scrolled = Math.max(0, -rect.top);
      const progress = scrollable > 0 ? Math.min(1, scrolled / scrollable) : 0;
      draw(Math.min(FRAME_COUNT - 1, Math.floor(progress * FRAME_COUNT)));
    }

    function onScroll() {
      cancelAnimationFrame(rafRef.current);
      rafRef.current = requestAnimationFrame(update);
    }

    window.addEventListener("scroll", onScroll, { passive: true });
    update();
    return () => {
      window.removeEventListener("scroll", onScroll);
      cancelAnimationFrame(rafRef.current);
    };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [props.mode, props.mode === "pin" ? props.sectionRef : null, draw]);

  // Card mode — self-contained: observe wrapper div's position in viewport
  useEffect(() => {
    if (props.mode !== "card") return;
    const wrapper = wrapperRef.current;
    if (!wrapper) return;

    function update() {
      const rect = wrapper!.getBoundingClientRect();
      // 0 when card bottom enters viewport, 1 when card top reaches viewport top
      const progress = (window.innerHeight - rect.top) / (window.innerHeight + rect.height);
      const clamped = Math.max(0, Math.min(1, progress));
      draw(Math.min(FRAME_COUNT - 1, Math.floor(clamped * FRAME_COUNT)));
    }

    function onScroll() {
      cancelAnimationFrame(rafRef.current);
      rafRef.current = requestAnimationFrame(update);
    }

    window.addEventListener("scroll", onScroll, { passive: true });
    update();
    return () => {
      window.removeEventListener("scroll", onScroll);
      cancelAnimationFrame(rafRef.current);
    };
  }, [props.mode, draw]);

  return (
    <div ref={wrapperRef} className={`relative ${props.className ?? ""}`}>
      {!ready && (
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="h-2 w-2 animate-ping rounded-full bg-gold/60" />
        </div>
      )}
      <canvas
        ref={canvasRef}
        width={960}
        height={540}
        className={`h-full w-full object-contain transition-opacity duration-700 ${
          ready ? "opacity-100" : "opacity-0"
        }`}
      />
    </div>
  );
}
