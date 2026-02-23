"use client";

import { TESTIMONIALS } from "@/lib/constants";
import { AnimateOnScroll, StaggerContainer, StaggerItem } from "./AnimateOnScroll";

export function Testimonials() {
  return (
    <section className="relative mesh-dark-alt py-[var(--section-py)] overflow-hidden">
      <div className="absolute inset-0 grain" />
      <div className="divider-gradient absolute top-0 left-0 right-0" />

      <div className="relative z-10 mx-auto max-w-[1100px] px-6 md:px-8">
        <AnimateOnScroll>
          <div className="text-center mb-14 md:mb-20">
            <span className="inline-flex items-center gap-2 font-body text-[11px] font-semibold uppercase tracking-[0.12em] text-gold/60 mb-6">
              <span className="w-6 h-px bg-gold/30" />
              Amit mondanak
              <span className="w-6 h-px bg-gold/30" />
            </span>
            <h2 className="font-heading font-bold text-[28px] md:text-[40px] lg:text-[48px] leading-[1.05] tracking-[-0.02em] text-white">
              Nem egyedül gondolod,{" "}
              <span className="text-gradient-gold">hogy itt az idő.</span>
            </h2>
          </div>
        </AnimateOnScroll>

        <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-5" stagger={0.12}>
          {TESTIMONIALS.map((testimonial, i) => (
            <StaggerItem key={i}>
              <div className="gradient-border-card p-8 h-full group backdrop-blur-sm">
                <span className="text-gradient-gold font-heading text-[48px] leading-none block mb-4 opacity-40">&ldquo;</span>
                <blockquote>
                  <p className="font-body text-[15px] text-white/50 leading-[1.8] mb-6">
                    {testimonial.quote}
                  </p>
                </blockquote>
                <div className="pt-4 border-t border-white/[0.05]">
                  <p className="font-body text-[12px] text-white/25">
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
