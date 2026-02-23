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
    <section id="feliratkozas" className="relative bg-white py-[var(--section-py)] overflow-hidden">
      <div className="relative z-10 mx-auto max-w-[1100px] px-6 md:px-8">
        <AnimateOnScroll>
          <div className="text-center mb-10 md:mb-14">
            <p className="font-body text-[12px] font-semibold uppercase tracking-[0.1em] text-green mb-5">
              Csatlakozz
            </p>
            <h2 className="font-body font-bold text-[26px] md:text-[36px] lg:text-[42px] leading-[1.1] tracking-[-0.02em] text-navy mb-5">
              Légy az elsők között.
            </h2>
            <p className="font-body text-[15px] text-text-light max-w-[460px] mx-auto leading-[1.7]">
              Az AI Ready 2026 októberében indul. A várólista tagjai elsőként
              értesülnek, és kedvezményes áron csatlakozhatnak.
            </p>
          </div>
        </AnimateOnScroll>

        <AnimateOnScroll>
          <div className="mx-auto max-w-[440px]">
            <div className="rounded-2xl bg-surface p-8 md:p-10 border border-black/[0.04] shadow-layered">
              {!isSubmitted ? (
                <>
                  <ul className="space-y-3 mb-8">
                    {WAITLIST_BENEFITS.map((benefit) => (
                      <li key={benefit.text} className="flex items-center gap-3">
                        <span className="text-[15px] shrink-0">{benefit.icon}</span>
                        <span className="font-body text-[13px] text-text/70">{benefit.text}</span>
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
                      className={`w-full px-4 py-3.5 rounded-xl border text-[14px] font-body bg-white transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-green/20 focus:border-green ${
                        error ? "border-red-soft/40" : "border-black/[0.08]"
                      }`}
                    />
                    {error && (
                      <p className="font-body text-[12px] text-red-soft mt-1.5 ml-1">{error}</p>
                    )}

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full mt-3 inline-flex items-center justify-center gap-2 rounded-xl bg-green px-6 py-3.5 font-body text-[14px] font-semibold text-white hover:-translate-y-0.5 transition-all duration-200 shadow-[0_2px_8px_rgba(45,138,94,0.2)] disabled:opacity-50 disabled:hover:translate-y-0"
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
                    </button>

                    <p className="font-body text-[11px] text-text-light/40 text-center mt-4">
                      Nem küldünk spam-et · Bármikor leiratkozhatsz
                    </p>
                  </form>
                </>
              ) : (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, ease: [0.25, 1, 0.5, 1] }}
                  className="text-center py-6"
                >
                  <div className="w-14 h-14 rounded-full bg-green/10 flex items-center justify-center mx-auto mb-4">
                    <CheckCircle2 size={28} className="text-green" strokeWidth={1.5} />
                  </div>
                  <h3 className="font-body font-bold text-[20px] text-navy mb-2">
                    Köszi! Feliratkoztál.
                  </h3>
                  <p className="font-body text-[14px] text-text-light leading-[1.7]">
                    Nézd meg az email fiókodat —<br />küldtünk egy megerősítő levelet.
                  </p>
                </motion.div>
              )}
            </div>
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
}
