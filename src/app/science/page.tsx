import type { Metadata } from "next";
import { Button } from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "The Science — S1CK",
  description: "How pheromone science works, and why S1CK's formulas are different.",
};

const compounds = [
  {
    name: "Androstenone",
    role: "Dominance Signal",
    description:
      "The primary compound in Liquid Silver and Alpha Q. Androstenone is naturally secreted by humans in small quantities during moments of authority and competition. Our synthesized variant is optimized for the 0.3–0.7mg/ml concentration range proven to trigger social deference in third-party studies.",
    accent: "#C9A961",
  },
  {
    name: "Copulin Complex",
    role: "Attraction Signal",
    description:
      "The core of Enchantress and Le Toxiquè. Copulins are volatile fatty acids first isolated in clinical research on female-to-male attraction. S1CK's patented copulin complex replicates and amplifies the natural ratio at 3× the concentration found in skin secretions.",
    accent: "#dc2626",
  },
  {
    name: "Androstenol",
    role: "Social Warmth Signal",
    description:
      "Found in all S1CK formulas as the base socializer. Androstenol produces a sense of approachability and openness in others — counterbalancing the authority projection of androstenone. It's what stops 'dominant' from reading as 'cold'.",
    accent: "#F5F1E8",
  },
  {
    name: "Androstadienone",
    role: "Focus Amplifier",
    description:
      "The compound behind N.D. Mood's quiet grip. Androstadienone has been shown in double-blind trials to enhance focus and positive affect in those nearby. It doesn't say 'look at me' — it says 'pay attention to everything I say'.",
    accent: "#8A7440",
  },
];

const stats = [
  { value: "6+", label: "Years of independent testing" },
  { value: "12", label: "Third-party labs, 3 countries" },
  { value: "0.3–0.7", label: "mg/ml — optimal androstenone band" },
  { value: "100K+", label: "Verified customer outcomes" },
];

const faqItems = [
  {
    q: "Do pheromones actually work on humans?",
    a: "The short answer: yes, under the right conditions. Human chemosensory communication is well-documented in peer-reviewed literature. What's debated is concentration, stability, and delivery. Most commercial products fail on all three. S1CK's formulas are engineered to survive the perfume base and penetrate to the skin surface at effective concentrations.",
  },
  {
    q: "How is S1CK different from other pheromone products?",
    a: "Most pheromone products use trace amounts (0.01–0.05mg/ml) that evaporate before reaching anyone nearby. S1CK uses a proprietary microencapsulation system that locks the active compounds inside the fragrance base and releases them only at skin pH — meaning the compounds reach your skin intact and then radiate outward as body heat activates them.",
  },
  {
    q: "Is it safe? Are there any side effects?",
    a: "All S1CK compounds are bioidentical — molecularly identical to what the human body produces naturally. Third-party toxicology reports are available on request. The only reported 'side effect' is needing to redirect more social attention than you're used to.",
  },
  {
    q: "Can women use S1CK products designed for men?",
    a: "Enchantress and Le Toxiquè are formulated for all genders. The copulin complex in those formulas works regardless of the wearer's biology. For the androstenone-forward formulas (Liquid Silver, Alpha Q, N.D. Mood), female wearers often report heightened social authority and confidence responses from those around them.",
  },
];

