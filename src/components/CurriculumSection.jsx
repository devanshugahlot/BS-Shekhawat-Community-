import React, { useState } from 'react';
import { ChevronDown, ChevronUp, PlayCircle, BookOpen, Clock, CheckCircle2 } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function CurriculumSection({ onWatchVideo }) {
  const [expandedModule, setExpandedModule] = useState(0);
  const [allExpanded, setAllExpanded] = useState(false);

  const toggleModule = (index) => {
    if (expandedModule === index) {
      setExpandedModule(null);
    } else {
      setExpandedModule(index);
    }
  };

  const toggleAll = () => {
    setAllExpanded(!allExpanded);
    setExpandedModule(allExpanded ? null : -1);
  };

  const modules = [
    {
      num: '01',
      badgeNum: '01',
      title: 'Market Foundations',
      lessonsCount: '6 Lessons',
      duration: '4.5 Hours',
      summary: 'Build a rock-solid foundation of modern electronic markets and auction discovery mechanisms.',
      lessons: [
        { title: 'How Financial Markets Work', duration: '42 mins' },
        { title: 'Auction Theory & Efficient Market Hypothesis', duration: '50 mins' },
        { title: 'Price Discovery & Spread Mechanics', duration: '38 mins' },
        { title: 'Buyers & Sellers: The Continuous Double Auction', duration: '45 mins' },
        { title: 'Market Participants: Institutional vs Retail', duration: '40 mins' },
        { title: 'Market Structure & Range Expansion', duration: '55 mins' },
      ],
    },
    {
      num: '02',
      badgeNum: '02',
      title: 'Understanding Volume',
      lessonsCount: '6 Lessons',
      duration: '5.2 Hours',
      summary: 'Look beyond standard vertical volume and identify where institutional commitments reside.',
      lessons: [
        { title: 'Volume Fundamentals & Mechanics', duration: '45 mins' },
        { title: 'Volume Distribution & Relative Volume (RVOL)', duration: '52 mins' },
        { title: 'High Volume Nodes (HVN) as Fair Value', duration: '48 mins' },
        { title: 'Low Volume Nodes (LVN) as Price Rejection', duration: '44 mins' },
        { title: 'Volume Context in Trending vs Ranging Markets', duration: '58 mins' },
        { title: 'Volume & Price Relationship Dynamics', duration: '60 mins' },
      ],
    },
    {
      num: '03',
      badgeNum: '03',
      title: 'Footprint Mastery',
      lessonsCount: '8 Lessons',
      duration: '7.0 Hours',
      summary: 'Inspect the anatomy of executed trades with bid/ask diagonals, delta, and trapped participants.',
      lessons: [
        { title: 'Footprint Introduction & Software Setup', duration: '35 mins' },
        { title: 'Bid & Ask Diagonals Breakdown', duration: '48 mins' },
        { title: 'Delta, Min/Max Delta & Cumulative Volume Delta (CVD)', duration: '55 mins' },
        { title: 'Imbalances: Diagonal vs Horizontal Aggression', duration: '50 mins' },
        { title: 'Stacked Imbalances & High Probability Execution', duration: '65 mins' },
        { title: 'Absorption: How Big Passive Orders Eat Aggression', duration: '58 mins' },
        { title: 'Exhaustion: Spotting the End of Rallies & Dumps', duration: '46 mins' },
        { title: 'Trapped Traders: Exploiting Emotional Squeezes', duration: '60 mins' },
      ],
    },
    {
      num: '04',
      badgeNum: '03',
      title: 'Orderflow Reading',
      lessonsCount: '6 Lessons',
      duration: '5.5 Hours',
      summary: 'Synthesize real-time tape reading, aggression, and liquidity shifts on live charts.',
      lessons: [
        { title: 'Reading Aggression in the Auction', duration: '52 mins' },
        { title: 'Buyer / Seller Contest at Inflection Points', duration: '47 mins' },
        { title: 'Liquidity Pools: Stop Runs & Bids Resting', duration: '54 mins' },
        { title: 'Absorption Zones & Volume Defense', duration: '60 mins' },
        { title: 'Failed Auctions: The Fast Money Reversal Setup', duration: '50 mins' },
        { title: 'Orderflow Confirmation Before Triggering Entry', duration: '55 mins' },
      ],
    },
    {
      num: '05',
      badgeNum: '03',
      title: 'Market Profile',
      lessonsCount: '7 Lessons',
      duration: '6.0 Hours',
      summary: 'Master TPO profiles, Initial Balance, POC migrations, and daily market sentiment.',
      lessons: [
        { title: 'Market Profile Basics & TPO Construction', duration: '45 mins' },
        { title: 'POC (Point of Control) & Virgin POC Gravity', duration: '50 mins' },
        { title: 'VAH & VAL: Establishing the 70% Value Area', duration: '52 mins' },
        { title: 'Value Area Rules & 80% Rule Validation', duration: '48 mins' },
        { title: 'Initial Balance (IB) Types & Day Type Anticipation', duration: '55 mins' },
        { title: 'Balanced Market (Rotation) Strategies', duration: '50 mins' },
        { title: 'Imbalanced Market (Trend Day) Capturing', duration: '60 mins' },
      ],
    },
    {
      num: '06',
      badgeNum: '04',
      title: 'Trade Execution',
      lessonsCount: '6 Lessons',
      duration: '5.0 Hours',
      summary: 'Convert analytical knowledge into razor-sharp entry precision with institutional risk management.',
      lessons: [
        { title: 'Finding High Probability Trade Locations (HTF to LTF)', duration: '50 mins' },
        { title: 'Entry Confirmation via Footprint & DOM Clues', duration: '48 mins' },
        { title: 'Stop Loss Placement with Structure Protection', duration: '42 mins' },
        { title: 'Target Selection & Partial Scale-out Mathematics', duration: '45 mins' },
        { title: 'Risk Management: Capital Preservation Protocols', duration: '55 mins' },
        { title: 'Trade Management & Trailing Based on Orderflow', duration: '60 mins' },
      ],
    },
    {
      num: '07',
      badgeNum: '04',
      title: 'Advanced Orderflow',
      lessonsCount: '7 Lessons',
      duration: '6.8 Hours',
      summary: 'Elite concepts: Iceberg detection, hidden resting limits, delta divergences, and spoofing filters.',
      lessons: [
        { title: 'Advanced Absorption & Passive Wall Defense', duration: '54 mins' },
        { title: 'Liquidity Traps & Fake Breakouts', duration: '50 mins' },
        { title: 'Exhaustion Volume vs Absorption Signatures', duration: '48 mins' },
        { title: 'Iceberg Concepts & Hidden Order Execution', duration: '62 mins' },
        { title: 'Delta Divergence: Regular & Hidden Momentum Traps', duration: '58 mins' },
        { title: 'Failed Breakouts (SFP) with Orderflow Validation', duration: '52 mins' },
        { title: 'Advanced Setups: The Shekhawat Institutional Playbook', duration: '75 mins' },
      ],
    },
    {
      num: '08',
      badgeNum: '05',
      title: 'Professional Trading Mindset',
      lessonsCount: '7 Lessons',
      duration: '5.5 Hours',
      summary: 'Master the internal psychological landscape to execute consistently without hesitation or fear.',
      lessons: [
        { title: 'Trading Psychology: The Neuroscience of Market Uncertainty', duration: '55 mins' },
        { title: 'Discipline: Systematic Execution Over Intuitive Whims', duration: '48 mins' },
        { title: 'Patience & Waiting for Your Specific A+ Setup', duration: '42 mins' },
        { title: 'Conquering FOMO (Fear of Missing Out)', duration: '45 mins' },
        { title: 'Eliminating Revenge Trading & Tilt Management', duration: '50 mins' },
        { title: 'Building a Structured Daily Trading Routine & Journal', duration: '60 mins' },
        { title: 'Maintaining Consistency & Long-Term Growth Curve', duration: '65 mins' },
      ],
    },
  ];

  const renderMiniChart = () => {
    return (
      <div className="hidden sm:flex items-center justify-end h-12 w-28 shrink-0 opacity-80 group-hover:opacity-100 transition-opacity">
        <svg viewBox="0 0 120 50" className="w-full h-full overflow-visible">
          <line x1="15" y1="8" x2="15" y2="42" stroke="#00e676" strokeWidth="1" />
          <rect x="11" y="16" width="8" height="18" fill="#00e676" rx="1" />

          <line x1="38" y1="14" x2="38" y2="40" stroke="#ef4444" strokeWidth="1" />
          <rect x="34" y="20" width="8" height="14" fill="#ef4444" rx="1" />

          <line x1="62" y1="6" x2="62" y2="44" stroke="#00e676" strokeWidth="1" />
          <rect x="58" y="12" width="8" height="24" fill="#00e676" rx="1" />

          <line x1="86" y1="10" x2="86" y2="38" stroke="#00e676" strokeWidth="1" />
          <rect x="82" y="14" width="8" height="16" fill="#00e676" rx="1" />

          <line x1="110" y1="4" x2="110" y2="46" stroke="#00ff87" strokeWidth="1.5" />
          <rect x="106" y="8" width="8" height="30" fill="#00ff87" rx="1" />
        </svg>
      </div>
    );
  };

  return (
    <section id="curriculum" className="py-16 sm:py-20 border-t border-brand-border/60 relative bg-[#060908]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-xs font-mono text-gray-400 mb-5">
          <a href="#home" className="hover:text-brand-green transition-colors">Home</a>
          <span>&gt;</span>
          <span className="text-brand-green font-semibold">Curriculum</span>
        </div>

        {/* Header with Script Accent */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8">
          <div>
            <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight mb-2">
              Complete <span className="text-brand-green">Orderflow</span> Curriculum
            </h2>
            <p className="text-sm sm:text-base text-gray-300 max-w-xl">
              A step-by-step structured learning path from basics to advanced.
            </p>
          </div>

          <div className="mt-4 md:mt-0 flex items-center gap-4">
            <button
              onClick={toggleAll}
              className="text-xs font-mono text-gray-300 hover:text-brand-green border border-brand-border px-3.5 py-2 rounded-xl bg-[#0b120f] transition-colors font-bold"
            >
              {allExpanded ? 'Collapse All' : 'Expand All Modules'}
            </button>
            <div className="text-right">
              <span className="font-script text-2xl sm:text-3xl text-brand-green font-bold tracking-wide">
                "Learn Apply Grow"
              </span>
            </div>
          </div>
        </div>

        {/* Modules List Container */}
        <div className="space-y-3">
          {modules.map((mod, index) => {
            const isExpanded = allExpanded || expandedModule === index;

            return (
              <div
                key={index}
                className={`rounded-2xl border transition-all duration-200 overflow-hidden ${
                  isExpanded 
                    ? 'bg-[#0a110d] border-brand-green/40 shadow-sm' 
                    : 'bg-[#090e0b] border-brand-border hover:border-brand-green/30 hover:bg-[#0c1410]'
                }`}
              >
                {/* Module Header Bar */}
                <div
                  onClick={() => toggleModule(index)}
                  className="p-4 sm:p-5 flex items-center justify-between cursor-pointer select-none group"
                >
                  <div className="flex items-center gap-3.5 sm:gap-5 min-w-0">
                    <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-brand-green/10 border-2 border-brand-green flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform shadow-sm">
                      <span className="text-sm sm:text-base font-black text-brand-green font-mono">
                        {mod.badgeNum}
                      </span>
                    </div>

                    <div className="min-w-0">
                      <h3 className="text-base sm:text-lg font-bold text-white group-hover:text-brand-green transition-colors truncate">
                        {mod.title}
                      </h3>
                      <div className="flex items-center gap-2.5 text-xs text-gray-400 font-mono mt-0.5">
                        <span className="flex items-center gap-1 text-brand-green font-semibold">
                          <BookOpen className="w-3.5 h-3.5" /> {mod.lessonsCount}
                        </span>
                        <span>•</span>
                        <span className="flex items-center gap-1">
                          <Clock className="w-3.5 h-3.5 text-gray-500" /> {mod.duration}
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    {renderMiniChart()}
                    <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center text-gray-400 group-hover:text-brand-green group-hover:bg-brand-green/10 transition-colors shrink-0">
                      {isExpanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                    </div>
                  </div>
                </div>

                {/* Collapsible Lessons Drawer */}
                <AnimatePresence>
                  {isExpanded && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25 }}
                      className="border-t border-brand-border/60 px-4 sm:px-6 py-4 bg-[#060a08]/95"
                    >
                      <p className="text-xs sm:text-sm text-gray-300 mb-4 italic">
                        {mod.summary}
                      </p>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-2.5">
                        {mod.lessons.map((lesson, lIdx) => (
                          <div
                            key={lIdx}
                            className="flex items-center justify-between p-3 rounded-xl bg-[#09100c] border border-brand-border/60 hover:border-brand-green/30 transition-colors"
                          >
                            <div className="flex items-center gap-2.5 min-w-0 pr-2">
                              <span className="text-xs font-mono font-bold text-brand-green shrink-0">
                                {lIdx + 1}.
                              </span>
                              <span className="text-xs sm:text-sm text-gray-200 font-medium truncate">
                                {lesson.title}
                              </span>
                            </div>
                            <span className="px-2 py-0.5 rounded text-[11px] font-mono bg-white/5 text-gray-300 border border-white/10 shrink-0">
                              {lesson.duration}
                            </span>
                          </div>
                        ))}
                      </div>

                      <div className="mt-4 pt-3 flex flex-wrap items-center justify-between gap-2 text-xs text-gray-400">
                        <span className="font-mono text-brand-green flex items-center gap-1.5 font-medium">
                          <CheckCircle2 className="w-3.5 h-3.5" /> Full Lifetime Access with Video Recaps & PDF Notes
                        </span>
                        <button
                          onClick={() => onWatchVideo('preview')}
                          className="text-gray-200 hover:text-brand-green flex items-center gap-1 font-bold transition-colors"
                        >
                          <PlayCircle className="w-4 h-4 text-brand-green" /> Preview Lessons
                        </button>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
