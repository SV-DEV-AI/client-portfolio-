"use client";

import Image from "next/image";
import SectionLabel from "@/components/ui/SectionLabel";
import RevealOnScroll from "@/components/ui/RevealOnScroll";
import { team } from "@/data/team";

export default function TeamSection() {
  return (
    <section className="py-24 md:py-40 bg-surface relative z-10 overflow-hidden">
      <div className="container mx-auto px-6 md:px-12">
        <div className="mb-20">
          <RevealOnScroll direction="up">
            <SectionLabel>The Team</SectionLabel>
          </RevealOnScroll>
          <RevealOnScroll direction="up" delay={0.1}>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold leading-[1.1] tracking-tight max-w-2xl">
              The creative minds behind Morphed.
            </h2>
          </RevealOnScroll>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {team.map((member, index) => (
            <RevealOnScroll 
              key={member.id} 
              direction="up" 
              delay={index * 0.1}
            >
              <div className="group">
                <div className="relative aspect-[3/4] w-full rounded-2xl overflow-hidden mb-6 bg-background">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover grayscale group-hover:grayscale-0 transition-all duration-700 ease-out scale-100 group-hover:scale-105"
                  />
                  
                  {/* Desktop Hover Info */}
                  <div className="absolute inset-0 bg-black/80 opacity-0 group-hover:opacity-100 transition-opacity duration-500 p-6 flex flex-col justify-end">
                    <p className="text-sm text-gray-300 font-light leading-relaxed transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-100">
                      {member.bio}
                    </p>
                  </div>
                </div>
                
                <div>
                  <h3 className="text-2xl font-display font-bold mb-1">{member.name}</h3>
                  <p className="text-accent-primary text-sm uppercase tracking-wider">{member.role}</p>
                </div>
                
                {/* Mobile Info (visible without hover) */}
                <div className="lg:hidden mt-4">
                  <p className="text-sm text-gray-400 font-light leading-relaxed">
                    {member.bio}
                  </p>
                </div>
              </div>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
