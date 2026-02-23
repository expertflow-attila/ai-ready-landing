"use client";

import { PAIN_POINTS } from "@/lib/constants";
import { AnimateOnScroll } from "./AnimateOnScroll";

export function Problem() {
  return (
    <section id="mirol-szol" className="relative bg-navy py-[var(--section-py)] overflow-hidden">
      {/* Atmosphere */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] rounded-full bg-green/[0.03] blur-[150px]" />
      <div className="absolute bottom-0 right-0 w-[300px] h-[300px] rounded-full bg-gold/[0.03] blur-[100px]" />
      <div className="absolute inset-0 grain-dark" />

      <div className="relative z-10 mx-auto max-w-[1200px] px-6 md:px-10">
        <AnimateOnScroll>
          <div className="text-center mb-16 md:mb-20">
            <span className="section-label text-green/80 justify-center">Ismerős ez?</span>
            <h2 className="font-heading font-semibold text-[28px] md:text-[38px] lg:text-[44px] leading-[1.15] text-white max-w-[750px] mx-auto">
              Mindenki AI-ról beszél.
              <br />
              <span className="text-cream/50">Te meg ott ülsz, és nem tudod, hol kezdd.</span>
            </h2>
          </div>
        </AnimateOnScroll>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {PAIN_POINTS.map((point, i) => (
            <AnimateOnScroll key={point.title} delay={i * 100}>
              <div className="card-dark h-full group">
                <div className="w-14 h-14 rounded-xl bg-white/[0.04] border border-white/[0.06] flex items-center justify-center mb-6 group-hover:border-green/20 transition-colors duration-500">
                  <span className="text-[28px]">{point.icon}</span>
                </div>
                <h3 className="font-body text-[18px] font-semibold text-white mb-3">
                  {point.title}
                </h3>
                <p className="font-body text-[14px] text-white/50 leading-[1.8]">
                  {point.description}
                </p>
              </div>
            </AnimateOnScroll>
          ))}
        </div>

        <AnimateOnScroll>
          <div className="flex items-center justify-center gap-4 mt-16 md:mt-20">
            <span className="w-12 h-[1px] bg-gradient-to-r from-transparent to-green/40" />
            <p className="font-heading italic text-[18px] md:text-[20px] text-green/80 text-center max-w-[500px]">
              Nem vagy egyedül ezzel. És nem vagy lassú.
              <br />
              <span className="text-cream/40">Csak hiányzik egy rendszer, ami végigvezet.</span>
            </p>
            <span className="w-12 h-[1px] bg-gradient-to-l from-transparent to-green/40" />
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
}
