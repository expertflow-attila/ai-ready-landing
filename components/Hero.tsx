"use client";

import { ArrowRight, ChevronDown } from "lucide-react";
import { motion } from "motion/react";
import { HERO_STATS } from "@/lib/constants";

export function Hero() {
  return (
    <section className="relative min-h-screen min-h-[100dvh] flex items-center justify-center mesh-hero overflow-hidden">
      {/* Animated floating orbs */}
      <div className="absolute top-[20%] left-[15%] w-[300px] h-[300px] rounded-full bg-green/[0.12] blur-[120px] animate-float" />
      <div className="absolute bottom-[15%] right-[10%] w-[250px] h-[250px] rounded-full bg-gold/[0.08] blur-[100px] animate-float" style={{ animationDelay: "-2s" }} />
      <div className="absolute top-[60%] left-[60%] w-[200px] h-[200px] rounded-full bg-emerald/[0.06] blur-[80px] animate-glow-pulse" />

      {/* Grain overlay */}
      <div className="absolute inset-0 grain" />

      {/* Grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: "linear-gradient(rgba(255,255,255,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.3) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <div className="relative z-10 mx-auto max-w-[1000px] px-6 md:px-8 text-center pt-[120px] pb-20">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 16, filter: "blur(8px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="mb-10"
        >
          <span className="inline-flex items-center gap-2.5 rounded-full border border-white/[0.08] bg-white/[0.04] backdrop-blur-xl px-5 py-2 font-body text-[11px] font-semibold uppercase tracking-[0.12em] text-white/50">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-green" />
            </span>
            AI Ready · Online kurzus · 2026 október
          </span>
        </motion.div>

        {/* Main heading */}
        <motion.h1
          initial={{ opacity: 0, y: 24, filter: "blur(8px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 1, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          className="font-heading font-bold leading-[0.95] tracking-[-0.03em] mb-8"
          style={{ fontSize: "clamp(2.8rem, 2rem + 6vw, 5.5rem)" }}
        >
          <span className="text-white">Készülj fel az</span>
          <br />
          <span className="text-gradient-hero">AI-korszakra.</span>
          <br />
          <span className="italic font-normal text-white/30" style={{ fontSize: "0.7em" }}>
            Egyedül is.
          </span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
          className="font-body text-[16px] md:text-[18px] font-light leading-[1.7] text-white/40 max-w-[480px] mx-auto mb-12"
        >
          10 hét, 10 modul. Nem programozást tanulsz — hanem azt,
          hogyan dolgozzon az AI <span className="text-gradient font-medium">helyetted.</span>
        </motion.p>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="mb-20"
        >
          <a href="#feliratkozas" className="btn-primary text-[15px]">
            Feliratkozom a várólistára
            <ArrowRight size={16} />
          </a>
          <p className="font-body text-[12px] text-white/20 mt-5 tracking-wide">
            Ingyenes · Nem küldünk spam-et · Elsőként értesülsz
          </p>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.65, ease: [0.16, 1, 0.3, 1] }}
          className="inline-flex flex-col sm:flex-row items-center rounded-2xl border border-white/[0.06] bg-white/[0.02] backdrop-blur-xl overflow-hidden"
        >
          {HERO_STATS.map((stat, i) => (
            <div
              key={stat.label}
              className={`px-8 py-5 text-center${i < HERO_STATS.length - 1 ? " sm:border-r sm:border-white/[0.06]" : ""}`}
            >
              <span className="block text-gradient font-heading font-bold text-[40px] leading-none tracking-[-0.04em]">
                {stat.value}
              </span>
              <span className="block font-body text-[11px] text-white/30 mt-2 tracking-wide uppercase">
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
        transition={{ delay: 1.2, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <ChevronDown size={20} className="text-white/15" strokeWidth={1.5} />
        </motion.div>
      </motion.div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-navy to-transparent" />
    </section>
  );
}
