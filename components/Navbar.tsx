"use client";

import { useState, useEffect, useCallback } from "react";
import { Menu, X, ArrowRight } from "lucide-react";
import { NAV_LINKS } from "@/lib/constants";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [isMobileMenuOpen]);

  const scrollTo = useCallback(
    (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
      e.preventDefault();
      setIsMobileMenuOpen(false);
      const el = document.querySelector(href);
      if (el) {
        const y = el.getBoundingClientRect().top + window.scrollY - 80;
        window.scrollTo({ top: y, behavior: "smooth" });
      }
    },
    []
  );

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
        isScrolled
          ? "bg-cream/90 backdrop-blur-xl border-b border-cream-dark/50 shadow-[0_1px_20px_rgba(10,22,40,0.04)]"
          : "bg-transparent"
      )}
    >
      <div className="mx-auto max-w-[1200px] px-6 md:px-10 flex items-center justify-between h-[80px]">
        <a
          href="#"
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
          className="font-heading text-[22px] font-bold tracking-tight relative group"
        >
          <span className="text-navy">Expert</span>
          <span className="text-green ml-1.5">Flow</span>
          <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-gradient-to-r from-green to-gold group-hover:w-full transition-all duration-500" />
        </a>

        <div className="hidden md:flex items-center gap-10">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => scrollTo(e, link.href)}
              className="relative font-body text-[13px] font-medium tracking-wide text-text/70 hover:text-navy transition-colors duration-300 after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-[1.5px] after:bg-green after:transition-all after:duration-300 hover:after:w-full"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#feliratkozas"
            onClick={(e) => scrollTo(e, "#feliratkozas")}
            className="group inline-flex items-center gap-2 rounded-full bg-navy px-6 py-2.5 font-body text-[12px] font-semibold tracking-wide text-cream/90 transition-all duration-400 hover:bg-green hover:shadow-[0_4px_20px_rgba(45,138,94,0.3)]"
          >
            Várólistára feliratkozom
            <ArrowRight size={13} className="transition-transform duration-300 group-hover:translate-x-0.5" />
          </a>
        </div>

        <button
          className="md:hidden p-2.5 text-navy rounded-lg hover:bg-navy/5 transition-colors"
          onClick={() => setIsMobileMenuOpen(true)}
          aria-label="Menü megnyitása"
          aria-expanded={isMobileMenuOpen}
        >
          <Menu size={22} strokeWidth={1.8} />
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className={cn(
          "fixed inset-0 z-50 md:hidden transition-all duration-500",
          isMobileMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        )}
        role="dialog"
        aria-modal="true"
        aria-label="Navigáció"
      >
        <div className="absolute inset-0 bg-navy" />
        <div className="absolute top-1/4 right-0 w-[300px] h-[300px] rounded-full bg-green/8 blur-[100px]" />
        <div className="absolute bottom-0 left-0 w-[200px] h-[200px] rounded-full bg-gold/5 blur-[80px]" />

        <div className="relative z-10 flex flex-col h-full">
          <div className="flex items-center justify-between px-6 h-[80px]">
            <span className="font-heading text-[22px] font-bold">
              <span className="text-white">Expert</span>
              <span className="text-green ml-1.5">Flow</span>
            </span>
            <button
              onClick={() => setIsMobileMenuOpen(false)}
              className="p-2.5 text-cream/50 hover:text-cream transition-colors"
              aria-label="Menü bezárása"
            >
              <X size={22} strokeWidth={1.8} />
            </button>
          </div>

          <div className="flex flex-col items-start justify-center flex-1 px-10 gap-5">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => scrollTo(e, link.href)}
                className="font-heading text-[32px] font-bold text-cream/30 hover:text-cream transition-colors duration-300"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#feliratkozas"
              onClick={(e) => scrollTo(e, "#feliratkozas")}
              className="btn-primary mt-8"
            >
              Feliratkozom a várólistára
              <ArrowRight size={16} />
            </a>
          </div>

          <div className="px-10 pb-10">
            <p className="font-body text-[11px] text-cream/20 tracking-wide">
              © 2026 Expert Flow
            </p>
          </div>
        </div>
      </div>
    </nav>
  );
}
