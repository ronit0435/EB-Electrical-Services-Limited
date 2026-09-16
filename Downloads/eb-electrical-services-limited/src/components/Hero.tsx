import React from 'react';
import { COMPANY_INFO } from '../data/electricalData';
import { ThreeHouseScene } from './ThreeHouseScene';
import { Phone, Zap, Star, ShieldCheck, Clock, CheckCircle2, MessageSquare } from 'lucide-react';

interface HeroProps {
  onQuoteClick: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onQuoteClick }) => {
  return (
    <section id="home" className="relative pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden">
      {/* Background Decorative Ambient Radial Glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#00BFFF]/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-1/3 right-5 w-[400px] h-[400px] bg-[#D4AF37]/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Column: Glass Content Box */}
          <div className="lg:col-span-6 space-y-6">
            
            {/* Top Micro-badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-card border border-[#00BFFF]/30">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#00BFFF] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#00BFFF]"></span>
              </span>
              <span className="text-xs font-semibold text-slate-200 tracking-wide">
                London’s Trusted Electricians • 24/7 Rapid Response
              </span>
            </div>

            {/* Glass Effect Content Box Container */}
            <div className="glass-panel p-6 sm:p-8 rounded-3xl border border-white/10 shadow-2xl relative overflow-hidden">
              {/* Subtle top interior glow line */}
              <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-[#00BFFF]/50 to-transparent" />

              {/* Main Heading */}
              <h1 className="text-3xl sm:text-4xl xl:text-5xl font-extrabold tracking-tight text-white font-heading leading-[1.15]">
                Professional Electrical Services in{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00BFFF] via-sky-300 to-[#D4AF37]">
                  London
                </span>
              </h1>

              {/* Subheading */}
              <p className="mt-4 text-base sm:text-lg text-slate-300 font-normal leading-relaxed">
                Fully qualified and NICEIC registered electricians providing reliable domestic and commercial electrical services across London. Available 24/7.
              </p>

              {/* Action Buttons */}
              <div className="mt-8 flex flex-wrap items-center gap-3.5">
                <button
                  id="hero-get-quote-btn"
                  onClick={onQuoteClick}
                  className="relative group overflow-hidden px-6 py-3.5 rounded-xl bg-gradient-to-r from-[#00BFFF] via-sky-400 to-[#0284c7] text-[#0B1220] font-extrabold text-sm sm:text-base tracking-wide shadow-[0_0_25px_rgba(0,191,255,0.45)] hover:shadow-[0_0_35px_rgba(0,191,255,0.7)] transition-all cursor-pointer transform hover:-translate-y-0.5"
                >
                  <span className="relative z-10 flex items-center gap-2">
                    <Zap className="w-5 h-5 fill-[#0B1220]" />
                    Get Free Quote
                  </span>
                  <div className="absolute inset-0 bg-white/30 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                </button>

                <a
                  id="hero-call-now-btn"
                  href={`tel:${COMPANY_INFO.phoneRaw}`}
                  className="px-6 py-3.5 rounded-xl glass-card hover:bg-white/10 text-white font-bold text-sm sm:text-base border border-slate-700 hover:border-[#00BFFF]/50 flex items-center gap-2 transition-all group shadow-lg"
                >
                  <Phone className="w-5 h-5 text-[#00BFFF] group-hover:rotate-12 transition-transform" />
                  <span>Call Now</span>
                </a>

                <a
                  id="hero-whatsapp-btn"
                  href={`https://wa.me/447376635189?text=${encodeURIComponent('Hello EB Electrical Services, I would like to request an electrical service quote.')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3.5 rounded-xl glass-card hover:bg-emerald-500/10 text-emerald-400 hover:text-emerald-300 border border-slate-700 hover:border-emerald-500/40 flex items-center justify-center transition-all"
                  title="Chat on WhatsApp"
                >
                  <MessageSquare className="w-5 h-5" />
                </a>
              </div>

              {/* Trust Indicators / Badges Grid */}
              <div className="mt-8 pt-6 border-t border-white/10 grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs">
                {/* 5.0 Rating */}
                <div className="flex items-center gap-2 p-2 rounded-xl bg-white/5 border border-white/5">
                  <Star className="w-4 h-4 text-[#D4AF37] fill-[#D4AF37] shrink-0" />
                  <div>
                    <div className="font-bold text-white text-xs">5.0 Rating</div>
                    <div className="text-[10px] text-slate-400">Google Verified</div>
                  </div>
                </div>

                {/* 71+ Reviews */}
                <div className="flex items-center gap-2 p-2 rounded-xl bg-white/5 border border-white/5">
                  <CheckCircle2 className="w-4 h-4 text-[#00BFFF] shrink-0" />
                  <div>
                    <div className="font-bold text-white text-xs">71+ Reviews</div>
                    <div className="text-[10px] text-slate-400">100% Positive</div>
                  </div>
                </div>

                {/* 24/7 Service */}
                <div className="flex items-center gap-2 p-2 rounded-xl bg-white/5 border border-white/5">
                  <Clock className="w-4 h-4 text-emerald-400 shrink-0" />
                  <div>
                    <div className="font-bold text-white text-xs">24/7 Service</div>
                    <div className="text-[10px] text-slate-400">Day & Night</div>
                  </div>
                </div>

                {/* NICEIC Registered */}
                <div className="flex items-center gap-2 p-2 rounded-xl bg-white/5 border border-white/5">
                  <ShieldCheck className="w-4 h-4 text-[#D4AF37] shrink-0" />
                  <div>
                    <div className="font-bold text-white text-xs">NICEIC Reg.</div>
                    <div className="text-[10px] text-slate-400">Fully Qualified</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Address / Dispatch Strip */}
            <div className="flex flex-wrap items-center justify-between gap-3 px-4 py-2.5 rounded-xl bg-[#0B1220]/60 border border-slate-800 text-xs text-slate-400">
              <span className="flex items-center gap-1.5 text-slate-300">
                <span className="w-1.5 h-1.5 rounded-full bg-[#00BFFF]" />
                HQ: Meyrick Rd, London SW11 2EG
              </span>
              <span className="text-[#00BFFF] font-semibold">
                Serving Battersea, Chelsea, Clapham & SW London
              </span>
            </div>
          </div>

          {/* Right Column: 3D Animated House Outline with Flowing Electric Lines */}
          <div className="lg:col-span-6 relative">
            <ThreeHouseScene />
          </div>

        </div>
      </div>
    </section>
  );
};
