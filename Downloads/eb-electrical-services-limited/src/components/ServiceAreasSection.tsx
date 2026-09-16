import React, { useState } from 'react';
import { SERVICE_AREAS_DATA, COMPANY_INFO } from '../data/electricalData';
import { ServiceArea } from '../types';
import { MapPin, Navigation, Clock, CheckCircle, Search, Phone, Zap } from 'lucide-react';

export const ServiceAreasSection: React.FC = () => {
  const [selectedArea, setSelectedArea] = useState<ServiceArea>(SERVICE_AREAS_DATA[0]);
  const [postcodeInput, setPostcodeInput] = useState('');
  const [postcodeStatus, setPostcodeStatus] = useState<{
    tested: boolean;
    covered: boolean;
    message: string;
    eta?: string;
  } | null>(null);

  const handlePostcodeCheck = (e: React.FormEvent) => {
    e.preventDefault();
    const clean = postcodeInput.trim().toUpperCase();
    if (!clean) return;

    const swZones = ['SW11', 'SW4', 'SW3', 'SW18', 'SW6', 'SW15', 'SW19', 'SW1', 'SW8', 'SW9', 'SW12', 'SW17', 'SW10', 'SW2'];
    const greaterLondon = ['SE1', 'SE11', 'W1', 'W2', 'W8', 'W14', 'WC1', 'WC2', 'EC1', 'EC2', 'EC3', 'EC4'];

    const isSW = swZones.some(prefix => clean.startsWith(prefix));
    const isLondon = greaterLondon.some(prefix => clean.startsWith(prefix)) || clean.startsWith('SW') || clean.startsWith('W') || clean.startsWith('SE');

    if (isSW) {
      setPostcodeStatus({
        tested: true,
        covered: true,
        eta: '15 - 30 mins',
        message: `Excellent! Postcode ${clean} is in our Primary Rapid Response Zone. 24/7 electricians on standby.`,
      });
    } else if (isLondon) {
      setPostcodeStatus({
        tested: true,
        covered: true,
        eta: '35 - 50 mins',
        message: `Yes! Postcode ${clean} is covered by our London scheduled & emergency electrical team.`,
      });
    } else {
      setPostcodeStatus({
        tested: true,
        covered: true,
        eta: 'Call to confirm',
        message: `We cover all of Greater London. Please call ${COMPANY_INFO.phoneDisplay} to check immediate availability for ${clean}.`,
      });
    }
  };

  return (
    <section id="service-areas" className="relative py-20 lg:py-28 overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/4 w-[600px] h-[600px] bg-[#00BFFF]/5 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-800/80 border border-[#00BFFF]/30 text-xs font-semibold text-[#00BFFF]">
            <Navigation className="w-3.5 h-3.5" />
            <span>London Coverage Network</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-white font-heading tracking-tight">
            Local Electricians Serving South West & Greater London
          </h2>
          <p className="text-slate-300 text-sm sm:text-base">
            Centrally stationed at Flat 2, 105 Meyrick Rd, Battersea SW11 2EG for rapid arrival to domestic emergencies and scheduled projects.
          </p>
        </div>

        {/* Postcode Quick Checker Bar */}
        <div className="max-w-2xl mx-auto mb-12">
          <form
            onSubmit={handlePostcodeCheck}
            className="glass-panel p-2 rounded-2xl border border-white/10 flex flex-col sm:flex-row items-center gap-2 shadow-xl"
          >
            <div className="flex items-center gap-2 px-3 py-2 w-full">
              <MapPin className="w-5 h-5 text-[#00BFFF] shrink-0" />
              <input
                type="text"
                value={postcodeInput}
                onChange={(e) => setPostcodeInput(e.target.value)}
                placeholder="Check your London postcode (e.g. SW11, SW4, SW3, SW18)..."
                className="w-full bg-transparent text-sm text-white placeholder:text-slate-400 focus:outline-none"
              />
            </div>
            <button
              type="submit"
              className="w-full sm:w-auto px-6 py-2.5 rounded-xl bg-gradient-to-r from-[#00BFFF] to-[#0284c7] text-[#0B1220] font-bold text-xs sm:text-sm whitespace-nowrap shadow-[0_0_15px_rgba(0,191,255,0.4)] hover:shadow-[0_0_25px_rgba(0,191,255,0.6)] transition-all cursor-pointer"
            >
              Check Coverage
            </button>
          </form>

          {postcodeStatus && (
            <div className="mt-3 p-3.5 rounded-xl glass-card border border-[#00BFFF]/30 flex items-center justify-between gap-3 text-xs animate-in fade-in">
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0" />
                <span className="text-slate-200">{postcodeStatus.message}</span>
              </div>
              {postcodeStatus.eta && (
                <span className="text-[#00BFFF] font-bold shrink-0">
                  ETA: {postcodeStatus.eta}
                </span>
              )}
            </div>
          )}
        </div>

        {/* Interactive Map & Areas Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Left: Interactive Stylized London SVG Map */}
          <div className="lg:col-span-7">
            <div className="relative glass-panel p-6 sm:p-8 rounded-3xl border border-white/10 shadow-2xl overflow-hidden aspect-[4/3] flex items-center justify-center">
              
              {/* Map grid lines */}
              <div className="absolute inset-0 bg-[radial-gradient(#1e293b_1px,transparent_1px)] [background-size:24px_24px] opacity-40 pointer-events-none" />

              {/* Stylized River Thames & Zone Outline SVG */}
              <svg
                viewBox="0 0 600 450"
                className="w-full h-full relative z-10 select-none"
              >
                <defs>
                  {/* Glowing river filter */}
                  <filter id="glow-river" x="-20%" y="-20%" width="140%" height="140%">
                    <feGaussianBlur stdDeviation="4" result="glow" />
                    <feComposite in="SourceGraphic" in2="glow" operator="over" />
                  </filter>
                  <linearGradient id="riverGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <feStop offset="0%" stopColor="#0284c7" stopOpacity="0.4" />
                    <feStop offset="50%" stopColor="#00BFFF" stopOpacity="0.7" />
                    <feStop offset="100%" stopColor="#38bdf8" stopOpacity="0.4" />
                  </linearGradient>
                </defs>

                {/* River Thames winding path */}
                <path
                  d="M 10 240 Q 90 260 170 210 T 300 220 T 430 180 T 590 190"
                  fill="none"
                  stroke="url(#riverGradient)"
                  strokeWidth="18"
                  strokeLinecap="round"
                  filter="url(#glow-river)"
                  opacity="0.85"
                />

                {/* Secondary Water label */}
                <text x="320" y="212" fill="#38bdf8" fontSize="10" fontFamily="sans-serif" letterSpacing="3" opacity="0.6">
                  RIVER THAMES
                </text>

                {/* South West London Rapid Response Ring Zone */}
                <circle
                  cx="280"
                  cy="265"
                  r="130"
                  fill="rgba(0, 191, 255, 0.04)"
                  stroke="#00BFFF"
                  strokeWidth="1.5"
                  strokeDasharray="4 4"
                />
                <circle
                  cx="280"
                  cy="265"
                  r="75"
                  fill="rgba(212, 175, 55, 0.04)"
                  stroke="#D4AF37"
                  strokeWidth="1"
                  strokeDasharray="2 2"
                />

                {/* HQ Hub: Battersea Meyrick Rd */}
                <g transform="translate(280, 260)">
                  {/* Pulsing beacon */}
                  <circle r="22" fill="#00BFFF" opacity="0.15">
                    <animate attributeName="r" values="12;28;12" dur="3s" repeatCount="indefinite" />
                    <animate attributeName="opacity" values="0.3;0.05;0.3" dur="3s" repeatCount="indefinite" />
                  </circle>
                  <circle r="10" fill="#D4AF37" />
                  <circle r="5" fill="#0B1220" />
                  <text x="14" y="4" fill="#D4AF37" fontSize="12" fontWeight="bold">
                    HQ (Meyrick Rd SW11)
                  </text>
                </g>

                {/* Area Radar Hotspots */}
                {/* 1. Chelsea (North of river) */}
                <g
                  className="cursor-pointer group"
                  onClick={() => setSelectedArea(SERVICE_AREAS_DATA.find(a => a.id === 'chelsea')!)}
                  transform="translate(240, 160)"
                >
                  <circle r="8" fill={selectedArea.id === 'chelsea' ? '#00BFFF' : '#334155'} stroke="#00BFFF" strokeWidth="2" />
                  <text x="12" y="4" fill={selectedArea.id === 'chelsea' ? '#00BFFF' : '#cbd5e1'} fontSize="11" fontWeight="bold">
                    Chelsea (SW3)
                  </text>
                  {selectedArea.id === 'chelsea' && (
                    <line x1="0" y1="0" x2="40" y2="100" stroke="#00BFFF" strokeWidth="1.5" strokeDasharray="3 3" />
                  )}
                </g>

                {/* 2. Battersea (Around HQ) */}
                <g
                  className="cursor-pointer group"
                  onClick={() => setSelectedArea(SERVICE_AREAS_DATA.find(a => a.id === 'battersea')!)}
                  transform="translate(300, 245)"
                >
                  <circle r="8" fill={selectedArea.id === 'battersea' ? '#00BFFF' : '#334155'} stroke="#00BFFF" strokeWidth="2" />
                  <text x="12" y="4" fill={selectedArea.id === 'battersea' ? '#00BFFF' : '#cbd5e1'} fontSize="11" fontWeight="bold">
                    Battersea (SW11)
                  </text>
                </g>

                {/* 3. Clapham */}
                <g
                  className="cursor-pointer group"
                  onClick={() => setSelectedArea(SERVICE_AREAS_DATA.find(a => a.id === 'clapham')!)}
                  transform="translate(340, 310)"
                >
                  <circle r="8" fill={selectedArea.id === 'clapham' ? '#00BFFF' : '#334155'} stroke="#00BFFF" strokeWidth="2" />
                  <text x="12" y="4" fill={selectedArea.id === 'clapham' ? '#00BFFF' : '#cbd5e1'} fontSize="11" fontWeight="bold">
                    Clapham (SW4)
                  </text>
                  {selectedArea.id === 'clapham' && (
                    <line x1="0" y1="0" x2="-60" y2="-50" stroke="#00BFFF" strokeWidth="1.5" strokeDasharray="3 3" />
                  )}
                </g>

                {/* 4. Wandsworth */}
                <g
                  className="cursor-pointer group"
                  onClick={() => setSelectedArea(SERVICE_AREAS_DATA.find(a => a.id === 'wandsworth')!)}
                  transform="translate(190, 290)"
                >
                  <circle r="8" fill={selectedArea.id === 'wandsworth' ? '#00BFFF' : '#334155'} stroke="#00BFFF" strokeWidth="2" />
                  <text x="12" y="4" fill={selectedArea.id === 'wandsworth' ? '#00BFFF' : '#cbd5e1'} fontSize="11" fontWeight="bold">
                    Wandsworth (SW18)
                  </text>
                  {selectedArea.id === 'wandsworth' && (
                    <line x1="0" y1="0" x2="90" y2="-30" stroke="#00BFFF" strokeWidth="1.5" strokeDasharray="3 3" />
                  )}
                </g>

                {/* 5. South West London outer zone (Fulham / Putney / Wimbledon) */}
                <g
                  className="cursor-pointer group"
                  onClick={() => setSelectedArea(SERVICE_AREAS_DATA.find(a => a.id === 'south-west-london')!)}
                  transform="translate(140, 360)"
                >
                  <circle r="8" fill={selectedArea.id === 'south-west-london' ? '#00BFFF' : '#334155'} stroke="#00BFFF" strokeWidth="2" />
                  <text x="12" y="4" fill={selectedArea.id === 'south-west-london' ? '#00BFFF' : '#cbd5e1'} fontSize="11" fontWeight="bold">
                    SW London (SW6, SW15, SW19)
                  </text>
                  {selectedArea.id === 'south-west-london' && (
                    <line x1="0" y1="0" x2="140" y2="-100" stroke="#00BFFF" strokeWidth="1.5" strokeDasharray="3 3" />
                  )}
                </g>

              </svg>

              {/* Map Legend */}
              <div className="absolute bottom-4 left-4 z-10 flex flex-wrap items-center gap-3 px-3 py-1.5 rounded-xl bg-[#0B1220]/90 border border-white/10 text-[11px] text-slate-300 backdrop-blur-md">
                <div className="flex items-center gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#D4AF37]" />
                  <span>HQ Base</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#00BFFF]" />
                  <span>Rapid Zone (&lt;25m)</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full border border-dashed border-[#00BFFF]" />
                  <span>24/7 Dispatch Radius</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Selected Area Card & Neighborhood List */}
          <div className="lg:col-span-5 space-y-4">
            
            {/* Active Area Spotlight Card */}
            <div className="glass-panel p-6 sm:p-7 rounded-3xl border border-[#00BFFF]/30 shadow-2xl relative overflow-hidden">
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs uppercase font-extrabold tracking-wider px-2.5 py-1 rounded-lg bg-[#00BFFF]/20 text-[#00BFFF] border border-[#00BFFF]/30">
                  Postcode: {selectedArea.postcode}
                </span>

                <div className="flex items-center gap-1.5 text-emerald-400 text-xs font-bold">
                  <Clock className="w-4 h-4" />
                  <span>ETA: {selectedArea.responseTime}</span>
                </div>
              </div>

              <h3 className="text-2xl font-bold text-white font-heading">
                {selectedArea.name} Electrical Services
              </h3>

              <p className="mt-2 text-sm text-slate-300 leading-relaxed">
                {selectedArea.description}
              </p>

              <div className="mt-5 pt-4 border-t border-white/10">
                <div className="text-xs font-semibold text-slate-400 mb-2">
                  Key Neighborhoods & Landmarks:
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {selectedArea.landmarks.map((mark, i) => (
                    <span
                      key={i}
                      className="px-2.5 py-1 rounded-lg bg-slate-800 text-slate-300 text-xs border border-slate-700"
                    >
                      {mark}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mt-6 pt-5 border-t border-white/10 flex items-center justify-between gap-3">
                <a
                  href={`tel:${COMPANY_INFO.phoneRaw}`}
                  className="w-full py-2.5 rounded-xl bg-gradient-to-r from-[#00BFFF] to-[#0284c7] text-[#0B1220] font-bold text-xs text-center flex items-center justify-center gap-2 shadow-[0_0_15px_rgba(0,191,255,0.35)]"
                >
                  <Phone className="w-4 h-4 fill-[#0B1220]" />
                  Call {selectedArea.name} Team Now
                </a>
              </div>
            </div>

            {/* Quick Area Switcher Buttons */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
              {SERVICE_AREAS_DATA.map((area) => (
                <button
                  key={area.id}
                  id={`area-btn-${area.id}`}
                  onClick={() => setSelectedArea(area)}
                  className={`p-3 rounded-xl text-left transition-all flex flex-col justify-between ${
                    selectedArea.id === area.id
                      ? 'bg-[#00BFFF]/20 border border-[#00BFFF] text-white shadow-[0_0_12px_rgba(0,191,255,0.2)]'
                      : 'glass-card border border-white/5 text-slate-300 hover:bg-white/10'
                  }`}
                >
                  <span className="font-bold text-xs">{area.name}</span>
                  <span className="text-[10px] text-slate-400 mt-1">{area.postcode}</span>
                </button>
              ))}
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
