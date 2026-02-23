"use client";

import { ArrowRight } from "lucide-react";
import { BEFORE_ITEMS, AFTER_ITEMS } from "@/lib/constants";
import { AnimateOnScroll } from "./AnimateOnScroll";

export function BeforeAfter() {
  return (
    <section className="relative bg-cream py-[var(--section-py)] overflow-hidden">
      <div className="absolute top-0 right-[20%] w-[400px] h-[400px] rounded-full bg-green/[0.03] blur-[130px]" />
      <div className="absolute inset-0 grain" />

      <div className="relative z-10 mx-auto max-w-[1200px] px-6 md:px-10">
        <AnimateOnScroll>
          <div className="text-center mb-16 md:mb-20">
            <span className="section-label justify-center">Az eredmény</span>
            <h2 className="font-heading font-semibold text-[28px] md:text-[38px] lg:text-[44px] leading-[1.1] text-navy">
              10 hét múlva így néz ki
              <br />
              <span className="italic text-green font-normal">a vállalkozásod.</span>
            </h2>
          </div>
        </AnimateOnScroll>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-0 max-w-[920px] mx-auto rounded-3xl overflow-hidden shadow-[0_8px_40px_rgba(10,22,40,0.08)]">
          {/* BEFORE */}
          <AnimateOnScroll direction="left">
            <div className="relative bg-navy p-8 md:p-10 h-full overflow-hidden">
              <div className="absolute inset-0 grain-dark" />
              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-8">
                  <div className="w-2 h-2 rounded-full bg-red-soft/60" />
                  <h3 className="font-body text-[13px] font-semibold text-cream/40 uppercase tracking-wider">
                    Most — kurzus előtt
                  </h3>
                </div>
                <ul className="space-y-5">
                  {BEFORE_ITEMS.map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <span className="w-5 h-5 rounded-full bg-red-soft/10 flex items-center justify-center shrink-0 mt-0.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-red-soft/50" />
                      </span>
                      <span className="font-body text-[14px] text-cream/45 leading-[1.7]">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </AnimateOnScroll>

          {/* AFTER */}
          <AnimateOnScroll direction="right">
            <div
              className="relative p-8 md:p-10 h-full overflow-hidden"
              style={{ background: "linear-gradient(145deg, #2d8a5e, #246e4b)" }}
            >
              <div className="absolute top-0 right-0 w-[200px] h-[200px] rounded-full bg-white/[0.05] blur-[60px]" />
              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-8">
                  <div className="w-2 h-2 rounded-full bg-white/60" />
                  <h3 className="font-body text-[13px] font-semibold text-white/60 uppercase tracking-wider">
                    10 hét múlva
                  </h3>
                </div>
                <ul className="space-y-5">
                  {AFTER_ITEMS.map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <span className="w-5 h-5 rounded-full bg-white/15 flex items-center justify-center shrink-0 mt-0.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-white/70" />
                      </span>
                      <span className="font-body text-[14px] text-white/85 leading-[1.7] font-medium">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </AnimateOnScroll>
        </div>

        {/* Arrow between on mobile */}
        <div className="flex justify-center mt-8 md:hidden">
          <ArrowRight size={20} className="text-green/40 rotate-90" />
        </div>
      </div>
    </section>
  );
}
