"use client";

import { useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

interface VideoLightboxProps {
  isOpen: boolean;
  onClose: () => void;
  videoSrc?: string;
}

export default function VideoLightbox({ isOpen, onClose, videoSrc = "/videos/showreel-full.mp4" }: VideoLightboxProps) {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="fixed inset-0 z-[100] flex items-center justify-center lightbox-overlay p-4 md:p-12"
        >
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-6 right-6 md:top-12 md:right-12 z-50 text-white hover:text-accent-primary transition-colors bg-black/20 p-4 rounded-full backdrop-blur-md"
            aria-label="Close video"
          >
            <X size={32} />
          </button>

          {/* Video Container */}
          <motion.div
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.95, opacity: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="w-full max-w-7xl aspect-video bg-black rounded-2xl overflow-hidden shadow-2xl relative"
          >
            {/* Fallback gradient if video fails or is missing */}
            <div className="absolute inset-0 bg-gradient-to-br from-surface to-background flex items-center justify-center -z-10">
              <span className="text-gray-500 font-mono text-sm uppercase tracking-widest">Loading Showreel...</span>
            </div>
            <video
              ref={videoRef}
              src={videoSrc}
              controls
              autoPlay
              className="w-full h-full object-cover"
              controlsList="nodownload"
            />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
