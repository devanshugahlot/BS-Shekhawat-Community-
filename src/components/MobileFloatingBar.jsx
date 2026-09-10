import React from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';

export default function MobileFloatingBar({ onEnroll }) {
  return (
    <div className="fixed bottom-0 inset-x-0 z-40 md:hidden bg-[#060a08]/95 backdrop-blur-lg border-t border-brand-green/30 p-2.5 px-4 shadow-[0_-5px_25px_rgba(0,0,0,0.8)]">
      <div className="flex items-center justify-between gap-3">
        <div>
          <div className="flex items-center gap-1.5 text-[10px] font-mono font-bold text-brand-green uppercase">
            <span className="w-1.5 h-1.5 rounded-full bg-brand-green animate-ping"></span>
            NEXT LIVE BATCH
          </div>
          <div className="text-xs font-black text-white font-mono">
            ₹ 14,999 <span className="text-[10px] text-gray-400 line-through">₹24,999</span>
          </div>
        </div>

        <button
          onClick={onEnroll}
          className="flex items-center gap-1.5 px-5 py-2.5 rounded-xl bg-brand-green active:bg-brand-neon text-black font-extrabold text-xs uppercase tracking-wider shadow-[0_0_15px_rgba(0,230,118,0.4)]"
        >
          Enroll Now <ArrowRight className="w-3.5 h-3.5" />
        </button>
      </div>
    </div>
  );
}
