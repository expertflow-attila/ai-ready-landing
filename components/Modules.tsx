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
    <section id="modulok" className="bg-cream py-[var(--section-padding-y)]">
      <div className="mx-auto max-w-[1200px] px-5 md:px-10">
        <AnimateOnScroll>
          <div className="text-center mb-12 md:mb-16">
            <p className="font-body text-xs uppercase tracking-[0.08em] text-green mb-4">
              10 HÉT, 10 MODUL
            </p>
            <h2 className="font-heading font-semibold text-2xl md:text-[36px] leading-[1.2] text-navy max-w-[700px] mx-auto mb-4">
              Minden hét egy új képesség. Minden modul egy működő rendszer.
            </h2>
            <p className="font-body text-base text-text-light max-w-[640px] mx-auto">
              Az alábbi modulok egymásra épülnek. Az első héten megalapozod
              a digitális jelenléted, a tizedik hétre már egy komplett, AI-val
              megtámogatott vállalkozásod lesz.
            </p>
          </div>
        </AnimateOnScroll>

        <div className="max-w-[800px] mx-auto">
          {MODULES.map((module, i) => {
            const isOpen = openIndex === i;
            const panelId = `module-panel-${i}`;
            const headerId = `module-header-${i}`;

            return (
              <AnimateOnScroll key={module.number} delay={i * 40}>
                <div className="border-b border-cream-dark">
                  {/* Accordion header */}
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
                    className="w-full flex items-center justify-between py-6 text-left group cursor-pointer"
                  >
                    <div className="flex items-start gap-4 md:gap-6 flex-1 min-w-0">
                      <span className="font-heading font-bold text-2xl text-green shrink-0">
                        {module.number}
                      </span>
                      <div className="min-w-0">
                        <h3 className="font-body text-lg font-semibold text-navy group-hover:text-green transition-colors">
                          {module.title}
                        </h3>
                        <p className="font-body text-sm text-text-light mt-0.5">
                          {module.subtitle}
                        </p>
                      </div>
                    </div>
                    <Plus
                      size={20}
                      className={cn(
                        "shrink-0 text-green transition-transform duration-300 ml-4",
                        isOpen && "rotate-45"
                      )}
                    />
                  </button>

                  {/* Accordion content */}
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
                      <div className="bg-white rounded-xl p-6 mb-6">
                        <p className="font-body text-[15px] text-text leading-[1.7] max-w-[640px]">
                          {module.content}
                        </p>
                        <p className="font-body text-sm font-semibold text-green mt-4">
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
