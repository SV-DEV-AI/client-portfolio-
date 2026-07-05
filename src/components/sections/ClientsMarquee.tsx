"use client";

import { motion } from "framer-motion";
import { company } from "@/data/company";
import SectionLabel from "@/components/ui/SectionLabel";
import RevealOnScroll from "@/components/ui/RevealOnScroll";

export default function ClientsMarquee() {
  // Duplicate clients array to ensure smooth infinite scrolling
  const firstRow = [...company.clients, ...company.clients];
  const secondRow = [...company.clients].reverse();
  const secondRowExtended = [...secondRow, ...secondRow];

  return (
    <section className="py-24 md:py-32 bg-background relative overflow-hidden border-t border-white/5">
      <div className="container mx-auto px-6 md:px-12 mb-16">
        <RevealOnScroll direction="up">
          <SectionLabel>Trusted By</SectionLabel>
        </RevealOnScroll>
      </div>

      <div className="flex flex-col space-y-12 md:space-y-20 relative z-10">
        {/* Row 1: Left to Right */}
        <div className="flex w-[200vw] overflow-hidden">
          <motion.div
            className="flex space-x-16 md:space-x-32 items-center min-w-full"
            animate={{ x: ["-50%", "0%"] }}
            transition={{
              ease: "linear",
              duration: 40,
              repeat: Infinity,
            }}
          >
            {firstRow.map((client, index) => (
              <div 
                key={`${client}-1-${index}`} 
                className="text-3xl md:text-5xl lg:text-7xl font-display font-bold text-transparent"
                style={{ WebkitTextStroke: "1px rgba(255,255,255,0.2)" }}
              >
                {client}
              </div>
            ))}
          </motion.div>
        </div>

        {/* Row 2: Right to Left */}
        <div className="flex w-[200vw] overflow-hidden -ml-[100vw]">
          <motion.div
            className="flex space-x-16 md:space-x-32 items-center min-w-full"
            animate={{ x: ["0%", "-50%"] }}
            transition={{
              ease: "linear",
              duration: 35,
              repeat: Infinity,
            }}
          >
            {secondRowExtended.map((client, index) => (
              <div 
                key={`${client}-2-${index}`} 
                className="text-3xl md:text-5xl lg:text-7xl font-display font-bold text-transparent transition-all duration-500 hover:text-accent-primary"
                style={{ WebkitTextStroke: "1px rgba(255,255,255,0.2)" }}
              >
                {client}
              </div>
            ))}
          </motion.div>
        </div>
      </div>
      
      {/* Gradients to fade edges */}
      <div className="absolute top-0 left-0 w-32 h-full bg-gradient-to-r from-background to-transparent z-20 pointer-events-none hidden md:block" />
      <div className="absolute top-0 right-0 w-32 h-full bg-gradient-to-l from-background to-transparent z-20 pointer-events-none hidden md:block" />
    </section>
  );
}
