import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import Image from "next/image";
import type { Project } from "@/data/projects"; // Assuming type export

interface ProjectCardProps {
  project: Project;
  spanClass: string;
}

export default function ProjectCard({ project, spanClass }: ProjectCardProps) {
  const [isHovered, setIsHovered] = useState(false);

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
