"use client";

import { PAIN_POINTS } from "@/lib/constants";
import { AnimateOnScroll, StaggerContainer, StaggerItem } from "./AnimateOnScroll";

export function Problem() {
  return (
    <section id="mirol-szol" className="relative bg-navy py-[var(--section-py)] overflow-hidden">
      <div className="relative z-10 mx-auto max-w-[1100px] px-6 md:px-8">
        <AnimateOnScroll>
          <div className="max-w-[640px] mb-14 md:mb-16">
            <p className="font-body text-[12px] font-semibold uppercase tracking-[0.1em] text-green/70 mb-5">
              Ismerős ez?
            </p>
            <h2 className="font-body font-bold text-[26px] md:text-[36px] lg:text-[42px] leading-[1.1] tracking-[-0.02em] text-white">
              Mindenki AI-ról beszél.{" "}
              <span className="text-white/40">
                Te meg ott ülsz, és nem tudod, hol kezdd.
              </span>
            </h2>
          </div>
        </AnimateOnScroll>

        <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-4" stagger={0.1}>
          {PAIN_POINTS.map((point) => (
            <StaggerItem key={point.title}>
              <div className="group rounded-2xl bg-white/[0.04] border border-white/[0.06] p-7 md:p-8 h-full hover:bg-white/[0.06] hover:border-white/[0.1] transition-all duration-300">
                <span className="text-[24px] mb-5 block">{point.icon}</span>
                <h3 className="font-body text-[16px] font-semibold text-white mb-2.5">
                  {point.title}
                </h3>
                <p className="font-body text-[14px] text-white/40 leading-[1.7]">
                  {point.description}
                </p>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>

        <AnimateOnScroll className="mt-14 md:mt-16">
          <p className="font-heading italic text-[18px] md:text-[20px] text-white/50 max-w-[480px]">
            Nem vagy egyedül ezzel. És nem vagy lassú.
            <span className="text-green/60"> Csak hiányzik egy rendszer, ami végigvezet.</span>
          </p>
        </AnimateOnScroll>
      </div>
    </section>
  );
}
