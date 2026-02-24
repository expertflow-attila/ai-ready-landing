"use client";

import { Check, X, ArrowRight } from "lucide-react";
import { WHO_YES, WHO_NO } from "@/lib/constants";
import { AnimateOnScroll } from "./AnimateOnScroll";
import { MagneticButton } from "./MagneticButton";

export function WhoIsItFor() {
  return (
    <section id="kinek-szol" className="relative bg-bg-subtle py-[var(--section-py)] overflow-hidden">
      <div className="divider absolute top-0 left-0 right-0" />

      <div className="relative z-10 mx-auto max-w-[1100px] px-6 md:px-8">
        <AnimateOnScroll>
          <div className="text-center mb-14 md:mb-20">
            <span className="inline-flex items-center gap-2 font-body text-[11px] font-semibold uppercase tracking-[0.14em] text-text-tertiary mb-6">
              <span className="w-6 h-px bg-border-default" />
              Kinek szól?
              <span className="w-6 h-px bg-border-default" />
            </span>
            <h2
              className="font-heading font-bold text-[28px] md:text-[40px] lg:text-[48px] leading-[1.05] tracking-[-0.02em] text-text-primary"
              style={{ textWrap: "balance" }}
            >
              Te jó helyen jársz, ha...
            </h2>
          </div>
        </AnimateOnScroll>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 max-w-[880px] mx-auto">
          <AnimateOnScroll direction="left">
            <div className="card p-8 h-full !border-accent/15">
              <h3 className="font-body text-[12px] font-semibold text-accent mb-7 uppercase tracking-[0.14em]">
                Neked szól, ha:
              </h3>
              <ul className="space-y-4">
                {WHO_YES.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-accent-subtle flex items-center justify-center shrink-0 mt-0.5">
                      <Check size={10} className="text-accent" strokeWidth={3} />
                    </div>
                    <span className="font-body text-[14px] text-text-secondary leading-[1.7]">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </AnimateOnScroll>

          <AnimateOnScroll direction="right">
            <div className="card p-8 h-full">
              <h3 className="font-body text-[12px] font-semibold text-text-disabled mb-7 uppercase tracking-[0.14em]">
                Nem neked szól, ha:
              </h3>
              <ul className="space-y-4">
                {WHO_NO.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-bg-overlay flex items-center justify-center shrink-0 mt-0.5">
                      <X size={10} className="text-text-disabled" strokeWidth={3} />
                    </div>
                    <span className="font-body text-[14px] text-text-tertiary leading-[1.7]">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </AnimateOnScroll>
        </div>

        <AnimateOnScroll className="text-center mt-14">
          <MagneticButton>
            <a href="#feliratkozas" className="btn-primary">
              Igen — feliratkozom a várólistára
              <ArrowRight size={15} />
            </a>
          </MagneticButton>
        </AnimateOnScroll>
      </div>
    </section>
  );
}
