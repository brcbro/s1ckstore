"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/Button";

type Section = "orders" | "subscription" | "profile" | "addresses";

const MOCK_ORDERS = [
  { id: "#S1CK-8821", date: "Apr 14, 2026", status: "Delivered", total: 349, items: ["The S1CK Arsenal"] },
  { id: "#S1CK-8714", date: "Mar 12, 2026", status: "Delivered", total: 210, items: ["Enchantress"] },
  { id: "#S1CK-8603", date: "Feb 1, 2026",  status: "Delivered", total: 180, items: ["Liquid Silver"] },
];

const STATUS_COLOR: Record<string, string> = {
  Delivered:  "text-green-400",
  Processing: "text-gold",
  Shipped:    "text-blue-400",
};

function IconClipboard() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round">
      <path d="M9 5H7a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-2" />
      <rect x="9" y="3" width="6" height="4" rx="1" />
      <path d="M9 12h6M9 16h4" />
    </svg>
  );
}
function IconBox() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round">
      <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
    </svg>
  );
}
function IconUser() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round">
      <circle cx="12" cy="8" r="4" />
      <path d="M4 20c0-4 3.6-7 8-7s8 3 8 7" />
    </svg>
  );
}
function IconPin() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round">
      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  );
}

const NAV_ITEMS: { label: string; value: Section; Icon: () => React.JSX.Element }[] = [
  { label: "Orders",       value: "orders",       Icon: IconClipboard },
  { label: "Subscription", value: "subscription", Icon: IconBox       },
  { label: "Profile",      value: "profile",      Icon: IconUser      },
  { label: "Addresses",    value: "addresses",    Icon: IconPin       },
];

