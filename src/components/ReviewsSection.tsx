import React from 'react';
import { 
  Star, 
  Quote, 
  CheckCircle2, 
  Sparkles, 
  ShieldCheck, 
  Building2 
} from 'lucide-react';
import { REVIEWS_DATA } from '../data/contentData';

export const ReviewsSection: React.FC = () => {
  return (
    <section id="reviews" className="relative py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-transparent via-sky-50/40 to-transparent">
      
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/90 border border-sky-200 text-sky-800 text-xs font-bold shadow-sm mb-3">
            <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-500" />
            <span>Verified Client Success</span>
          </div>

          <h2 className="font-heading font-extrabold text-2xl sm:text-3xl md:text-4xl text-slate-900 tracking-tight">
            Trusted by Industry Leaders &{' '}
            <span className="bg-gradient-to-r from-sky-600 to-cyan-600 bg-clip-text text-transparent">
              Visionary Brands
            </span>
          </h2>

          <p className="mt-3 text-sm sm:text-base text-slate-600 leading-relaxed">
            Read how our 360° VR solutions and digital marketing frameworks unlocked exponential footfall and high-ticket customer acquisitions.
          </p>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {REVIEWS_DATA.map((review) => (
            <div
              key={review.id}
              id={`review-card-${review.id}`}
              className="glass-panel glass-card-hover rounded-3xl p-6 sm:p-8 flex flex-col justify-between relative group"
            >
              <div>
                {/* Top Row: Stars + Google Verified Badge */}
                <div className="flex items-center justify-between gap-2 mb-4">
                  <div className="flex items-center gap-1">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>

                  {review.verifiedGoogle && (
                    <div className="flex items-center gap-1 px-2.5 py-1 rounded-full bg-emerald-50 text-emerald-700 text-[11px] font-bold border border-emerald-200">
                      <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                      <span>Verified Google Review</span>
                    </div>
                  )}
                </div>

                {/* Review Text */}
                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed italic relative">
                  "{review.text}"
                </p>

                {/* Service Tag */}
                <div className="mt-4 inline-block px-2.5 py-1 rounded-md bg-sky-50 text-[11px] font-semibold text-sky-700 border border-sky-100">
                  Service: {review.serviceUsed}
                </div>
              </div>

              {/* Reviewer Profile */}
              <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <img
                    src={review.avatar}
                    alt={review.name}
                    className="w-11 h-11 rounded-full object-cover border-2 border-sky-200 shadow-xs"
                    loading="lazy"
                  />
                  <div>
                    <h4 className="font-heading font-bold text-sm text-slate-900">{review.name}</h4>
                    <p className="text-[11px] text-slate-500">{review.role}, <span className="text-slate-700 font-medium">{review.company}</span></p>
                  </div>
                </div>

                <span className="text-[11px] text-slate-400 font-medium">{review.date}</span>
              </div>

            </div>
          ))}
        </div>

        {/* Google Ratings Summary Box */}
        <div className="mt-12 p-6 rounded-3xl bg-white/90 border border-sky-200/90 shadow-md flex flex-wrap items-center justify-between gap-4 max-w-4xl mx-auto">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-2xl bg-amber-50 border border-amber-200 text-amber-500 flex items-center justify-center font-extrabold text-xl font-heading shadow-xs">
              4.98
            </div>
            <div>
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                ))}
              </div>
              <p className="text-xs text-slate-600 font-semibold mt-0.5">
                Over 120+ 5-Star Reviews across Google Maps & Business Profiles
              </p>
            </div>
          </div>

          <a
            href="https://wa.me/917508094760?text=Hello%20Smart%20View%20Labs!%20I%20would%20like%20to%20view%20more%20case%20studies."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-sky-600 text-white text-xs font-bold shadow-sm hover:bg-sky-700 transition"
          >
            <span>Request Full Case Studies</span>
          </a>
        </div>

      </div>

    </section>
  );
};
