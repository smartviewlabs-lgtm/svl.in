import React, { useState, useEffect } from 'react';
import { 
  Menu, 
  X, 
  Clock, 
  Sparkles, 
  Phone, 
  MessageSquare, 
  Award, 
  Compass, 
  ChevronRight,
  ShieldCheck,
  Zap,
  Globe
} from 'lucide-react';

interface HeaderProps {
  activeSection: string;
  onNavigate: (sectionId: string) => void;
}

export const Header: React.FC<HeaderProps> = ({ activeSection, onNavigate }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [currentTime, setCurrentTime] = useState<string>('');
  const [scrolled, setScrolled] = useState(false);

  // Real-time IST Digital Clock (hh:mm:ss AM/PM IST)
  useEffect(() => {
    const updateTime = () => {
      const options: Intl.DateTimeFormatOptions = {
        timeZone: 'Asia/Kolkata',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: true
      };
      const istString = new Intl.DateTimeFormat('en-US', options).format(new Date());
      setCurrentTime(`${istString} IST`);
    };

    updateTime();
    const timer = setInterval(updateTime, 1000);
    return () => clearInterval(timer);
  }, []);

  // Track window scroll for elevated frosted glass styling
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 15);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock body scroll when mobile drawer is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMenuOpen]);

  const navItems = [
    { id: 'hero', label: 'Home' },
    { id: 'services', label: 'Services' },
    { id: 'portfolio', label: '360° Portfolio', badge: 'Live VR' },
    { id: 'pricing', label: 'Pricing' },
    { id: 'academy', label: 'Academy' },
    { id: 'reviews', label: 'Reviews' },
    { id: 'contact', label: 'Contact' },
  ];

  const handleNavClick = (id: string) => {
    onNavigate(id);
    setIsMenuOpen(false);
  };

  const marqueeMessages = [
    { icon: '🚀', title: 'Welcome to Smart View Labs', desc: 'Google Street View & 360° VR Agency' },
    { icon: '⭐', title: 'Certified Google Trusted Photographers', desc: 'Official Street View Publishing' },
    { icon: '🔥', title: 'Special Limited Offer', desc: 'Free Google Maps Local SEO & Listing Audit' },
    { icon: '💡', title: 'High Precision LiDAR', desc: 'Matterport Pro3 & 8K HDR 360° Panoramas' },
    { icon: '📞', title: 'Direct WhatsApp Line', desc: '+91 75080-94760 (Fast 15-min Response)' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 w-full transition-all duration-300">
      
      {/* 1. Top Scrolling Marquee Bar */}
      <div className="w-full overflow-hidden bg-slate-900 text-sky-100 py-1 sm:py-1.5 px-3 sm:px-4 border-b border-sky-900/60 select-none">
        <div className="animate-marquee whitespace-nowrap text-[11px] sm:text-xs font-medium tracking-wide flex items-center gap-6 sm:gap-8">
          {/* Loop sequence twice for smooth infinite scrolling */}
          {[...marqueeMessages, ...marqueeMessages].map((msg, idx) => (
            <React.Fragment key={idx}>
              <span className="inline-flex items-center gap-1.5 sm:gap-2">
                <span>{msg.icon}</span>
                <span className="font-semibold text-white">{msg.title}</span>
                <span className="text-cyan-300 hidden xs:inline sm:inline">| {msg.desc}</span>
              </span>
              <span className="text-sky-500 font-bold">•</span>
            </React.Fragment>
          ))}
        </div>
      </div>

      {/* 2. Main Navigation Frosted Glass Header */}
      <div 
        className={`w-full transition-all duration-300 px-3 sm:px-5 lg:px-8 ${
          scrolled 
            ? 'bg-white/95 backdrop-blur-xl border-b border-sky-200/90 shadow-md py-2 sm:py-2.5' 
            : 'bg-white/85 backdrop-blur-lg border-b border-sky-100/90 shadow-xs py-2.5 sm:py-3'
        }`}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-2 sm:gap-4">
          
          {/* Left: Brand Logo & Name */}
          <div 
            id="brand-logo"
            onClick={() => handleNavClick('hero')}
            className="flex items-center gap-2 sm:gap-3 cursor-pointer group shrink-0"
          >
            {/* 3D Glass Logo Capsule */}
            <div className="relative w-8 h-8 sm:w-10 sm:h-10 rounded-xl bg-gradient-to-tr from-sky-600 via-cyan-500 to-sky-400 p-0.5 shadow-md group-hover:scale-105 transition-transform duration-200 shrink-0">
              <div className="w-full h-full bg-white rounded-[10px] flex items-center justify-center">
                <Compass className="w-4 h-4 sm:w-5 sm:h-5 text-sky-600 group-hover:rotate-90 transition-transform duration-500" />
              </div>
              <div className="absolute -top-0.5 -right-0.5 w-2.5 h-2.5 sm:w-3 sm:h-3 bg-emerald-500 rounded-full border-2 border-white" title="Active Google Partner" />
            </div>

            <div className="flex flex-col">
              <div className="flex items-center gap-1 sm:gap-1.5">
                <span className="font-heading font-extrabold text-sm sm:text-base lg:text-lg tracking-tight text-slate-900 group-hover:text-sky-600 transition-colors whitespace-nowrap">
                  Smart View Labs
                </span>
                <span className="hidden sm:inline-block px-1.5 py-0.5 text-[9px] font-extrabold text-sky-700 bg-sky-100 rounded border border-sky-200 uppercase tracking-wider">
                  SVL
                </span>
              </div>
              <div className="flex items-center gap-1 text-[9px] sm:text-[11px] font-medium text-slate-500 whitespace-nowrap">
                <ShieldCheck className="w-3 h-3 text-emerald-600 shrink-0" />
                <span>Google Trusted Photographers</span>
              </div>
            </div>
          </div>

          {/* Desktop Nav Links (Visible on Laptop & Desktop) */}
          <nav className="hidden lg:flex items-center gap-0.5 xl:gap-1">
            {navItems.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <button
                  key={item.id}
                  id={`nav-link-${item.id}`}
                  onClick={() => handleNavClick(item.id)}
                  className={`relative px-2.5 xl:px-3.5 py-1.5 rounded-full text-xs font-bold transition-all duration-200 whitespace-nowrap ${
                    isActive 
                      ? 'text-sky-700 bg-sky-100/90 shadow-xs border border-sky-300' 
                      : 'text-slate-600 hover:text-sky-700 hover:bg-sky-50/70'
                  }`}
                >
                  <span className="flex items-center gap-1.5">
                    {item.label}
                    {item.badge && (
                      <span className="px-1.5 py-0.2 text-[9px] font-extrabold text-white bg-sky-600 rounded-full animate-pulse">
                        {item.badge}
                      </span>
                    )}
                  </span>
                </button>
              );
            })}
          </nav>

          {/* Right Actions: Phone + CTA + Hamburger */}
          <div className="flex items-center gap-1.5 sm:gap-2.5 shrink-0">
            
            {/* Center-Right: Real-time Digital Clock (Desktop only) */}
            <div 
              id="digital-clock-capsule"
              className="hidden 2xl:flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-slate-900 text-cyan-300 font-mono-tech text-[11px] tracking-wider border border-cyan-500/30 shadow-xs shrink-0"
              title="Real-time Indian Standard Time (IST)"
            >
              <Clock className="w-3 h-3 text-cyan-400 animate-pulse" />
              <span className="font-bold">{currentTime || '00:00:00 AM IST'}</span>
            </div>

            {/* Quick Hotline Call Button (Desktop) */}
            <a
              href="tel:+917508094760"
              className="hidden md:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white hover:bg-slate-50 border border-slate-200 text-slate-800 text-xs font-bold shadow-xs hover:border-sky-300 transition"
              title="Call Smart View Labs"
            >
              <Phone className="w-3.5 h-3.5 text-sky-600" />
              <span>+91 75080-94760</span>
            </a>

            {/* Quick Estimate / WhatsApp CTA (Adaptive mobile/desktop) */}
            <a
              id="header-cta-quote"
              href="https://wa.me/917508094760?text=Hello%20Smart%20View%20Labs!%20I%20would%20like%20to%20get%20a%20free%20quote%20for%20a%20360%C2%B0%20Virtual%20Tour."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-2.5 sm:px-3.5 py-1.5 rounded-full bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-extrabold shadow-sm hover:shadow-emerald-500/25 hover:scale-105 transition-all duration-200 glass-button-shine whitespace-nowrap"
            >
              <MessageSquare className="w-3.5 h-3.5 fill-white shrink-0" />
              <span className="hidden sm:inline">Free Quote</span>
              <span className="sm:hidden text-[11px]">Quote</span>
            </a>

            {/* Glass Hamburger Toggle Button */}
            <button
              id="hamburger-menu-toggle"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-1.5 sm:p-2 rounded-xl bg-white hover:bg-slate-50 text-slate-700 hover:text-sky-600 border border-sky-200 shadow-xs transition-all duration-200 hover:scale-105 active:scale-95"
              aria-label={isMenuOpen ? 'Close Menu' : 'Open Menu'}
            >
              {isMenuOpen ? (
                <X className="w-4 h-4 sm:w-5 sm:h-5 text-rose-500 transition-transform rotate-90" />
              ) : (
                <Menu className="w-4 h-4 sm:w-5 sm:h-5 transition-transform" />
              )}
            </button>
          </div>

        </div>
      </div>

      {/* 3. Slide-Out Mobile & Tablet Drawer Menu */}
      {isMenuOpen && (
        <div 
          id="glass-menu-backdrop"
          className="fixed inset-0 z-50 bg-slate-900/60 backdrop-blur-sm transition-opacity duration-300 flex justify-end"
          onClick={() => setIsMenuOpen(false)}
        >
          <div 
            id="glass-menu-drawer"
            className="w-full max-w-xs sm:max-w-sm h-full bg-white/95 backdrop-blur-2xl border-l border-sky-200 shadow-2xl p-5 sm:p-6 flex flex-col justify-between overflow-y-auto text-slate-800 animate-in slide-in-from-right duration-300"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Drawer Top Header */}
            <div>
              <div className="flex items-center justify-between pb-4 border-b border-slate-100">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-lg bg-sky-600 text-white flex items-center justify-center font-bold shadow-sm shrink-0">
                    <Compass className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-heading font-bold text-slate-900 text-sm sm:text-base">Smart View Labs</h3>
                    <p className="text-[10px] sm:text-[11px] text-sky-600 font-medium">360° VR & Digital Agency</p>
                  </div>
                </div>
                <button
                  id="close-drawer-btn"
                  onClick={() => setIsMenuOpen(false)}
                  className="p-1.5 sm:p-2 rounded-full hover:bg-slate-100 text-slate-500 hover:text-slate-800 transition"
                  aria-label="Close Drawer"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Real-Time IST Clock inside drawer for mobile */}
              <div className="mt-4 flex items-center justify-between px-3 py-2 rounded-xl bg-slate-900 text-cyan-300 font-mono-tech text-[11px] border border-cyan-500/30">
                <div className="flex items-center gap-1.5 text-slate-400">
                  <Clock className="w-3.5 h-3.5 text-cyan-400 animate-pulse" />
                  <span>India Time:</span>
                </div>
                <span className="font-bold text-cyan-300">{currentTime || '00:00:00 IST'}</span>
              </div>

              {/* Navigation List */}
              <nav className="mt-4 flex flex-col gap-1">
                {navItems.map((item) => (
                  <button
                    key={item.id}
                    id={`drawer-link-${item.id}`}
                    onClick={() => handleNavClick(item.id)}
                    className={`w-full flex items-center justify-between px-3.5 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all text-left ${
                      activeSection === item.id
                        ? 'bg-sky-100 text-sky-800 border border-sky-300'
                        : 'text-slate-700 hover:bg-slate-50 hover:text-sky-700'
                    }`}
                  >
                    <span className="flex items-center gap-2">
                      {item.label}
                    </span>
                    <div className="flex items-center gap-1.5">
                      {item.badge && (
                        <span className="px-1.5 py-0.5 text-[8px] font-extrabold text-white bg-sky-600 rounded-full animate-pulse">
                          {item.badge}
                        </span>
                      )}
                      <ChevronRight className="w-4 h-4 text-slate-400" />
                    </div>
                  </button>
                ))}
              </nav>
            </div>

            {/* Drawer Bottom Actions & Contacts */}
            <div className="pt-4 mt-4 border-t border-slate-100 flex flex-col gap-2.5">
              <div className="p-2.5 rounded-xl bg-sky-50 border border-sky-100 text-xs text-slate-600">
                <div className="flex items-center gap-1.5 text-sky-800 font-bold mb-0.5 text-xs">
                  <Award className="w-3.5 h-3.5 text-sky-600 shrink-0" />
                  <span>Google Trusted Agency</span>
                </div>
                <p className="text-[10px] sm:text-[11px] leading-relaxed text-slate-600">
                  Official Google Maps Street View publishing with lifetime free hosting.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-2">
                <a
                  href="tel:+917508094760"
                  className="flex items-center justify-center gap-1.5 py-2 px-2.5 rounded-xl bg-white border border-slate-200 text-slate-800 text-xs font-bold hover:bg-slate-50 shadow-xs"
                >
                  <Phone className="w-3.5 h-3.5 text-sky-600" />
                  <span>Call Now</span>
                </a>

                <a
                  href="https://wa.me/917508094760?text=Hello%20Smart%20View%20Labs!%20I%20am%20interested%20in%20your%20360%C2%B0%20Virtual%20Tour%20services."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-1.5 py-2 px-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold shadow-md shadow-emerald-500/20"
                >
                  <MessageSquare className="w-3.5 h-3.5 fill-white" />
                  <span>WhatsApp</span>
                </a>
              </div>
            </div>

          </div>
        </div>
      )}
    </header>
  );
};
