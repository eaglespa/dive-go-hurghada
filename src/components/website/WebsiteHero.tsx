import React, { useState } from 'react';
import {
  Compass,
  Calendar,
  Users,
  MapPin,
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
} from 'lucide-react';
import { AppState } from '../../services/store';
import { useLanguage } from '../../context/LanguageContext';
import heroImg from '../../assets/images/hero_red_sea_diving_1790535752456.jpg';

interface WebsiteHeroProps {
  state: AppState;
  onOpenBooking: (serviceId?: string, date?: string, pax?: number) => void;
  onOpenAiChat: () => void;
}

export const WebsiteHero: React.FC<WebsiteHeroProps> = ({ state, onOpenBooking }) => {
  const tomorrow = new Date(Date.now() + 86400000).toISOString().split('T')[0];
  const [selectedServiceId, setSelectedServiceId] = useState(state.services[0]?.id || '');
  const [selectedDate, setSelectedDate] = useState(tomorrow);
  const [selectedPax, setSelectedPax] = useState(2);

  const { t, getLocalizedService } = useLanguage();

  const handleSearchAndBook = (e: React.FormEvent) => {
    e.preventDefault();
    onOpenBooking(selectedServiceId, selectedDate, selectedPax);
  };

  return (
    <section className="relative min-h-[720px] flex items-center justify-center overflow-hidden bg-slate-950">
      {/* Background Image with Dynamic Oceanic Depth & Radiant Light Rays */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImg}
          alt="Scuba diving over vibrant coral reefs in Red Sea Hurghada"
          className="w-full h-full object-cover object-center filter brightness-[0.88] scale-105 animate-float-slow duration-1000"
          referrerPolicy="no-referrer"
        />
        {/* Measured dark gradient overlay for optimal readability & contrast */}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/80 to-slate-950/50" />

        {/* Ambient Bioluminescent Color Auras */}
        <div className="absolute -top-24 left-1/4 w-[600px] h-[600px] bg-cyan-500/15 rounded-full blur-[140px] pointer-events-none animate-aura-drift" />
        <div className="absolute bottom-10 right-1/4 w-[500px] h-[500px] bg-blue-600/15 rounded-full blur-[150px] pointer-events-none animate-aura-drift" style={{ animationDelay: '-6s' }} />
        <div className="absolute top-1/3 right-10 w-[400px] h-[400px] bg-teal-400/10 rounded-full blur-[130px] pointer-events-none animate-aura-drift" style={{ animationDelay: '-11s' }} />

        {/* Sunlight Rays across water */}
        <div className="absolute inset-0 opacity-20 pointer-events-none bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-cyan-300/40 via-transparent to-transparent animate-ray-shimmer" />

        {/* Floating Underwater Bubbles Effect */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div
            className="absolute bottom-0 left-[12%] w-3.5 h-3.5 bg-cyan-300/40 rounded-full blur-[0.5px] border border-cyan-200/50 shadow-[0_0_10px_rgba(6,182,212,0.5)]"
            style={{ animation: 'bubbleRise 5.5s infinite ease-in', animationDelay: '0s' }}
          />
          <div
            className="absolute bottom-0 left-[28%] w-2 h-2 bg-blue-300/50 rounded-full blur-[0.5px] border border-blue-200/60 shadow-[0_0_8px_rgba(59,130,246,0.5)]"
            style={{ animation: 'bubbleRise 7.5s infinite ease-in', animationDelay: '1.8s' }}
          />
          <div
            className="absolute bottom-0 left-[48%] w-4 h-4 bg-teal-300/35 rounded-full blur-[0.5px] border border-teal-200/60 shadow-[0_0_12px_rgba(20,184,166,0.5)]"
            style={{ animation: 'bubbleRise 6.8s infinite ease-in', animationDelay: '3.2s' }}
          />
          <div
            className="absolute bottom-0 left-[68%] w-2.5 h-2.5 bg-cyan-200/40 rounded-full blur-[0.5px] border border-cyan-100/60 shadow-[0_0_10px_rgba(6,182,212,0.4)]"
            style={{ animation: 'bubbleRise 8.2s infinite ease-in', animationDelay: '0.8s' }}
          />
          <div
            className="absolute bottom-0 left-[88%] w-3 h-3 bg-sky-300/40 rounded-full blur-[0.5px] border border-sky-200/50 shadow-[0_0_10px_rgba(56,189,248,0.5)]"
            style={{ animation: 'bubbleRise 6.2s infinite ease-in', animationDelay: '2.5s' }}
          />
        </div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28 text-center text-white">
        {/* Live Status & Weather Pill */}
        <div className="inline-flex items-center space-x-2.5 rtl:space-x-reverse px-4.5 py-2 rounded-full bg-slate-900/90 backdrop-blur-xl border border-cyan-500/40 text-xs font-semibold text-cyan-300 mb-8 shadow-2xl shadow-cyan-950/70 hover:border-cyan-400 hover:scale-105 hover:shadow-[0_0_25px_rgba(6,182,212,0.4)] transition-all duration-300">
          <span className="relative flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-400 shadow-[0_0_8px_rgba(52,211,153,0.8)]" />
          </span>
          <span className="font-mono text-emerald-400 font-bold uppercase tracking-wider text-[11px]">
            {t.hero.liveKicker}
          </span>
          <span className="text-slate-600">·</span>
          <span className="text-slate-200 font-medium">{t.hero.weatherKicker}</span>
        </div>

        {/* Main Display Headline with Radiant Shimmer */}
        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black tracking-tight max-w-5xl mx-auto leading-[1.1] text-balance mb-6">
          {t.hero.titlePart1}{' '}
          <span className="bg-gradient-to-r from-cyan-300 via-teal-200 to-sky-400 bg-clip-text text-transparent drop-shadow-[0_0_35px_rgba(6,182,212,0.4)] hover:brightness-110 transition-all duration-500">
            {t.hero.titleHighlight}
          </span>
        </h1>

        <p className="text-base sm:text-lg text-slate-200/90 max-w-2xl mx-auto leading-relaxed mb-12 text-balance font-normal">
          {t.hero.description}
        </p>

        {/* Trip Finder & Quick Booking Bar */}
        <form
          onSubmit={handleSearchAndBook}
          className="bg-slate-900/85 backdrop-blur-2xl border border-slate-700/80 hover:border-cyan-400/70 rounded-2xl sm:rounded-3xl p-3 sm:p-4 max-w-5xl mx-auto shadow-[0_20px_50px_rgba(0,0,0,0.8),0_0_30px_rgba(6,182,212,0.12)] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 items-center text-left rtl:text-right text-xs transition-all duration-500 hover:shadow-[0_20px_60px_rgba(6,182,212,0.25)] card-sheen"
        >
          {/* Service Picker */}
          <div className="h-14 bg-slate-800/80 hover:bg-slate-800 border border-slate-700/80 hover:border-cyan-500/70 focus-within:border-cyan-400 focus-within:ring-2 focus-within:ring-cyan-500/30 focus-within:shadow-[0_0_20px_rgba(6,182,212,0.3)] rounded-2xl px-3.5 py-1 flex items-center space-x-2.5 rtl:space-x-reverse transition-all duration-300 group">
            <div className="p-1.5 rounded-lg bg-cyan-950/80 border border-cyan-800/60 group-hover:border-cyan-400 group-hover:scale-110 transition-all">
              <Compass className="h-4 w-4 text-cyan-400 shrink-0 group-hover:rotate-45 transition-transform duration-300" />
            </div>
            <div className="flex-1 min-w-0">
              <span className="block text-[10px] font-bold text-cyan-400 uppercase tracking-wider leading-none mb-0.5 truncate">
                {t.hero.selectExcursion}
              </span>
              <select
                value={selectedServiceId}
                onChange={(e) => setSelectedServiceId(e.target.value)}
                aria-label={t.hero.selectExcursion}
                className="w-full bg-transparent text-white font-semibold text-xs sm:text-sm outline-none cursor-pointer truncate leading-tight"
              >
                {state.services.map((s) => {
                  const loc = getLocalizedService(s);
                  const isAsk = s.id === 'srv-dgh-private-padi' || s.id === 'srv-dgh-tauchsafari' || s.adultPriceLabel === 'Ask' || s.priceAdult === 0;
                  return (
                    <option key={s.id} value={s.id} className="bg-slate-900 text-white">
                      {isAsk ? `${loc.title} (Ask)` : `${loc.title} (€${s.priceAdult})`}
                    </option>
                  );
                })}
              </select>
            </div>
          </div>

          {/* Date Picker */}
          <div className="h-14 bg-slate-800/80 hover:bg-slate-800 border border-slate-700/80 hover:border-cyan-500/70 focus-within:border-cyan-400 focus-within:ring-2 focus-within:ring-cyan-500/30 focus-within:shadow-[0_0_20px_rgba(6,182,212,0.3)] rounded-2xl px-3.5 py-1 flex items-center space-x-2.5 rtl:space-x-reverse transition-all duration-300 group">
            <div className="p-1.5 rounded-lg bg-cyan-950/80 border border-cyan-800/60 group-hover:border-cyan-400 group-hover:scale-110 transition-all">
              <Calendar className="h-4 w-4 text-cyan-400 shrink-0 group-hover:scale-110 transition-transform duration-300" />
            </div>
            <div className="flex-1 min-w-0">
              <span className="block text-[10px] font-bold text-cyan-400 uppercase tracking-wider leading-none mb-0.5 truncate">
                {t.hero.selectDate}
              </span>
              <input
                type="date"
                required
                value={selectedDate}
                onChange={(e) => setSelectedDate(e.target.value)}
                aria-label={t.hero.selectDate}
                className="w-full bg-transparent text-white font-semibold text-xs sm:text-sm outline-none cursor-pointer [color-scheme:dark] leading-tight"
              />
            </div>
          </div>

          {/* Guests Picker */}
          <div className="h-14 bg-slate-800/80 hover:bg-slate-800 border border-slate-700/80 hover:border-cyan-500/70 focus-within:border-cyan-400 focus-within:ring-2 focus-within:ring-cyan-500/30 focus-within:shadow-[0_0_20px_rgba(6,182,212,0.3)] rounded-2xl px-3.5 py-1 flex items-center space-x-2.5 rtl:space-x-reverse transition-all duration-300 group">
            <div className="p-1.5 rounded-lg bg-cyan-950/80 border border-cyan-800/60 group-hover:border-cyan-400 group-hover:scale-110 transition-all">
              <Users className="h-4 w-4 text-cyan-400 shrink-0 group-hover:scale-110 transition-transform duration-300" />
            </div>
            <div className="flex-1 min-w-0">
              <span className="block text-[10px] font-bold text-cyan-400 uppercase tracking-wider leading-none mb-0.5 truncate">
                {t.hero.guestsDivers}
              </span>
              <select
                value={selectedPax}
                onChange={(e) => setSelectedPax(Number(e.target.value))}
                aria-label={t.hero.guestsDivers}
                className="w-full bg-transparent text-white font-semibold text-xs sm:text-sm outline-none cursor-pointer leading-tight"
              >
                <option value={1} className="bg-slate-900 text-white">1 {t.hero.guestsDivers}</option>
                <option value={2} className="bg-slate-900 text-white">2 {t.hero.guestsDivers}</option>
                <option value={3} className="bg-slate-900 text-white">3 {t.hero.guestsDivers}</option>
                <option value={4} className="bg-slate-900 text-white">4 {t.hero.guestsDivers}</option>
                <option value={5} className="bg-slate-900 text-white">5+ {t.hero.guestsDivers}</option>
              </select>
            </div>
          </div>

          {/* CTA Submit Button */}
          <button
            type="submit"
            className="btn-shine-sweep h-14 w-full bg-gradient-to-r from-cyan-400 via-teal-400 to-blue-600 hover:from-cyan-300 hover:to-blue-500 text-white rounded-2xl font-black shadow-lg shadow-cyan-600/40 hover:shadow-cyan-400/60 hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 flex items-center justify-center space-x-2 rtl:space-x-reverse cursor-pointer text-xs sm:text-sm group"
          >
            <span className="tracking-wide text-shadow">{t.hero.bookNow}</span>
            <ArrowRight className="h-4 w-4 group-hover:translate-x-1.5 rtl:group-hover:-translate-x-1.5 transition-transform duration-300" />
          </button>
        </form>

        {/* Interactive Trust Proof Badges with Individual Accents */}
        <div className="mt-14 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto text-xs text-slate-300 font-medium">
          {/* Badge 1: Emerald Free Cancellation */}
          <div className="flex items-center justify-center space-x-2.5 rtl:space-x-reverse bg-slate-900/80 hover:bg-slate-900 backdrop-blur-xl p-4 rounded-2xl border border-emerald-500/30 hover:border-emerald-400/70 hover:shadow-xl hover:shadow-emerald-950/60 hover:-translate-y-1.5 transition-all duration-300 cursor-default group">
            <div className="p-1.5 rounded-lg bg-emerald-950/80 border border-emerald-500/40 group-hover:scale-110 transition-transform shrink-0">
              <CheckCircle2 className="h-4 w-4 text-emerald-400" />
            </div>
            <span className="group-hover:text-white font-semibold transition-colors">{t.hero.badgeCancellation}</span>
          </div>

          {/* Badge 2: Cyan PADI Safety */}
          <div className="flex items-center justify-center space-x-2.5 rtl:space-x-reverse bg-slate-900/80 hover:bg-slate-900 backdrop-blur-xl p-4 rounded-2xl border border-cyan-500/30 hover:border-cyan-400/70 hover:shadow-xl hover:shadow-cyan-950/60 hover:-translate-y-1.5 transition-all duration-300 cursor-default group">
            <div className="p-1.5 rounded-lg bg-cyan-950/80 border border-cyan-500/40 group-hover:scale-110 transition-transform shrink-0">
              <ShieldCheck className="h-4 w-4 text-cyan-400" />
            </div>
            <span className="group-hover:text-white font-semibold transition-colors">{t.hero.badgePadi}</span>
          </div>

          {/* Badge 3: Sky Hotel Pickup */}
          <div className="flex items-center justify-center space-x-2.5 rtl:space-x-reverse bg-slate-900/80 hover:bg-slate-900 backdrop-blur-xl p-4 rounded-2xl border border-sky-500/30 hover:border-sky-400/70 hover:shadow-xl hover:shadow-sky-950/60 hover:-translate-y-1.5 transition-all duration-300 cursor-default group">
            <div className="p-1.5 rounded-lg bg-sky-950/80 border border-sky-500/40 group-hover:scale-110 transition-transform shrink-0">
              <CheckCircle2 className="h-4 w-4 text-sky-400" />
            </div>
            <span className="group-hover:text-white font-semibold transition-colors">{t.hero.badgePickup}</span>
          </div>

          {/* Badge 4: Amber Buffet & Drinks */}
          <div className="flex items-center justify-center space-x-2.5 rtl:space-x-reverse bg-slate-900/80 hover:bg-slate-900 backdrop-blur-xl p-4 rounded-2xl border border-amber-500/30 hover:border-amber-400/70 hover:shadow-xl hover:shadow-amber-950/60 hover:-translate-y-1.5 transition-all duration-300 cursor-default group">
            <div className="p-1.5 rounded-lg bg-amber-950/80 border border-amber-500/40 group-hover:scale-110 transition-transform shrink-0">
              <MapPin className="h-4 w-4 text-amber-400" />
            </div>
            <span className="group-hover:text-white font-semibold transition-colors">{t.hero.badgeLunch}</span>
          </div>
        </div>
      </div>
    </section>
  );
};
