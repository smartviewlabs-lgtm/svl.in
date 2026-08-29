import React, { useState } from 'react';
import { 
  Sparkles, 
  Eye, 
  MapPin, 
  Maximize2, 
  ArrowUpRight, 
  Compass, 
  CheckCircle, 
  Play, 
  X,
  MessageSquare
} from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/contentData';
import { PortfolioItem } from '../types';
import { Panorama360Viewer } from './Panorama360Viewer';

export const PortfolioSection: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [activeModalTour, setActiveModalTour] = useState<PortfolioItem | null>(null);

  const categories = ['All', 'Hospitality', 'Real Estate', 'Corporate', 'Automotive', 'Healthcare'];

  const filteredItems = selectedCategory === 'All' 
    ? PORTFOLIO_DATA 
    : PORTFOLIO_DATA.filter((item) => item.category === selectedCategory);

  return (
    <section id="portfolio" className="relative py-16 sm:py-20 px-4 sm:px-6 lg:px-8">
      
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/90 border border-sky-200 text-sky-800 text-xs font-bold shadow-sm mb-3">
            <Compass className="w-3.5 h-3.5 text-sky-600 animate-spin" style={{ animationDuration: '10s' }} />
            <span>Interactive 360° Showcase</span>
          </div>

          <h2 className="font-heading font-extrabold text-2xl sm:text-3xl md:text-4xl text-slate-900 tracking-tight">
            Featured 360° Virtual Reality{' '}
            <span className="bg-gradient-to-r from-sky-600 to-cyan-600 bg-clip-text text-transparent">
              Showcases
            </span>
          </h2>

          {/* Motivational Motto */}
          <div className="mt-3 inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-sky-50 border border-sky-100 text-sky-800 text-xs sm:text-sm font-semibold">
            <Sparkles className="w-4 h-4 text-amber-500 fill-amber-400" />
            <span>Don't Just Show, Let Them Experience.</span>
          </div>

          <p className="mt-3 text-sm text-slate-600 max-w-2xl mx-auto">
            Click on any project to launch the live interactive 360° panorama player with real-time spatial navigation and embedded hotspots.
          </p>
        </div>

        {/* Category Filter Tabs */}
        <div className="flex items-center justify-center gap-2 flex-wrap mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              id={`filter-btn-${cat.toLowerCase().replace(/\s+/g, '-')}`}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-full text-xs font-bold transition-all duration-200 ${
                selectedCategory === cat
                  ? 'bg-sky-600 text-white shadow-md shadow-sky-500/25 scale-105'
                  : 'bg-white/80 text-slate-700 hover:bg-white hover:text-sky-600 border border-sky-100'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Portfolio Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              id={`portfolio-card-${item.id}`}
              className="glass-panel glass-card-hover rounded-3xl overflow-hidden flex flex-col justify-between group"
            >
              {/* Thumbnail Container with 360 Overlay Trigger */}
              <div className="relative h-56 w-full overflow-hidden bg-slate-900">
                <img
                  src={item.thumbnail}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-90"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent" />

                {/* Top Badge Overlay */}
                <div className="absolute top-3 left-3 right-3 flex items-center justify-between pointer-events-none">
                  <span className="px-2.5 py-1 rounded-full text-[10px] font-extrabold bg-white/90 backdrop-blur-md text-sky-800 border border-white/80 shadow-xs uppercase tracking-wide">
                    {item.category}
                  </span>
                  <span className="px-2.5 py-1 rounded-full text-[10px] font-bold bg-slate-900/80 backdrop-blur-md text-cyan-300 border border-cyan-500/30">
                    {item.resolution}
                  </span>
                </div>

                {/* Center Launch 360 CTA Button */}
                <button
                  id={`launch-360-btn-${item.id}`}
                  onClick={() => setActiveModalTour(item)}
                  className="absolute inset-0 m-auto w-14 h-14 rounded-full bg-sky-600/90 text-white flex items-center justify-center shadow-xl backdrop-blur-md border-2 border-white hover:scale-110 hover:bg-sky-500 transition-all duration-300 group-hover:opacity-100 sm:opacity-90 cursor-pointer"
                  title="Launch 360 Virtual Tour"
                >
                  <Eye className="w-6 h-6 animate-pulse" />
                </button>

                {/* Bottom View count & Location */}
                <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-[11px] text-white/90">
                  <div className="flex items-center gap-1">
                    <MapPin className="w-3.5 h-3.5 text-cyan-400" />
                    <span>{item.location}</span>
                  </div>
                  <div className="flex items-center gap-1 font-semibold text-cyan-200">
                    <span>{item.viewsCount} Views</span>
                  </div>
                </div>
              </div>

              {/* Card Content Body */}
              <div className="p-5 sm:p-6 flex flex-col justify-between flex-1">
                <div>
                  <span className="text-[11px] font-bold text-sky-600 block mb-1">{item.client}</span>
                  <h3 className="font-heading font-bold text-base sm:text-lg text-slate-900 group-hover:text-sky-700 transition-colors leading-snug">
                    {item.title}
                  </h3>
                  <p className="text-xs text-slate-600 mt-2 line-clamp-2 leading-relaxed">
                    {item.description}
                  </p>

                  {/* Hotspots Tag Pills */}
                  <div className="flex flex-wrap gap-1.5 mt-3.5">
                    {item.tags.map((tag, idx) => (
                      <span
                        key={idx}
                        className="text-[10px] font-semibold text-slate-600 bg-sky-50/80 px-2 py-0.5 rounded-md border border-sky-100"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Card Action Buttons */}
                <div className="mt-5 pt-4 border-t border-slate-100 flex items-center justify-between gap-2">
                  <button
                    id={`open-360-experience-${item.id}`}
                    onClick={() => setActiveModalTour(item)}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-sky-700 hover:text-sky-800 transition"
                  >
                    <Eye className="w-3.5 h-3.5 text-sky-600" />
                    <span>Experience in 360°</span>
                  </button>

                  <a
                    href={`https://wa.me/917508094760?text=${encodeURIComponent(`Hello Smart View Labs! I love the 360 tour for "${item.title}". I want a similar 360 VR experience for my project.`)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-xl bg-emerald-50 text-emerald-700 hover:bg-emerald-100 transition border border-emerald-200"
                    title="Inquire about this tour on WhatsApp"
                  >
                    <MessageSquare className="w-3.5 h-3.5" />
                  </a>
                </div>

              </div>

            </div>
          ))}
        </div>

      </div>

      {/* Interactive 360 Modal Overlay */}
      {activeModalTour && (
        <div
          id="modal-360-backdrop"
          className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-md p-4 sm:p-6 lg:p-8 flex items-center justify-center animate-in fade-in duration-200"
          onClick={() => setActiveModalTour(null)}
        >
          <div
            id="modal-360-content"
            className="w-full max-w-5xl bg-white rounded-3xl overflow-hidden shadow-2xl border border-sky-200 flex flex-col max-h-[95vh]"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Top Details */}
            <div className="p-4 sm:p-5 bg-white border-b border-slate-100 flex items-center justify-between gap-3">
              <div>
                <div className="flex items-center gap-2">
                  <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-sky-100 text-sky-800 uppercase">
                    {activeModalTour.category}
                  </span>
                  <span className="text-xs text-slate-500 font-medium">{activeModalTour.location}</span>
                </div>
                <h3 className="font-heading font-bold text-lg sm:text-xl text-slate-900 mt-0.5">
                  {activeModalTour.title}
                </h3>
              </div>

              <div className="flex items-center gap-2">
                <a
                  href={`https://wa.me/917508094760?text=${encodeURIComponent(`Hello Smart View Labs! I am viewing "${activeModalTour.title}" in 360 and would like to get a quote.`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hidden sm:inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-emerald-600 text-white text-xs font-bold shadow-sm"
                >
                  <MessageSquare className="w-3.5 h-3.5" />
                  <span>Inquire on WhatsApp</span>
                </a>

                <button
                  id="close-modal-360-btn"
                  onClick={() => setActiveModalTour(null)}
                  className="p-2 rounded-full hover:bg-slate-100 text-slate-600 hover:text-slate-900 transition"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Embedded 360 Viewer */}
            <div className="p-3 sm:p-4 bg-slate-950 flex-1">
              <Panorama360Viewer item={activeModalTour} isModal onClose={() => setActiveModalTour(null)} />
            </div>

            {/* Modal Bottom Hotspots & Features */}
            <div className="p-4 bg-slate-50 border-t border-slate-200 flex flex-wrap items-center justify-between gap-3 text-xs">
              <div className="flex items-center gap-2 text-slate-600">
                <span className="font-bold text-slate-800">Key Features:</span>
                <span>{activeModalTour.tags.join(' • ')}</span>
              </div>

              <a
                href="https://wa.me/917508094760?text=Hello%20Smart%20View%20Labs!%20I%20want%20a%20full%20custom%20360%20tour."
                target="_blank"
                rel="noopener noreferrer"
                className="font-bold text-sky-700 hover:text-sky-800 hover:underline"
              >
                Book Your Custom 360° Shoot Today →
              </a>
            </div>

          </div>
        </div>
      )}

    </section>
  );
};
