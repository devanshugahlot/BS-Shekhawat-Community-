import React, { useState, useEffect } from 'react';
import { Search, Menu, X, ArrowRight } from 'lucide-react';

export default function Navbar({ onOpenCheckout, onOpenSearch }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      // Scrollspy
      const sections = ['home', 'course', 'curriculum', 'live', 'reviews', 'pricing'];
      const scrollPos = window.scrollY + 200;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home', id: 'home' },
    { name: 'Course', href: '#course', id: 'course' },
    { name: 'Live Classes', href: '#live', id: 'live' },
    { name: 'Curriculum', href: '#curriculum', id: 'curriculum' },
    { name: 'Reviews', href: '#reviews', id: 'reviews' },
    { name: 'Pricing', href: '#pricing', id: 'pricing' },
  ];

  return (
    <nav className={`sticky top-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-[#060908]/95 backdrop-blur-md border-b border-brand-border/80 shadow-card py-3.5' 
        : 'bg-[#060908]/80 backdrop-blur-sm py-4'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Logo */}
        <a href="#home" className="flex items-center gap-3 group">
          <div className="relative flex items-center justify-center w-11 h-11 rounded-xl bg-gradient-to-br from-[#0c1a13] to-[#040806] border border-brand-green/40 group-hover:border-brand-green transition-all shadow-[0_0_15px_rgba(0,230,118,0.25)]">
            <span className="font-extrabold text-xl text-white font-mono tracking-tighter group-hover:text-brand-green transition-colors">
              BS
            </span>
            <span className="absolute -top-1 -right-1 w-2.5 h-2.5 rounded-full bg-brand-green animate-ping"></span>
          </div>
          <div className="flex flex-col">
            <span className="text-base font-black tracking-widest text-white uppercase leading-none font-mono">
              BS SHEKHAWAT
            </span>
            <span className="text-[10px] font-bold tracking-wider text-brand-green uppercase mt-1">
              Orderflow Trading
            </span>
          </div>
        </a>

        {/* Desktop Nav Links */}
        <div className="hidden md:flex items-center gap-1.5 bg-[#0d1410]/90 px-5 py-2 rounded-full border border-brand-border/80 backdrop-blur-md">
          {navLinks.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <a
                key={link.name}
                href={link.href}
                className={`px-3.5 py-1.5 rounded-full text-xs sm:text-sm font-semibold transition-all duration-200 ${
                  isActive
                    ? 'text-brand-green bg-brand-green/10 shadow-sm border border-brand-green/30'
                    : 'text-gray-300 hover:text-white hover:bg-white/5'
                }`}
              >
                {link.name}
              </a>
            );
          })}
        </div>

        {/* Action Buttons */}
        <div className="hidden md:flex items-center gap-3">
          <button
            onClick={onOpenSearch}
            className="p-2.5 text-gray-300 hover:text-brand-green hover:bg-white/5 rounded-full transition-colors"
            title="Search"
          >
            <Search className="w-5 h-5" />
          </button>
          
          <button 
            onClick={onOpenCheckout}
            className="text-sm font-bold text-gray-200 hover:text-white px-3 py-2 transition-colors"
          >
            Sign In
          </button>

          <button
            onClick={onOpenCheckout}
            className="relative group overflow-hidden rounded-full p-[1px] font-bold text-sm transition-all shadow-[0_0_20px_rgba(0,230,118,0.35)] hover:shadow-[0_0_30px_rgba(0,230,118,0.55)]"
          >
            <span className="absolute inset-0 bg-gradient-to-r from-brand-green via-emerald-400 to-brand-neon rounded-full group-hover:scale-105 transition-transform duration-300"></span>
            <span className="relative flex items-center gap-2 bg-[#00e676] hover:bg-[#00ff87] text-[#050907] px-5 py-2.5 rounded-full font-black text-xs sm:text-sm uppercase tracking-wider transition-colors">
              Join Now <ArrowRight className="w-4 h-4" />
            </span>
          </button>
        </div>

        {/* Mobile menu button */}
        <div className="flex md:hidden items-center gap-2">
          <button
            onClick={onOpenSearch}
            className="p-2.5 text-gray-200 hover:text-brand-green rounded-lg"
          >
            <Search className="w-5 h-5" />
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2.5 text-gray-200 hover:text-white rounded-lg focus:outline-none"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#0a0f0d] border-b border-brand-border px-4 pt-3 pb-6 space-y-3 animate-in fade-in slide-in-from-top-4 duration-200">
          <div className="flex flex-col space-y-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`px-4 py-2.5 rounded-lg text-sm font-semibold ${
                  activeSection === link.id
                    ? 'text-brand-green bg-brand-green/10 border border-brand-green/20'
                    : 'text-gray-300 hover:text-white hover:bg-white/5'
                }`}
              >
                {link.name}
              </a>
            ))}
          </div>
          <div className="pt-3 border-t border-brand-border/60 flex items-center gap-3">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenCheckout();
              }}
              className="w-1/2 py-3 text-center text-xs sm:text-sm font-bold text-gray-200 hover:text-white bg-white/5 rounded-xl"
            >
              Sign In
            </button>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenCheckout();
              }}
              className="w-1/2 py-3 text-center text-xs sm:text-sm font-black text-black bg-brand-green hover:bg-brand-neon rounded-xl uppercase tracking-wider"
            >
              Join Now
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
