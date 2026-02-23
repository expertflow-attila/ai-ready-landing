"use client";

import { BEFORE_ITEMS, AFTER_ITEMS } from "@/lib/constants";
import { AnimateOnScroll } from "./AnimateOnScroll";

export function BeforeAfter() {
  return (
    <section className="bg-cream py-[var(--section-padding-y)]">
      <div className="mx-auto max-w-[1200px] px-5 md:px-10">
        <AnimateOnScroll>
          <div className="text-center mb-12 md:mb-16">
            <p className="font-body text-xs uppercase tracking-[0.08em] text-green mb-4">
              AZ EREDMÉNY
            </p>
            <h2 className="font-heading font-semibold text-2xl md:text-[36px] leading-[1.2] text-navy">
              10 hét múlva így néz ki a vállalkozásod.
            </h2>
          </div>
        </AnimateOnScroll>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-0 max-w-[900px] mx-auto">
          {/* BEFORE column */}
          <AnimateOnScroll direction="left">
            <div className="bg-navy rounded-t-2xl md:rounded-l-2xl md:rounded-tr-none p-8 md:p-10 h-full">
              <h3 className="font-body text-lg font-semibold text-text-on-dark mb-6 flex items-center gap-2">
                <span className="text-red-soft">⛔</span> Most (kurzus előtt)
              </h3>
              <ul className="space-y-4">
                {BEFORE_ITEMS.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="text-red-soft shrink-0 mt-0.5">⛔</span>
                    <span className="font-body text-[15px] text-text-on-dark">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </AnimateOnScroll>

          {/* AFTER column */}
          <AnimateOnScroll direction="right">
            <div
              className="rounded-b-2xl md:rounded-r-2xl md:rounded-bl-none p-8 md:p-10 h-full"
              style={{
                background: "linear-gradient(135deg, #2d8a5e, #35a06c)",
              }}
            >
              <h3 className="font-body text-lg font-semibold text-white mb-6 flex items-center gap-2">
                <span>✅</span> 10 hét múlva (kurzus után)
              </h3>
              <ul className="space-y-4">
                {AFTER_ITEMS.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="shrink-0 mt-0.5">✅</span>
                    <span className="font-body text-[15px] font-medium text-white">
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
