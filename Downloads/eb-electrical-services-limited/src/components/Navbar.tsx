import React, { useState, useEffect } from 'react';
import { COMPANY_INFO } from '../data/electricalData';
import { Phone, Zap, Menu, X, Shield, Clock } from 'lucide-react';

interface NavbarProps {
  onOpenQuoteModal?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenQuoteModal }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      const sections = ['home', 'about', 'services', 'why-choose-us', 'reviews', 'service-areas', 'contact'];
      const scrollPosition = window.scrollY + 200;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
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

  const navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Services', href: '#services' },
    { label: 'Why Choose Us', href: '#why-choose-us' },
    { label: 'Reviews', href: '#reviews' },
    { label: 'Service Areas', href: '#service-areas' },
    { label: 'Contact', href: '#contact' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      id="main-navbar"
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#0B1220]/85 backdrop-blur-xl border-b border-[#00BFFF]/20 py-3 shadow-[0_10px_30px_rgba(0,0,0,0.5)]'
          : 'bg-[#0B1220]/40 backdrop-blur-md border-b border-white/5 py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-4">
          {/* Brand Logo */}
          <a
            href="#home"
            onClick={(e) => handleNavClick(e, '#home')}
            className="flex items-center gap-3 group focus:outline-none"
          >
            <div className="relative w-10 h-10 rounded-xl bg-gradient-to-br from-[#00BFFF] via-[#0284c7] to-[#0B1220] p-0.5 shadow-[0_0_15px_rgba(0,191,255,0.4)] group-hover:shadow-[0_0_22px_rgba(0,191,255,0.7)] transition-all">
              <div className="w-full h-full bg-[#0B1220] rounded-[10px] flex items-center justify-center">
                <Zap className="w-5 h-5 text-[#00BFFF] fill-[#00BFFF] group-hover:scale-110 transition-transform" />
              </div>
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-extrabold text-base sm:text-lg tracking-tight text-white font-heading">
                  EB Electrical
                </span>
                <span className="hidden sm:inline-block text-[10px] uppercase font-bold tracking-widest px-1.5 py-0.5 rounded bg-[#D4AF37]/20 text-[#D4AF37] border border-[#D4AF37]/40">
                  NICEIC
                </span>
              </div>
              <p className="text-[11px] text-slate-400 font-medium tracking-wide">
                Services Limited • London
              </p>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2 px-3 py-1.5 rounded-full bg-slate-900/60 border border-white/10 backdrop-blur-md">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.substring(1);
              return (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className={`px-3 py-1.5 rounded-full text-xs font-medium transition-all ${
                    isActive
                      ? 'bg-[#00BFFF]/20 text-[#00BFFF] border border-[#00BFFF]/40 shadow-[0_0_12px_rgba(0,191,255,0.25)]'
                      : 'text-slate-300 hover:text-white hover:bg-white/5'
                  }`}
                >
                  {link.label}
                </a>
              );
            })}
          </nav>

          {/* Right Action Controls */}
          <div className="hidden sm:flex items-center gap-3">
            {/* 24/7 Live Status Pill */}
            <div className="hidden xl:flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-950/40 border border-emerald-500/30 text-emerald-400 text-xs font-semibold">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>24/7 Open</span>
            </div>

            {/* Call Now button */}
            <a
              id="navbar-call-btn"
              href={`tel:${COMPANY_INFO.phoneRaw}`}
              className="flex items-center gap-2 px-3.5 py-2 rounded-xl bg-slate-800/80 hover:bg-slate-700/80 text-slate-100 border border-slate-700 hover:border-[#00BFFF]/50 text-xs font-semibold transition-all group"
            >
              <Phone className="w-3.5 h-3.5 text-[#00BFFF] group-hover:rotate-12 transition-transform" />
              <span>{COMPANY_INFO.phoneDisplay}</span>
            </a>

            {/* Get Free Quote CTA button */}
            <button
              id="navbar-quote-btn"
              onClick={() => {
                if (onOpenQuoteModal) onOpenQuoteModal();
                else {
                  const el = document.getElementById('contact');
                  if (el) el.scrollIntoView({ behavior: 'smooth' });
                }
              }}
              className="relative group overflow-hidden px-4 py-2 rounded-xl bg-gradient-to-r from-[#00BFFF] to-[#0284c7] text-[#0B1220] font-bold text-xs tracking-wide shadow-[0_0_15px_rgba(0,191,255,0.35)] hover:shadow-[0_0_25px_rgba(0,191,255,0.6)] transition-all cursor-pointer"
            >
              <span className="relative z-10 flex items-center gap-1.5">
                <Zap className="w-3.5 h-3.5 fill-[#0B1220]" />
                Get Free Quote
              </span>
              <div className="absolute inset-0 bg-white/25 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
            </button>
          </div>

          {/* Mobile Menu Trigger */}
          <div className="flex sm:hidden items-center gap-2">
            <a
              href={`tel:${COMPANY_INFO.phoneRaw}`}
              className="p-2 rounded-lg bg-[#00BFFF]/10 border border-[#00BFFF]/30 text-[#00BFFF]"
              aria-label="Call Now"
            >
              <Phone className="w-4 h-4" />
            </a>
            <button
              id="mobile-menu-toggle"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg bg-slate-800/80 border border-slate-700 text-slate-200"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-x-0 top-full bg-[#0B1220]/95 backdrop-blur-2xl border-b border-[#00BFFF]/20 p-5 shadow-2xl transition-all animate-in slide-in-from-top-2">
          <div className="flex flex-col gap-2">
            <div className="flex items-center justify-between pb-3 mb-2 border-b border-slate-800">
              <span className="text-xs text-slate-400 font-medium">Available 24/7 in London</span>
              <span className="flex items-center gap-1.5 text-xs text-emerald-400 font-semibold">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                Emergency Ready
              </span>
            </div>

            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="px-3 py-2.5 rounded-xl text-sm font-medium text-slate-200 hover:text-white hover:bg-[#00BFFF]/10 transition-all flex items-center justify-between"
              >
                <span>{link.label}</span>
                <span className="text-slate-600">→</span>
              </a>
            ))}

            <div className="pt-3 mt-2 border-t border-slate-800 flex flex-col gap-2.5">
              <a
                href={`tel:${COMPANY_INFO.phoneRaw}`}
                className="w-full py-3 rounded-xl bg-slate-800 text-center text-sm font-bold text-white flex items-center justify-center gap-2 border border-slate-700"
              >
                <Phone className="w-4 h-4 text-[#00BFFF]" />
                Call {COMPANY_INFO.phoneDisplay}
              </a>
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  const el = document.getElementById('contact');
                  if (el) el.scrollIntoView({ behavior: 'smooth' });
                }}
                className="w-full py-3 rounded-xl bg-gradient-to-r from-[#00BFFF] to-[#0284c7] text-[#0B1220] text-center text-sm font-bold flex items-center justify-center gap-2 shadow-[0_0_15px_rgba(0,191,255,0.4)]"
              >
                <Zap className="w-4 h-4 fill-[#0B1220]" />
                Get Free Quote
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
