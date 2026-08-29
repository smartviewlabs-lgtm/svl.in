import React, { useState, useEffect } from 'react';
import { Phone, MessageSquare, ArrowUp } from 'lucide-react';

export const FloatingActions: React.FC = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      {/* 1. Bottom-Left: Round Call Button */}
      <div className="fixed bottom-5 left-5 z-40">
        <div className="relative group">
          {/* Subtle pulse wave ring */}
          <div className="absolute -inset-1.5 rounded-full bg-sky-500/25 animate-pulse-ring pointer-events-none" />

          <a
            id="btn-floating-quick-call"
            href="tel:+917508094760"
            className="relative w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-white hover:bg-sky-50 text-sky-600 shadow-2xl shadow-sky-500/25 border-2 border-sky-300 backdrop-blur-xl flex items-center justify-center transition-all duration-300 hover:scale-110 active:scale-95 group"
            aria-label="Call +91 75080-94760"
          >
            <Phone className="w-5 h-5 sm:w-6 sm:h-6 text-sky-600 group-hover:rotate-12 transition-transform" />
          </a>

          {/* Desktop Hover Tooltip */}
          <div className="absolute left-full ml-3 top-1/2 -translate-y-1/2 hidden md:group-hover:flex items-center px-3 py-1.5 rounded-xl bg-slate-900 text-white text-xs font-bold whitespace-nowrap shadow-lg border border-slate-700 pointer-events-none transition-all animate-in fade-in duration-200">
            <span>Call: +91 75080-94760</span>
            <div className="absolute right-full top-1/2 -translate-y-1/2 border-4 border-transparent border-r-slate-900" />
          </div>
        </div>
      </div>

      {/* 2. Bottom-Right: Round WhatsApp Button + Scroll to Top */}
      <div className="fixed bottom-5 right-5 z-40 flex items-center gap-3">
        {/* Optional Scroll to top */}
        {showScrollTop && (
          <button
            id="btn-scroll-to-top"
            onClick={scrollToTop}
            className="w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-white/90 hover:bg-white text-slate-700 hover:text-sky-600 shadow-xl border border-sky-200 backdrop-blur-md flex items-center justify-center transition-all hover:scale-110 active:scale-95"
            aria-label="Scroll to top"
          >
            <ArrowUp className="w-4 h-4 sm:w-5 sm:h-5" />
          </button>
        )}

        {/* Pulsing Round WhatsApp 3D Glass Button */}
        <div className="relative group">
          {/* Neon Ring Pulsing Wave */}
          <div className="absolute -inset-2 rounded-full bg-emerald-500/35 animate-pulse-ring pointer-events-none" />

          <a
            id="btn-floating-whatsapp"
            href="https://wa.me/917508094760?text=Hello%20Smart%20View%20Labs!%20I%20am%20interested%20in%20360%C2%B0%20Virtual%20Tour%20and%20Digital%20Marketing%20services."
            target="_blank"
            rel="noopener noreferrer"
            className="relative w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-emerald-600 hover:bg-emerald-700 text-white shadow-2xl shadow-emerald-500/40 backdrop-blur-xl border-2 border-emerald-300 flex items-center justify-center transition-all duration-300 hover:scale-110 active:scale-95 glass-button-shine"
            aria-label="Chat on WhatsApp with Smart View Labs"
          >
            <div className="relative flex items-center justify-center">
              <MessageSquare className="w-5 h-5 sm:w-6 sm:h-6 fill-white text-white group-hover:scale-110 transition-transform" />
              <span className="absolute -top-1 -right-1 w-3 h-3 bg-emerald-300 rounded-full border-2 border-emerald-700 animate-ping" />
            </div>
          </a>

          {/* Desktop Hover Tooltip */}
          <div className="absolute right-full mr-3 top-1/2 -translate-y-1/2 hidden md:group-hover:flex items-center px-3 py-1.5 rounded-xl bg-slate-900 text-white text-xs font-bold whitespace-nowrap shadow-lg border border-slate-700 pointer-events-none transition-all animate-in fade-in duration-200">
            <span>WhatsApp Inquiry (Fast Reply)</span>
            <div className="absolute left-full top-1/2 -translate-y-1/2 border-4 border-transparent border-l-slate-900" />
          </div>
        </div>
      </div>
    </>
  );
};
