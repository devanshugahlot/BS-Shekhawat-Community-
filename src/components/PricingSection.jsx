import React from 'react';
import { 
  Check, 
  ArrowRight, 
  Users, 
  Zap, 
  Headphones, 
  CheckCircle2
} from 'lucide-react';

export default function PricingSection({ onEnroll }) {
  const features = [
    'Complete Orderflow Curriculum (All 8 Modules)',
    'Live Interactive Classes with Real-Time Market Analysis',
    'Recorded Video Sessions (Lifetime Archival Access)',
    'Institutional Study Material, Cheat Sheets & Notes',
    'Private VIP Discord & Telegram Community Access',
    'Live Q&A & Personalized Doubt Support',
    'Lifetime Mentorship Access & Algorithm Updates',
    'Future Course & Footprint Strategy Upgrades',
    'Certificate of Orderflow Proficiency',
  ];

  const trustBadges = [
    {
      title: 'Direct Mentorship',
      sub: 'Interactive Live Batches',
      icon: Users,
    },
    {
      title: 'Instant Access',
      sub: 'Curriculum & VIP Group',
      icon: Zap,
    },
    {
      title: 'Dedicated Support',
      sub: "We're Here to Help You Grow",
      icon: Headphones,
    },
  ];

  return (
    <section id="pricing" className="py-16 sm:py-20 border-t border-brand-border/60 relative bg-[#060908] radial-glow-center overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-xs font-mono text-gray-400 mb-5">
          <a href="#home" className="hover:text-brand-green transition-colors">Home</a>
          <span>&gt;</span>
          <span className="text-brand-green font-semibold">Pricing & Enrollment</span>
        </div>

        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight mb-2">
            Start Your <span className="text-brand-green">Orderflow</span> Journey
          </h2>
          <p className="text-sm sm:text-base text-gray-300">
            Choose the plan that suits you and get lifetime access to structured learning, live classes and a supportive community.
          </p>
        </div>

        {/* Highlighted Masterclass Card */}
        <div className="max-w-xl mx-auto mb-12">
          <div className="relative rounded-3xl p-1 bg-gradient-to-b from-brand-green via-brand-green/30 to-brand-border shadow-[0_0_40px_rgba(0,230,118,0.2)]">
            
            {/* Top Popular Pill */}
            <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-brand-green text-black font-mono font-black text-[11px] uppercase tracking-wider shadow-[0_0_15px_rgba(0,230,118,0.6)]">
              RESERVATIONS OPEN
            </div>

            <div className="rounded-[22px] bg-[#09100c] p-6 sm:p-9 flex flex-col justify-between">
              <div>
                {/* Plan Header */}
                <div className="text-center pb-6 border-b border-brand-border/60">
                  <h3 className="text-2xl sm:text-3xl font-black text-white tracking-tight">
                    Orderflow Masterclass
                  </h3>
                  <p className="text-xs sm:text-sm text-brand-green font-semibold mt-1 font-mono">
                    Complete Structured Learning Program
                  </p>

                  {/* Slot Booking Tag */}
                  <div className="mt-5 flex flex-col items-center justify-center gap-1">
                    <span className="text-2xl sm:text-3xl font-black text-brand-green font-mono tracking-wide uppercase">
                      BOOK YOUR SLOT
                    </span>
                    <span className="text-xs text-gray-300 font-mono">
                      Exclusive Cohort Access & Mentorship
                    </span>
                  </div>
                  <div className="text-[11px] text-gray-400 mt-2 font-mono flex items-center justify-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-brand-green animate-pulse" />
                    <span>Live Batch Enrollment Open • Limited Seats</span>
                  </div>
                </div>

                {/* Features Checklist */}
                <div className="py-6 space-y-3">
                  {features.map((item, idx) => (
                    <div key={idx} className="flex items-center gap-3">
                      <div className="w-5 h-5 rounded-full bg-brand-green/15 border border-brand-green flex items-center justify-center shrink-0">
                        <Check className="w-3 h-3 text-brand-green stroke-[3]" />
                      </div>
                      <span className="text-xs sm:text-sm text-gray-200 font-medium">
                        {item}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Button */}
              <div className="pt-2">
                <button
                  onClick={onEnroll}
                  className="w-full py-3.5 sm:py-4 rounded-xl bg-brand-green hover:bg-brand-neon text-black font-extrabold text-sm sm:text-base uppercase tracking-wider flex items-center justify-center gap-2 shadow-[0_0_25px_rgba(0,230,118,0.45)] hover:shadow-[0_0_35px_rgba(0,230,118,0.65)] transition-all transform hover:scale-[1.01] active:scale-95"
                >
                  Book Your Slot — Fill Registration Form
                  <ArrowRight className="w-4 h-4" />
                </button>
                <p className="text-center text-[11px] text-gray-400 font-mono mt-2.5 flex items-center justify-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-brand-green" /> Immediate Seat Reservation • Direct WhatsApp Coordinator Connect
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* 3 Trust Indicators */}
        <div className="max-w-3xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-3.5 mb-14">
          {trustBadges.map((badge, idx) => {
            const Icon = badge.icon;
            return (
              <div
                key={idx}
                className="p-4 rounded-xl bg-[#0a110e] border border-brand-border flex items-center gap-3.5 hover:border-brand-green/40 transition-colors"
              >
                <div className="w-10 h-10 rounded-lg bg-brand-green/10 border border-brand-green/30 flex items-center justify-center shrink-0">
                  <Icon className="w-5 h-5 text-brand-green" />
                </div>
                <div>
                  <h4 className="text-xs sm:text-sm font-bold text-white">
                    {badge.title}
                  </h4>
                  <p className="text-[11px] text-gray-400 font-mono mt-0.5">
                    {badge.sub}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bull and Bear Silhouette Graphic & Script Quote */}
        <div className="relative max-w-3xl mx-auto py-10 px-6 rounded-2xl bg-gradient-to-r from-transparent via-[#09110d] to-transparent border-y border-brand-border/60 text-center overflow-hidden">
          <div className="absolute inset-0 flex items-center justify-between opacity-15 pointer-events-none px-6">
            <svg viewBox="0 0 100 60" className="w-28 h-16 fill-brand-green">
              <path d="M10 40 Q25 20, 50 30 T90 20 Q70 45, 50 42 T10 40 Z" />
            </svg>
            <svg viewBox="0 0 100 60" className="w-28 h-16 fill-brand-green">
              <path d="M10 25 Q30 15, 60 22 T90 35 Q65 48, 40 45 T10 25 Z" />
            </svg>
          </div>

          <div className="relative z-10">
            <blockquote className="font-script text-2xl sm:text-4xl text-gray-100 max-w-xl mx-auto leading-relaxed">
              "Invest in your knowledge. <br /> It pays the best interest."
            </blockquote>
            <cite className="not-italic text-xs font-mono uppercase tracking-widest text-brand-green block mt-2 font-bold">
              — BS SHEKHAWAT
            </cite>
          </div>
        </div>

      </div>
    </section>
  );
}
