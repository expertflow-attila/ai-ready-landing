"use client";

import { useState } from "react";
import { Plus } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { MODULES } from "@/lib/constants";
import { AnimateOnScroll } from "./AnimateOnScroll";
import { cn } from "@/lib/utils";

export function Modules() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="modulok" className="relative bg-white py-[var(--section-py)] overflow-hidden">
      <div className="relative z-10 mx-auto max-w-[1100px] px-6 md:px-8">
        <AnimateOnScroll>
          <div className="max-w-[560px] mx-auto text-center mb-14 md:mb-16">
            <p className="font-body text-[12px] font-semibold uppercase tracking-[0.1em] text-green mb-5">
              10 hét, 10 modul
            </p>
            <h2 className="font-body font-bold text-[26px] md:text-[36px] lg:text-[42px] leading-[1.1] tracking-[-0.02em] text-navy mb-5">
              Minden hét egy új képesség.
            </h2>
            <p className="font-body text-[15px] text-text-light leading-[1.7]">
              Az alábbi modulok egymásra épülnek. Az első héten megalapozod
              a digitális jelenléted, a tizedik hétre egy komplett rendszered lesz.
            </p>
          </div>
        </AnimateOnScroll>

        <div className="max-w-[720px] mx-auto">
          {MODULES.map((module, i) => {
            const isOpen = openIndex === i;
            const panelId = `module-panel-${i}`;
            const headerId = `module-header-${i}`;

            return (
              <AnimateOnScroll key={module.number} delay={i * 30}>
                <div className={cn(
                  "border-b transition-colors duration-200",
                  isOpen ? "border-green/20" : "border-black/[0.06]"
                )}>
                  <button
                    id={headerId}
                    onClick={() => toggle(i)}
                    onKeyDown={(e) => {
                      if (e.key === "Escape" && isOpen) setOpenIndex(null);
                    }}
                    aria-expanded={isOpen}
                    aria-controls={panelId}
                    className="w-full flex items-center gap-5 py-5 md:py-6 text-left group cursor-pointer"
                  >
                    <span className={cn(
                      "font-body text-[13px] font-bold shrink-0 w-8 transition-colors duration-200",
                      isOpen ? "text-green" : "text-navy/20"
                    )}>
                      {module.number}
                    </span>
                    <div className="flex-1 min-w-0">
                      <h3 className={cn(
                        "font-body text-[15px] md:text-[16px] font-semibold transition-colors duration-200",
                        isOpen ? "text-navy" : "text-navy/70 group-hover:text-navy"
                      )}>
                        {module.title}
                      </h3>
                    </div>
                    <div className={cn(
                      "w-7 h-7 rounded-full border flex items-center justify-center shrink-0 transition-all duration-200",
                      isOpen ? "border-green/30 bg-green/5" : "border-black/[0.08] group-hover:border-black/[0.15]"
                    )}>
                      <Plus
                        size={12}
                        className={cn(
                          "transition-transform duration-300",
                          isOpen ? "text-green rotate-45" : "text-navy/30"
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
                      <div className="pl-13 pb-6" style={{ paddingLeft: "52px" }}>
                        <p className="font-body text-[13px] text-green/70 mb-3 font-medium">
                          {module.subtitle}
                        </p>
                        <p className="font-body text-[14px] text-text-light leading-[1.7] mb-4">
                          {module.content}
                        </p>
                        <p className="font-body text-[13px] font-semibold text-navy/70">
                          {module.result}
                        </p>
                      </div>
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
