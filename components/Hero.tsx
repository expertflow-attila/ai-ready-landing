"use client";

import { ArrowRight } from "lucide-react";
import { motion } from "motion/react";
import { HERO_STATS } from "@/lib/constants";

export function Hero() {
  return (
    <section className="relative min-h-screen min-h-[100dvh] flex items-center justify-center bg-surface overflow-hidden">
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: "radial-gradient(ellipse 80% 50% at 50% 40%, rgba(45,138,94,0.035) 0%, transparent 70%)",
        }}
      />

      <div className="relative z-10 mx-auto max-w-[900px] px-6 md:px-8 text-center pt-[120px] pb-20">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.25, 1, 0.5, 1] }}
          className="mb-8"
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-navy/[0.08] bg-white px-4 py-1.5 font-body text-[11px] font-semibold uppercase tracking-[0.1em] text-text-light shadow-layered-sm">
            <span className="w-1.5 h-1.5 rounded-full bg-green" />
            Online kurzus · 2026 október
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.15, ease: [0.25, 1, 0.5, 1] }}
          className="font-heading font-bold leading-[1.0] tracking-[-0.03em] text-navy mb-7"
          style={{ fontSize: "clamp(2.5rem, 1.5rem + 5vw, 4.5rem)" }}
        >
          Készülj fel az
          <br />
          AI-korszakra.
          <br />
          <span className="italic font-normal text-green/80">Egyedül is.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3, ease: [0.25, 1, 0.5, 1] }}
          className="font-body text-[16px] md:text-[18px] font-light leading-[1.7] text-text-light max-w-[500px] mx-auto mb-10"
        >
          10 hét, 10 modul. Nem programozást tanulsz — hanem azt,
          hogyan dolgozzon az AI helyetted.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.45, ease: [0.25, 1, 0.5, 1] }}
          className="mb-16"
        >
          <a
            href="#feliratkozas"
            className="group inline-flex items-center gap-2.5 rounded-full bg-green px-8 py-4 font-body text-[14px] font-semibold text-white shadow-[0_2px_8px_rgba(45,138,94,0.2),0_8px_24px_rgba(45,138,94,0.15)] hover:shadow-[0_4px_12px_rgba(45,138,94,0.25),0_16px_40px_rgba(45,138,94,0.2)] hover:-translate-y-0.5 transition-all duration-300"
          >
            Feliratkozom a várólistára
            <ArrowRight size={15} className="group-hover:translate-x-0.5 transition-transform duration-200" />
          </a>
          <p className="font-body text-[12px] text-text-light/50 mt-4">
            Ingyenes · Nem küldünk spam-et · Elsőként értesülsz
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.6, ease: [0.25, 1, 0.5, 1] }}
          className="inline-flex flex-col sm:flex-row items-center divide-y sm:divide-y-0 sm:divide-x divide-navy/[0.06]"
        >
          {HERO_STATS.map((stat) => (
            <div key={stat.label} className="px-8 py-4 text-center">
              <span className="block font-body font-bold text-[36px] leading-none tracking-[-0.04em] text-navy">
                {stat.value}
              </span>
              <span className="block font-body text-[12px] text-text-light mt-1.5">
                {stat.label}
              </span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
