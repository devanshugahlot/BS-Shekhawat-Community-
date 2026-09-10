import React, { useState } from 'react';
import { 
  Play, 
  ArrowRight, 
  BarChart3, 
  Layers, 
  Activity, 
  Flame, 
  Target, 
  Brain, 
  Sliders, 
  ShieldCheck, 
  TrendingUp, 
  Cpu, 
  Tv, 
  Users 
} from 'lucide-react';
import { motion } from 'framer-motion';

export default function HeroSection({ onWatchVideo, onEnroll }) {
  const [activeSlide, setActiveSlide] = useState(0);

  const tradingTerms = [
    { label: 'PRICE', icon: Activity, desc: 'Auction Value Discovery' },
    { label: 'VOLUME', icon: BarChart3, desc: 'Institutional Participation' },
    { label: 'DELTA', icon: TrendingUp, desc: 'Net Aggressive Pressure' },
    { label: 'FOOTPRINT', icon: Layers, desc: 'Bid x Ask Inside Candles' },
    { label: 'DOM', icon: Sliders, desc: 'Real-Time Depth of Market' },
    { label: 'LIQUIDITY', icon: Flame, desc: 'Passive Resting Limits' },
  ];

  const whatYouLearn = [
    {
      title: 'Auction Theory',
      desc: 'Understand how financial markets truly auction and discover fair price value.',
      icon: Cpu,
    },
    {
      title: 'Volume',
      desc: 'Read and analyse volume properly with high & low volume nodes (HVN/LVN).',
      icon: BarChart3,
    },
    {
      title: 'Footprint',
      desc: 'Master Footprint charts, stacked imbalances, absorption and trapped traders.',
      icon: Layers,
    },
    {
      title: 'Orderflow',
      desc: 'Identify institutional buying & selling aggression directly at decisive turning points.',
      icon: Activity,
    },
    {
      title: 'Market Profile',
      desc: 'Deconstruct Value Area, Point of Control (POC), Initial Balance & VAH/VAL.',
      icon: Sliders,
    },
    {
      title: 'Execution',
      desc: 'Precision entries, exact stop-loss placement, and asymmetric risk-reward setups.',
      icon: Target,
    },
    {
      title: 'Advanced Orderflow',
      desc: 'Passive absorption walls, liquidity pools, iceberg orders, and fake breakouts.',
      icon: ShieldCheck,
    },
    {
      title: 'Trading Psychology',
      desc: 'Eliminate FOMO, conquer revenge trading, and forge disciplined execution.',
      icon: Brain,
    },
  ];

  const floatingBadges = [
    { title: 'Live Interactive Classes', icon: Tv },
    { title: 'Practical Approach', icon: Target },
    { title: 'Structured Curriculum', icon: Layers },
    { title: 'Real Market Examples', icon: Activity },
    { title: 'Community Access', icon: Users },
  ];

  const stats = [
    { value: '10K+', label: 'Students Learning' },
    { value: '500+', label: 'Hours of Live Classes' },
    { value: '4.9/5', label: 'Student Rating' },
    { value: '90%', label: 'Practical Approach' },
  ];

  return (
    <section id="home" className="relative pb-12 sm:pb-16 overflow-hidden">
      
      {/* 1. CINEMATIC HERO BANNER (Desktop Background + Mobile Smart Portrait) */}
      <div className="relative w-full min-h-[520px] sm:min-h-[600px] lg:min-h-[680px] flex items-center overflow-hidden border-b border-brand-border/60">
        
        {/* Desktop Full Background Layer */}
        <div 
          className="hidden lg:block absolute inset-0 bg-cover bg-no-repeat bg-[center_right_15%] xl:bg-center filter brightness-[0.92] contrast-[1.05]"
          style={{ backgroundImage: "url('/assets/hero-bg.jpg')" }}
        />

        {/* Shading Gradients for Desktop */}
        <div className="hidden lg:block absolute inset-0 bg-gradient-to-r from-[#060908] via-[#060908]/85 to-transparent pointer-events-none" />
        <div className="hidden lg:block absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-[#060908] to-transparent pointer-events-none" />
        <div className="hidden lg:block absolute inset-x-0 top-0 h-20 bg-gradient-to-b from-[#060908]/90 to-transparent pointer-events-none" />

        {/* Desktop Quote */}
        <div className="hidden lg:block absolute top-10 right-10 xl:right-16 text-right pointer-events-none z-20">
          <span className="font-script text-3xl xl:text-4xl text-brand-green font-bold tracking-wide block leading-tight drop-shadow-[0_4px_16px_rgba(0,0,0,0.95)]">
            "Trade With Logic <br /> Not Emotions"
          </span>
          <span className="text-xs uppercase font-mono tracking-widest text-gray-200 font-bold block mt-1 drop-shadow">
            — BS SHEKHAWAT
          </span>
        </div>

        {/* Content Container */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-8 sm:py-12 lg:py-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-center">
            
            {/* Left Column: Headlines, CTA, Badges */}
            <motion.div 
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="lg:col-span-7 flex flex-col items-start"
            >
              {/* Tagline Pill */}
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0c1410] border border-brand-green/40 text-brand-green text-[11px] sm:text-xs font-semibold tracking-wider uppercase mb-3 shadow-sm">
                <span className="w-1.5 h-1.5 rounded-full bg-brand-green animate-ping" />
                LIVE LEARNING, REAL MARKETS, REAL RESULTS.
              </div>

              {/* Main Headline */}
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-[1.12] mb-2 sm:mb-3">
                Master <span className="text-brand-green drop-shadow-[0_0_20px_rgba(0,230,118,0.5)]">Orderflow</span> Trading
              </h1>

              {/* Sub-headline */}
              <h2 className="text-base sm:text-xl lg:text-2xl font-bold text-gray-200 mb-2 sm:mb-3 tracking-tight">
                A Complete Learning Journey From Basics to Advanced
              </h2>

              {/* Mobile Script Quote */}
              <div className="block lg:hidden my-2 p-2.5 rounded-xl bg-brand-green/10 border border-brand-green/20 w-full">
                <span className="font-script text-xl sm:text-2xl text-brand-green font-bold block">
                  "Trade With Logic Not Emotions"
                </span>
                <span className="text-[10px] font-mono uppercase tracking-wider text-gray-400 font-semibold">
                  — BS SHEKHAWAT
                </span>
              </div>

              {/* Description */}
              <p className="text-sm sm:text-base text-gray-300 max-w-xl leading-relaxed mb-5">
                Learn Orderflow the right way with live classes, practical examples and real market insights. Trade with logic, not emotions.
              </p>

              {/* Mobile Mentor Image Card (Ensures mentor is 100% visible on small screens!) */}
              <div className="block lg:hidden w-full mb-5">
                <div className="relative w-full aspect-[16/10] rounded-2xl overflow-hidden border border-brand-green/30 bg-black shadow-lg">
                  <img 
                    src="/assets/mentor.jpg" 
                    alt="BS Shekhawat Orderflow Mentor" 
                    className="w-full h-full object-cover object-[center_20%] filter brightness-95 contrast-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-transparent to-black/20" />
                  <div className="absolute bottom-2.5 left-2.5 right-2.5 flex items-center justify-between p-2 rounded-lg bg-black/80 backdrop-blur-md border border-brand-border/60 text-xs">
                    <span className="font-mono font-bold text-white uppercase text-[11px] flex items-center gap-1.5">
                      <span className="w-2 h-2 rounded-full bg-brand-green animate-pulse"></span>
                      BS SHEKHAWAT
                    </span>
                    <span className="text-[10px] font-mono text-brand-green font-semibold">
                      Live Orderflow Desk
                    </span>
                  </div>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 w-full sm:w-auto mb-6">
                <button
                  onClick={onEnroll}
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-brand-green active:bg-brand-neon text-black font-extrabold text-sm uppercase tracking-wider transition-all duration-200 shadow-[0_0_20px_rgba(0,230,118,0.4)]"
                >
                  Join Live Classes
                  <ArrowRight className="w-4 h-4" />
                </button>

                <button
                  onClick={() => onWatchVideo('intro')}
                  className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-full bg-[#0d1410] active:bg-[#131f18] text-white font-semibold text-sm border border-brand-border"
                >
                  <Play className="w-3.5 h-3.5 fill-brand-green text-brand-green" />
                  Watch Introduction
                </button>
              </div>

              {/* Mobile Swipeable Feature Chips Slider */}
              <div className="w-full pt-3 border-t border-brand-border/60">
                <div className="text-[10px] font-mono uppercase tracking-wider text-gray-400 mb-1.5 block sm:hidden">
                  Swipe Features →
                </div>
                <div className="flex overflow-x-auto no-scrollbar gap-2 py-1 w-full">
                  {floatingBadges.map((badge, idx) => {
                    const Icon = badge.icon;
                    return (
                      <div 
                        key={idx}
                        className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#0b120e] border border-brand-border text-xs font-medium text-gray-200 whitespace-nowrap shrink-0"
                      >
                        <Icon className="w-3.5 h-3.5 text-brand-green" />
                        <span>{badge.title}</span>
                      </div>
                    );
                  })}
                </div>
              </div>
            </motion.div>

            {/* Desktop Right Side Spacer (Mentor visible in background photo) */}
            <div className="lg:col-span-5 hidden lg:flex flex-col items-end justify-end h-full min-h-[320px] pointer-events-none">
              <div className="p-3 px-4 rounded-xl bg-black/70 border border-brand-green/30 backdrop-blur-md flex items-center gap-2 shadow-xl">
                <span className="w-2.5 h-2.5 rounded-full bg-brand-green animate-pulse"></span>
                <span className="text-xs font-mono font-bold text-white tracking-wider">
                  BS SHEKHAWAT • LIVE ORDERFLOW DESK
                </span>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* 2. SECTION: STOP GUESSING. START READING THE MARKET */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mt-10 sm:mt-16 pt-8 border-t border-brand-border/60">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 items-center">
            
            {/* Left Content */}
            <div className="lg:col-span-7">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-white tracking-tight leading-snug mb-3">
                Stop Guessing. <br />
                <span className="text-brand-green">Start Reading The</span> Market.
              </h2>
              <div className="space-y-3 text-sm sm:text-base text-gray-300 leading-relaxed max-w-xl">
                <p>
                  Most traders look at candles and indicators. Very few understand what is actually happening behind the price. Orderflow helps you understand the interaction between buyers and sellers — where aggression is coming from, where liquidity is sitting, where traders are trapped, and how the auction is developing.
                </p>
                <p className="text-gray-400">
                  This course is designed to take you from the fundamentals of market action to advanced Orderflow analysis through structured lessons, practical examples and live market sessions.
                </p>
              </div>

              <div className="mt-4">
                <a
                  href="#course"
                  className="inline-flex items-center gap-2 text-brand-green hover:text-brand-neon font-bold text-sm tracking-wide group"
                >
                  Learn More 
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </div>

            {/* Right Content: Vertical Trading Terms List (Compact 2-col on mobile) */}
            <div className="lg:col-span-5">
              <div className="grid grid-cols-2 gap-2 sm:gap-3">
                {tradingTerms.map((term, idx) => {
                  const Icon = term.icon;
                  return (
                    <div
                      key={idx}
                      className="flex items-center gap-2.5 p-2.5 sm:p-3 rounded-xl bg-[#0a110e] border border-brand-border/80 hover:border-brand-green/40 transition-all"
                    >
                      <div className="w-8 h-8 rounded-lg bg-brand-green/10 border border-brand-green/30 flex items-center justify-center shrink-0">
                        <Icon className="w-4 h-4 text-brand-green" />
                      </div>
                      <div className="min-w-0">
                        <div className="text-xs font-black uppercase tracking-wider text-white font-mono">
                          {term.label}
                        </div>
                        <div className="text-[10px] text-gray-400 truncate">
                          {term.desc}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>

        {/* 3. SECTION: WHAT YOU'LL LEARN (Swipeable Carousel on Mobile) */}
        <div className="mt-12 sm:mt-16">
          <div className="flex items-end justify-between mb-4 sm:mb-8">
            <div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-white tracking-tight mb-1">
                What You'll Learn
              </h2>
              <p className="text-xs sm:text-sm text-gray-400">
                Complete skill set to become a confident trader
              </p>
            </div>
            <div className="block sm:hidden text-[10px] font-mono text-brand-green">
              Swipe cards →
            </div>
          </div>

          {/* Desktop Grid / Mobile Horizontal Swipe Slider */}
          <div className="flex sm:grid sm:grid-cols-2 lg:grid-cols-4 gap-3.5 sm:gap-4 overflow-x-auto sm:overflow-visible no-scrollbar snap-x snap-mandatory pb-2">
            {whatYouLearn.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div
                  key={idx}
                  className="min-w-[78vw] sm:min-w-0 snap-center p-4 sm:p-5 rounded-2xl bg-[#0a110e] border border-brand-border/70 hover:border-brand-green/40 transition-all flex flex-col justify-between shrink-0"
                >
                  <div>
                    <div className="w-9 h-9 rounded-xl bg-brand-green/10 border border-brand-green/30 flex items-center justify-center mb-3">
                      <Icon className="w-4 h-4 text-brand-green" />
                    </div>
                    <h3 className="text-sm sm:text-base font-bold text-white mb-1">
                      {item.title}
                    </h3>
                    <p className="text-xs text-gray-400 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                  <div className="mt-3 pt-2.5 border-t border-brand-border/40 flex items-center justify-between text-[11px] font-mono text-gray-500">
                    <span>Module 0{idx + 1}</span>
                    <span className="text-brand-green font-semibold">Verified</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* 4. VIDEO QUOTE BANNER: "Better Traders, Better Life" */}
        <div className="mt-12 sm:mt-16">
          <div 
            onClick={() => onWatchVideo('trailer')}
            className="relative rounded-2xl overflow-hidden border border-brand-green/40 bg-[#070b09] cursor-pointer group shadow-lg"
          >
            <div className="h-44 sm:h-64 md:h-80 relative flex items-center justify-center">
              <img 
                src="/assets/mentor.jpg" 
                alt="Mentor video preview" 
                className="absolute inset-0 w-full h-full object-cover object-[center_35%] filter brightness-[0.45] contrast-110"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/40 to-black/85" />

              <div className="relative z-10 text-center px-3 flex flex-col items-center">
                <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-brand-green flex items-center justify-center shadow-[0_0_20px_rgba(0,230,118,0.7)] mb-3">
                  <Play className="w-5 h-5 sm:w-7 sm:h-7 fill-black text-black ml-0.5" />
                </div>
                <h3 className="font-script text-2xl sm:text-4xl text-white font-bold tracking-wide">
                  "Better Traders, Better Life"
                </h3>
                <p className="text-xs sm:text-sm font-mono uppercase tracking-widest text-brand-green mt-1 font-bold">
                  — BS SHEKHAWAT
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* 5. 4 STATS ROW BAR (Clean 2x2 grid on mobile) */}
        <div className="mt-8 sm:mt-10 grid grid-cols-2 md:grid-cols-4 gap-2.5 sm:gap-3">
          {stats.map((stat, idx) => (
            <div
              key={idx}
              className="p-3.5 sm:p-4 rounded-xl bg-[#090f0c] border border-brand-border text-center"
            >
              <div className="text-xl sm:text-3xl font-black text-white font-mono tracking-tight text-brand-green">
                {stat.value}
              </div>
              <div className="text-[11px] sm:text-xs text-gray-300 mt-0.5 font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
