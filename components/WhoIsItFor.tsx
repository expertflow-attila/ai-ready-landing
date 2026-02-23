"use client";

import { Check, X } from "lucide-react";
import { WHO_YES, WHO_NO } from "@/lib/constants";
import { AnimateOnScroll } from "./AnimateOnScroll";

export function WhoIsItFor() {
  return (
    <section id="kinek-szol" className="bg-navy py-[var(--section-padding-y)]">
      <div className="mx-auto max-w-[1200px] px-5 md:px-10">
        <AnimateOnScroll>
          <div className="text-center mb-12 md:mb-16">
            <p className="font-body text-xs uppercase tracking-[0.08em] text-green mb-4">
              KINEK SZÓL?
            </p>
            <h2 className="font-heading font-semibold text-2xl md:text-[36px] leading-[1.2] text-white">
              Te jó helyen jársz, ha...
            </h2>
          </div>
        </AnimateOnScroll>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-[900px] mx-auto">
          {/* YES column */}
          <AnimateOnScroll direction="left">
            <div className="bg-green/10 border border-green/30 rounded-2xl p-8 h-full">
              <h3 className="font-body text-lg font-semibold text-green mb-6">
                Az AI Ready neked szól, ha:
              </h3>
              <ul className="space-y-3">
                {WHO_YES.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <Check
                      size={18}
                      className="text-green shrink-0 mt-0.5"
                      strokeWidth={2.5}
                    />
                    <span className="font-body text-[15px] text-text-on-dark">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </AnimateOnScroll>

          {/* NO column */}
          <AnimateOnScroll direction="right">
            <div className="bg-red-soft/[0.08] border border-red-soft/20 rounded-2xl p-8 h-full">
              <h3 className="font-body text-lg font-semibold text-red-soft mb-6">
                NEM neked szól, ha:
              </h3>
              <ul className="space-y-3">
                {WHO_NO.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <X
                      size={18}
                      className="text-red-soft shrink-0 mt-0.5"
                      strokeWidth={2.5}
                    />
                    <span className="font-body text-[15px] text-text-on-dark">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </AnimateOnScroll>
        </div>

        {/* Closing CTA */}
        <AnimateOnScroll>
          <div className="text-center mt-12">
            <p className="font-body text-lg font-medium text-white mb-6">
              Felismerted magad a bal oldalon?
            </p>
            <a
              href="#feliratkozas"
              className="inline-flex items-center justify-center rounded-lg bg-green px-8 py-4 font-body text-[15px] font-bold uppercase tracking-[0.04em] text-white transition-all duration-300 hover:bg-green-light hover:scale-[1.02]"
            >
              Igen — feliratkozom a várólistára →
            </a>
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
}
