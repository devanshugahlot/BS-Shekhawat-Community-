import React, { useState } from 'react';
import { Star, ArrowRight, CheckCircle, ChevronLeft, ChevronRight } from 'lucide-react';

export default function ReviewsSection({ onEnroll }) {
  const stats = [
    { value: '450+', label: 'Students' },
    { value: '4.9/5', label: 'Average Rating' },
    { value: '250', label: 'Hours of Live Classes' },
    { value: '90%', label: 'Practical Approach' },
  ];

  const testimonials = [
    {
      name: 'Rahul S.',
      role: 'Full Time Trader',
      initials: 'RS',
      review: 'Orderflow samjhne ka aisa clear explanation kahin nahi mila. Live classes bahut valuable hain.',
      rating: 5,
    },
    {
      name: 'Neha K.',
      role: 'Swing Trader',
      initials: 'NK',
      review: 'Concepts bohot practical hain. Real market examples se samajhna easy ho jata hai. Best investment!',
      rating: 5,
    },
    {
      name: 'Aman P.',
      role: 'Options Trader',
      initials: 'AP',
      review: 'Sir ka teaching style simple aur logical hai. Ab market ko different perspective se dekh pata hu.',
      rating: 5,
    },
    {
      name: 'Vikram J.',
      role: 'Intraday Trader',
      initials: 'VJ',
      review: 'Doubts ka response bahut fast milta hai. Community bhi kaafi supportive hai.',
      rating: 5,
    },
    {
      name: 'Pooja M.',
      role: 'Part Time Trader',
      initials: 'PM',
      review: 'Footprint aur volume concepts ab clearly samajh aate hain. Live sessions bahut helpful hain.',
      rating: 5,
    },
    {
      name: 'Karan T.',
      role: 'Positional Trader',
      initials: 'KT',
      review: 'Yeh course sirf strategy nahi, market ko samajhne ka mindset deta hai. Highly recommended!',
      rating: 5,
    },
  ];

  return (
    <section id="reviews" className="py-12 sm:py-16 border-t border-brand-border/60 relative bg-[#060908]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-xs font-mono text-gray-400 mb-4">
          <a href="#home" className="hover:text-brand-green transition-colors">Home</a>
          <span>&gt;</span>
          <span className="text-brand-green font-semibold">Reviews</span>
        </div>

        {/* Section Header */}
        <div className="flex items-end justify-between mb-8">
          <div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-white tracking-tight mb-1">
              What <span className="text-brand-green">Students</span> Say
            </h2>
            <p className="text-xs sm:text-sm text-gray-400">
              Real feedback from traders learning and growing with this program.
            </p>
          </div>
        </div>

        {/* Metrics Row (Compact on mobile) */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-2.5 sm:gap-3 mb-8 sm:mb-10">
          {stats.map((stat, idx) => (
            <div
              key={idx}
              className="p-3 sm:p-4 rounded-xl bg-[#090f0c] border border-brand-border text-center"
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

        {/* 6 Testimonial Cards: Desktop 3-col Grid / Mobile Horizontal Swipe Slider */}
        <div className="flex sm:grid sm:grid-cols-2 lg:grid-cols-3 gap-3.5 sm:gap-4 overflow-x-auto sm:overflow-visible no-scrollbar snap-x snap-mandatory pb-2 mb-10">
          {testimonials.map((t, idx) => (
            <div
              key={idx}
              className="min-w-[82vw] sm:min-w-0 snap-center p-5 rounded-2xl bg-[#0a110e] border border-brand-border/80 hover:border-brand-green/40 transition-all flex flex-col justify-between shrink-0 shadow-sm"
            >
              <div>
                <div className="flex items-center gap-1 text-amber-400 mb-3">
                  {[...Array(t.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current text-amber-400" />
                  ))}
                </div>

                <p className="text-xs sm:text-sm text-gray-200 leading-relaxed italic mb-5">
                  "{t.review}"
                </p>
              </div>

              <div className="pt-3 border-t border-brand-border/60 flex items-center justify-between">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-full bg-brand-green/15 border border-brand-green/40 flex items-center justify-center font-mono font-bold text-xs text-brand-green">
                    {t.initials}
                  </div>
                  <div>
                    <div className="text-xs font-bold text-white flex items-center gap-1">
                      {t.name}
                      <CheckCircle className="w-3 h-3 text-brand-green inline" />
                    </div>
                    <div className="text-[10px] text-gray-400 font-mono">
                      {t.role}
                    </div>
                  </div>
                </div>

                <span className="text-[10px] font-mono text-gray-500">
                  Verified Trader
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* BOTTOM CTA BANNER */}
        <div className="p-6 sm:p-8 rounded-2xl bg-gradient-to-br from-[#0c1913] via-[#09110d] to-[#050907] border border-brand-green/40 text-center relative overflow-hidden shadow-sm">
          <h3 className="text-xl sm:text-3xl font-black text-white tracking-tight mb-2">
            Join Thousands of Serious Traders
          </h3>
          <p className="text-xs sm:text-sm text-gray-300 max-w-xl mx-auto mb-5">
            Be a part of our growing community and take your trading to the next level.
          </p>

          <button
            onClick={onEnroll}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-brand-green hover:bg-brand-neon text-black font-black text-xs sm:text-sm uppercase tracking-wider shadow-[0_0_20px_rgba(0,230,118,0.4)]"
          >
            Join Live Classes
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </section>
  );
}
