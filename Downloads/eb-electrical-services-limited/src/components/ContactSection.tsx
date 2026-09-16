import React, { useState } from 'react';
import { COMPANY_INFO, SERVICES_DATA } from '../data/electricalData';
import { QuoteFormData } from '../types';
import { Phone, MessageSquare, Send, CheckCircle2, MapPin, Clock, ShieldCheck, Mail, Zap, Sparkles } from 'lucide-react';
import confetti from 'canvas-confetti';

interface ContactSectionProps {
  selectedServicePreset?: string;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ selectedServicePreset }) => {
  const [formData, setFormData] = useState<QuoteFormData>({
    name: '',
    phone: '',
    email: '',
    serviceRequired: selectedServicePreset || 'Lighting Installation',
    urgency: 'standard',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Sync preset if passed from service card
  React.useEffect(() => {
    if (selectedServicePreset) {
      setFormData(prev => ({ ...prev, serviceRequired: selectedServicePreset }));
    }
  }, [selectedServicePreset]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);

      // Trigger celebratory sparks
      try {
        confetti({
          particleCount: 80,
          spread: 70,
          origin: { y: 0.6 },
          colors: ['#00BFFF', '#D4AF37', '#ffffff'],
        });
      } catch (err) {
        // Fallback gracefully
      }
    }, 800);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const whatsappMessage = encodeURIComponent(
    `Hello EB Electrical Services! My name is ${formData.name || 'a customer'}. I would like to enquire about ${formData.serviceRequired || 'electrical services'} in London.`
  );

  return (
    <section id="contact" className="relative py-20 lg:py-28 overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/3 right-1/3 w-[600px] h-[600px] bg-[#00BFFF]/5 rounded-full blur-[170px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-800/80 border border-[#00BFFF]/30 text-xs font-semibold text-[#00BFFF]">
            <Zap className="w-3.5 h-3.5" />
            <span>Fast Response Electrical Dispatch</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-white font-heading tracking-tight">
            Request a Free Quote or 24/7 Emergency Support
          </h2>
          <p className="text-slate-300 text-sm sm:text-base">
            Fill out our quick glass form below or contact Eric directly via phone or WhatsApp for immediate assistance.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Glass Contact Form */}
          <div className="lg:col-span-7">
            <div className="glass-panel p-6 sm:p-10 rounded-3xl border border-white/10 shadow-2xl relative overflow-hidden">
              
              {submitted ? (
                <div className="py-12 text-center space-y-4 animate-in fade-in zoom-in">
                  <div className="w-16 h-16 rounded-full bg-emerald-500/20 border border-emerald-500/40 text-emerald-400 flex items-center justify-center mx-auto shadow-[0_0_25px_rgba(16,185,129,0.3)]">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>

                  <h3 className="text-2xl font-bold text-white font-heading">
                    Quote Request Received!
                  </h3>

                  <p className="text-slate-300 text-sm max-w-md mx-auto leading-relaxed">
                    Thank you, <span className="text-white font-semibold">{formData.name}</span>. We have logged your request for{' '}
                    <span className="text-[#00BFFF] font-semibold">{formData.serviceRequired}</span>. An electrician will review your details and contact you shortly at{' '}
                    <span className="text-white font-semibold">{formData.phone}</span>.
                  </p>

                  <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800 text-xs text-slate-300 max-w-sm mx-auto">
                    <div className="font-semibold text-white mb-1">Need immediate emergency help?</div>
                    <div>Call 24/7 dispatch directly at:</div>
                    <a
                      href={`tel:${COMPANY_INFO.phoneRaw}`}
                      className="text-[#00BFFF] font-bold text-sm hover:underline block mt-1"
                    >
                      {COMPANY_INFO.phoneDisplay}
                    </a>
                  </div>

                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({
                        name: '',
                        phone: '',
                        email: '',
                        serviceRequired: 'Lighting Installation',
                        urgency: 'standard',
                        message: '',
                      });
                    }}
                    className="px-5 py-2.5 rounded-xl bg-slate-800 text-slate-300 hover:text-white text-xs font-semibold transition-all border border-slate-700"
                  >
                    Send Another Enquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  
                  {/* Urgency Selector */}
                  <div className="grid grid-cols-2 gap-3 mb-2">
                    <button
                      type="button"
                      onClick={() => setFormData(prev => ({ ...prev, urgency: 'standard' }))}
                      className={`p-3 rounded-xl border text-left transition-all ${
                        formData.urgency === 'standard'
                          ? 'bg-[#00BFFF]/20 border-[#00BFFF] text-white'
                          : 'bg-slate-900/50 border-slate-800 text-slate-400 hover:text-slate-200'
                      }`}
                    >
                      <div className="text-xs font-bold text-white flex items-center gap-1.5">
                        <Clock className="w-3.5 h-3.5 text-[#00BFFF]" /> Standard Quote
                      </div>
                      <div className="text-[10px] text-slate-400 mt-0.5">Scheduled works & estimates</div>
                    </button>

                    <button
                      type="button"
                      onClick={() => setFormData(prev => ({ ...prev, urgency: 'emergency' }))}
                      className={`p-3 rounded-xl border text-left transition-all ${
                        formData.urgency === 'emergency'
                          ? 'bg-rose-500/20 border-rose-500 text-white shadow-[0_0_15px_rgba(244,63,94,0.3)]'
                          : 'bg-slate-900/50 border-slate-800 text-slate-400 hover:text-slate-200'
                      }`}
                    >
                      <div className="text-xs font-bold text-rose-300 flex items-center gap-1.5">
                        <Zap className="w-3.5 h-3.5 text-rose-400" /> 24/7 Emergency
                      </div>
                      <div className="text-[10px] text-slate-400 mt-0.5">Immediate power outage / fault</div>
                    </button>
                  </div>

                  {/* Name & Phone */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="e.g. James Wilson"
                        className="w-full px-4 py-3 rounded-xl bg-slate-900/80 border border-slate-700/80 text-white placeholder:text-slate-500 text-sm focus:border-[#00BFFF] focus:ring-1 focus:ring-[#00BFFF] outline-none transition-all"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        required
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="e.g. 07123 456789"
                        className="w-full px-4 py-3 rounded-xl bg-slate-900/80 border border-slate-700/80 text-white placeholder:text-slate-500 text-sm focus:border-[#00BFFF] focus:ring-1 focus:ring-[#00BFFF] outline-none transition-all"
                      />
                    </div>
                  </div>

                  {/* Email & Service Required */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="e.g. james@example.co.uk"
                        className="w-full px-4 py-3 rounded-xl bg-slate-900/80 border border-slate-700/80 text-white placeholder:text-slate-500 text-sm focus:border-[#00BFFF] focus:ring-1 focus:ring-[#00BFFF] outline-none transition-all"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                        Service Required *
                      </label>
                      <select
                        name="serviceRequired"
                        value={formData.serviceRequired}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl bg-slate-900/80 border border-slate-700/80 text-white text-sm focus:border-[#00BFFF] focus:ring-1 focus:ring-[#00BFFF] outline-none transition-all"
                      >
                        {SERVICES_DATA.map((s) => (
                          <option key={s.id} value={s.title}>
                            {s.title} ({s.category})
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                      Message / Project Details
                    </label>
                    <textarea
                      name="message"
                      rows={3}
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Please describe your job, property type, or any specific electrical faults..."
                      className="w-full px-4 py-3 rounded-xl bg-slate-900/80 border border-slate-700/80 text-white placeholder:text-slate-500 text-sm focus:border-[#00BFFF] focus:ring-1 focus:ring-[#00BFFF] outline-none transition-all resize-none"
                    />
                  </div>

                  {/* Action Buttons as requested: Call Now, WhatsApp, Request Quote */}
                  <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
                    
                    {/* Request Quote Button */}
                    <button
                      id="contact-submit-btn"
                      type="submit"
                      disabled={isSubmitting}
                      className="flex-1 relative group overflow-hidden py-3.5 px-6 rounded-xl bg-gradient-to-r from-[#00BFFF] via-sky-400 to-[#0284c7] text-[#0B1220] font-extrabold text-sm tracking-wide shadow-[0_0_20px_rgba(0,191,255,0.4)] hover:shadow-[0_0_30px_rgba(0,191,255,0.7)] transition-all cursor-pointer flex items-center justify-center gap-2"
                    >
                      <Send className="w-4 h-4 fill-[#0B1220]" />
                      <span>{isSubmitting ? 'Sending...' : 'Request Quote'}</span>
                    </button>

                    {/* Call Now Button */}
                    <a
                      id="contact-call-btn"
                      href={`tel:${COMPANY_INFO.phoneRaw}`}
                      className="py-3.5 px-5 rounded-xl glass-card hover:bg-white/10 text-white font-bold text-sm border border-slate-700 hover:border-[#00BFFF]/50 flex items-center justify-center gap-2 transition-all shrink-0"
                    >
                      <Phone className="w-4 h-4 text-[#00BFFF]" />
                      <span>Call Now</span>
                    </a>

                    {/* WhatsApp Button */}
                    <a
                      id="contact-whatsapp-btn"
                      href={`https://wa.me/447376635189?text=${whatsappMessage}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="py-3.5 px-5 rounded-xl bg-emerald-600/20 hover:bg-emerald-600/30 text-emerald-400 font-bold text-sm border border-emerald-500/40 flex items-center justify-center gap-2 transition-all shrink-0"
                    >
                      <MessageSquare className="w-4 h-4" />
                      <span>WhatsApp</span>
                    </a>

                  </div>

                  <div className="flex items-center gap-2 text-[11px] text-slate-400 pt-2">
                    <ShieldCheck className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                    <span>Your privacy is protected. We respond within 15 minutes during active hours.</span>
                  </div>
                </form>
              )}

            </div>
          </div>

          {/* Right Column: Contact Information Cards */}
          <div className="lg:col-span-5 space-y-4">
            
            {/* Direct Phone & Emergency Card */}
            <div className="glass-panel p-6 rounded-2xl border border-[#00BFFF]/30 shadow-xl space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-[#00BFFF]/20 border border-[#00BFFF]/40 flex items-center justify-center text-[#00BFFF] shadow-[0_0_15px_rgba(0,191,255,0.3)]">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-xs text-slate-400 font-medium uppercase tracking-wider">Direct Telephone & 24/7 Dispatch</span>
                  <a
                    href={`tel:${COMPANY_INFO.phoneRaw}`}
                    className="text-xl sm:text-2xl font-extrabold text-white hover:text-[#00BFFF] font-heading block transition-colors"
                  >
                    {COMPANY_INFO.phone}
                  </a>
                </div>
              </div>

              <p className="text-xs text-slate-300 leading-relaxed pt-2 border-t border-white/10">
                Call anytime for urgent electrical repairs, tripped consumer units, burning odors, or planned installations.
              </p>
            </div>

            {/* Address Card */}
            <div className="glass-panel p-6 rounded-2xl border border-white/10 shadow-xl space-y-3">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-xl bg-[#D4AF37]/20 border border-[#D4AF37]/40 flex items-center justify-center text-[#D4AF37] shrink-0 mt-1">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white font-heading">London Registered Office & Workshop</h4>
                  <p className="text-xs text-slate-300 mt-1 leading-relaxed">
                    {COMPANY_INFO.address}
                  </p>
                  <div className="mt-3 flex items-center gap-2">
                    <a
                      href={`https://maps.google.com/?q=${encodeURIComponent(COMPANY_INFO.address)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs text-[#00BFFF] hover:underline flex items-center gap-1 font-semibold"
                    >
                      <span>Open in Google Maps</span>
                      <span>→</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Availability & Opening Hours */}
            <div className="glass-panel p-6 rounded-2xl border border-white/10 shadow-xl space-y-3">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-xl bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center text-emerald-400 shrink-0 mt-1">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <h4 className="text-sm font-bold text-white font-heading">Opening Hours</h4>
                    <span className="px-2 py-0.5 rounded text-[10px] font-extrabold bg-emerald-500/20 text-emerald-400 border border-emerald-500/30">
                      OPEN 24 HOURS
                    </span>
                  </div>
                  <p className="text-xs text-slate-300 mt-1 leading-relaxed">
                    Monday to Sunday: Open 24 Hours. Rapid emergency attendance throughout South West London.
                  </p>
                </div>
              </div>
            </div>

            {/* Certification Badge */}
            <div className="glass-card p-4 rounded-xl border border-white/5 flex items-center gap-3 text-xs">
              <div className="w-8 h-8 rounded-lg bg-[#D4AF37]/20 flex items-center justify-center text-[#D4AF37] shrink-0">
                <ShieldCheck className="w-4 h-4" />
              </div>
              <div>
                <span className="font-bold text-white block">Fully Qualified & NICEIC Registered</span>
                <span className="text-slate-400 text-[11px]">All works tested and certified to BS 7671 Part P</span>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
