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
    <section className="relative mesh-dark-alt py-[var(--section-py)] overflow-hidden">
      <div className="absolute inset-0 grain" />
      <div className="divider-gradient absolute top-0 left-0 right-0" />

      <div className="relative z-10 mx-auto max-w-[1100px] px-6 md:px-8">
        <AnimateOnScroll>
          <div className="max-w-[600px] mb-14 md:mb-20">
            <span className="inline-flex items-center gap-2 font-body text-[11px] font-semibold uppercase tracking-[0.12em] text-gold/60 mb-6">
              <span className="w-6 h-px bg-gold/30" />
              A megoldás
            </span>
            <h2 className="font-heading font-bold text-[28px] md:text-[40px] lg:text-[48px] leading-[1.05] tracking-[-0.02em] text-white mb-5">
              Nem kurzust kapsz.{" "}
              <span className="text-gradient">Rendszert.</span>
            </h2>
            <p className="font-body text-[16px] text-white/35 leading-[1.8]">
              Az AI Ready nem 50 videó és &apos;boldogulj&apos;. Ez egy 10 hetes program,
              ahol minden héten EGY dolgot tanulsz meg és be is vezeted a vállalkozásodba.
            </p>
          </div>
        </AnimateOnScroll>

        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-5" stagger={0.1}>
          {VALUE_PROPS.map((prop) => {
            const Icon = ICON_MAP[prop.icon];
            return (
              <StaggerItem key={prop.title}>
                <div className="gradient-border-card p-8 h-full group backdrop-blur-sm">
                  <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-green/20 to-green/5 flex items-center justify-center mb-6">
                    {Icon && <Icon size={20} className="text-green-light" strokeWidth={1.8} />}
                  </div>
                  <h3 className="font-body text-[17px] font-semibold text-white mb-2.5">
                    {prop.title}
                  </h3>
                  <p className="font-body text-[14px] text-white/35 leading-[1.8]">
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
