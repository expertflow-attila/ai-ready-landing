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
      <div className="absolute top-[20%] left-[30%] w-[500px] h-[500px] rounded-full bg-green/[0.02] blur-[130px]" />
      <div className="absolute inset-0 grain-dark" />

      <div className="relative z-10 mx-auto max-w-[1200px] px-6 md:px-10">
        <AnimateOnScroll>
          <div className="text-center mb-16 md:mb-20">
            <span className="section-label text-green/80 justify-center">Kérdések</span>
            <h2 className="font-heading font-semibold text-[28px] md:text-[38px] lg:text-[44px] leading-[1.1] text-white">
              Válaszok a leggyakoribb
              <br />
              <span className="italic text-green/70 font-normal">kérdésekre.</span>
            </h2>
          </div>
        </AnimateOnScroll>

        <div className="max-w-[680px] mx-auto">
          {FAQ_ITEMS.map((item, i) => {
            const isOpen = openIndex === i;
            const panelId = `faq-panel-${i}`;
            const headerId = `faq-header-${i}`;

            return (
              <AnimateOnScroll key={i} delay={i * 40}>
                <div className={cn(
                  "border-b transition-colors duration-300",
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
                    className="w-full flex items-center justify-between py-6 text-left group cursor-pointer"
                  >
                    <h3 className={cn(
                      "font-body text-[15px] md:text-[16px] font-medium pr-4 transition-colors duration-300",
                      isOpen ? "text-green" : "text-cream/70 group-hover:text-cream"
                    )}>
                      {item.question}
                    </h3>
                    <div className={cn(
                      "w-7 h-7 rounded-full border flex items-center justify-center shrink-0 transition-all duration-300",
                      isOpen
                        ? "border-green/30 bg-green/[0.08]"
                        : "border-white/10 group-hover:border-white/20"
                    )}>
                      <Plus
                        size={12}
                        className={cn(
                          "text-green transition-transform duration-400",
                          isOpen && "rotate-45"
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
                      <p className="font-body text-[14px] text-cream/40 leading-[1.8] pb-6">
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
