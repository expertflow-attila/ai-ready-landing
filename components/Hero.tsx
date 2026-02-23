import { ChevronDown } from "lucide-react";
import { HERO_STATS } from "@/lib/constants";

export function Hero() {
  return (
    <section className="min-h-screen min-h-[100dvh] bg-cream flex items-center justify-center relative pt-[72px]">
      <div className="mx-auto max-w-[1200px] px-5 md:px-10 text-center py-16 md:py-24">
        {/* Section label */}
        <div className="mb-8">
          <p className="font-body text-xs uppercase tracking-[0.08em] text-text-light mb-3">
            AI READY — ONLINE KURZUS · INDUL: 2026 OKTÓBER
          </p>
          <div className="mx-auto w-10 h-px bg-green" />
        </div>

        {/* Main heading */}
        <h1 className="font-heading font-bold text-[36px] md:text-[52px] lg:text-[64px] leading-[1.1] text-navy max-w-[800px] mx-auto mb-6">
          Készülj fel az AI-korszakra.
          <br />
          <span className="italic text-green">Egyedül is.</span>
        </h1>

        {/* Subtitle */}
        <p className="font-body text-base md:text-lg lg:text-xl leading-[1.7] text-text-light max-w-[640px] mx-auto mb-10">
          10 hét, 10 modul. Nem programozást tanulsz — hanem azt, hogyan
          dolgozzon az AI helyetted. Rendszereket kapsz, nem elméleteket.
        </p>

        {/* CTA */}
        <div className="mb-12">
          <a
            href="#feliratkozas"
            className="inline-flex items-center justify-center rounded-lg bg-green px-8 py-4 font-body text-[15px] font-bold uppercase tracking-[0.04em] text-white transition-all duration-300 hover:bg-green-light hover:scale-[1.02]"
          >
            Feliratkozom a várólistára →
          </a>
          <p className="font-body text-[13px] text-text-light mt-3">
            Ingyenes. Nem küldünk spam-et. Elsőként értesülsz az indulásról.
          </p>
        </div>

        {/* Stat cards */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
          {HERO_STATS.map((stat) => (
            <div
              key={stat.label}
              className="bg-white rounded-xl shadow-[0_2px_12px_rgba(0,0,0,0.05)] px-6 py-5 min-w-[160px]"
            >
              <span className="block font-heading font-bold text-4xl text-green">
                {stat.value}
              </span>
              <span className="block font-body text-sm text-text-light mt-1">
                {stat.label}
              </span>
            </div>
          ))}
        </div>

        {/* Scroll indicator */}
        <div className="animate-bounce-slow text-text-light">
          <ChevronDown size={28} className="mx-auto" />
        </div>
      </div>
    </section>
  );
}
