"use client";

import { useScentQuiz } from "@/components/quiz/ScentQuiz";

const columns = [
  {
    title: "Shop",
    links: ["Liquid Silver", "Alpha Q", "Le Toxiquè", "The Arsenal", "Subscriptions"],
  },
  {
    title: "Learn",
    links: ["The Science", "Fragrance Journal", "Ingredient Index", "Reviews"],
  },
  {
    title: "Support",
    links: ["Shipping", "Returns", "Contact", "FAQ", "Track Order"],
  },
];

export function Footer() {
  const { open } = useScentQuiz();

  return (
    <footer className="relative border-t border-white/5 bg-ink py-20">
      <div className="mx-auto max-w-[1400px] px-6">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 md:grid-cols-[1.5fr_1fr_1fr_1fr] md:gap-12">
          <div>
            <div className="font-display text-3xl font-black tracking-[0.15em] text-ivory md:text-4xl">
              S1CK
            </div>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-ivory-dim">
              Scientifically formulated pheromone fragrances. Rated #1 six years
              running. Worn in 43 countries.
            </p>
            <div className="mt-8">
              <div className="text-[11px] uppercase tracking-[0.3em] text-gold">
                Join the inner circle
              </div>
              <button
                type="button"
                onClick={open}
                className="group mt-3 flex w-full items-center justify-between border border-gold/30 px-4 py-3 text-left transition-colors hover:border-gold"
              >
                <span className="text-sm text-ivory-dim group-hover:text-ivory">
                  Take the 30-second scent quiz
                </span>
                <span className="bg-gold px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.2em] text-ink">
                  Unlock 15%
                </span>
              </button>
            </div>
          </div>

          {columns.map((col) => (
            <div key={col.title}>
              <h4 className="text-[11px] uppercase tracking-[0.3em] text-gold">
                {col.title}
              </h4>
              <ul className="mt-5 space-y-3">
                {col.links.map((l) => (
                  <li key={l}>
                    <a
                      href="#"
                      className="text-sm text-ivory-dim transition-colors hover:text-gold"
                    >
                      {l}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-16 flex flex-col items-start justify-between gap-4 border-t border-white/5 pt-8 text-[11px] uppercase tracking-[0.2em] text-ivory-dim md:flex-row md:items-center">
          <span>© {new Date().getFullYear()} S1CK Shop · All rights reserved</span>
          <div className="flex gap-6">
            <a href="#" className="hover:text-gold">Privacy</a>
            <a href="#" className="hover:text-gold">Terms</a>
            <a href="#" className="hover:text-gold">Accessibility</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
