"use client";

import Link from "next/link";
import { useCart } from "@/lib/cart";
import { Button } from "@/components/ui/Button";

export default function CartPage() {
  const { items, remove, update, subtotal } = useCart();
  const shipping = subtotal > 0 && subtotal < 150 ? 8 : 0;
  const total = subtotal + shipping;

  return (
    <div className="min-h-screen bg-ink" style={{ paddingTop: "var(--hdr-h, 112px)" }}>
      {/* Page header */}
      <div className="border-b border-white/5 bg-surface">
        <div className="mx-auto max-w-[1400px] px-6 py-10">
          <p className="mb-2 text-[11px] uppercase tracking-[0.3em] text-gold">Your Order</p>
          <h1 className="font-display text-4xl font-black text-ivory">
            Cart
            {items.length > 0 && (
              <span className="ml-3 font-display text-2xl text-ivory/30">({items.length})</span>
            )}
          </h1>
        </div>
      </div>

      <div className="mx-auto max-w-[1400px] px-6 py-12">
        {items.length === 0 ? (
          /* Empty state */
          <div className="py-32 text-center">
            <svg
              width="52" height="52" viewBox="0 0 24 24" fill="none"
              stroke="currentColor" strokeWidth="1" strokeLinecap="round"
              className="mx-auto mb-6 text-ivory/15"
            >
              <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" />
              <line x1="3" y1="6" x2="21" y2="6" />
              <path d="M16 10a4 4 0 0 1-8 0" />
            </svg>
            <p className="font-display text-2xl font-bold text-ivory/20">Your cart is empty</p>
            <p className="mt-2 text-sm text-ivory-dim">Add a formula and start the experiment.</p>
            <Button href="/shop" size="lg" className="mt-8">Browse the Collection</Button>
          </div>
        ) : (
          <div className="grid gap-10 lg:grid-cols-[1fr_380px]">

            {/* Line items */}
            <div className="space-y-4">
              {items.map(({ product: p, qty }) => (
                <div key={p.slug} className="flex gap-5 border border-white/5 bg-elevated p-5">
                  <Link href={`/shop/${p.slug}`} className="shrink-0">
                    <img src={p.poster} alt={p.name} className="h-28 w-20 object-cover" />
                  </Link>
                  <div className="flex flex-1 flex-col">
                    <div className="flex items-start justify-between gap-3">
                      <div>
                        <Link
                          href={`/shop/${p.slug}`}
                          className="font-display text-lg font-bold text-ivory transition-colors hover:text-gold"
                        >
                          {p.name}
                        </Link>
                        <p className="text-xs italic text-ivory-dim">{p.subtitle}</p>
                        <p className="mt-1 text-[10px] uppercase tracking-[0.15em] text-gold/60">{p.badge}</p>
                      </div>
                      <button
                        onClick={() => remove(p.slug)}
                        aria-label="Remove item"
                        className="text-ivory/20 transition-colors hover:text-red-400"
                      >
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <path d="M18 6 6 18M6 6l12 12" strokeLinecap="round" />
                        </svg>
                      </button>
                    </div>

                    <div className="mt-auto flex items-center justify-between pt-4">
                      {/* Quantity controls */}
                      <div className="flex items-center border border-white/10">
                        <button
                          onClick={() => update(p.slug, qty - 1)}
                          className="flex h-8 w-8 items-center justify-center text-ivory/50 transition-colors hover:text-ivory"
                        >
                          −
                        </button>
                        <span className="w-8 text-center text-sm text-ivory">{qty}</span>
                        <button
                          onClick={() => update(p.slug, qty + 1)}
                          className="flex h-8 w-8 items-center justify-center text-ivory/50 transition-colors hover:text-ivory"
                        >
                          +
                        </button>
                      </div>
                      <div className="text-right">
                        <div className="font-display text-xl font-black text-ivory">${p.price * qty}</div>
                        {qty > 1 && <div className="text-[10px] text-ivory/30">${p.price} each</div>}
                      </div>
                    </div>
                  </div>
                </div>
              ))}

              <Link
                href="/shop"
                className="inline-flex items-center gap-2 pt-2 text-xs uppercase tracking-[0.2em] text-ivory/30 transition-colors hover:text-ivory"
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="m15 18-6-6 6-6" strokeLinecap="round" />
                </svg>
                Continue Shopping
              </Link>
            </div>

            {/* Order summary */}
            <div className="h-fit border border-white/8 bg-elevated p-6">
              <h2 className="mb-6 font-display text-xl font-bold text-ivory">Order Summary</h2>

              <div className="space-y-3 text-sm">
                <div className="flex justify-between text-ivory-dim">
                  <span>Subtotal</span>
                  <span className="text-ivory">${subtotal}</span>
                </div>
                <div className="flex justify-between text-ivory-dim">
                  <span>Shipping</span>
                  <span className={shipping === 0 ? "text-green-400" : "text-ivory"}>
                    {shipping === 0 ? "Free" : `$${shipping}`}
                  </span>
                </div>
                {shipping > 0 && (
                  <p className="text-[10px] text-ivory/30">
                    Add ${150 - subtotal} more for free shipping
                  </p>
                )}
              </div>

              <div className="my-5 border-t border-white/8" />

              <div className="flex items-baseline justify-between">
                <span className="text-sm uppercase tracking-[0.15em] text-ivory-dim">Total</span>
                <span className="font-display text-3xl font-black text-ivory">${total}</span>
              </div>

              <Button size="lg" className="mt-6 w-full justify-center">
                Checkout →
              </Button>
              <Button href="/subscribe" size="sm" variant="outline" className="mt-3 w-full justify-center">
                Subscribe &amp; Save 25%
              </Button>

              <div className="mt-6 space-y-2">
                {[
                  "Free shipping on orders $150+",
                  "30-day attraction guarantee",
                  "Secure checkout",
                ].map((t) => (
                  <div key={t} className="flex items-center gap-2">
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="shrink-0 text-gold">
                      <path d="M5 13l4 4L19 7" strokeLinecap="round" />
                    </svg>
                    <span className="text-[10px] text-ivory/40">{t}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
