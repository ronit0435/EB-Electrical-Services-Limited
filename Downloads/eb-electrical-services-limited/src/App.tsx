import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { AboutSection } from './components/AboutSection';
import { ServicesSection } from './components/ServicesSection';
import { WhyChooseUs } from './components/WhyChooseUs';
import { ReviewsSection } from './components/ReviewsSection';
import { ServiceAreasSection } from './components/ServiceAreasSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { ElectricParticles } from './components/ElectricParticles';
import { EmergencyFloatingBar } from './components/EmergencyFloatingBar';
import { QuoteModal } from './components/QuoteModal';

export default function App() {
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);
  const [selectedServicePreset, setSelectedServicePreset] = useState<string | undefined>(undefined);

  const handleSelectService = (serviceName: string) => {
    setSelectedServicePreset(serviceName);
    // Smooth scroll down to contact section
    const contactEl = document.getElementById('contact');
    if (contactEl) {
      contactEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleOpenQuoteModal = (serviceName?: string) => {
    if (serviceName) setSelectedServicePreset(serviceName);
    setIsQuoteModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-[#0B1220] text-slate-100 relative selection:bg-[#00BFFF]/30 selection:text-white">
      {/* Background Floating Electrical Particles */}
      <ElectricParticles />

      {/* Sticky Glass Navbar */}
      <Navbar onOpenQuoteModal={() => handleOpenQuoteModal()} />

      {/* Main Website Sections */}
      <main className="relative z-10">
        {/* Hero Section with 3D Animated House Outline & Glass Content Box */}
        <Hero onQuoteClick={() => handleOpenQuoteModal()} />

        {/* About Section with Modern Glass Card Layout */}
        <AboutSection />

        {/* Services Section with 3D Service Cards & Hover Animations */}
        <ServicesSection onSelectService={handleSelectService} />

        {/* Why Choose Us with Animated Counters */}
        <WhyChooseUs />

        {/* Reviews Section with Floating Glass Review Cards */}
        <ReviewsSection />

        {/* Service Areas with Interactive London Map */}
        <ServiceAreasSection />

        {/* Contact Section with Glass Contact Form */}
        <ContactSection selectedServicePreset={selectedServicePreset} />
      </main>

      {/* Footer */}
      <Footer />

      {/* Mobile Sticky Quick Emergency Bar */}
      <EmergencyFloatingBar />

      {/* Quick Quote Interactive Modal */}
      <QuoteModal
        isOpen={isQuoteModalOpen}
        onClose={() => setIsQuoteModalOpen(false)}
        defaultService={selectedServicePreset}
      />
    </div>
  );
}
