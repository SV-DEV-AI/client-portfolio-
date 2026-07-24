"use client";

import Image from "next/image";

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
  // Duplicate items to ensure smooth infinite looping
  const marqueeItems = [...arsenalItems, ...arsenalItems, ...arsenalItems];

  return (
    <section className="relative py-24 bg-black overflow-hidden" id="gear">
      <div className="container mx-auto px-6 md:px-12 mb-12">
        <h2 className="text-5xl md:text-7xl font-sans font-bold uppercase tracking-tighter text-white">
          The Arsenal
        </h2>
        <p className="text-gray-400 max-w-xl mt-4 text-sm md:text-base uppercase tracking-widest leading-relaxed">
          Commanding high-end, massive-scale productions with surgical precision. Solo execution, stadium impact.
        </p>
      </div>

      {/* Marquee Container */}
      <div className="relative w-full overflow-hidden flex flex-col group">
        <div className="flex gap-6 whitespace-nowrap animate-marquee group-hover:[animation-play-state:paused]">
          {marqueeItems.map((item, index) => (
            <div 
              key={`${item.id}-${index}`} 
              className="relative flex-none w-[85vw] md:w-[45vw] lg:w-[35vw] h-[50vh] md:h-[60vh] overflow-hidden rounded-xl inline-block"
            >
              <Image 
                src={item.image} 
                alt={item.title} 
                fill
                sizes="(max-width: 768px) 85vw, (max-width: 1200px) 45vw, 35vw"
                className="object-cover transition-transform duration-700 hover:scale-105 opacity-80 hover:opacity-100 grayscale hover:grayscale-0"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent p-8 flex flex-col justify-end pointer-events-none whitespace-normal">
                <h3 className="text-2xl md:text-3xl font-bold uppercase tracking-tight text-white mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-300 text-sm max-w-sm line-clamp-2">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx global>{`
        @keyframes marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(calc(-100% / 3)); /* Move by exactly one set of items */
          }
        }
        .animate-marquee {
          animation: marquee 15s linear infinite;
        }
      `}</style>
    </section>
  );
}
