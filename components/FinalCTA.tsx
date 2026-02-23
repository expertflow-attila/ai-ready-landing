"use client";

import { ArrowRight } from "lucide-react";
import { AnimateOnScroll } from "./AnimateOnScroll";

export function FinalCTA() {
  return (
    <section className="relative section-dark-green overflow-hidden">
      <div className="divider-dark absolute top-0 left-0 right-0" />

      <div className="relative z-10 mx-auto max-w-[700px] text-center px-6 md:px-8 py-[100px] md:py-[140px]">
        <AnimateOnScroll>
          <h2
            className="font-heading font-bold text-[28px] md:text-[40px] lg:text-[52px] leading-[1.05] tracking-[-0.02em] text-white mb-5"
            style={{ textWrap: "balance" }}
          >
            Az AI nem vár.
            <br />
            <span className="font-normal text-dt-tertiary italic">De segít — ha engeded.</span>
          </h2>
          <p className="font-body text-[16px] text-dt-secondary mb-12">
            10 hét. 10 rendszer. Egy döntés.
          </p>
          <a
            href="#feliratkozas"
            className="btn-secondary text-[15px]"
          >
            Feliratkozom a várólistára
            <ArrowRight size={16} />
          </a>
          <p className="font-body text-[12px] text-dt-muted mt-6">
            Ingyenes · 30 másodperc · Elsőként értesülsz
          </p>
        </AnimateOnScroll>
      </div>
    </section>
  );
}
