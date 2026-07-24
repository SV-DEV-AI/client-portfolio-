"use client";

import { motion, HTMLMotionProps, useReducedMotion } from "framer-motion";
import { cn } from "@/lib/utils";

interface RevealOnScrollProps extends HTMLMotionProps<"div"> {
  children: React.ReactNode;
  delay?: number;
  direction?: "up" | "down" | "left" | "right" | "none";
}

export default function RevealOnScroll({
  children,
  className,
  delay = 0,
  direction = "up",
  ...props
}: RevealOnScrollProps) {
  const directions = {
    up: { y: 40, x: 0 },
    down: { y: -40, x: 0 },
    left: { x: 40, y: 0 },
    right: { x: -40, y: 0 },
    none: { x: 0, y: 0 },
  };

  const shouldReduceMotion = useReducedMotion();

  const initialVariant = shouldReduceMotion ? { opacity: 0 } : { opacity: 0, ...directions[direction] };
  const animateVariant = { opacity: 1, x: 0, y: 0 };

  return (
    <motion.div
      initial={initialVariant}
      whileInView={animateVariant}
      viewport={{ once: true, margin: "-100px" }}
      transition={{
        duration: shouldReduceMotion ? 0.1 : 0.8,
        delay: shouldReduceMotion ? 0 : delay,
        ease: [0.22, 1, 0.36, 1],
      }}
      className={cn("", className)}
      {...props}
    >
      {children}
    </motion.div>
  );
}
