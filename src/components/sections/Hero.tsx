"use client";

import { useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowDown, Play } from "lucide-react";
import VideoLightbox from "@/components/ui/VideoLightbox";

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  const scrollToAbout = () => {
    const aboutSection = document.getElementById("about");
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <section ref={containerRef} className="relative h-screen w-full overflow-hidden bg-black film-grain">
        {/* Full-bleed Video Background */}
        <motion.div style={{ y, opacity }} className="absolute inset-0 w-full h-full">
          {/* Gradient placeholder in case video doesn't load immediately */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#1a0505] to-black z-0" />
          
          <video 
            autoPlay 
            muted 
            loop 
            playsInline 
            preload="metadata"
            className="video-canvas z-10 object-cover"
            poster="/images/client-library/IMG_20180914_152556.jpg"
          />
          
          {/* Fallback animated background representing motion */}
          <div className="absolute inset-0 z-0 opacity-30">
            <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] rounded-full bg-accent-primary/20 blur-[120px] animate-pulse" style={{ animationDuration: "8s" }} />
            <div className="absolute bottom-[-10%] right-[-10%] w-[60%] h-[60%] rounded-full bg-accent-secondary/20 blur-[150px] animate-pulse" style={{ animationDuration: "12s", animationDelay: "2s" }} />
          </div>

          {/* Vignette Overlay for cinematic feel */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.8)_100%)] z-20 pointer-events-none" />
        </motion.div>

        {/* Clean Play Button Overlay */}
        <div className="absolute inset-0 z-30 flex items-center justify-center">
          <button
            onClick={() => setIsLightboxOpen(true)}
            className="group relative flex items-center justify-center w-24 h-24 md:w-32 md:h-32 rounded-full border border-white/20 bg-black/20 backdrop-blur-md hover:bg-accent-primary/90 hover:border-accent-primary transition-all duration-500 magnetic"
            aria-label="Play Showreel"
          >
            {/* Pulsing rings */}
            <span className="absolute inset-0 rounded-full border border-white/30 animate-[ping_3s_ease-in-out_infinite]" />
            <span className="absolute inset-[-20px] rounded-full border border-white/10 animate-[ping_3s_ease-in-out_infinite_1s]" />
            
            <Play size={32} className="text-white ml-2 group-hover:scale-110 transition-transform duration-300" fill="currentColor" />
          </button>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
          className="absolute bottom-12 left-6 md:left-12 z-40 flex flex-col items-center cursor-pointer"
          onClick={scrollToAbout}
          role="button"
          tabIndex={0}
          onKeyDown={(e) => {
            if (e.key === 'Enter' || e.key === ' ') {
              scrollToAbout();
            }
          }}
        >
          <span className="text-[10px] uppercase tracking-widest mb-4 rotate-180 text-white/50" style={{ writingMode: 'vertical-rl' }}>
            Scroll Down
          </span>
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
          >
            <ArrowDown size={16} className="text-accent-primary" />
          </motion.div>
        </motion.div>
      </section>

      {/* Lightbox */}
      <VideoLightbox 
        isOpen={isLightboxOpen} 
        onClose={() => setIsLightboxOpen(false)} 
      />
    </>
  );
}
