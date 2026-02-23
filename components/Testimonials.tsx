"use client";

import { TESTIMONIALS } from "@/lib/constants";
import { AnimateOnScroll } from "./AnimateOnScroll";

export function Testimonials() {
  return (
    <section className="bg-cream-dark py-[var(--section-padding-y)]">
      <div className="mx-auto max-w-[1200px] px-5 md:px-10">
        <AnimateOnScroll>
          <div className="text-center mb-12 md:mb-16">
            <p className="font-body text-xs uppercase tracking-[0.08em] text-green mb-4">
              AMIT MONDANAK
            </p>
            <h2 className="font-heading font-semibold text-2xl md:text-[36px] leading-[1.2] text-navy">
              Nem egyedül gondolod, hogy itt az idő.
            </h2>
          </div>
        </AnimateOnScroll>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {TESTIMONIALS.map((testimonial, i) => (
            <AnimateOnScroll key={i} delay={i * 120}>
              <div className="bg-white rounded-2xl p-8 relative h-full">
                {/* Decorative quote mark */}
                <span
                  className="absolute top-4 left-6 font-heading text-[60px] text-green/20 leading-none select-none"
                  aria-hidden="true"
                >
                  &ldquo;
                </span>

                <blockquote className="relative pt-8">
                  <p className="font-heading italic text-[17px] text-navy leading-[1.7]">
                    &ldquo;{testimonial.quote}&rdquo;
                  </p>
                </blockquote>

                <p className="font-body text-sm font-medium text-text-light mt-6">
                  {testimonial.name}
                </p>
              </div>
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
