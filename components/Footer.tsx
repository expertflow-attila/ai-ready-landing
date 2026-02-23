import { Instagram, Youtube, Linkedin } from "lucide-react";

export function Footer() {
  return (
    <footer className="relative bg-navy overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/[0.06] to-transparent" />

      <div className="relative z-10 mx-auto max-w-[1200px] px-6 md:px-10 pt-16 pb-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 items-start">
          {/* Brand */}
          <div>
            <span className="font-heading text-[22px] font-bold">
              <span className="text-white">Expert</span>
              <span className="text-green ml-1.5">Flow</span>
            </span>
            <p className="font-heading italic text-[14px] text-cream/25 mt-2">
              Új eszközök. Örök értékek.
            </p>
          </div>

          {/* Links */}
          <nav className="flex items-center gap-8 md:justify-center">
            {["Adatvédelem", "ÁSZF", "Kapcsolat"].map((label) => (
              <a
                key={label}
                href="#"
                className="font-body text-[13px] text-cream/30 hover:text-cream/60 transition-colors duration-300"
              >
                {label}
              </a>
            ))}
          </nav>

          {/* Social */}
          <div className="flex items-center gap-4 md:justify-end">
            {[
              { Icon: Instagram, label: "Instagram" },
              { Icon: Youtube, label: "YouTube" },
              { Icon: Linkedin, label: "LinkedIn" },
            ].map(({ Icon, label }) => (
              <a
                key={label}
                href="#"
                aria-label={label}
                className="w-9 h-9 rounded-full border border-white/[0.06] flex items-center justify-center text-cream/25 hover:text-green hover:border-green/30 transition-all duration-300"
              >
                <Icon size={15} strokeWidth={1.5} />
              </a>
            ))}
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-white/[0.05] to-transparent mt-12 mb-8" />

        <p className="font-body text-[11px] text-cream/15 text-center tracking-wider">
          © 2026 Nagy Attila — Expert Flow. Minden jog fenntartva.
        </p>
      </div>
    </footer>
  );
}
