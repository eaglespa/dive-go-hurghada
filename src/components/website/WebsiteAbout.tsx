import React from 'react';
import {
  ShieldCheck,
  HeartHandshake,
  Anchor,
  Users,
  Sparkles,
  MapPin,
} from 'lucide-react';
import { SocialMediaBar } from '../common/SocialMediaBar';
import { useLanguage } from '../../context/LanguageContext';
import aboutFleetImg from '../../assets/images/daily_scuba_diving_1790535763765.jpg';

export const WebsiteAbout: React.FC = () => {
  const { t } = useLanguage();

  const stats = [
    { label: t.about.statYears, value: '14+' },
    { label: t.about.statDives, value: '25,000+' },
    { label: t.about.statSafety, value: '100%' },
    { label: t.about.statScore, value: '4.9 ★' },
  ];

  return (
    <section id="about" className="py-24 bg-slate-950 text-white border-t border-slate-900 relative overflow-hidden">
      {/* Background Accent Glow */}
      <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-cyan-600/5 blur-[150px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Text & Interactive Pillars */}
          <div className="space-y-6">
            <div>
              <div className="inline-flex items-center space-x-1.5 rtl:space-x-reverse px-3 py-1 rounded-full bg-cyan-950/80 border border-cyan-800/80 text-cyan-300 text-xs font-semibold mb-3">
                <Sparkles className="h-3.5 w-3.5 text-cyan-400" />
                <span>{t.about.kicker}</span>
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-tight text-balance">
                {t.about.title}
              </h2>
            </div>

            <p className="text-sm text-slate-300 leading-relaxed">
              {t.about.p1}
            </p>

            <p className="text-sm text-slate-300 leading-relaxed">
              {t.about.p2}
            </p>

            {/* Quick Metrics Counter Row */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 py-2">
              {stats.map((s, idx) => (
                <div
                  key={idx}
                  className="bg-gradient-to-b from-slate-900/95 to-slate-950/95 p-3.5 rounded-2xl border border-slate-800 hover:border-cyan-500/50 hover:shadow-xl hover:shadow-cyan-950/50 hover:-translate-y-1.5 transition-all duration-300 text-center group"
                >
                  <span className="text-2xl font-black text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-teal-200 to-sky-400 block group-hover:scale-105 transition-transform duration-300">
                    {s.value}
                  </span>
                  <span className="text-[10px] text-slate-400 mt-1 block font-semibold leading-tight">
                    {s.label}
                  </span>
                </div>
              ))}
            </div>

            {/* Core Pillars */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="flex items-start space-x-3.5 rtl:space-x-reverse p-4 bg-slate-900/80 hover:bg-slate-900 rounded-2xl border border-slate-800 hover:border-cyan-400/70 hover:shadow-xl hover:shadow-cyan-950/60 hover:-translate-y-1.5 transition-all duration-300 group shadow-lg">
                <div className="p-2.5 rounded-xl bg-cyan-950/90 text-cyan-400 border border-cyan-500/40 group-hover:scale-110 group-hover:border-cyan-300 transition-all shrink-0 shadow-sm shadow-cyan-950/60">
                  <ShieldCheck className="h-5 w-5" />
                </div>
                <div className="text-xs">
                  <h4 className="font-bold text-white mb-0.5 group-hover:text-cyan-300 transition-colors">
                    {t.about.pillar1Title}
                  </h4>
                  <p className="text-slate-400">{t.about.pillar1Desc}</p>
                </div>
              </div>

              <div className="flex items-start space-x-3.5 rtl:space-x-reverse p-4 bg-slate-900/80 hover:bg-slate-900 rounded-2xl border border-slate-800 hover:border-emerald-400/70 hover:shadow-xl hover:shadow-emerald-950/60 hover:-translate-y-1.5 transition-all duration-300 group shadow-lg">
                <div className="p-2.5 rounded-xl bg-emerald-950/90 text-emerald-400 border border-emerald-500/40 group-hover:scale-110 group-hover:border-emerald-300 transition-all shrink-0 shadow-sm shadow-emerald-950/60">
                  <HeartHandshake className="h-5 w-5" />
                </div>
                <div className="text-xs">
                  <h4 className="font-bold text-white mb-0.5 group-hover:text-emerald-300 transition-colors">
                    {t.about.pillar2Title}
                  </h4>
                  <p className="text-slate-400">{t.about.pillar2Desc}</p>
                </div>
              </div>

              <div className="flex items-start space-x-3.5 rtl:space-x-reverse p-4 bg-slate-900/80 hover:bg-slate-900 rounded-2xl border border-slate-800 hover:border-blue-400/70 hover:shadow-xl hover:shadow-blue-950/60 hover:-translate-y-1.5 transition-all duration-300 group shadow-lg">
                <div className="p-2.5 rounded-xl bg-blue-950/90 text-blue-400 border border-blue-500/40 group-hover:scale-110 group-hover:border-blue-300 transition-all shrink-0 shadow-sm shadow-blue-950/60">
                  <Users className="h-5 w-5" />
                </div>
                <div className="text-xs">
                  <h4 className="font-bold text-white mb-0.5 group-hover:text-blue-300 transition-colors">
                    {t.about.pillar3Title}
                  </h4>
                  <p className="text-slate-400">{t.about.pillar3Desc}</p>
                </div>
              </div>

              <div className="flex items-start space-x-3.5 rtl:space-x-reverse p-4 bg-slate-900/80 hover:bg-slate-900 rounded-2xl border border-slate-800 hover:border-amber-400/70 hover:shadow-xl hover:shadow-amber-950/60 hover:-translate-y-1.5 transition-all duration-300 group shadow-lg">
                <div className="p-2.5 rounded-xl bg-amber-950/90 text-amber-400 border border-amber-500/40 group-hover:scale-110 group-hover:border-amber-300 transition-all shrink-0 shadow-sm shadow-amber-950/60">
                  <Anchor className="h-5 w-5" />
                </div>
                <div className="text-xs">
                  <h4 className="font-bold text-white mb-0.5 group-hover:text-amber-300 transition-colors">
                    {t.about.pillar4Title}
                  </h4>
                  <p className="text-slate-400">{t.about.pillar4Desc}</p>
                </div>
              </div>
            </div>

            <div className="pt-2 flex flex-col sm:flex-row sm:items-center space-y-2 sm:space-y-0 sm:space-x-4 rtl:space-x-reverse text-xs">
              <span className="text-slate-400 text-[11px] font-semibold">{t.about.socialKicker}</span>
              <SocialMediaBar iconSize="sm" />
            </div>
          </div>

          {/* Right Image / Showcase */}
          <div className="relative">
            <div className="rounded-3xl overflow-hidden shadow-2xl border border-slate-800/90 relative aspect-4/3 bg-slate-800 card-sheen group hover:border-cyan-500/50 hover:shadow-[0_20px_50px_rgba(6,182,212,0.2)] transition-all duration-500">
              <img
                src={aboutFleetImg}
                alt="Certified divers exploring coral wall in Red Sea"
                className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-700 ease-out"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/25 to-transparent" />

              {/* Floating Verified Badge */}
              <div className="absolute top-5 right-5 rtl:right-auto rtl:left-5 z-20 flex items-center space-x-2 rtl:space-x-reverse bg-slate-950/90 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-cyan-500/50 shadow-xl text-xs font-bold text-cyan-300">
                <span className="h-2 w-2 rounded-full bg-emerald-400 animate-ping" />
                <span>PADI 5-Star Standards</span>
              </div>

              <div className="absolute bottom-6 left-6 right-6 p-5 rounded-2xl bg-slate-900/90 backdrop-blur-xl border border-slate-700/80 text-xs text-slate-200 shadow-2xl group-hover:border-cyan-400/60 transition-colors">
                <div className="flex items-center space-x-2 rtl:space-x-reverse text-cyan-400 font-bold text-sm mb-1.5">
                  <MapPin className="h-4 w-4" />
                  <span>{t.about.fleetTitle}</span>
                </div>
                <p className="text-slate-300 leading-relaxed text-[11px]">
                  {t.about.fleetDesc}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
