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
    <section className="relative min-h-[680px] flex items-center justify-center overflow-hidden bg-slate-950">
      {/* Background Image with Dynamic Oceanic Sheen */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImg}
          alt="Scuba diving over vibrant coral reefs in Red Sea Hurghada"
          className="w-full h-full object-cover object-center filter brightness-90 scale-105 animate-float-slow duration-1000"
          referrerPolicy="no-referrer"
        />
        {/* Measured dark gradient overlay for WCAG AA readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/75 to-slate-950/45" />

        {/* Floating Underwater Bubbles Effect */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div
            className="absolute bottom-0 left-[15%] w-3 h-3 bg-cyan-400/30 rounded-full blur-[1px]"
            style={{ animation: 'bubbleRise 6s infinite ease-in', animationDelay: '0s' }}
          />
          <div
            className="absolute bottom-0 left-[35%] w-2 h-2 bg-blue-300/40 rounded-full blur-[1px]"
            style={{ animation: 'bubbleRise 8s infinite ease-in', animationDelay: '2s' }}
          />
          <div
            className="absolute bottom-0 left-[60%] w-4 h-4 bg-teal-300/25 rounded-full blur-[1px]"
            style={{ animation: 'bubbleRise 7s infinite ease-in', animationDelay: '1s' }}
          />
          <div
            className="absolute bottom-0 left-[82%] w-2.5 h-2.5 bg-cyan-200/30 rounded-full blur-[1px]"
            style={{ animation: 'bubbleRise 9s infinite ease-in', animationDelay: '3.5s' }}
          />
        </div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-24 text-center text-white">
        {/* Live Status & Trust Kicker */}
        <div className="inline-flex items-center space-x-2.5 rtl:space-x-reverse px-4 py-1.5 rounded-full bg-slate-900/90 backdrop-blur-md border border-cyan-500/40 text-xs font-semibold text-cyan-300 mb-6 shadow-xl shadow-cyan-950/60 hover:border-cyan-400 hover:scale-105 transition-all duration-300">
          <span className="relative flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500" />
          </span>
          <span className="font-mono text-emerald-400 font-bold uppercase tracking-wider text-[11px]">
            {t.hero.liveKicker}
          </span>
          <span className="text-slate-600">·</span>
          <span>{t.hero.weatherKicker}</span>
        </div>

        {/* Main Display Headline with Radiant Shimmer */}
        <h1 className="text-4xl sm:text-5xl lg:text-7xl font-black tracking-tight max-w-4xl mx-auto leading-tight sm:leading-none text-balance mb-6">
          {t.hero.titlePart1}{' '}
          <span className="bg-gradient-to-r from-cyan-300 via-teal-200 to-blue-400 bg-clip-text text-transparent hover:from-cyan-200 hover:to-blue-300 transition-colors duration-500">
            {t.hero.titleHighlight}
          </span>
        </h1>

        <p className="text-base sm:text-lg text-slate-200 max-w-2xl mx-auto leading-relaxed mb-10 text-balance">
          {t.hero.description}
        </p>

        {/* Trip Finder & Quick Booking Bar */}
        <form
          onSubmit={handleSearchAndBook}
          className="bg-slate-900/90 backdrop-blur-xl border border-slate-700/80 hover:border-cyan-500/50 rounded-2xl sm:rounded-3xl p-3 sm:p-4 max-w-5xl mx-auto shadow-2xl shadow-black/80 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2.5 items-center text-left rtl:text-right text-xs transition-all duration-300 hover:shadow-cyan-900/20 card-sheen"
        >
          {/* Service Picker */}
          <div className="h-14 bg-slate-800/90 hover:bg-slate-800 border border-slate-700/80 hover:border-cyan-500/60 focus-within:border-cyan-400 focus-within:ring-2 focus-within:ring-cyan-500/20 rounded-xl px-3 py-1 flex items-center space-x-2.5 rtl:space-x-reverse transition-all group">
            <Compass className="h-4 w-4 text-cyan-400 shrink-0 group-hover:rotate-45 transition-transform" />
            <div className="flex-1 min-w-0">
              <span className="block text-[10px] font-bold text-cyan-400/90 uppercase tracking-wider leading-none mb-0.5 truncate">
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
          <div className="h-14 bg-slate-800/90 hover:bg-slate-800 border border-slate-700/80 hover:border-cyan-500/60 focus-within:border-cyan-400 focus-within:ring-2 focus-within:ring-cyan-500/20 rounded-xl px-3 py-1 flex items-center space-x-2.5 rtl:space-x-reverse transition-all group">
            <Calendar className="h-4 w-4 text-cyan-400 shrink-0 group-hover:scale-110 transition-transform" />
            <div className="flex-1 min-w-0">
              <span className="block text-[10px] font-bold text-cyan-400/90 uppercase tracking-wider leading-none mb-0.5 truncate">
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
          <div className="h-14 bg-slate-800/90 hover:bg-slate-800 border border-slate-700/80 hover:border-cyan-500/60 focus-within:border-cyan-400 focus-within:ring-2 focus-within:ring-cyan-500/20 rounded-xl px-3 py-1 flex items-center space-x-2.5 rtl:space-x-reverse transition-all group">
            <Users className="h-4 w-4 text-cyan-400 shrink-0 group-hover:scale-110 transition-transform" />
            <div className="flex-1 min-w-0">
              <span className="block text-[10px] font-bold text-cyan-400/90 uppercase tracking-wider leading-none mb-0.5 truncate">
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
            className="h-14 w-full bg-gradient-to-r from-cyan-500 via-cyan-400 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white rounded-xl font-bold shadow-lg shadow-cyan-600/30 hover:shadow-cyan-500/50 hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center space-x-2 rtl:space-x-reverse cursor-pointer text-xs sm:text-sm group"
          >
            <span>{t.hero.bookNow}</span>
            <ArrowRight className="h-4 w-4 group-hover:translate-x-1 rtl:group-hover:-translate-x-1 transition-transform" />
          </button>
        </form>

        {/* Interactive Trust Proof Badges */}
        <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto text-xs text-slate-300 font-medium">
          <div className="flex items-center justify-center space-x-2 rtl:space-x-reverse bg-slate-900/70 hover:bg-slate-900 backdrop-blur-md p-3.5 rounded-2xl border border-slate-800 hover:border-emerald-500/40 hover:-translate-y-1 transition-all duration-300 shadow-lg cursor-default group">
            <CheckCircle2 className="h-4 w-4 text-emerald-400 group-hover:scale-110 transition-transform shrink-0" />
            <span className="group-hover:text-white transition-colors">{t.hero.badgeCancellation}</span>
          </div>

          <div className="flex items-center justify-center space-x-2 rtl:space-x-reverse bg-slate-900/70 hover:bg-slate-900 backdrop-blur-md p-3.5 rounded-2xl border border-slate-800 hover:border-cyan-500/40 hover:-translate-y-1 transition-all duration-300 shadow-lg cursor-default group">
            <ShieldCheck className="h-4 w-4 text-cyan-400 group-hover:scale-110 transition-transform shrink-0" />
            <span className="group-hover:text-white transition-colors">{t.hero.badgePadi}</span>
          </div>

          <div className="flex items-center justify-center space-x-2 rtl:space-x-reverse bg-slate-900/70 hover:bg-slate-900 backdrop-blur-md p-3.5 rounded-2xl border border-slate-800 hover:border-emerald-500/40 hover:-translate-y-1 transition-all duration-300 shadow-lg cursor-default group">
            <CheckCircle2 className="h-4 w-4 text-emerald-400 group-hover:scale-110 transition-transform shrink-0" />
            <span className="group-hover:text-white transition-colors">{t.hero.badgePickup}</span>
          </div>

          <div className="flex items-center justify-center space-x-2 rtl:space-x-reverse bg-slate-900/70 hover:bg-slate-900 backdrop-blur-md p-3.5 rounded-2xl border border-slate-800 hover:border-blue-500/40 hover:-translate-y-1 transition-all duration-300 shadow-lg cursor-default group">
            <MapPin className="h-4 w-4 text-cyan-400 group-hover:scale-110 transition-transform shrink-0" />
            <span className="group-hover:text-white transition-colors">{t.hero.badgeLunch}</span>
          </div>
        </div>
      </div>
    </section>
  );
};
