"use client";

import { INSTRUCTOR } from "@/lib/constants";
import { AnimateOnScroll } from "./AnimateOnScroll";

export function Instructor() {
  return (
    <section className="relative mesh-dark py-[var(--section-py)] overflow-hidden">
      <div className="absolute inset-0 grain" />
      <div className="divider-gradient absolute top-0 left-0 right-0" />

      <div className="relative z-10 mx-auto max-w-[1100px] px-6 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-16 items-start">
          {/* Image placeholder */}
          <AnimateOnScroll direction="left" className="md:col-span-4">
            <div className="relative max-w-[300px] mx-auto md:mx-0">
              <div className="gradient-border-card aspect-[3/4] flex items-center justify-center">
                <div className="text-center p-8">
                  <div className="w-20 h-20 rounded-full bg-gradient-to-br from-green/20 to-gold/10 mx-auto mb-3 flex items-center justify-center border border-white/[0.06]">
                    <span className="font-heading text-[24px] font-bold text-gradient">NA</span>
                  </div>
                  <span className="font-body text-[12px] text-white/20">Fotó</span>
                </div>
              </div>
              {/* Glow behind image */}
              <div className="absolute -inset-4 rounded-3xl bg-green/[0.06] blur-[40px] -z-10" />
            </div>
          </AnimateOnScroll>

          {/* Text */}
          <AnimateOnScroll direction="right" className="md:col-span-8">
            <span className="inline-flex items-center gap-2 font-body text-[11px] font-semibold uppercase tracking-[0.12em] text-green/60 mb-6">
              <span className="w-6 h-px bg-green/30" />
              Az oktató
            </span>
            <h2 className="font-heading font-bold text-[30px] md:text-[40px] leading-[1.05] tracking-[-0.02em] text-white mb-1.5">
              {INSTRUCTOR.name}
            </h2>
            <p className="font-body text-[13px] font-medium text-gradient mb-8">
              {INSTRUCTOR.title}
            </p>

            <div className="space-y-4">
              {INSTRUCTOR.bio.map((paragraph, i) => (
                <p key={i} className="font-body text-[15px] text-white/40 leading-[1.8]">
                  {paragraph}
                </p>
              ))}
            </div>

            <blockquote className="mt-10 pl-6 border-l-2 border-gradient-to-b from-green to-gold" style={{ borderImage: "linear-gradient(to bottom, #2d8a5e, #c8a456) 1" }}>
              <p className="font-heading italic text-[22px] text-gradient-gold leading-[1.4]">
                &ldquo;{INSTRUCTOR.quote}&rdquo;
              </p>
            </blockquote>
          </AnimateOnScroll>
        </div>
      </div>
    </section>
  );
}
