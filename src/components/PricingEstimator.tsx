import React, { useState, useMemo } from 'react';
import { 
  Calculator, 
  Sparkles, 
  Check, 
  MessageSquare, 
  Zap, 
  ShieldCheck, 
  TrendingUp, 
  Layers, 
  Camera, 
  Globe, 
  ArrowRight,
  Info
} from 'lucide-react';
import { PricingState } from '../types';

export const PricingEstimator: React.FC = () => {
  const [pricingState, setPricingState] = useState<PricingState>({
    serviceType: 'tour',
    propertyArea: 2500, // sq ft
    nodesCount: 12, // 360 pano points
    includeDrone: true,
    include8KHDR: true,
    includeGoogleStreetView: true,
    includeInteractiveHotspots: true,
    includeVoiceover: false,
    includeSpeedOptimization: true,
    currency: 'INR'
  });

  const [copiedQuote, setCopiedQuote] = useState(false);

  // Exchange rate INR to USD roughly 1 USD = 83 INR
  const USD_RATE = 83;

  // Calculation Logic
  const calculation = useMemo(() => {
    let basePriceINR = 0;

    switch (pricingState.serviceType) {
      case 'tour':
        basePriceINR = 6999 + pricingState.nodesCount * 750;
        break;
      case 'web':
        basePriceINR = 18999 + Math.min(pricingState.propertyArea / 1000, 10) * 1200;
        break;
      case 'vr':
        basePriceINR = 14999 + pricingState.nodesCount * 850;
        break;
      case 'combo':
        basePriceINR = 24999 + pricingState.nodesCount * 650 + (pricingState.propertyArea / 1000) * 800;
        break;
    }

    // Addons in INR
    let addonsTotalINR = 0;
    if (pricingState.include8KHDR) addonsTotalINR += 3500;
    if (pricingState.includeDrone) addonsTotalINR += 6000;
    if (pricingState.includeGoogleStreetView) addonsTotalINR += 3000;
    if (pricingState.includeInteractiveHotspots) addonsTotalINR += 2500;
    if (pricingState.includeVoiceover) addonsTotalINR += 3000;
    if (pricingState.includeSpeedOptimization) addonsTotalINR += 2000;

    const subtotalINR = basePriceINR + addonsTotalINR;
    // 15% agency package discount
    const discountINR = Math.round(subtotalINR * 0.15);
    const totalINR = subtotalINR - discountINR;

    const totalUSD = Math.round(totalINR / USD_RATE);
    const originalUSD = Math.round(subtotalINR / USD_RATE);

    return {
      subtotalINR,
      discountINR,
      totalINR,
      totalUSD,
      originalUSD
    };
  }, [pricingState]);

  const formatCurrency = (amountINR: number, amountUSD: number) => {
    if (pricingState.currency === 'USD') {
      return `$${amountUSD.toLocaleString()}`;
    }
    return `₹${amountINR.toLocaleString('en-IN')}`;
  };

  const getServiceTypeName = () => {
    switch (pricingState.serviceType) {
      case 'tour': return '360° Virtual Tour & Matterport';
      case 'web': return 'High-Performance Web Portal';
      case 'vr': return 'Bespoke VR Setup & Walkthrough';
      case 'combo': return 'All-in-One VR + Web + Marketing Combo';
    }
  };

  const generateWhatsAppEstimatorMessage = () => {
    const serviceName = getServiceTypeName();
    const formattedPrice = formatCurrency(calculation.totalINR, calculation.totalUSD);
    
    const addonsList: string[] = [];
    if (pricingState.include8KHDR) addonsList.push('8K HDR Multi-bracket Photography');
    if (pricingState.includeDrone) addonsList.push('360° Aerial Drone Panoramas');
    if (pricingState.includeGoogleStreetView) addonsList.push('Google Street View Sync & Verification');
    if (pricingState.includeInteractiveHotspots) addonsList.push('Interactive Clickable Hotspots');
    if (pricingState.includeVoiceover) addonsList.push('Professional Voiceover & Audio');
    if (pricingState.includeSpeedOptimization) addonsList.push('Fast CDN Hosting & Speed Optimization');

    const message = `Hello Smart View Labs! I generated an instant estimate for my project:

🛠️ Service Package: ${serviceName}
📐 Property Area: ~${pricingState.propertyArea.toLocaleString()} sq ft
📍 360° Panoramas / Nodes: ${pricingState.nodesCount} Points
✨ Selected Addons: ${addonsList.length > 0 ? addonsList.join(', ') : 'Standard Setup'}
💰 Estimated Cost: ${formattedPrice} (Includes 15% Package Savings)

Please review and connect with me for a site visit/consultation.`;

    return `https://wa.me/917508094760?text=${encodeURIComponent(message)}`;
  };

  return (
    <section id="pricing" className="relative py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-transparent via-sky-50/50 to-transparent">
      
      {/* Decorative Blur Spheres */}
      <div className="absolute top-1/4 right-5 w-72 h-72 bg-sky-200/40 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute bottom-10 left-5 w-80 h-80 bg-cyan-200/30 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-6xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/90 border border-sky-200 text-sky-800 text-xs font-bold shadow-sm mb-3">
            <Calculator className="w-3.5 h-3.5 text-sky-600" />
            <span>Transparent Instant Quote</span>
          </div>

          <h2 className="font-heading font-extrabold text-2xl sm:text-3xl md:text-4xl text-slate-900 tracking-tight">
            Interactive Project{' '}
            <span className="bg-gradient-to-r from-sky-600 to-cyan-600 bg-clip-text text-transparent">
              Pricing Estimator
            </span>
          </h2>

          {/* Motivational Tag */}
          <div className="mt-3 inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-sky-50 border border-sky-100 text-sky-800 text-xs sm:text-sm font-semibold">
            <TrendingUp className="w-4 h-4 text-emerald-600" />
            <span>📈 Invest In Innovation, Harvest Exceptional Growth.</span>
          </div>

          <p className="mt-3 text-sm text-slate-600">
            Customize your project parameters, select premium add-ons, and get a real-time transparent estimate with zero hidden surprises.
          </p>
        </div>

        {/* Main Estimator Glass Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Form Controls (7 cols) */}
          <div className="lg:col-span-7 glass-panel rounded-3xl p-6 sm:p-8 space-y-6">
            
            {/* 1. Service Type Selector */}
            <div>
              <label className="block text-xs font-bold text-slate-800 uppercase tracking-wider mb-2.5">
                1. Select Primary Service
              </label>
              <div className="grid grid-cols-2 gap-2.5">
                {[
                  { id: 'tour', label: '360° Virtual Tour', sub: 'Matterport & GSV' },
                  { id: 'web', label: 'Web & 3D Portal', sub: 'High Speed Website' },
                  { id: 'vr', label: 'Custom VR Setup', sub: 'Interactive Walkthrough' },
                  { id: 'combo', label: 'Full Agency Combo', sub: '360 + Web + Marketing', badge: 'Popular' }
                ].map((type) => (
                  <button
                    key={type.id}
                    id={`pricing-type-${type.id}`}
                    type="button"
                    onClick={() => setPricingState({ ...pricingState, serviceType: type.id as any })}
                    className={`relative p-3 rounded-2xl text-left transition-all border ${
                      pricingState.serviceType === type.id
                        ? 'bg-sky-50/90 border-sky-500 shadow-sm text-sky-900 ring-1 ring-sky-400'
                        : 'bg-white/80 border-slate-200 text-slate-700 hover:bg-white hover:border-sky-200'
                    }`}
                  >
                    {type.badge && (
                      <span className="absolute top-2 right-2 text-[9px] font-extrabold bg-sky-600 text-white px-1.5 py-0.5 rounded-full">
                        {type.badge}
                      </span>
                    )}
                    <span className="block text-xs font-bold font-heading">{type.label}</span>
                    <span className="block text-[10px] text-slate-500 mt-0.5">{type.sub}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* 2. Property Area Slider */}
            <div>
              <div className="flex items-center justify-between mb-2">
                <label className="text-xs font-bold text-slate-800 uppercase tracking-wider">
                  2. Approximate Property Area (Sq Ft)
                </label>
                <span className="text-xs font-extrabold font-heading text-sky-700 bg-sky-50 px-2 py-0.5 rounded-md">
                  {pricingState.propertyArea.toLocaleString()} Sq Ft
                </span>
              </div>
              <input
                id="slider-property-area"
                type="range"
                min="500"
                max="30000"
                step="500"
                value={pricingState.propertyArea}
                onChange={(e) => setPricingState({ ...pricingState, propertyArea: Number(e.target.value) })}
                className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-sky-600"
              />
              <div className="flex justify-between text-[10px] text-slate-500 mt-1">
                <span>500 sq ft</span>
                <span>15,000 sq ft</span>
                <span>30,000+ sq ft</span>
              </div>
            </div>

            {/* 3. Panoramas / Nodes Count Slider */}
            <div>
              <div className="flex items-center justify-between mb-2">
                <label className="text-xs font-bold text-slate-800 uppercase tracking-wider">
                  3. Number of 360° Panorama Viewpoints
                </label>
                <span className="text-xs font-extrabold font-heading text-sky-700 bg-sky-50 px-2 py-0.5 rounded-md">
                  {pricingState.nodesCount} Viewpoints
                </span>
              </div>
              <input
                id="slider-nodes-count"
                type="range"
                min="3"
                max="60"
                step="1"
                value={pricingState.nodesCount}
                onChange={(e) => setPricingState({ ...pricingState, nodesCount: Number(e.target.value) })}
                className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-sky-600"
              />
              <div className="flex justify-between text-[10px] text-slate-500 mt-1">
                <span>3 (Compact Studio)</span>
                <span>25 (Hotel / Showroom)</span>
                <span>60+ (Resort / Campus)</span>
              </div>
            </div>

            {/* 4. Add-on Checkboxes */}
            <div>
              <label className="block text-xs font-bold text-slate-800 uppercase tracking-wider mb-2.5">
                4. Select Enhancements & Add-ons
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {[
                  { key: 'include8KHDR', label: '8K HDR Exposure Bracketing', priceINR: '+₹3,500' },
                  { key: 'includeDrone', label: 'Drone 360° Aerial Views', priceINR: '+₹6,000' },
                  { key: 'includeGoogleStreetView', label: 'Google Street View Sync', priceINR: '+₹3,000' },
                  { key: 'includeInteractiveHotspots', label: 'Interactive VR Hotspots', priceINR: '+₹2,500' },
                  { key: 'includeVoiceover', label: 'Spatial Audio & Voiceover', priceINR: '+₹3,000' },
                  { key: 'includeSpeedOptimization', label: 'Ultra-Fast Cloud Hosting', priceINR: '+₹2,000' }
                ].map((addon) => {
                  const isChecked = (pricingState as any)[addon.key];
                  return (
                    <label
                      key={addon.key}
                      className={`flex items-center justify-between p-2.5 rounded-xl border cursor-pointer transition-all ${
                        isChecked 
                          ? 'bg-sky-50/80 border-sky-300 text-sky-900' 
                          : 'bg-white/60 border-slate-200 text-slate-700 hover:bg-white'
                      }`}
                    >
                      <div className="flex items-center gap-2">
                        <input
                          type="checkbox"
                          checked={isChecked}
                          onChange={(e) => setPricingState({ ...pricingState, [addon.key]: e.target.checked })}
                          className="w-4 h-4 text-sky-600 rounded border-slate-300 focus:ring-sky-500 cursor-pointer"
                        />
                        <span className="text-xs font-semibold">{addon.label}</span>
                      </div>
                      <span className="text-[11px] font-bold text-slate-500">{addon.priceINR}</span>
                    </label>
                  );
                })}
              </div>
            </div>

          </div>

          {/* Right Column: Quote Summary Glass Card (5 cols) */}
          <div className="lg:col-span-5 glass-panel-glow rounded-3xl p-6 sm:p-8 space-y-6 relative overflow-hidden">
            
            {/* Top Currency Switcher */}
            <div className="flex items-center justify-between pb-4 border-b border-sky-100">
              <div>
                <span className="text-xs font-bold text-slate-800 uppercase tracking-wider">Estimated Investment</span>
                <p className="text-[11px] text-slate-500">Includes complete shoot, editing & publishing</p>
              </div>

              {/* Currency Toggle */}
              <div className="flex items-center p-0.5 rounded-full bg-slate-100 border border-slate-200">
                <button
                  type="button"
                  onClick={() => setPricingState({ ...pricingState, currency: 'INR' })}
                  className={`px-2.5 py-1 rounded-full text-xs font-bold transition-all ${
                    pricingState.currency === 'INR' ? 'bg-sky-600 text-white shadow-xs' : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  ₹ INR
                </button>
                <button
                  type="button"
                  onClick={() => setPricingState({ ...pricingState, currency: 'USD' })}
                  className={`px-2.5 py-1 rounded-full text-xs font-bold transition-all ${
                    pricingState.currency === 'USD' ? 'bg-sky-600 text-white shadow-xs' : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  $ USD
                </button>
              </div>
            </div>

            {/* Price Display */}
            <div className="bg-white/80 backdrop-blur-md p-5 rounded-2xl border border-sky-100 shadow-sm text-center">
              <span className="text-xs font-semibold text-slate-500 line-through">
                Original: {formatCurrency(calculation.subtotalINR, calculation.originalUSD)}
              </span>

              <div className="flex items-center justify-center gap-2 mt-1">
                <span className="text-3xl sm:text-4xl font-extrabold font-heading text-slate-900">
                  {formatCurrency(calculation.totalINR, calculation.totalUSD)}
                </span>
                <span className="px-2 py-0.5 rounded-full text-[10px] font-extrabold bg-emerald-100 text-emerald-700">
                  Save 15%
                </span>
              </div>

              <span className="block text-[11px] text-emerald-700 font-semibold mt-1">
                ✓ No Monthly Recurring Software License Fees
              </span>
            </div>

            {/* Package Summary Highlights */}
            <div className="space-y-2 text-xs text-slate-700">
              <div className="flex justify-between py-1 border-b border-slate-100">
                <span className="text-slate-500">Service:</span>
                <span className="font-semibold">{getServiceTypeName()}</span>
              </div>
              <div className="flex justify-between py-1 border-b border-slate-100">
                <span className="text-slate-500">Coverage:</span>
                <span className="font-semibold">{pricingState.nodesCount} Panos (~{pricingState.propertyArea} sq ft)</span>
              </div>
              <div className="flex justify-between py-1 border-b border-slate-100">
                <span className="text-slate-500">Turnaround Time:</span>
                <span className="font-semibold text-sky-700">48 - 72 Hours</span>
              </div>
              <div className="flex justify-between py-1 border-b border-slate-100">
                <span className="text-slate-500">Google Verification:</span>
                <span className="font-semibold text-emerald-600">Guaranteed Included</span>
              </div>
            </div>

            {/* WhatsApp Direct Action Button */}
            <a
              id="btn-book-whatsapp-quote"
              href={generateWhatsAppEstimatorMessage()}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-2 py-3.5 px-4 rounded-2xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm shadow-lg shadow-emerald-500/25 transition-all hover:scale-105 glass-button-shine"
            >
              <MessageSquare className="w-4 h-4" />
              <span>Book This Package on WhatsApp 💬</span>
            </a>

            {/* Trust Assurance */}
            <div className="flex items-center justify-center gap-2 text-center text-[11px] text-slate-500">
              <ShieldCheck className="w-3.5 h-3.5 text-sky-600 shrink-0" />
              <span>100% Free Consultation & On-Site Estimate</span>
            </div>

          </div>

        </div>

      </div>

    </section>
  );
};
