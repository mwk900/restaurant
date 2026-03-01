"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";

export default function Hero() {
  const imgRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => {
      if (imgRef.current) {
        imgRef.current.style.transform = `translateY(${window.scrollY * 0.4}px)`;
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section
      id="hero"
      className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden"
      aria-label="Hero"
    >
      {/* Parallax background image */}
      <div
        ref={imgRef}
        className="absolute inset-0 scale-110 will-change-transform"
      >
        <Image
          src="https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=1200"
          alt="Beautifully presented dishes at Ember & East"
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
      </div>

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-charcoal/60 via-charcoal/50 to-charcoal/80" />

      {/* Content */}
      <div className="relative z-10 text-center px-5 max-w-4xl mx-auto">
        <p className="text-ember text-xs sm:text-sm tracking-[0.35em] uppercase font-medium mb-6 sm:mb-8">
          British-Asian Fusion &nbsp;·&nbsp; Nottingham
        </p>

        <h1 className="font-display text-6xl sm:text-8xl lg:text-[9rem] text-cream font-bold leading-none tracking-tight mb-6 sm:mb-8">
          Ember
          <br />
          <span className="italic text-ember-light">&amp;</span>
          <span className="text-cream"> East</span>
        </h1>

        <p className="text-cream/80 text-base sm:text-xl font-light max-w-xl mx-auto mb-10 sm:mb-12 leading-relaxed">
          Where bold Eastern flavours meet the soulful warmth of Britain
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#menu"
            className="inline-block border border-cream/50 hover:border-cream text-cream text-sm font-medium tracking-widest uppercase px-8 py-4 rounded-full transition-all duration-300 hover:bg-cream/10"
          >
            View Menu
          </a>
          <a
            href="#book"
            className="inline-block bg-ember hover:bg-ember-light text-charcoal-deep text-sm font-semibold tracking-widest uppercase px-8 py-4 rounded-full transition-colors duration-300"
          >
            Book a Table
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-cream/40">
        <span className="text-xs tracking-widest uppercase">Scroll</span>
        <div className="w-px h-10 bg-gradient-to-b from-cream/40 to-transparent" />
      </div>
    </section>
  );
}
