"use client";

import { useState } from "react";
import SectionLabel from "@/components/ui/SectionLabel";
import RevealOnScroll from "@/components/ui/RevealOnScroll";
import { services } from "@/data/services";
import ServiceCard from "./ServiceCard";

export default function ServicesSection() {
  const [activeService, setActiveService] = useState<string | null>(services[0].id);
  const [hoveredService, setHoveredService] = useState<string | null>(null);

  return (
    <section className="py-24 md:py-40 bg-surface relative z-10">
      <div className="container mx-auto px-6 md:px-12">
        <RevealOnScroll direction="up">
          <SectionLabel>What I Do</SectionLabel>
        </RevealOnScroll>
        
        <RevealOnScroll direction="up" delay={0.1}>
          <h2 className="text-[clamp(2.5rem,5vw,4rem)] font-display font-bold leading-[1.1] tracking-tight mb-20 max-w-3xl">
            I provide a comprehensive suite of creative services under one roof.
          </h2>
        </RevealOnScroll>

        <div className="border-t border-white/10">
          {services.map((service, index) => (
            <ServiceCard
              key={service.id}
              service={service}
              index={index}
              isActive={activeService === service.id}
              isHovered={hoveredService === service.id}
              onHover={setHoveredService}
              onClick={() => setActiveService(activeService === service.id ? null : service.id)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
