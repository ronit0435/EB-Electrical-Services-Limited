import React from 'react';
import { COMPANY_INFO } from '../data/electricalData';
import { Phone, MessageSquare, Zap } from 'lucide-react';

export const EmergencyFloatingBar: React.FC = () => {
  return (
    <div className="fixed bottom-3 inset-x-3 z-40 sm:hidden">
      <div className="p-2 rounded-2xl glass-panel border border-[#00BFFF]/30 shadow-2xl flex items-center justify-between gap-2 backdrop-blur-2xl">
        <a
          id="mobile-float-call"
          href={`tel:${COMPANY_INFO.phoneRaw}`}
          className="flex-1 py-3 px-3 rounded-xl bg-gradient-to-r from-[#00BFFF] to-[#0284c7] text-[#0B1220] font-extrabold text-xs flex items-center justify-center gap-1.5 shadow-[0_0_15px_rgba(0,191,255,0.4)]"
        >
          <Phone className="w-4 h-4 fill-[#0B1220]" />
          <span>Call 24/7 ({COMPANY_INFO.phoneDisplay})</span>
        </a>

        <a
          id="mobile-float-whatsapp"
          href="https://wa.me/447376635189"
          target="_blank"
          rel="noopener noreferrer"
          className="p-3 rounded-xl bg-emerald-500/20 text-emerald-400 border border-emerald-500/40 flex items-center justify-center"
          aria-label="WhatsApp Us"
        >
          <MessageSquare className="w-4 h-4" />
        </a>
      </div>
    </div>
  );
};
