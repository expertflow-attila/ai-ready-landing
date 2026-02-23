"use client";

import { INSTRUCTOR } from "@/lib/constants";
import { AnimateOnScroll } from "./AnimateOnScroll";

export function Instructor() {
  return (
    <section className="relative bg-surface py-[var(--section-py)] overflow-hidden">
      <div className="relative z-10 mx-auto max-w-[1100px] px-6 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-16 items-start">
          {/* Image */}
          <AnimateOnScroll direction="left" className="md:col-span-4">
            <div className="relative max-w-[320px] mx-auto md:mx-0">
              <div className="aspect-[3/4] rounded-2xl overflow-hidden bg-gradient-to-br from-navy/5 to-navy/10">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-16 h-16 rounded-full bg-navy/[0.06] mx-auto mb-2 flex items-center justify-center">
                      <span className="font-body text-[20px] font-bold text-navy/25">NA</span>
                    </div>
                    <span className="font-body text-[12px] text-text-light/40">Fotó</span>
                  </div>
                </div>
              </div>
            </div>
          </AnimateOnScroll>

          {/* Text */}
          <AnimateOnScroll direction="right" className="md:col-span-8">
            <p className="font-body text-[12px] font-semibold uppercase tracking-[0.1em] text-green mb-5">
              Az oktató
            </p>
            <h2 className="font-body font-bold text-[28px] md:text-[36px] leading-[1.1] tracking-[-0.02em] text-navy mb-1.5">
              {INSTRUCTOR.name}
            </h2>
            <p className="font-body text-[13px] font-medium text-green/70 mb-8">
              {INSTRUCTOR.title}
            </p>

            <div className="space-y-4">
              {INSTRUCTOR.bio.map((paragraph, i) => (
                <p key={i} className="font-body text-[15px] text-text-light leading-[1.8]">
                  {paragraph}
                </p>
              ))}
            </div>

            <blockquote className="mt-8 pl-5 border-l-2 border-green/30">
              <p className="font-heading italic text-[20px] text-navy/70 leading-[1.4]">
                &ldquo;{INSTRUCTOR.quote}&rdquo;
              </p>
            </blockquote>
          </AnimateOnScroll>
        </div>
      </div>
    </section>
  );
}
