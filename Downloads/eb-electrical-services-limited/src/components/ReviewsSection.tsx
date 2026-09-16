import React, { useState } from 'react';
import { REVIEWS_DATA, COMPANY_INFO } from '../data/electricalData';
import { Star, CheckCircle2, MessageSquare, ExternalLink, ThumbsUp, Sparkles } from 'lucide-react';

export const ReviewsSection: React.FC = () => {
  const [filter, setFilter] = useState<'all' | 'hive' | 'fuse' | 'emergency'>('all');

  const filteredReviews = REVIEWS_DATA.filter(rev => {
    if (filter === 'hive') return rev.text.toLowerCase().includes('hive') || rev.serviceType.toLowerCase().includes('hive');
    if (filter === 'fuse') return rev.text.toLowerCase().includes('fuse') || rev.serviceType.toLowerCase().includes('fuse');
    if (filter === 'emergency') return rev.text.toLowerCase().includes('emergency') || rev.serviceType.toLowerCase().includes('emergency');
    return true;
  });

  return (
    <section id="reviews" className="relative py-20 lg:py-28 overflow-hidden">
      {/* Background radial glow */}
      <div className="absolute top-1/2 right-1/4 w-[500px] h-[500px] bg-[#D4AF37]/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-800/80 border border-[#D4AF37]/30 text-xs font-semibold text-[#D4AF37]">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Google Verified Customer Reviews</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-white font-heading tracking-tight">
            Loved By London Homeowners & Landlords
          </h2>

          {/* Google Score Summary Card */}
          <div className="inline-flex items-center gap-3 px-5 py-2.5 rounded-2xl glass-panel border border-[#D4AF37]/30 mt-2 shadow-lg">
            <div className="flex items-center gap-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 text-[#D4AF37] fill-[#D4AF37]" />
              ))}
            </div>
            <span className="font-extrabold text-white text-sm font-heading">
              5.0 / 5.0
            </span>
            <span className="text-slate-400 text-xs">•</span>
            <span className="text-slate-300 text-xs font-medium">
              Over {COMPANY_INFO.reviewsCount} 5-Star Reviews on Google
            </span>
          </div>
        </div>

        {/* Filter chips */}
        <div className="flex items-center justify-center gap-2 mb-10 overflow-x-auto pb-2">
          <button
            onClick={() => setFilter('all')}
            className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold transition-all ${
              filter === 'all'
                ? 'bg-[#00BFFF] text-[#0B1220] font-bold shadow-[0_0_12px_#00BFFF]'
                : 'glass-card text-slate-300 hover:text-white'
            }`}
          >
            All Reviews
          </button>
          <button
            onClick={() => setFilter('hive')}
            className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold transition-all ${
              filter === 'hive'
                ? 'bg-[#00BFFF] text-[#0B1220] font-bold shadow-[0_0_12px_#00BFFF]'
                : 'glass-card text-slate-300 hover:text-white'
            }`}
          >
            Hive & Smart Controls
          </button>
          <button
            onClick={() => setFilter('fuse')}
            className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold transition-all ${
              filter === 'fuse'
                ? 'bg-[#00BFFF] text-[#0B1220] font-bold shadow-[0_0_12px_#00BFFF]'
                : 'glass-card text-slate-300 hover:text-white'
            }`}
          >
            Fuse Boards & Rewires
          </button>
          <button
            onClick={() => setFilter('emergency')}
            className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold transition-all ${
              filter === 'emergency'
                ? 'bg-[#00BFFF] text-[#0B1220] font-bold shadow-[0_0_12px_#00BFFF]'
                : 'glass-card text-slate-300 hover:text-white'
            }`}
          >
            24/7 Emergency Call-outs
          </button>
        </div>

        {/* Floating Glass Review Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredReviews.map((review, idx) => (
            <div
              key={review.id}
              id={`review-card-${review.id}`}
              className="glass-card p-6 sm:p-7 rounded-2xl border border-white/10 hover:border-[#D4AF37]/50 transition-all duration-300 flex flex-col justify-between relative group hover:-translate-y-1 shadow-xl"
              style={{
                animationDelay: `${idx * 0.1}s`,
              }}
            >
              {/* Top Accent line */}
              <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-transparent via-[#D4AF37]/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

              <div>
                {/* 5 Stars Display */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-1">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-4 h-4 text-[#D4AF37] fill-[#D4AF37]"
                      />
                    ))}
                  </div>

                  <span className="text-[11px] text-slate-400 font-medium">
                    {review.date}
                  </span>
                </div>

                {/* Review Text */}
                <p className="text-sm sm:text-base text-slate-200 leading-relaxed italic font-normal">
                  "{review.text}"
                </p>
              </div>

              {/* Reviewer Details Footer */}
              <div className="mt-6 pt-5 border-t border-white/10 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#00BFFF]/20 to-[#D4AF37]/20 border border-white/20 flex items-center justify-center font-bold text-sm text-white font-heading">
                    {review.name.charAt(0)}
                  </div>
                  <div>
                    <div className="font-bold text-sm text-white flex items-center gap-1.5">
                      {review.name}
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                    </div>
                    <div className="text-xs text-slate-400">
                      {review.location}
                    </div>
                  </div>
                </div>

                <div className="text-right">
                  <span className="text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded bg-slate-800 text-[#00BFFF] border border-[#00BFFF]/20">
                    {review.serviceType.split(' ')[0]}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Social Proof Bar */}
        <div className="mt-12 text-center">
          <div className="inline-flex flex-wrap items-center justify-center gap-4 px-6 py-3 rounded-2xl glass-panel border border-white/10 text-xs sm:text-sm text-slate-300">
            <span>Verified reviews syndicated from Google Business Profile</span>
            <a
              href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(COMPANY_INFO.name + ' ' + COMPANY_INFO.address)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#00BFFF] hover:text-white font-semibold flex items-center gap-1 underline underline-offset-4"
            >
              <span>View all 71+ on Google Maps</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};
