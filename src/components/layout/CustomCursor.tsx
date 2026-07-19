"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export default function CustomCursor() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isPointer, setIsPointer] = useState(false);

  useEffect(() => {
    // Only enable custom cursor on devices with a fine pointer (mouse)
    const mediaQuery = window.matchMedia("(pointer: fine)");
    setIsPointer(mediaQuery.matches);

    const updatePointer = (e: MediaQueryListEvent) => setIsPointer(e.matches);
    mediaQuery.addEventListener("change", updatePointer);
    
    return () => mediaQuery.removeEventListener("change", updatePointer);
  }, []);

  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (
        target.tagName.toLowerCase() === "a" ||
        target.tagName.toLowerCase() === "button" ||
        target.closest("a") ||
        target.closest("button") ||
        target.classList.contains("magnetic")
      ) {
        setIsHovering(true);
        setIsPlaying(false);
      } else if (
        target.tagName.toLowerCase() === "video" ||
        target.closest("video") ||
        target.classList.contains("video-hover")
      ) {
        setIsPlaying(true);
        setIsHovering(false);
      } else {
        setIsHovering(false);
        setIsPlaying(false);
      }
    };

    window.addEventListener("mousemove", updateMousePosition);
    window.addEventListener("mouseover", handleMouseOver);

    return () => {
      window.removeEventListener("mousemove", updateMousePosition);
      window.removeEventListener("mouseover", handleMouseOver);
    };
  }, []);

  // Hide the default cursor only on devices with a mouse
  useEffect(() => {
    if (isPointer) {
      document.body.style.cursor = "none";
      return () => {
        document.body.style.cursor = "auto";
      };
    }
  }, [isPointer]);

  if (!isPointer) return null;

  return (
    <>
      <motion.div
        className={cn(
          "fixed top-0 left-0 w-4 h-4 bg-accent-primary rounded-full pointer-events-none z-[100] mix-blend-difference"
        )}
        animate={{
          x: mousePosition.x - 8,
          y: mousePosition.y - 8,
          scale: isHovering ? 0 : 1,
        }}
        transition={{ type: "tween", ease: "backOut", duration: 0.15 }}
      />
      <motion.div
        className={cn(
          "fixed top-0 left-0 border border-accent-primary rounded-full pointer-events-none z-[100] mix-blend-difference flex items-center justify-center font-bold text-accent-primary"
        )}
        initial={{ width: 48, height: 48, x: -24, y: -24, scale: 1, backgroundColor: "rgba(212, 36, 39, 0)", opacity: 1 }}
        animate={{
          width: isPlaying ? 80 : 48,
          height: isPlaying ? 80 : 48,
          x: isPlaying ? mousePosition.x - 40 : mousePosition.x - 24,
          y: isPlaying ? mousePosition.y - 40 : mousePosition.y - 24,
          scale: isHovering ? 1.5 : 1,
          backgroundColor: isHovering || isPlaying ? "rgba(212, 36, 39, 0.2)" : "rgba(212, 36, 39, 0)",
          borderWidth: isPlaying ? 2 : 1,
        }}
        transition={{ type: "tween", ease: "backOut", duration: 0.3 }}
      >
        {isPlaying && <span className="text-xs uppercase tracking-widest text-white mix-blend-normal z-[101]">Play</span>}
      </motion.div>
    </>
  );
}
