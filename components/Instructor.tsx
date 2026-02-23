"use client";

import { INSTRUCTOR } from "@/lib/constants";
import { AnimateOnScroll } from "./AnimateOnScroll";

export function Instructor() {
  return (
    <section className="relative bg-cream py-[var(--section-py)] overflow-hidden">
      <div className="absolute top-[10%] left-0 w-[300px] h-[300px] rounded-full bg-green/[0.03] blur-[100px]" />
      <div className="absolute inset-0 grain" />

      <div className="relative z-10 mx-auto max-w-[1200px] px-6 md:px-10">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-12 md:gap-20 items-start">
          {/* Image */}
          <AnimateOnScroll direction="left" className="md:col-span-2">
            <div className="relative max-w-[380px] mx-auto md:mx-0">
              {/* Photo placeholder */}
              <div className="relative aspect-[4/5] rounded-3xl overflow-hidden bg-cream-dark border border-cream-dark">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-20 h-20 rounded-full bg-navy/5 mx-auto mb-3 flex items-center justify-center">
                      <span className="font-heading text-[28px] text-navy/20">NA</span>
                    </div>
                    <span className="font-body text-[13px] text-text-light/50">Fotó helye</span>
                  </div>
                </div>
              </div>
              {/* Decorative frame offset */}
              <div className="absolute -bottom-3 -right-3 w-full h-full rounded-3xl border border-green/15 -z-10" />
            </div>
          </AnimateOnScroll>

          {/* Text */}
          <AnimateOnScroll direction="right" className="md:col-span-3">
            <span className="section-label">Az oktató</span>
            <h2 className="font-heading font-bold text-[30px] md:text-[40px] leading-[1.1] text-navy mb-2">
              {INSTRUCTOR.name}
            </h2>
            <p className="font-body text-[14px] font-medium text-green/80 mb-10 tracking-wide">
              {INSTRUCTOR.title}
            </p>

            <div className="space-y-5">
              {INSTRUCTOR.bio.map((paragraph, i) => (
                <p key={i} className="font-body text-[15px] text-text/80 leading-[1.9]">
                  {paragraph}
                </p>
              ))}
            </div>

            <blockquote className="mt-10 border-l-2 border-gradient pl-7" style={{ borderImage: "linear-gradient(to bottom, #2d8a5e, #c8a456) 1" }}>
              <p className="font-heading italic text-[22px] md:text-[24px] text-navy/80 leading-[1.4]">
                &ldquo;{INSTRUCTOR.quote}&rdquo;
              </p>
            </blockquote>
          </AnimateOnScroll>
        </div>
      </div>
    </section>
  );
}
