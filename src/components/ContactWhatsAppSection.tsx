import React, { useState } from 'react';
import { 
  MessageSquare, 
  Send, 
  Phone, 
  Mail, 
  MapPin, 
  Award, 
  CheckCircle2, 
  Sparkles, 
  Clock, 
  ShieldCheck,
  Building,
  User,
  HelpCircle,
  ChevronDown
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { LeadFormData } from '../types';

export const ContactWhatsAppSection: React.FC = () => {
  const [formData, setFormData] = useState<LeadFormData>({
    fullName: '',
    phoneNumber: '',
    serviceRequired: '360° Virtual Tour & Matterport',
    propertyType: 'Hotel & Resort',
    estimatedBudget: 'Flexible / Standard Quote',
    message: '',
    preferredContact: 'WhatsApp'
  });

  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formError, setFormError] = useState('');
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const servicesList = [
    '360° Virtual Tour & Matterport',
    'Google Street View Setup & Verification',
    'Digital Marketing & Local SEO Growth',
    'Web Development & 3D Interactive Portal',
    'SVL Academy Training & Certification',
    'All-In-One VR & Marketing Combo'
  ];

  const propertyTypes = [
    'Hotel & Resort',
    'Real Estate / Villa / Penthouse',
    'Corporate Office / Coworking',
    'Showroom / Retail / Auto',
    'Hospital & Healthcare Clinic',
    'Restaurant & Cafe',
    'School / College / Campus',
    'Other Commercial Space'
  ];

  const budgetOptions = [
    '₹10,000 - ₹25,000 / $150 - $300',
    '₹25,000 - ₹50,000 / $300 - $600',
    '₹50,000 - ₹1,00,000 / $600 - $1,200',
    '₹1,00,000+ / $1,200+ (Enterprise Multi-Location)',
    'Flexible / Standard Quote'
  ];

  const faqs = [
    {
      q: 'How long does a 360° virtual tour shoot take?',
      a: 'A standard shoot for a 2,500 sq ft property usually takes 1.5 to 3 hours with our high-speed HDR equipment. Delivery of the processed, interactive 360° tour is completed within 48 to 72 hours.'
    },
    {
      q: 'Are there any recurring hosting fees?',
      a: 'No! Our Google Street View publishing has permanent lifetime hosting on Google Maps with zero monthly fees. For custom WebVR and Matterport tours, we provide direct embed codes and fast hosting packages.'
    },
    {
      q: 'What is the Google Trusted Photographer badge guarantee?',
      a: 'Our certified team connects verified panoramic blue lines directly inside Google Maps, adhering to all spatial metadata and nodal alignment requirements.'
    },
    {
      q: 'Can we integrate booking links, videos, and music into the tour?',
      a: 'Yes! We embed interactive media hotspots, direct booking engines, e-commerce checkout links, sound effects, and multilingual audio guides.'
    }
  ];

  const formatWhatsAppPayload = () => {
    const userMessage = formData.message.trim() 
      ? formData.message 
      : `Looking for ${formData.serviceRequired} for our ${formData.propertyType}. Budget: ${formData.estimatedBudget}.`;

    return `Hello Smart View Labs! New Inquiry:

👤 Name: ${formData.fullName || '[Not Provided]'}
📞 Phone: ${formData.phoneNumber || '[Not Provided]'}
🛠️ Service Selected: ${formData.serviceRequired}
💬 Requirement: ${userMessage}`;
  };

  const handleWhatsAppSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.fullName.trim()) {
      setFormError('Please enter your full name');
      return;
    }
    if (!formData.phoneNumber.trim() || formData.phoneNumber.length < 8) {
      setFormError('Please enter a valid phone or WhatsApp number');
      return;
    }

    setFormError('');
    setFormSubmitted(true);

    try {
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.6 }
      });
    } catch {}

    const textPayload = formatWhatsAppPayload();
    const waUrl = `https://wa.me/917508094760?text=${encodeURIComponent(textPayload)}`;

    // Open WhatsApp in new tab
    setTimeout(() => {
      window.open(waUrl, '_blank', 'noopener,noreferrer');
    }, 400);
  };

  return (
    <section id="contact" className="relative py-16 sm:py-20 px-4 sm:px-6 lg:px-8">
      
      {/* Background Soft Ambient Lights */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] bg-gradient-to-tr from-sky-200/40 via-cyan-100/30 to-transparent rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/90 border border-sky-200 text-sky-800 text-xs font-bold shadow-sm mb-3">
            <MessageSquare className="w-3.5 h-3.5 text-emerald-600" />
            <span>Fastest Response Within 15 Minutes</span>
          </div>

          <h2 className="font-heading font-extrabold text-2xl sm:text-3xl md:text-4xl text-slate-900 tracking-tight">
            Connect Directly with{' '}
            <span className="bg-gradient-to-r from-sky-600 to-cyan-600 bg-clip-text text-transparent">
              Smart View Labs
            </span>
          </h2>

          <p className="mt-3 text-sm sm:text-base text-slate-600 leading-relaxed">
            Fill in your project requirements below to launch an instant, pre-filled WhatsApp conversation directly with our Lead Google Trusted Photographer.
          </p>
        </div>

        {/* Contact Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Direct WhatsApp Lead Form (7 Cols) */}
          <div className="lg:col-span-7 glass-panel-glow rounded-3xl p-6 sm:p-8 relative">
            
            <div className="flex items-center justify-between pb-4 mb-6 border-b border-sky-100">
              <div className="flex items-center gap-2.5">
                <div className="w-9 h-9 rounded-xl bg-emerald-600 text-white flex items-center justify-center shadow-sm">
                  <MessageSquare className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-heading font-bold text-base sm:text-lg text-slate-900">
                    Direct WhatsApp Inquiry Engine
                  </h3>
                  <p className="text-[11px] text-slate-500">Auto-routes to +91 75080-94760</p>
                </div>
              </div>

              <span className="px-2.5 py-1 rounded-full text-[10px] font-extrabold bg-emerald-100 text-emerald-800">
                ● Live & Online
              </span>
            </div>

            {formError && (
              <div className="mb-4 p-3 rounded-xl bg-rose-50 border border-rose-200 text-rose-700 text-xs font-semibold">
                ⚠️ {formError}
              </div>
            )}

            <form onSubmit={handleWhatsAppSubmit} className="space-y-4">
              
              {/* Row 1: Name & Phone */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-800 uppercase tracking-wider mb-1.5">
                    Full Name *
                  </label>
                  <div className="relative">
                    <input
                      id="input-full-name"
                      type="text"
                      required
                      placeholder="e.g. Vikramaditya Sharma"
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      className="w-full pl-9 pr-3 py-2.5 rounded-xl bg-white/90 border border-slate-200 focus:border-sky-500 focus:ring-2 focus:ring-sky-200 text-xs sm:text-sm text-slate-800 transition"
                    />
                    <User className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-800 uppercase tracking-wider mb-1.5">
                    Phone / WhatsApp Number *
                  </label>
                  <div className="relative">
                    <input
                      id="input-phone-number"
                      type="tel"
                      required
                      placeholder="e.g. +91 98765 43210"
                      value={formData.phoneNumber}
                      onChange={(e) => setFormData({ ...formData, phoneNumber: e.target.value })}
                      className="w-full pl-9 pr-3 py-2.5 rounded-xl bg-white/90 border border-slate-200 focus:border-sky-500 focus:ring-2 focus:ring-sky-200 text-xs sm:text-sm text-slate-800 transition"
                    />
                    <Phone className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                  </div>
                </div>
              </div>

              {/* Row 2: Service Required & Property Type */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-800 uppercase tracking-wider mb-1.5">
                    Service Required *
                  </label>
                  <select
                    id="select-service-required"
                    value={formData.serviceRequired}
                    onChange={(e) => setFormData({ ...formData, serviceRequired: e.target.value })}
                    className="w-full px-3 py-2.5 rounded-xl bg-white/90 border border-slate-200 focus:border-sky-500 focus:ring-2 focus:ring-sky-200 text-xs sm:text-sm text-slate-800 transition"
                  >
                    {servicesList.map((srv) => (
                      <option key={srv} value={srv}>{srv}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-800 uppercase tracking-wider mb-1.5">
                    Property / Business Type
                  </label>
                  <select
                    id="select-property-type"
                    value={formData.propertyType}
                    onChange={(e) => setFormData({ ...formData, propertyType: e.target.value })}
                    className="w-full px-3 py-2.5 rounded-xl bg-white/90 border border-slate-200 focus:border-sky-500 focus:ring-2 focus:ring-sky-200 text-xs sm:text-sm text-slate-800 transition"
                  >
                    {propertyTypes.map((prop) => (
                      <option key={prop} value={prop}>{prop}</option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Budget Range */}
              <div>
                <label className="block text-xs font-bold text-slate-800 uppercase tracking-wider mb-1.5">
                  Estimated Budget Preference
                </label>
                <select
                  id="select-budget"
                  value={formData.estimatedBudget}
                  onChange={(e) => setFormData({ ...formData, estimatedBudget: e.target.value })}
                  className="w-full px-3 py-2.5 rounded-xl bg-white/90 border border-slate-200 focus:border-sky-500 focus:ring-2 focus:ring-sky-200 text-xs sm:text-sm text-slate-800 transition"
                >
                  {budgetOptions.map((b) => (
                    <option key={b} value={b}>{b}</option>
                  ))}
                </select>
              </div>

              {/* Message / Requirements */}
              <div>
                <label className="block text-xs font-bold text-slate-800 uppercase tracking-wider mb-1.5">
                  Requirement / Space Details (Optional)
                </label>
                <textarea
                  id="textarea-message"
                  rows={3}
                  placeholder="Share details such as location, number of rooms/floors, timeline, or specific features you desire..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full p-3 rounded-xl bg-white/90 border border-slate-200 focus:border-sky-500 focus:ring-2 focus:ring-sky-200 text-xs sm:text-sm text-slate-800 transition"
                />
              </div>

              {/* Live Preview Box of Exact WhatsApp Format */}
              <div className="p-3.5 rounded-2xl bg-emerald-50/70 border border-emerald-200/80 text-left">
                <span className="text-[10px] font-bold text-emerald-800 uppercase tracking-wider block mb-1">
                  💬 Live WhatsApp Message Format Preview:
                </span>
                <pre className="text-[11px] font-mono-tech text-emerald-950 whitespace-pre-wrap leading-relaxed">
                  {formatWhatsAppPayload()}
                </pre>
              </div>

              {/* Action Button */}
              <button
                id="btn-send-whatsapp-lead"
                type="submit"
                className="w-full flex items-center justify-center gap-2 py-4 px-6 rounded-2xl bg-emerald-600 hover:bg-emerald-700 text-white font-extrabold text-sm sm:text-base shadow-xl shadow-emerald-500/25 hover:shadow-emerald-500/40 transition-all hover:scale-[1.02] active:scale-[0.99] glass-button-shine"
              >
                <MessageSquare className="w-5 h-5 fill-white" />
                <span>Send Request on WhatsApp 💬</span>
              </button>

            </form>

          </div>

          {/* Right Column: Agency Credentials, Contact Cards & FAQ (5 Cols) */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Agency Contact Card */}
            <div className="glass-panel rounded-3xl p-6 space-y-4">
              <h3 className="font-heading font-bold text-slate-900 text-base flex items-center gap-2">
                <Award className="w-5 h-5 text-sky-600" />
                <span>Smart View Labs (SVL) HQ</span>
              </h3>

              <div className="space-y-3 text-xs sm:text-sm">
                <a
                  href="tel:+917508094760"
                  className="flex items-center gap-3 p-3 rounded-xl bg-white/70 hover:bg-white border border-slate-200 text-slate-800 transition group"
                >
                  <div className="w-8 h-8 rounded-lg bg-sky-100 text-sky-600 flex items-center justify-center shrink-0">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[10px] text-slate-500 block font-medium">Direct Hotline</span>
                    <span className="font-bold text-slate-900 group-hover:text-sky-600 transition-colors">
                      +91 75080-94760
                    </span>
                  </div>
                </a>

                <a
                  href="mailto:smartviewlabs@gmail.com"
                  className="flex items-center gap-3 p-3 rounded-xl bg-white/70 hover:bg-white border border-slate-200 text-slate-800 transition group"
                >
                  <div className="w-8 h-8 rounded-lg bg-indigo-100 text-indigo-600 flex items-center justify-center shrink-0">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[10px] text-slate-500 block font-medium">Official Inquiry Email</span>
                    <span className="font-bold text-slate-900 group-hover:text-indigo-600 transition-colors">
                      smartviewlabs@gmail.com
                    </span>
                  </div>
                </a>

                <div className="flex items-center gap-3 p-3 rounded-xl bg-white/70 border border-slate-200 text-slate-800">
                  <div className="w-8 h-8 rounded-lg bg-emerald-100 text-emerald-600 flex items-center justify-center shrink-0">
                    <ShieldCheck className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[10px] text-slate-500 block font-medium">Accreditation</span>
                    <span className="font-bold text-slate-900">
                      Google Trusted Photographer Agency
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Accordion FAQs */}
            <div className="glass-panel rounded-3xl p-6">
              <h4 className="font-heading font-bold text-slate-900 text-sm mb-3 flex items-center gap-1.5">
                <HelpCircle className="w-4 h-4 text-sky-600" />
                <span>Frequently Asked Questions</span>
              </h4>

              <div className="space-y-2">
                {faqs.map((faq, idx) => {
                  const isOpen = openFaq === idx;
                  return (
                    <div
                      key={idx}
                      className="border border-slate-200/80 rounded-xl overflow-hidden bg-white/60 transition"
                    >
                      <button
                        type="button"
                        onClick={() => setOpenFaq(isOpen ? null : idx)}
                        className="w-full p-3 text-left flex items-center justify-between gap-2 text-xs font-bold text-slate-800 hover:text-sky-700"
                      >
                        <span>{faq.q}</span>
                        <ChevronDown className={`w-4 h-4 text-slate-400 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
                      </button>
                      {isOpen && (
                        <div className="p-3 pt-0 text-xs text-slate-600 leading-relaxed border-t border-slate-100/80">
                          {faq.a}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>

          </div>

        </div>

      </div>

    </section>
  );
};
