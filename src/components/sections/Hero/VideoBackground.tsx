import { motion, MotionValue } from "framer-motion";

interface VideoBackgroundProps {
  y: MotionValue<string>;
  opacity: MotionValue<number>;
}

export default function VideoBackground({ y, opacity }: VideoBackgroundProps) {
  return (
    <motion.div style={{ y, opacity }} className="absolute inset-0 w-full h-full">
      {/* Gradient placeholder in case video doesn't load immediately */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#1a0505] to-black z-0" />
      
      <video 
        autoPlay 
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
  );
}
