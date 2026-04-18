const pressLogos = [
  "FOX",
  "USA TODAY",
  "MARKETWATCH",
  "DIGITAL JOURNAL",
  "FORBES",
  "GQ",
];

const claims = [
  "100,000+ Bottles Sold",
  "Rated #1 · 6 Years Running",
  "30-Day Attraction Guarantee",
  "4.8 ★ · 12,500+ Reviews",
];

const testimonials = [
  {
    name: "Marcus R.",
    title: "Dating Coach · NYC",
    quote:
      "I've tested every pheromone fragrance on the market. Liquid Silver is the only one my clients notice without me saying a word.",
  },
  {
    name: "Ethan K.",
    title: "Men's Lifestyle · 480k followers",
    quote:
      "Three weeks in and the compliments have not stopped. My wife keeps asking what I'm wearing — she never asks.",
  },
  {
    name: "Jordan P.",
    title: "Verified Buyer",
    quote:
      "I'm a skeptic. I bought it to prove it was marketing. I re-ordered in nine days. That's all I'll say.",
  },
];

export function SocialProof() {
  return (
    <section className="relative bg-surface py-24">
      <div className="gold-rule absolute inset-x-0 top-0" />

      {/* Kinetic marquee */}
      <div className="relative mb-20 overflow-hidden border-y border-white/5 bg-ink py-5">
        <div className="flex animate-marquee whitespace-nowrap">
          {[...Array(2)].flatMap((_, loop) =>
            [...pressLogos, ...claims].map((item, i) => (
              <span
                key={`${loop}-${i}`}
                className="mx-6 font-display text-base tracking-[0.2em] text-ivory-dim md:mx-10 md:text-xl md:tracking-[0.25em]"
              >
                {item}
                <span className="ml-10 text-gold">·</span>
              </span>
            )),
          )}
        </div>
      </div>

      <div className="mx-auto max-w-[1400px] px-6">
        <div className="mb-16 text-center">
          <p className="mb-4 text-[11px] uppercase tracking-[0.3em] text-gold">
            The Proof
          </p>
          <h2
            className="font-display font-black leading-[0.95] text-ivory"
            style={{ fontSize: "var(--text-section)" }}
          >
            Worn. Tested.
            <span className="italic text-gold"> Validated.</span>
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {testimonials.map((t) => (
            <figure
              key={t.name}
              className="group relative overflow-hidden border border-gold/25 bg-elevated p-8 transition-colors hover:border-gold/70"
            >
              <div className="gold-shimmer absolute inset-0 opacity-0 transition-opacity group-hover:opacity-100" />
              <div className="relative">
                <div className="mb-5 flex items-center gap-1 text-gold">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 2l2.9 6.9L22 10l-5.4 4.7L18.2 22 12 18.3 5.8 22l1.6-7.3L2 10l7.1-1.1z" />
                    </svg>
                  ))}
                </div>
                <blockquote className="font-display text-lg italic leading-snug text-ivory">
                  "{t.quote}"
                </blockquote>
                <figcaption className="mt-6 border-t border-white/5 pt-4">
                  <div className="text-sm font-semibold text-ivory">{t.name}</div>
                  <div className="text-[11px] uppercase tracking-[0.2em] text-ivory-dim">
                    {t.title}
                  </div>
                </figcaption>
              </div>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
