import Image from "next/image";

const images = [
  {
    src: "https://images.pexels.com/photos/941861/pexels-photo-941861.jpeg?auto=compress&cs=tinysrgb&w=1200",
    alt: "Warm candlelit dining room at Ember & East",
    className: "col-span-2 row-span-2",
  },
  {
    src: "https://images.pexels.com/photos/67468/pexels-photo-67468.jpeg?auto=compress&cs=tinysrgb&w=800",
    alt: "Elegantly set tables ready for evening service",
    className: "col-span-1 row-span-1",
  },
  {
    src: "https://images.pexels.com/photos/260922/pexels-photo-260922.jpeg?auto=compress&cs=tinysrgb&w=800",
    alt: "The intimate bar area at Ember & East",
    className: "col-span-1 row-span-1",
  },
  {
    src: "https://images.pexels.com/photos/6662510/pexels-photo-6662510.jpeg?auto=compress&cs=tinysrgb&w=1200",
    alt: "Private dining experience at Ember & East",
    className: "col-span-2 row-span-1",
  },
];

export default function Gallery() {
  return (
    <section
      id="gallery"
      className="bg-charcoal-deep py-0 overflow-hidden"
      aria-label="Restaurant ambience gallery"
    >
      {/* Thin amber divider */}
      <div className="h-px bg-gradient-to-r from-transparent via-ember/50 to-transparent" />

      {/* Desktop: masonry-style grid */}
      <div className="hidden sm:grid grid-cols-4 grid-rows-3 h-[600px] lg:h-[700px]">
        {images.map((img) => (
          <div
            key={img.src}
            className={`relative overflow-hidden ${img.className}`}
          >
            <Image
              src={img.src}
              alt={img.alt}
              fill
              className="object-cover transition-transform duration-700 hover:scale-105"
              sizes="(max-width: 1024px) 50vw, 33vw"
            />
            <div className="absolute inset-0 bg-charcoal/10 hover:bg-transparent transition-colors duration-300" />
          </div>
        ))}
      </div>

      {/* Mobile: horizontal scroll strip */}
      <div className="sm:hidden flex overflow-x-auto snap-x snap-mandatory">
        {images.map((img) => (
          <div
            key={img.src}
            className="relative shrink-0 w-[85vw] h-[280px] snap-start first:ml-0"
          >
            <Image
              src={img.src}
              alt={img.alt}
              fill
              className="object-cover"
              sizes="85vw"
            />
          </div>
        ))}
      </div>

      <div className="h-px bg-gradient-to-r from-transparent via-ember/50 to-transparent" />
    </section>
  );
}
