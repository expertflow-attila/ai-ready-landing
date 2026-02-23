import { Instagram, Youtube, Linkedin } from "lucide-react";

export function Footer() {
  return (
    <footer className="relative bg-navy border-t border-white/[0.03]">
      <div className="mx-auto max-w-[1100px] px-6 md:px-8 py-12">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          {/* Brand */}
          <div>
            <span className="font-heading text-[18px] font-bold">
              <span className="text-white">Expert</span>
              <span className="text-gradient ml-1">Flow</span>
            </span>
            <p className="font-heading italic text-[12px] text-white/15 mt-1">
              Új eszközök. Örök értékek.
            </p>
          </div>

          {/* Links */}
          <nav className="flex items-center gap-6">
            {["Adatvédelem", "ÁSZF", "Kapcsolat"].map((label) => (
              <a
                key={label}
                href="#"
                className="font-body text-[12px] text-white/20 hover:text-white/40 transition-colors duration-200"
              >
                {label}
              </a>
            ))}
          </nav>

          {/* Social */}
          <div className="flex items-center gap-3">
            {[
              { Icon: Instagram, label: "Instagram" },
              { Icon: Youtube, label: "YouTube" },
              { Icon: Linkedin, label: "LinkedIn" },
            ].map(({ Icon, label }) => (
              <a
                key={label}
                href="#"
                aria-label={label}
                className="w-9 h-9 rounded-full border border-white/[0.06] flex items-center justify-center text-white/20 hover:text-green hover:border-green/30 transition-all duration-300"
              >
                <Icon size={14} strokeWidth={1.5} />
              </a>
            ))}
          </div>
        </div>

        <div className="divider-subtle mt-8 mb-6" />

        <p className="font-body text-[11px] text-white/10">
          © 2026 Nagy Attila — Expert Flow. Minden jog fenntartva.
        </p>
      </div>
    </footer>
  );
}
