import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { HeroSection } from './components/HeroSection';
import { ServicesSection } from './components/ServicesSection';
import { PortfolioSection } from './components/PortfolioSection';
import { PricingEstimator } from './components/PricingEstimator';
import { AcademySection } from './components/AcademySection';
import { ReviewsSection } from './components/ReviewsSection';
import { ContactWhatsAppSection } from './components/ContactWhatsAppSection';
import { FloatingActions } from './components/FloatingActions';
import { Footer } from './components/Footer';

export default function App() {
  const [activeSection, setActiveSection] = useState('hero');

  // Track active section on scroll
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['hero', 'services', 'portfolio', 'pricing', 'academy', 'reviews', 'contact'];
      const scrollPosition = window.scrollY + 200;

      for (const sectionId of sections) {
        const element = document.getElementById(sectionId);
        if (element) {
          const top = element.offsetTop;
          const height = element.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavigate = (sectionId: string) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      if (sectionId === 'hero') {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else {
        const headerOffset = 88;
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    }
  };

  const handleSelectServiceForEstimate = (serviceId: string) => {
    handleNavigate('pricing');
  };

  return (
    <div className="min-h-screen bg-[#F4F8FC] text-slate-800 flex flex-col relative overflow-x-hidden selection:bg-sky-500/20 selection:text-sky-900">
      
      {/* Dynamic Ambient Background Elements */}
      <div className="fixed inset-0 pointer-events-none -z-10 overflow-hidden">
        {/* Subtle decorative mesh gradients */}
        <div className="absolute -top-40 -left-40 w-[600px] h-[600px] bg-sky-200/30 rounded-full blur-[120px]" />
        <div className="absolute top-1/3 -right-40 w-[650px] h-[650px] bg-cyan-200/25 rounded-full blur-[140px]" />
        <div className="absolute bottom-1/4 -left-40 w-[550px] h-[550px] bg-blue-100/30 rounded-full blur-[130px]" />
      </div>

      {/* 1. Glassmorphic Fixed Header & Marquee Bar */}
      <Header activeSection={activeSection} onNavigate={handleNavigate} />

      {/* Main Content Sections (with top padding for fixed header) */}
      <main className="flex-1 flex flex-col pt-[84px] sm:pt-[92px]">
        
        {/* 2. Hero Section */}
        <HeroSection onNavigate={handleNavigate} />

        {/* 3. Services Section */}
        <ServicesSection onSelectServiceForEstimate={handleSelectServiceForEstimate} />

        {/* 4. 360° Portfolio Section */}
        <PortfolioSection />

        {/* 5. Interactive Pricing Estimator Section */}
        <PricingEstimator />

        {/* 6. Academy Section */}
        <AcademySection />

        {/* 7. Client Reviews Section */}
        <ReviewsSection />

        {/* 8. Dynamic WhatsApp Lead Form & Contact Section */}
        <ContactWhatsAppSection />

      </main>

      {/* 9. Footer */}
      <Footer onNavigate={handleNavigate} />

      {/* 10. Mobile-First Fixed Bottom Floating Actions */}
      <FloatingActions />

    </div>
  );
}
