"use client";

import { Check, X, ArrowRight } from "lucide-react";
import { WHO_YES, WHO_NO } from "@/lib/constants";
import { AnimateOnScroll, StaggerContainer, StaggerItem } from "./AnimateOnScroll";

export function WhoIsItFor() {
  return (
    <section id="kinek-szol" className="relative bg-navy py-[var(--section-py)] overflow-hidden">
      <div className="relative z-10 mx-auto max-w-[1100px] px-6 md:px-8">
        <AnimateOnScroll>
          <div className="max-w-[560px] mb-14 md:mb-16">
            <p className="font-body text-[12px] font-semibold uppercase tracking-[0.1em] text-green/70 mb-5">
              Kinek szól?
            </p>
            <h2 className="font-body font-bold text-[26px] md:text-[36px] lg:text-[42px] leading-[1.1] tracking-[-0.02em] text-white">
              Te jó helyen jársz, ha...
            </h2>
          </div>
        </AnimateOnScroll>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-[880px]">
          <AnimateOnScroll direction="left">
            <div className="rounded-2xl bg-green/[0.06] border border-green/[0.1] p-7 md:p-8 h-full">
              <h3 className="font-body text-[13px] font-semibold text-green/80 mb-6 uppercase tracking-[0.1em]">
                Neked szól, ha:
              </h3>
              <ul className="space-y-3.5">
                {WHO_YES.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-green/15 flex items-center justify-center shrink-0 mt-0.5">
                      <Check size={10} className="text-green" strokeWidth={3} />
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
            <div className="rounded-2xl bg-white/[0.02] border border-white/[0.05] p-7 md:p-8 h-full">
              <h3 className="font-body text-[13px] font-semibold text-white/30 mb-6 uppercase tracking-[0.1em]">
                Nem neked szól, ha:
              </h3>
              <ul className="space-y-3.5">
                {WHO_NO.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-white/[0.04] flex items-center justify-center shrink-0 mt-0.5">
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

        <AnimateOnScroll className="mt-14">
          <a
            href="#feliratkozas"
            className="group inline-flex items-center gap-2.5 rounded-full bg-green px-8 py-4 font-body text-[14px] font-semibold text-white hover:-translate-y-0.5 transition-all duration-300 shadow-[0_2px_8px_rgba(45,138,94,0.3)]"
          >
            Igen — feliratkozom a várólistára
            <ArrowRight size={15} className="group-hover:translate-x-0.5 transition-transform duration-200" />
          </a>
        </AnimateOnScroll>
      </div>
    </section>
  );
}
