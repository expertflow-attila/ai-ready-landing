"use client";

import { PAIN_POINTS } from "@/lib/constants";
import { AnimateOnScroll } from "./AnimateOnScroll";

export function Problem() {
  return (
    <section id="mirol-szol" className="bg-navy py-[var(--section-padding-y)]">
      <div className="mx-auto max-w-[1200px] px-5 md:px-10">
        <AnimateOnScroll>
          <div className="text-center mb-12 md:mb-16">
            <p className="font-body text-xs uppercase tracking-[0.08em] text-green mb-4">
              ISMERŐS EZ?
            </p>
            <h2 className="font-heading font-semibold text-2xl md:text-[36px] lg:text-[40px] leading-[1.2] text-white max-w-[700px] mx-auto">
              Mindenki AI-ról beszél. Te meg ott ülsz, és nem tudod, hol kezdd.
            </h2>
          </div>
        </AnimateOnScroll>

        {/* Pain point cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {PAIN_POINTS.map((point, i) => (
            <AnimateOnScroll key={point.title} delay={i * 80}>
              <div className="bg-navy-light border border-white/[0.08] rounded-2xl p-8 h-full">
                <span className="block text-[40px] mb-4">{point.icon}</span>
                <h3 className="font-body text-xl font-semibold text-white mb-3">
                  {point.title}
                </h3>
                <p className="font-body text-[15px] text-text-on-dark leading-[1.7]">
                  {point.description}
                </p>
              </div>
            </AnimateOnScroll>
          ))}
        </div>

        {/* Closing statement */}
        <AnimateOnScroll>
          <p className="font-heading italic text-xl text-green text-center max-w-[600px] mx-auto mt-12 md:mt-16">
            Nem vagy egyedül ezzel. És nem vagy lassú.
            <br />
            Csak hiányzik egy rendszer, ami végigvezet.
          </p>
        </AnimateOnScroll>
      </div>
    </section>
  );
}
