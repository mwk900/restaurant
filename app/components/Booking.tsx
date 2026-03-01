"use client";

import { useState, FormEvent } from "react";
import Reveal from "./Reveal";

type FormState = {
  name: string;
  phone: string;
  date: string;
  time: string;
  guests: string;
  notes: string;
};

const initialForm: FormState = {
  name: "",
  phone: "",
  date: "",
  time: "",
  guests: "2",
  notes: "",
};

export default function Booking() {
  const [form, setForm] = useState<FormState>(initialForm);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const inputClass =
    "w-full bg-white/5 border border-cream/15 focus:border-ember focus:outline-none text-cream placeholder:text-cream/30 rounded-lg px-4 py-3.5 text-sm transition-colors duration-200";

  const labelClass = "block text-cream/60 text-xs tracking-widest uppercase font-medium mb-2";

  return (
    <section
      id="book"
      className="bg-charcoal-deep py-20 sm:py-28 lg:py-36"
      aria-label="Table reservation"
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          {/* Left: text */}
          <Reveal>
            <p className="text-ember text-xs tracking-[0.3em] uppercase font-semibold mb-4">
              Reservations
            </p>
            <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl text-cream font-bold leading-tight mb-8">
              Reserve Your{" "}
              <span className="italic text-ember-light">Evening</span>
            </h2>
            <p className="text-cream/55 text-base sm:text-lg leading-relaxed mb-8">
              Whether it&apos;s a quiet dinner for two or a celebration with
              friends, we&apos;ll have your table ready. We recommend booking at
              least 48 hours in advance for weekend dining.
            </p>

            <div className="space-y-5 border-t border-cream/10 pt-8">
              {[
                { icon: "📞", label: "Phone", value: "0115 000 0000", href: "tel:01150000000" },
                { icon: "✉️", label: "Email", value: "hello@emberandeast.co.uk", href: "mailto:hello@emberandeast.co.uk" },
                { icon: "📍", label: "Address", value: "14 Pelham Street, Nottingham, NG1 2EG", href: null },
              ].map((item) => (
                <div key={item.label} className="flex items-start gap-4">
                  <span className="text-xl mt-0.5" aria-hidden="true">{item.icon}</span>
                  <div>
                    <p className="text-cream/40 text-xs tracking-widest uppercase mb-0.5">
                      {item.label}
                    </p>
                    {item.href ? (
                      <a
                        href={item.href}
                        className="text-cream/80 hover:text-ember text-sm transition-colors"
                      >
                        {item.value}
                      </a>
                    ) : (
                      <p className="text-cream/80 text-sm">{item.value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </Reveal>

          {/* Right: form */}
          <Reveal delay={1}>
            {submitted ? (
              <div className="bg-white/5 border border-ember/30 rounded-2xl p-10 text-center">
                <div className="text-5xl mb-6">🍽️</div>
                <h3 className="font-display text-2xl text-cream font-semibold mb-3">
                  Your table awaits
                </h3>
                <p className="text-cream/60 text-sm leading-relaxed mb-6">
                  Thank you, {form.name}. We&apos;ve received your reservation
                  request and will confirm via phone within a few hours.
                </p>
                <button
                  onClick={() => { setSubmitted(false); setForm(initialForm); }}
                  className="text-ember text-sm hover:text-ember-light transition-colors underline underline-offset-4"
                >
                  Make another reservation
                </button>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="bg-white/3 border border-cream/10 rounded-2xl p-6 sm:p-8 space-y-5"
                noValidate
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="name" className={labelClass}>
                      Full Name
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      autoComplete="name"
                      placeholder="Jane Smith"
                      value={form.name}
                      onChange={handleChange}
                      className={inputClass}
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className={labelClass}>
                      Phone Number
                    </label>
                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      required
                      autoComplete="tel"
                      placeholder="07700 000000"
                      value={form.phone}
                      onChange={handleChange}
                      className={inputClass}
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="date" className={labelClass}>
                      Date
                    </label>
                    <input
                      id="date"
                      name="date"
                      type="date"
                      required
                      value={form.date}
                      onChange={handleChange}
                      className={inputClass}
                    />
                  </div>
                  <div>
                    <label htmlFor="time" className={labelClass}>
                      Time
                    </label>
                    <input
                      id="time"
                      name="time"
                      type="time"
                      required
                      value={form.time}
                      onChange={handleChange}
                      className={inputClass}
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="guests" className={labelClass}>
                    Party Size
                  </label>
                  <select
                    id="guests"
                    name="guests"
                    value={form.guests}
                    onChange={handleChange}
                    className={`${inputClass} cursor-pointer`}
                  >
                    {[1, 2, 3, 4, 5, 6, 7, 8].map((n) => (
                      <option key={n} value={n} className="bg-charcoal text-cream">
                        {n} {n === 1 ? "guest" : "guests"}
                      </option>
                    ))}
                    <option value="9+" className="bg-charcoal text-cream">
                      9+ guests — please call us
                    </option>
                  </select>
                </div>

                <div>
                  <label htmlFor="notes" className={labelClass}>
                    Special Requests{" "}
                    <span className="text-cream/30 normal-case tracking-normal">
                      (optional)
                    </span>
                  </label>
                  <textarea
                    id="notes"
                    name="notes"
                    rows={3}
                    placeholder="Allergies, dietary requirements, celebrations..."
                    value={form.notes}
                    onChange={handleChange}
                    className={`${inputClass} resize-none`}
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-ember hover:bg-ember-light text-charcoal-deep font-semibold text-sm tracking-widest uppercase py-4 rounded-full transition-colors duration-200 mt-2"
                >
                  Request Reservation
                </button>

                <p className="text-center text-cream/30 text-xs">
                  We&apos;ll confirm your booking by phone within 2 hours.
                </p>
              </form>
            )}
          </Reveal>
        </div>
      </div>
    </section>
  );
}
