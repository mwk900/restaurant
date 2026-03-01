import Image from "next/image";
import Reveal from "./Reveal";

export default function About() {
  return (
    <section
      id="story"
      className="bg-cream text-charcoal py-20 sm:py-28 lg:py-36 overflow-hidden"
      aria-label="Our story"
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Text */}
          <div>
            <Reveal>
              <p className="text-ember text-xs tracking-[0.3em] uppercase font-semibold mb-4">
                Our Story
              </p>
              <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-8 text-charcoal">
                Forged in fire.{" "}
                <span className="italic text-ember">Rooted in two worlds.</span>
              </h2>
            </Reveal>

            <Reveal delay={1}>
              <p className="text-charcoal/75 text-base sm:text-lg leading-relaxed mb-6">
                Ember &amp; East was born from a simple obsession: what happens
                when the precision of Japanese and Korean cooking meets the
                heartiness of British tradition? Head chef Mia Tanaka spent a
                decade moving between London restaurants and her family&apos;s
                kitchen in Osaka before arriving in Nottingham with a vision.
              </p>
              <p className="text-charcoal/75 text-base sm:text-lg leading-relaxed mb-10">
                Our dishes don&apos;t compromise — they marry. Black garlic
                meets Hereford beef. Dashi broths embrace locally sourced root
                vegetables. Every plate is a quiet conversation between two
                culinary cultures, refined through flame and craft.
              </p>
            </Reveal>

            <Reveal delay={2}>
              <div className="grid grid-cols-3 gap-4 border-t border-charcoal/15 pt-8">
                {[
                  { stat: "Est.", value: "2019" },
                  { stat: "Location", value: "Nottingham" },
                  { stat: "Rosettes", value: "2 AA" },
                ].map((item) => (
                  <div key={item.stat}>
                    <p className="text-ember text-xs tracking-widest uppercase font-semibold mb-1">
                      {item.stat}
                    </p>
                    <p className="font-display text-2xl sm:text-3xl font-bold text-charcoal">
                      {item.value}
                    </p>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>

          {/* Image */}
          <Reveal delay={1} className="relative">
            <div className="relative h-[480px] sm:h-[560px] lg:h-[640px] rounded-2xl overflow-hidden">
              <Image
                src="https://images.pexels.com/photos/941861/pexels-photo-941861.jpeg?auto=compress&cs=tinysrgb&w=1200"
                alt="Warm, candlelit interior of Ember & East restaurant"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              {/* Decorative amber border */}
              <div className="absolute inset-0 ring-1 ring-inset ring-ember/20 rounded-2xl" />
            </div>
            {/* Floating accent card */}
            <div className="absolute -bottom-6 -left-6 bg-charcoal text-cream px-6 py-4 rounded-xl shadow-xl hidden sm:block">
              <p className="font-display text-3xl font-bold text-ember">4.9</p>
              <p className="text-cream/60 text-xs tracking-wider mt-0.5">
                ★★★★★ on Google
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
