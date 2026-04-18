"use client";

import { useState, useRef } from "react";
import Link from "next/link";
import { PRODUCTS, type Product, type ProductGender } from "@/lib/products";
import { Button } from "@/components/ui/Button";

const FILTERS: { label: string; value: ProductGender | "all" }[] = [
  { label: "All",     value: "all"    },
  { label: "For Him", value: "him"    },
  { label: "For Her", value: "her"    },
  { label: "Both",    value: "both"   },
  { label: "Bundles", value: "bundle" },
];

const toneGlow: Record<string, string> = {
  silver:  "rgba(245,241,232,0.08)",
  obsidian:"rgba(201,169,97,0.10)",
  crimson: "rgba(122,14,14,0.18)",
  noir:    "rgba(30,10,30,0.5)",
  bundle:  "rgba(201,169,97,0.14)",
};

function ProductCard({ p }: { p: Product }) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [hovering, setHovering] = useState(false);

  return (
    <article
      className="group relative flex flex-col border border-white/8 bg-elevated transition-all duration-300 hover:border-gold/40"
      onMouseEnter={() => { videoRef.current?.play().catch(() => {}); setHovering(true); }}
      onMouseLeave={() => { const v = videoRef.current; if (v) { v.pause(); v.currentTime = 0; } setHovering(false); }}
    >
      {p.badge && (
        <span className="absolute left-0 top-5 z-20 bg-gold px-4 py-1 text-[10px] font-bold uppercase tracking-[0.25em] text-ink">
          {p.badge}
        </span>
      )}

      {/* Media */}
      <div className="relative aspect-[3/4] overflow-hidden">
        <div
          className="absolute inset-0 opacity-40"
          style={{ background: `radial-gradient(ellipse 80% 60% at 50% 30%, ${toneGlow[p.tone]}, transparent)` }}
        />
        <img
          src={p.poster}
          alt={p.name}
          className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-500 ${hovering ? "opacity-0" : "opacity-100"}`}
        />
        <video
          ref={videoRef}
          src={p.video}
          muted playsInline loop
          className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-500 ${hovering ? "opacity-100" : "opacity-0"}`}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-elevated via-transparent to-transparent" />

        {/* Quick view */}
        <div className={`absolute inset-x-4 bottom-4 transition-all duration-300 ${hovering ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2"}`}>
          <Link
            href={`/shop/${p.slug}`}
            className="flex w-full items-center justify-center border border-gold/60 bg-ink/80 py-2.5 text-[10px] uppercase tracking-[0.25em] text-gold backdrop-blur-sm transition-colors hover:bg-gold hover:text-ink"
          >
            View Product
          </Link>
        </div>
      </div>

      {/* Info */}
      <div className="flex flex-1 flex-col p-5">
        <div className="flex items-start justify-between gap-2">
          <div>
            <h3 className="font-display text-xl font-bold text-ivory">{p.name}</h3>
            <p className="mt-0.5 text-xs italic text-ivory-dim">{p.subtitle}</p>
          </div>
          <div className="shrink-0 text-right">
            <div className="font-display text-xl font-black text-ivory">${p.price}</div>
            {p.compareAt && (
              <div className="text-xs text-ivory/30 line-through">${p.compareAt}</div>
            )}
          </div>
        </div>

        <div className="mt-3 flex items-center gap-2">
          <div className="flex items-center gap-0.5 text-gold">
            {[...Array(5)].map((_, i) => (
              <svg key={i} width="10" height="10" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2l2.9 6.9L22 10l-5.4 4.7L18.2 22 12 18.3 5.8 22l1.6-7.3L2 10l7.1-1.1z" />
              </svg>
            ))}
          </div>
          <span className="text-[10px] text-ivory-dim">{p.rating} · {p.reviews.toLocaleString()} reviews</span>
        </div>

        <p className="mt-3 line-clamp-2 text-[11px] leading-relaxed text-ivory/50">
          {p.notes.join(" · ")}
        </p>

        <div className="mt-5 mt-auto pt-3">
          <Button href={`/shop/${p.slug}`} size="sm" className="w-full justify-center">
            Add to Cart
          </Button>
        </div>
      </div>
    </article>
  );
}

