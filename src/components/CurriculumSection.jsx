import React, { useState } from 'react';
import { ChevronDown, ChevronUp, CheckCircle2, Layers, Sparkles, Trophy } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function CurriculumSection() {
  const [expandedModule, setExpandedModule] = useState(null);
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
      title: 'MARKET BASICS',
      summary: 'Foundational market dynamics, participants, and structure.',
      topics: [
        'How Financial Markets Function',
        'Market Participants: Retail vs Institutions',
        'Continuous Double Auction Mechanics',
        'Price Discovery & Spread Dynamics'
      ]
    },
    {
      num: '02',
      title: 'AUCTION MARKET THEORY',
      summary: 'How markets facilitate trade, establish balance, and discover fair value.',
      topics: [
        'Principles of Auction Market Theory (AMT)',
        'Balanced vs Imbalanced Market Conditions',
        'Initiative vs Responsive Activity',
        'Acceptance vs Rejection of Value'
      ]
    },
    {
      num: '03',
      title: 'BID / ASK + MARKET & LIMIT ORDERS',
      summary: 'Order matching mechanics and passive vs aggressive participants.',
      topics: [
        'Passive Limit Orders vs Aggressive Market Orders',
        'Bid / Ask Spread & Liquidity Mechanics',
        'Order Matching Engine & Slippage',
        'Cross-Spread Executions & Order Flow Interaction'
      ]
    },
    {
      num: '04',
      title: 'VOLUME & DELTA',
      summary: 'Understanding volume distribution and buyer vs seller aggression.',
      topics: [
        'Real-time Volume vs Historical Volume',
        'Delta: Net Aggressive Buying vs Selling',
        'Min Delta, Max Delta & Finish Delta',
        'Delta Divergence Patterns at Key Inflection Levels'
      ]
    },
    {
      num: '05',
      title: 'FOOTPRINT CHART',
      summary: 'Deconstruct executed trades inside individual candles.',
      topics: [
        'Bid x Ask Diagonal Matrix Reading',
        'Stacked Imbalances: Institutional Buying & Selling Walls',
        'Absorption & Exhaustion Identification',
        'Trapped Traders & High Probability Squeezes'
      ]
    },
    {
      num: '06',
      title: 'VOLUME PROFILE',
      summary: 'Value discovery, high volume nodes, and structural reference levels.',
      topics: [
        'Point of Control (POC) & Developing POC',
        'Value Area High (VAH) & Value Area Low (VAL)',
        'High Volume Nodes (HVN) as Fair Value Support/Resistance',
        'Low Volume Nodes (LVN) as Fast Rejection Zones'
      ]
    },
    {
      num: '07',
      title: 'LIQUIDITY & MARKET DEPTH',
      summary: 'Where big resting money sits and how smart money hunts liquidity.',
      topics: [
        'Passive Resting Liquidity vs Sweeps',
        'Liquidity Pools & Stop Hunt Behavior',
        'Order Book Depth & Thick vs Thin Books',
        'Institutional Liquidity Extraction Tactics'
      ]
    },
    {
      num: '08',
      title: 'DOM',
      summary: 'Mastering the real-time order ladder for ultra-precise execution.',
      topics: [
        'Level 2 DOM Ladder Reading',
        'Live Resting Orders vs Executed Prints',
        'Spoofing, Pulling & Flashing Liquidity',
        'Tape Reading & Microstructure Cues'
      ]
    },
    {
      num: '09',
      title: 'HEATMAP / LIQUIDITY HEATMAP',
      summary: 'Visualizing resting orders and historical liquidity shifts in real-time.',
      topics: [
        'Bookmap / Liquidity Heatmap Setup & Configuration',
        'Tracking Large Limit Orders Over Time',
        'Iceberg Orders & Hidden Resting Size',
        'Absorption Zones Visible on Heatmap'
      ]
    },
    {
      num: '10',
      title: 'CUMULATIVE DELTA',
      summary: 'Tracking net institutional momentum and persistent pressure across sessions.',
      topics: [
        'Cumulative Volume Delta (CVD) Calculations',
        'CVD Trend Confirmation & Breakdown',
        'Absorption Divergences: Price Flat While CVD Surges',
        'Session CVD vs Multi-Day CVD Trends'
      ]
    },
    {
      num: '11',
      title: 'ADVANCED ORDER FLOW CONCEPTS',
      summary: 'Elite institutional nuances and smart money traps.',
      topics: [
        'Iceberg Order Detection & Tape Analysis',
        'Stop Runs & Stop Cascades',
        'Passive Wall Defense & Fake Breakouts (SFP)',
        'Orderflow Execution Filters & Entry Confirmations'
      ]
    },
    {
      num: '12',
      title: 'MARKET CONTEXT',
      summary: 'Synthesizing higher timeframe structure with micro execution.',
      topics: [
        'HTF Context vs LTF Orderflow Timing',
        'Day Types: Trend Day, Double Distribution, Normal Variation',
        'Opening Auction Types (Open Drive, Open Test-Drive, Open Auction)',
        'Multi-Session Context & Narrative Construction'
      ]
    },
    {
      num: '13',
      title: 'THE 5X MARKET SYSTEM',
      tagline: '5 POWERFUL TRADING STRATEGIES • SIMPLE • SHARP • REPEATABLE',
      isSpecial: true,
      summary: 'Complete proprietary trading playbook with 5 battle-tested orderflow strategies.',
      topics: [
        'Strategy 1: Trapped Traders Momentum Squeeze',
        'Strategy 2: High-Volume POC Rejection Reversal',
        'Strategy 3: Stacked Imbalance Breakout & Retest',
        'Strategy 4: Passive Absorption Liquidity Sweep',
        'Strategy 5: Delta Divergence Exhaustion Scalp'
      ]
    },
    {
      num: '14',
      title: 'PROP FIRM → GET FUNDED ROADMAP',
      tagline: 'LEARN • PRACTICE • PASS • GET FUNDED • SCALE',
      isSpecial: true,
      summary: 'Step-by-step roadmap to pass prop firm evaluations and manage funded capital.',
      topics: [
        'Prop Firm Evaluation Rules & Capital Preservation Protocols',
        'Daily Drawdown & Max Trailing Drawdown Management',
        'Position Sizing & Asymmetric Risk-to-Reward Execution',
        'Passing Challenges Safely Using Orderflow Edge',
        'Scaling Plan: From Evaluation to 6-Figure Payouts'
      ]
    }
  ];

  return (
    <section id="curriculum" className="py-16 sm:py-20 border-t border-brand-border/60 relative bg-[#060908]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-xs font-mono text-gray-400 mb-5">
          <a href="#home" className="hover:text-brand-green transition-colors">Home</a>
          <span>&gt;</span>
          <span className="text-brand-green font-semibold">Course</span>
        </div>

        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-green/10 border border-brand-green/30 text-brand-green text-[11px] font-mono font-bold uppercase mb-3">
              <Layers className="w-3.5 h-3.5" /> 14-STAGE LEARNING ROADMAP
            </div>
            <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight mb-2">
              COMPLETE <span className="text-brand-green">ORDER FLOW</span> COURSE
            </h2>
            <p className="text-sm sm:text-base text-gray-300 max-w-xl">
              A comprehensive step-by-step path from market basics to funded execution.
            </p>
          </div>

          <div className="mt-4 md:mt-0">
            <button
              onClick={toggleAll}
              className="text-xs font-mono text-gray-300 hover:text-brand-green border border-brand-border px-3.5 py-2 rounded-xl bg-[#0b120f] transition-colors font-bold"
            >
              {allExpanded ? 'Collapse All' : 'Expand All Topics'}
            </button>
          </div>
        </div>

        {/* 14 Step Roadmap Flow */}
        <div className="space-y-0">
          {modules.map((mod, index) => {
            const isExpanded = allExpanded || expandedModule === index;

            return (
              <React.Fragment key={mod.num}>
                {/* Topic Card */}
                <div
                  className={`rounded-2xl border transition-all duration-200 overflow-hidden ${
                    mod.isSpecial
                      ? 'bg-gradient-to-r from-[#0a1711] via-[#09110e] to-[#070d0a] border-brand-green/50 shadow-[0_0_20px_rgba(0,230,118,0.15)]'
                      : isExpanded 
                        ? 'bg-[#0a110d] border-brand-green/40 shadow-sm' 
                        : 'bg-[#090e0b] border-brand-border hover:border-brand-green/30 hover:bg-[#0c1410]'
                  }`}
                >
                  {/* Card Header */}
                  <div
                    onClick={() => toggleModule(index)}
                    className="p-4 sm:p-5 flex items-center justify-between cursor-pointer select-none group"
                  >
                    <div className="flex items-center gap-3.5 sm:gap-5 min-w-0">
                      <div className={`w-10 h-10 sm:w-11 sm:h-11 rounded-full flex items-center justify-center shrink-0 font-mono font-black text-sm sm:text-base shadow-sm ${
                        mod.isSpecial 
                          ? 'bg-brand-green text-black' 
                          : 'bg-brand-green/10 border-2 border-brand-green text-brand-green group-hover:scale-105 transition-transform'
                      }`}>
                        {mod.isSpecial ? (
                          index === 12 ? <Sparkles className="w-5 h-5 text-black" /> : <Trophy className="w-5 h-5 text-black" />
                        ) : (
                          mod.num
                        )}
                      </div>

                      <div className="min-w-0">
                        <div className="flex items-center gap-2 flex-wrap">
                          <span className="text-xs font-mono text-brand-green font-bold">
                            STAGE {mod.num}
                          </span>
                          {mod.isSpecial && (
                            <span className="px-2 py-0.5 rounded bg-brand-green/20 text-brand-green text-[10px] font-mono font-bold uppercase tracking-wider border border-brand-green/30">
                              FEATURED SYSTEM
                            </span>
                          )}
                        </div>

                        <h3 className="text-base sm:text-lg font-black text-white group-hover:text-brand-green transition-colors tracking-wide mt-0.5">
                          {mod.title}
                        </h3>

                        {/* Special Subtitles for 13 & 14 */}
                        {mod.tagline && (
                          <div className="text-[11px] sm:text-xs font-mono font-bold text-brand-green mt-1 tracking-wider">
                            {mod.tagline}
                          </div>
                        )}
                      </div>
                    </div>

                    <div className="flex items-center gap-3 shrink-0 ml-3">
                      <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center text-gray-400 group-hover:text-brand-green group-hover:bg-brand-green/10 transition-colors">
                        {isExpanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                      </div>
                    </div>
                  </div>

                  {/* Collapsible Details Drawer */}
                  <AnimatePresence>
                    {isExpanded && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.2 }}
                        className="border-t border-brand-border/60 px-4 sm:px-6 py-4 bg-[#060a08]/95"
                      >
                        <p className="text-xs sm:text-sm text-gray-300 mb-3">
                          {mod.summary}
                        </p>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                          {mod.topics.map((topic, tIdx) => (
                            <div
                              key={tIdx}
                              className="flex items-center gap-2 p-2 rounded-lg bg-[#09100c] border border-brand-border/50 text-xs text-gray-200"
                            >
                              <CheckCircle2 className="w-3.5 h-3.5 text-brand-green shrink-0" />
                              <span className="truncate">{topic}</span>
                            </div>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                {/* Downward Arrow Connector between steps */}
                {index < modules.length - 1 && (
                  <div className="flex justify-center my-1.5 py-0.5 select-none" aria-hidden="true">
                    <div className="flex flex-col items-center">
                      <div className="w-0.5 h-2 bg-brand-green/30"></div>
                      <div className="w-6 h-6 rounded-full bg-[#09110d] border border-brand-green/40 flex items-center justify-center text-brand-green text-xs font-black shadow-[0_0_12px_rgba(0,230,118,0.25)]">
                        ↓
                      </div>
                      <div className="w-0.5 h-2 bg-brand-green/30"></div>
                    </div>
                  </div>
                )}
              </React.Fragment>
            );
          })}
        </div>

      </div>
    </section>
  );
}
