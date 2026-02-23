"use client";

import { ArrowRight } from "lucide-react";
import { AnimateOnScroll } from "./AnimateOnScroll";

export function FinalCTA() {
  return (
    <section className="relative mesh-green overflow-hidden">
      {/* Animated glow orb */}
      <div className="absolute top-[30%] left-[20%] w-[300px] h-[300px] rounded-full bg-white/[0.04] blur-[100px] animate-glow-pulse" />
      <div className="absolute bottom-[20%] right-[15%] w-[200px] h-[200px] rounded-full bg-gold/[0.06] blur-[80px] animate-float" />
      <div className="absolute inset-0 grain" />
      <div className="divider-gradient absolute top-0 left-0 right-0" />

      <div className="relative z-10 mx-auto max-w-[700px] text-center px-6 md:px-8 py-[100px] md:py-[140px]">
        <AnimateOnScroll>
          <h2 className="font-heading font-bold text-[28px] md:text-[40px] lg:text-[52px] leading-[1.05] tracking-[-0.02em] text-white mb-5">
            Az AI nem vár.
            <br />
            <span className="font-normal text-white/40 italic">De segít — ha engeded.</span>
          </h2>
          <p className="font-body text-[16px] text-white/40 mb-12">
            10 hét. 10 rendszer. Egy döntés.
          </p>
          <a
            href="#feliratkozas"
            className="group inline-flex items-center gap-2.5 rounded-full bg-white px-10 py-5 font-body text-[15px] font-semibold text-navy hover:-translate-y-1 transition-all duration-400 shadow-[0_4px_20px_rgba(255,255,255,0.1),0_16px_60px_rgba(255,255,255,0.08)]"
          >
            Feliratkozom a várólistára
            <ArrowRight size={16} className="group-hover:translate-x-0.5 transition-transform duration-200" />
          </a>
          <p className="font-body text-[12px] text-white/20 mt-6">
            Ingyenes · 30 másodperc · Elsőként értesülsz
          </p>
        </AnimateOnScroll>
      </div>
    </section>
  );
}
