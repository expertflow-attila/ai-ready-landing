"use client";

import { INSTRUCTOR } from "@/lib/constants";
import { AnimateOnScroll } from "./AnimateOnScroll";

export function Instructor() {
  return (
    <section className="relative section-light py-[var(--section-py)] overflow-hidden">
      <div className="divider-light absolute top-0 left-0 right-0" />

      <div className="relative z-10 mx-auto max-w-[1100px] px-6 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-16 items-start">
          {/* Image placeholder */}
          <AnimateOnScroll direction="left" className="md:col-span-4">
            <div className="max-w-[300px] mx-auto md:mx-0">
              <div className="aspect-[3/4] rounded-2xl bg-cream-dark border border-navy/[0.06] flex items-center justify-center overflow-hidden">
                <div className="text-center p-8">
                  <div className="w-20 h-20 rounded-full bg-green/10 mx-auto mb-3 flex items-center justify-center border border-green/15">
                    <span className="font-heading text-[24px] font-bold text-green">NA</span>
                  </div>
                  <span className="font-body text-[12px] text-text-tertiary">Fotó</span>
                </div>
              </div>
            </div>
          </AnimateOnScroll>

          {/* Text */}
          <AnimateOnScroll direction="right" className="md:col-span-8">
            <span className="inline-flex items-center gap-2 font-body text-[11px] font-semibold uppercase tracking-[0.14em] text-green mb-6">
              <span className="w-6 h-px bg-green/40" />
              Az oktató
            </span>
            <h2
              className="font-heading font-bold text-[30px] md:text-[40px] leading-[1.05] tracking-[-0.02em] text-navy mb-1.5"
              style={{ textWrap: "balance" }}
            >
              {INSTRUCTOR.name}
            </h2>
            <p className="font-body text-[13px] font-medium text-green mb-8">
              {INSTRUCTOR.title}
            </p>

            <div className="space-y-4">
              {INSTRUCTOR.bio.map((paragraph, i) => (
                <p key={i} className="font-body text-[15px] text-text-secondary leading-[1.8]" style={{ textWrap: "pretty" }}>
                  {paragraph}
                </p>
              ))}
            </div>

            <blockquote className="mt-10 pl-6 border-l-2 border-gold">
              <p className="font-heading italic text-[22px] text-gold leading-[1.4]">
                &ldquo;{INSTRUCTOR.quote}&rdquo;
              </p>
            </blockquote>
          </AnimateOnScroll>
        </div>
      </div>
    </section>
  );
}
