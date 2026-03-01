const navLinks = [
  { label: "Menu", href: "#menu" },
  { label: "Our Story", href: "#story" },
  { label: "Book a Table", href: "#book" },
  { label: "Find Us", href: "#find-us" },
];

const socialLinks = [
  {
    label: "Instagram",
    href: "#",
    icon: (
      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
      </svg>
    ),
  },
  {
    label: "Facebook",
    href: "#",
    icon: (
      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
      </svg>
    ),
  },
  {
    label: "TikTok",
    href: "#",
    icon: (
      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.27 6.27 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V8.69a8.18 8.18 0 004.78 1.52V6.77a4.85 4.85 0 01-1.01-.08z" />
      </svg>
    ),
  },
];

export default function Footer() {
  return (
    <footer className="bg-charcoal-deep border-t border-cream/10" aria-label="Footer">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 py-14 sm:py-16 pb-28 lg:pb-16">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div className="col-span-2 lg:col-span-1">
            <a
              href="#hero"
              className="font-display text-2xl text-cream tracking-widest font-semibold"
              aria-label="Ember & East – back to top"
            >
              Ember <span className="text-ember italic">&amp;</span> East
            </a>
            <p className="text-cream/45 text-sm leading-relaxed mt-3 max-w-xs">
              British-Asian fusion dining in the heart of Nottingham. Crafted
              with care, served with warmth.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-cream/40 text-xs tracking-[0.2em] uppercase font-semibold mb-4">
              Navigate
            </h3>
            <ul className="space-y-2.5">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-cream/65 hover:text-ember text-sm transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-cream/40 text-xs tracking-[0.2em] uppercase font-semibold mb-4">
              Contact
            </h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <a
                  href="tel:01150000000"
                  className="text-cream/65 hover:text-ember transition-colors"
                >
                  0115 000 0000
                </a>
              </li>
              <li>
                <a
                  href="mailto:hello@emberandeast.co.uk"
                  className="text-cream/65 hover:text-ember transition-colors"
                >
                  hello@emberandeast.co.uk
                </a>
              </li>
              <li className="text-cream/45 leading-relaxed pt-1">
                14 Pelham Street
                <br />
                Nottingham, NG1 2EG
              </li>
            </ul>
          </div>

          {/* Social + hours summary */}
          <div>
            <h3 className="text-cream/40 text-xs tracking-[0.2em] uppercase font-semibold mb-4">
              Follow Us
            </h3>
            <div className="flex gap-3 mb-6">
              {socialLinks.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  aria-label={s.label}
                  className="w-9 h-9 rounded-full border border-cream/20 hover:border-ember/50 hover:text-ember text-cream/60 flex items-center justify-center transition-all duration-200"
                >
                  {s.icon}
                </a>
              ))}
            </div>
            <p className="text-cream/40 text-xs leading-relaxed">
              Wed–Thu: 17:30–22:00
              <br />
              Fri–Sat: 12:00–23:00
              <br />
              Sunday: 12:00–16:00
            </p>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-cream/10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-cream/30 text-xs text-center sm:text-left">
            © {new Date().getFullYear()} Ember &amp; East. All rights reserved.
          </p>
          <p className="text-cream/25 text-xs text-center sm:text-right italic">
            Demo website for portfolio purposes – not a real business. Built by{" "}
            <a
              href="https://northsummit.agency"
              className="hover:text-cream/50 transition-colors underline underline-offset-2"
            >
              NorthSummit.agency
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
