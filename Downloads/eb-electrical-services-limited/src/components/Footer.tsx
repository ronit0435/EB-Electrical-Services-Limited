import React from 'react';
import { COMPANY_INFO, SERVICE_AREAS_DATA } from '../data/electricalData';
import { Phone, MapPin, Star, ShieldCheck, Zap, ArrowUp, Mail, Clock } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const socialLinks = [
    { name: 'Google Profile', href: `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(COMPANY_INFO.name + ' ' + COMPANY_INFO.address)}` },
    { name: 'WhatsApp', href: 'https://wa.me/447376635189' },
    { name: 'Instagram', href: 'https://instagram.com' },
    { name: 'Facebook', href: 'https://facebook.com' },
    { name: 'LinkedIn', href: 'https://linkedin.com' },
  ];

  return (
    <footer className="relative bg-[#070D17] border-t border-white/10 pt-16 pb-24 sm:pb-12 text-slate-400 text-xs overflow-hidden">
      {/* Decorative ambient line */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-[#00BFFF]/40 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-white/5">
          
          {/* Col 1: Business Identity & Overview (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#00BFFF] to-[#0B1220] p-0.5 shadow-[0_0_15px_rgba(0,191,255,0.3)]">
                <div className="w-full h-full bg-[#0B1220] rounded-[10px] flex items-center justify-center">
                  <Zap className="w-5 h-5 text-[#00BFFF] fill-[#00BFFF]" />
                </div>
              </div>
              <div>
                <span className="text-base font-extrabold text-white font-heading tracking-tight block">
                  {COMPANY_INFO.name}
                </span>
                <span className="text-[11px] text-slate-400">
                  London Electrical Installation Services
                </span>
              </div>
            </div>

            <p className="text-slate-300 leading-relaxed text-xs">
              {COMPANY_INFO.tagline}. Fully qualified and NICEIC registered electricians delivering exceptional domestic, commercial, and emergency electrical works across London.
            </p>

            {/* Google Reviews Badge */}
            <div className="p-3.5 rounded-xl glass-card border border-white/10 flex items-center justify-between gap-3">
              <div>
                <div className="flex items-center gap-1 mb-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 text-[#D4AF37] fill-[#D4AF37]" />
                  ))}
                  <span className="font-bold text-white text-xs ml-1">5.0</span>
                </div>
                <div className="text-[11px] text-slate-300">
                  Google Verified • Over {COMPANY_INFO.reviewsCount} 5-Star Reviews
                </div>
              </div>
              <div className="text-right">
                <span className="text-[10px] font-bold text-[#00BFFF] uppercase tracking-wider block">
                  100% Recommended
                </span>
              </div>
            </div>
          </div>

          {/* Col 2: Contact Details (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-sm font-bold text-white font-heading tracking-wide uppercase">
              Headquarters & Contact
            </h4>

            <div className="space-y-3 pt-1">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#D4AF37] shrink-0 mt-0.5" />
                <span className="leading-relaxed text-slate-300">
                  {COMPANY_INFO.address}
                </span>
              </div>

              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#00BFFF] shrink-0" />
                <a
                  href={`tel:${COMPANY_INFO.phoneRaw}`}
                  className="font-bold text-white hover:text-[#00BFFF] transition-colors"
                >
                  {COMPANY_INFO.phone}
                </a>
              </div>

              <div className="flex items-center gap-2.5">
                <Clock className="w-4 h-4 text-emerald-400 shrink-0" />
                <span className="text-emerald-400 font-semibold">
                  Open 24 Hours • Available Everyday
                </span>
              </div>

              <div className="flex items-center gap-2.5">
                <ShieldCheck className="w-4 h-4 text-[#D4AF37] shrink-0" />
                <span className="text-slate-300">
                  {COMPANY_INFO.certification}
                </span>
              </div>
            </div>
          </div>

          {/* Col 3: Service Areas (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-sm font-bold text-white font-heading tracking-wide uppercase">
              Service Areas Covered
            </h4>

            <ul className="space-y-1.5 pt-1 text-slate-300">
              {SERVICE_AREAS_DATA.map((area) => (
                <li key={area.id} className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#00BFFF]" />
                  <a
                    href="#service-areas"
                    className="hover:text-white transition-colors"
                  >
                    {area.name} ({area.postcode})
                  </a>
                </li>
              ))}
              <li className="flex items-center gap-1.5 text-slate-400">
                <span className="w-1.5 h-1.5 rounded-full bg-slate-600" />
                <span>Fulham, Putney, Wimbledon, Balham & Central London</span>
              </li>
            </ul>
          </div>

          {/* Col 4: Quick Links & Social (2 cols) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-sm font-bold text-white font-heading tracking-wide uppercase">
              Connect With Us
            </h4>

            <ul className="space-y-2 pt-1 text-slate-300">
              {socialLinks.map((item) => (
                <li key={item.name}>
                  <a
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-[#00BFFF] transition-colors flex items-center justify-between"
                  >
                    <span>{item.name}</span>
                    <span className="text-slate-600">↗</span>
                  </a>
                </li>
              ))}
            </ul>

            <button
              onClick={scrollToTop}
              className="mt-4 px-3 py-2 rounded-xl glass-card border border-white/10 text-slate-200 hover:text-white flex items-center gap-2 transition-all w-full justify-center"
            >
              <ArrowUp className="w-3.5 h-3.5" />
              <span>Back to Top</span>
            </button>
          </div>

        </div>

        {/* Bottom Legal & Accreditations bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-slate-300">
          <div>
            © {new Date().getFullYear()} {COMPANY_INFO.name}. All Rights Reserved. Registered in England & Wales.
          </div>

          <div className="flex flex-wrap items-center gap-4 text-slate-300">
            <span>NICEIC Approved Contractor</span>
            <span>•</span>
            <span>Part P Certified</span>
            <span>•</span>
            <span>BS 7671 18th Edition</span>
            <span>•</span>
            <span>£5M Insured</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
