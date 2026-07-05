"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import SectionLabel from "@/components/ui/SectionLabel";
import RevealOnScroll from "@/components/ui/RevealOnScroll";
import ParallaxImage from "@/components/ui/ParallaxImage";
import MagneticButton from "@/components/ui/MagneticButton";
import { projects } from "@/data/projects";

export default function PortfolioShowcase() {
  const featuredProjects = projects.filter((p) => p.featured).slice(0, 4);

  return (
    <section className="py-24 md:py-40 bg-background relative z-10">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20">
          <div className="max-w-2xl mb-8 md:mb-0">
            <RevealOnScroll direction="up">
              <SectionLabel>Selected Work</SectionLabel>
            </RevealOnScroll>
            <RevealOnScroll direction="up" delay={0.1}>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold leading-[1.1] tracking-tight">
                Crafting visual experiences that stand out.
              </h2>
            </RevealOnScroll>
          </div>
          
          <RevealOnScroll direction="left" delay={0.2}>
            <Link href="/work">
              <MagneticButton variant="outline" className="group">
                <span>View All Projects</span>
                <ArrowRight size={18} className="ml-2 group-hover:translate-x-1 transition-transform" />
              </MagneticButton>
            </Link>
          </RevealOnScroll>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-24">
          {featuredProjects.map((project, index) => (
            <div 
              key={project.id} 
              className={`group cursor-pointer ${index % 2 !== 0 ? 'md:mt-32' : ''}`}
            >
              <RevealOnScroll direction="up" delay={index * 0.1}>
                <Link href={`/work/${project.id}`}>
                  <div className="relative h-[400px] md:h-[600px] w-full rounded-xl overflow-hidden mb-8">
                    <ParallaxImage
                      src={project.thumbnail}
                      alt={project.title}
                      className="w-full h-full"
                      offset={30}
                    />
                    
                    {/* Hover Overlay */}
                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                      <div className="bg-white text-black px-6 py-3 rounded-full font-medium transform translate-y-8 group-hover:translate-y-0 transition-all duration-500 ease-out">
                        View Project
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <div className="flex items-center space-x-4 mb-3 text-sm font-mono text-gray-500 uppercase">
                      <span>{project.client}</span>
                      <span className="w-1 h-1 rounded-full bg-accent-primary" />
                      <span>{project.category}</span>
                    </div>
                    <h3 className="text-3xl font-display font-bold group-hover:text-accent-primary transition-colors duration-300">
                      {project.title}
                    </h3>
                  </div>
                </Link>
              </RevealOnScroll>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
