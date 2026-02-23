"use client";

import { Check, X, ArrowRight } from "lucide-react";
import { WHO_YES, WHO_NO } from "@/lib/constants";
import { AnimateOnScroll } from "./AnimateOnScroll";

export function WhoIsItFor() {
  return (
    <section id="kinek-szol" className="relative bg-navy py-[var(--section-py)] overflow-hidden">
      <div className="absolute top-[20%] right-0 w-[400px] h-[400px] rounded-full bg-green/[0.03] blur-[130px]" />
      <div className="absolute bottom-0 left-[10%] w-[300px] h-[300px] rounded-full bg-gold/[0.02] blur-[100px]" />
      <div className="absolute inset-0 grain-dark" />

      <div className="relative z-10 mx-auto max-w-[1200px] px-6 md:px-10">
        <AnimateOnScroll>
          <div className="text-center mb-16 md:mb-20">
            <span className="section-label text-green/80 justify-center">Kinek szól?</span>
            <h2 className="font-heading font-semibold text-[28px] md:text-[38px] lg:text-[44px] leading-[1.1] text-white">
              Te jó helyen jársz, ha...
            </h2>
          </div>
        </AnimateOnScroll>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-[920px] mx-auto">
          <AnimateOnScroll direction="left">
            <div className="relative rounded-2xl p-8 md:p-10 h-full border border-green/15 bg-gradient-to-br from-green/[0.06] to-green/[0.02]">
              <div className="absolute top-6 right-6 w-16 h-16 rounded-full bg-green/[0.06] blur-[30px]" />
              <h3 className="font-body text-[15px] font-semibold text-green mb-8 tracking-wide uppercase">
                Az AI Ready neked szól, ha:
              </h3>
              <ul className="space-y-4">
                {WHO_YES.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-green/15 flex items-center justify-center shrink-0 mt-0.5">
                      <Check size={11} className="text-green" strokeWidth={3} />
                    </div>
                    <span className="font-body text-[14px] text-cream/70 leading-[1.6]">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </AnimateOnScroll>

          <AnimateOnScroll direction="right">
            <div className="relative rounded-2xl p-8 md:p-10 h-full border border-white/[0.06] bg-gradient-to-br from-white/[0.03] to-transparent">
              <h3 className="font-body text-[15px] font-semibold text-red-soft/70 mb-8 tracking-wide uppercase">
                Nem neked szól, ha:
              </h3>
              <ul className="space-y-4">
                {WHO_NO.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-white/[0.05] flex items-center justify-center shrink-0 mt-0.5">
                      <X size={11} className="text-cream/30" strokeWidth={3} />
                    </div>
                    <span className="font-body text-[14px] text-cream/40 leading-[1.6]">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </AnimateOnScroll>
        </div>

        <AnimateOnScroll>
          <div className="text-center mt-16">
            <p className="font-body text-[16px] text-cream/50 mb-6">
              Felismerted magad?
            </p>
            <a href="#feliratkozas" className="btn-primary">
              Igen — feliratkozom a várólistára
              <ArrowRight size={16} />
            </a>
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
}
