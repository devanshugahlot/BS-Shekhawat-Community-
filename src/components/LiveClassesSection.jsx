import React, { useState, useEffect, useRef } from 'react';
import { 
  Tv, 
  Activity, 
  MessageSquare, 
  Crosshair, 
  HelpCircle, 
  Users, 
  Hand, 
  FileText, 
  Maximize2, 
  Send, 
  Calendar, 
  Bell, 
  ArrowRight,
  Volume2
} from 'lucide-react';

export default function LiveClassesSection({ onEnroll }) {
  const [messages, setMessages] = useState([
    { id: 1, user: 'Rohit K.', role: 'Pro Member', text: 'Very clear explanation! 🔥', time: '09:34' },
    { id: 2, user: 'Sneha P.', role: 'Student', text: 'Can you explain this 300 lot imbalance at the high?', time: '09:35' },
    { id: 3, user: 'Aman P.', role: 'Options Trader', text: 'Great session sir! Delta just flipped positive.', time: '09:36' },
    { id: 4, user: 'Vikram S.', role: 'Intraday Trader', text: 'Watching the absorption on DOM ladder now.', time: '09:37' },
    { id: 5, user: 'Pooja M.', role: 'Student', text: 'This is next level learning ❤️', time: '09:38' },
  ]);
  const [inputMsg, setInputMsg] = useState('');
  const [viewerCount, setViewerCount] = useState(245);
  const [handRaised, setHandRaised] = useState(false);
  const [notesActive, setNotesActive] = useState(false);
  const [noteContent, setNoteContent] = useState('Look for absorption at POC before taking breakout entries...');
  
  // CONTAINER REF (Strictly scroll within container, NEVER scroll entire page!)
  const chatContainerRef = useRef(null);

  useEffect(() => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
    }
  }, [messages]);

  useEffect(() => {
    const viewerInterval = setInterval(() => {
      setViewerCount(prev => prev + (Math.floor(Math.random() * 5) - 2));
    }, 5000);

    const autoChatInterval = setInterval(() => {
      const extraMessages = [
        { user: 'Harish R.', text: 'POC shifted to 25,410!', role: 'Student' },
        { user: 'Deepak V.', text: 'Huge buyer aggression at value area low! 🚀', role: 'Trader' },
        { user: 'Tarun M.', text: 'Understood the stacked imbalance concept clearly now.', role: 'Student' },
      ];
      const randomMsg = extraMessages[Math.floor(Math.random() * extraMessages.length)];
      const now = new Date();
      const timeStr = `${String(now.getHours()).padStart(2, '0')}:${String(now.getMinutes()).padStart(2, '0')}`;
      
      setMessages(prev => [
        ...prev.slice(-15),
        { id: Date.now(), user: randomMsg.user, role: randomMsg.role, text: randomMsg.text, time: timeStr }
      ]);
    }, 12000);

    return () => {
      clearInterval(viewerInterval);
      clearInterval(autoChatInterval);
    };
  }, []);

  const handleSendMessage = (e) => {
    e.preventDefault();
    if (!inputMsg.trim()) return;

    const now = new Date();
    const timeStr = `${String(now.getHours()).padStart(2, '0')}:${String(now.getMinutes()).padStart(2, '0')}`;

    setMessages(prev => [
      ...prev,
      {
        id: Date.now(),
        user: 'You (Visitor)',
        role: 'Live Attendee',
        text: inputMsg.trim(),
        time: timeStr,
        isSelf: true
      }
    ]);
    setInputMsg('');
  };

  const featurePills = [
    { title: 'Live Market Analysis', icon: Activity },
    { title: 'Real-time Orderflow', icon: Tv },
    { title: 'Live Q&A', icon: MessageSquare },
    { title: 'Trade Breakdowns', icon: Crosshair },
    { title: 'Doubt Clearing', icon: HelpCircle },
    { title: 'Community Discussion', icon: Users },
  ];

  const upcomingClasses = [
    {
      title: 'Orderflow Live Session',
      topic: 'Market Structure & Liquidity',
      date: '12 Sep 2026 • 09:30 AM',
      isNext: true,
    },
    {
      title: 'Footprint Deep Dive',
      topic: 'Imbalance & Absorption',
      date: '14 Sep 2026 • 09:30 AM',
      isNext: false,
    },
    {
      title: 'Q&A Session',
      topic: 'Doubt Clearing Live',
      date: '16 Sep 2026 • 09:30 AM',
      isNext: false,
    },
  ];

  return (
    <section id="live" className="py-12 sm:py-16 border-t border-brand-border/60 relative bg-[#060908]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-xs font-mono text-gray-400 mb-4">
          <a href="#home" className="hover:text-brand-green transition-colors">Home</a>
          <span>&gt;</span>
          <span className="text-brand-green font-semibold">Live Classes</span>
        </div>

        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-6 sm:mb-8">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-white tracking-tight mb-2">
            Learn <span className="text-brand-green">Orderflow</span> Live
          </h2>
          <p className="text-xs sm:text-sm text-gray-300">
            Don't just watch recorded videos. Learn, ask questions and see Orderflow concepts applied in real-time market conditions.
          </p>
        </div>

        {/* Feature Icons Row: Horizontal swipe on mobile, grid on desktop */}
        <div className="flex sm:grid sm:grid-cols-3 lg:grid-cols-6 gap-2 sm:gap-2.5 overflow-x-auto no-scrollbar pb-2 mb-8">
          {featurePills.map((pill, idx) => {
            const Icon = pill.icon;
            return (
              <div 
                key={idx}
                className="p-2.5 sm:p-3 rounded-xl bg-[#0a110e] border border-brand-border flex items-center justify-center gap-2 text-xs text-gray-200 shrink-0 whitespace-nowrap"
              >
                <Icon className="w-3.5 h-3.5 text-brand-green shrink-0" />
                <span className="font-semibold">{pill.title}</span>
              </div>
            );
          })}
        </div>

        {/* INTERACTIVE LIVE CLASSROOM TERMINAL */}
        <div className="rounded-2xl border border-brand-green/30 bg-[#090e0b] overflow-hidden shadow-lg mb-10">
          {/* Header */}
          <div className="flex items-center justify-between px-3.5 py-2 bg-[#060a08] border-b border-brand-border/80">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-red-500"></span>
              <span className="w-2.5 h-2.5 rounded-full bg-yellow-500"></span>
              <span className="w-2.5 h-2.5 rounded-full bg-green-500"></span>
              <span className="text-xs font-mono text-gray-300 font-semibold ml-1">
                Live Broadcast Studio
              </span>
            </div>

            <div className="flex items-center gap-2">
              <div className="flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-red-500/15 border border-red-500/40 text-red-400 text-[11px] font-mono font-bold">
                <span className="w-1.5 h-1.5 rounded-full bg-red-500 animate-ping"></span>
                LIVE
                <span className="text-white flex items-center gap-1">
                  <Users className="w-3 h-3 text-red-400" /> {viewerCount}
                </span>
              </div>
            </div>
          </div>

          {/* Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12">
            {/* Stream View */}
            <div className="lg:col-span-8 bg-black relative flex flex-col justify-between p-3 sm:p-4 min-h-[260px] sm:min-h-[340px]">
              <div className="absolute inset-0 overflow-hidden">
                <img 
                  src="/assets/mentor.jpg" 
                  alt="Live mentor stream" 
                  className="w-full h-full object-cover object-[center_25%] filter brightness-90 contrast-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-black/50 pointer-events-none" />
              </div>

              {/* Top overlay */}
              <div className="relative z-10 flex items-start justify-between">
                <div className="bg-black/80 backdrop-blur-md px-2.5 py-1.5 rounded-lg border border-brand-border/60">
                  <div className="text-xs font-bold text-white flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-brand-green"></span>
                    BankNifty Delta Absorption
                  </div>
                  <div className="text-[10px] font-mono text-brand-green">
                    51,980.40 • Imbalance 3.4:1
                  </div>
                </div>

                <span className="bg-black/70 px-2 py-1 rounded text-[10px] font-mono text-gray-300 border border-white/10 flex items-center gap-1">
                  <Volume2 className="w-3 h-3 text-brand-green" /> 100%
                </span>
              </div>

              {/* Bottom controls */}
              <div className="relative z-10 mt-auto pt-3">
                {notesActive && (
                  <div className="mb-2 p-2 rounded-xl bg-black/90 border border-brand-green/40 backdrop-blur-md">
                    <div className="flex items-center justify-between text-[11px] font-bold text-brand-green mb-1">
                      <span>Class Notes</span>
                      <button onClick={() => setNotesActive(false)} className="text-gray-400">✕</button>
                    </div>
                    <textarea 
                      value={noteContent}
                      onChange={(e) => setNoteContent(e.target.value)}
                      className="w-full bg-[#0d1410] text-xs text-gray-200 p-2 rounded border border-brand-border h-14 resize-none"
                    />
                  </div>
                )}

                <div className="flex items-center justify-between gap-1.5 p-1.5 rounded-xl bg-[#090f0c]/90 border border-brand-border backdrop-blur-md">
                  <div className="flex items-center gap-1.5">
                    <button 
                      onClick={() => {
                        const q = prompt("Type your question:");
                        if (q) {
                          setMessages(prev => [...prev, { id: Date.now(), user: 'You', role: 'Attendee', text: `❓ ${q}`, time: 'Now', isSelf: true }]);
                        }
                      }}
                      className="flex items-center gap-1 px-2.5 py-1.5 rounded-lg bg-brand-green/15 text-brand-green text-xs font-semibold"
                    >
                      <HelpCircle className="w-3.5 h-3.5" />
                      Ask
                    </button>

                    <button 
                      onClick={() => setHandRaised(!handRaised)}
                      className={`flex items-center gap-1 px-2.5 py-1.5 rounded-lg text-xs font-semibold border ${
                        handRaised ? 'bg-yellow-500 text-black border-yellow-400' : 'bg-white/5 text-gray-200 border-white/10'
                      }`}
                    >
                      <Hand className="w-3.5 h-3.5" />
                      {handRaised ? 'Raised!' : 'Raise Hand'}
                    </button>

                    <button 
                      onClick={() => setNotesActive(!notesActive)}
                      className="flex items-center gap-1 px-2.5 py-1.5 rounded-lg bg-white/5 text-gray-200 border border-white/10 text-xs"
                    >
                      <FileText className="w-3.5 h-3.5 text-gray-400" />
                      Notes
                    </button>
                  </div>

                  <button 
                    onClick={() => alert("Presentation mode enabled")}
                    className="p-1.5 text-gray-400 hover:text-white"
                  >
                    <Maximize2 className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </div>

            {/* Chat Box: Max 240px height on mobile so it doesn't cause huge void! */}
            <div className="lg:col-span-4 bg-[#080d0a] border-t lg:border-t-0 lg:border-l border-brand-border flex flex-col h-60 lg:h-[380px]">
              <div className="p-2.5 border-b border-brand-border/70 flex items-center justify-between text-xs font-bold text-white">
                <span className="flex items-center gap-1.5">Live Chat <span className="w-1.5 h-1.5 rounded-full bg-brand-green"></span></span>
                <span className="text-[10px] font-mono text-gray-400 font-normal">Slow mode 3s</span>
              </div>

              <div ref={chatContainerRef} className="flex-1 p-2.5 overflow-y-auto space-y-2 font-sans text-xs">
                {messages.map((msg) => (
                  <div key={msg.id} className={`p-2 rounded-lg border ${msg.isSelf ? 'bg-brand-green/10 border-brand-green/30 text-white' : 'bg-[#0d1410] border-brand-border/60 text-gray-200'}`}>
                    <div className="flex items-center justify-between mb-0.5">
                      <span className="font-bold text-white text-[11px]">{msg.user}</span>
                      <span className="text-[9px] font-mono text-gray-500">{msg.time}</span>
                    </div>
                    <div className="text-gray-200 text-xs break-words">{msg.text}</div>
                  </div>
                ))}
              </div>

              <form onSubmit={handleSendMessage} className="p-2 border-t border-brand-border bg-[#060a08] flex items-center gap-1.5">
                <input
                  type="text"
                  value={inputMsg}
                  onChange={(e) => setInputMsg(e.target.value)}
                  placeholder="Type question..."
                  className="flex-1 bg-[#0c130f] text-xs text-white px-2.5 py-1.5 rounded-lg border border-brand-border focus:outline-none focus:border-brand-green"
                />
                <button type="submit" className="p-1.5 rounded-lg bg-brand-green text-black">
                  <Send className="w-3.5 h-3.5" />
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* UPCOMING LIVE CLASSES: Horizontal swipeable slider on mobile! */}
        <div>
          <div className="flex items-center justify-between mb-3">
            <h3 className="text-xl sm:text-2xl font-black text-white tracking-tight">
              Upcoming Live Classes
            </h3>
            <div className="block sm:hidden text-[10px] font-mono text-brand-green">
              Swipe classes →
            </div>
          </div>

          <div className="flex sm:grid sm:grid-cols-3 gap-3 overflow-x-auto sm:overflow-visible no-scrollbar snap-x snap-mandatory pb-2">
            {upcomingClasses.map((item, idx) => (
              <div
                key={idx}
                className={`min-w-[78vw] sm:min-w-0 snap-center p-4 rounded-2xl border ${
                  item.isNext ? 'bg-[#0b130f] border-brand-green/40 shadow-sm' : 'bg-[#080d0a] border-brand-border'
                } shrink-0`}
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-mono font-bold uppercase text-brand-green flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5" /> {item.date}
                  </span>
                  {item.isNext && (
                    <span className="px-2 py-0.5 rounded-full bg-brand-green/15 text-brand-green text-[9px] font-bold uppercase">
                      Next Up
                    </span>
                  )}
                </div>

                <h4 className="text-sm sm:text-base font-bold text-white mb-1">
                  {item.title}
                </h4>
                <p className="text-xs text-gray-400 mb-3">
                  {item.topic}
                </p>

                {item.isNext ? (
                  <button
                    onClick={onEnroll}
                    className="w-full py-2 rounded-xl bg-brand-green text-black font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-1"
                  >
                    Join Now <ArrowRight className="w-3 h-3" />
                  </button>
                ) : (
                  <button
                    onClick={() => alert(`Reminder set for: ${item.title}`)}
                    className="w-full py-2 rounded-xl bg-white/5 text-gray-200 text-xs border border-brand-border flex items-center justify-center gap-1"
                  >
                    <Bell className="w-3 h-3 text-gray-400" /> Set Reminder
                  </button>
                )}
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
