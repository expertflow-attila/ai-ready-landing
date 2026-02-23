import { ArrowRight } from "lucide-react";
import { AnimateOnScroll } from "./AnimateOnScroll";

export function FinalCTA() {
  return (
    <section className="relative overflow-hidden" style={{ background: "linear-gradient(145deg, #2d8a5e 0%, #246e4b 50%, #1a5c3d 100%)" }}>
      {/* Decorative elements */}
      <div className="absolute top-0 left-[20%] w-[400px] h-[400px] rounded-full bg-white/[0.03] blur-[120px]" />
      <div className="absolute bottom-0 right-[10%] w-[300px] h-[300px] rounded-full bg-gold/[0.05] blur-[100px]" />

      <div className="relative z-10 mx-auto max-w-[800px] text-center px-6 md:px-10 py-[100px] md:py-[130px]">
        <AnimateOnScroll>
          <h2 className="font-heading font-bold text-[28px] md:text-[40px] lg:text-[48px] leading-[1.1] text-white mb-5">
            Az AI nem vár.
            <br />
            <span className="font-normal italic text-white/70">De segít — ha engeded.</span>
          </h2>
          <p className="font-body text-[17px] text-white/50 mb-10">
            10 hét. 10 rendszer. Egy döntés.
          </p>
          <a
            href="#feliratkozas"
            className="group inline-flex items-center gap-2 rounded-2xl bg-white px-10 py-5 font-body text-[15px] font-semibold text-green transition-all duration-400 hover:shadow-[0_8px_30px_rgba(255,255,255,0.2)] hover:-translate-y-1"
          >
            Feliratkozom a várólistára
            <ArrowRight size={16} className="transition-transform duration-300 group-hover:translate-x-1" />
          </a>
          <p className="font-body text-[12px] text-white/30 mt-6 tracking-wide">
            Ingyenes · 30 másodperc · Elsőként értesülsz
          </p>
        </AnimateOnScroll>
      </div>
    </section>
  );
}
