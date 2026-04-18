"use client";

import {
  createContext,
  useContext,
  useEffect,
  useState,
  type ReactNode,
  type FormEvent,
} from "react";
import { Button } from "@/components/ui/Button";

type Moment = "entrance" | "close" | "boardroom" | "afterhours";
type Feel = "magnetic" | "dangerous" | "quiet" | "helpless";

type QuizCtx = {
  open: () => void;
  close: () => void;
  isOpen: boolean;
};

const Ctx = createContext<QuizCtx | null>(null);

export function useScentQuiz() {
  const ctx = useContext(Ctx);
  if (!ctx) throw new Error("useScentQuiz must be used inside <ScentQuizProvider>");
  return ctx;
}

const DISMISS_KEY = "s1ck_quiz_dismissed_at";
const DISMISS_TTL = 7 * 24 * 60 * 60 * 1000; // 7 days
const AUTO_OPEN_DELAY = 15_000;

export function ScentQuizProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const dismissedAt = Number(localStorage.getItem(DISMISS_KEY) ?? 0);
    if (dismissedAt && Date.now() - dismissedAt < DISMISS_TTL) return;

    const t = setTimeout(() => setIsOpen(true), AUTO_OPEN_DELAY);
    return () => clearTimeout(t);
  }, []);

  const close = () => {
    setIsOpen(false);
    localStorage.setItem(DISMISS_KEY, String(Date.now()));
  };

  return (
    <Ctx.Provider value={{ isOpen, open: () => setIsOpen(true), close }}>
      {children}
      {isOpen && <ScentQuiz onClose={close} />}
    </Ctx.Provider>
  );
}

// ---------- Quiz catalog ----------

type MatchKey = `${Moment}:${Feel}`;

type Match = {
  scent: string;
  tone: "silver" | "obsidian" | "crimson" | "noir";
  tagline: string;
  notes: string;
};

const moments: { id: Moment; label: string; hint: string }[] = [
  { id: "entrance", label: "The Entrance", hint: "You walked in. The room noticed." },
  { id: "close", label: "The Close", hint: "Candlelight. Two glasses. One outcome." },
  { id: "boardroom", label: "The Boardroom", hint: "Quiet authority before anyone speaks." },
  { id: "afterhours", label: "After Hours", hint: "The door locks behind you." },
];

const feelings: { id: Feel; label: string; hint: string }[] = [
  { id: "magnetic", label: "Magnetic Pull", hint: "They can't look away." },
  { id: "dangerous", label: "Dangerous Curiosity", hint: "A glance that lingers too long." },
  { id: "quiet", label: "Quiet Respect", hint: "The nod before the conversation." },
  { id: "helpless", label: "Helpless Attraction", hint: "Words stop mattering." },
];

function matchFor(m: Moment, f: Feel): Match {
  const key = `${m}:${f}` as MatchKey;

  const byMoment: Record<Moment, Match> = {
    entrance: {
      scent: "Liquid Silver",
      tone: "silver",
      tagline: "Built for the room-stopping entrance.",
      notes: "Sharp citrus · Black pepper · Amber · Leather",
    },
    close: {
      scent: "Le Toxiquè",
      tone: "crimson",
      tagline: "Engineered for the glance that lingers.",
      notes: "Bergamot · Rose absolute · Oud · Musk",
    },
    boardroom: {
      scent: "Alpha Q",
      tone: "obsidian",
      tagline: "Calibrated for the nod that precedes the conversation.",
      notes: "Vetiver · Cedar · Saffron · Dry tobacco",
    },
    afterhours: {
      scent: "Le Toxiquè Noir",
      tone: "noir",
      tagline: "Formulated for the moment words stop mattering.",
      notes: "Cashmere · Vanilla · Animalic musk · Smoke",
    },
  };

  const base = byMoment[m];

  // Flavor the tagline with the feeling without changing the product
  const flourish: Record<Feel, string> = {
    magnetic: "They'll notice before you speak.",
    dangerous: "Left behind on a collar, a forearm, a memory.",
    quiet: "Nothing you need to announce.",
    helpless: "Close-range magic.",
  };

  void key;
  return { ...base, tagline: `${base.tagline} ${flourish[f]}` };
}

// ---------- Modal ----------

type Step = "moment" | "feel" | "email" | "revealing" | "revealed";

