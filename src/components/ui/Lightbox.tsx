"use client";

import { useEffect } from "react";
import { X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface LightboxProps {
  isOpen: boolean;
  onClose: () => void;
  videoUrl: string;
}

export default function Lightbox({ isOpen, onClose, videoUrl }: LightboxProps) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4 }}
          className="fixed inset-0 z-[99999] flex items-center justify-center lightbox-overlay"
        >
          <button
            onClick={onClose}
            className="absolute top-6 right-6 text-white hover:text-accent-primary transition-colors p-2 z-10"
            aria-label="Close lightbox"
          >
            <X size={32} />
          </button>
          
          <motion.div
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.95, opacity: 0 }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="w-full max-w-6xl aspect-video bg-black rounded-lg overflow-hidden shadow-2xl relative"
          >
            <video
              src={videoUrl}
              autoPlay
              controls
              className="w-full h-full object-cover"
            />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
