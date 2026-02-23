"use client";

import { ArrowRight } from "lucide-react";
import { AnimateOnScroll } from "./AnimateOnScroll";

export function FinalCTA() {
  return (
    <section className="relative bg-green overflow-hidden">
      <div className="relative z-10 mx-auto max-w-[700px] text-center px-6 md:px-8 py-[100px] md:py-[128px]">
        <AnimateOnScroll>
          <h2 className="font-body font-bold text-[26px] md:text-[36px] lg:text-[42px] leading-[1.1] tracking-[-0.02em] text-white mb-5">
            Az AI nem vár.
            <br />
            <span className="font-normal text-white/60">De segít — ha engeded.</span>
          </h2>
          <p className="font-body text-[15px] text-white/50 mb-10">
            10 hét. 10 rendszer. Egy döntés.
          </p>
          <a
            href="#feliratkozas"
            className="group inline-flex items-center gap-2.5 rounded-full bg-white px-8 py-4 font-body text-[14px] font-semibold text-green hover:-translate-y-0.5 transition-all duration-300 shadow-[0_4px_20px_rgba(0,0,0,0.1)]"
          >
            Feliratkozom a várólistára
            <ArrowRight size={15} className="group-hover:translate-x-0.5 transition-transform duration-200" />
          </a>
          <p className="font-body text-[12px] text-white/30 mt-5">
            Ingyenes · 30 másodperc · Elsőként értesülsz
          </p>
        </AnimateOnScroll>
      </div>
    </section>
  );
}
