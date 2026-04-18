import { Button } from "@/components/ui/Button";

type Tier = {
  id: string;
  name: string;
  price: string;
  cadence: string;
  perBottle?: string;
  benefits: string[];
  cta: string;
  highlighted?: boolean;
  tone: "standard" | "gold" | "black";
};

const tiers: Tier[] = [
  {
    id: "tease",
    name: "The Tease",
    price: "$119",
    cadence: "per month",
    perBottle: "Save 15%",
    benefits: [
      "1 flagship bottle monthly",
      "15% off all single orders",
      "Free shipping",
      "Skip or cancel anytime",
    ],
    cta: "Start with The Tease",
    tone: "standard",
  },
  {
    id: "arsenal",
    name: "The Arsenal",
    price: "$179",
    cadence: "per month",
    perBottle: "Save 25% · $89 per bottle",
    benefits: [
      "2 bottles — one signature, one rotating drop",
      "25% off all single orders",
      "First access to unreleased scents",
      "Quarterly travel-size gifts",
      "Priority shipping",
    ],
    cta: "Join The Arsenal",
    highlighted: true,
    tone: "gold",
  },
  {
    id: "blacklabel",
    name: "Black Label",
    price: "$279",
    cadence: "per month",
    perBottle: "Save 35% · Members-only formulas",
    benefits: [
      "3 bottles including Black Label exclusives",
      "35% off all single orders",
      "Invitations to S1CK events in NYC & LA",
      "Personal scent consultation",
      "Annual numbered collector bottle",
    ],
    cta: "Claim Black Label",
    tone: "black",
  },
];

const toneStyles: Record<Tier["tone"], string> = {
  standard: "border-white/10 bg-elevated",
  gold: "border-gold bg-gradient-to-b from-gold/10 via-elevated to-elevated shadow-[0_0_60px_-10px_rgba(201,169,97,0.35)] md:scale-[1.03]",
  black: "border-gold/20 bg-gradient-to-b from-ink via-[#0a0a0a] to-ink relative overflow-hidden",
};

export function Subscription() {
  return (
    <section id="subscribe" className="relative bg-surface py-28">
      <div className="gold-rule absolute inset-x-0 top-0" />

      <div className="mx-auto max-w-[1400px] px-6">
        <div className="mb-4 text-center">
          <p className="text-[11px] uppercase tracking-[0.3em] text-gold">
            The S1CK Club
          </p>
        </div>
        <h2
          className="mx-auto max-w-3xl text-center font-display font-black leading-[0.95] text-ivory"
          style={{ fontSize: "var(--text-section)" }}
        >
          Three Tiers.
          <br />
          <span className="italic text-gold">One Arsenal.</span>
        </h2>
        <p className="mx-auto mt-5 max-w-xl text-center text-sm leading-relaxed text-ivory-dim">
          Subscribers wear S1CK every day. Save up to 35%, access formulas that
          never make it to the public shop, and skip or cancel any time.
        </p>

        <div className="mt-12 grid gap-4 overflow-x-clip md:mt-16 md:gap-6 md:grid-cols-3 md:items-stretch">
          {tiers.map((tier) => (
            <article
              key={tier.id}
              className={`relative flex flex-col border p-6 transition-all duration-300 md:p-8 ${toneStyles[tier.tone]} ${
                tier.highlighted ? "mt-5 md:mt-0" : ""
              }`}
            >
              {tier.highlighted && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gold px-4 py-1 text-[10px] font-bold uppercase tracking-[0.25em] text-ink">
                  Most Popular
                </span>
              )}
              {tier.tone === "black" && <div className="gold-shimmer absolute inset-0 opacity-30" />}

              <div className="relative">
                <h3 className="font-display text-2xl font-bold text-ivory md:text-3xl">{tier.name}</h3>
                <div className="mt-5 flex items-baseline gap-2 md:mt-6">
                  <span className="font-display text-4xl font-black text-ivory md:text-5xl">{tier.price}</span>
                  <span className="text-sm text-ivory-dim">{tier.cadence}</span>
                </div>
                {tier.perBottle && (
                  <p className="mt-2 text-xs uppercase tracking-[0.2em] text-gold">
                    {tier.perBottle}
                  </p>
                )}

                <ul className="mt-6 space-y-2.5 md:mt-8 md:space-y-3">
                  {tier.benefits.map((b) => (
                    <li key={b} className="flex items-start gap-3 text-sm text-ivory">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="mt-0.5 shrink-0 text-gold">
                        <path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="relative mt-8 md:mt-10">
                <Button
                  size="md"
                  variant={tier.highlighted ? "gold" : "outline"}
                  className="w-full md:h-14"
                >
                  {tier.cta}
                </Button>
              </div>
            </article>
          ))}
        </div>

        {/* Risk reversal */}
        <div className="mt-16 mx-auto max-w-3xl border border-gold/40 bg-gradient-to-r from-gold/5 via-gold/10 to-gold/5 p-6 text-center md:p-10">
          <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full border border-gold/60 bg-ink">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-gold">
              <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M9 12l2 2 4-4" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
          <p className="font-display text-2xl italic text-ivory md:text-3xl">
            Try S1CK risk-free.
          </p>
          <p className="mt-3 text-sm leading-relaxed text-ivory-dim">
            If you're not attracting more attention within 30 days, we refund
            every penny. No questions, no fine print, no restocking fees.
          </p>
          <p className="mt-4 text-[11px] uppercase tracking-[0.3em] text-gold">
            The Attraction Guarantee
          </p>
        </div>
      </div>
    </section>
  );
}