function ScentQuiz({ onClose }: { onClose: () => void }) {
  const [step, setStep] = useState<Step>("moment");
  const [moment, setMoment] = useState<Moment | null>(null);
  const [feel, setFeel] = useState<Feel | null>(null);
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  const handleEmailSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setEmailError("Enter a valid email.");
      return;
    }
    setEmailError("");
    setStep("revealing");
    // TODO: POST email to your ESP here
    setTimeout(() => setStep("revealed"), 1800);
  };

  const progress =
    step === "moment" ? 1 : step === "feel" ? 2 : step === "email" ? 3 : 4;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-ink/85 backdrop-blur-md fx-fade"
      onClick={onClose}
    >
      <div
        className="relative mx-4 flex w-full max-w-[640px] flex-col overflow-hidden border border-gold/30 bg-gradient-to-b from-elevated via-surface to-ink shadow-[0_40px_120px_-20px_rgba(201,169,97,0.35)]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close */}
        <button
          aria-label="Close"
          onClick={onClose}
          className="absolute right-4 top-4 z-10 flex h-9 w-9 items-center justify-center rounded-full border border-white/10 text-ivory-dim transition-colors hover:border-gold hover:text-gold"
        >
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M18 6L6 18M6 6l12 12" strokeLinecap="round" />
          </svg>
        </button>

        {/* Ambient gold glow */}
        <div className="pointer-events-none absolute -top-40 left-1/2 h-80 w-80 -translate-x-1/2 rounded-full bg-gold/20 blur-3xl" />
        <div className="noise" />

        {/* Progress */}
        {step !== "revealing" && step !== "revealed" && (
          <div className="relative flex items-center justify-center gap-2 pt-6">
            {[1, 2, 3].map((n) => (
              <span
                key={n}
                className={`h-[3px] w-10 transition-all duration-500 ${
                  n <= progress ? "bg-gold" : "bg-white/10"
                }`}
              />
            ))}
          </div>
        )}

        <div className="relative px-8 py-10 md:px-14 md:py-14">
          {step === "moment" && (
            <StepQuestion
              eyebrow="01 · Pick the moment"
              title="Where does the scent live?"
              subtitle="Don't think. The first one to catch your eye is the right one."
              options={moments}
              onPick={(id) => {
                setMoment(id);
                setStep("feel");
              }}
            />
          )}

          {step === "feel" && (
            <StepQuestion
              eyebrow="02 · What's the effect"
              title="What should it do to them?"
              subtitle="Every S1CK formula is engineered around a single emotional outcome."
              options={feelings}
              onPick={(id) => {
                setFeel(id);
                setStep("email");
              }}
            />
          )}

          {step === "email" && (
            <div key="email-step" className="fx-rise">
              <p className="text-[11px] uppercase tracking-[0.3em] text-gold">
                03 · Unlock your match
              </p>
              <h2 className="mt-4 font-display text-4xl font-black leading-[1.05] text-ivory md:text-5xl">
                Your signature is <span className="italic text-gold">ready.</span>
              </h2>
              <p className="mt-4 text-sm leading-relaxed text-ivory-dim">
                Drop your email — we'll reveal your match and unlock{" "}
                <span className="text-gold">15% off your first order.</span>
                <br />
                <span className="text-[11px] uppercase tracking-[0.2em]">
                  No spam. Unsubscribe in one tap.
                </span>
              </p>

              <form onSubmit={handleEmailSubmit} className="mt-8">
                <div className="flex flex-col gap-0 border border-gold/40 focus-within:border-gold sm:flex-row">
                  <input
                    type="email"
                    autoFocus
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="your@email.com"
                    className="flex-1 bg-transparent px-5 py-4 text-base text-ivory outline-none placeholder:text-ivory-dim/50"
                  />
                  <button
                    type="submit"
                    className="bg-gold px-8 py-4 text-xs font-bold uppercase tracking-[0.22em] text-ink transition-colors hover:bg-gold-bright"
                  >
                    Reveal My Scent
                  </button>
                </div>
                {emailError && (
                  <p className="mt-2 text-xs text-crimson">{emailError}</p>
                )}
              </form>

              <button
                type="button"
                onClick={() => setStep("feel")}
                className="mt-6 text-[11px] uppercase tracking-[0.25em] text-ivory-dim transition-colors hover:text-gold"
              >
                ← Change my answer
              </button>
            </div>
          )}

          {step === "revealing" && (
            <div className="flex min-h-[360px] flex-col items-center justify-center">
              <MistSpinner />
              <p className="mt-8 font-display text-xl italic text-ivory-dim">
                Matching your formula…
              </p>
            </div>
          )}

          {step === "revealed" && moment && feel && (
            <Reveal match={matchFor(moment, feel)} onClose={onClose} />
          )}
        </div>
      </div>
    </div>
  );
}

// ---------- Sub-components ----------

