"use client";

import { ArrowRight, ChevronDown } from "lucide-react";
import { motion } from "motion/react";
import { HERO_STATS } from "@/lib/constants";

export function Hero() {
  return (
    <section className="relative min-h-screen min-h-[100dvh] flex items-center justify-center section-hero overflow-hidden">
      {/* Bottom gradient fade to next section */}
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-surface-0 to-transparent" />

      <div className="relative z-10 mx-auto max-w-[900px] px-6 md:px-8 text-center pt-[120px] pb-24">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="mb-10"
        >
          <span className="inline-flex items-center gap-2.5 rounded-full border border-white/[0.08] bg-white/[0.03] px-5 py-2.5 font-body text-[11px] font-semibold uppercase tracking-[0.14em] text-dt-secondary">
            <span className="relative flex h-1.5 w-1.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green opacity-75" />
              <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-green" />
            </span>
            AI Ready · Online kurzus · 2026 október
          </span>
        </motion.div>

        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="font-heading font-bold leading-[0.95] tracking-[-0.03em] mb-8"
          style={{ fontSize: "clamp(2.8rem, 2rem + 5.5vw, 5rem)", textWrap: "balance" }}
        >
          <span className="text-white">Készülj fel az</span>
          <br />
          <span className="text-gradient">AI-korszakra.</span>
          <br />
          <span className="italic font-normal text-dt-tertiary" style={{ fontSize: "0.65em" }}>
            Egyedül is.
          </span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
          className="font-body text-[16px] md:text-[18px] font-light leading-[1.75] text-dt-secondary max-w-[460px] mx-auto mb-12"
          style={{ textWrap: "pretty" }}
        >
          10 hét, 10 modul. Nem programozást tanulsz — hanem azt,
          hogyan dolgozzon az AI <span className="text-green-light font-medium">helyetted.</span>
        </motion.p>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="mb-20"
        >
          <a href="#feliratkozas" className="btn-primary text-[15px]">
            Feliratkozom a várólistára
            <ArrowRight size={16} />
          </a>
          <p className="font-body text-[12px] text-dt-muted mt-5 tracking-wide">
            Ingyenes · Nem küldünk spam-et · Elsőként értesülsz
          </p>
        </motion.div>

        {/* Stats bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.55, ease: [0.16, 1, 0.3, 1] }}
          className="inline-flex flex-col sm:flex-row items-center rounded-2xl border border-white/[0.06] bg-surface-1/60 overflow-hidden"
        >
          {HERO_STATS.map((stat, i) => (
            <div
              key={stat.label}
              className={`px-8 py-5 text-center${i < HERO_STATS.length - 1 ? " sm:border-r sm:border-white/[0.06]" : ""}`}
            >
              <span className="block font-heading font-bold text-[36px] leading-none tracking-[-0.04em] text-green">
                {stat.value}
              </span>
              <span className="block font-body text-[11px] text-dt-tertiary mt-2 tracking-wide uppercase">
                {stat.label}
              </span>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.6 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <ChevronDown size={18} className="text-dt-muted" strokeWidth={1.5} />
        </motion.div>
      </motion.div>
    </section>
  );
}
