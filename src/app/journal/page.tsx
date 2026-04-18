import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "Fragrance Journal — S1CK",
  description: "Deep dives on pheromone science, scent layering, and the art of attraction.",
};

const REF = "/Refrence%20photo%20from%20orignal%20website";

const articles = [
  {
    slug: "how-pheromones-work",
    category: "The Science",
    title: "How Pheromones Actually Work — And Why Most Products Don't",
    excerpt:
      "The chemosensory research is real. The delivery problem is what kills 90% of products on the market. Here's what the studies actually say, and what S1CK does differently.",
    readTime: "8 min read",
    date: "Apr 12, 2026",
    image: `${REF}/Liquid_Silver_Holy_Grail_Edition.webp`,
    featured: true,
  },
  {
    slug: "scent-layering-guide",
    category: "How-To",
    title: "The S1CK Layering Guide: How to Stack Scents for Maximum Effect",
    excerpt:
      "Wearing two S1CK formulas at once isn't chaos — it's strategy. Here's how to combine Liquid Silver with N.D. Mood for an effect neither can create alone.",
    readTime: "5 min read",
    date: "Apr 8, 2026",
    image: `${REF}/N_D_Mood_Pheromone_Perfume_For_Women.webp`,
    featured: false,
  },
  {
    slug: "boardroom-to-bar",
    category: "Lifestyle",
    title: "One Bottle, Three Situations: Using N.D. Mood From Boardroom to Bar",
    excerpt:
      "N.D. Mood was built for authority. But it works everywhere confidence matters. How to apply it for three completely different contexts without re-spraying.",
    readTime: "4 min read",
    date: "Apr 2, 2026",
    image: `${REF}/N_D_Mood_Pheromone_Perfume_For_Women_Front_4.webp`,
    featured: false,
  },
  {
    slug: "enchantress-him-and-her",
    category: "Product Deep Dive",
    title: "Enchantress: Why This Formula Works Differently on Men vs. Women",
    excerpt:
      "The copulin complex in Enchantress reacts differently at different skin pH levels. What that means for male wearers vs. female wearers — and how to maximize both.",
    readTime: "6 min read",
    date: "Mar 28, 2026",
    image: `${REF}/Enchantress_For_Women.webp`,
    featured: false,
  },
  {
    slug: "attraction-guarantee-data",
    category: "Transparency",
    title: "We Analyzed 2,400 Returns. Here's What We Found.",
    excerpt:
      "The 30-day Attraction Guarantee isn't just a marketing claim. We tracked every return request for 18 months and found something surprising about who uses it — and who doesn't.",
    readTime: "10 min read",
    date: "Mar 21, 2026",
    image: `${REF}/Liquid_Silver_Holy_Grail_Edition_2.webp`,
    featured: false,
  },
  {
    slug: "le-toxique-story",
    category: "Product Deep Dive",
    title: "The Le Toxiquè Story: Why Our Darkest Formula Took Three Years to Release",
    excerpt:
      "The animalic musk concentration in Le Toxiquè failed our first 14 formulations. Here's what the final formula gets right — and the research behind the 24-hour retention claim.",
    readTime: "7 min read",
    date: "Mar 14, 2026",
    image: `${REF}/Le_Toxiqu_Luxury_Pheromone_Cologne_for_Men.webp`,
    featured: false,
  },
];

const featured = articles.find((a) => a.featured)!;
const grid = articles.filter((a) => !a.featured);

