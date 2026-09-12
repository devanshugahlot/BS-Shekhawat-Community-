import React from 'react';
import { 
  ArrowRight, 
  Check, 
  Tv, 
  Film, 
  FileText, 
  Activity, 
  HelpCircle, 
  Users, 
  Award, 
  BookOpen, 
  Clock
} from 'lucide-react';

export default function CourseSection({ onWatchVideo, onEnroll }) {
  const courseSpecs = [
    { label: '50+', sub: 'Modules', icon: BookOpen },
    { label: '100+', sub: 'Lessons', icon: FileText },
    { label: 'Live', sub: 'Classes', icon: Tv },
    { label: 'Lifetime', sub: 'Access', icon: Clock },
    { label: 'Community', sub: 'Support', icon: Users },
    { label: 'Certificate', sub: 'Awarded', icon: Award },
  ];

  const whoIsThisFor = [
    'Beginners who want to learn the right way',
    'Traders who are struggling with consistency',
    'Traders who want to understand real market behaviour',
    'Traders who want to move beyond indicators',
    'Anyone serious about mastering Orderflow',
  ];

  const courseFeatures = [
    { title: 'Live Interactive Classes', icon: Tv, desc: 'Real market session breakdowns with mentor' },
    { title: 'Recorded Sessions', icon: Film, desc: 'Rewatch any live session anytime in high definition' },
    { title: 'Study Material & Notes', icon: FileText, desc: 'Institutional orderflow cheat sheets & playbooks' },
    { title: 'Real Market Examples', icon: Activity, desc: 'Real Nifty, BankNifty and stock case studies' },
    { title: 'Doubt Support', icon: HelpCircle, desc: 'Direct access to resolve trading questions promptly' },
    { title: 'Community Access', icon: Users, desc: 'Private Discord / Telegram network of pro traders' },
  ];

  return (
    <section id="course" className="py-12 sm:py-16 border-t border-brand-border/60 relative bg-[#060908] radial-glow-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-xs font-mono text-gray-400 mb-4">
          <a href="#home" className="hover:text-brand-green transition-colors">Home</a>
          <span>&gt;</span>
          <span className="text-brand-green font-semibold">Course</span>
        </div>

        {/* Section Header Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 items-center mb-8 sm:mb-12">
          {/* Left info */}
          <div className="lg:col-span-6">
            <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-tight mb-2">
              Master <span className="text-brand-green">Orderflow</span> Trading
            </h2>
            <h3 className="text-base sm:text-xl font-bold text-gray-200 mb-3">
              Complete Structured Program
            </h3>
            <p className="text-sm sm:text-base text-gray-300 leading-relaxed mb-5">
              Learn Orderflow from the ground up with live classes, practical examples, recorded sessions and continuous support. This course is designed for traders who are serious about understanding the market and building a long-term edge.
            </p>

            <div className="flex flex-wrap items-center gap-3">
              <button
                onClick={onEnroll}
                className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-brand-green text-black font-extrabold text-xs sm:text-sm uppercase tracking-wider shadow-[0_0_20px_rgba(0,230,118,0.35)]"
              >
                Join The Course
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Right: Modern Laptop Screen (Scaled for mobile) */}
          <div className="lg:col-span-6 flex justify-center">
            <div className="relative w-full max-w-lg">
              <div className="rounded-2xl border border-brand-green/30 bg-[#0c120f] p-2.5 shadow-lg">
                <div className="flex items-center justify-between px-2.5 py-1 bg-[#080d0a] rounded-t-lg border-b border-brand-border/60 text-[10px] font-mono text-gray-400">
                  <div className="flex items-center gap-1">
                    <span className="w-2 h-2 rounded-full bg-red-500"></span>
                    <span className="w-2 h-2 rounded-full bg-yellow-500"></span>
                    <span className="w-2 h-2 rounded-full bg-green-500"></span>
                  </div>
                  <span>Orderflow Terminal Pro</span>
                  <div></div>
                </div>

                <div className="bg-[#050806] rounded-b-lg p-4 aspect-[16/10] relative overflow-hidden flex flex-col justify-between">
                  <div className="relative z-10">
                    <div className="text-[10px] font-mono font-bold tracking-widest text-brand-green uppercase flex items-center gap-1">
                      <Activity className="w-3 h-3" /> INSTITUTIONAL EXECUTION
                    </div>
                    <div className="text-lg sm:text-2xl font-black text-white tracking-wider mt-1 font-mono leading-tight">
                      UNDERSTAND • ANALYSE <br />
                      EXECUTE • <span className="text-brand-green">GROW</span>
                    </div>
                  </div>

                  <div className="relative z-10 w-full flex items-end justify-end h-24 gap-1.5 pr-1">
                    {[
                      { h: '45px', green: true, delta: '+420' },
                      { h: '70px', green: true, delta: '+980' },
                      { h: '38px', green: false, delta: '-310' },
                      { h: '60px', green: true, delta: '+650' },
                      { h: '80px', green: true, delta: '+1.4K' },
                      { h: '95px', green: true, delta: '+2.1K' },
                    ].map((bar, i) => (
                      <div key={i} className="flex flex-col items-center">
                        <span className="text-[8px] font-mono text-brand-green font-bold mb-0.5">{bar.delta}</span>
                        <div 
                          className={`w-5 sm:w-6 rounded-sm ${bar.green ? 'bg-brand-green' : 'bg-red-500'} relative flex items-center justify-center`}
                          style={{ height: bar.h }}
                        >
                          <span className="text-[7px] font-mono text-black font-extrabold rotate-90">BID</span>
                        </div>
                        <div className="w-0.5 h-1.5 bg-brand-green/60"></div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 6 Metric Badges Row (3x2 grid on mobile) */}
        <div className="grid grid-cols-3 lg:grid-cols-6 gap-2 sm:gap-3 mb-8 sm:mb-12">
          {courseSpecs.map((spec, idx) => {
            const Icon = spec.icon;
            return (
              <div 
                key={idx}
                className="p-2.5 sm:p-3.5 rounded-xl bg-[#0b110e] border border-brand-border text-center"
              >
                <div className="w-7 h-7 mx-auto rounded-lg bg-brand-green/10 flex items-center justify-center mb-1.5">
                  <Icon className="w-3.5 h-3.5 text-brand-green" />
                </div>
                <div className="text-sm sm:text-base font-black text-white font-mono">{spec.label}</div>
                <div className="text-[10px] sm:text-xs text-gray-400 mt-0.5">{spec.sub}</div>
              </div>
            );
          })}
        </div>

        {/* Who Is This Course For? */}
        <div className="p-5 sm:p-7 rounded-2xl bg-[#0a100d] border border-brand-border mb-8 sm:mb-12">
          <h3 className="text-lg sm:text-xl font-bold text-white mb-4">
            Who Is This Course For?
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {whoIsThisFor.map((item, idx) => (
              <div key={idx} className="flex items-start gap-2.5">
                <div className="w-4 h-4 rounded-full bg-brand-green/15 border border-brand-green flex items-center justify-center shrink-0 mt-0.5">
                  <Check className="w-2.5 h-2.5 text-brand-green stroke-[3]" />
                </div>
                <span className="text-xs sm:text-sm text-gray-200">{item}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Course Features: Horizontal swipe slider on mobile! */}
        <div className="mb-8 sm:mb-12">
          <div className="flex items-center justify-between mb-3">
            <h3 className="text-lg sm:text-2xl font-black text-white tracking-tight">
              Course Features
            </h3>
          </div>

          <div className="flex sm:grid sm:grid-cols-2 lg:grid-cols-3 gap-3 overflow-x-auto sm:overflow-visible no-scrollbar snap-x snap-mandatory pb-2">
            {courseFeatures.map((feat, idx) => {
              const Icon = feat.icon;
              return (
                <div
                  key={idx}
                  className="min-w-[75vw] sm:min-w-0 snap-center p-4 rounded-xl bg-[#0a100d] border border-brand-border hover:border-brand-green/40 transition-all flex items-start gap-3 shrink-0"
                >
                  <div className="w-9 h-9 rounded-lg bg-brand-green/10 border border-brand-green/30 flex items-center justify-center shrink-0">
                    <Icon className="w-4 h-4 text-brand-green" />
                  </div>
                  <div>
                    <h4 className="text-xs sm:text-sm font-bold text-white mb-0.5">
                      {feat.title}
                    </h4>
                    <p className="text-[11px] text-gray-400 leading-relaxed">
                      {feat.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
