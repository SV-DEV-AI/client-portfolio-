"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowDown } from "lucide-react";
import SplitText from "@/components/ui/SplitText";
import MagneticButton from "@/components/ui/MagneticButton";

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  const scrollToAbout = () => {
    const aboutSection = document.getElementById("about");
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section ref={containerRef} className="relative h-screen w-full overflow-hidden bg-background">
      {/* Background (Gradient mesh placeholder for showreel video) */}
      <motion.div style={{ y, opacity }} className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-background/50 via-background/20 to-background z-10" />
        
        {/* Animated gradient mesh representing creativity/motion */}
        <div className="absolute inset-0 opacity-40">
          <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] rounded-full bg-accent-primary/30 blur-[120px] animate-pulse" style={{ animationDuration: "8s" }} />
          <div className="absolute bottom-[-10%] right-[-10%] w-[60%] h-[60%] rounded-full bg-accent-secondary/20 blur-[150px] animate-pulse" style={{ animationDuration: "12s", animationDelay: "2s" }} />
          <div className="absolute top-[30%] left-[40%] w-[40%] h-[40%] rounded-full bg-surface-hover/50 blur-[100px] animate-pulse" style={{ animationDuration: "10s", animationDelay: "1s" }} />
        </div>
        
        {/* Placeholder for Client's Video */}
        {/* <video autoPlay muted loop playsInline className="w-full h-full object-cover">
          <source src="/videos/showreel.mp4" type="video/mp4" />
        </video> */}
      </motion.div>

      {/* Content */}
      <div className="relative z-20 h-full flex flex-col justify-center container mx-auto px-6 md:px-12 pt-20">
        <div className="max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex items-center space-x-4 mb-6"
          >
            <span className="w-12 h-px bg-accent-primary block" />
            <span className="text-sm font-bold uppercase tracking-widest text-accent-primary">
              Morphed Studios
            </span>
          </motion.div>
          
          <h1 className="text-5xl md:text-7xl lg:text-[7rem] font-display font-bold leading-[0.9] tracking-tight mb-8">
            <SplitText text="We Craft Visual Stories That Move People." delay={0.4} stagger={0.05} />
          </h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.2 }}
            className="text-lg md:text-xl text-gray-400 max-w-2xl mb-12"
          >
            A premier creative agency and production house. We are a one-stop shop to invent or re-invigorate brands.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.4 }}
            className="flex flex-wrap gap-4"
          >
            <MagneticButton onClick={scrollToAbout} variant="primary">
              Explore Our World
            </MagneticButton>
            <MagneticButton onClick={() => window.location.href = '/work'} variant="outline">
              View Portfolio
            </MagneticButton>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-12 left-6 md:left-12 z-20 flex flex-col items-center cursor-pointer"
        onClick={scrollToAbout}
      >
        <span className="text-[10px] uppercase tracking-widest mb-4 rotate-180" style={{ writingMode: 'vertical-rl' }}>
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
  );
}
