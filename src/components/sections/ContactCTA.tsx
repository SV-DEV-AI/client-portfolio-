"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import MagneticButton from "@/components/ui/MagneticButton";

export default function ContactCTA() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["-20%", "20%"]);

  return (
    <section ref={containerRef} className="relative py-40 md:py-60 overflow-hidden bg-accent-primary flex items-center justify-center">
      {/* Parallax Background Elements */}
      <motion.div style={{ y }} className="absolute inset-0 z-0 opacity-10">
        <div className="absolute top-10 left-10 w-[500px] h-[500px] border border-black rounded-full mix-blend-overlay" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[800px] h-[800px] border border-black rounded-full mix-blend-overlay" />
        
        {/* Grain Overlay */}
        <div className="absolute inset-0 opacity-50" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.65%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E")' }} />
      </motion.div>

      <div className="container mx-auto px-6 md:px-12 relative z-10 text-center text-black">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          <span className="text-sm font-bold uppercase tracking-widest mb-6 block">Ready to start?</span>
          <h2 className="text-5xl md:text-8xl font-display font-bold leading-[0.9] tracking-tight mb-12 max-w-5xl mx-auto">
            Let's turn your vision into reality.
          </h2>
          
          <div className="flex justify-center">
            <Link href="/contact">
              <MagneticButton variant="secondary" className="bg-black text-white hover:bg-black/80 px-12 py-6 text-lg">
                Get in Touch
              </MagneticButton>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
