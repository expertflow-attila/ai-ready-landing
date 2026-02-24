"use client";

import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { Sun, Moon } from "lucide-react";

export function ThemeToggle() {
  const [mounted, setMounted] = useState(false);
  const { resolvedTheme, setTheme } = useTheme();

  useEffect(() => setMounted(true), []);

  if (!mounted) {
    return (
      <div className="w-9 h-9 rounded-lg bg-bg-subtle border border-border-subtle" aria-hidden="true" />
    );
  }

  const isDark = resolvedTheme === "dark";

  return (
    <button
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className="relative w-9 h-9 rounded-lg flex items-center justify-center bg-bg-subtle border border-border-subtle text-text-secondary hover:bg-bg-elevated hover:text-text-primary hover:border-border-default transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent cursor-pointer"
      aria-label={isDark ? "Váltás világos módra" : "Váltás sötét módra"}
    >
      <Sun
        size={15}
        className={`absolute transition-all duration-300 ${isDark ? "opacity-100 rotate-0 scale-100" : "opacity-0 rotate-90 scale-0"}`}
      />
      <Moon
        size={15}
        className={`absolute transition-all duration-300 ${isDark ? "opacity-0 -rotate-90 scale-0" : "opacity-100 rotate-0 scale-100"}`}
      />
    </button>
  );
}
