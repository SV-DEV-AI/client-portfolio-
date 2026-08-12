"use client";

import { useState, useRef } from "react";
import { Volume2, VolumeX } from "lucide-react";

export default function HeroShowreel() {
  const [isMuted, setIsMuted] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  return (
    <section className="relative w-full h-[100dvh] overflow-hidden" id="hero">
      {/* Background Video */}
      <video
        ref={videoRef}
        className="video-canvas opacity-70"
        autoPlay
        loop
        playsInline
        muted
        preload="auto"
      >
        <source src="/hero-video.mp4" type="video/mp4" />
      </video>

      {/* Film grain overlay */}
      <div className="absolute inset-0 film-grain pointer-events-none" />

      {/* Soft gradient fade into next section */}
      <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-b from-transparent to-background pointer-events-none z-10" />

      {/* Audio Toggle Button */}
      <button
        onClick={toggleMute}
        className="absolute bottom-8 right-8 z-50 p-4 rounded-full bg-black/40 backdrop-blur-md border border-white/20 text-white hover:bg-white hover:text-black transition-all duration-300 group"
        aria-label={isMuted ? "Unmute video" : "Mute video"}
      >
        {isMuted ? (
          <VolumeX className="w-6 h-6 group-hover:scale-110 transition-transform" />
        ) : (
          <Volume2 className="w-6 h-6 group-hover:scale-110 transition-transform" />
        )}
      </button>
    </section>
  );
}
