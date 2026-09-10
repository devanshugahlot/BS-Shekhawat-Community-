import React from 'react';
import { ArrowUp, ShieldAlert } from 'lucide-react';

export default function Footer({ onOpenCheckout }) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#040705] border-t border-brand-border text-gray-400 text-sm py-16 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-brand-border/60">
          
          {/* Brand Info (5 cols) */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="flex items-center justify-center w-11 h-11 rounded-xl bg-gradient-to-br from-[#0c1a13] to-[#040806] border border-brand-green/40 shadow-[0_0_15px_rgba(0,230,118,0.2)]">
                <span className="font-mono font-black text-xl text-white">BS</span>
              </div>
              <div>
                <span className="text-lg font-black text-white uppercase tracking-wider block font-mono">
                  BS SHEKHAWAT
                </span>
                <span className="text-xs font-mono text-brand-green tracking-widest uppercase block mt-0.5">
                  Master Orderflow Trading
                </span>
              </div>
            </div>

            <p className="text-gray-300 text-sm leading-relaxed max-w-sm">
              Empowering disciplined traders with institutional orderflow, footprint chart reading, and auction market theory. Trade with logic, not emotions.
            </p>

            <div className="flex items-center gap-3 pt-2">
              <span className="px-3.5 py-1.5 rounded-full bg-brand-green/10 border border-brand-green/30 text-brand-green text-xs font-mono font-bold">
                10K+ TRADERS TRAINED
              </span>
              <span className="px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 text-gray-300 text-xs font-mono">
                RATING 4.9 / 5.0 ★
              </span>
            </div>
          </div>

          {/* Quick Links (3 cols) */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-sm font-mono font-bold text-white uppercase tracking-wider">
              Quick Links
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li><a href="#home" className="hover:text-brand-green transition-colors">Home & Overview</a></li>
              <li><a href="#course" className="hover:text-brand-green transition-colors">Course Program Details</a></li>
              <li><a href="#curriculum" className="hover:text-brand-green transition-colors">Curriculum Modules (01 - 08)</a></li>
              <li><a href="#live" className="hover:text-brand-green transition-colors">Live Trading Classes</a></li>
              <li><a href="#reviews" className="hover:text-brand-green transition-colors">Student Testimonials</a></li>
              <li><a href="#pricing" className="hover:text-brand-green transition-colors">Pricing & Enrollment</a></li>
            </ul>
          </div>

          {/* Legal & Security (4 cols) */}
          <div className="md:col-span-4 space-y-3">
            <h4 className="text-sm font-mono font-bold text-white uppercase tracking-wider">
              Student Support & Policies
            </h4>
            <p className="text-sm text-gray-300 leading-relaxed">
              Have questions about the program schedule, footprint software compatibility, or live class timings?
            </p>
            <div className="space-y-2 pt-1">
              <div className="text-sm text-gray-200 font-mono">
                Email: <span className="text-brand-green">support@bsshekhawat.com</span>
              </div>
              <div className="text-sm text-gray-200 font-mono">
                Community: <span className="text-brand-green">Official Discord & Telegram</span>
              </div>
            </div>
            <button
              onClick={onOpenCheckout}
              className="mt-3 px-5 py-2.5 rounded-xl bg-brand-green/15 hover:bg-brand-green/25 text-brand-green border border-brand-green/40 text-xs sm:text-sm font-bold transition-all"
            >
              Fill Enrollment Application &rarr;
            </button>
          </div>

        </div>

        {/* Risk Disclaimer */}
        <div className="py-8 border-b border-brand-border/60">
          <div className="flex items-start gap-3.5 p-5 rounded-2xl bg-[#070d09] border border-brand-border/80">
            <ShieldAlert className="w-6 h-6 text-yellow-500 shrink-0 mt-0.5" />
            <div className="text-xs text-gray-300 leading-relaxed">
              <strong className="text-white">Risk Disclosure & Educational Disclaimer:</strong> Trading in financial instruments including equity, futures, and options carries substantial risk of capital loss and is not suitable for every investor. All content, video lessons, live market analysis, and materials provided by BS Shekhawat are solely for educational purposes and should not be construed as investment, financial, or trading advice. Past performance of any trading methodology does not guarantee future results.
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-400">
          <div>
            © {new Date().getFullYear()} BS Shekhawat Orderflow Trading. All Rights Reserved.
          </div>

          <div className="flex items-center gap-6">
            <a href="#pricing" className="hover:text-brand-green transition-colors">Privacy Policy</a>
            <a href="#pricing" className="hover:text-brand-green transition-colors">Terms of Service</a>
            <a href="#pricing" className="hover:text-brand-green transition-colors">Refund Policy</a>
            <button
              onClick={scrollToTop}
              className="p-2.5 rounded-xl bg-[#0d1410] border border-brand-border text-gray-400 hover:text-brand-green hover:border-brand-green/30 transition-all ml-2"
              title="Back to Top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
}
