import React, { useState } from 'react';
import { X, CheckCircle2, User, Phone, Mail, ArrowRight, ShieldCheck, Sparkles } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import confetti from 'canvas-confetti';

export default function EnrollmentModal({ isOpen, onClose }) {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [experience, setExperience] = useState('Beginner');
  const [market, setMarket] = useState('Index Futures & Options (Nifty/BankNifty)');
  const [note, setNote] = useState('');
  const [isSuccess, setIsSuccess] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSuccess(true);
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 },
      colors: ['#00e676', '#00ff87', '#ffffff']
    });
  };

  const handleReset = () => {
    setIsSuccess(false);
    onClose();
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/85 backdrop-blur-md"
        />

        {/* Modal Dialog */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 15 }}
          className="relative w-full max-w-lg bg-[#0a110e] border border-brand-green/40 rounded-3xl overflow-hidden shadow-2xl z-10 my-4 max-h-[92vh] overflow-y-auto"
        >
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-3.5 right-3.5 p-2 rounded-full bg-white/5 hover:bg-white/10 text-gray-400 hover:text-white transition-colors z-20"
          >
            <X className="w-5 h-5" />
          </button>

          {!isSuccess ? (
            <div className="p-5 sm:p-8">
              {/* Header */}
              <div className="mb-5">
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-green/15 text-brand-green text-[10px] sm:text-xs font-mono font-bold mb-2 border border-brand-green/30">
                  <Sparkles className="w-3 h-3" /> BOOK YOUR SLOT
                </div>
                <h3 className="text-xl sm:text-2xl font-black text-white tracking-tight">
                  Book Your Slot — Orderflow Trading
                </h3>
                <p className="text-xs sm:text-sm text-gray-300 mt-1">
                  Fill in your details below to reserve your live seat.
                </p>
              </div>

              {/* Form */}
              <form onSubmit={handleSubmit} className="space-y-3 sm:space-y-3.5">
                <div>
                  <label className="block text-[11px] font-mono text-gray-300 uppercase tracking-wider mb-1 font-semibold">
                    Full Name *
                  </label>
                  <div className="relative">
                    <User className="w-4 h-4 text-brand-green absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" />
                    <input
                      type="text"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="e.g. Rahul Sharma"
                      className="w-full bg-[#0d1612] text-xs sm:text-sm text-white pl-9 pr-3 py-2.5 rounded-xl border border-brand-border focus:outline-none focus:border-brand-green"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-[11px] font-mono text-gray-300 uppercase tracking-wider mb-1 font-semibold">
                      WhatsApp Mobile *
                    </label>
                    <div className="relative">
                      <Phone className="w-4 h-4 text-brand-green absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" />
                      <input
                        type="tel"
                        required
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        placeholder="+91 98765 43210"
                        className="w-full bg-[#0d1612] text-xs sm:text-sm text-white pl-9 pr-3 py-2.5 rounded-xl border border-brand-border focus:outline-none focus:border-brand-green"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-[11px] font-mono text-gray-300 uppercase tracking-wider mb-1 font-semibold">
                      Email Address *
                    </label>
                    <div className="relative">
                      <Mail className="w-4 h-4 text-brand-green absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" />
                      <input
                        type="email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="rahul@trade.com"
                        className="w-full bg-[#0d1612] text-xs sm:text-sm text-white pl-9 pr-3 py-2.5 rounded-xl border border-brand-border focus:outline-none focus:border-brand-green"
                      />
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-[11px] font-mono text-gray-300 uppercase tracking-wider mb-1 font-semibold">
                      Trading Experience
                    </label>
                    <select
                      value={experience}
                      onChange={(e) => setExperience(e.target.value)}
                      className="w-full bg-[#0d1612] text-xs sm:text-sm text-white px-3 py-2.5 rounded-xl border border-brand-border focus:outline-none focus:border-brand-green"
                    >
                      <option value="Beginner">Complete Beginner</option>
                      <option value="6 Months - 1 Year">6 Months – 1 Year</option>
                      <option value="1 - 3 Years">1 – 3 Years</option>
                      <option value="3+ Years">3+ Years (Full Time)</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-[11px] font-mono text-gray-300 uppercase tracking-wider mb-1 font-semibold">
                      Primary Market
                    </label>
                    <select
                      value={market}
                      onChange={(e) => setMarket(e.target.value)}
                      className="w-full bg-[#0d1612] text-xs sm:text-sm text-white px-3 py-2.5 rounded-xl border border-brand-border focus:outline-none focus:border-brand-green"
                    >
                      <option value="Index Futures & Options">Index F&O (Nifty/BankNifty)</option>
                      <option value="Equity Stocks">Equity Cash & Swing</option>
                      <option value="Commodities & Crude">Commodities (Gold/Crude)</option>
                      <option value="Crypto & Forex">Crypto & Forex</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-[11px] font-mono text-gray-300 uppercase tracking-wider mb-1 font-semibold">
                    Biggest Trading Challenge (Optional)
                  </label>
                  <input
                    type="text"
                    value={note}
                    onChange={(e) => setNote(e.target.value)}
                    placeholder="e.g. Overtrading, finding entry levels..."
                    className="w-full bg-[#0d1612] text-xs sm:text-sm text-white px-3 py-2 rounded-xl border border-brand-border focus:outline-none focus:border-brand-green"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full mt-2 py-3 rounded-xl bg-brand-green hover:bg-brand-neon text-black font-extrabold text-xs sm:text-sm uppercase tracking-wider flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(0,230,118,0.5)] transition-all"
                >
                  Book Your Slot Now <ArrowRight className="w-4 h-4" />
                </button>

                <p className="text-center text-[10px] text-gray-400 font-mono flex items-center justify-center gap-1">
                  <ShieldCheck className="w-3.5 h-3.5 text-brand-green" /> 100% Confidential • Direct WhatsApp Coordinator Connect
                </p>
              </form>
            </div>
          ) : (
            <div className="p-6 sm:p-8 text-center">
              <div className="w-16 h-16 rounded-full bg-brand-green/20 border-2 border-brand-green flex items-center justify-center mx-auto mb-4 shadow-[0_0_25px_rgba(0,230,118,0.5)]">
                <CheckCircle2 className="w-8 h-8 text-brand-green" />
              </div>

              <h3 className="text-xl sm:text-2xl font-black text-white mb-1.5">
                Application Received!
              </h3>
              <p className="text-xs sm:text-sm text-gray-300 max-w-sm mx-auto mb-4">
                Thank you <strong className="text-brand-green">{name || 'Trader'}</strong>! Your seat request has been submitted.
              </p>

              <div className="p-3.5 rounded-xl bg-[#09110d] border border-brand-border text-left text-xs font-mono space-y-1.5 mb-5 text-gray-300">
                <div className="flex justify-between">
                  <span className="text-gray-400">Application No:</span>
                  <span className="text-brand-green font-bold">REG-BS{Math.floor(100000 + Math.random() * 900000)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Phone:</span>
                  <span>{phone || '+91 98765 43210'}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Status:</span>
                  <span className="text-brand-green">VIP Priority Seat Confirmed</span>
                </div>
              </div>

              <button
                onClick={handleReset}
                className="w-full py-3 rounded-xl bg-brand-green text-black font-extrabold text-xs uppercase tracking-wider"
              >
                Done
              </button>
            </div>
          )}
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
