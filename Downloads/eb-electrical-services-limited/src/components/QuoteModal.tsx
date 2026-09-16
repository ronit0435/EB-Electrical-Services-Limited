import React, { useState } from 'react';
import { COMPANY_INFO, SERVICES_DATA } from '../data/electricalData';
import { X, Zap, Send, Phone, CheckCircle2 } from 'lucide-react';
import confetti from 'canvas-confetti';

interface QuoteModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultService?: string;
}

export const QuoteModal: React.FC<QuoteModalProps> = ({ isOpen, onClose, defaultService }) => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [service, setService] = useState(defaultService || 'Lighting Installation');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  React.useEffect(() => {
    if (defaultService) {
      setService(defaultService);
    }
  }, [defaultService]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      try {
        confetti({
          particleCount: 70,
          spread: 60,
          origin: { y: 0.5 },
          colors: ['#00BFFF', '#D4AF37'],
        });
      } catch (err) {}
    }, 700);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
      <div className="relative w-full max-w-lg glass-panel p-6 sm:p-8 rounded-3xl border border-[#00BFFF]/40 shadow-2xl overflow-hidden">
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-full bg-slate-800 text-slate-300 hover:text-white hover:bg-slate-700 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {submitted ? (
          <div className="py-8 text-center space-y-4">
            <div className="w-14 h-14 rounded-full bg-emerald-500/20 border border-emerald-500/40 text-emerald-400 flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-7 h-7" />
            </div>
            <h3 className="text-xl font-bold text-white font-heading">
              Request Received!
            </h3>
            <p className="text-xs text-slate-300 leading-relaxed max-w-sm mx-auto">
              Thank you {name}. We will review your request for {service} and call you back at {phone} within 15 minutes.
            </p>
            <div className="pt-3">
              <button
                onClick={onClose}
                className="px-6 py-2.5 rounded-xl bg-[#00BFFF] text-[#0B1220] font-bold text-xs"
              >
                Done
              </button>
            </div>
          </div>
        ) : (
          <div>
            <div className="flex items-center gap-2 mb-2">
              <div className="w-8 h-8 rounded-lg bg-[#00BFFF]/20 border border-[#00BFFF]/40 flex items-center justify-center text-[#00BFFF]">
                <Zap className="w-4 h-4" />
              </div>
              <h3 className="text-xl font-bold text-white font-heading">
                Instant Electrical Quote
              </h3>
            </div>
            <p className="text-xs text-slate-400 mb-6">
              Get transparent pricing from NICEIC registered electricians across London.
            </p>

            <form onSubmit={handleSubmit} className="space-y-4 text-xs">
              <div>
                <label className="block font-semibold text-slate-300 mb-1">Your Name *</label>
                <input
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="e.g. John Smith"
                  className="w-full px-3.5 py-2.5 rounded-xl bg-slate-900 border border-slate-700 text-white outline-none focus:border-[#00BFFF]"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block font-semibold text-slate-300 mb-1">Phone Number *</label>
                  <input
                    type="tel"
                    required
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="07376 635189"
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-900 border border-slate-700 text-white outline-none focus:border-[#00BFFF]"
                  />
                </div>
                <div>
                  <label className="block font-semibold text-slate-300 mb-1">Email *</label>
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="john@example.com"
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-900 border border-slate-700 text-white outline-none focus:border-[#00BFFF]"
                  />
                </div>
              </div>

              <div>
                <label className="block font-semibold text-slate-300 mb-1">Service Required</label>
                <select
                  value={service}
                  onChange={(e) => setService(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-slate-900 border border-slate-700 text-white outline-none focus:border-[#00BFFF]"
                >
                  {SERVICES_DATA.map((s) => (
                    <option key={s.id} value={s.title}>
                      {s.title} ({s.category})
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block font-semibold text-slate-300 mb-1">Notes / Postcode</label>
                <textarea
                  rows={2}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Tell us about the property or issue..."
                  className="w-full px-3.5 py-2.5 rounded-xl bg-slate-900 border border-slate-700 text-white outline-none focus:border-[#00BFFF] resize-none"
                />
              </div>

              <div className="pt-2 flex items-center justify-between gap-3">
                <a
                  href={`tel:${COMPANY_INFO.phoneRaw}`}
                  className="px-4 py-2.5 rounded-xl bg-slate-800 text-slate-200 hover:text-white font-bold text-xs flex items-center gap-1.5 border border-slate-700"
                >
                  <Phone className="w-3.5 h-3.5 text-[#00BFFF]" />
                  <span>Call Directly</span>
                </a>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="flex-1 py-2.5 px-4 rounded-xl bg-gradient-to-r from-[#00BFFF] to-[#0284c7] text-[#0B1220] font-extrabold text-xs shadow-[0_0_15px_rgba(0,191,255,0.4)] flex items-center justify-center gap-1.5"
                >
                  <Send className="w-3.5 h-3.5 fill-[#0B1220]" />
                  <span>{isSubmitting ? 'Processing...' : 'Submit Quote Request'}</span>
                </button>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};
