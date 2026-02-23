import { ChevronDown, ArrowRight } from "lucide-react";
import { HERO_STATS } from "@/lib/constants";

export function Hero() {
  return (
    <section className="relative min-h-screen min-h-[100dvh] bg-cream flex items-center justify-center overflow-hidden">
      {/* Atmospheric background */}
      <div className="absolute top-[15%] left-[10%] w-[400px] h-[400px] rounded-full bg-green/[0.04] blur-[120px]" />
      <div className="absolute bottom-[10%] right-[5%] w-[350px] h-[350px] rounded-full bg-gold/[0.06] blur-[100px]" />
      <div className="absolute top-[40%] right-[30%] w-[200px] h-[200px] rounded-full bg-navy/[0.02] blur-[80px]" />

      {/* Grain */}
      <div className="absolute inset-0 grain" />

      {/* Grid */}
      <div
        className="absolute inset-0 opacity-[0.025]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(10,22,40,0.4) 1px, transparent 1px), linear-gradient(90deg, rgba(10,22,40,0.4) 1px, transparent 1px)",
          backgroundSize: "80px 80px",
        }}
      />

      <div className="relative z-10 mx-auto max-w-[1200px] px-6 md:px-10 text-center pt-[100px] pb-16 md:pb-24">
        {/* Label */}
        <div className="flex items-center justify-center gap-3 mb-10">
          <span className="w-8 h-[1.5px] bg-gradient-to-r from-transparent to-green" />
          <p className="font-body text-[11px] font-semibold uppercase tracking-[0.14em] text-text-light/80">
            Online kurzus · Indul 2026 október
          </p>
          <span className="w-8 h-[1.5px] bg-gradient-to-l from-transparent to-green" />
        </div>

        {/* Main heading */}
        <h1 className="font-heading font-bold text-[40px] sm:text-[50px] md:text-[60px] lg:text-[72px] leading-[1.05] tracking-tight text-navy max-w-[900px] mx-auto mb-8">
          Készülj fel az
          <br className="hidden sm:block" />{" "}
          AI-korszakra.
          <br />
          <span className="italic text-green font-normal">Egyedül is.</span>
        </h1>

        {/* Subtitle */}
        <p className="font-body text-[16px] md:text-[18px] lg:text-[20px] font-light leading-[1.8] text-text-light max-w-[580px] mx-auto mb-12">
          10 hét, 10 modul. Nem programozást tanulsz — hanem azt, hogyan
          dolgozzon az AI helyetted.
        </p>

        {/* CTA */}
        <div className="mb-20">
          <a href="#feliratkozas" className="btn-primary text-[15px]">
            Feliratkozom a várólistára
            <ArrowRight size={16} />
          </a>
          <p className="font-body text-[12px] text-text-light/50 mt-5 tracking-wide">
            Ingyenes · Nem küldünk spam-et · Elsőként értesülsz
          </p>
        </div>

        {/* Stat cards */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-5 sm:gap-6">
          {HERO_STATS.map((stat, i) => (
            <div
              key={stat.label}
              className="group relative bg-white/60 backdrop-blur-sm rounded-2xl px-8 py-7 min-w-[190px] border border-cream-dark/50 shadow-[0_2px_20px_rgba(10,22,40,0.03)] transition-all duration-500 hover:shadow-[0_12px_40px_rgba(10,22,40,0.08)] hover:border-green/15 hover:-translate-y-1 hover:bg-white/80"
            >
              <span className="block font-heading font-bold text-[44px] leading-none bg-gradient-to-br from-green to-green-dark bg-clip-text text-transparent">
                {stat.value}
              </span>
              <span className="block font-body text-[13px] text-text-light/60 mt-2 font-medium">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce-slow">
        <ChevronDown size={22} className="text-text-light/25" strokeWidth={1.5} />
      </div>
    </section>
  );
}
