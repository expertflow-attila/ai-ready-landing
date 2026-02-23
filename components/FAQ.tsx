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
    <section id="gyik" className="bg-navy py-[var(--section-padding-y)]">
      <div className="mx-auto max-w-[1200px] px-5 md:px-10">
        <AnimateOnScroll>
          <div className="text-center mb-12 md:mb-16">
            <p className="font-body text-xs uppercase tracking-[0.08em] text-green mb-4">
              KÉRDÉSEK
            </p>
            <h2 className="font-heading font-semibold text-2xl md:text-[36px] leading-[1.2] text-white">
              Válaszok a leggyakoribb kérdésekre.
            </h2>
          </div>
        </AnimateOnScroll>

        <div className="max-w-[700px] mx-auto">
          {FAQ_ITEMS.map((item, i) => {
            const isOpen = openIndex === i;
            const panelId = `faq-panel-${i}`;
            const headerId = `faq-header-${i}`;

            return (
              <AnimateOnScroll key={i} delay={i * 40}>
                <div className="border-b border-white/10">
                  <button
                    id={headerId}
                    onClick={() => toggle(i)}
                    onKeyDown={(e) => {
                      if (e.key === "Escape" && isOpen) {
                        setOpenIndex(null);
                      }
                    }}
                    aria-expanded={isOpen}
                    aria-controls={panelId}
                    className="w-full flex items-center justify-between py-5 text-left group cursor-pointer"
                  >
                    <h3 className="font-body text-[17px] font-semibold text-white group-hover:text-green transition-colors pr-4">
                      {item.question}
                    </h3>
                    <Plus
                      size={18}
                      className={cn(
                        "shrink-0 text-green transition-transform duration-300",
                        isOpen && "rotate-45"
                      )}
                    />
                  </button>

                  <div
                    id={panelId}
                    role="region"
                    aria-labelledby={headerId}
                    className={cn(
                      "accordion-content",
                      isOpen && "is-open"
                    )}
                  >
                    <div>
                      <p className="font-body text-[15px] text-text-on-dark leading-[1.7] pb-5">
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
