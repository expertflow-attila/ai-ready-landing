"use client";

import { Target, Bot, Users, Shield } from "lucide-react";
import { VALUE_PROPS } from "@/lib/constants";
import { AnimateOnScroll, StaggerContainer, StaggerItem } from "./AnimateOnScroll";

const ICON_MAP: Record<string, React.ElementType> = {
  target: Target,
  bot: Bot,
  users: Users,
  shield: Shield,
};

export function Solution() {
  return (
    <section className="relative bg-surface py-[var(--section-py)] overflow-hidden">
      <div className="relative z-10 mx-auto max-w-[1100px] px-6 md:px-8">
        <AnimateOnScroll>
          <div className="max-w-[560px] mb-14 md:mb-16">
            <p className="font-body text-[12px] font-semibold uppercase tracking-[0.1em] text-green mb-5">
              A megoldás
            </p>
            <h2 className="font-body font-bold text-[26px] md:text-[36px] lg:text-[42px] leading-[1.1] tracking-[-0.02em] text-navy mb-5">
              Nem kurzust kapsz.{" "}
              <span className="text-green">Rendszert.</span>
            </h2>
            <p className="font-body text-[15px] text-text-light leading-[1.7]">
              Az AI Ready nem 50 videó és &apos;boldogulj&apos;. Ez egy 10 hetes program,
              ahol minden héten EGY dolgot tanulsz meg és be is vezeted a vállalkozásodba.
            </p>
          </div>
        </AnimateOnScroll>

        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-4" stagger={0.08}>
          {VALUE_PROPS.map((prop) => {
            const Icon = ICON_MAP[prop.icon];
            return (
              <StaggerItem key={prop.title}>
                <div className="group rounded-2xl bg-white p-7 md:p-8 h-full border border-black/[0.04] shadow-layered hover:shadow-layered-lg hover:-translate-y-0.5 transition-all duration-300">
                  <div className="w-10 h-10 rounded-xl bg-green/[0.07] flex items-center justify-center mb-5">
                    {Icon && <Icon size={18} className="text-green" strokeWidth={2} />}
                  </div>
                  <h3 className="font-body text-[16px] font-semibold text-navy mb-2">
                    {prop.title}
                  </h3>
                  <p className="font-body text-[14px] text-text-light leading-[1.7]">
                    {prop.description}
                  </p>
                </div>
              </StaggerItem>
            );
          })}
        </StaggerContainer>
      </div>
    </section>
  );
}
