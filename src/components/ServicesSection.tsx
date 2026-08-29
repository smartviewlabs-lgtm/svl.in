import React, { useState } from 'react';
import { 
  Compass, 
  MapPin, 
  TrendingUp, 
  Code, 
  Check, 
  ArrowRight, 
  MessageSquare, 
  Sparkles,
  Zap,
  ShieldCheck,
  ChevronRight
} from 'lucide-react';
import { SERVICES_DATA } from '../data/contentData';
import { ServiceItem } from '../types';

interface ServicesSectionProps {
  onSelectServiceForEstimate?: (serviceId: string) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onSelectServiceForEstimate }) => {
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);

  const getServiceIcon = (iconName: string) => {
    switch (iconName) {
      case 'Compass':
        return <Compass className="w-6 h-6 text-sky-600" />;
      case 'MapPin':
        return <MapPin className="w-6 h-6 text-emerald-600" />;
      case 'TrendingUp':
        return <TrendingUp className="w-6 h-6 text-indigo-600" />;
      case 'Code':
        return <Code className="w-6 h-6 text-cyan-600" />;
      default:
        return <Compass className="w-6 h-6 text-sky-600" />;
    }
  };

  const getWhatsAppServiceLink = (service: ServiceItem) => {
    const text = `Hello Smart View Labs! I would like to inquire about your "${service.title}" service (${service.startingPrice}). Please share more details.`;
    return `https://wa.me/917508094760?text=${encodeURIComponent(text)}`;
  };

  return (
    <section id="services" className="relative py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-transparent via-sky-50/40 to-transparent">
      
      {/* Decorative ambient orbs */}
      <div className="absolute top-1/3 left-0 w-80 h-80 bg-sky-200/30 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute bottom-10 right-0 w-80 h-80 bg-cyan-200/30 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/90 border border-sky-200 text-sky-800 text-xs font-bold shadow-sm mb-3">
            <Sparkles className="w-3.5 h-3.5 text-sky-600" />
            <span>Our Core Capabilities</span>
          </div>

          <h2 className="font-heading font-extrabold text-2xl sm:text-3xl md:text-4xl text-slate-900 tracking-tight">
            Cutting-Edge Solutions for{' '}
            <span className="bg-gradient-to-r from-sky-600 to-cyan-600 bg-clip-text text-transparent">
              Immersive Business Growth
            </span>
          </h2>

          <p className="mt-3 text-sm sm:text-base text-slate-600 leading-relaxed">
            From certified Google Street View integration to multi-platform 8K HDR Virtual Tours and high-converting performance marketing, we deliver end-to-end digital mastery.
          </p>
        </div>

        {/* Services Grid (4 Glass Cards) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {SERVICES_DATA.map((service) => (
            <div
              key={service.id}
              id={`service-card-${service.id}`}
              onMouseEnter={() => setHoveredCard(service.id)}
              onMouseLeave={() => setHoveredCard(null)}
              className="glass-panel glass-card-hover rounded-3xl p-6 sm:p-8 flex flex-col justify-between relative overflow-hidden group"
            >
              {/* Card Top Pill Badge */}
              <div className="flex items-center justify-between gap-3 mb-5">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-2xl bg-sky-50 border border-sky-100 flex items-center justify-center shadow-xs group-hover:scale-110 group-hover:bg-sky-100 transition-all duration-300">
                    {getServiceIcon(service.iconName)}
                  </div>
                  <div>
                    <span className="text-[11px] font-bold text-sky-600 uppercase tracking-wider block">
                      {service.category}
                    </span>
                    <h3 className="font-heading font-bold text-lg sm:text-xl text-slate-900 group-hover:text-sky-700 transition-colors">
                      {service.title}
                    </h3>
                  </div>
                </div>

                {service.badge && (
                  <span className="px-2.5 py-1 rounded-full text-[11px] font-extrabold bg-sky-100 text-sky-700 border border-sky-200/80 whitespace-nowrap shadow-xs">
                    {service.badge}
                  </span>
                )}
              </div>

              {/* Description */}
              <p className="text-sm text-slate-600 leading-relaxed mb-6">
                {service.description}
              </p>

              {/* Feature Checklist */}
              <div className="space-y-2.5 mb-6 pt-4 border-t border-slate-100/90">
                {service.features.map((feature, idx) => (
                  <div key={idx} className="flex items-start gap-2 text-xs sm:text-[13px] text-slate-700">
                    <div className="w-4 h-4 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0 mt-0.5 border border-emerald-200">
                      <Check className="w-2.5 h-2.5 stroke-[3]" />
                    </div>
                    <span>{feature}</span>
                  </div>
                ))}
              </div>

              {/* Card Bottom Pricing & Action */}
              <div className="pt-5 border-t border-slate-100 flex flex-wrap items-center justify-between gap-3">
                <div>
                  <span className="text-[11px] font-medium text-slate-500 block">Starting from</span>
                  <span className="text-base font-extrabold font-heading text-slate-900">
                    {service.startingPrice}
                  </span>
                </div>

                <div className="flex items-center gap-2">
                  <a
                    href={getWhatsAppServiceLink(service)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold shadow-sm hover:shadow-emerald-500/20 transition-all"
                  >
                    <MessageSquare className="w-3.5 h-3.5" />
                    <span>Inquire</span>
                  </a>

                  {onSelectServiceForEstimate && (
                    <button
                      onClick={() => onSelectServiceForEstimate(service.id)}
                      className="inline-flex items-center gap-1 px-3 py-2 rounded-xl bg-white hover:bg-sky-50 text-sky-700 text-xs font-bold border border-sky-200 transition-all"
                    >
                      <span>Estimate</span>
                      <ChevronRight className="w-3.5 h-3.5" />
                    </button>
                  )}
                </div>
              </div>

            </div>
          ))}
        </div>

        {/* Bottom Assurance Banner */}
        <div className="mt-10 p-5 rounded-2xl glass-panel-subtle flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-slate-900">Official Google Street View Publishing Guarantee</h4>
              <p className="text-xs text-slate-500">Every 360° point is checked and verified under Google Street View guidelines.</p>
            </div>
          </div>

          <a
            href="https://wa.me/917508094760?text=Hello%20Smart%20View%20Labs!%20I%20want%20to%20verify%20my%20Google%20Street%20View%20status."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-xs font-bold text-sky-700 hover:text-sky-800 hover:underline shrink-0"
          >
            <span>Consult Our Google Trusted Specialist</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </a>
        </div>

      </div>
    </section>
  );
};
