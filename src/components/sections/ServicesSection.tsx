"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, X } from "lucide-react";
import { cn } from "@/lib/utils";
import SectionLabel from "@/components/ui/SectionLabel";
import RevealOnScroll from "@/components/ui/RevealOnScroll";
import { services } from "@/data/services";

export default function ServicesSection() {
  const [activeService, setActiveService] = useState<string | null>(services[0].id);
  const [hoveredService, setHoveredService] = useState<string | null>(null);

  return (
    <section className="py-24 md:py-40 bg-surface relative z-10">
      <div className="container mx-auto px-6 md:px-12">
        <RevealOnScroll direction="up">
          <SectionLabel>What We Do</SectionLabel>
        </RevealOnScroll>
        
        <RevealOnScroll direction="up" delay={0.1}>
          <h2 className="text-[clamp(2.5rem,5vw,4rem)] font-display font-bold leading-[1.1] tracking-tight mb-20 max-w-3xl">
            We provide a comprehensive suite of creative services under one roof.
          </h2>
        </RevealOnScroll>

        <div className="border-t border-white/10">
          {services.map((service, index) => {
            const isActive = activeService === service.id;
            const isHovered = hoveredService === service.id;
            
            return (
              <RevealOnScroll
                key={service.id}
                direction="up"
                delay={index * 0.05}
                className="border-b border-white/10"
              >
                <div 
                  className="py-8 md:py-12 cursor-pointer group"
                  onMouseEnter={() => setHoveredService(service.id)}
                  onMouseLeave={() => setHoveredService(null)}
                  onClick={() => setActiveService(isActive ? null : service.id)}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-6 md:space-x-12">
                      <span className="text-gray-600 font-mono text-lg md:text-xl">
                        {service.id}
                      </span>
                      <h3 className={cn(
                        "text-[clamp(1.75rem,4vw,3rem)] font-display font-bold transition-colors duration-500",
                        isActive || isHovered ? "text-accent-primary" : "text-foreground"
                      )}>
                        {service.title}
                      </h3>
                    </div>
                    
                    <div className="text-gray-500 group-hover:text-accent-primary transition-colors duration-300">
                      <motion.div
                        animate={{ rotate: isActive ? 45 : 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        <Plus size={32} />
                      </motion.div>
                    </div>
                  </div>

                  <AnimatePresence>
                    {isActive && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                        className="overflow-hidden"
                      >
                        <div className="pt-8 md:pt-12 pl-12 md:pl-20 pr-0 md:pr-12 grid grid-cols-1 md:grid-cols-2 gap-8 pb-4">
                          <p className="text-lg md:text-xl text-gray-400 font-light leading-relaxed">
                            {service.description}
                          </p>
                          <div>
                            <h4 className="text-sm font-bold uppercase tracking-widest text-white mb-6">Capabilities</h4>
                            <ul className="space-y-4">
                              {service.capabilities.map((cap, i) => (
                                <li key={i} className="flex items-start text-gray-400">
                                  <span className="w-1.5 h-1.5 bg-accent-primary rounded-full mr-4 mt-2.5 flex-shrink-0" />
                                  <span>{cap}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </RevealOnScroll>
            );
          })}
        </div>
      </div>
    </section>
  );
}
