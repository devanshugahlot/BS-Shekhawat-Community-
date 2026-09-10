import React from 'react';
import { X, Play, Volume2, Maximize, Activity } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function VideoModal({ isOpen, onClose, videoType }) {
  if (!isOpen) return null;

  const titles = {
    intro: 'Master Orderflow Trading — Introduction with BS Shekhawat',
    trailer: 'Better Traders, Better Life — Official Program Trailer',
    preview: 'Footprint & DOM Live Absorption — Class Sample Breakdown',
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="absolute inset-0 bg-black/85 backdrop-blur-md"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.9, y: 20 }}
          className="relative w-full max-w-4xl bg-[#0a100d] border border-brand-green/40 rounded-2xl overflow-hidden shadow-[0_0_60px_rgba(0,230,118,0.25)] z-10"
        >
          {/* Header Bar */}
          <div className="flex items-center justify-between px-5 py-3.5 bg-[#060a08] border-b border-brand-border">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-brand-green animate-pulse"></span>
              <span className="text-xs font-mono font-bold text-gray-200 truncate">
                {titles[videoType] || 'Orderflow Masterclass Video Player'}
              </span>
            </div>
            <button
              onClick={onClose}
              className="p-1 rounded-lg text-gray-400 hover:text-white hover:bg-white/10 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Video Player Mockup */}
          <div className="relative aspect-video bg-black flex items-center justify-center overflow-hidden group">
            <img
              src="/assets/mentor.jpg"
              alt="Trading Video Stream"
              className="w-full h-full object-cover filter brightness-[0.7] contrast-110"
            />
            
            {/* Play Overlay with Glowing Icon */}
            <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center">
              <div className="w-20 h-20 rounded-full bg-brand-green hover:bg-brand-neon flex items-center justify-center text-black shadow-[0_0_35px_rgba(0,230,118,0.8)] cursor-pointer hover:scale-110 transition-transform">
                <Play className="w-9 h-9 fill-black ml-1" />
              </div>
              <p className="text-xs font-mono text-gray-300 mt-4 tracking-wider uppercase bg-black/70 px-3 py-1 rounded-full border border-white/10">
                Click to Play 4K Masterclass Footage
              </p>
            </div>

            {/* Video Controls Bar */}
            <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black via-black/80 to-transparent p-4 flex items-center justify-between text-xs font-mono text-gray-300">
              <div className="flex items-center gap-3">
                <Play className="w-4 h-4 text-brand-green fill-brand-green cursor-pointer" />
                <span>01:14 / 18:45</span>
                <span className="text-brand-green">● 1080p HD</span>
              </div>
              <div className="flex items-center gap-3">
                <Volume2 className="w-4 h-4 cursor-pointer hover:text-brand-green" />
                <Maximize className="w-4 h-4 cursor-pointer hover:text-brand-green" />
              </div>
            </div>
          </div>

          {/* Footer details */}
          <div className="p-4 bg-[#080d0a] border-t border-brand-border/60 flex items-center justify-between text-xs">
            <div className="text-gray-400">
              Instructor: <strong className="text-white">BS Shekhawat</strong> • Prop Trading Desk
            </div>
            <a
              href="#pricing"
              onClick={onClose}
              className="text-brand-green font-bold hover:underline"
            >
              Enroll Now to get all 100+ full episodes &rarr;
            </a>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
