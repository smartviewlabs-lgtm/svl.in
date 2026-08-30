import React from 'react';
import { 
  Compass, 
  Award, 
  ShieldCheck, 
  Phone, 
  Mail, 
  MapPin, 
  ArrowUpRight, 
  MessageSquare,
  Sparkles
} from 'lucide-react';

interface FooterProps {
  onNavigate: (sectionId: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  return (
    <footer className="relative bg-slate-900 text-slate-300 pt-16 pb-28 sm:pb-20 px-4 sm:px-6 lg:px-8 border-t border-sky-900/50 overflow-hidden">
      
      {/* Background glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-32 bg-sky-500/10 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-12 pb-12 border-b border-slate-800">
        
        {/* Col 1: Brand & Bio (4 Cols) */}
        <div className="lg:col-span-4 space-y-4">
          <div className="flex items-center gap-3">
            <div className="w-11 h-11 rounded-xl p-0.5 shadow-md flex items-center justify-center shrink-0">
              <img 
                src="/images/logo.svg" 
                alt="Smart View Labs Logo" 
                className="w-full h-full object-contain" 
              />
            </div>
            <div>
              <div className="flex items-center gap-1.5">
                <h3 className="font-heading font-extrabold text-lg text-white">Smart View Labs</h3>
                <span className="px-1.5 py-0.2 text-[9px] font-extrabold text-sky-400 bg-sky-950/80 rounded border border-sky-800 uppercase tracking-wider">
                  SVL
                </span>
              </div>
              <p className="text-xs text-sky-400 font-medium">360° VR & Digital Marketing Agency</p>
            </div>
          </div>

          <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
            Smart View Labs (SVL) is a premier immersive media agency led by certified Google Trusted Photographers. We create transformative 8K HDR 360° virtual tours and high-converting performance marketing funnels.
          </p>

          <div className="flex items-center gap-2 p-3 rounded-2xl bg-slate-800/80 border border-slate-700/60 text-xs">
            <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
            <span className="text-slate-300 font-medium">Official Google Trusted Agency Accreditation</span>
          </div>
        </div>

        {/* Col 2: Quick Links (2 Cols) */}
        <div className="lg:col-span-2 space-y-3">
          <h4 className="font-heading font-bold text-white text-sm uppercase tracking-wider">
            Navigation
          </h4>
          <ul className="space-y-2 text-xs">
            {['hero', 'services', 'portfolio', 'academy', 'pricing', 'reviews', 'contact'].map((id) => (
              <li key={id}>
                <button
                  onClick={() => onNavigate(id)}
                  className="text-slate-400 hover:text-cyan-300 transition capitalize"
                >
                  {id === 'hero' ? 'Home' : id.replace('-', ' ')}
                </button>
              </li>
            ))}
          </ul>
        </div>

        {/* Col 3: Services (3 Cols) */}
        <div className="lg:col-span-3 space-y-3">
          <h4 className="font-heading font-bold text-white text-sm uppercase tracking-wider">
            Solutions
          </h4>
          <ul className="space-y-2 text-xs text-slate-400">
            <li>• Matterport 3D Pro3 Capture</li>
            <li>• Google Street View 360° Verification</li>
            <li>• Drone 360° Aerial Photography</li>
            <li>• Interactive WebVR Portals</li>
            <li>• Local SEO & Business Profile Growth</li>
            <li>• SVL Academy Masterclasses</li>
          </ul>
        </div>

        {/* Col 4: Contact & Direct Actions (3 Cols) */}
        <div className="lg:col-span-3 space-y-3">
          <h4 className="font-heading font-bold text-white text-sm uppercase tracking-wider">
            Direct Contact
          </h4>
          <div className="space-y-2.5 text-xs text-slate-400">
            <a
              href="tel:+917508094760"
              className="flex items-center gap-2 text-slate-300 hover:text-cyan-300 transition"
            >
              <Phone className="w-3.5 h-3.5 text-cyan-400" />
              <span>+91 75080-94760</span>
            </a>

            <a
              href="mailto:smartviewlabs@gmail.com"
              className="flex items-center gap-2 text-slate-300 hover:text-cyan-300 transition"
            >
              <Mail className="w-3.5 h-3.5 text-indigo-400" />
              <span>smartviewlabs@gmail.com</span>
            </a>

            <div className="flex items-center gap-2 text-slate-300">
              <MapPin className="w-3.5 h-3.5 text-rose-400" />
              <span>India (Serving Nationwide & Global)</span>
            </div>

            <a
              href="https://wa.me/917508094760?text=Hello%20Smart%20View%20Labs!"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-3 inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs shadow-md transition"
            >
              <MessageSquare className="w-3.5 h-3.5" />
              <span>Instant WhatsApp Chat</span>
            </a>
          </div>
        </div>

      </div>

      {/* Bottom Bar */}
      <div className="max-w-7xl mx-auto mt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
        <p>© {new Date().getFullYear()} Smart View Labs (SVL). All Rights Reserved. Google Street View Trusted Agency.</p>
        <div className="flex items-center gap-4">
          <span className="hover:text-slate-300 cursor-pointer">Privacy Policy</span>
          <span>•</span>
          <span className="hover:text-slate-300 cursor-pointer">Terms of Service</span>
          <span>•</span>
          <span className="text-cyan-400 font-semibold">Fastest Turnaround Guarantee</span>
        </div>
      </div>

    </footer>
  );
};
