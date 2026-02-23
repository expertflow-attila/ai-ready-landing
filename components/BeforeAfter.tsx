"use client";

import { BEFORE_ITEMS, AFTER_ITEMS } from "@/lib/constants";
import { AnimateOnScroll } from "./AnimateOnScroll";

export function BeforeAfter() {
  return (
    <section className="relative mesh-dark py-[var(--section-py)] overflow-hidden">
      <div className="absolute inset-0 grain" />
      <div className="divider-gradient absolute top-0 left-0 right-0" />

      <div className="relative z-10 mx-auto max-w-[1100px] px-6 md:px-8">
        <AnimateOnScroll>
          <div className="text-center mb-14 md:mb-20">
            <span className="inline-flex items-center gap-2 font-body text-[11px] font-semibold uppercase tracking-[0.12em] text-green/60 mb-6">
              <span className="w-6 h-px bg-green/30" />
              Az eredmény
              <span className="w-6 h-px bg-green/30" />
            </span>
            <h2 className="font-heading font-bold text-[28px] md:text-[40px] lg:text-[48px] leading-[1.05] tracking-[-0.02em] text-white">
              10 hét múlva így néz ki{" "}
              <span className="text-gradient">a vállalkozásod.</span>
            </h2>
          </div>
        </AnimateOnScroll>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-0 max-w-[880px] mx-auto rounded-2xl overflow-hidden">
          <AnimateOnScroll direction="left">
            <div className="bg-white/[0.02] border border-white/[0.04] p-8 md:p-10 h-full md:rounded-l-2xl">
              <h3 className="font-body text-[12px] font-semibold text-red-soft/50 uppercase tracking-[0.12em] mb-7 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-red-soft/40" />
                Most — kurzus előtt
              </h3>
              <ul className="space-y-4">
                {BEFORE_ITEMS.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-red-soft/30 shrink-0 mt-2" />
                    <span className="font-body text-[14px] text-white/30 leading-[1.7]">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </AnimateOnScroll>

          <AnimateOnScroll direction="right">
            <div className="relative p-8 md:p-10 h-full md:rounded-r-2xl overflow-hidden" style={{ background: "linear-gradient(135deg, rgba(45,138,94,0.15), rgba(16,185,129,0.08))" }}>
              <div className="absolute inset-0 border border-green/10 md:rounded-r-2xl" />
              <div className="absolute top-0 right-0 w-[200px] h-[200px] rounded-full bg-green/[0.1] blur-[80px]" />
              <div className="relative z-10">
                <h3 className="font-body text-[12px] font-semibold text-green-light/70 uppercase tracking-[0.12em] mb-7 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-green-light/60" />
                  10 hét múlva
                </h3>
                <ul className="space-y-4">
                  {AFTER_ITEMS.map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <span className="w-1.5 h-1.5 rounded-full bg-green-light/60 shrink-0 mt-2" />
                      <span className="font-body text-[14px] text-white/70 leading-[1.7] font-medium">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </AnimateOnScroll>
        </div>
      </div>
    </section>
  );
}
