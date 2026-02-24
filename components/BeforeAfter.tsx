"use client";

import { BEFORE_ITEMS, AFTER_ITEMS } from "@/lib/constants";
import { AnimateOnScroll } from "./AnimateOnScroll";

export function BeforeAfter() {
  return (
    <section className="relative py-[var(--section-py)] overflow-hidden">
      <div className="divider absolute top-0 left-0 right-0" />

      <div className="relative z-10 mx-auto max-w-[1100px] px-6 md:px-8">
        <AnimateOnScroll>
          <div className="text-center mb-14 md:mb-20">
            <span className="inline-flex items-center gap-2 font-body text-[11px] font-semibold uppercase tracking-[0.14em] text-accent mb-6">
              <span className="w-6 h-px bg-accent/40" />
              Az eredmény
              <span className="w-6 h-px bg-accent/40" />
            </span>
            <h2
              className="font-heading font-bold text-[28px] md:text-[40px] lg:text-[48px] leading-[1.05] tracking-[-0.02em] text-text-primary"
              style={{ textWrap: "balance" }}
            >
              10 hét múlva így néz ki{" "}
              <span className="text-accent">a vállalkozásod.</span>
            </h2>
          </div>
        </AnimateOnScroll>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-0 max-w-[880px] mx-auto rounded-2xl overflow-hidden border border-border-subtle">
          <AnimateOnScroll direction="left">
            <div className="bg-bg-subtle p-8 md:p-10 h-full md:border-r md:border-border-subtle">
              <h3 className="font-body text-[12px] font-semibold text-red-soft/70 uppercase tracking-[0.14em] mb-7 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-red-soft/40" />
                Most — kurzus előtt
              </h3>
              <ul className="space-y-4">
                {BEFORE_ITEMS.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-red-soft/30 shrink-0 mt-2" />
                    <span className="font-body text-[14px] text-text-tertiary leading-[1.7]">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </AnimateOnScroll>

          <AnimateOnScroll direction="right">
            <div className="bg-accent-subtle p-8 md:p-10 h-full">
              <h3 className="font-body text-[12px] font-semibold text-accent uppercase tracking-[0.14em] mb-7 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-accent" />
                10 hét múlva
              </h3>
              <ul className="space-y-4">
                {AFTER_ITEMS.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent shrink-0 mt-2" />
                    <span className="font-body text-[14px] text-text-primary leading-[1.7] font-medium">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </AnimateOnScroll>
        </div>
      </div>
    </section>
  );
}