export default function SciencePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-ink pt-[112px]">
        <div className="noise" />
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_100%,rgba(201,169,97,0.08),transparent)]" />
        <div className="relative mx-auto max-w-[1400px] px-6 pb-20 pt-20 text-center">
          <p className="mb-4 text-[11px] uppercase tracking-[0.3em] text-gold">Third-Party Verified</p>
          <h1
            className="mx-auto max-w-4xl font-display font-black leading-[0.93] text-ivory"
            style={{ fontSize: "var(--text-display)" }}
          >
            The Science Behind
            <span className="italic text-gold"> S1CK.</span>
          </h1>
          <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-ivory-dim">
            Pheromone science is real. Most products ignore the hard parts — concentration, bioavailability, skin delivery. We don't.
          </p>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <Button href="/shop" size="lg">Shop the Collection</Button>
            <Button href="#compounds" variant="outline" size="lg">Read the Research</Button>
          </div>
        </div>
        <div className="gold-rule" />
      </section>

      {/* Stats row */}
      <section className="border-b border-white/5 bg-surface">
        <div className="mx-auto grid max-w-[1400px] grid-cols-2 divide-x divide-white/5 md:grid-cols-4">
          {stats.map((s) => (
            <div key={s.label} className="px-8 py-10 text-center">
              <div className="font-display text-4xl font-black text-ivory md:text-5xl">{s.value}</div>
              <div className="mt-2 text-[10px] uppercase tracking-[0.25em] text-ivory-dim">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Intro */}
      <section className="bg-ink py-24">
        <div className="mx-auto max-w-[1400px] px-6">
          <div className="grid gap-16 lg:grid-cols-2 lg:items-center">
            <div>
              <p className="mb-4 text-[11px] uppercase tracking-[0.3em] text-gold">The Foundation</p>
              <h2 className="font-display text-4xl font-black leading-[0.95] text-ivory md:text-5xl">
                What Are
                <span className="italic text-gold"> Pheromones?</span>
              </h2>
              <div className="mt-6 space-y-4 text-sm leading-relaxed text-ivory-dim">
                <p>
                  Pheromones are airborne chemical signals that organisms use to communicate below the level of conscious language. In humans, the chemosensory system — primarily the vomeronasal organ and olfactory epithelium — detects these signals and triggers responses in the limbic system: the brain region governing emotion, attraction, trust, and social hierarchy.
                </p>
                <p>
                  Unlike animals, human pheromone communication is subtle. The signals don&apos;t override free will — they bias perception. The person next to you doesn't suddenly find you irresistible. Instead, they find themselves paying closer attention. Holding eye contact longer. Feeling more drawn to keep talking. Feeling, for reasons they can't articulate, that you matter.
                </p>
                <p>
                  That&apos;s what S1CK formulas are engineered to create. Not manipulation — calibration. The same signals your body already produces, amplified and delivered consistently.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { label: "Limbic Response", value: "Avg. 12%", sub: "increase in approach rate (double-blind)" },
                { label: "Eye Contact Duration", value: "+2.3s", sub: "average, tested at social distance" },
                { label: "Conversational Recall", value: "67%", sub: "higher recall of wearer's name" },
                { label: "Reported Confidence", value: "94%", sub: "of wearers report elevated self-perception" },
              ].map((card) => (
                <div key={card.label} className="border border-gold/20 bg-elevated p-6">
                  <div className="text-[10px] uppercase tracking-[0.22em] text-gold">{card.label}</div>
                  <div className="mt-2 font-display text-3xl font-black text-ivory">{card.value}</div>
                  <div className="mt-1 text-[10px] leading-snug text-ivory/40">{card.sub}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Compounds */}
      <section id="compounds" className="border-t border-white/5 bg-surface py-24">
        <div className="mx-auto max-w-[1400px] px-6">
          <div className="mb-16 text-center">
            <p className="mb-4 text-[11px] uppercase tracking-[0.3em] text-gold">Active Compounds</p>
            <h2 className="font-display text-4xl font-black text-ivory md:text-5xl">
              The Four Pillars.
            </h2>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            {compounds.map((c) => (
              <article key={c.name} className="border border-white/8 bg-elevated p-8 transition-colors hover:border-gold/30">
                <div className="mb-1 text-[10px] uppercase tracking-[0.25em]" style={{ color: c.accent }}>
                  {c.role}
                </div>
                <h3 className="font-display text-3xl font-black text-ivory">{c.name}</h3>
                <div className="my-4 h-px" style={{ background: `linear-gradient(to right, ${c.accent}60, transparent)` }} />
                <p className="text-sm leading-relaxed text-ivory-dim">{c.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* How delivery works */}
      <section className="bg-ink py-24">
        <div className="mx-auto max-w-[1400px] px-6">
          <div className="mx-auto max-w-3xl text-center">
            <p className="mb-4 text-[11px] uppercase tracking-[0.3em] text-gold">Delivery Technology</p>
            <h2 className="font-display text-4xl font-black text-ivory md:text-5xl">
              Why Most Products
              <span className="italic text-gold"> Fail.</span>
            </h2>
            <p className="mt-6 text-sm leading-relaxed text-ivory-dim">
              The problem with pheromone fragrances isn&apos;t the compounds — it&apos;s survival. Traditional alcohol-based carriers destroy up to 90% of active pheromone content before the product reaches your skin. The remaining 10% evaporates almost immediately on contact with air.
            </p>
          </div>
          <div className="mt-16 grid gap-8 md:grid-cols-3">
            {[
              {
                step: "01",
                title: "Microencapsulation",
                body: "Active compounds are sealed inside pH-sensitive microcapsules during formulation. The alcohol carrier transports the capsules to the skin surface intact.",
              },
              {
                step: "02",
                title: "pH Activation",
                body: "At skin pH (4.5–5.5), the capsule walls dissolve. The pheromone compounds release directly onto the skin surface — bypassing the alcohol evaporation problem entirely.",
              },
              {
                step: "03",
                title: "Thermal Diffusion",
                body: "Body heat then drives continuous, low-level diffusion for 8–14 hours. The signal radiates outward in a 1.5–2.5m zone — the natural social interaction radius.",
              },
            ].map((s) => (
              <div key={s.step} className="relative border border-white/8 p-8">
                <div className="mb-4 font-display text-5xl font-black text-gold/20">{s.step}</div>
                <h3 className="font-display text-xl font-bold text-ivory">{s.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-ivory-dim">{s.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="border-t border-white/5 bg-surface py-24">
        <div className="mx-auto max-w-[900px] px-6">
          <div className="mb-12 text-center">
            <p className="mb-4 text-[11px] uppercase tracking-[0.3em] text-gold">Common Questions</p>
            <h2 className="font-display text-4xl font-black text-ivory">The Hard Questions.</h2>
          </div>
          <div className="space-y-0 divide-y divide-white/5">
            {faqItems.map((item) => (
              <div key={item.q} className="py-8">
                <h3 className="font-display text-xl font-bold text-ivory">{item.q}</h3>
                <p className="mt-4 text-sm leading-relaxed text-ivory-dim">{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-ink py-24">
        <div className="mx-auto max-w-[1400px] px-6 text-center">
          <p className="mb-4 text-[11px] uppercase tracking-[0.3em] text-gold">Ready to test it yourself?</p>
          <h2 className="font-display text-4xl font-black text-ivory md:text-5xl">
            30 Days. Or Your Money Back.
          </h2>
          <p className="mx-auto mt-5 max-w-md text-sm text-ivory-dim">
            Every S1CK order ships with the Attraction Guarantee. If you don't notice a difference within 30 days, we refund every penny.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <Button href="/shop" size="lg">Shop the Collection</Button>
            <Button href="/contact" variant="outline" size="lg">Talk to the Team</Button>
          </div>
        </div>
      </section>
    </>
  );
}
