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
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
        isScrolled
          ? "bg-navy/80 backdrop-blur-2xl border-b border-white/[0.04]"
          : "bg-transparent"
      )}
    >
      <div className="mx-auto max-w-[1200px] px-6 md:px-8 flex items-center justify-between h-[72px]">
        <a href="#" className="group flex items-center gap-1.5">
          <span className="font-heading text-[20px] font-bold text-white tracking-tight">Expert</span>
          <span className="text-gradient font-heading text-[20px] font-bold tracking-tight">Flow</span>
        </a>

        <div className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="font-body text-[13px] font-medium text-white/40 hover:text-white transition-colors duration-300"
            >
              {link.label}
            </a>
          ))}
          <a href="#feliratkozas" className="btn-primary !py-2.5 !px-6 !text-[12px]">
            Várólistára
            <ArrowRight size={12} />
          </a>
        </div>

        <button
          className="md:hidden p-2 text-white/60 hover:text-white transition-colors"
          onClick={() => setIsMobileMenuOpen(true)}
          aria-label="Menü megnyitása"
          aria-expanded={isMobileMenuOpen}
        >
          <Menu size={22} strokeWidth={1.5} />
        </button>
      </div>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-50 md:hidden mesh-hero"
            role="dialog"
            aria-modal="true"
          >
            <div className="absolute inset-0 grain" />
            <div className="relative z-10 flex flex-col h-full">
              <div className="flex items-center justify-between px-6 h-[72px]">
                <span className="font-heading text-[20px] font-bold">
                  <span className="text-white">Expert</span>{" "}
                  <span className="text-gradient">Flow</span>
                </span>
                <button
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="p-2 text-white/40 hover:text-white transition-colors"
                  aria-label="Menü bezárása"
                >
                  <X size={22} strokeWidth={1.5} />
                </button>
              </div>

              <div className="flex flex-col justify-center flex-1 px-8 gap-6">
                {NAV_LINKS.map((link, i) => (
                  <motion.a
                    key={link.href}
                    href={link.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 + i * 0.06, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                    className="font-heading text-[36px] font-bold text-white/25 hover:text-white transition-colors duration-300"
                  >
                    {link.label}
                  </motion.a>
                ))}
                <motion.a
                  href="#feliratkozas"
                  onClick={() => setIsMobileMenuOpen(false)}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                  className="btn-primary self-start mt-4"
                >
                  Feliratkozom
                  <ArrowRight size={15} />
                </motion.a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
