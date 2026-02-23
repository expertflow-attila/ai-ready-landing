import { AnimateOnScroll } from "./AnimateOnScroll";

export function FinalCTA() {
  return (
    <section className="bg-green py-[100px] px-5 md:px-10">
      <div className="mx-auto max-w-[800px] text-center">
        <AnimateOnScroll>
          <h2 className="font-heading font-bold text-2xl md:text-[36px] lg:text-[40px] leading-[1.2] text-white mb-4">
            Az AI nem vár. De segít — ha engeded.
          </h2>
          <p className="font-body text-lg text-white/85 mb-8">
            10 hét. 10 rendszer. Egy döntés.
          </p>
          <a
            href="#feliratkozas"
            className="inline-flex items-center justify-center rounded-lg bg-white px-10 py-[18px] font-body text-[15px] font-bold uppercase tracking-[0.04em] text-green transition-all duration-300 hover:bg-white/90 hover:scale-[1.02]"
          >
            Feliratkozom a várólistára →
          </a>
          <p className="font-body text-[13px] text-white/70 mt-4">
            Ingyenes. 30 másodperc. Elsőként értesülsz.
          </p>
        </AnimateOnScroll>
      </div>
    </section>
  );
}
