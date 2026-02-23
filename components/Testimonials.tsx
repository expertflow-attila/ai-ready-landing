"use client";

import { TESTIMONIALS } from "@/lib/constants";
import { StaggerContainer, StaggerItem } from "./AnimateOnScroll";

export function Testimonials() {
  return (
    <section className="relative bg-white py-[var(--section-py)] overflow-hidden">
      <div className="relative z-10 mx-auto max-w-[1100px] px-6 md:px-8">
        <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-4" stagger={0.1} delayChildren={0}>
          {TESTIMONIALS.map((testimonial, i) => (
            <StaggerItem key={i}>
              <div className="rounded-2xl bg-surface p-7 md:p-8 h-full border border-black/[0.03]">
                <blockquote>
                  <p className="font-body text-[15px] text-navy/80 leading-[1.7] mb-6">
                    &ldquo;{testimonial.quote}&rdquo;
                  </p>
                </blockquote>
                <div className="pt-5 border-t border-black/[0.04]">
                  <p className="font-body text-[12px] font-medium text-text-light/60">
                    {testimonial.name}
                  </p>
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
