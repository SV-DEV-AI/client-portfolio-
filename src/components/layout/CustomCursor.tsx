"use client";

import { useEffect, useRef } from "react";

export default function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const cursorDotRef = useRef<HTMLDivElement>(null);
  const requestRef = useRef<number>(0);
  
  // Track mouse position
  const mouse = useRef({ x: 0, y: 0 });
  // Track delayed cursor position for smooth following
  const previous = useRef({ x: 0, y: 0 });

  useEffect(() => {
    // Check if it's a touch device
    const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
    if (isTouchDevice) return;

    const onMouseMove = (e: MouseEvent) => {
      mouse.current = { x: e.clientX, y: e.clientY };
    };

    const updateCursor = () => {
      // Smooth interpolation (lerp) for outer ring
      previous.current.x += (mouse.current.x - previous.current.x) * 0.15;
      previous.current.y += (mouse.current.y - previous.current.y) * 0.15;

      // Update inner dot instantly
      if (cursorDotRef.current) {
        cursorDotRef.current.style.transform = `translate3d(${mouse.current.x}px, ${mouse.current.y}px, 0)`;
      }

      // Update outer ring smoothly
      if (cursorRef.current) {
        cursorRef.current.style.transform = `translate3d(${previous.current.x}px, ${previous.current.y}px, 0)`;
      }

      requestRef.current = requestAnimationFrame(updateCursor);
    };

    window.addEventListener("mousemove", onMouseMove);
    requestRef.current = requestAnimationFrame(updateCursor);

    // Click effect
    const onMouseDown = () => {
      if (cursorRef.current) cursorRef.current.style.transform = `translate3d(${previous.current.x}px, ${previous.current.y}px, 0) scale(0.8)`;
    };
    const onMouseUp = () => {
      if (cursorRef.current) cursorRef.current.style.transform = `translate3d(${previous.current.x}px, ${previous.current.y}px, 0) scale(1)`;
    };
    
    window.addEventListener("mousedown", onMouseDown);
    window.addEventListener("mouseup", onMouseUp);

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mousedown", onMouseDown);
      window.removeEventListener("mouseup", onMouseUp);
      cancelAnimationFrame(requestRef.current);
    };
  }, []);

  return (
    <>
      <div 
        ref={cursorDotRef} 
        className="fixed top-0 left-0 w-2 h-2 bg-white rounded-full pointer-events-none z-[9999] -translate-x-1/2 -translate-y-1/2 mix-blend-difference hidden md:block"
        style={{ willChange: 'transform' }}
      />
      <div 
        ref={cursorRef}
        className="fixed top-0 left-0 w-10 h-10 border border-white/50 rounded-full pointer-events-none z-[9998] -translate-x-1/2 -translate-y-1/2 hidden md:block mix-blend-difference"
        style={{ willChange: 'transform' }}
      />
    </>
  );
}
