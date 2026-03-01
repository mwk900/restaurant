export default function MobileBar() {
  return (
    <div
      className="lg:hidden fixed bottom-0 left-0 right-0 z-40 flex border-t border-cream/10"
      role="navigation"
      aria-label="Quick actions"
    >
      <a
        href="tel:01150000000"
        className="flex-1 flex items-center justify-center gap-2 bg-charcoal-mid hover:bg-charcoal text-cream/80 hover:text-cream py-4 text-sm font-medium transition-colors"
        aria-label="Call Ember & East on 0115 000 0000"
      >
        <svg
          className="w-4 h-4"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
          />
        </svg>
        Call Us
      </a>

      <div className="w-px bg-cream/10" aria-hidden="true" />

      <a
        href="#book"
        className="flex-1 flex items-center justify-center gap-2 bg-ember hover:bg-ember-light text-charcoal-deep py-4 text-sm font-semibold transition-colors"
        aria-label="Reserve a table"
      >
        <svg
          className="w-4 h-4"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
          />
        </svg>
        Reserve
      </a>
    </div>
  );
}
