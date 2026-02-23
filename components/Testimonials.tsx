"use client";

import { TESTIMONIALS } from "@/lib/constants";
import { AnimateOnScroll } from "./AnimateOnScroll";

export function Testimonials() {
  return (
    <section className="relative bg-cream-dark/50 py-[var(--section-py)] overflow-hidden">
      <div className="absolute top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-gold/[0.03] blur-[150px]" />
      <div className="absolute inset-0 grain" />

      <div className="relative z-10 mx-auto max-w-[1200px] px-6 md:px-10">
        <AnimateOnScroll>
          <div className="text-center mb-16 md:mb-20">
            <span className="section-label justify-center">Amit mondanak</span>
            <h2 className="font-heading font-semibold text-[28px] md:text-[38px] lg:text-[44px] leading-[1.1] text-navy">
              Nem egyedül gondolod,
              <br />
              <span className="italic text-green font-normal">hogy itt az idő.</span>
            </h2>
          </div>
        </AnimateOnScroll>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {TESTIMONIALS.map((testimonial, i) => (
            <AnimateOnScroll key={i} delay={i * 120}>
              <div className="card-premium relative h-full group">
                {/* Quote decoration */}
                <span
                  className="absolute top-5 left-7 font-heading text-[72px] leading-none select-none bg-gradient-to-br from-green/15 to-gold/10 bg-clip-text text-transparent"
                  aria-hidden="true"
                >
                  &ldquo;
                </span>

                <blockquote className="relative pt-12">
                  <p className="font-heading italic text-[16px] text-navy/80 leading-[1.8]">
                    &ldquo;{testimonial.quote}&rdquo;
                  </p>
                </blockquote>

                <div className="mt-6 pt-5 border-t border-cream-dark/50">
                  <p className="font-body text-[12px] font-medium text-text-light/60 tracking-wide">
                    {testimonial.name}
                  </p>
                </div>
              </div>
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
