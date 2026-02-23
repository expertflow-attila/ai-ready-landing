"use client";

import { useState, type FormEvent } from "react";
import { Loader2, CheckCircle2 } from "lucide-react";
import { WAITLIST_BENEFITS } from "@/lib/constants";
import { AnimateOnScroll } from "./AnimateOnScroll";

export function Waitlist() {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    if (!email.trim()) {
      setError("Kérlek, add meg az email címedet.");
      return;
    }

    if (!email.includes("@") || !email.includes(".")) {
      setError("Kérlek, adj meg érvényes email címet.");
      return;
    }

    setError("");
    setIsSubmitting(true);

    // Mock API call — 1.5s delay
    await new Promise((resolve) => setTimeout(resolve, 1500));

    setIsSubmitting(false);
    setIsSubmitted(true);
  };

  return (
    <section id="feliratkozas" className="bg-cream py-[var(--section-padding-y)]">
      <div className="mx-auto max-w-[1200px] px-5 md:px-10">
        <AnimateOnScroll>
          <div className="text-center mb-10">
            <p className="font-body text-xs uppercase tracking-[0.08em] text-green mb-4">
              CSATLAKOZZ
            </p>
            <h2 className="font-heading font-bold text-2xl md:text-[40px] leading-[1.2] text-navy mb-4">
              Légy az elsők között.
            </h2>
            <p className="font-body text-[17px] text-text-light max-w-[600px] mx-auto">
              Az AI Ready 2026 októberében indul. A várólista tagjai elsőként
              értesülnek, és kedvezményes áron csatlakozhatnak.
            </p>
          </div>
        </AnimateOnScroll>

        <AnimateOnScroll>
          <div className="mx-auto max-w-[520px] bg-white border-2 border-green rounded-[20px] p-8 md:p-12 shadow-[0_20px_60px_rgba(45,138,94,0.12)] animate-pulse-shadow">
            {!isSubmitted ? (
              <>
                <h3 className="font-body text-2xl font-bold text-navy text-center mb-6">
                  Várólista
                </h3>

                <p className="font-body text-[15px] text-text mb-4">
                  Iratkozz fel most, és megkapod:
                </p>

                <ul className="space-y-2 mb-8">
                  {WAITLIST_BENEFITS.map((benefit) => (
                    <li
                      key={benefit.text}
                      className="flex items-start gap-2 font-body text-[15px] text-text"
                    >
                      <span className="shrink-0">{benefit.icon}</span>
                      <span>{benefit.text}</span>
                    </li>
                  ))}
                </ul>

                <form onSubmit={handleSubmit} noValidate>
                  <label htmlFor="waitlist-email" className="sr-only">
                    Email cím
                  </label>
                  <input
                    id="waitlist-email"
                    type="email"
                    value={email}
                    onChange={(e) => {
                      setEmail(e.target.value);
                      if (error) setError("");
                    }}
                    placeholder="Az email címed"
                    autoComplete="email"
                    className={`w-full px-4 py-4 rounded-lg border text-base font-body transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-green/30 focus:border-green ${
                      error
                        ? "border-red-soft"
                        : "border-cream-dark"
                    }`}
                  />

                  {error && (
                    <p className="font-body text-sm text-red-soft mt-2">
                      {error}
                    </p>
                  )}

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full mt-3 inline-flex items-center justify-center rounded-lg bg-green px-8 py-4 font-body text-[15px] font-bold uppercase tracking-[0.04em] text-white transition-all duration-300 hover:bg-green-light hover:scale-[1.02] disabled:opacity-60 disabled:cursor-not-allowed disabled:hover:scale-100"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 size={18} className="animate-spin mr-2" />
                        Feliratkozás...
                      </>
                    ) : (
                      "Feliratkozom a várólistára →"
                    )}
                  </button>

                  <p className="font-body text-[13px] text-text-light text-center mt-3">
                    🔒 Nem küldünk spam-et. Bármikor leiratkozhatsz.
                  </p>
                </form>
              </>
            ) : (
              <div className="text-center py-6">
                <CheckCircle2
                  size={48}
                  className="text-green mx-auto mb-4"
                  strokeWidth={1.5}
                />
                <h3 className="font-heading font-bold text-2xl text-navy mb-2">
                  🎉 Köszi! Feliratkoztál a várólistára.
                </h3>
                <p className="font-body text-base text-text-light">
                  Nézd meg az email fiókodat — küldtünk egy megerősítő levelet.
                </p>
              </div>
            )}
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
}
