export function Footer() {
  return (
    <footer className="bg-navy py-12">
      <div className="mx-auto max-w-[1200px] px-5 md:px-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Brand */}
          <div className="text-center md:text-left">
            <span className="font-heading text-xl font-bold">
              <span className="text-white">Expert</span>{" "}
              <span className="text-green">Flow</span>
            </span>
            <p className="font-body text-sm text-text-on-dark italic mt-1">
              Új eszközök. Örök értékek.
            </p>
          </div>

          {/* Links */}
          <nav className="flex items-center gap-6">
            <a
              href="#"
              className="font-body text-sm text-text-on-dark hover:text-green transition-colors"
            >
              Adatvédelem
            </a>
            <a
              href="#"
              className="font-body text-sm text-text-on-dark hover:text-green transition-colors"
            >
              ÁSZF
            </a>
            <a
              href="#"
              className="font-body text-sm text-text-on-dark hover:text-green transition-colors"
            >
              Kapcsolat
            </a>
          </nav>

          {/* Social icons placeholder */}
          <div className="flex items-center gap-4">
            <a
              href="#"
              aria-label="Instagram"
              className="text-text-on-dark hover:text-green transition-colors"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
              </svg>
            </a>
            <a
              href="#"
              aria-label="YouTube"
              className="text-text-on-dark hover:text-green transition-colors"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17"/>
                <path d="m10 15 5-3-5-3z"/>
              </svg>
            </a>
            <a
              href="#"
              aria-label="LinkedIn"
              className="text-text-on-dark hover:text-green transition-colors"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
                <rect width="4" height="12" x="2" y="9"/>
                <circle cx="4" cy="4" r="2"/>
              </svg>
            </a>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/[0.08] mt-8 pt-6 text-center">
          <p className="font-body text-xs text-white/40">
            © 2026 Nagy Attila — Expert Flow. Minden jog fenntartva.
          </p>
        </div>
      </div>
    </footer>
  );
}
