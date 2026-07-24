"use client";

import { useState } from "react";
import { Play } from "lucide-react";
import Lightbox from "@/components/ui/Lightbox";
import { motion, useReducedMotion } from "framer-motion";

export default function HeroShowreel() {
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
  const shouldReduceMotion = useReducedMotion();

  return (
    <section className="relative w-full h-screen overflow-hidden bg-black" id="hero">
      {/* Background Video */}
      <video
        className="video-canvas opacity-70"
        autoPlay
        muted
        loop
        playsInline
      >
        <source src="/hero-video.mp4" type="video/mp4" />
      </video>

      {/* Film grain overlay */}
      <div className="absolute inset-0 film-grain" />

      {/* Content overlay */}
      <div className="absolute inset-0 flex flex-col items-center justify-center z-10 pointer-events-none">
        <motion.div 
          initial={{ opacity: 0, scale: shouldReduceMotion ? 1 : 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: shouldReduceMotion ? 0.1 : 1, ease: "easeOut" }}
          className="text-center"
        >
          <button
            onClick={() => setIsLightboxOpen(true)}
            className="pointer-events-auto flex flex-col items-center gap-6 group focus-visible:outline-none"
            aria-label="Play Showreel"
          >
            <div className="w-24 h-24 rounded-full border border-white/20 flex items-center justify-center bg-black/30 backdrop-blur-md group-hover:bg-white group-hover:text-black transition-all duration-500 hover:scale-105">
              <Play className="w-8 h-8 ml-2" fill="currentColor" />
            </div>
            <span className="text-sm tracking-[0.3em] uppercase text-white/70 group-hover:text-white transition-colors">
              Play Showreel
            </span>
          </button>
        </motion.div>
      </div>

      <Lightbox 
        isOpen={isLightboxOpen}
        onClose={() => setIsLightboxOpen(false)}
        videoUrl="/hero-video.mp4"
      />
    </section>
  );
}
