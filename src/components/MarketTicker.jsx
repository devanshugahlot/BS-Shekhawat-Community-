import React, { useState, useEffect } from 'react';
import { TrendingUp, TrendingDown, Activity } from 'lucide-react';

export default function MarketTicker() {
  const [ticks, setTicks] = useState([
    { symbol: 'NIFTY 50', price: 25388.90, change: '+142.15 (+0.56%)', isUp: true },
    { symbol: 'BANK NIFTY', price: 51980.40, change: '+310.80 (+0.60%)', isUp: true },
    { symbol: 'DELTA FLOW', price: '+18.4K', change: 'AGGRESSIVE BUYERS', isUp: true, isSpecial: true },
    { symbol: 'CUMULATIVE VOL', price: '14.8M', change: 'HIGH LIQUIDITY', isUp: true, isSpecial: true },
    { symbol: 'S&P 500', price: 5626.02, change: '+41.88 (+0.75%)', isUp: true },
    { symbol: 'ORDERFLOW BIAS', price: 'BULLISH ABSORPTION', change: 'POC SHIFT UP', isUp: true, isSpecial: true },
    { symbol: 'INDIA VIX', price: 13.25, change: '-0.45 (-3.28%)', isUp: false },
    { symbol: 'CRUDE OIL', price: 69.40, change: '-0.85 (-1.21%)', isUp: false },
  ]);

  // Subtle live market micro-fluctuations
  useEffect(() => {
    const interval = setInterval(() => {
      setTicks(prev => prev.map(t => {
        if (typeof t.price === 'number') {
          const delta = (Math.random() - 0.48) * 1.5;
          const newPrice = +(t.price + delta).toFixed(2);
          return { ...t, price: newPrice };
        }
        return t;
      }));
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full bg-[#050806] border-b border-brand-border/60 text-xs text-brand-muted py-1.5 px-4 overflow-hidden relative z-40 select-none">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center gap-2 pr-4 border-r border-brand-border/50 shrink-0">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-green opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-green"></span>
          </span>
          <span className="text-[11px] font-mono font-semibold tracking-wider text-brand-green uppercase flex items-center gap-1">
            <Activity className="w-3 h-3 text-brand-green" /> LIVE DOM FEED
          </span>
        </div>

        {/* Ticker items */}
        <div className="flex items-center gap-6 overflow-x-auto no-scrollbar scroll-smooth whitespace-nowrap pl-4 py-0.5">
          {ticks.map((item, idx) => (
            <div key={idx} className="inline-flex items-center gap-2 font-mono text-[11px]">
              <span className="text-gray-400 font-medium">{item.symbol}:</span>
              <span className="text-white font-bold tracking-tight">
                {typeof item.price === 'number' ? item.price.toLocaleString() : item.price}
              </span>
              <span className={`flex items-center text-[10px] font-semibold px-1.5 py-0.5 rounded ${
                item.isUp 
                  ? 'text-brand-green bg-brand-green/10 border border-brand-green/20' 
                  : 'text-red-400 bg-red-500/10 border border-red-500/20'
              }`}>
                {item.isUp ? <TrendingUp className="w-2.5 h-2.5 mr-0.5" /> : <TrendingDown className="w-2.5 h-2.5 mr-0.5" />}
                {item.change}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
