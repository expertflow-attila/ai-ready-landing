"use client";

import { Check, X, ArrowRight } from "lucide-react";
import { WHO_YES, WHO_NO } from "@/lib/constants";
import { AnimateOnScroll } from "./AnimateOnScroll";

export function WhoIsItFor() {
  return (
    <section id="kinek-szol" className="relative mesh-green py-[var(--section-py)] overflow-hidden">
      <div className="absolute inset-0 grain" />
      <div className="divider-gradient absolute top-0 left-0 right-0" />

      <div className="relative z-10 mx-auto max-w-[1100px] px-6 md:px-8">
        <AnimateOnScroll>
          <div className="text-center mb-14 md:mb-20">
            <span className="inline-flex items-center gap-2 font-body text-[11px] font-semibold uppercase tracking-[0.12em] text-white/40 mb-6">
              <span className="w-6 h-px bg-white/20" />
              Kinek szól?
              <span className="w-6 h-px bg-white/20" />
            </span>
            <h2 className="font-heading font-bold text-[28px] md:text-[40px] lg:text-[48px] leading-[1.05] tracking-[-0.02em] text-white">
              Te jó helyen jársz, ha...
            </h2>
          </div>
        </AnimateOnScroll>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 max-w-[880px] mx-auto">
          <AnimateOnScroll direction="left">
            <div className="glass-card !bg-white/[0.06] p-8 h-full">
              <h3 className="font-body text-[12px] font-semibold text-green-light/80 mb-7 uppercase tracking-[0.12em]">
                Neked szól, ha:
              </h3>
              <ul className="space-y-4">
                {WHO_YES.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-green/20 border border-green/20 flex items-center justify-center shrink-0 mt-0.5">
                      <Check size={10} className="text-green-light" strokeWidth={3} />
                    </div>
                    <span className="font-body text-[14px] text-white/60 leading-[1.6]">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </AnimateOnScroll>

          <AnimateOnScroll direction="right">
            <div className="glass-card !bg-white/[0.02] p-8 h-full">
              <h3 className="font-body text-[12px] font-semibold text-white/25 mb-7 uppercase tracking-[0.12em]">
                Nem neked szól, ha:
              </h3>
              <ul className="space-y-4">
                {WHO_NO.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-white/[0.05] flex items-center justify-center shrink-0 mt-0.5">
                      <X size={10} className="text-white/20" strokeWidth={3} />
                    </div>
                    <span className="font-body text-[14px] text-white/30 leading-[1.6]">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </AnimateOnScroll>
        </div>

        <AnimateOnScroll className="text-center mt-14">
          <a href="#feliratkozas" className="btn-primary">
            Igen — feliratkozom a várólistára
            <ArrowRight size={15} />
          </a>
        </AnimateOnScroll>
      </div>
    </section>
  );
}
