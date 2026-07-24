"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const arsenalItems = [
  {
    id: 1,
    title: "The Command Center",
    description: "Multi-camera vision mixing, scaling 20+ live feeds simultaneously with zero latency.",
    image: "https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?q=80&w=2070&auto=format&fit=crop",
  },
  {
    id: 2,
    title: "Light & Atmosphere",
    description: "Designing and commanding massive lighting grids for stadium-scale events.",
    image: "https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?q=80&w=2070&auto=format&fit=crop",
  },
  {
    id: 3,
    title: "Broadcast Grade",
    description: "Redundant, fail-safe broadcast architecture ensuring flawless delivery worldwide.",
    image: "https://images.unsplash.com/photo-1603598730416-8d197dc34c56?q=80&w=2070&auto=format&fit=crop",
  },
  {
    id: 4,
    title: "The Scale",
    description: "Directing crews of 50+ on colossal LED setups and complex staging.",
    image: "https://images.unsplash.com/photo-1429962714451-bb934ecdc4ec?q=80&w=2070&auto=format&fit=crop",
  }
];

export default function ArsenalCarousel() {
  const targetRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["1%", "-65%"]);

  return (
    <section ref={targetRef} className="relative h-[300vh] bg-black" id="gear">
      <div className="sticky top-0 h-screen flex flex-col justify-center overflow-hidden">
        
        <div className="px-6 md:px-12 mb-12">
          <h2 className="text-5xl md:text-7xl font-sans font-bold uppercase tracking-tighter text-white">
            The Arsenal
          </h2>
          <p className="text-gray-400 max-w-xl mt-4 text-sm md:text-base uppercase tracking-widest leading-relaxed">
            Commanding high-end, massive-scale productions with surgical precision. Solo execution, stadium impact.
          </p>
        </div>

        <motion.div style={{ x }} className="flex gap-8 px-6 md:px-12 w-max">
          {arsenalItems.map((item) => (
            <div 
              key={item.id} 
              className="relative w-[85vw] md:w-[45vw] lg:w-[35vw] h-[50vh] md:h-[60vh] overflow-hidden group rounded-sm"
            >
              <img 
                src={item.image} 
                alt={item.title} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-60 group-hover:opacity-100 grayscale hover:grayscale-0"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent p-8 flex flex-col justify-end pointer-events-none">
                <h3 className="text-2xl md:text-3xl font-bold uppercase tracking-tight text-white mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-300 text-sm max-w-sm">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
