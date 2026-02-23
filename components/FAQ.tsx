"use client";

import { useState } from "react";
import { Plus } from "lucide-react";
import { FAQ_ITEMS } from "@/lib/constants";
import { AnimateOnScroll } from "./AnimateOnScroll";
import { cn } from "@/lib/utils";

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="gyik" className="relative bg-navy py-[var(--section-py)] overflow-hidden">
      <div className="relative z-10 mx-auto max-w-[1100px] px-6 md:px-8">
        <AnimateOnScroll>
          <div className="text-center mb-14 md:mb-16">
            <p className="font-body text-[12px] font-semibold uppercase tracking-[0.1em] text-green/70 mb-5">
              Kérdések
            </p>
            <h2 className="font-body font-bold text-[26px] md:text-[36px] lg:text-[42px] leading-[1.1] tracking-[-0.02em] text-white">
              Válaszok a leggyakoribb kérdésekre.
            </h2>
          </div>
        </AnimateOnScroll>

        <div className="max-w-[640px] mx-auto">
          {FAQ_ITEMS.map((item, i) => {
            const isOpen = openIndex === i;
            const panelId = `faq-panel-${i}`;
            const headerId = `faq-header-${i}`;

            return (
              <AnimateOnScroll key={i} delay={i * 30}>
                <div className={cn(
                  "border-b transition-colors duration-200",
                  isOpen ? "border-green/20" : "border-white/[0.06]"
                )}>
                  <button
                    id={headerId}
                    onClick={() => toggle(i)}
                    onKeyDown={(e) => {
                      if (e.key === "Escape" && isOpen) setOpenIndex(null);
                    }}
                    aria-expanded={isOpen}
                    aria-controls={panelId}
                    className="w-full flex items-center justify-between py-5 md:py-6 text-left group cursor-pointer"
                  >
                    <h3 className={cn(
                      "font-body text-[14px] md:text-[15px] font-medium pr-4 transition-colors duration-200",
                      isOpen ? "text-white" : "text-white/50 group-hover:text-white/70"
                    )}>
                      {item.question}
                    </h3>
                    <div className={cn(
                      "w-7 h-7 rounded-full border flex items-center justify-center shrink-0 transition-all duration-200",
                      isOpen ? "border-green/30 bg-green/5" : "border-white/[0.08] group-hover:border-white/[0.15]"
                    )}>
                      <Plus
                        size={12}
                        className={cn(
                          "transition-transform duration-300",
                          isOpen ? "text-green rotate-45" : "text-white/30"
                        )}
                        strokeWidth={2}
                      />
                    </div>
                  </button>

                  <div
                    id={panelId}
                    role="region"
                    aria-labelledby={headerId}
                    className={cn("accordion-content", isOpen && "is-open")}
                  >
                    <div>
                      <p className="font-body text-[14px] text-white/35 leading-[1.7] pb-6">
                        {item.answer}
                      </p>
                    </div>
                  </div>
                </div>
              </AnimateOnScroll>
            );
          })}
        </div>
      </div>
    </section>
  );
}
