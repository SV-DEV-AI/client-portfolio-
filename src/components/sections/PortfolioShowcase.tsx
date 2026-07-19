"use client";

import { useState, useRef } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight } from "lucide-react";
import SectionLabel from "@/components/ui/SectionLabel";
import RevealOnScroll from "@/components/ui/RevealOnScroll";
import MagneticButton from "@/components/ui/MagneticButton";
import { projects, ProjectType, Project } from "@/data/projects";
import Image from "next/image";

export default function PortfolioShowcase() {
  const [filter, setFilter] = useState<ProjectType | "all">("all");
  
  // Show all featured projects, filtered
  const filteredProjects = projects.filter(
    (p) => p.featured && (filter === "all" || p.type === filter)
  );

  return (
    <section className="py-24 md:py-40 bg-background relative z-10">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16">
          <div className="max-w-2xl mb-8 md:mb-0">
            <RevealOnScroll direction="up">
              <SectionLabel>Selected Work</SectionLabel>
            </RevealOnScroll>
            <RevealOnScroll direction="up" delay={0.1}>
              <h2 className="text-[clamp(2.5rem,5vw,4rem)] font-display font-bold leading-[1.1] tracking-tight">
                Crafting visual experiences that stand out.
              </h2>
            </RevealOnScroll>
          </div>
          
          <RevealOnScroll direction="left" delay={0.2}>
            <div className="flex flex-wrap gap-3">
              <button
                onClick={() => setFilter("all")}
                className={`filter-pill px-6 py-2 rounded-full text-sm font-bold uppercase tracking-widest ${filter === "all" ? "active" : "text-gray-400 hover:text-white"}`}
              >
                All
              </button>
              <button
                onClick={() => setFilter("visual")}
                className={`filter-pill px-6 py-2 rounded-full text-sm font-bold uppercase tracking-widest ${filter === "visual" ? "active" : "text-gray-400 hover:text-white"}`}
              >
                Visual
              </button>
              <button
                onClick={() => setFilter("audio")}
                className={`filter-pill px-6 py-2 rounded-full text-sm font-bold uppercase tracking-widest ${filter === "audio" ? "active" : "text-gray-400 hover:text-white"}`}
              >
                Audio
              </button>
            </div>
          </RevealOnScroll>
        </div>

        {/* Asymmetric Media Grid */}
        <motion.div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-[250px] md:auto-rows-[350px]">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, index) => {
              // Determine grid span based on aspectRatio
              let spanClass = "col-span-1 row-span-1";
              if (project.aspectRatio === "16:9") {
                spanClass = "col-span-1 md:col-span-2 row-span-1 md:row-span-2";
              } else if (project.aspectRatio === "9:16") {
                spanClass = "col-span-1 row-span-2";
              } else if (project.aspectRatio === "4:3") {
                spanClass = "col-span-1 md:col-span-2 row-span-1 md:row-span-2";
                if (project.gridSpan === 1) spanClass = "col-span-1 row-span-1";
              }

              return (
                <ProjectCard key={project.id} project={project} spanClass={spanClass} />
              );
            })}
          </AnimatePresence>
        </motion.div>
        
        <div className="mt-20 flex justify-center">
          <Link href="/work">
            <MagneticButton variant="outline" className="group">
              <span>Explore All Cases</span>
              <ArrowRight size={18} className="ml-2 group-hover:translate-x-1 transition-transform" />
            </MagneticButton>
          </Link>
        </div>
      </div>
    </section>
  );
}

function ProjectCard({ project, spanClass }: { project: Project, spanClass: string }) {
  const [isHovered, setIsHovered] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.5 }}
      className={`relative group rounded-2xl overflow-hidden cursor-pointer bg-surface ${spanClass}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <Link href={`/work/${project.id}`} className="block w-full h-full">
        {/* Static Image (Visible when not hovered) */}
        <div className={`absolute inset-0 transition-opacity duration-500 ${isHovered ? 'opacity-0' : 'opacity-100 z-10'}`}>
          <Image
            src={project.thumbnail}
            alt={project.title}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
            className="object-cover"
          />
        </div>

        {/* Video Preview (Visible and playing when hovered) */}
        <div className={`absolute inset-0 transition-opacity duration-500 ${isHovered ? 'opacity-100 z-10' : 'opacity-0 z-0'} hidden md:block`}>
          {isHovered && (
            <video
              src={project.previewVideo}
              muted
              loop
              playsInline
              autoPlay
              className="w-full h-full object-cover"
            />
          )}
        </div>

        {/* Info Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-20 flex flex-col justify-end p-8">
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={isHovered ? { y: 0, opacity: 1 } : { y: 20, opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="flex items-center space-x-3 mb-2 text-xs font-mono font-bold uppercase tracking-widest text-accent-primary">
              <span>{project.client}</span>
              <span className="w-1 h-1 rounded-full bg-white" />
              <span className="text-white/70">{project.category}</span>
            </div>
            <h3 className="text-3xl md:text-4xl font-display font-bold text-white mb-2">
              {project.title}
            </h3>
          </motion.div>
        </div>
      </Link>
    </motion.div>
  );
}
