"use client";

import Image from "next/image";
import { useRef, useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

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
    image: "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?q=80&w=2070&auto=format&fit=crop",
  },
  {
    id: 4,
    title: "The Scale",
    description: "Directing crews of 50+ on colossal LED setups and complex staging.",
    image: "https://images.unsplash.com/photo-1429962714451-bb934ecdc4ec?q=80&w=2070&auto=format&fit=crop",
  }
];

export default function ArsenalCarousel() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const checkScroll = () => {
    if (scrollContainerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(Math.ceil(scrollLeft + clientWidth) < scrollWidth);
    }
  };

  useEffect(() => {
    checkScroll();
    window.addEventListener('resize', checkScroll);
    return () => window.removeEventListener('resize', checkScroll);
  }, []);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const scrollAmount = window.innerWidth > 768 ? window.innerWidth * 0.6 : window.innerWidth * 0.8;
      scrollContainerRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section className="relative py-24 bg-black overflow-hidden" id="gear">
      <div className="container mx-auto px-6 md:px-12 mb-12 flex justify-between items-end">
        <div>
          <h2 className="text-5xl md:text-7xl font-sans font-bold uppercase tracking-tighter text-white">
            The Arsenal
          </h2>
          <p className="text-gray-400 max-w-xl mt-4 text-sm md:text-base uppercase tracking-widest leading-relaxed">
            Commanding high-end, massive-scale productions with surgical precision. Solo execution, stadium impact.
          </p>
        </div>
        
        {/* Navigation Arrows */}
        <div className="hidden md:flex gap-4 relative z-10">
          <button 
            onClick={() => scroll('left')} 
            disabled={!canScrollLeft}
            className={`w-12 h-12 rounded-full border border-white/20 flex items-center justify-center transition-all ${canScrollLeft ? 'text-white hover:bg-white hover:text-black cursor-pointer' : 'text-white/30 cursor-not-allowed'}`}
            aria-label="Scroll left"
          >
            <ChevronLeft size={24} />
          </button>
          <button 
            onClick={() => scroll('right')} 
            disabled={!canScrollRight}
            className={`w-12 h-12 rounded-full border border-white/20 flex items-center justify-center transition-all ${canScrollRight ? 'text-white hover:bg-white hover:text-black cursor-pointer' : 'text-white/30 cursor-not-allowed'}`}
            aria-label="Scroll right"
          >
            <ChevronRight size={24} />
          </button>
        </div>
      </div>

      {/* Scroll Container */}
      <div 
        ref={scrollContainerRef}
        onScroll={checkScroll}
        className="flex gap-6 overflow-x-auto snap-x snap-mandatory hide-scrollbar px-6 md:px-12 pb-8"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        {arsenalItems.map((item) => (
          <div 
            key={item.id} 
            className="relative flex-none w-[85vw] md:w-[45vw] lg:w-[35vw] h-[50vh] md:h-[60vh] overflow-hidden group rounded-xl snap-center"
          >
            <Image 
              src={item.image} 
              alt={item.title} 
              fill
              sizes="(max-width: 768px) 85vw, (max-width: 1200px) 45vw, 35vw"
              className="object-cover transition-transform duration-700 group-hover:scale-105 opacity-80 group-hover:opacity-100 grayscale hover:grayscale-0"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent p-8 flex flex-col justify-end pointer-events-none">
              <h3 className="text-2xl md:text-3xl font-bold uppercase tracking-tight text-white mb-2">
                {item.title}
              </h3>
              <p className="text-gray-300 text-sm max-w-sm line-clamp-2">
                {item.description}
              </p>
            </div>
          </div>
        ))}
        {/* Extra padding element to ensure last item can snap properly on desktop */}
        <div className="flex-none w-[1vw] md:w-[5vw]" aria-hidden="true" />
      </div>

      <style jsx global>{`
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  );
}
