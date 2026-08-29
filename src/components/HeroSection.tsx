import React, { useState } from 'react';
import { 
  Sparkles, 
  ArrowRight, 
  Calculator, 
  Compass, 
  Award, 
  ShieldCheck, 
  Eye, 
  CheckCircle2, 
  Play, 
  Zap,
  Flame
} from 'lucide-react';
import { Panorama360Viewer } from './Panorama360Viewer';
import { PORTFOLIO_DATA, AGENCY_STATS } from '../data/contentData';

interface HeroSectionProps {
  onNavigate: (sectionId: string) => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onNavigate }) => {
  const [selectedHeroTourIndex, setSelectedHeroTourIndex] = useState(0);
  const heroItem = PORTFOLIO_DATA[selectedHeroTourIndex];

  return (
    <section id="hero" className="relative min-h-[92vh] flex flex-col justify-center pt-8 pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden">
      
      {/* Background Soft Radial Glows */}
      <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[600px] sm:w-[900px] h-[500px] bg-gradient-to-br from-sky-200/40 via-cyan-100/30 to-transparent rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute bottom-10 right-10 w-[450px] h-[450px] bg-gradient-to-tl from-cyan-200/30 via-sky-100/20 to-transparent rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
        
        {/* Left Column: Headline, Subheading, CTAs, Badges */}
        <div className="lg:col-span-6 flex flex-col items-start text-left">
          
          {/* Top Google Trusted Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/90 border border-sky-200 text-sky-800 text-xs font-bold shadow-sm mb-6 backdrop-blur-md">
            <span className="flex h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
            <Award className="w-3.5 h-3.5 text-sky-600" />
            <span>Google Trusted Photographer Agency</span>
          </div>

          {/* Main Headline */}
          <h1 className="font-heading font-extrabold text-3xl sm:text-4xl md:text-5xl lg:text-[52px] leading-[1.15] tracking-tight text-slate-900">
            Transform Your Business with{' '}
            <span className="bg-gradient-to-r from-sky-600 via-cyan-600 to-sky-700 bg-clip-text text-transparent">
              360° Virtual Reality
            </span>
          </h1>

          {/* Motivational Subheading */}
          <div className="mt-4 p-3.5 rounded-2xl bg-sky-50/80 border border-sky-100/90 flex items-start gap-2.5 max-w-xl">
            <div className="p-1 rounded-lg bg-white text-orange-500 shadow-xs mt-0.5">
              <Flame className="w-4 h-4 fill-orange-500 text-orange-500" />
            </div>
            <p className="text-sm sm:text-base font-semibold text-slate-800 tracking-tight">
              The Best Way To Predict The Future Is To Create It.
            </p>
          </div>

          {/* Description Paragraph */}
          <p className="mt-4 text-sm sm:text-base text-slate-600 leading-relaxed max-w-xl">
            Smart View Labs (SVL) crafts ultra-high-definition 8K HDR 360° virtual tours, official Google Street View integration, and high-performance digital marketing solutions that elevate your brand presence and multiply footfall.
          </p>

          {/* Key Value Points */}
          <div className="mt-6 grid grid-cols-2 gap-2.5 w-full max-w-lg">
            <div className="flex items-center gap-2 text-xs font-semibold text-slate-700">
              <CheckCircle2 className="w-4 h-4 text-sky-600 shrink-0" />
              <span>Official Google Street View</span>
            </div>
            <div className="flex items-center gap-2 text-xs font-semibold text-slate-700">
              <CheckCircle2 className="w-4 h-4 text-sky-600 shrink-0" />
              <span>8K HDR Panoramic Capture</span>
            </div>
            <div className="flex items-center gap-2 text-xs font-semibold text-slate-700">
              <CheckCircle2 className="w-4 h-4 text-sky-600 shrink-0" />
              <span>Interactive VR Hotspots</span>
            </div>
            <div className="flex items-center gap-2 text-xs font-semibold text-slate-700">
              <CheckCircle2 className="w-4 h-4 text-sky-600 shrink-0" />
              <span>Turnkey Digital Marketing</span>
            </div>
          </div>

          {/* CTAs: Glass Shine + Neon Border */}
          <div className="mt-8 flex flex-wrap items-center gap-3.5 w-full sm:w-auto">
            <button
              id="cta-explore-portfolio"
              onClick={() => onNavigate('portfolio')}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-gradient-to-r from-sky-600 to-cyan-600 text-white font-bold text-sm shadow-lg shadow-sky-500/25 hover:shadow-sky-500/40 hover:scale-105 transition-all duration-200 glass-button-shine"
            >
              <span>Explore 360° Portfolio</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <button
              id="cta-estimate-cost"
              onClick={() => onNavigate('pricing')}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-white/90 hover:bg-white text-sky-700 hover:text-sky-800 font-bold text-sm border-2 border-sky-400/80 shadow-sm hover:shadow-md transition-all duration-200 hover:scale-105"
            >
              <Calculator className="w-4 h-4 text-sky-600" />
              <span>Estimate Cost</span>
            </button>
          </div>

          {/* Certification Trust Line */}
          <div className="mt-6 flex items-center gap-4 text-xs text-slate-500">
            <div className="flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-emerald-600" />
              <span className="font-semibold text-slate-700">100% Certified Agency</span>
            </div>
            <span>•</span>
            <div className="flex items-center gap-1.5">
              <Sparkles className="w-4 h-4 text-amber-500" />
              <span className="font-semibold text-slate-700">Zero Recurring Hosting Fee</span>
            </div>
          </div>

        </div>

        {/* Right Column: Interactive 360 VR Simulator Hero Card */}
        <div className="lg:col-span-6 w-full flex flex-col items-center">
          
          <div className="w-full relative glass-panel-glow p-2.5 sm:p-3 rounded-3xl">
            {/* Top Scene Switcher Pill Tabs */}
            <div className="mb-2 flex items-center justify-between gap-2 px-1">
              <div className="flex items-center gap-1.5 overflow-x-auto py-1 max-w-full">
                {PORTFOLIO_DATA.slice(0, 3).map((item, idx) => (
                  <button
                    key={item.id}
                    id={`hero-tab-${item.id}`}
                    onClick={() => setSelectedHeroTourIndex(idx)}
                    className={`px-3 py-1 rounded-full text-xs font-semibold whitespace-nowrap transition-all ${
                      selectedHeroTourIndex === idx
                        ? 'bg-sky-600 text-white shadow-xs'
                        : 'bg-white/70 text-slate-700 hover:bg-white'
                    }`}
                  >
                    {item.title.split(' ')[1] || item.category}
                  </button>
                ))}
              </div>

              <div className="hidden sm:flex items-center gap-1 text-[11px] font-bold text-sky-700 bg-sky-50 px-2 py-0.5 rounded-md">
                <span>Drag to Rotate</span>
              </div>
            </div>

            {/* Embedded Interactive 360 Simulator */}
            <Panorama360Viewer item={heroItem} />

            {/* Quick Tour Info Strip */}
            <div className="mt-2.5 px-3 py-2 rounded-2xl bg-white/70 backdrop-blur-md flex items-center justify-between border border-white/80">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-emerald-500" />
                <span className="text-xs font-bold text-slate-800">{heroItem.title}</span>
              </div>
              <span className="text-[11px] font-medium text-slate-500">{heroItem.location}</span>
            </div>
          </div>

        </div>

      </div>

      {/* Agency Stats Bar */}
      <div className="max-w-7xl mx-auto w-full mt-14 pt-8 border-t border-sky-100/80">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {AGENCY_STATS.map((stat, i) => (
            <div
              key={i}
              className="glass-panel p-4 rounded-2xl flex flex-col items-center sm:items-start text-center sm:text-left transition-all hover:scale-[1.02]"
            >
              <span className="text-2xl sm:text-3xl font-extrabold font-heading text-sky-700">
                {stat.value}
                <span className="text-sm font-semibold text-slate-500 ml-1">{stat.suffix}</span>
              </span>
              <span className="text-xs font-semibold text-slate-600 mt-1">{stat.label}</span>
            </div>
          ))}
        </div>
      </div>

    </section>
  );
};
