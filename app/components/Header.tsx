"use client";

import { useState, useEffect } from "react";

const navLinks = [
  { label: "Menu", href: "#menu" },
  { label: "Story", href: "#story" },
  { label: "Gallery", href: "#gallery" },
  { label: "Book", href: "#book" },
  { label: "Find Us", href: "#find-us" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-charcoal/95 backdrop-blur-md shadow-[0_2px_30px_rgba(0,0,0,0.5)]"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <a
            href="#hero"
            className="font-display text-xl lg:text-2xl text-cream tracking-widest font-semibold shrink-0"
            aria-label="Ember & East – home"
          >
            Ember <span className="text-ember italic">&amp;</span> East
          </a>

          {/* Desktop Nav */}
          <nav
            className="hidden lg:flex items-center gap-8"
            aria-label="Main navigation"
          >
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-cream/70 hover:text-ember text-xs tracking-[0.2em] uppercase font-medium transition-colors duration-200"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Desktop CTAs */}
          <div className="hidden lg:flex items-center gap-4">
            <a
              href="tel:01150000000"
              className="text-cream/60 hover:text-cream text-sm transition-colors"
            >
              0115 000 0000
            </a>
            <a
              href="#book"
              className="bg-ember hover:bg-ember-light text-charcoal-deep font-semibold text-sm px-6 py-2.5 rounded-full transition-colors duration-200"
            >
              Reserve
            </a>
          </div>

          {/* Mobile: phone + hamburger */}
          <div className="flex lg:hidden items-center gap-3">
            <a
              href="tel:01150000000"
              className="text-cream/70 text-xs tracking-wide"
              aria-label="Call us"
            >
              0115 000 0000
            </a>
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="text-cream p-1.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ember"
              aria-label={menuOpen ? "Close menu" : "Open menu"}
              aria-expanded={menuOpen}
            >
              {menuOpen ? (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile dropdown menu */}
      {menuOpen && (
        <div className="lg:hidden bg-charcoal-deep border-t border-cream/10">
          <nav className="flex flex-col px-5 py-4" aria-label="Mobile navigation">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="text-cream/75 hover:text-ember text-xs tracking-[0.2em] uppercase font-medium transition-colors py-3.5 border-b border-cream/10 last:border-b-0"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#book"
              onClick={() => setMenuOpen(false)}
              className="mt-4 bg-ember text-charcoal-deep font-semibold text-sm px-6 py-3.5 rounded-full text-center"
            >
              Reserve a Table
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
