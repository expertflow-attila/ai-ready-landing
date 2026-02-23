"use client";

import { BEFORE_ITEMS, AFTER_ITEMS } from "@/lib/constants";
import { AnimateOnScroll } from "./AnimateOnScroll";

export function BeforeAfter() {
  return (
    <section className="relative section-light py-[var(--section-py)] overflow-hidden">
      <div className="divider-light absolute top-0 left-0 right-0" />

      <div className="relative z-10 mx-auto max-w-[1100px] px-6 md:px-8">
        <AnimateOnScroll>
          <div className="text-center mb-14 md:mb-20">
            <span className="inline-flex items-center gap-2 font-body text-[11px] font-semibold uppercase tracking-[0.14em] text-green mb-6">
              <span className="w-6 h-px bg-green/40" />
              Az eredmény
              <span className="w-6 h-px bg-green/40" />
            </span>
            <h2
              className="font-heading font-bold text-[28px] md:text-[40px] lg:text-[48px] leading-[1.05] tracking-[-0.02em] text-navy"
              style={{ textWrap: "balance" }}
            >
              10 hét múlva így néz ki{" "}
              <span className="text-green">a vállalkozásod.</span>
            </h2>
          </div>
        </AnimateOnScroll>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-0 max-w-[880px] mx-auto rounded-2xl overflow-hidden shadow-[0_2px_8px_rgba(0,0,0,0.04),0_8px_24px_rgba(0,0,0,0.03)]">
          <AnimateOnScroll direction="left">
            <div className="bg-white p-8 md:p-10 h-full border-r border-navy/[0.06]">
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
            <div className="bg-green/[0.04] p-8 md:p-10 h-full">
              <h3 className="font-body text-[12px] font-semibold text-green uppercase tracking-[0.14em] mb-7 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-green" />
                10 hét múlva
              </h3>
              <ul className="space-y-4">
                {AFTER_ITEMS.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-green shrink-0 mt-2" />
                    <span className="font-body text-[14px] text-navy/80 leading-[1.7] font-medium">{item}</span>
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
