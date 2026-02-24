"use client";

import { useState, type FormEvent } from "react";
import { Loader2, CheckCircle2, ArrowRight } from "lucide-react";
import { motion } from "motion/react";
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
    <section id="feliratkozas" className="relative bg-bg-subtle py-[var(--section-py)] overflow-hidden">
      <div className="divider absolute top-0 left-0 right-0" />

      {/* Subtle radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full bg-accent-subtle blur-[100px] pointer-events-none" />

      <div className="relative z-10 mx-auto max-w-[1100px] px-6 md:px-8">
        <AnimateOnScroll>
          <div className="text-center mb-10 md:mb-14">
            <span className="inline-flex items-center gap-2 font-body text-[11px] font-semibold uppercase tracking-[0.14em] text-accent mb-6">
              <span className="w-6 h-px bg-accent/40" />
              Csatlakozz
              <span className="w-6 h-px bg-accent/40" />
            </span>
            <h2
              className="font-heading font-bold text-[28px] md:text-[40px] lg:text-[48px] leading-[1.05] tracking-[-0.02em] text-text-primary mb-5"
              style={{ textWrap: "balance" }}
            >
              Légy az elsők között.
            </h2>
            <p className="font-body text-[15px] text-text-tertiary max-w-[460px] mx-auto leading-[1.7]" style={{ textWrap: "pretty" }}>
              Az AI Ready 2026 októberében indul. A várólista tagjai elsőként
              értesülnek, és kedvezményes áron csatlakozhatnak.
            </p>
          </div>
        </AnimateOnScroll>

        <AnimateOnScroll>
          <div className="mx-auto max-w-[440px]">
            <div className="border-glow">
              <div className="bg-bg-base rounded-[19px] p-8 md:p-10">
                {!isSubmitted ? (
                  <>
                    <ul className="space-y-3 mb-8">
                      {WAITLIST_BENEFITS.map((benefit) => (
                        <li key={benefit.text} className="flex items-center gap-3">
                          <span className="text-[15px] shrink-0">{benefit.icon}</span>
                          <span className="font-body text-[13px] text-text-secondary">{benefit.text}</span>
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
                        className={`w-full px-4 py-3.5 rounded-xl border text-[14px] font-body bg-bg-subtle text-text-primary placeholder:text-text-disabled transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-accent/30 focus:border-accent/40 ${
                          error ? "border-red-soft/40" : "border-border-default"
                        }`}
                      />
                      {error && (
                        <p className="font-body text-[12px] text-red-soft mt-1.5 ml-1">{error}</p>
                      )}

                      <motion.button
                        type="submit"
                        disabled={isSubmitting}
                        whileHover={{ scale: 1.01 }}
                        whileTap={{ scale: 0.98 }}
                        className="w-full mt-3 btn-primary justify-center disabled:opacity-50 disabled:hover:transform-none"
                      >
                        {isSubmitting ? (
                          <>
                            <Loader2 size={15} className="animate-spin" />
                            Feliratkozás...
                          </>
                        ) : (
                          <>
                            Feliratkozom a várólistára
                            <ArrowRight size={14} />
                          </>
                        )}
                      </motion.button>

                      <p className="font-body text-[11px] text-text-disabled text-center mt-4">
                        Nem küldünk spam-et · Bármikor leiratkozhatsz
                      </p>
                    </form>
                  </>
                ) : (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                    className="text-center py-6"
                  >
                    <div className="w-16 h-16 rounded-full bg-accent-subtle border border-accent/20 flex items-center justify-center mx-auto mb-5">
                      <CheckCircle2 size={30} className="text-accent" strokeWidth={1.5} />
                    </div>
                    <h3 className="font-heading font-bold text-[22px] text-text-primary mb-2">
                      Köszi! Feliratkoztál.
                    </h3>
                    <p className="font-body text-[14px] text-text-tertiary leading-[1.7]">
                      Nézd meg az email fiókodat —<br />küldtünk egy megerősítő levelet.
                    </p>
                  </motion.div>
                )}
              </div>
            </div>
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
}
