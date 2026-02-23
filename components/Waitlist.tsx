"use client";

import { useState, type FormEvent } from "react";
import { Loader2, CheckCircle2, ArrowRight } from "lucide-react";
import { WAITLIST_BENEFITS } from "@/lib/constants";
import { AnimateOnScroll } from "./AnimateOnScroll";

export function Waitlist() {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!email.trim()) { setError("Kérlek, add meg az email címedet."); return; }
    if (!email.includes("@") || !email.includes(".")) { setError("Kérlek, adj meg érvényes email címet."); return; }
    setError("");
    setIsSubmitting(true);
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setIsSubmitting(false);
    setIsSubmitted(true);
  };

  return (
    <section id="feliratkozas" className="relative bg-cream-light py-[var(--section-py)] overflow-hidden">
      <div className="absolute top-[30%] left-[50%] -translate-x-1/2 w-[600px] h-[600px] rounded-full bg-green/[0.04] blur-[150px]" />
      <div className="absolute inset-0 grain" />

      <div className="relative z-10 mx-auto max-w-[1200px] px-6 md:px-10">
        <AnimateOnScroll>
          <div className="text-center mb-12 md:mb-16">
            <span className="section-label justify-center">Csatlakozz</span>
            <h2 className="font-heading font-bold text-[28px] md:text-[40px] lg:text-[48px] leading-[1.1] text-navy mb-5">
              Légy az elsők között.
            </h2>
            <p className="font-body text-[15px] md:text-[17px] text-text-light max-w-[520px] mx-auto leading-[1.7]">
              Az AI Ready 2026 októberében indul. A várólista tagjai elsőként
              értesülnek, és kedvezményes áron csatlakozhatnak.
            </p>
          </div>
        </AnimateOnScroll>

        <AnimateOnScroll>
          <div className="mx-auto max-w-[500px] relative">
            {/* Decorative glow */}
            <div className="absolute -inset-1 rounded-[28px] bg-gradient-to-br from-green/20 via-transparent to-gold/10 blur-sm" />

            <div className="relative bg-white rounded-[24px] p-8 md:p-10 border border-cream-dark/60 shadow-[0_4px_20px_rgba(10,22,40,0.04),0_20px_60px_rgba(45,138,94,0.08)]">
              {!isSubmitted ? (
                <>
                  <h3 className="font-heading font-bold text-[22px] text-navy text-center mb-2">
                    Várólista
                  </h3>
                  <p className="font-body text-[13px] text-text-light text-center mb-8">
                    Iratkozz fel most, és megkapod:
                  </p>

                  <ul className="space-y-3 mb-8">
                    {WAITLIST_BENEFITS.map((benefit) => (
                      <li key={benefit.text} className="flex items-center gap-3">
                        <span className="text-[16px] shrink-0">{benefit.icon}</span>
                        <span className="font-body text-[14px] text-text/80">{benefit.text}</span>
                      </li>
                    ))}
                  </ul>

                  <form onSubmit={handleSubmit} noValidate>
                    <label htmlFor="waitlist-email" className="sr-only">Email cím</label>
                    <input
                      id="waitlist-email"
                      type="email"
                      value={email}
                      onChange={(e) => { setEmail(e.target.value); if (error) setError(""); }}
                      placeholder="Az email címed"
                      autoComplete="email"
                      className={`w-full px-5 py-4 rounded-xl border text-[15px] font-body bg-cream-light/50 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-green/20 focus:border-green focus:bg-white ${
                        error ? "border-red-soft/60" : "border-cream-dark"
                      }`}
                    />
                    {error && (
                      <p className="font-body text-[13px] text-red-soft mt-2 ml-1">{error}</p>
                    )}

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full mt-3 btn-primary justify-center disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:transform-none"
                    >
                      {isSubmitting ? (
                        <>
                          <Loader2 size={16} className="animate-spin" />
                          Feliratkozás...
                        </>
                      ) : (
                        <>
                          Feliratkozom a várólistára
                          <ArrowRight size={15} />
                        </>
                      )}
                    </button>

                    <p className="font-body text-[11px] text-text-light/50 text-center mt-4 tracking-wide">
                      Nem küldünk spam-et · Bármikor leiratkozhatsz
                    </p>
                  </form>
                </>
              ) : (
                <div className="text-center py-8">
                  <div className="w-16 h-16 rounded-full bg-green/10 flex items-center justify-center mx-auto mb-5">
                    <CheckCircle2 size={32} className="text-green" strokeWidth={1.5} />
                  </div>
                  <h3 className="font-heading font-bold text-[24px] text-navy mb-3">
                    Köszi! Feliratkoztál.
                  </h3>
                  <p className="font-body text-[15px] text-text-light leading-[1.7]">
                    Nézd meg az email fiókodat —<br />küldtünk egy megerősítő levelet.
                  </p>
                </div>
              )}
            </div>
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
}
