"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import SectionLabel from "@/components/ui/SectionLabel";
import RevealOnScroll from "@/components/ui/RevealOnScroll";
import MagneticButton from "@/components/ui/MagneticButton";
import { services } from "@/data/services";

export default function ServicesPage() {
  return (
    <div className="bg-background min-h-screen pt-32 md:pt-40 pb-32">
      <div className="container mx-auto px-6 md:px-12">
        {/* Header */}
        <div className="mb-32">
          <RevealOnScroll direction="up">
            <SectionLabel>Our Capabilities</SectionLabel>
          </RevealOnScroll>
          <RevealOnScroll direction="up" delay={0.1}>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-display font-bold leading-[1.1] tracking-tight max-w-4xl">
              We offer a <span className="text-gradient-gold">complete spectrum</span> of creative services.
            </h1>
          </RevealOnScroll>
        </div>

        {/* Detailed Services List */}
        <div className="space-y-32 md:space-y-48">
          {services.map((service, index) => {
            const Icon = service.icon;
            
            return (
              <div key={service.id} className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-8 items-start">
                <div className={`lg:col-span-5 ${index % 2 !== 0 ? 'lg:order-2' : ''}`}>
                  <RevealOnScroll direction="up">
                    <div className="relative aspect-square w-full rounded-2xl overflow-hidden bg-surface flex items-center justify-center border border-white/5 p-12">
                      <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]" />
                      <div className="absolute inset-0 bg-gradient-to-tr from-accent-primary/20 to-transparent opacity-50" />
                      <Icon className="w-32 h-32 text-accent-primary relative z-10 opacity-80" strokeWidth={1} />
                    </div>
                  </RevealOnScroll>
                </div>
                
                <div className={`lg:col-span-7 lg:py-12 ${index % 2 !== 0 ? 'lg:order-1' : ''}`}>
                  <RevealOnScroll direction="up">
                    <span className="text-gray-500 font-mono text-xl block mb-6">{service.id}</span>
                    <h2 className="text-4xl md:text-5xl font-display font-bold mb-8">{service.title}</h2>
                    <p className="text-xl text-gray-400 font-light leading-relaxed mb-12">
                      {service.description}
                    </p>
                  </RevealOnScroll>
                  
                  <RevealOnScroll direction="up" delay={0.1}>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
                      {service.capabilities.map((cap, i) => (
                        <div key={i} className="flex items-start">
                          <span className="w-1.5 h-1.5 bg-accent-primary rounded-full mr-4 mt-2.5 flex-shrink-0" />
                          <span className="text-gray-300 font-medium">{cap}</span>
                        </div>
                      ))}
                    </div>
                  </RevealOnScroll>

                  <RevealOnScroll direction="up" delay={0.2}>
                    <Link href="/work">
                      <button className="flex items-center space-x-2 text-accent-primary font-bold uppercase tracking-widest text-sm hover:text-white transition-colors group">
                        <span>View Related Work</span>
                        <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                      </button>
                    </Link>
                  </RevealOnScroll>
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA */}
        <RevealOnScroll direction="up">
          <div className="mt-40 bg-surface rounded-3xl p-12 md:p-20 text-center border border-white/5">
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-8">Not sure what you need?</h2>
            <p className="text-xl text-gray-400 font-light max-w-2xl mx-auto mb-12">
              Every brand is unique. Let&apos;s discuss your challenges and create a tailored solution that fits your exact requirements.
            </p>
            <div className="flex justify-center">
              <Link href="/contact">
                <MagneticButton variant="primary">
                  Book a Consultation
                </MagneticButton>
              </Link>
            </div>
          </div>
        </RevealOnScroll>
      </div>
    </div>
  );
}
