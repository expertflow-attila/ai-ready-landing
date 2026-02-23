"use client";

import { Target, Bot, Users, Shield } from "lucide-react";
import { VALUE_PROPS } from "@/lib/constants";
import { AnimateOnScroll } from "./AnimateOnScroll";

const ICON_MAP: Record<string, React.ElementType> = {
  target: Target,
  bot: Bot,
  users: Users,
  shield: Shield,
};

export function Solution() {
  return (
    <section className="relative bg-cream py-[var(--section-py)] overflow-hidden">
      <div className="absolute top-0 right-[10%] w-[300px] h-[300px] rounded-full bg-green/[0.03] blur-[100px]" />
      <div className="absolute inset-0 grain" />

      <div className="relative z-10 mx-auto max-w-[1200px] px-6 md:px-10">
        <AnimateOnScroll>
          <div className="max-w-[640px] mb-16 md:mb-20">
            <span className="section-label">A megoldás</span>
            <h2 className="font-heading font-bold text-[28px] md:text-[38px] lg:text-[44px] leading-[1.1] text-navy mb-5">
              Nem kurzust kapsz.
              <br />
              <span className="italic text-green font-normal">Rendszert.</span>
            </h2>
            <p className="font-body text-[16px] md:text-[17px] text-text-light leading-[1.8]">
              Az AI Ready nem 50 videó és &apos;boldogulj&apos;. Ez egy 10 hetes program, ahol minden héten EGY dolgot tanulsz meg és be is vezeted a vállalkozásodba.
            </p>
          </div>
        </AnimateOnScroll>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {VALUE_PROPS.map((prop, i) => {
            const Icon = ICON_MAP[prop.icon];
            return (
              <AnimateOnScroll key={prop.title} delay={i * 100}>
                <div className="card-premium group h-full">
                  <div className="w-12 h-12 rounded-xl bg-green/[0.08] flex items-center justify-center mb-6 group-hover:bg-green/[0.14] transition-colors duration-500">
                    {Icon && (
                      <Icon size={22} className="text-green" strokeWidth={1.8} />
                    )}
                  </div>
                  <h3 className="font-body text-[18px] font-semibold text-navy mb-3">
                    {prop.title}
                  </h3>
                  <p className="font-body text-[14px] text-text-light leading-[1.8]">
                    {prop.description}
                  </p>
                </div>
              </AnimateOnScroll>
            );
          })}
        </div>
      </div>
    </section>
  );
}
