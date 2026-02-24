"use client";

import { ArrowRight } from "lucide-react";
import { AnimateOnScroll } from "./AnimateOnScroll";
import { MagneticButton } from "./MagneticButton";

export function FinalCTA() {
  return (
    <section className="relative bg-bg-subtle overflow-hidden">
      <div className="divider absolute top-0 left-0 right-0" />

      {/* Accent glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] rounded-full bg-accent-subtle blur-[120px] pointer-events-none" />

      <div className="relative z-10 mx-auto max-w-[700px] text-center px-6 md:px-8 py-[100px] md:py-[140px]">
        <AnimateOnScroll>
          <h2
            className="font-heading font-bold text-[28px] md:text-[40px] lg:text-[52px] leading-[1.05] tracking-[-0.02em] text-text-primary mb-5"
            style={{ textWrap: "balance" }}
          >
            Az AI nem vár.
            <br />
            <span className="font-normal text-text-tertiary italic">De segít — ha engeded.</span>
          </h2>
          <p className="font-body text-[16px] text-text-secondary mb-12">
            10 hét. 10 rendszer. Egy döntés.
          </p>
          <MagneticButton>
            <a href="#feliratkozas" className="btn-primary text-[15px]">
              Feliratkozom a várólistára
              <ArrowRight size={16} />
            </a>
          </MagneticButton>
          <p className="font-body text-[12px] text-text-disabled mt-6">
            Ingyenes · 30 másodperc · Elsőként értesülsz
          </p>
        </AnimateOnScroll>
      </div>
    </section>
  );
}
