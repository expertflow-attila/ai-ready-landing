"use client";

import { useRef, useEffect, type ReactNode } from "react";

interface MagneticButtonProps {
  children: ReactNode;
  strength?: number;
}

export function MagneticButton({ children, strength = 0.3 }: MagneticButtonProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // Skip on touch devices
    if (window.matchMedia("(hover: none)").matches) return;

    let raf: number;
    let currentX = 0;
    let currentY = 0;
    let targetX = 0;
    let targetY = 0;

    const lerp = (start: number, end: number, factor: number) =>
      start + (end - start) * factor;

    const animate = () => {
      currentX = lerp(currentX, targetX, 0.12);
      currentY = lerp(currentY, targetY, 0.12);
      el.style.transform = `translate(${currentX}px, ${currentY}px)`;
      if (Math.abs(currentX - targetX) > 0.01 || Math.abs(currentY - targetY) > 0.01) {
        raf = requestAnimationFrame(animate);
      }
    };

    const onMouseMove = (e: MouseEvent) => {
      const rect = el.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      targetX = (e.clientX - centerX) * strength;
      targetY = (e.clientY - centerY) * strength;
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(animate);
    };

    const onMouseLeave = () => {
      targetX = 0;
      targetY = 0;
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(animate);
    };

    el.addEventListener("mousemove", onMouseMove);
    el.addEventListener("mouseleave", onMouseLeave);

    return () => {
      el.removeEventListener("mousemove", onMouseMove);
      el.removeEventListener("mouseleave", onMouseLeave);
      cancelAnimationFrame(raf);
    };
  }, [strength]);

  return (
    <div ref={ref} style={{ display: "inline-block", willChange: "transform" }}>
      {children}
    </div>
  );
}
