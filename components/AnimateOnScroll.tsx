"use client";

import { useScrollAnimation } from "@/lib/useScrollAnimation";
import { cn } from "@/lib/utils";

interface AnimateOnScrollProps {
  children: React.ReactNode;
  className?: string;
  direction?: "up" | "left" | "right" | "fade";
  delay?: number;
}

export function AnimateOnScroll({
  children,
  className,
  direction = "up",
  delay = 0,
}: AnimateOnScrollProps) {
  const { ref, isVisible } = useScrollAnimation();

  const directionClass = {
    up: "animate-on-scroll",
    left: "animate-on-scroll-left",
    right: "animate-on-scroll-right",
    fade: "animate-on-scroll",
  }[direction];

  return (
    <div
      ref={ref}
      className={cn(directionClass, isVisible && "is-visible", className)}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}
