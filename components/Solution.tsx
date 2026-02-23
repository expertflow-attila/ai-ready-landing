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
    <section className="bg-cream py-[var(--section-padding-y)]">
      <div className="mx-auto max-w-[1200px] px-5 md:px-10">
        <AnimateOnScroll>
          <div className="text-center mb-12 md:mb-16">
            <p className="font-body text-xs uppercase tracking-[0.08em] text-green mb-4">
              A MEGOLDÁS
            </p>
            <h2 className="font-heading font-bold text-2xl md:text-[36px] lg:text-[40px] leading-[1.2] text-navy mb-4">
              Nem kurzust kapsz. Rendszert.
            </h2>
            <p className="font-body text-[17px] text-text-light max-w-[680px] mx-auto leading-[1.7]">
              Az AI Ready nem 50 videó és &apos;boldogulj&apos;. Ez egy 10 hetes, lépésről
              lépésre vezető program, ahol minden héten EGY dolgot tanulsz meg
              és be is vezeted a vállalkozásodba. Nem elmélet. Működő rendszer.
            </p>
          </div>
        </AnimateOnScroll>

        {/* Value props grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {VALUE_PROPS.map((prop, i) => {
            const Icon = ICON_MAP[prop.icon];
            return (
              <AnimateOnScroll key={prop.title} delay={i * 100}>
                <div className="bg-white rounded-2xl p-8 shadow-[0_2px_20px_rgba(10,22,40,0.06)] transition-all duration-400 hover:-translate-y-1 hover:shadow-[0_10px_40px_rgba(10,22,40,0.1)] h-full">
                  {Icon && (
                    <Icon
                      size={36}
                      className="text-green mb-4"
                      strokeWidth={1.5}
                    />
                  )}
                  <h3 className="font-body text-xl font-semibold text-navy mb-2">
                    {prop.title}
                  </h3>
                  <p className="font-body text-[15px] text-text-light leading-[1.7]">
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