function StepQuestion<T extends string>({
  eyebrow,
  title,
  subtitle,
  options,
  onPick,
}: {
  eyebrow: string;
  title: string;
  subtitle: string;
  options: { id: T; label: string; hint: string }[];
  onPick: (id: T) => void;
}) {
  return (
    <div key={eyebrow} className="fx-rise">
      <p className="text-[11px] uppercase tracking-[0.3em] text-gold">{eyebrow}</p>
      <h2 className="mt-4 font-display text-4xl font-black leading-[1.05] text-ivory md:text-5xl">
        {title}
      </h2>
      <p className="mt-3 text-sm text-ivory-dim">{subtitle}</p>

      <div className="mt-8 grid gap-3 sm:grid-cols-2">
        {options.map((opt) => (
          <button
            key={opt.id}
            onClick={() => onPick(opt.id)}
            className="group relative overflow-hidden border border-white/10 bg-ink/40 p-5 text-left transition-all duration-300 hover:border-gold hover:bg-ink"
          >
            <div className="gold-shimmer absolute inset-0 opacity-0 transition-opacity group-hover:opacity-100" />
            <div className="relative">
              <div className="font-display text-xl font-bold text-ivory transition-colors group-hover:text-gold">
                {opt.label}
              </div>
              <div className="mt-1 text-xs italic text-ivory-dim">{opt.hint}</div>
            </div>
            <svg
              className="absolute right-4 top-1/2 -translate-y-1/2 text-ivory-dim opacity-0 transition-all duration-300 group-hover:translate-x-1 group-hover:text-gold group-hover:opacity-100"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M5 12h14M13 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
        ))}
      </div>
    </div>
  );
}

function MistSpinner() {
  return (
    <div className="relative h-32 w-32">
      <div className="absolute inset-0 rounded-full border border-gold/30" />
      <div className="absolute inset-0 animate-spin rounded-full border-2 border-transparent border-t-gold" style={{ animationDuration: "1.4s" }} />
      <div className="absolute inset-4 animate-spin rounded-full border-2 border-transparent border-b-gold/40" style={{ animationDuration: "2.2s", animationDirection: "reverse" }} />
      <div className="absolute inset-0 flex items-center justify-center font-display text-2xl italic text-gold">
        S1CK
      </div>
      <div className="absolute -inset-8 rounded-full bg-gold/10 blur-2xl animate-pulse" />
    </div>
  );
}

function Reveal({ match, onClose }: { match: Match; onClose: () => void }) {
  const code = "S1CK15";

  const toneFill: Record<Match["tone"], string> = {
    silver: "from-ivory/30 via-ivory/10 to-ink",
    obsidian: "from-gold/20 via-ink to-ink",
    crimson: "from-crimson/50 via-crimson/20 to-ink",
    noir: "from-ink via-ink/95 to-ink border-gold/30",
  };

  return (
    <div className="fx-zoom">
      <p className="text-[11px] uppercase tracking-[0.3em] text-gold">
        Your Signature Scent
      </p>

      <div className="mt-6 grid gap-8 md:grid-cols-[180px_1fr] md:items-center">
        {/* Bottle */}
        <div className="relative mx-auto">
          <div className="absolute -inset-8 rounded-full bg-gold/20 blur-3xl animate-pulse" />
          <div
            className={`relative h-[240px] w-[100px] rounded-[5px] border border-ivory/15 bg-gradient-to-b ${toneFill[match.tone]} shadow-[0_30px_60px_-20px_rgba(0,0,0,0.9)] flex items-end justify-center pb-10`}
          >
            <span className="font-display text-[10px] tracking-[0.4em] text-ivory/80">
              S1CK
            </span>
          </div>
          <div className="absolute left-1/2 top-0 h-10 w-14 -translate-x-1/2 -translate-y-1 rounded-sm bg-gradient-to-b from-ivory/50 via-ivory/30 to-ivory/10 border border-ivory/20" />
        </div>

        {/* Copy */}
        <div>
          <h2 className="font-display text-4xl font-black leading-[1.05] text-ivory md:text-5xl">
            {match.scent}
          </h2>
          <p className="mt-3 text-[11px] uppercase tracking-[0.22em] text-ivory-dim">
            {match.notes}
          </p>
          <p className="mt-5 font-display text-lg italic leading-snug text-ivory">
            "{match.tagline}"
          </p>

          {/* Discount coupon */}
          <div className="mt-6 border border-dashed border-gold/60 bg-gold/5 p-4">
            <div className="flex items-center justify-between gap-3">
              <div>
                <div className="text-[10px] uppercase tracking-[0.25em] text-ivory-dim">
                  Your code
                </div>
                <div className="font-display text-2xl font-black tracking-[0.15em] text-gold">
                  {code}
                </div>
              </div>
              <button
                onClick={() => navigator.clipboard?.writeText(code)}
                className="border border-gold/50 px-3 py-2 text-[10px] font-bold uppercase tracking-[0.22em] text-gold transition-colors hover:bg-gold hover:text-ink"
              >
                Copy
              </button>
            </div>
            <div className="mt-2 text-[11px] text-ivory-dim">
              15% off your first order · Sent to your email too.
            </div>
          </div>

          <div className="mt-6 flex flex-wrap gap-3">
            <Button href="#bestsellers" size="md" onClick={onClose}>
              Shop {match.scent} →
            </Button>
            <Button onClick={onClose} size="md" variant="ghost">
              Keep browsing
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
