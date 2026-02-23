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
    <section id="feliratkozas" className="relative mesh-warm py-[var(--section-py)] overflow-hidden">
      <div className="absolute inset-0 grain" />
      <div className="divider-gradient absolute top-0 left-0 right-0" />

      <div className="relative z-10 mx-auto max-w-[1100px] px-6 md:px-8">
        <AnimateOnScroll>
          <div className="text-center mb-10 md:mb-14">
            <span className="inline-flex items-center gap-2 font-body text-[11px] font-semibold uppercase tracking-[0.12em] text-gold/60 mb-6">
              <span className="w-6 h-px bg-gold/30" />
              Csatlakozz
              <span className="w-6 h-px bg-gold/30" />
            </span>
            <h2 className="font-heading font-bold text-[28px] md:text-[40px] lg:text-[48px] leading-[1.05] tracking-[-0.02em] text-white mb-5">
              Légy az elsők között.
            </h2>
            <p className="font-body text-[15px] text-white/35 max-w-[460px] mx-auto leading-[1.7]">
              Az AI Ready 2026 októberében indul. A várólista tagjai elsőként
              értesülnek, és kedvezményes áron csatlakozhatnak.
            </p>
          </div>
        </AnimateOnScroll>

        <AnimateOnScroll>
          <div className="mx-auto max-w-[440px] relative">
            <div className="absolute -inset-6 rounded-3xl bg-green/[0.06] blur-[50px]" />
            <div className="relative gradient-border-card p-8 md:p-10 backdrop-blur-xl">
              {!isSubmitted ? (
                <>
                  <ul className="space-y-3 mb-8">
                    {WAITLIST_BENEFITS.map((benefit) => (
                      <li key={benefit.text} className="flex items-center gap-3">
                        <span className="text-[15px] shrink-0">{benefit.icon}</span>
                        <span className="font-body text-[13px] text-white/50">{benefit.text}</span>
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
                      className={`w-full px-4 py-3.5 rounded-xl border text-[14px] font-body bg-white/[0.04] text-white placeholder:text-white/25 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-green/30 focus:border-green/50 focus:bg-white/[0.06] ${
                        error ? "border-red-soft/40" : "border-white/[0.08]"
                      }`}
                    />
                    {error && (
                      <p className="font-body text-[12px] text-red-soft mt-1.5 ml-1">{error}</p>
                    )}

                    <button
                      type="submit"
                      disabled={isSubmitting}
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
                    </button>

                    <p className="font-body text-[11px] text-white/20 text-center mt-4">
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
                  <div className="w-16 h-16 rounded-full bg-green/15 border border-green/20 flex items-center justify-center mx-auto mb-5 glow-green">
                    <CheckCircle2 size={30} className="text-green-light" strokeWidth={1.5} />
                  </div>
                  <h3 className="font-heading font-bold text-[22px] text-white mb-2">
                    Köszi! Feliratkoztál.
                  </h3>
                  <p className="font-body text-[14px] text-white/40 leading-[1.7]">
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
