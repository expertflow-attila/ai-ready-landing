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
    <section id="modulok" className="relative mesh-warm py-[var(--section-py)] overflow-hidden">
      <div className="absolute inset-0 grain" />
      <div className="divider-gradient absolute top-0 left-0 right-0" />

      <div className="relative z-10 mx-auto max-w-[1100px] px-6 md:px-8">
        <AnimateOnScroll>
          <div className="text-center mb-14 md:mb-20">
            <span className="inline-flex items-center gap-2 font-body text-[11px] font-semibold uppercase tracking-[0.12em] text-gold/60 mb-6">
              <span className="w-6 h-px bg-gold/30" />
              10 hét, 10 modul
              <span className="w-6 h-px bg-gold/30" />
            </span>
            <h2 className="font-heading font-bold text-[28px] md:text-[40px] lg:text-[48px] leading-[1.05] tracking-[-0.02em] text-white mb-5">
              Minden hét egy{" "}
              <span className="text-gradient-gold">új képesség.</span>
            </h2>
            <p className="font-body text-[15px] text-white/35 leading-[1.8] max-w-[520px] mx-auto">
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
                  "border-b transition-colors duration-300",
                  isOpen ? "border-green/20" : "border-white/[0.05]"
                )}>
                  <button
                    id={headerId}
                    onClick={() => toggle(i)}
                    onKeyDown={(e) => {
                      if (e.key === "Escape" && isOpen) setOpenIndex(null);
                    }}
                    aria-expanded={isOpen}
                    aria-controls={panelId}
                    className="w-full flex items-center gap-5 py-6 text-left group cursor-pointer"
                  >
                    <span className={cn(
                      "font-heading text-[20px] font-bold shrink-0 w-10 transition-all duration-300",
                      isOpen ? "text-gradient" : "text-white/15 group-hover:text-white/25"
                    )}>
                      {module.number}
                    </span>
                    <div className="flex-1 min-w-0">
                      <h3 className={cn(
                        "font-body text-[15px] md:text-[16px] font-semibold transition-colors duration-300",
                        isOpen ? "text-white" : "text-white/50 group-hover:text-white/70"
                      )}>
                        {module.title}
                      </h3>
                      <p className="font-body text-[12px] text-white/20 mt-0.5">
                        {module.subtitle}
                      </p>
                    </div>
                    <div className={cn(
                      "w-8 h-8 rounded-full border flex items-center justify-center shrink-0 transition-all duration-300",
                      isOpen ? "border-green/30 bg-green/10 glow-green" : "border-white/[0.08] group-hover:border-white/[0.15]"
                    )}>
                      <Plus
                        size={13}
                        className={cn(
                          "transition-all duration-300",
                          isOpen ? "text-green rotate-45" : "text-white/25"
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
                      <div className="pb-6 ml-[60px]">
                        <div className="glass-card !rounded-xl p-5">
                          <p className="font-body text-[14px] text-white/40 leading-[1.8] mb-4">
                            {module.content}
                          </p>
                          <div className="pt-3 border-t border-white/[0.05]">
                            <p className="font-body text-[13px] font-semibold text-gradient">
                              {module.result}
                            </p>
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
