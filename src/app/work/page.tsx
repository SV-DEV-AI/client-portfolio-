"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight } from "lucide-react";
import SectionLabel from "@/components/ui/SectionLabel";
import RevealOnScroll from "@/components/ui/RevealOnScroll";
import ParallaxImage from "@/components/ui/ParallaxImage";
import { projects } from "@/data/projects";

export default function WorkPage() {
  const [filter, setFilter] = useState("All");
  
  const categories = ["All", ...Array.from(new Set(projects.map(p => p.category)))];
  
  const filteredProjects = filter === "All" 
    ? projects 
    : projects.filter(p => p.category === filter);

  return (
    <div className="bg-background min-h-screen pt-32 md:pt-40 pb-32">
      <div className="container mx-auto px-6 md:px-12">
        {/* Header */}
        <div className="mb-20">
          <RevealOnScroll direction="up">
            <SectionLabel>Our Work</SectionLabel>
          </RevealOnScroll>
          <RevealOnScroll direction="up" delay={0.1}>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-display font-bold leading-[1.1] tracking-tight max-w-4xl">
              Selected <span className="text-gradient-gold">Projects</span>
            </h1>
          </RevealOnScroll>
        </div>

        {/* Filters */}
        <RevealOnScroll direction="up" delay={0.2} className="mb-16">
          <div className="flex flex-wrap gap-4">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setFilter(category)}
                className={`px-6 py-2 rounded-full text-sm font-medium tracking-wide transition-all duration-300 ${
                  filter === category 
                    ? "bg-white text-black" 
                    : "bg-surface text-gray-400 hover:text-white border border-white/5"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </RevealOnScroll>

        {/* Projects Grid */}
        <motion.div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-20">
          <AnimatePresence>
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.5 }}
                className={`group cursor-pointer ${index % 2 !== 0 ? 'md:mt-32' : ''}`}
              >
                <Link href={`/work/${project.id}`}>
                  <div className="relative h-[400px] md:h-[600px] w-full rounded-xl overflow-hidden mb-8">
                    <ParallaxImage
                      src={project.thumbnail}
                      alt={project.title}
                      className="w-full h-full"
                      offset={30}
                    />
                    
                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                      <div className="bg-white text-black px-6 py-3 rounded-full font-medium transform translate-y-8 group-hover:translate-y-0 transition-all duration-500 ease-out flex items-center space-x-2">
                        <span>View Project</span>
                        <ArrowRight size={16} />
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <div className="flex items-center space-x-4 mb-3 text-sm font-mono text-gray-500 uppercase">
                      <span>{project.client}</span>
                      <span className="w-1 h-1 rounded-full bg-accent-primary" />
                      <span>{project.category}</span>
                    </div>
                    <h3 className="text-3xl font-display font-bold group-hover:text-accent-primary transition-colors duration-300 mb-4">
                      {project.title}
                    </h3>
                    <p className="text-gray-400 font-light line-clamp-2">{project.description}</p>
                  </div>
                </Link>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </div>
  );
}
