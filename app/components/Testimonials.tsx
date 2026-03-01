import Reveal from "./Reveal";

const reviews = [
  {
    quote:
      "The truffle pork belly ramen genuinely stopped me mid-conversation. I've eaten at some of the best restaurants in London and this holds its own with complete confidence.",
    name: "Oliver H.",
    detail: "Nottingham · Regular guest",
    rating: 5,
  },
  {
    quote:
      "Mia's cooking is something else. The miso salmon melted with the ponzu butter in a way I hadn't expected. Understated, elegant, totally assured. We've been back four times.",
    name: "Priya & James W.",
    detail: "West Bridgford · January 2025",
    rating: 5,
  },
  {
    quote:
      "It doesn't try too hard. The space is calm, the service is warm, and the food is quietly brilliant. The yuzu cheesecake alone is worth the trip from Sheffield.",
    name: "Rebecca M.",
    detail: "Sheffield · Visited for birthday dinner",
    rating: 5,
  },
];

function Stars({ count }: { count: number }) {
  return (
    <div className="flex gap-1" aria-label={`${count} out of 5 stars`}>
      {Array.from({ length: count }).map((_, i) => (
        <svg
          key={i}
          className="w-4 h-4 text-ember fill-ember"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
        </svg>
      ))}
    </div>
  );
}

export default function Testimonials() {
  return (
    <section
      className="bg-cream py-20 sm:py-28 lg:py-36 overflow-hidden"
      aria-label="Customer reviews"
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
        <Reveal className="text-center mb-14">
          <p className="text-ember text-xs tracking-[0.3em] uppercase font-semibold mb-4">
            Reviews
          </p>
          <h2 className="font-display text-4xl sm:text-5xl text-charcoal font-bold">
            What Guests Say
          </h2>
        </Reveal>

        {/* Desktop: 3-column */}
        <div className="hidden sm:grid sm:grid-cols-3 gap-6 lg:gap-8">
          {reviews.map((review, i) => (
            <Reveal key={review.name} delay={(i as 0 | 1 | 2 | 3)}>
              <article className="relative bg-charcoal rounded-2xl p-7 lg:p-8 h-full flex flex-col">
                {/* Giant quote mark */}
                <span
                  className="absolute top-4 right-6 font-display text-8xl text-ember/20 leading-none select-none"
                  aria-hidden="true"
                >
                  &ldquo;
                </span>

                <Stars count={review.rating} />

                <p className="text-cream/75 text-sm sm:text-base leading-relaxed mt-5 mb-6 flex-1">
                  {review.quote}
                </p>

                <div className="border-t border-cream/10 pt-5">
                  <p className="font-display text-cream font-semibold text-base">
                    {review.name}
                  </p>
                  <p className="text-cream/40 text-xs mt-0.5">{review.detail}</p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        {/* Mobile: horizontal scroll */}
        <div className="sm:hidden -mx-5 px-5">
          <div className="flex gap-4 overflow-x-auto snap-x snap-mandatory pb-4">
            {reviews.map((review) => (
              <article
                key={review.name}
                className="relative bg-charcoal rounded-2xl p-6 shrink-0 w-[85vw] snap-start flex flex-col"
              >
                <span
                  className="absolute top-4 right-5 font-display text-7xl text-ember/20 leading-none select-none"
                  aria-hidden="true"
                >
                  &ldquo;
                </span>

                <Stars count={review.rating} />

                <p className="text-cream/75 text-sm leading-relaxed mt-4 mb-5 flex-1">
                  {review.quote}
                </p>

                <div className="border-t border-cream/10 pt-4">
                  <p className="font-display text-cream font-semibold">
                    {review.name}
                  </p>
                  <p className="text-cream/40 text-xs mt-0.5">{review.detail}</p>
                </div>
              </article>
            ))}
          </div>
          {/* Scroll indicator dots */}
          <div className="flex justify-center gap-2 mt-4">
            {reviews.map((_, i) => (
              <div
                key={i}
                className={`rounded-full bg-charcoal/30 ${i === 0 ? "w-5 h-1.5" : "w-1.5 h-1.5"}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
