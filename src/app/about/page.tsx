"use client";

import Image from "next/image";
import SectionLabel from "@/components/ui/SectionLabel";
import RevealOnScroll from "@/components/ui/RevealOnScroll";
import ImageReveal from "@/components/ui/ImageReveal";
import { team } from "@/data/team";

export default function AboutPage() {
  return (
    <div className="bg-background min-h-screen pt-32 md:pt-40 pb-32">
      <div className="container mx-auto px-6 md:px-12">
        {/* Header */}
        <div className="mb-20">
          <RevealOnScroll direction="up">
            <SectionLabel>Our Story</SectionLabel>
          </RevealOnScroll>
          <RevealOnScroll direction="up" delay={0.1}>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-display font-bold leading-[1.1] tracking-tight max-w-5xl">
              We capture emotion through <span className="text-gradient-gold">engaging visuals</span> and world-class design.
            </h1>
          </RevealOnScroll>
        </div>

        {/* Hero Image */}
        <RevealOnScroll direction="up" delay={0.2} className="mb-32">
          <div className="relative h-[50vh] md:h-[70vh] w-full rounded-2xl overflow-hidden">
            <ImageReveal
              src="/images/client-library/IMG_20180914_152556.jpg"
              alt="Morphed Studios Office"
              className="w-full h-full"
            />
          </div>
        </RevealOnScroll>

        {/* The Studio */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start mb-40">
          <RevealOnScroll direction="up">
            <h2 className="text-4xl md:text-5xl font-display font-bold">
              A one-stop shop to invent or re-invigorate brands.
            </h2>
          </RevealOnScroll>
          
          <div className="space-y-8 text-xl text-gray-400 font-light leading-relaxed">
            <RevealOnScroll direction="up" delay={0.1}>
              <p>
                Morphed Studios began as a creative agency to serve clients with path-breaking brand strategies and stunning designs. Based on consumer insight, our work captures emotion through engaging visuals and world-class design.
              </p>
            </RevealOnScroll>
            <RevealOnScroll direction="up" delay={0.2}>
              <p>
                Our TV working palette mixes live action, motion graphics, design, illustration, CGI, and typography and other mixed media to evoke a strong impactful message.
              </p>
            </RevealOnScroll>
            <RevealOnScroll direction="up" delay={0.3}>
              <p>
                Incorporated in 2019, our heritage is rooted in broadcast design. Our leadership team has over two decades of experience working with India's largest media houses, including Zee News, Aaj Tak, and Sahara.
              </p>
            </RevealOnScroll>
          </div>
        </div>

        {/* Full Team Roster */}
        <div className="mb-20">
          <RevealOnScroll direction="up">
            <SectionLabel>Leadership & Team</SectionLabel>
          </RevealOnScroll>
          <RevealOnScroll direction="up" delay={0.1}>
            <h2 className="text-4xl md:text-5xl font-display font-bold leading-[1.1] tracking-tight mb-20">
              Seasoned communication and media professionals.
            </h2>
          </RevealOnScroll>
        </div>

        <div className="space-y-32">
          {team.map((member, index) => (
            <div key={member.id} className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
              <div className={`lg:col-span-5 ${index % 2 !== 0 ? 'lg:order-2' : ''}`}>
                <RevealOnScroll direction="up">
                  <div className="relative aspect-[3/4] w-full max-w-md mx-auto lg:mx-0 rounded-2xl overflow-hidden bg-surface">
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      className="object-cover grayscale hover:grayscale-0 transition-all duration-700"
                    />
                  </div>
                </RevealOnScroll>
              </div>
              
              <div className={`lg:col-span-7 ${index % 2 !== 0 ? 'lg:order-1' : ''}`}>
                <RevealOnScroll direction="up">
                  <h3 className="text-4xl md:text-5xl font-display font-bold mb-2">{member.name}</h3>
                  <p className="text-accent-primary font-bold uppercase tracking-widest text-sm mb-8">{member.role}</p>
                </RevealOnScroll>
                
                <RevealOnScroll direction="up" delay={0.1}>
                  <p className="text-xl text-gray-400 font-light leading-relaxed">
                    {member.bio}
                  </p>
                </RevealOnScroll>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
