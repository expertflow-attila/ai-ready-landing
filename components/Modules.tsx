"use client";

import { useState } from "react";
import { Plus } from "lucide-react";
import { MODULES } from "@/lib/constants";
import { AnimateOnScroll } from "./AnimateOnScroll";
import { cn } from "@/lib/utils";

export function Modules() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="modulok" className="relative bg-cream-light py-[var(--section-py)] overflow-hidden">
      <div className="absolute bottom-0 left-[20%] w-[400px] h-[400px] rounded-full bg-gold/[0.03] blur-[120px]" />
      <div className="absolute inset-0 grain" />

      <div className="relative z-10 mx-auto max-w-[1200px] px-6 md:px-10">
        <AnimateOnScroll>
          <div className="max-w-[640px] mx-auto text-center mb-16 md:mb-20">
            <span className="section-label justify-center">10 hét, 10 modul</span>
            <h2 className="font-heading font-semibold text-[28px] md:text-[38px] lg:text-[44px] leading-[1.1] text-navy mb-5">
              Minden hét egy{" "}
              <span className="italic text-green font-normal">új képesség.</span>
            </h2>
            <p className="font-body text-[15px] md:text-[16px] text-text-light leading-[1.8]">
              Az alábbi modulok egymásra épülnek. Az első héten megalapozod
              a digitális jelenléted, a tizedik hétre egy komplett, AI-val
              megtámogatott vállalkozásod lesz.
            </p>
          </div>
        </AnimateOnScroll>

        <div className="max-w-[780px] mx-auto">
          {MODULES.map((module, i) => {
            const isOpen = openIndex === i;
            const panelId = `module-panel-${i}`;
            const headerId = `module-header-${i}`;

            return (
              <AnimateOnScroll key={module.number} delay={i * 40}>
                <div className={cn(
                  "border-b transition-colors duration-300",
                  isOpen ? "border-green/20" : "border-cream-dark/70"
                )}>
                  <button
                    id={headerId}
                    onClick={() => toggle(i)}
                    onKeyDown={(e) => {
                      if (e.key === "Escape" && isOpen) setOpenIndex(null);
                    }}
                    aria-expanded={isOpen}
                    aria-controls={panelId}
                    className="w-full flex items-center justify-between py-7 text-left group cursor-pointer"
                  >
                    <div className="flex items-center gap-5 md:gap-7 flex-1 min-w-0">
                      <span className={cn(
                        "font-heading font-bold text-[26px] transition-colors duration-300 shrink-0 w-10",
                        isOpen ? "text-green" : "text-cream-dark"
                      )}>
                        {module.number}
                      </span>
                      <div className="min-w-0">
                        <h3 className={cn(
                          "font-body text-[16px] md:text-[17px] font-semibold transition-colors duration-300",
                          isOpen ? "text-green" : "text-navy group-hover:text-green"
                        )}>
                          {module.title}
                        </h3>
                        <p className="font-body text-[13px] text-text-light/60 mt-0.5">
                          {module.subtitle}
                        </p>
                      </div>
                    </div>
                    <div className={cn(
                      "w-8 h-8 rounded-full border flex items-center justify-center shrink-0 ml-4 transition-all duration-300",
                      isOpen
                        ? "border-green/30 bg-green/[0.06]"
                        : "border-cream-dark group-hover:border-green/30"
                    )}>
                      <Plus
                        size={14}
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
                      <div className="ml-[60px] md:ml-[68px] pb-7">
                        <div className="bg-white rounded-2xl p-6 border border-cream-dark/40">
                          <p className="font-body text-[14px] text-text leading-[1.8] max-w-[580px]">
                            {module.content}
                          </p>
                          <div className="flex items-center gap-2 mt-5 pt-4 border-t border-cream-dark/30">
                            <span className="font-body text-[13px] font-semibold text-green">
                              {module.result}
                            </span>
                          </div>
                        </div>
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