export default function AccountPage() {
  const [section, setSection] = useState<Section>("orders");

  return (
    <div className="min-h-screen bg-ink" style={{ paddingTop: "var(--hdr-h, 112px)" }}>
      {/* Profile header */}
      <div className="border-b border-white/5 bg-surface">
        <div className="mx-auto max-w-[1400px] px-6 py-12">
          <div className="flex flex-wrap items-center gap-5">
            <div className="flex h-14 w-14 items-center justify-center rounded-full bg-gold font-display text-xl font-black text-ink">
              A
            </div>
            <div>
              <h1 className="font-display text-2xl font-black text-ivory">Alex Smith</h1>
              <p className="text-sm text-ivory-dim">alex.smith@example.com · Member since 2024</p>
            </div>
            <div className="ml-auto hidden items-center gap-2 border border-gold/30 bg-gold/5 px-4 py-2 sm:flex">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" className="text-gold">
                <path d="M12 2l2.9 6.9L22 10l-5.4 4.7L18.2 22 12 18.3 5.8 22l1.6-7.3L2 10l7.1-1.1z" />
              </svg>
              <span className="text-[11px] uppercase tracking-[0.2em] text-gold">Arsenal Subscriber</span>
            </div>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-[1400px] px-6 py-10">
        <div className="flex flex-col gap-8 lg:flex-row">

          {/* Sidebar */}
          <aside className="shrink-0 lg:w-56">
            <nav className="space-y-1">
              {NAV_ITEMS.map(({ label, value, Icon }) => (
                <button
                  key={value}
                  onClick={() => setSection(value)}
                  className={`flex w-full items-center gap-3 px-4 py-3 text-left text-xs uppercase tracking-[0.2em] transition-colors ${
                    section === value
                      ? "border-l-2 border-gold bg-gold/10 text-gold"
                      : "text-ivory-dim hover:bg-white/[0.03] hover:text-ivory"
                  }`}
                >
                  <Icon />
                  {label}
                </button>
              ))}
              <div className="border-t border-white/5 pt-4">
                <Link
                  href="/login"
                  className="flex w-full items-center gap-3 px-4 py-3 text-xs uppercase tracking-[0.2em] text-ivory/30 transition-colors hover:text-red-400"
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round">
                    <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4M16 17l5-5-5-5M21 12H9" />
                  </svg>
                  Sign Out
                </Link>
              </div>
            </nav>
          </aside>

          {/* Content */}
          <main className="min-w-0 flex-1">

            {section === "orders" && (
              <div>
                <h2 className="mb-6 font-display text-2xl font-black text-ivory">Order History</h2>
                <div className="space-y-4">
                  {MOCK_ORDERS.map((o) => (
                    <div key={o.id} className="border border-white/5 bg-elevated p-6">
                      <div className="flex flex-wrap items-start justify-between gap-4">
                        <div>
                          <div className="font-display text-lg font-bold text-ivory">{o.id}</div>
                          <div className="mt-1 text-xs text-ivory-dim">
                            {o.date} · {o.items.join(", ")}
                          </div>
                        </div>
                        <div className="text-right">
                          <div className={`text-xs font-semibold uppercase tracking-[0.15em] ${STATUS_COLOR[o.status] ?? "text-ivory"}`}>
                            {o.status}
                          </div>
                          <div className="mt-1 font-display text-xl font-black text-ivory">${o.total}</div>
                        </div>
                      </div>
                      <div className="mt-4 flex gap-3 border-t border-white/5 pt-4">
                        <button className="text-[10px] uppercase tracking-[0.2em] text-gold transition-colors hover:text-gold-bright">
                          View Order
                        </button>
                        <span className="text-ivory/10">·</span>
                        <button className="text-[10px] uppercase tracking-[0.2em] text-ivory/30 transition-colors hover:text-ivory">
                          Reorder
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {section === "subscription" && (
              <div>
                <h2 className="mb-6 font-display text-2xl font-black text-ivory">Subscription</h2>
                <div className="mb-4 border border-gold/30 bg-gold/5 p-6">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <p className="text-[10px] uppercase tracking-[0.25em] text-gold">Active Plan</p>
                      <p className="mt-1 font-display text-3xl font-black text-ivory">Arsenal</p>
                      <p className="text-sm text-ivory-dim">$99 / month · Renews May 1, 2026</p>
                    </div>
                    <span className="border border-green-400/30 bg-green-400/10 px-3 py-1 text-[10px] uppercase tracking-[0.2em] text-green-400">
                      Active
                    </span>
                  </div>
                  <div className="mt-6 flex flex-wrap gap-3">
                    <Button href="/subscribe" size="sm">Upgrade to Black Label</Button>
                    <Button size="sm" variant="outline">Manage Plan</Button>
                  </div>
                </div>
                <div className="border border-white/5 bg-elevated p-6">
                  <p className="mb-3 text-xs uppercase tracking-[0.2em] text-ivory/40">Next Box</p>
                  <p className="text-sm text-ivory-dim">Dispatches May 1, 2026 · 3 fragrances</p>
                  <p className="mt-2 text-xs text-ivory/30">Liquid Silver · Enchantress · N.D. Mood</p>
                </div>
              </div>
            )}

            {section === "profile" && (
              <div>
                <h2 className="mb-6 font-display text-2xl font-black text-ivory">Profile</h2>
                <form className="max-w-lg space-y-5" onSubmit={(e) => e.preventDefault()}>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="mb-1.5 block text-[10px] uppercase tracking-[0.25em] text-ivory/40">
                        First Name
                      </label>
                      <input
                        defaultValue="Alex"
                        className="w-full border border-white/10 bg-elevated px-4 py-3 text-sm text-ivory outline-none transition-colors focus:border-gold/50"
                      />
                    </div>
                    <div>
                      <label className="mb-1.5 block text-[10px] uppercase tracking-[0.25em] text-ivory/40">
                        Last Name
                      </label>
                      <input
                        defaultValue="Smith"
                        className="w-full border border-white/10 bg-elevated px-4 py-3 text-sm text-ivory outline-none transition-colors focus:border-gold/50"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="mb-1.5 block text-[10px] uppercase tracking-[0.25em] text-ivory/40">Email</label>
                    <input
                      type="email"
                      defaultValue="alex.smith@example.com"
                      className="w-full border border-white/10 bg-elevated px-4 py-3 text-sm text-ivory outline-none transition-colors focus:border-gold/50"
                    />
                  </div>
                  <div>
                    <label className="mb-1.5 block text-[10px] uppercase tracking-[0.25em] text-ivory/40">Phone</label>
                    <input
                      type="tel"
                      placeholder="+1 (000) 000-0000"
                      className="w-full border border-white/10 bg-elevated px-4 py-3 text-sm text-ivory placeholder:text-ivory/20 outline-none transition-colors focus:border-gold/50"
                    />
                  </div>
                  <Button type="submit" size="md">Save Changes</Button>
                </form>
              </div>
            )}

            {section === "addresses" && (
              <div>
                <div className="mb-6 flex items-center justify-between">
                  <h2 className="font-display text-2xl font-black text-ivory">Addresses</h2>
                  <Button size="sm" variant="outline">Add Address</Button>
                </div>
                <div className="border border-white/5 bg-elevated p-6">
                  <div className="flex items-start justify-between">
                    <div>
                      <p className="mb-2 text-[10px] uppercase tracking-[0.2em] text-gold">Default</p>
                      <p className="text-sm text-ivory">Alex Smith</p>
                      <p className="text-sm text-ivory-dim">123 Main Street, Apt 4B</p>
                      <p className="text-sm text-ivory-dim">New York, NY 10001</p>
                      <p className="text-sm text-ivory-dim">United States</p>
                    </div>
                    <button className="text-[10px] uppercase tracking-[0.2em] text-gold/60 transition-colors hover:text-gold">
                      Edit
                    </button>
                  </div>
                </div>
              </div>
            )}

          </main>
        </div>
      </div>
    </div>
  );
}
