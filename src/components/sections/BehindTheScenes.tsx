"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import SectionLabel from "@/components/ui/SectionLabel";
import RevealOnScroll from "@/components/ui/RevealOnScroll";

const galleryImages = [
  {
    id: 1,
    src: "/images/client-library/IMG_20190222_111013.jpg",
    alt: "Studio Control Room",
    caption: "Main Control Room",
  },
  {
    id: 2,
    src: "/images/client-library/IMG_20190222_153830.jpg",
    alt: "Camera Gear",
    caption: "Red Komodo Setup",
  },
  {
    id: 3,
    src: "/images/client-library/IMG_20190223_205634.jpg",
    alt: "Editing Bay",
    caption: "Color Grading Suite",
  },
  {
    id: 4,
    src: "/images/client-library/IMG_20190225_113105.jpg",
    alt: "Lighting Rig",
    caption: "Studio A Lighting Grid",
  },
];

export default function BehindTheScenes() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  // Transform vertical scroll into horizontal movement
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-50%"]);

  return (
    <section 
      ref={containerRef} 
      className="py-24 md:py-40 bg-surface relative z-10 overflow-hidden film-grain"
    >
      <div className="container mx-auto px-6 md:px-12 mb-12">
        <RevealOnScroll direction="up">
          <SectionLabel>Behind the Scenes</SectionLabel>
        </RevealOnScroll>
        <RevealOnScroll direction="up" delay={0.1}>
          <h2 className="text-[clamp(2.5rem,5vw,4rem)] font-display font-bold leading-[1.1] tracking-tight">
            Where the magic happens.
          </h2>
        </RevealOnScroll>
      </div>

      <div className="h-[50vh] md:h-[70vh] flex items-center">
        <motion.div 
          style={{ x }} 
          className="flex gap-6 md:gap-12 px-6 md:px-12 w-[200vw]"
        >
          {galleryImages.map((image) => (
            <div 
              key={image.id} 
              className="relative w-[80vw] md:w-[45vw] lg:w-[35vw] aspect-[4/3] rounded-2xl overflow-hidden group shrink-0"
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 35vw"
                className="object-cover grayscale group-hover:grayscale-0 transition-all duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              {/* Scanline effect overlay on hover */}
              <div className="absolute inset-0 bg-[linear-gradient(transparent_50%,rgba(0,0,0,0.1)_50%)] bg-[length:100%_4px] opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity duration-500" />
              
              <div className="absolute bottom-6 left-6 md:bottom-10 md:left-10 z-20">
                <div className="overflow-hidden">
                  <p className="text-white font-mono text-sm tracking-widest uppercase transform translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out">
                    {image.caption}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
