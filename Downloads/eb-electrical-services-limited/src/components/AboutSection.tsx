import React from 'react';
import { ShieldCheck, Clock, Home, Building, Check, Award, FileText, Zap } from 'lucide-react';
import { COMPANY_INFO } from '../data/electricalData';

export const AboutSection: React.FC = () => {
  const pillars = [
    {
      id: 'pillar-certified',
      title: 'Certified Electricians',
      subtitle: 'NICEIC Approved & City & Guilds 18th Edition',
      icon: ShieldCheck,
      color: '#D4AF37',
      badge: 'NICEIC Verified',
      description:
        'All electrical works strictly adhere to British Standard BS 7671 (18th Edition Wiring Regulations) and Building Regulations Part P.',
      points: [
        'City & Guilds 2391 Inspection & Testing',
        '6-Year NICEIC Platinum Promise Guarantee',
        'Official Building Control compliance certificates',
        '£5,000,000 public liability insurance coverage',
      ],
    },
    {
      id: 'pillar-emergency',
      title: 'Emergency Support',
      subtitle: '24 Hours a Day, 365 Days a Year',
      icon: Clock,
      color: '#00BFFF',
      badge: '24/7 Dispatch',
      description:
        'Immediate London-wide emergency call-out for sudden power loss, tripping fuse boards, electrical burning smells, and water ingress.',
      points: [
        'Average 30 - 45 minute SW London arrival',
        'Equipped service vans carrying primary spares',
        'Safe immediate isolation & power restoration',
        'Clear upfront emergency call-out rates',
      ],
    },
    {
      id: 'pillar-residential',
      title: 'Residential Services',
      subtitle: 'Homes, Apartments & Landlord Portfolios',
      icon: Home,
      color: '#38BDF8',
      badge: 'Domestic Excellence',
      description:
        'From architectural mood lighting and kitchen rewiring to Hive smart heating and modern surge-protected fuse board upgrades.',
      points: [
        'Full & partial house rewiring with clean chases',
        'Indoor LED lighting & outdoor waterproof power',
        'Landlord EICR safety testing & certification',
        'Hive, Nest & smart home automation setup',
      ],
    },
    {
      id: 'pillar-commercial',
      title: 'Commercial Services',
      subtitle: 'Offices, Retail, Hospitality & Facilities',
      icon: Building,
      color: '#10B981',
      badge: 'Commercial Grade',
      description:
        'Robust electrical systems for London offices, retail spaces, restaurants, and property managers requiring zero downtime.',
      points: [
        'Office floor boxes & structured three-phase power',
        'Emergency lighting escape route compliance',
        'Planned preventative electrical maintenance',
        'Flexible out-of-hours & weekend scheduling',
      ],
    },
  ];

  return (
    <section id="about" className="relative py-20 lg:py-28 overflow-hidden">
      {/* Subtle background glow */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-[#00BFFF]/5 rounded-full blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-800/80 border border-[#00BFFF]/30 text-xs font-semibold text-[#00BFFF]">
            <Award className="w-3.5 h-3.5" />
            <span>About EB Electrical Services Limited</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-white font-heading tracking-tight">
            Powering London With Trusted, Certified Craftsmanship
          </h2>

          {/* User Requested Main About Text */}
          <div className="glass-panel p-6 sm:p-8 rounded-2xl border border-white/10 text-slate-200 text-base sm:text-lg leading-relaxed shadow-xl text-left relative overflow-hidden">
            <div className="absolute top-0 left-0 w-1.5 h-full bg-gradient-to-b from-[#00BFFF] via-[#D4AF37] to-[#00BFFF]" />
            <p className="font-normal">
              "{COMPANY_INFO.name} delivers high-quality electrical solutions for homes and businesses across London. With professional qualifications, NICEIC registration, fair pricing, and excellent customer service, we ensure every project is completed safely and efficiently."
            </p>
            <div className="mt-4 flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-white/10 text-xs text-slate-400">
              <span className="text-slate-300 font-semibold">
                Lead Electrician: {COMPANY_INFO.leadElectrician}
              </span>
              <span className="text-[#D4AF37] font-semibold">
                Registration: {COMPANY_INFO.registrationNo}
              </span>
              <span className="text-emerald-400 font-semibold">
                {COMPANY_INFO.insurance}
              </span>
            </div>
          </div>
        </div>

        {/* 4 Pillars Grid (Glass Card Layout) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {pillars.map((pillar) => {
            const Icon = pillar.icon;
            return (
              <div
                key={pillar.id}
                id={pillar.id}
                className="glass-card p-6 rounded-2xl border border-white/10 flex flex-col justify-between relative group hover:border-[#00BFFF]/50"
              >
                {/* Top glow accent */}
                <div
                  className="absolute -top-px left-6 right-6 h-px opacity-0 group-hover:opacity-100 transition-opacity"
                  style={{ backgroundColor: pillar.color }}
                />

                <div>
                  {/* Icon & Badge Header */}
                  <div className="flex items-center justify-between mb-5">
                    <div
                      className="w-12 h-12 rounded-xl flex items-center justify-center transition-transform group-hover:scale-110 shadow-lg"
                      style={{
                        backgroundColor: `${pillar.color}15`,
                        border: `1px solid ${pillar.color}40`,
                      }}
                    >
                      <Icon className="w-6 h-6" style={{ color: pillar.color }} />
                    </div>

                    <span
                      className="text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded-full"
                      style={{
                        backgroundColor: `${pillar.color}20`,
                        color: pillar.color,
                        border: `1px solid ${pillar.color}30`,
                      }}
                    >
                      {pillar.badge}
                    </span>
                  </div>

                  {/* Title & Subtitle */}
                  <h3 className="text-lg font-bold text-white font-heading">
                    {pillar.title}
                  </h3>
                  <p className="text-xs text-slate-400 font-medium mt-1 mb-3">
                    {pillar.subtitle}
                  </p>

                  <p className="text-xs text-slate-300 leading-relaxed mb-5">
                    {pillar.description}
                  </p>
                </div>

                {/* Bullet Points */}
                <ul className="space-y-2 pt-4 border-t border-white/5 text-xs text-slate-300">
                  {pillar.points.map((point, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <Check className="w-3.5 h-3.5 text-[#00BFFF] shrink-0 mt-0.5" />
                      <span className="leading-snug">{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>

        {/* Accreditations Banner */}
        <div className="mt-12 glass-panel p-4 sm:p-6 rounded-2xl border border-white/10 flex flex-wrap items-center justify-around gap-6 text-center text-xs">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-lg bg-[#D4AF37]/15 border border-[#D4AF37]/30 flex items-center justify-center text-[#D4AF37]">
              <Award className="w-5 h-5" />
            </div>
            <div className="text-left">
              <div className="font-bold text-white">NICEIC Registered</div>
              <div className="text-slate-400 text-[11px]">Approved Domestic & Commercial</div>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-lg bg-[#00BFFF]/15 border border-[#00BFFF]/30 flex items-center justify-center text-[#00BFFF]">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div className="text-left">
              <div className="font-bold text-white">Part P Compliant</div>
              <div className="text-slate-400 text-[11px]">Building Regulations Sign-Off</div>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-lg bg-emerald-500/15 border border-emerald-500/30 flex items-center justify-center text-emerald-400">
              <FileText className="w-5 h-5" />
            </div>
            <div className="text-left">
              <div className="font-bold text-white">18th Edition BS 7671</div>
              <div className="text-slate-400 text-[11px]">Latest Safety Standards</div>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-lg bg-sky-500/15 border border-sky-500/30 flex items-center justify-center text-sky-400">
              <Zap className="w-5 h-5" />
            </div>
            <div className="text-left">
              <div className="font-bold text-white">£5M Liability Insured</div>
              <div className="text-slate-400 text-[11px]">Full Protection & Peace of Mind</div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
