import { Instagram, Youtube, Linkedin } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-navy">
      <div className="mx-auto max-w-[1100px] px-6 md:px-8 py-12">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          {/* Brand */}
          <div>
            <span className="font-body text-[15px] font-bold text-white tracking-[-0.02em]">
              Expert<span className="text-green ml-0.5">Flow</span>
            </span>
          </div>

          {/* Links */}
          <nav className="flex items-center gap-6">
            {["Adatvédelem", "ÁSZF", "Kapcsolat"].map((label) => (
              <a
                key={label}
                href="#"
                className="font-body text-[12px] text-white/25 hover:text-white/50 transition-colors duration-200"
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
                className="w-8 h-8 rounded-full border border-white/[0.06] flex items-center justify-center text-white/20 hover:text-white/50 hover:border-white/[0.12] transition-all duration-200"
              >
                <Icon size={14} strokeWidth={1.5} />
              </a>
            ))}
          </div>
        </div>

        <div className="h-px bg-white/[0.04] mt-8 mb-6" />

        <p className="font-body text-[11px] text-white/15">
          © 2026 Nagy Attila — Expert Flow. Minden jog fenntartva.
        </p>
      </div>
    </footer>
  );
}
