"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { PRODUCTS } from "@/lib/products";

export default function SearchPage() {
  const [query, setQuery] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  const results =
    query.trim().length > 0
      ? PRODUCTS.filter((p) => {
          const q = query.toLowerCase();
          return (
            p.name.toLowerCase().includes(q) ||
            p.subtitle.toLowerCase().includes(q) ||
            p.notes.some((n) => n.toLowerCase().includes(q)) ||
            p.description.toLowerCase().includes(q)
          );
        })
      : [];

  return (
    <div className="min-h-screen bg-ink" style={{ paddingTop: "var(--hdr-h, 112px)" }}>
      {/* Search input strip */}
      <div className="border-b border-white/5 bg-surface py-10">
        <div className="mx-auto max-w-[800px] px-6">
          <p className="mb-4 text-[11px] uppercase tracking-[0.3em] text-gold">Search</p>
          <div className="flex items-center gap-4 border-b border-white/20 pb-2">
            <svg
              width="20" height="20" viewBox="0 0 24 24" fill="none"
              stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"
              className="shrink-0 text-ivory/30"
            >
              <circle cx="11" cy="11" r="7" />
              <path d="m21 21-4.35-4.35" />
            </svg>
            <input
              ref={inputRef}
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search fragrances, notes, vibes…"
              className="flex-1 bg-transparent font-display text-2xl font-bold text-ivory placeholder:text-ivory/20 outline-none"
            />
            {query && (
              <button
                onClick={() => setQuery("")}
                className="text-ivory/30 transition-colors hover:text-ivory"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M18 6 6 18M6 6l12 12" strokeLinecap="round" />
                </svg>
              </button>
            )}
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-[1400px] px-6 py-16">
        {/* Default — popular picks */}
        {query.trim() === "" && (
          <>
            <p className="mb-8 text-[11px] uppercase tracking-[0.3em] text-gold">Popular</p>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {PRODUCTS.slice(0, 3).map((p) => (
                <Link
                  key={p.slug}
                  href={`/shop/${p.slug}`}
                  className="group flex items-center gap-4 border border-white/5 bg-elevated p-4 transition-colors hover:border-gold/30"
                >
                  <img src={p.poster} alt={p.name} className="h-16 w-12 shrink-0 object-cover" />
                  <div>
                    <div className="font-display text-lg font-bold text-ivory transition-colors group-hover:text-gold">
                      {p.name}
                    </div>
                    <div className="text-xs italic text-ivory-dim">{p.subtitle}</div>
                    <div className="mt-1 font-display text-base font-black text-gold">${p.price}</div>
                  </div>
                </Link>
              ))}
            </div>

            <p className="mt-12 mb-4 text-[11px] uppercase tracking-[0.3em] text-ivory/30">Try searching</p>
            <div className="flex flex-wrap gap-2">
              {["oud", "silver", "him", "her", "bundle", "vetiver", "amber"].map((tag) => (
                <button
                  key={tag}
                  onClick={() => setQuery(tag)}
                  className="border border-white/10 px-4 py-2 text-[10px] uppercase tracking-[0.2em] text-ivory-dim transition-colors hover:border-gold/40 hover:text-ivory"
                >
                  {tag}
                </button>
              ))}
            </div>
          </>
        )}

        {/* No results */}
        {query.trim() !== "" && results.length === 0 && (
          <div className="py-20 text-center">
            <p className="font-display text-3xl font-bold text-ivory/20">No results for &ldquo;{query}&rdquo;</p>
            <p className="mt-3 text-sm text-ivory-dim">Try &ldquo;silver&rdquo;, &ldquo;oud&rdquo;, or &ldquo;him&rdquo;</p>
            <Link
              href="/shop"
              className="mt-8 inline-block border border-gold/40 px-6 py-3 text-xs uppercase tracking-[0.25em] text-gold transition-colors hover:bg-gold hover:text-ink"
            >
              Browse All Products
            </Link>
          </div>
        )}

        {/* Results */}
        {results.length > 0 && (
          <>
            <p className="mb-8 text-[11px] uppercase tracking-[0.3em] text-ivory/30">
              {results.length} result{results.length !== 1 ? "s" : ""} for &ldquo;{query}&rdquo;
            </p>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {results.map((p) => (
                <Link
                  key={p.slug}
                  href={`/shop/${p.slug}`}
                  className="group flex gap-5 border border-white/5 bg-elevated p-5 transition-colors hover:border-gold/30"
                >
                  <img src={p.poster} alt={p.name} className="h-28 w-20 shrink-0 object-cover" />
                  <div className="flex flex-col">
                    <span className="self-start bg-gold px-2 py-0.5 text-[9px] font-bold uppercase tracking-[0.2em] text-ink">
                      {p.badge}
                    </span>
                    <h3 className="mt-2 font-display text-xl font-bold text-ivory transition-colors group-hover:text-gold">
                      {p.name}
                    </h3>
                    <p className="text-xs italic text-ivory-dim">{p.subtitle}</p>
                    <p className="mt-1 text-[10px] text-ivory/40">{p.notes.slice(0, 3).join(" · ")}</p>
                    <p className="mt-auto pt-3 font-display text-xl font-black text-ivory">${p.price}</p>
                  </div>
                </Link>
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
}
