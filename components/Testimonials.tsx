"use client";

import { TESTIMONIALS } from "@/lib/constants";
import { AnimateOnScroll, StaggerContainer, StaggerItem } from "./AnimateOnScroll";

export function Testimonials() {
  return (
    <section className="relative bg-bg-subtle py-[var(--section-py)] overflow-hidden">
      <div className="divider absolute top-0 left-0 right-0" />

      <div className="relative z-10 mx-auto max-w-[1100px] px-6 md:px-8">
        <AnimateOnScroll>
          <div className="text-center mb-14 md:mb-20">
            <span className="inline-flex items-center gap-2 font-body text-[11px] font-semibold uppercase tracking-[0.14em] text-text-tertiary mb-6">
              <span className="w-6 h-px bg-border-default" />
              Amit mondanak
              <span className="w-6 h-px bg-border-default" />
            </span>
            <h2
              className="font-heading font-bold text-[28px] md:text-[40px] lg:text-[48px] leading-[1.05] tracking-[-0.02em] text-text-primary"
              style={{ textWrap: "balance" }}
            >
              Nem egyedül gondolod,{" "}
              <span className="text-text-tertiary">hogy itt az idő.</span>
            </h2>
          </div>
        </AnimateOnScroll>

        <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-5" stagger={0.12}>
          {TESTIMONIALS.map((testimonial, i) => (
            <StaggerItem key={i}>
              <div className="card p-8 h-full">
                <span className="text-accent/25 font-heading text-[48px] leading-none block mb-4">&ldquo;</span>
                <blockquote>
                  <p className="font-body text-[15px] text-text-secondary leading-[1.8] mb-6" style={{ textWrap: "pretty" }}>
                    {testimonial.quote}
                  </p>
                </blockquote>
                <div className="pt-4 border-t border-border-subtle">
                  <p className="font-body text-[12px] text-text-disabled">
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
