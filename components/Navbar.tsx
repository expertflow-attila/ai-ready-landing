"use client";

import { useState, useEffect } from "react";
import { Menu, X, ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { NAV_LINKS } from "@/lib/constants";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [isMobileMenuOpen]);

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled
          ? "bg-white/80 backdrop-blur-xl border-b border-black/[0.04]"
          : "bg-transparent"
      )}
    >
      <div className="mx-auto max-w-[1200px] px-6 md:px-8 flex items-center justify-between h-[72px]">
        <a href="#" className="font-body text-[15px] font-bold tracking-[-0.02em] text-navy">
          Expert<span className="text-green ml-0.5">Flow</span>
        </a>

        <div className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="font-body text-[13px] font-medium text-text-light hover:text-navy transition-colors duration-200"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#feliratkozas"
            className="inline-flex items-center gap-1.5 rounded-full bg-navy px-5 py-2 font-body text-[12px] font-semibold text-white tracking-wide hover:bg-green transition-colors duration-200"
          >
            Várólistára
            <ArrowRight size={12} />
          </a>
        </div>

        <button
          className="md:hidden p-2 text-navy"
          onClick={() => setIsMobileMenuOpen(true)}
          aria-label="Menü megnyitása"
          aria-expanded={isMobileMenuOpen}
        >
          <Menu size={20} strokeWidth={2} />
        </button>
      </div>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-50 md:hidden bg-navy"
            role="dialog"
            aria-modal="true"
          >
            <div className="flex flex-col h-full">
              <div className="flex items-center justify-between px-6 h-[72px]">
                <span className="font-body text-[15px] font-bold text-white tracking-[-0.02em]">
                  Expert<span className="text-green ml-0.5">Flow</span>
                </span>
                <button
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="p-2 text-white/50 hover:text-white transition-colors"
                  aria-label="Menü bezárása"
                >
                  <X size={20} strokeWidth={2} />
                </button>
              </div>

              <div className="flex flex-col justify-center flex-1 px-8 gap-6">
                {NAV_LINKS.map((link, i) => (
                  <motion.a
                    key={link.href}
                    href={link.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    initial={{ opacity: 0, x: -16 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 + i * 0.05, duration: 0.4, ease: [0.25, 1, 0.5, 1] }}
                    className="font-body text-[28px] font-bold text-white/40 hover:text-white transition-colors"
                  >
                    {link.label}
                  </motion.a>
                ))}
                <motion.a
                  href="#feliratkozas"
                  onClick={() => setIsMobileMenuOpen(false)}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4, duration: 0.4, ease: [0.25, 1, 0.5, 1] }}
                  className="inline-flex items-center gap-2 self-start mt-4 rounded-full bg-green px-8 py-3.5 font-body text-[14px] font-semibold text-white"
                >
                  Feliratkozom
                  <ArrowRight size={14} />
                </motion.a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
