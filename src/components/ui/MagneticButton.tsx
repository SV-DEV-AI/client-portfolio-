"use client";

import { useRef, useState } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

import { HTMLMotionProps } from "framer-motion";

interface MagneticButtonProps extends HTMLMotionProps<"button"> {
  children: React.ReactNode;
  className?: string;
  variant?: "primary" | "secondary" | "outline";
}

export default function MagneticButton({
  children,
  className,
  variant = "primary",
  ...props
}: MagneticButtonProps) {
  const buttonRef = useRef<HTMLButtonElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (!buttonRef.current || (typeof window !== 'undefined' && !window.matchMedia("(pointer: fine)").matches)) return;
    const { clientX, clientY } = e;
    const { width, height, left, top } = buttonRef.current.getBoundingClientRect();
    const x = clientX - (left + width / 2);
    const y = clientY - (top + height / 2);
    setPosition({ x: x * 0.2, y: y * 0.2 });
  };

  const handleMouseLeave = () => {
    if (typeof window !== 'undefined' && window.matchMedia("(pointer: fine)").matches) {
      setPosition({ x: 0, y: 0 });
    }
  };

  const variants = {
    primary: "bg-accent-primary text-white hover:bg-accent-primary/90 border border-white/5 shadow-sm",
    secondary: "bg-surface text-white hover:bg-surface-hover border border-white/5",
    outline: "bg-transparent text-foreground border border-white/10 hover:bg-white/5",
  };

  return (
    <motion.button
      ref={buttonRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      animate={{ x: position.x, y: position.y }}
      transition={{ type: "spring", stiffness: 100, damping: 20, mass: 0.1 }}
      className={cn(
        "relative flex items-center justify-center px-8 py-4 rounded-full font-medium transition-all duration-300 magnetic overflow-hidden group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background",
        variants[variant],
        className
      )}
      {...props}
    >
      <span className="relative z-10 flex items-center space-x-2">{children}</span>
      
      {/* Hover background effect */}
      {variant === "outline" && (
        <span className="absolute inset-0 bg-white scale-y-0 origin-bottom group-hover:scale-y-100 transition-transform duration-500 ease-in-out mix-blend-difference" />
      )}
    </motion.button>
  );
}
