import React, { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';

export const WebsiteFaq: React.FC = () => {
  const [openIdx, setOpenIdx] = useState<number | null>(0);
  const { t } = useLanguage();

  return (
    <section id="faq" className="py-24 bg-slate-950 text-white border-t border-slate-900 relative overflow-hidden">
      {/* Dynamic Background Glows */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-cyan-600/10 blur-[150px] rounded-full pointer-events-none animate-aura-drift" />
      <div className="absolute top-1/4 right-10 w-[400px] h-[400px] bg-blue-600/10 blur-[140px] rounded-full pointer-events-none animate-aura-drift" style={{ animationDelay: '-9s' }} />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-14">
          <div className="inline-flex items-center space-x-1.5 rtl:space-x-reverse px-4 py-1.5 rounded-full bg-slate-900/90 backdrop-blur-md border border-cyan-500/40 text-cyan-300 text-xs font-semibold mb-4 shadow-xl shadow-cyan-950/60 hover:border-cyan-400 hover:scale-105 transition-all duration-300">
            <HelpCircle className="h-3.5 w-3.5 text-cyan-400 animate-pulse" />
            <span>{t.faq.kicker}</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight mb-4 text-balance">
            {t.faq.title}
          </h2>
          <p className="text-sm text-slate-300 text-balance leading-relaxed">
            {t.faq.description}
          </p>
        </div>

        <div className="space-y-4">
          {t.faq.items.map((faq, i) => {
            const isOpen = openIdx === i;
            return (
              <div
                key={i}
                className={`rounded-2xl overflow-hidden transition-all duration-300 border ${
                  isOpen
                    ? 'bg-gradient-to-r from-slate-900/95 via-slate-900 to-slate-950/95 border-cyan-400/70 shadow-2xl shadow-cyan-950/50 ring-1 ring-cyan-400/30'
                    : 'bg-slate-900/60 border-slate-800/80 hover:border-cyan-500/40 hover:bg-slate-900/90 hover:-translate-y-0.5'
                }`}
              >
                <button
                  onClick={() => setOpenIdx(isOpen ? null : i)}
                  className="w-full p-5 sm:p-6 text-left rtl:text-right flex items-center justify-between space-x-4 rtl:space-x-reverse cursor-pointer group"
                >
                  <span className={`font-bold text-sm sm:text-base transition-colors ${isOpen ? 'text-cyan-300' : 'text-white group-hover:text-cyan-300'}`}>
                    {faq.q}
                  </span>
                  <div
                    className={`p-2 rounded-xl transition-all duration-300 shrink-0 ${
                      isOpen ? 'bg-cyan-500/25 text-cyan-300 rotate-180 shadow-md shadow-cyan-500/30' : 'bg-slate-800 text-slate-400 group-hover:text-white group-hover:bg-slate-700'
                    }`}
                  >
                    <ChevronDown className="h-4 w-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 sm:px-6 pb-6 pt-2 text-xs sm:text-sm text-slate-300 leading-relaxed border-t border-slate-800/80 animate-in fade-in slide-in-from-top-2 duration-200">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
