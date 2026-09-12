import React from 'react';
import { 
  Users, 
  UserCheck, 
  Check, 
  Clock, 
  ArrowRight,
  Sparkles
} from 'lucide-react';

export default function LiveClassesSection({ onEnroll }) {
  const groupIncludes = [
    'Live Interactive Classes',
    'Complete Order Flow Curriculum',
    'Live Market Analysis',
    'Practical Chart Examples',
    'Doubt & Q&A Sessions',
    'Trading Psychology & Risk Management',
    '5X Market System',
    'Prop Firm → Get Funded Roadmap',
  ];

  const mentorshipIncludes = [
    '1-on-1 Private Sessions',
    'Personalized Trading Analysis',
    'Trade Review & Mistake Analysis',
    'Strategy Building',
    'Live Market Execution',
    'Risk Management',
    'Trading Psychology',
    'Personalized Trading Plan',
    'Prop Firm Guidance',
  ];

  const upcomingClasses = [
    {
      title: 'Orderflow Live Session',
      topic: 'Market Structure & Liquidity',
      timing: '09:30 AM • Live Market',
      isNext: true,
    },
    {
      title: 'Footprint Deep Dive',
      topic: 'Imbalance & Absorption',
      timing: '09:30 AM • Live Market',
      isNext: false,
    },
    {
      title: 'Q&A Session',
      topic: 'Doubt Clearing Live',
      timing: '08:00 PM • Live Q&A',
      isNext: false,
    },
  ];

  return (
    <section id="live" className="py-16 sm:py-20 border-t border-brand-border/60 relative bg-[#060908]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-xs font-mono text-gray-400 mb-4">
          <a href="#home" className="hover:text-brand-green transition-colors">Home</a>
          <span>&gt;</span>
          <span className="text-brand-green font-semibold">Live Experience</span>
        </div>

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-green/10 border border-brand-green/30 text-brand-green text-[11px] font-mono font-bold uppercase mb-3">
            <Sparkles className="w-3.5 h-3.5" /> LEARNING PATHWAYS
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight mb-3 uppercase">
            CHOOSE YOUR <span className="text-brand-green">LEARNING EXPERIENCE</span>
          </h2>
          <p className="text-sm sm:text-base text-gray-300">
            Select the structured format tailored to your trading goals, pace, and execution discipline.
          </p>
        </div>

        {/* TWO TRACKS: GROUP CLASSES VS PERSONAL MENTORSHIP */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 mb-16">
          
          {/* TRACK 01: GROUP CLASSES */}
          <div className="rounded-3xl bg-[#09100d] border border-brand-border/80 hover:border-brand-green/40 transition-all p-6 sm:p-8 flex flex-col justify-between shadow-lg relative">
            <div>
              {/* Badge & Number */}
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-mono font-black text-brand-green uppercase tracking-widest px-3 py-1 rounded-full bg-brand-green/10 border border-brand-green/30">
                  TRACK 01
                </span>
                <span className="text-xs font-mono text-gray-400 font-semibold">
                  Cohort Learning
                </span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-black text-white tracking-tight mb-1">
                01 — GROUP CLASSES
              </h3>
              
              <div className="text-xs sm:text-sm font-mono font-bold text-brand-green uppercase tracking-wider mb-4">
                LEARN • EXECUTE • GROW TOGETHER
              </div>

              <p className="text-xs sm:text-sm text-gray-300 leading-relaxed mb-6">
                A structured live learning experience where you learn the complete Order Flow system step-by-step with a focused group of traders.
              </p>

              {/* Includes List */}
              <div className="pt-4 border-t border-brand-border/60 mb-6">
                <div className="text-xs font-mono font-bold text-white uppercase tracking-wider mb-3">
                  Includes:
                </div>
                <div className="space-y-2.5">
                  {groupIncludes.map((item, idx) => (
                    <div key={idx} className="flex items-start gap-2.5">
                      <div className="w-4 h-4 rounded-full bg-brand-green/15 border border-brand-green flex items-center justify-center shrink-0 mt-0.5">
                        <Check className="w-2.5 h-2.5 text-brand-green stroke-[3]" />
                      </div>
                      <span className="text-xs sm:text-sm text-gray-200">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Best For Box */}
              <div className="p-3.5 rounded-xl bg-[#0d1712] border border-brand-border/60 text-xs text-gray-300 leading-relaxed mb-6">
                <strong className="text-brand-green font-mono uppercase block text-[11px] mb-1">BEST FOR:</strong>
                Traders who want a structured learning environment and live interaction with other traders.
              </div>
            </div>

            {/* Action Button */}
            <div>
              <button
                onClick={onEnroll}
                className="w-full py-3.5 rounded-xl bg-brand-green hover:bg-brand-neon text-black font-extrabold text-xs sm:text-sm uppercase tracking-wider flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(0,230,118,0.35)] transition-all"
              >
                JOIN GROUP CLASSES <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* TRACK 02: PERSONAL MENTORSHIP */}
          <div className="rounded-3xl bg-gradient-to-b from-[#0c1812] to-[#09100d] border-2 border-brand-green/50 hover:border-brand-green transition-all p-6 sm:p-8 flex flex-col justify-between shadow-[0_0_30px_rgba(0,230,118,0.15)] relative">
            
            {/* Top Featured Pill */}
            <div className="absolute -top-3.5 right-6 px-3.5 py-1 rounded-full bg-brand-green text-black font-mono font-black text-[10px] uppercase tracking-wider shadow-[0_0_15px_rgba(0,230,118,0.5)]">
              LIMITED 1-ON-1 SLOTS
            </div>

            <div>
              {/* Badge & Number */}
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-mono font-black text-brand-green uppercase tracking-widest px-3 py-1 rounded-full bg-brand-green/20 border border-brand-green/40">
                  TRACK 02
                </span>
                <span className="text-xs font-mono text-brand-green font-semibold">
                  Personal 1-on-1
                </span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-black text-white tracking-tight mb-1">
                02 — PERSONAL MENTORSHIP
              </h3>
              
              <div className="text-xs sm:text-sm font-mono font-bold text-brand-green uppercase tracking-wider mb-4">
                1-ON-1 • PERSONALIZED • DIRECT
              </div>

              <p className="text-xs sm:text-sm text-gray-300 leading-relaxed mb-6">
                A personalized mentorship experience focused entirely on your trading, your mistakes and your execution.
              </p>

              {/* Includes List */}
              <div className="pt-4 border-t border-brand-border/60 mb-6">
                <div className="text-xs font-mono font-bold text-white uppercase tracking-wider mb-3">
                  Includes:
                </div>
                <div className="space-y-2.5">
                  {mentorshipIncludes.map((item, idx) => (
                    <div key={idx} className="flex items-start gap-2.5">
                      <div className="w-4 h-4 rounded-full bg-brand-green/15 border border-brand-green flex items-center justify-center shrink-0 mt-0.5">
                        <Check className="w-2.5 h-2.5 text-brand-green stroke-[3]" />
                      </div>
                      <span className="text-xs sm:text-sm text-gray-200">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Best For Box */}
              <div className="p-3.5 rounded-xl bg-[#0e1d15] border border-brand-green/30 text-xs text-gray-300 leading-relaxed mb-6">
                <strong className="text-brand-green font-mono uppercase block text-[11px] mb-1">BEST FOR:</strong>
                Traders who want direct personal guidance and a customized path to improve their execution.
              </div>
            </div>

            {/* Action Button */}
            <div>
              <button
                onClick={onEnroll}
                className="w-full py-3.5 rounded-xl bg-brand-green hover:bg-brand-neon text-black font-extrabold text-xs sm:text-sm uppercase tracking-wider flex items-center justify-center gap-2 shadow-[0_0_25px_rgba(0,230,118,0.5)] transition-all"
              >
                APPLY FOR PERSONAL MENTORSHIP <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

        </div>

        {/* BOOK YOUR SLOT FOR UPCOMING LIVE CLASSES */}
        <div>
          <div className="flex items-center justify-between mb-4">
            <div>
              <h3 className="text-xl sm:text-2xl font-black text-white tracking-tight">
                Book your slot for upcoming live classes
              </h3>
              <p className="text-xs text-gray-400 mt-0.5">
                Reserve your seat for upcoming live market analysis sessions.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5">
            {upcomingClasses.map((item, idx) => (
              <div
                key={idx}
                className={`p-5 rounded-2xl border ${
                  item.isNext 
                    ? 'bg-[#0b1410] border-brand-green/40 shadow-sm' 
                    : 'bg-[#080d0a] border-brand-border hover:border-brand-green/30'
                } flex flex-col justify-between transition-all`}
              >
                <div>
                  <div className="flex items-center justify-between mb-2.5">
                    <span className="text-xs font-mono font-bold uppercase text-brand-green flex items-center gap-1.5">
                      <Clock className="w-3.5 h-3.5" /> {item.timing}
                    </span>
                    {item.isNext && (
                      <span className="px-2 py-0.5 rounded-full bg-brand-green/15 text-brand-green text-[9px] font-bold uppercase font-mono">
                        Upcoming
                      </span>
                    )}
                  </div>

                  <h4 className="text-sm sm:text-base font-bold text-white mb-1">
                    {item.title}
                  </h4>
                  <p className="text-xs text-gray-400 mb-4">
                    {item.topic}
                  </p>
                </div>

                <button
                  onClick={onEnroll}
                  className={`w-full py-2.5 rounded-xl font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-1.5 transition-all ${
                    item.isNext
                      ? 'bg-brand-green hover:bg-brand-neon text-black shadow-[0_0_15px_rgba(0,230,118,0.35)]'
                      : 'bg-white/5 hover:bg-brand-green hover:text-black text-gray-200 border border-brand-border hover:border-brand-green'
                  }`}
                >
                  Book Your Slot <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
