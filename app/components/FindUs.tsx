import Reveal from "./Reveal";

const hours = [
  { day: "Monday – Tuesday", time: "Closed" },
  { day: "Wednesday – Thursday", time: "12:00 – 14:30 · 17:30 – 22:00" },
  { day: "Friday – Saturday", time: "12:00 – 15:00 · 17:00 – 23:00" },
  { day: "Sunday", time: "12:00 – 16:00" },
];

export default function FindUs() {
  return (
    <section
      id="find-us"
      className="bg-charcoal py-20 sm:py-28 lg:py-36"
      aria-label="Find us"
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
        <Reveal className="text-center mb-14">
          <p className="text-ember text-xs tracking-[0.3em] uppercase font-semibold mb-4">
            Visit Us
          </p>
          <h2 className="font-display text-4xl sm:text-5xl text-cream font-bold">
            Find Us in Nottingham
          </h2>
        </Reveal>

        <div className="grid lg:grid-cols-3 gap-8 lg:gap-12 mb-10">
          {/* Address & contact */}
          <Reveal>
            <div className="space-y-6">
              <div>
                <h3 className="text-ember text-xs tracking-[0.25em] uppercase font-semibold mb-3">
                  Address
                </h3>
                <address className="text-cream/80 text-sm leading-relaxed not-italic">
                  14 Pelham Street
                  <br />
                  Nottingham
                  <br />
                  NG1 2EG
                </address>
              </div>

              <div>
                <h3 className="text-ember text-xs tracking-[0.25em] uppercase font-semibold mb-3">
                  Contact
                </h3>
                <div className="space-y-2">
                  <a
                    href="tel:01150000000"
                    className="flex items-center gap-3 text-cream/80 hover:text-ember text-sm transition-colors group"
                  >
                    <span className="w-7 h-7 rounded-full border border-cream/20 group-hover:border-ember/50 flex items-center justify-center text-xs transition-colors">
                      ☎
                    </span>
                    0115 000 0000
                  </a>
                  <a
                    href="mailto:hello@emberandeast.co.uk"
                    className="flex items-center gap-3 text-cream/80 hover:text-ember text-sm transition-colors group"
                  >
                    <span className="w-7 h-7 rounded-full border border-cream/20 group-hover:border-ember/50 flex items-center justify-center text-xs transition-colors">
                      ✉
                    </span>
                    hello@emberandeast.co.uk
                  </a>
                </div>
              </div>

              <a
                href="#book"
                className="inline-block bg-ember hover:bg-ember-light text-charcoal-deep font-semibold text-sm px-6 py-3 rounded-full transition-colors duration-200"
              >
                Reserve a Table
              </a>
            </div>
          </Reveal>

          {/* Opening hours */}
          <Reveal delay={1}>
            <div>
              <h3 className="text-ember text-xs tracking-[0.25em] uppercase font-semibold mb-5">
                Opening Hours
              </h3>
              <ul className="space-y-3">
                {hours.map((h) => (
                  <li
                    key={h.day}
                    className="flex flex-col sm:flex-row sm:justify-between gap-1 sm:gap-4 pb-3 border-b border-cream/10 last:border-b-0"
                  >
                    <span className="text-cream/60 text-sm">{h.day}</span>
                    <span
                      className={`text-sm font-medium ${
                        h.time === "Closed" ? "text-cream/30" : "text-cream"
                      }`}
                    >
                      {h.time}
                    </span>
                  </li>
                ))}
              </ul>
              <p className="text-cream/35 text-xs mt-4 leading-relaxed">
                Last food orders 30 minutes before closing. Kitchen closes early
                on bank holidays — please call ahead.
              </p>
            </div>
          </Reveal>

          {/* Map placeholder */}
          <Reveal delay={2}>
            <div
              className="rounded-2xl overflow-hidden border border-cream/10 h-full min-h-[260px] flex flex-col items-center justify-center bg-charcoal-mid relative"
              role="img"
              aria-label="Map showing Ember & East location at 14 Pelham Street, Nottingham"
            >
              {/* Stylised map grid lines */}
              <div className="absolute inset-0 opacity-10">
                {Array.from({ length: 8 }).map((_, i) => (
                  <div
                    key={`h-${i}`}
                    className="absolute w-full h-px bg-cream"
                    style={{ top: `${(i + 1) * 12.5}%` }}
                  />
                ))}
                {Array.from({ length: 8 }).map((_, i) => (
                  <div
                    key={`v-${i}`}
                    className="absolute h-full w-px bg-cream"
                    style={{ left: `${(i + 1) * 12.5}%` }}
                  />
                ))}
              </div>

              {/* Pin icon */}
              <div className="relative z-10 flex flex-col items-center text-center px-6">
                <div className="w-12 h-12 rounded-full bg-ember flex items-center justify-center mb-4 shadow-[0_0_30px_rgba(201,137,45,0.4)]">
                  <svg
                    className="w-6 h-6 text-charcoal-deep"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
                  </svg>
                </div>
                <p className="font-display text-cream font-semibold mb-1">
                  Ember &amp; East
                </p>
                <p className="text-cream/50 text-xs mb-4">
                  14 Pelham Street, Nottingham NG1 2EG
                </p>
                <a
                  href="https://maps.google.com/?q=Pelham+Street+Nottingham"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-ember hover:text-ember-light text-xs underline underline-offset-4 transition-colors"
                >
                  Open in Google Maps →
                </a>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
