"use client";

import RevealOnScroll from "@/components/ui/RevealOnScroll";
import SectionLabel from "@/components/ui/SectionLabel";
import ImageReveal from "@/components/ui/ImageReveal";
import MagneticButton from "@/components/ui/MagneticButton";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export default function AboutPreview() {
  return (
    <section id="about" className="py-24 md:py-40 bg-background relative z-10">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-8 items-center">
          
          {/* Left: Text Content */}
          <div className="lg:col-span-7">
            <RevealOnScroll direction="up">
              <SectionLabel>Who We Are</SectionLabel>
            </RevealOnScroll>
            
            <RevealOnScroll direction="up" delay={0.1}>
              <h2 className="text-[clamp(2.5rem,5vw,4rem)] font-display font-bold leading-[1.1] tracking-tight mb-8">
                A Creative Agency Built on <span className="text-gradient-red">Craft & Strategy</span>
              </h2>
            </RevealOnScroll>
            
            <RevealOnScroll direction="up" delay={0.2}>
              <div className="space-y-6 text-gray-400 text-lg md:text-xl font-light leading-relaxed mb-12">
                <p>
                  Morphed Studios began as a creative agency to serve clients with path-breaking brand strategies and stunning designs. Based on consumer insight, our work captures emotion through engaging visuals and world-class design.
                </p>
                <p>
                  Our TV working palette mixes live action, motion graphics, design, illustration, CGI, and typography to evoke a strong, impactful message.
                </p>
              </div>
            </RevealOnScroll>
            
            <RevealOnScroll direction="up" delay={0.3}>
              <Link href="/about">
                <MagneticButton variant="outline" className="group">
                  <span>Learn More About Us</span>
                  <ArrowRight size={18} className="ml-2 group-hover:translate-x-1 transition-transform" />
                </MagneticButton>
              </Link>
            </RevealOnScroll>
          </div>
          
          {/* Right: Image */}
          <div className="lg:col-span-5 h-[500px] lg:h-[700px] w-full">
            <ImageReveal
              src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=2000&auto=format&fit=crop"
              alt="Morphed Studios Team Collaboration"
              className="w-full h-full rounded-2xl"
            />
          </div>
          
        </div>
      </div>
    </section>
  );
}
