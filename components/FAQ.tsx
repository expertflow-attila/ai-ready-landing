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
    <section id="gyik" className="relative py-[var(--section-py)] overflow-hidden">
      <div className="divider absolute top-0 left-0 right-0" />

      <div className="relative z-10 mx-auto max-w-[1100px] px-6 md:px-8">
        <AnimateOnScroll>
          <div className="text-center mb-14 md:mb-20">
            <span className="inline-flex items-center gap-2 font-body text-[11px] font-semibold uppercase tracking-[0.14em] text-accent mb-6">
              <span className="w-6 h-px bg-accent/40" />
              Kérdések
              <span className="w-6 h-px bg-accent/40" />
            </span>
            <h2
              className="font-heading font-bold text-[28px] md:text-[40px] lg:text-[48px] leading-[1.05] tracking-[-0.02em] text-text-primary"
              style={{ textWrap: "balance" }}
            >
              Válaszok a leggyakoribb{" "}
              <span className="text-accent">kérdésekre.</span>
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
                  "border-b transition-colors duration-300",
                  isOpen ? "border-accent/30" : "border-border-subtle"
                )}>
                  <button
                    id={headerId}
                    onClick={() => toggle(i)}
                    onKeyDown={(e) => {
                      if (e.key === "Escape" && isOpen) setOpenIndex(null);
                    }}
                    aria-expanded={isOpen}
                    aria-controls={panelId}
                    className="w-full flex items-center justify-between py-6 text-left group cursor-pointer"
                  >
                    <h3 className={cn(
                      "font-body text-[14px] md:text-[15px] font-medium pr-4 transition-colors duration-300",
                      isOpen ? "text-text-primary" : "text-text-secondary group-hover:text-text-primary"
                    )}>
                      {item.question}
                    </h3>
                    <div className={cn(
                      "w-7 h-7 rounded-full border flex items-center justify-center shrink-0 transition-all duration-300",
                      isOpen ? "border-accent/40 bg-accent-subtle" : "border-border-default group-hover:border-border-strong"
                    )}>
                      <Plus
                        size={12}
                        className={cn(
                          "transition-all duration-300",
                          isOpen ? "text-accent rotate-45" : "text-text-disabled"
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
                      <p className="font-body text-[14px] text-text-secondary leading-[1.8] pb-6" style={{ textWrap: "pretty" }}>
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
