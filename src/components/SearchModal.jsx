import React, { useState } from 'react';
import { Search, X, ArrowRight, BookOpen, Tv, Tag } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function SearchModal({ isOpen, onClose }) {
  const [query, setQuery] = useState('');

  if (!isOpen) return null;

  const sampleItems = [
    { title: 'Footprint Chart Reading & Stacked Imbalances', category: 'Curriculum', link: '#curriculum' },
    { title: 'Delta Divergence and Absorption Zones', category: 'Advanced Setup', link: '#curriculum' },
    { title: 'Market Profile POC, VAH and VAL Rules', category: 'Curriculum', link: '#curriculum' },
    { title: 'Live BankNifty & Nifty Market Execution Sessions', category: 'Live Classes', link: '#live' },
    { title: 'Auction Theory: How Buyers and Sellers Interact', category: 'Core Theory', link: '#home' },
    { title: 'Orderflow Masterclass Full Program (Book Your Slot)', category: 'Enrollment', link: '#pricing' },
  ];

  const filtered = query.trim() 
    ? sampleItems.filter(i => i.title.toLowerCase().includes(query.toLowerCase()) || i.category.toLowerCase().includes(query.toLowerCase()))
    : sampleItems;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-start justify-center pt-20 px-4">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="absolute inset-0 bg-black/80 backdrop-blur-sm"
        />

        {/* Search Dialog */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: -20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: -20 }}
          className="relative w-full max-w-xl bg-[#0a110e] border border-brand-green/40 rounded-2xl overflow-hidden shadow-[0_0_50px_rgba(0,230,118,0.2)] z-10"
        >
          {/* Search Input Bar */}
          <div className="flex items-center px-4 py-3.5 border-b border-brand-border bg-[#060a08]">
            <Search className="w-5 h-5 text-brand-green mr-3 shrink-0" />
            <input
              type="text"
              autoFocus
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search topics (e.g. Footprint, Delta, POC, Live Class)..."
              className="w-full bg-transparent text-sm text-white placeholder-gray-500 focus:outline-none font-sans"
            />
            <button 
              onClick={onClose}
              className="p-1 rounded text-gray-400 hover:text-white"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Results list */}
          <div className="max-h-80 overflow-y-auto p-3 space-y-1.5">
            <div className="px-3 py-1 text-[10px] font-mono text-gray-500 uppercase tracking-wider">
              {query ? `Search results for "${query}"` : 'Quick Navigation Suggestions'}
            </div>

            {filtered.length > 0 ? (
              filtered.map((item, idx) => (
                <a
                  key={idx}
                  href={item.link}
                  onClick={onClose}
                  className="flex items-center justify-between p-3 rounded-xl hover:bg-[#0f1a14] border border-transparent hover:border-brand-green/30 transition-all group"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-7 h-7 rounded-lg bg-brand-green/10 flex items-center justify-center text-brand-green shrink-0">
                      <BookOpen className="w-3.5 h-3.5" />
                    </div>
                    <div>
                      <div className="text-xs font-semibold text-gray-200 group-hover:text-brand-green transition-colors">
                        {item.title}
                      </div>
                      <span className="text-[10px] font-mono text-gray-500">
                        {item.category}
                      </span>
                    </div>
                  </div>
                  <ArrowRight className="w-3.5 h-3.5 text-gray-500 group-hover:text-brand-green group-hover:translate-x-0.5 transition-all" />
                </a>
              ))
            ) : (
              <div className="p-6 text-center text-xs text-gray-400">
                No matching topics found for "{query}".
              </div>
            )}
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
