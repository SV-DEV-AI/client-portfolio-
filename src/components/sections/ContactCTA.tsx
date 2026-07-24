"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import MagneticButton from "@/components/ui/MagneticButton";

export default function ContactCTA() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["-20%", "20%"]);

  return (
    <section ref={containerRef} className="relative py-24 md:py-32 overflow-hidden bg-black flex items-center justify-center border-t border-white/10" id="contact">
      {/* Parallax Background Elements */}
      <motion.div style={{ y }} className="absolute inset-0 z-0 opacity-20">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] border border-white/10 rounded-full mix-blend-overlay" />
        
        {/* Grain Overlay */}
        <div className="absolute inset-0 film-grain" />
      </motion.div>

      <div className="container mx-auto px-6 md:px-12 relative z-10 text-center text-white">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          <span className="text-sm font-bold uppercase tracking-widest mb-6 block text-gray-400">Ready to start?</span>
          <h2 className="text-5xl md:text-8xl font-sans font-bold leading-[0.9] tracking-tighter mb-12 max-w-5xl mx-auto uppercase">
            Let&apos;s create <br/> something iconic.
          </h2>
          
          <div className="flex justify-center">
            <a href="mailto:themorphed@gmail.com">
              <MagneticButton variant="primary" className="bg-white text-black hover:bg-gray-200 px-12 py-6 text-lg font-bold uppercase tracking-widest">
                Contact Me
              </MagneticButton>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