export default function ShopPage() {
  const [filter, setFilter] = useState<ProductGender | "all">("all");

  const visible = filter === "all"
    ? PRODUCTS
    : PRODUCTS.filter((p) => p.gender === filter);

  return (
    <>
      {/* Page hero — padding tracks the real header height */}
      <div
        className="relative overflow-hidden bg-ink"
        style={{ paddingTop: "var(--hdr-h, 112px)" }}
      >
        <div className="noise" />
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_70%_60%_at_50%_100%,rgba(201,169,97,0.07),transparent)]" />
        <div className="relative mx-auto max-w-[1400px] px-5 pb-12 pt-12 text-center sm:px-6 sm:pb-16 sm:pt-16">
          <p className="mb-4 text-[11px] uppercase tracking-[0.3em] text-gold">The Flagship Collection</p>
          <h1
            className="font-display font-black leading-[0.93] text-ivory"
            style={{ fontSize: "var(--text-display)" }}
          >
            Formulated to
            <span className="italic text-gold"> Attract.</span>
          </h1>
          <p className="mx-auto mt-5 max-w-md text-sm leading-relaxed text-ivory-dim">
            Every S1CK formula is third-party tested, pheromone-verified, and engineered around a single outcome — being noticed.
          </p>
        </div>
        <div className="gold-rule" />
      </div>

      {/* Filters — top tracks --hdr-h so it sits flush under the auto-hiding header */}
      <div
        className="sticky z-30 border-b border-white/5 bg-ink/95 backdrop-blur-xl"
        style={{ top: "var(--hdr-h, 112px)", transition: "top 300ms ease-in-out" }}
      >
        <div className="mx-auto flex max-w-[1400px] items-center gap-1 overflow-x-auto px-5 py-3 sm:gap-2 sm:px-6">
          {FILTERS.map((f) => (
            <button
              key={f.value}
              onClick={() => setFilter(f.value)}
              className={`shrink-0 border px-4 py-2 text-[10px] uppercase tracking-[0.22em] transition-all duration-200 sm:px-5 ${
                filter === f.value
                  ? "border-gold bg-gold text-ink"
                  : "border-white/10 text-ivory-dim hover:border-gold/40 hover:text-ivory"
              }`}
            >
              {f.label}
            </button>
          ))}
          <span className="ml-auto shrink-0 text-[10px] uppercase tracking-[0.2em] text-ivory/25">
            {visible.length} product{visible.length !== 1 ? "s" : ""}
          </span>
        </div>
      </div>

      {/* Product grid */}
      <section className="bg-ink py-10 sm:py-16">
        <div className="mx-auto max-w-[1400px] px-5 sm:px-6">
          {visible.length === 0 ? (
            <div className="py-32 text-center text-ivory-dim">No products match this filter.</div>
          ) : (
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {visible.map((p) => <ProductCard key={p.slug} p={p} />)}
            </div>
          )}

          {/* Bottom trust strip */}
          <div className="mt-20 grid gap-6 border-t border-white/5 pt-16 text-center sm:grid-cols-3">
            {[
              { icon: "🔬", title: "Third-Party Tested", sub: "Every batch verified for pheromone concentration" },
              { icon: "🛡️", title: "30-Day Guarantee", sub: "Full refund if you don't attract more attention" },
              { icon: "🚀", title: "Free Shipping", sub: "On all subscriptions and orders over $150" },
            ].map((t) => (
              <div key={t.title} className="flex flex-col items-center gap-2">
                <span className="text-3xl">{t.icon}</span>
                <div className="text-sm font-semibold uppercase tracking-[0.15em] text-ivory">{t.title}</div>
                <div className="text-xs text-ivory-dim">{t.sub}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
