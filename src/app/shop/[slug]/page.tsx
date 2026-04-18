import { notFound } from "next/navigation";
import Link from "next/link";
import { PRODUCTS, getProduct, getRelated } from "@/lib/products";
import { Button } from "@/components/ui/Button";

export function generateStaticParams() {
  return PRODUCTS.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const p = getProduct(slug);
  if (!p) return {};
  return {
    title: `${p.name} — S1CK`,
    description: p.tagline,
  };
}

const toneAccent: Record<string, string> = {
  silver:  "#F5F1E8",
  obsidian:"#C9A961",
  crimson: "#dc2626",
  noir:    "#C9A961",
  bundle:  "#C9A961",
};

const toneGradient: Record<string, string> = {
  silver:  "from-ivory/10 via-ink to-ink",
  obsidian:"from-gold/10 via-ink to-ink",
  crimson: "from-crimson/20 via-ink to-ink",
  noir:    "from-[#1a0a1a] via-ink to-ink",
  bundle:  "from-gold/15 via-ink to-ink",
};

export default async function ProductPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const p = getProduct(slug);
  if (!p) notFound();

  const related = getRelated(slug);
  const accent = toneAccent[p.tone];
  const savings = p.compareAt - p.price;

  return (
    <>
      {/* ── Hero ── */}
      <section
        className={`relative min-h-screen overflow-hidden bg-gradient-to-b ${toneGradient[p.tone]}`}
        style={{ paddingTop: "var(--hdr-h, 112px)" }}
      >
        <div className="noise" />
        <div
          className="pointer-events-none absolute inset-0"
          style={{ background: `radial-gradient(ellipse 50% 60% at 60% 40%, ${accent}15, transparent 65%)` }}
        />

        <div className="relative mx-auto grid max-w-[1400px] items-center gap-12 px-6 py-16 lg:grid-cols-2 lg:py-24">

          {/* Left — media */}
          <div className="relative">
            <div className="relative aspect-[3/4] overflow-hidden border border-white/10">
              <video
                src={p.video}
                poster={p.poster}
                autoPlay muted loop playsInline
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/60 to-transparent" />
            </div>
            {p.image2 && (
              <div className="absolute -bottom-4 -right-4 hidden h-32 w-24 overflow-hidden border border-white/15 lg:block">
                <img src={p.image2} alt={`${p.name} alternate view`} className="h-full w-full object-cover" />
              </div>
            )}
          </div>

          {/* Right — info */}
          <div className="flex flex-col">
            <div className="flex items-center gap-3">
              <span
                className="inline-block px-3 py-1 text-[10px] font-bold uppercase tracking-[0.25em]"
                style={{ background: accent, color: "#000" }}
              >
                {p.badge}
              </span>
              {p.new && (
                <span className="border border-gold/40 px-3 py-1 text-[10px] uppercase tracking-[0.25em] text-gold">
                  New Drop
                </span>
              )}
            </div>

            <h1
              className="mt-4 font-display font-black leading-[0.93] text-ivory"
              style={{ fontSize: "clamp(2.8rem, 5vw, 4.5rem)" }}
            >
              {p.name}
            </h1>
            <p className="mt-2 text-base italic" style={{ color: accent }}>{p.subtitle}</p>

            <div className="mt-4 flex items-center gap-3">
              <div className="flex items-center gap-1 text-gold">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} width="13" height="13" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2l2.9 6.9L22 10l-5.4 4.7L18.2 22 12 18.3 5.8 22l1.6-7.3L2 10l7.1-1.1z" />
                  </svg>
                ))}
              </div>
              <span className="text-xs text-ivory-dim">{p.rating} · {p.reviews.toLocaleString()} verified reviews</span>
            </div>

            <p className="mt-6 leading-relaxed text-ivory-dim">{p.description}</p>

            {/* Scent notes */}
            {p.topNotes.length > 0 && (
              <div className="mt-8 space-y-3">
                <p className="text-[10px] uppercase tracking-[0.3em] text-gold">Scent Profile</p>
                {[
                  { tier: "Top", notes: p.topNotes },
                  { tier: "Heart", notes: p.heartNotes },
                  { tier: "Base", notes: p.baseNotes },
                ].map(({ tier, notes }) => (
                  <div key={tier} className="flex items-start gap-4">
                    <span className="w-10 shrink-0 text-[10px] uppercase tracking-[0.2em] text-ivory/35 pt-0.5">{tier}</span>
                    <div className="flex flex-wrap gap-2">
                      {notes.map((n) => (
                        <span key={n} className="border border-white/10 px-2.5 py-1 text-[10px] uppercase tracking-[0.15em] text-ivory-dim">
                          {n}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* Price + CTA */}
            <div className="mt-8 border-t border-white/8 pt-8">
              <div className="flex items-baseline gap-3">
                <span className="font-display text-5xl font-black text-ivory">${p.price}</span>
                {p.compareAt > p.price && (
                  <>
                    <span className="text-lg text-ivory/30 line-through">${p.compareAt}</span>
                    <span className="text-sm font-semibold text-gold">Save ${savings}</span>
                  </>
                )}
              </div>
              <div className="mt-6 flex flex-wrap gap-3">
                <Button size="lg" className="flex-1">Add to Cart</Button>
                <Button size="lg" variant="outline" href="/#subscribe">Subscribe & Save 25%</Button>
              </div>
              <p className="mt-3 text-[10px] uppercase tracking-[0.2em] text-ivory/30">
                Free shipping · 30-day attraction guarantee
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Benefits ── */}
      <section className="border-t border-white/5 bg-surface py-20">
        <div className="mx-auto max-w-[1400px] px-6">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {p.benefits.map((b) => (
              <div key={b} className="flex items-start gap-3 border border-white/5 bg-elevated p-6">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="mt-0.5 shrink-0 text-gold">
                  <path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <span className="text-sm leading-snug text-ivory">{b}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Testimonials ── */}
      <section className="bg-ink py-20">
        <div className="mx-auto max-w-[1400px] px-6">
          <p className="mb-3 text-[11px] uppercase tracking-[0.3em] text-gold">What they say</p>
          <h2 className="mb-12 font-display text-4xl font-black text-ivory">
            The Reviews Don&apos;t Lie.
          </h2>
          <div className="grid gap-6 md:grid-cols-3">
            {[
              { name: "Marcus R.", title: "Verified Buyer", quote: "I've tested everything. This is the only formula I've re-ordered within two weeks." },
              { name: "Ethan K.", title: "480k followers · Lifestyle", quote: "Three weeks in and the compliments haven't stopped. My wife asks what I'm wearing every single day." },
              { name: "Jordan P.", title: "Skeptic turned believer", quote: "I bought this to prove it was marketing. Re-ordered in nine days. That's all I'll say." },
            ].map((t) => (
              <figure key={t.name} className="border border-gold/20 bg-elevated p-8">
                <div className="mb-4 flex gap-1 text-gold">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} width="13" height="13" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 2l2.9 6.9L22 10l-5.4 4.7L18.2 22 12 18.3 5.8 22l1.6-7.3L2 10l7.1-1.1z" />
                    </svg>
                  ))}
                </div>
                <blockquote className="font-display text-lg italic leading-snug text-ivory">"{t.quote}"</blockquote>
                <figcaption className="mt-5 border-t border-white/5 pt-4">
                  <div className="text-sm font-semibold text-ivory">{t.name}</div>
                  <div className="text-[10px] uppercase tracking-[0.2em] text-ivory-dim">{t.title}</div>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* ── Related products ── */}
      {related.length > 0 && (
        <section className="border-t border-white/5 bg-surface py-20">
          <div className="mx-auto max-w-[1400px] px-6">
            <div className="mb-10 flex items-end justify-between">
              <div>
                <p className="mb-2 text-[11px] uppercase tracking-[0.3em] text-gold">You might also like</p>
                <h2 className="font-display text-3xl font-black text-ivory">Complete the Arsenal.</h2>
              </div>
              <Button href="/shop" variant="ghost" size="sm">View all →</Button>
            </div>
            <div className="grid gap-6 sm:grid-cols-3">
              {related.map((r) => (
                <Link
                  key={r.slug}
                  href={`/shop/${r.slug}`}
                  className="group relative overflow-hidden border border-white/8 transition-colors hover:border-gold/40"
                >
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <img src={r.poster} alt={r.name} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" />
                    <div className="absolute inset-0 bg-gradient-to-t from-ink via-transparent to-transparent" />
                  </div>
                  <div className="p-5">
                    <h3 className="font-display text-xl font-bold text-ivory group-hover:text-gold transition-colors">{r.name}</h3>
                    <p className="mt-1 text-xs italic text-ivory-dim">{r.subtitle}</p>
                    <p className="mt-3 font-display text-2xl font-black text-ivory">${r.price}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
}
