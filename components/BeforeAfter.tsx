"use client";

import { BEFORE_ITEMS, AFTER_ITEMS } from "@/lib/constants";
import { AnimateOnScroll } from "./AnimateOnScroll";

export function BeforeAfter() {
  return (
    <section className="relative bg-surface py-[var(--section-py)] overflow-hidden">
      <div className="relative z-10 mx-auto max-w-[1100px] px-6 md:px-8">
        <AnimateOnScroll>
          <div className="text-center mb-14 md:mb-16">
            <p className="font-body text-[12px] font-semibold uppercase tracking-[0.1em] text-green mb-5">
              Az eredmény
            </p>
            <h2 className="font-body font-bold text-[26px] md:text-[36px] lg:text-[42px] leading-[1.1] tracking-[-0.02em] text-navy">
              10 hét múlva így néz ki{" "}
              <span className="text-green">a vállalkozásod.</span>
            </h2>
          </div>
        </AnimateOnScroll>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-0 max-w-[880px] mx-auto rounded-2xl overflow-hidden shadow-layered-lg">
          {/* Before */}
          <AnimateOnScroll direction="left">
            <div className="bg-navy p-8 md:p-10 h-full">
              <h3 className="font-body text-[12px] font-semibold text-white/30 uppercase tracking-[0.1em] mb-6">
                Most — kurzus előtt
              </h3>
              <ul className="space-y-4">
                {BEFORE_ITEMS.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-red-soft/50 shrink-0 mt-2" />
                    <span className="font-body text-[14px] text-white/40 leading-[1.6]">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </AnimateOnScroll>

          {/* After */}
          <AnimateOnScroll direction="right">
            <div className="bg-green p-8 md:p-10 h-full">
              <h3 className="font-body text-[12px] font-semibold text-white/60 uppercase tracking-[0.1em] mb-6">
                10 hét múlva
              </h3>
              <ul className="space-y-4">
                {AFTER_ITEMS.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-white/70 shrink-0 mt-2" />
                    <span className="font-body text-[14px] text-white/90 leading-[1.6] font-medium">
                      {item}
                    </span>
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
