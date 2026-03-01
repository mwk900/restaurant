import Image from "next/image";
import Reveal from "./Reveal";

const dishes = [
  {
    name: "Black Garlic Wagyu Burger",
    description:
      "200g Wagyu beef patty, black garlic aioli, crispy shallots, daikon slaw, brioche bun",
    price: "£22",
    image:
      "https://images.pexels.com/photos/1639557/pexels-photo-1639557.jpeg?auto=compress&cs=tinysrgb&w=800",
    alt: "A stacked Wagyu burger with crispy shallots",
    tag: "Chef's Pick",
  },
  {
    name: "Miso Glazed Salmon",
    description:
      "Saikyo miso, 48-hour marinade, charred pak choi, ponzu butter, pickled ginger",
    price: "£24",
    image:
      "https://images.pexels.com/photos/3655916/pexels-photo-3655916.jpeg?auto=compress&cs=tinysrgb&w=800",
    alt: "Miso glazed salmon fillet with pak choi",
    tag: null,
  },
  {
    name: "Truffle Pork Belly Ramen",
    description:
      "Slow-braised belly, black truffle dashi, soft-boiled egg, nori, spring onion",
    price: "£19",
    image:
      "https://images.pexels.com/photos/7492300/pexels-photo-7492300.jpeg?auto=compress&cs=tinysrgb&w=800",
    alt: "Rich pork belly ramen with truffle broth",
    tag: "Most Loved",
  },
  {
    name: "Crispy Duck Gyoza",
    description:
      "Confit duck, five-spice, hoisin dipping sauce, cucumber & spring onion",
    price: "£13",
    image:
      "https://images.pexels.com/photos/8584426/pexels-photo-8584426.jpeg?auto=compress&cs=tinysrgb&w=800",
    alt: "Crispy pan-fried gyoza dumplings",
    tag: null,
  },
  {
    name: "Yuzu Burnt Cheesecake",
    description:
      "Basque-style, yuzu curd centre, ginger digestive base, sesame brittle",
    price: "£9",
    image:
      "https://images.pexels.com/photos/1126359/pexels-photo-1126359.jpeg?auto=compress&cs=tinysrgb&w=800",
    alt: "Yuzu burnt cheesecake with sesame brittle",
    tag: null,
  },
  {
    name: "Tempura King Prawns",
    description:
      "Hand-dipped dashi batter, togarashi chilli mayo, micro shiso, lemon",
    price: "£16",
    image:
      "https://images.pexels.com/photos/2098131/pexels-photo-2098131.jpeg?auto=compress&cs=tinysrgb&w=800",
    alt: "Golden tempura king prawns with chilli mayo",
    tag: null,
  },
];

export default function MenuHighlights() {
  return (
    <section
      id="menu"
      className="bg-charcoal py-20 sm:py-28 lg:py-36"
      aria-label="Signature dishes"
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
        {/* Section header */}
        <Reveal className="text-center mb-14 sm:mb-18">
          <p className="text-ember text-xs tracking-[0.3em] uppercase font-semibold mb-4">
            The Menu
          </p>
          <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl text-cream font-bold">
            Signature Dishes
          </h2>
          <p className="text-cream/50 text-sm mt-4 max-w-md mx-auto leading-relaxed">
            Every plate tells a story. Crafted from seasonal British produce and
            elevated with Eastern technique.
          </p>
        </Reveal>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {dishes.map((dish, i) => (
            <Reveal
              key={dish.name}
              delay={((i % 3) as 0 | 1 | 2 | 3)}
            >
              <article className="group relative bg-charcoal-mid border border-cream/10 rounded-2xl overflow-hidden transition-all duration-400 hover:-translate-y-2 hover:border-ember/40 hover:shadow-[0_20px_60px_rgba(201,137,45,0.15)]">
                {/* Image */}
                <div className="relative h-52 sm:h-56 overflow-hidden">
                  <Image
                    src={dish.image}
                    alt={dish.alt}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-charcoal-mid/60 to-transparent" />
                  {dish.tag && (
                    <span className="absolute top-4 left-4 bg-ember text-charcoal-deep text-xs font-semibold px-3 py-1 rounded-full tracking-wide">
                      {dish.tag}
                    </span>
                  )}
                </div>

                {/* Content */}
                <div className="p-5 sm:p-6">
                  <div className="flex items-start justify-between gap-3 mb-3">
                    <h3 className="font-display text-lg sm:text-xl text-cream font-semibold leading-snug">
                      {dish.name}
                    </h3>
                    <span className="text-ember font-bold text-lg shrink-0">
                      {dish.price}
                    </span>
                  </div>
                  <p className="text-cream/55 text-sm leading-relaxed">
                    {dish.description}
                  </p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        {/* CTA */}
        <Reveal className="text-center mt-14">
          <a
            href="#book"
            className="inline-block border border-ember/60 hover:border-ember text-ember hover:text-cream text-sm tracking-widest uppercase font-medium px-8 py-4 rounded-full transition-all duration-300 hover:bg-ember"
          >
            Reserve Your Table
          </a>
        </Reveal>
      </div>
    </section>
  );
}
