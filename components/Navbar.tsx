"use client";

import { useState, useEffect, useCallback } from "react";
import { Menu, X } from "lucide-react";
import { NAV_LINKS } from "@/lib/constants";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileMenuOpen]);

  const scrollToSection = useCallback(
    (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
      e.preventDefault();
      setIsMobileMenuOpen(false);
      const target = document.querySelector(href);
      if (target) {
        const navHeight = 72;
        const y = target.getBoundingClientRect().top + window.scrollY - navHeight;
        window.scrollTo({ top: y, behavior: "smooth" });
      }
    },
    []
  );

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled
          ? "bg-cream/95 backdrop-blur-md border-b border-cream-dark shadow-[0_1px_3px_rgba(0,0,0,0.05)]"
          : "bg-transparent"
      )}
    >
      <div className="mx-auto max-w-[1200px] px-5 md:px-10 flex items-center justify-between h-[72px]">
        {/* Logo */}
        <a
          href="#"
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
          className="font-heading text-xl font-bold tracking-tight"
        >
          <span className="text-navy">Expert</span>{" "}
          <span className="text-green">Flow</span>
        </a>

        {/* Desktop nav links */}
        <div className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => scrollToSection(e, link.href)}
              className="font-body text-sm font-medium text-text hover:text-green transition-colors"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#feliratkozas"
            onClick={(e) => scrollToSection(e, "#feliratkozas")}
            className="inline-flex items-center justify-center rounded-lg bg-green px-5 py-2.5 font-body text-xs font-bold uppercase tracking-[0.04em] text-white transition-all duration-300 hover:bg-green-light hover:scale-[1.02]"
          >
            Feliratkozom a várólistára →
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden p-2 text-navy"
          onClick={() => setIsMobileMenuOpen(true)}
          aria-label="Menü megnyitása"
          aria-expanded={isMobileMenuOpen}
        >
          <Menu size={24} />
        </button>
      </div>

      {/* Mobile menu overlay */}
      <div
        className={cn(
          "fixed inset-0 bg-navy/98 backdrop-blur-sm z-50 transition-all duration-300 md:hidden flex flex-col",
          isMobileMenuOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        )}
        role="dialog"
        aria-modal="true"
        aria-label="Navigációs menü"
      >
        {/* Close button */}
        <div className="flex justify-end p-5">
          <button
            onClick={() => setIsMobileMenuOpen(false)}
            className="p-2 text-cream"
            aria-label="Menü bezárása"
          >
            <X size={24} />
          </button>
        </div>

        {/* Mobile nav links */}
        <div className="flex flex-col items-center justify-center flex-1 gap-8">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => scrollToSection(e, link.href)}
              className="font-body text-2xl font-medium text-cream hover:text-green transition-colors"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#feliratkozas"
            onClick={(e) => scrollToSection(e, "#feliratkozas")}
            className="mt-4 inline-flex items-center justify-center rounded-lg bg-green px-8 py-4 font-body text-sm font-bold uppercase tracking-[0.04em] text-white transition-all duration-300 hover:bg-green-light"
          >
            Feliratkozom a várólistára →
          </a>
        </div>
      </div>
    </nav>
  );
}
