import React, { useState } from 'react';
import { SERVICES_DATA } from '../data/electricalData';
import { ServiceItem } from '../types';
import {
  Lightbulb,
  Plug,
  Cpu,
  Zap,
  Building2,
  Wrench,
  ClipboardCheck,
  Flame,
  Radio,
  Leaf,
  AlertTriangle,
  SearchCheck,
  ShieldAlert,
  ArrowRight,
  CheckCircle,
  Calculator,
  Clock,
  Sparkles,
} from 'lucide-react';

interface ServicesSectionProps {
  onSelectService: (serviceName: string) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onSelectService }) => {
  const [activeCategory, setActiveCategory] = useState<'all' | 'domestic' | 'commercial' | 'smarthome' | 'emergency'>('all');
  const [showEstimator, setShowEstimator] = useState(false);

  // Estimator state
  const [calcService, setCalcService] = useState('fuse-board');
  const [calcPropertySize, setCalcPropertySize] = useState('2-bed');
  const [calcUrgency, setCalcUrgency] = useState('standard');

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Lightbulb': return <Lightbulb className="w-6 h-6 text-[#00BFFF]" />;
      case 'Plug': return <Plug className="w-6 h-6 text-[#38BDF8]" />;
      case 'Cpu': return <Cpu className="w-6 h-6 text-[#D4AF37]" />;
      case 'Zap': return <Zap className="w-6 h-6 text-[#FBBF24]" />;
      case 'Building2': return <Building2 className="w-6 h-6 text-[#10B981]" />;
      case 'Wrench': return <Wrench className="w-6 h-6 text-[#38BDF8]" />;
      case 'ClipboardCheck': return <ClipboardCheck className="w-6 h-6 text-[#D4AF37]" />;
      case 'Flame': return <Flame className="w-6 h-6 text-[#F97316]" />;
      case 'Radio': return <Radio className="w-6 h-6 text-[#A855F7]" />;
      case 'Leaf': return <Leaf className="w-6 h-6 text-[#10B981]" />;
      case 'AlertTriangle': return <AlertTriangle className="w-6 h-6 text-[#EF4444]" />;
      case 'SearchCheck': return <SearchCheck className="w-6 h-6 text-[#F59E0B]" />;
      case 'ShieldAlert': return <ShieldAlert className="w-6 h-6 text-[#EF4444]" />;
      default: return <Zap className="w-6 h-6 text-[#00BFFF]" />;
    }
  };

  const filteredServices = activeCategory === 'all'
    ? SERVICES_DATA
    : SERVICES_DATA.filter((s) => s.category === activeCategory);

  const categories = [
    { key: 'all', label: 'All Services' },
    { key: 'domestic', label: 'Domestic' },
    { key: 'commercial', label: 'Commercial' },
    { key: 'smarthome', label: 'Smart Home & Hive' },
    { key: 'emergency', label: '24/7 Emergency' },
  ];

  // Calculate estimated ballpark
  const calculateEstimate = () => {
    let base = 120;
    if (calcService === 'fuse-board') base = 480;
    else if (calcService === 'hive') base = 135;
    else if (calcService === 'lighting') base = 190;
    else if (calcService === 'eicr') base = 175;
    else if (calcService === 'rewire') base = 2800;

    let multiplier = 1.0;
    if (calcPropertySize === '1-bed') multiplier = 0.85;
    else if (calcPropertySize === '3-bed') multiplier = 1.25;
    else if (calcPropertySize === '4-bed+') multiplier = 1.6;

    let urgencyFee = calcUrgency === 'emergency' ? 95 : 0;
    const total = Math.round(base * multiplier + urgencyFee);
    return {
      min: Math.round(total * 0.9),
      max: Math.round(total * 1.15),
    };
  };

  const estimate = calculateEstimate();

  return (
    <section id="services" className="relative py-20 lg:py-28 overflow-hidden">
      {/* Background Lighting Aura */}
      <div className="absolute top-1/3 right-0 w-96 h-96 bg-[#00BFFF]/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-800/80 border border-[#00BFFF]/30 text-xs font-semibold text-[#00BFFF] mb-3">
              <Zap className="w-3.5 h-3.5" />
              <span>Full-Scope Electrical Solutions</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white font-heading tracking-tight">
              Domestic, Commercial & Smart Electrical Services
            </h2>
            <p className="mt-2 text-slate-300 text-sm sm:text-base max-w-2xl">
              NICEIC certified installations executed with clean precision, transparent pricing, and 24-hour emergency availability across London.
            </p>
          </div>

          {/* Quick Toggle to Estimator */}
          <button
            id="toggle-pricing-calculator"
            onClick={() => setShowEstimator(!showEstimator)}
            className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold flex items-center gap-2 transition-all shrink-0 ${
              showEstimator
                ? 'bg-[#00BFFF] text-[#0B1220] shadow-[0_0_15px_#00BFFF]'
                : 'glass-card text-white hover:border-[#00BFFF]/50'
            }`}
          >
            <Calculator className="w-4 h-4" />
            <span>{showEstimator ? 'Hide Cost Estimator' : 'Instant Cost Estimator'}</span>
          </button>
        </div>

        {/* Interactive Instant Cost Estimator Widget */}
        {showEstimator && (
          <div className="mb-14 glass-panel p-6 sm:p-8 rounded-3xl border border-[#00BFFF]/40 shadow-2xl relative overflow-hidden animate-in fade-in slide-in-from-top-4">
            <div className="flex items-center justify-between border-b border-white/10 pb-4 mb-6">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-lg bg-[#00BFFF]/20 border border-[#00BFFF]/40 flex items-center justify-center text-[#00BFFF]">
                  <Sparkles className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-white font-heading">
                    London Electrical Cost Estimator
                  </h3>
                  <p className="text-xs text-slate-400">
                    Transparent indicative pricing guide based on typical London installations
                  </p>
                </div>
              </div>
              <button
                onClick={() => setShowEstimator(false)}
                className="text-slate-400 hover:text-white text-xs px-2 py-1"
              >
                ✕ Close
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-2">
                  Service Required
                </label>
                <select
                  value={calcService}
                  onChange={(e) => setCalcService(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-slate-900/90 border border-slate-700 text-white text-xs focus:border-[#00BFFF] outline-none"
                >
                  <option value="fuse-board">Fuse Board Upgrade (18th Edition RCBO/SPD)</option>
                  <option value="hive">Hive Smart Thermostat Installation</option>
                  <option value="lighting">LED Downlight Fitting (Pack of 6)</option>
                  <option value="eicr">Landlord EICR Safety Certificate</option>
                  <option value="rewire">Full Rewiring Project</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-2">
                  Property Size / Type
                </label>
                <select
                  value={calcPropertySize}
                  onChange={(e) => setCalcPropertySize(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-slate-900/90 border border-slate-700 text-white text-xs focus:border-[#00BFFF] outline-none"
                >
                  <option value="1-bed">1 Bed Flat / Apartment</option>
                  <option value="2-bed">2-3 Bed Terraced / House</option>
                  <option value="3-bed">3-4 Bed Detached / Townhouse</option>
                  <option value="4-bed+">5+ Bed Luxury Home / Commercial</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-2">
                  Dispatch Urgency
                </label>
                <select
                  value={calcUrgency}
                  onChange={(e) => setCalcUrgency(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-slate-900/90 border border-slate-700 text-white text-xs focus:border-[#00BFFF] outline-none"
                >
                  <option value="standard">Standard Booking (Next few days)</option>
                  <option value="emergency">24/7 Immediate Emergency Dispatch</option>
                </select>
              </div>
            </div>

            {/* Estimated Price Result Bar */}
            <div className="mt-6 pt-6 border-t border-white/10 flex flex-wrap items-center justify-between gap-4 bg-slate-900/60 p-4 rounded-2xl border border-white/5">
              <div>
                <div className="text-xs text-slate-400">Estimated Project Range:</div>
                <div className="text-2xl sm:text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#00BFFF] to-[#D4AF37] font-heading">
                  £{estimate.min} – £{estimate.max} <span className="text-xs font-normal text-slate-400">+ VAT/Cert</span>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <button
                  onClick={() => {
                    const sel = SERVICES_DATA.find(s => s.id.includes(calcService))?.title || 'Electrical Installation';
                    onSelectService(sel);
                  }}
                  className="px-5 py-2.5 rounded-xl bg-[#00BFFF] text-[#0B1220] font-bold text-xs sm:text-sm hover:shadow-[0_0_15px_#00BFFF] transition-all cursor-pointer"
                >
                  Lock In Estimate & Book
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Category Filter Tabs */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 scrollbar-none">
          {categories.map((cat) => (
            <button
              key={cat.key}
              id={`service-cat-${cat.key}`}
              onClick={() => setActiveCategory(cat.key as any)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all whitespace-nowrap cursor-pointer ${
                activeCategory === cat.key
                  ? 'bg-gradient-to-r from-[#00BFFF] to-[#0284c7] text-[#0B1220] font-bold shadow-[0_0_15px_rgba(0,191,255,0.35)]'
                  : 'glass-card text-slate-300 hover:text-white hover:bg-white/10'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* 3D Service Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredServices.map((service) => (
            <div
              key={service.id}
              id={`service-card-${service.id}`}
              className="glass-card group relative p-6 sm:p-7 rounded-2xl border border-white/10 hover:border-[#00BFFF]/50 transition-all duration-300 flex flex-col justify-between overflow-hidden"
              style={{
                transformStyle: 'preserve-3d',
              }}
            >
              {/* Card glowing gradient border highlight */}
              <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-transparent via-[#00BFFF]/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              
              <div>
                {/* Header with 3D Icon & Tag */}
                <div className="flex items-center justify-between mb-5">
                  <div className="w-13 h-13 rounded-2xl bg-gradient-to-br from-[#0B1220] to-slate-900 border border-[#00BFFF]/30 flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:shadow-[0_0_20px_rgba(0,191,255,0.35)] transition-all">
                    {getIcon(service.icon)}
                  </div>

                  <div className="flex items-center gap-2">
                    {service.popular && (
                      <span className="text-[10px] uppercase font-extrabold tracking-wider px-2 py-0.5 rounded-full bg-[#D4AF37]/20 text-[#D4AF37] border border-[#D4AF37]/40">
                        Popular
                      </span>
                    )}
                    <span className="text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded-full bg-slate-800 text-slate-400 border border-slate-700">
                      {service.category}
                    </span>
                  </div>
                </div>

                {/* Service Title */}
                <h3 className="text-xl font-bold text-white font-heading group-hover:text-[#00BFFF] transition-colors">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="mt-2 text-xs sm:text-sm text-slate-300 leading-relaxed">
                  {service.description}
                </p>

                {/* Features Checklist */}
                <ul className="mt-5 space-y-2 pt-4 border-t border-white/5 text-xs text-slate-300">
                  {service.features.map((feat, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <CheckCircle className="w-3.5 h-3.5 text-[#00BFFF] shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Bottom Meta & Action Button */}
              <div className="mt-6 pt-5 border-t border-white/10 flex items-center justify-between gap-3">
                <div className="text-xs">
                  <span className="text-slate-400 flex items-center gap-1">
                    <Clock className="w-3 h-3 text-[#00BFFF]" />
                    {service.typicalTime || 'Same Day'}
                  </span>
                  <span className="text-[#D4AF37] font-bold text-xs mt-0.5 block">
                    {service.startingPrice}
                  </span>
                </div>

                <button
                  id={`quote-service-${service.id}`}
                  onClick={() => onSelectService(service.title)}
                  className="px-3.5 py-2 rounded-xl bg-slate-800/80 hover:bg-[#00BFFF] text-slate-200 hover:text-[#0B1220] text-xs font-bold transition-all flex items-center gap-1.5 border border-slate-700 hover:border-[#00BFFF] group-hover:shadow-[0_0_15px_rgba(0,191,255,0.4)] cursor-pointer"
                >
                  <span>Book / Quote</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
