"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/Button";

type Tab = "signin" | "signup";

export default function LoginPage() {
  const router = useRouter();
  const [tab, setTab] = useState<Tab>("signin");
  const [status, setStatus] = useState<"idle" | "loading">("idle");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    setTimeout(() => router.push("/account"), 1200);
  };

  return (
    <div
      className="flex min-h-screen items-center justify-center bg-ink px-6 py-20"
      style={{ paddingTop: "calc(var(--hdr-h, 112px) + 3rem)" }}
    >
      <div className="noise pointer-events-none fixed inset-0" />
      <div className="pointer-events-none fixed inset-0 bg-[radial-gradient(ellipse_50%_40%_at_50%_60%,rgba(201,169,97,0.06),transparent)]" />

      <div className="relative w-full max-w-md">
        {/* Logo */}
        <div className="mb-10 text-center">
          <Link href="/" className="font-display text-3xl font-black tracking-[0.15em] text-ivory">
            S1CK
          </Link>
          <p className="mt-2 text-xs uppercase tracking-[0.3em] text-gold">Member Access</p>
        </div>

        {/* Tabs */}
        <div className="mb-8 flex border border-white/8">
          {(["signin", "signup"] as Tab[]).map((t) => (
            <button
              key={t}
              onClick={() => setTab(t)}
              className={`flex-1 py-3 text-[11px] uppercase tracking-[0.25em] transition-colors ${
                tab === t ? "bg-gold font-bold text-ink" : "text-ivory-dim hover:text-ivory"
              }`}
            >
              {t === "signin" ? "Sign In" : "Create Account"}
            </button>
          ))}
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          {tab === "signup" && (
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="mb-1.5 block text-[10px] uppercase tracking-[0.25em] text-ivory/40">
                  First Name
                </label>
                <input
                  type="text"
                  required
                  placeholder="Alex"
                  className="w-full border border-white/10 bg-elevated px-4 py-3 text-sm text-ivory placeholder:text-ivory/20 outline-none transition-colors focus:border-gold/50"
                />
              </div>
              <div>
                <label className="mb-1.5 block text-[10px] uppercase tracking-[0.25em] text-ivory/40">
                  Last Name
                </label>
                <input
                  type="text"
                  required
                  placeholder="Smith"
                  className="w-full border border-white/10 bg-elevated px-4 py-3 text-sm text-ivory placeholder:text-ivory/20 outline-none transition-colors focus:border-gold/50"
                />
              </div>
            </div>
          )}

          <div>
            <label className="mb-1.5 block text-[10px] uppercase tracking-[0.25em] text-ivory/40">
              Email
            </label>
            <input
              type="email"
              required
              placeholder="you@example.com"
              className="w-full border border-white/10 bg-elevated px-4 py-3 text-sm text-ivory placeholder:text-ivory/20 outline-none transition-colors focus:border-gold/50"
            />
          </div>

          <div>
            <div className="mb-1.5 flex items-center justify-between">
              <label className="text-[10px] uppercase tracking-[0.25em] text-ivory/40">Password</label>
              {tab === "signin" && (
                <button
                  type="button"
                  className="text-[10px] uppercase tracking-[0.2em] text-gold/60 transition-colors hover:text-gold"
                >
                  Forgot?
                </button>
              )}
            </div>
            <input
              type="password"
              required
              minLength={8}
              placeholder="••••••••"
              className="w-full border border-white/10 bg-elevated px-4 py-3 text-sm text-ivory placeholder:text-ivory/20 outline-none transition-colors focus:border-gold/50"
            />
          </div>

          {tab === "signup" && (
            <div>
              <label className="mb-1.5 block text-[10px] uppercase tracking-[0.25em] text-ivory/40">
                Confirm Password
              </label>
              <input
                type="password"
                required
                placeholder="••••••••"
                className="w-full border border-white/10 bg-elevated px-4 py-3 text-sm text-ivory placeholder:text-ivory/20 outline-none transition-colors focus:border-gold/50"
              />
            </div>
          )}

          <Button
            type="submit"
            size="lg"
            className="mt-2 w-full justify-center"
            disabled={status === "loading"}
          >
            {status === "loading"
              ? "Verifying…"
              : tab === "signin"
              ? "Sign In"
              : "Create Account"}
          </Button>
        </form>

        {/* Social divider */}
        <div className="my-8 flex items-center gap-4">
          <div className="flex-1 border-t border-white/8" />
          <span className="text-[10px] uppercase tracking-[0.2em] text-ivory/20">or continue with</span>
          <div className="flex-1 border-t border-white/8" />
        </div>

        <div className="grid grid-cols-2 gap-3">
          <button className="flex items-center justify-center gap-2.5 border border-white/8 bg-elevated px-4 py-3 text-xs text-ivory transition-colors hover:border-white/20">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12.48 10.92v3.28h7.84c-.24 1.84-.853 3.187-1.787 4.133-1.147 1.147-2.933 2.4-6.053 2.4-4.827 0-8.6-3.893-8.6-8.72s3.773-8.72 8.6-8.72c2.6 0 4.507 1.027 5.907 2.347l2.307-2.307C18.747 1.44 16.133 0 12.48 0 5.867 0 .307 5.387.307 12s5.56 12 12.173 12c3.573 0 6.267-1.173 8.373-3.36 2.16-2.16 2.84-5.213 2.84-7.667 0-.76-.053-1.467-.173-2.053H12.48z" />
            </svg>
            Google
          </button>
          <button className="flex items-center justify-center gap-2.5 border border-white/8 bg-elevated px-4 py-3 text-xs text-ivory transition-colors hover:border-white/20">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
              <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
            </svg>
            Apple
          </button>
        </div>

        <p className="mt-8 text-center text-[10px] uppercase tracking-[0.2em] text-ivory/20">
          By continuing you agree to our{" "}
          <span className="cursor-pointer text-gold/50 transition-colors hover:text-gold">Terms</span>
          {" & "}
          <span className="cursor-pointer text-gold/50 transition-colors hover:text-gold">Privacy Policy</span>
        </p>
      </div>
    </div>
  );
}