export default function JournalPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-ink pt-[112px]">
        <div className="noise" />
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_60%_40%_at_50%_100%,rgba(201,169,97,0.06),transparent)]" />
        <div className="relative mx-auto max-w-[1400px] px-6 pb-16 pt-16 text-center">
          <p className="mb-4 text-[11px] uppercase tracking-[0.3em] text-gold">Fragrance Journal</p>
          <h1
            className="font-display font-black leading-[0.93] text-ivory"
            style={{ fontSize: "var(--text-display)" }}
          >
            The S1CK
            <span className="italic text-gold"> Index.</span>
          </h1>
          <p className="mx-auto mt-5 max-w-md text-sm leading-relaxed text-ivory-dim">
            Science, strategy, and stories from inside the world of pheromone fragrance.
          </p>
        </div>
        <div className="gold-rule" />
      </section>

      {/* Featured article */}
      <section className="bg-ink py-16">
        <div className="mx-auto max-w-[1400px] px-6">
          <Link
            href={`/journal/${featured.slug}`}
            className="group grid gap-0 overflow-hidden border border-gold/20 transition-colors hover:border-gold/50 lg:grid-cols-[1.2fr_1fr]"
          >
            <div className="relative aspect-[16/9] overflow-hidden lg:aspect-auto">
              <img
                src={featured.image}
                alt={featured.title}
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-transparent to-ink/50 lg:block hidden" />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/80 to-transparent lg:hidden" />
            </div>
            <div className="flex flex-col justify-center bg-elevated p-10 lg:p-14">
              <div className="flex items-center gap-3">
                <span className="bg-gold px-3 py-1 text-[9px] font-bold uppercase tracking-[0.25em] text-ink">
                  Featured
                </span>
                <span className="text-[10px] uppercase tracking-[0.2em] text-gold">{featured.category}</span>
              </div>
              <h2 className="mt-4 font-display text-3xl font-black leading-tight text-ivory transition-colors group-hover:text-gold md:text-4xl">
                {featured.title}
              </h2>
              <p className="mt-4 text-sm leading-relaxed text-ivory-dim">{featured.excerpt}</p>
              <div className="mt-6 flex items-center gap-4 text-[10px] uppercase tracking-[0.2em] text-ivory/35">
                <span>{featured.date}</span>
                <span>·</span>
                <span>{featured.readTime}</span>
              </div>
              <div className="mt-6">
                <span className="inline-flex items-center gap-2 border border-gold/40 px-5 py-2.5 text-[10px] uppercase tracking-[0.22em] text-gold transition-all group-hover:bg-gold group-hover:text-ink">
                  Read Article →
                </span>
              </div>
            </div>
          </Link>
        </div>
      </section>

      {/* Article grid */}
      <section className="bg-ink pb-24">
        <div className="mx-auto max-w-[1400px] px-6">
          <div className="mb-10 flex items-center justify-between border-t border-white/5 pt-10">
            <p className="text-[11px] uppercase tracking-[0.3em] text-gold">All Articles</p>
            <span className="text-[10px] uppercase tracking-[0.2em] text-ivory/25">{grid.length} pieces</span>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {grid.map((article) => (
              <Link
                key={article.slug}
                href={`/journal/${article.slug}`}
                className="group flex flex-col border border-white/8 bg-elevated transition-colors hover:border-gold/40"
              >
                <div className="relative aspect-[16/10] overflow-hidden">
                  <img
                    src={article.image}
                    alt={article.title}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-elevated/80 to-transparent" />
                  <span className="absolute left-4 top-4 bg-ink/80 px-3 py-1 text-[9px] uppercase tracking-[0.2em] text-gold backdrop-blur-sm">
                    {article.category}
                  </span>
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <h3 className="font-display text-xl font-bold leading-snug text-ivory transition-colors group-hover:text-gold">
                    {article.title}
                  </h3>
                  <p className="mt-3 line-clamp-2 text-xs leading-relaxed text-ivory-dim">{article.excerpt}</p>
                  <div className="mt-4 flex items-center gap-3 text-[10px] uppercase tracking-[0.15em] text-ivory/30">
                    <span>{article.date}</span>
                    <span>·</span>
                    <span>{article.readTime}</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {/* Newsletter signup */}
          <div className="mt-20 border border-gold/25 bg-gradient-to-r from-gold/5 via-gold/10 to-gold/5 p-10 text-center">
            <p className="mb-3 text-[11px] uppercase tracking-[0.3em] text-gold">The Inner Circle</p>
            <h3 className="font-display text-3xl font-black text-ivory">
              Get New Articles in Your Inbox.
            </h3>
            <p className="mx-auto mt-3 max-w-md text-sm text-ivory-dim">
              Early access to new formulas, research breakdowns, and S1CK member content — before anyone else.
            </p>
            <div className="mx-auto mt-8 flex max-w-md flex-col gap-0 border border-gold/40 sm:flex-row">
              <input
                type="email"
                placeholder="your@email.com"
                className="flex-1 bg-transparent px-5 py-3.5 text-sm text-ivory outline-none placeholder:text-ivory/30"
              />
              <Button size="md" className="shrink-0">Subscribe</Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
