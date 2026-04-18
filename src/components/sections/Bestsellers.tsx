"use client";

import { Button } from "@/components/ui/Button";

const REF = "/Refrence%20photo%20from%20orignal%20website";

type Product = {
  id: string;
  name: string;
  tagline: string;
  badge?: string;
  price: string;
  compareAt?: string;
  rating: number;
  reviews: number;
  tone: "silver" | "obsidian" | "crimson" | "bundle";
  video: string;
  poster: string;
  hero?: boolean;
};

const products: Product[] = [
  {
    id: "arsenal",
    name: "The S1CK Arsenal",
    tagline: "Three flagship scents · The full toolkit.",
    badge: "Best Value",
    price: "$349",
    compareAt: "$520",
    rating: 4.9,
    reviews: 3214,
    tone: "bundle",
    video: "/video/liquid-silver.mp4",
    poster: `${REF}/Liquid_Silver_Premium_Pheromone_Fragrance_Creed_Aventus_99.webp`,
    hero: true,
  },
  {
    id: "silver",
    name: "Liquid Silver",
    tagline: "The Holy Grail of Attraction.",
    badge: "Bestseller",
    price: "$180",
    compareAt: "$220",
    rating: 4.9,
    reviews: 8421,
    tone: "silver",
    video: "/video/liquid-silver.mp4",
    poster: `${REF}/Liquid_Silver_Holy_Grail_Edition.webp`,
  },
  {
    id: "enchantress",
    name: "Enchantress",
    tagline: "His & Hers · Dangerously intimate.",
    badge: "His & Hers",
    price: "$210",
    compareAt: "$260",
    rating: 4.8,
    reviews: 4102,
    tone: "crimson",
    video: "/video/enchantress.mp4",
    poster: `${REF}/Enchantress_For_Women.webp`,
  },
  {
    id: "ndmood",
    name: "N.D. Mood",
    tagline: "Quiet authority in a bottle.",
    badge: "Top Rated",
    price: "$195",
    compareAt: "$240",
    rating: 4.9,
    reviews: 5683,
    tone: "obsidian",
    video: "/video/nd-mood.mp4",
    poster: `${REF}/N_D_Mood_Pheromone_Perfume_For_Women.webp`,
  },
];

const toneStyles: Record<Product["tone"], string> = {
  silver:
    "bg-gradient-to-b from-ivory/15 to-ivory/5 border-ivory/20 shadow-[inset_0_0_60px_rgba(255,255,255,0.06)]",
  obsidian:
    "bg-gradient-to-b from-gold/10 to-ink border-gold/25 shadow-[inset_0_0_60px_rgba(201,169,97,0.08)]",
  crimson:
    "bg-gradient-to-b from-crimson/25 to-ink border-crimson/30 shadow-[inset_0_0_60px_rgba(122,14,14,0.15)]",
  bundle:
    "bg-gradient-to-b from-gold/20 via-gold/5 to-ink border-gold/40 shadow-[inset_0_0_80px_rgba(201,169,97,0.12)]",
};

export function Bestsellers() {
  const hero = products.find((p) => p.hero)!;
  const rest = products.filter((p) => !p.hero);

  return (
    <section id="bestsellers" className="relative bg-ink py-28">
      <div className="mx-auto max-w-[1400px] px-6">
        <div className="mb-16 flex flex-col items-center text-center">
          <p className="mb-4 text-[11px] uppercase tracking-[0.3em] text-gold">
            The Flagship Collection
          </p>
          <h2
            className="font-display font-black leading-[0.95] text-ivory"
            style={{ fontSize: "var(--text-section)" }}
          >
            The Bottles That Built
            <br />
            <span className="italic text-gold">The Reputation.</span>
          </h2>
        </div>

        <ProductCard product={hero} featured />

        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {rest.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>

        <p className="mt-12 text-center text-sm leading-relaxed text-ivory-dim">
          Each formula is third-party tested and engineered around proprietary
          copulin and androstenone compounds.
          <br />
          <span className="text-gold">
            You don't need to smell different. You need to be noticed.
          </span>
        </p>
      </div>
    </section>
  );
}

function ProductCard({
  product,
  featured = false,
}: {
  product: Product;
  featured?: boolean;
}) {
  const p = product;
  return (
    <article
      className={`group relative overflow-hidden border bg-elevated transition-all duration-500 hover:border-gold ${
        toneStyles[p.tone]
      } ${featured ? "md:grid md:grid-cols-[1.2fr_1fr]" : ""}`}
    >
      {p.badge && (
        <span className="absolute left-0 top-6 z-10 bg-gold px-4 py-1.5 text-[10px] font-bold uppercase tracking-[0.25em] text-ink">
          {p.badge}
        </span>
      )}

      {/* Bottle video — autoplay, muted, looped */}
      <div
        className={`relative overflow-hidden ${
          featured ? "min-h-[220px] md:min-h-[460px]" : "h-[220px] md:h-[380px]"
        }`}
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_40%,rgba(201,169,97,0.1),transparent_70%)]" />
        <video
          className="h-full w-full object-cover"
          autoPlay
          muted
          loop
          playsInline
          poster={p.poster}
        >
          <source src={p.video} type="video/mp4" />
        </video>
      </div>

      <div
        className={`p-6 md:p-8 lg:p-10 ${
          featured ? "md:flex md:flex-col md:justify-center" : ""
        }`}
      >
        <h3 className="font-display text-2xl font-bold leading-tight text-ivory md:text-3xl lg:text-4xl">
          {p.name}
        </h3>
        <p className="mt-2 text-sm italic text-ivory-dim">{p.tagline}</p>

        <div className="mt-5 flex items-center gap-3">
          <div className="flex items-center gap-1 text-gold">
            {[...Array(5)].map((_, i) => (
              <svg key={i} width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2l2.9 6.9L22 10l-5.4 4.7L18.2 22 12 18.3 5.8 22l1.6-7.3L2 10l7.1-1.1z" />
              </svg>
            ))}
          </div>
          <span className="text-xs text-ivory-dim">
            {p.rating} · {p.reviews.toLocaleString()} reviews
          </span>
        </div>

        <div className="mt-6 flex items-end gap-3">
          <span className="font-display text-3xl font-black text-ivory md:text-4xl">
            {p.price}
          </span>
          {p.compareAt && (
            <span className="mb-1 text-base text-ivory-dim line-through">
              {p.compareAt}
            </span>
          )}
        </div>

        {featured && (
          <p className="mt-3 text-xs uppercase tracking-[0.2em] text-gold">
            Just $116 per bottle · less than one department-store fragrance.
          </p>
        )}

        <div className="mt-8">
          <Button size="lg" className="w-full">
            Add to Cart
          </Button>
        </div>
      </div>
    </article>
  );
}
