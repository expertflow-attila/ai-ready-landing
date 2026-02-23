"use client";

import { INSTRUCTOR } from "@/lib/constants";
import { AnimateOnScroll } from "./AnimateOnScroll";

export function Instructor() {
  return (
    <section className="bg-cream py-[var(--section-padding-y)]">
      <div className="mx-auto max-w-[1200px] px-5 md:px-10">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-10 md:gap-16 items-center">
          {/* Image column (40% = 2/5) */}
          <AnimateOnScroll direction="left" className="md:col-span-2">
            <div className="relative aspect-[4/5] rounded-2xl overflow-hidden bg-navy/5 shadow-[0_20px_60px_rgba(45,138,94,0.15)] max-w-[400px] mx-auto md:mx-0">
              {/* Placeholder */}
              <div className="absolute inset-0 flex items-center justify-center bg-cream-dark">
                <span className="font-body text-text-light text-lg">Fotó</span>
              </div>
            </div>
          </AnimateOnScroll>

          {/* Text column (60% = 3/5) */}
          <AnimateOnScroll direction="right" className="md:col-span-3">
            <p className="font-body text-xs uppercase tracking-[0.08em] text-green mb-4">
              AZ OKTATÓ
            </p>
            <h2 className="font-heading font-bold text-3xl md:text-[36px] leading-[1.2] text-navy mb-2">
              {INSTRUCTOR.name}
            </h2>
            <p className="font-body text-base font-medium text-green mb-8">
              {INSTRUCTOR.title}
            </p>

            <div className="space-y-4">
              {INSTRUCTOR.bio.map((paragraph, i) => (
                <p
                  key={i}
                  className="font-body text-base text-text leading-[1.8]"
                >
                  {paragraph}
                </p>
              ))}
            </div>

            {/* Quote */}
            <blockquote className="mt-8 border-l-[3px] border-green pl-6">
              <p className="font-heading italic text-[22px] text-green">
                &ldquo;{INSTRUCTOR.quote}&rdquo;
              </p>
            </blockquote>
          </AnimateOnScroll>
        </div>
      </div>
    </section>
  );
}
