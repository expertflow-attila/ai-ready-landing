"use client";

import { PAIN_POINTS } from "@/lib/constants";
import { AnimateOnScroll, StaggerContainer, StaggerItem } from "./AnimateOnScroll";

export function Problem() {
  return (
    <section id="mirol-szol" className="relative section-dark py-[var(--section-py)] overflow-hidden">
      <div className="divider-dark absolute top-0 left-0 right-0" />

      <div className="relative z-10 mx-auto max-w-[1100px] px-6 md:px-8">
        <AnimateOnScroll>
          <div className="text-center mb-14 md:mb-20">
            <span className="inline-flex items-center gap-2 font-body text-[11px] font-semibold uppercase tracking-[0.14em] text-green/60 mb-6">
              <span className="w-6 h-px bg-green/30" />
              Ismerős ez?
              <span className="w-6 h-px bg-green/30" />
            </span>
            <h2
              className="font-heading font-bold text-[28px] md:text-[40px] lg:text-[48px] leading-[1.05] tracking-[-0.02em] text-dt-primary max-w-[700px] mx-auto"
              style={{ textWrap: "balance" }}
            >
              Mindenki AI-ról beszél.{" "}
              <span className="text-dt-tertiary">Te meg ott ülsz, és nem tudod, hol kezdd.</span>
            </h2>
          </div>
        </AnimateOnScroll>

        <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-5" stagger={0.12}>
          {PAIN_POINTS.map((point) => (
            <StaggerItem key={point.title}>
              <div className="card-dark p-8 h-full">
                <div className="w-12 h-12 rounded-2xl bg-surface-2 border border-white/[0.06] flex items-center justify-center mb-6">
                  <span className="text-[22px]">{point.icon}</span>
                </div>
                <h3 className="font-body text-[17px] font-semibold text-dt-primary mb-3">
                  {point.title}
                </h3>
                <p className="font-body text-[14px] text-dt-tertiary leading-[1.8]" style={{ textWrap: "pretty" }}>
                  {point.description}
                </p>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>

        <AnimateOnScroll className="mt-16 md:mt-20 text-center">
          <p className="font-heading italic text-[20px] md:text-[24px] text-dt-tertiary max-w-[500px] mx-auto leading-[1.5]">
            &ldquo;Nem vagy egyedül ezzel. És nem vagy lassú.{" "}
            <span className="text-green font-medium not-italic">Csak hiányzik egy rendszer.</span>&rdquo;
          </p>
        </AnimateOnScroll>
      </div>
    </section>
  );
}
