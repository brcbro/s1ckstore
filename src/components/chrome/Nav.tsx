"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/Button";
import { useCart } from "@/lib/cart";

const links = [
  { label: "Shop",        href: "/shop"       },
  { label: "The Science", href: "/science"    },
  { label: "The Club",    href: "/subscribe"  },
  { label: "Affiliate",   href: "/#affiliate" },
];

export function Nav() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const { count } = useCart();

  const isActive = (href: string) =>
    !href.startsWith("/#") && (pathname === href || pathname.startsWith(href + "/"));

  return (
    <header className="border-b border-white/5 bg-ink/70 backdrop-blur-xl">
      <div className="mx-auto flex max-w-[1600px] items-center justify-between px-5 py-3 sm:px-6 sm:py-4">

        {/* Logo */}
        <Link
          href="/"
          className="font-display text-xl font-black tracking-[0.15em] text-ivory sm:text-2xl"
        >
          S1CK
        </Link>

        {/* Desktop nav links */}
        <nav className="hidden items-center gap-10 md:flex">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className={`text-xs uppercase tracking-[0.22em] transition-colors hover:text-gold ${
                isActive(l.href) ? "text-gold" : "text-ivory-dim"
              }`}
            >
              {l.label}
            </Link>
          ))}
        </nav>

        {/* Right — icons + CTA */}
        <div className="flex items-center gap-0.5 sm:gap-1">

          {/* Search */}
          <Link
            href="/search"
            aria-label="Search"
            className={`flex h-9 w-9 items-center justify-center transition-colors hover:text-gold ${
              pathname === "/search" ? "text-gold" : "text-ivory-dim"
            }`}
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="11" cy="11" r="7" />
              <path d="m21 21-4.35-4.35" />
            </svg>
          </Link>

          {/* Account */}
          <Link
            href="/account"
            aria-label="Account"
            className={`hidden h-9 w-9 items-center justify-center transition-colors hover:text-gold sm:flex ${
              pathname.startsWith("/account") || pathname === "/login" ? "text-gold" : "text-ivory-dim"
            }`}
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="8" r="4" />
              <path d="M4 20c0-4 3.6-7 8-7s8 3 8 7" />
            </svg>
          </Link>

          {/* Cart */}
          <Link
            href="/cart"
            aria-label="Cart"
            className={`relative flex h-9 w-9 items-center justify-center transition-colors hover:text-gold ${
              pathname === "/cart" ? "text-gold" : "text-ivory-dim"
            }`}
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
              <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" />
              <line x1="3" y1="6" x2="21" y2="6" />
              <path d="M16 10a4 4 0 0 1-8 0" />
            </svg>
            {count > 0 && (
              <span className="absolute -right-0.5 -top-0.5 flex h-[18px] w-[18px] items-center justify-center rounded-full bg-gold text-[9px] font-bold leading-none text-ink">
                {count > 9 ? "9+" : count}
              </span>
            )}
          </Link>

          <Button href="/shop" size="sm" className="ml-2 hidden md:inline-flex">
            Shop Now
          </Button>

          {/* Hamburger — mobile only */}
          <button
            onClick={() => setOpen((o) => !o)}
            className="relative ml-1 flex h-10 w-10 flex-col items-center justify-center gap-[5px] md:hidden"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
          >
            <span className={`block h-px w-5 bg-ivory origin-center transition-all duration-300 ${open ? "translate-y-[6px] rotate-45" : ""}`} />
            <span className={`block h-px w-5 bg-ivory transition-all duration-300 ${open ? "scale-x-0 opacity-0" : ""}`} />
            <span className={`block h-px w-5 bg-ivory origin-center transition-all duration-300 ${open ? "-translate-y-[6px] -rotate-45" : ""}`} />
          </button>
        </div>
      </div>

      {/* Mobile dropdown */}
      <div
        className={`overflow-hidden transition-[max-height,opacity] duration-500 ease-in-out md:hidden ${
          open ? "max-h-[600px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <nav className="border-t border-white/5 bg-ink px-5 pb-8 pt-2 sm:px-6">
          <ul className="mb-6">
            {links.map((l) => (
              <li key={l.href} className="border-b border-white/5 last:border-0">
                <Link
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="group flex items-center justify-between py-4 font-display text-2xl font-black italic text-ivory transition-colors hover:text-gold"
                >
                  {l.label}
                  <span className="text-sm text-gold/30 transition-colors group-hover:text-gold">→</span>
                </Link>
              </li>
            ))}
            <li className="border-b border-white/5">
              <Link
                href="/account"
                onClick={() => setOpen(false)}
                className="group flex items-center justify-between py-4 font-display text-2xl font-black italic text-ivory transition-colors hover:text-gold"
              >
                Account
                <span className="text-sm text-gold/30 transition-colors group-hover:text-gold">→</span>
              </Link>
            </li>
            <li>
              <Link
                href="/cart"
                onClick={() => setOpen(false)}
                className="group flex items-center justify-between py-4 font-display text-2xl font-black italic text-ivory transition-colors hover:text-gold"
              >
                Cart {count > 0 && <span className="ml-2 text-base font-normal text-gold">({count})</span>}
                <span className="text-sm text-gold/30 transition-colors group-hover:text-gold">→</span>
              </Link>
            </li>
          </ul>
          <Button href="/shop" size="lg" className="w-full justify-center" onClick={() => setOpen(false)}>
            Shop Now
          </Button>
          <p className="mt-5 text-center text-[9px] uppercase tracking-[0.3em] text-ivory/25">
            Rated #1 · 6 Years Running · 100K+ Customers
          </p>
        </nav>
      </div>
    </header>
  );
}
