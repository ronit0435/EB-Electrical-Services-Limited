import React, { useState, useEffect, useRef } from 'react';
import { Star, Clock, ShieldCheck, Award, Zap, ThumbsUp, DollarSign, Sparkles } from 'lucide-react';
import { COMPANY_INFO } from '../data/electricalData';

export const WhyChooseUs: React.FC = () => {
  const [hasAnimated, setHasAnimated] = useState(false);
  const [reviewCount, setReviewCount] = useState(0);
  const [satisfactionCount, setSatisfactionCount] = useState(0);
  const [warrantyYears, setWarrantyYears] = useState(0);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);

          // Animate review count up to 71
          let currentRev = 0;
          const revInterval = setInterval(() => {
            currentRev += 2;
            if (currentRev >= 71) {
              setReviewCount(71);
              clearInterval(revInterval);
            } else {
              setReviewCount(currentRev);
            }
          }, 30);

          // Animate satisfaction up to 100
          let currentSat = 0;
          const satInterval = setInterval(() => {
            currentSat += 3;
            if (currentSat >= 100) {
              setSatisfactionCount(100);
              clearInterval(satInterval);
            } else {
              setSatisfactionCount(currentSat);
            }
          }, 25);

          // Animate warranty years up to 6
          let currentYr = 0;
          const yrInterval = setInterval(() => {
            currentYr += 1;
            if (currentYr >= 6) {
              setWarrantyYears(6);
              clearInterval(yrInterval);
            } else {
              setWarrantyYears(currentYr);
            }
          }, 150);
        }
      },
      { threshold: 0.25 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, [hasAnimated]);

  const trustCards = [
    {
      title: 'Transparent & Fair Pricing',
      description: 'Clear upfront quotes with itemized labor and materials. Zero hidden call-out fees or shock charges.',
      icon: DollarSign,
      color: '#D4AF37',
    },
    {
      title: 'Pristine & Tidy Cleanliness',
      description: 'We respect your home. Protective overshoes, dust sheets, and industrial vacuum cleaning on every job.',
      icon: Sparkles,
      color: '#00BFFF',
    },
    {
      title: 'Prompt London Dispatch',
      description: 'Based in Battersea SW11, providing fast response times across South West and Central London.',
      icon: Clock,
      color: '#10B981',
    },
    {
      title: 'NICEIC Platinum Warranty',
      description: 'All work carries the NICEIC Platinum Promise, guaranteeing compliance with Building Regulations.',
      icon: Award,
      color: '#F59E0B',
    },
  ];

  return (
    <section id="why-choose-us" ref={sectionRef} className="relative py-20 lg:py-28 overflow-hidden">
      {/* Background glow circle */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-[#00BFFF]/5 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-800/80 border border-[#00BFFF]/30 text-xs font-semibold text-[#00BFFF]">
            <ThumbsUp className="w-3.5 h-3.5" />
            <span>London’s Premier Electrical Standard</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-white font-heading tracking-tight">
            Why London Homeowners & Businesses Choose Us
          </h2>
          <p className="text-slate-300 text-sm sm:text-base">
            Delivering gold-standard electrical safety, punctual service, and certified reliability around the clock.
          </p>
        </div>

        {/* 4 Animated Counters Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-14">
          
          {/* 71+ Reviews */}
          <div className="glass-panel p-6 sm:p-7 rounded-2xl border border-white/10 hover:border-[#D4AF37]/50 transition-all text-center relative overflow-hidden group">
            <div className="absolute top-0 inset-x-0 h-1 bg-[#D4AF37] opacity-60" />
            <div className="w-12 h-12 rounded-xl bg-[#D4AF37]/15 border border-[#D4AF37]/30 flex items-center justify-center text-[#D4AF37] mx-auto mb-4 group-hover:scale-110 transition-transform">
              <Star className="w-6 h-6 fill-[#D4AF37]" />
            </div>
            <div className="text-4xl sm:text-5xl font-extrabold text-white font-heading tracking-tight">
              {reviewCount}
              <span className="text-[#D4AF37]">+</span>
            </div>
            <div className="mt-2 text-sm font-bold text-slate-200">
              5-Star Google Reviews
            </div>
            <p className="text-xs text-slate-400 mt-1">
              Verified London customers praising reliability & fair rates
            </p>
          </div>

          {/* 24/7 Availability */}
          <div className="glass-panel p-6 sm:p-7 rounded-2xl border border-white/10 hover:border-[#00BFFF]/50 transition-all text-center relative overflow-hidden group">
            <div className="absolute top-0 inset-x-0 h-1 bg-[#00BFFF] opacity-60" />
            <div className="w-12 h-12 rounded-xl bg-[#00BFFF]/15 border border-[#00BFFF]/30 flex items-center justify-center text-[#00BFFF] mx-auto mb-4 group-hover:scale-110 transition-transform">
              <Clock className="w-6 h-6" />
            </div>
            <div className="text-4xl sm:text-5xl font-extrabold text-white font-heading tracking-tight">
              24<span className="text-[#00BFFF]">/7</span>
            </div>
            <div className="mt-2 text-sm font-bold text-slate-200">
              Availability
            </div>
            <p className="text-xs text-slate-400 mt-1">
              Immediate day and night emergency electrician dispatch
            </p>
          </div>

          {/* 100% Satisfaction */}
          <div className="glass-panel p-6 sm:p-7 rounded-2xl border border-white/10 hover:border-emerald-500/50 transition-all text-center relative overflow-hidden group">
            <div className="absolute top-0 inset-x-0 h-1 bg-emerald-500 opacity-60" />
            <div className="w-12 h-12 rounded-xl bg-emerald-500/15 border border-emerald-500/30 flex items-center justify-center text-emerald-400 mx-auto mb-4 group-hover:scale-110 transition-transform">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <div className="text-4xl sm:text-5xl font-extrabold text-white font-heading tracking-tight">
              {satisfactionCount}
              <span className="text-emerald-400">%</span>
            </div>
            <div className="mt-2 text-sm font-bold text-slate-200">
              Satisfaction Guaranteed
            </div>
            <p className="text-xs text-slate-400 mt-1">
              Clean work, safety certificates & dedicated customer care
            </p>
          </div>

          {/* NICEIC Registered */}
          <div className="glass-panel p-6 sm:p-7 rounded-2xl border border-white/10 hover:border-[#D4AF37]/50 transition-all text-center relative overflow-hidden group">
            <div className="absolute top-0 inset-x-0 h-1 bg-[#D4AF37] opacity-60" />
            <div className="w-12 h-12 rounded-xl bg-[#D4AF37]/15 border border-[#D4AF37]/30 flex items-center justify-center text-[#D4AF37] mx-auto mb-4 group-hover:scale-110 transition-transform">
              <Award className="w-6 h-6" />
            </div>
            <div className="text-3xl sm:text-4xl font-extrabold text-white font-heading tracking-tight mt-1">
              NICEIC
            </div>
            <div className="mt-2 text-sm font-bold text-[#D4AF37]">
              Registered Contractor
            </div>
            <p className="text-xs text-slate-400 mt-1">
              {warrantyYears}-Year Platinum Promise warranty on installations
            </p>
          </div>

        </div>

        {/* Quality Principles Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {trustCards.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="glass-card p-5 rounded-xl border border-white/5 flex items-start gap-4"
              >
                <div
                  className="w-10 h-10 rounded-lg shrink-0 flex items-center justify-center"
                  style={{
                    backgroundColor: `${item.color}15`,
                    border: `1px solid ${item.color}30`,
                  }}
                >
                  <Icon className="w-5 h-5" style={{ color: item.color }} />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white font-heading">{item.title}</h4>
                  <p className="text-xs text-slate-300 mt-1 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
