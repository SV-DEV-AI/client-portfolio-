"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { projects } from "@/data/projects";

const categories = ["All", "Commercials", "Broadcast", "Live Events"];

export default function PortfolioGrid() {
  const [activeFilter, setActiveFilter] = useState("All");

  const filteredProjects = projects.filter((project) =>
    activeFilter === "All" ? true : project.category === activeFilter
  );

  return (
    <section className="py-24 px-6 md:px-12 bg-background min-h-screen" id="work">
      <div className="max-w-[1400px] mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <h2 className="text-5xl md:text-7xl font-sans font-bold uppercase tracking-tighter">
            Selected <br /> Works
          </h2>

          <div className="flex flex-wrap gap-3">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveFilter(category)}
                className={`px-6 py-2 rounded-full text-sm tracking-widest uppercase transition-all duration-300 filter-pill ${
                  activeFilter === category ? "active" : "text-gray-400 hover:text-white"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        <motion.div layout className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
          <AnimatePresence>
            {filteredProjects.map((project) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                key={project.id}
                className="relative group overflow-hidden bg-surface rounded-sm break-inside-avoid"
              >
                <div className={`relative w-full ${project.aspectRatio === '16:9' ? 'aspect-video' : project.aspectRatio === '9:16' ? 'aspect-[9/16]' : project.aspectRatio === '4:3' ? 'aspect-[4/3]' : 'aspect-square'}`}>
                  {/* Thumbnail */}
                  <img
                    src={project.thumbnail}
                    alt={project.title}
                    className="absolute inset-0 w-full h-full object-cover transition-opacity duration-500 group-hover:opacity-0"
                  />
                  {/* Hover Video */}
                  <video
                    src={project.previewVideo}
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="absolute inset-0 w-full h-full object-cover opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  />
                </div>
                
                {/* Info Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                  <span className="text-accent-primary text-xs tracking-[0.2em] uppercase font-bold mb-2">
                    {project.category}
                  </span>
                  <h3 className="text-2xl font-bold uppercase tracking-tight text-white">
                    {project.title}
                  </h3>
                  <p className="text-gray-300 text-sm mt-2 line-clamp-2">
                    {project.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
