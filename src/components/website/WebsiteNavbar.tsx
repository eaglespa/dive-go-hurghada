import React, { useState, useRef, useEffect } from 'react';
import {
  Compass,
  Phone,
  Mail,
  Calendar,
  Menu,
  X,
  Globe,
  Check,
  ChevronDown,
  Sparkles,
} from 'lucide-react';
import { AppState } from '../../services/store';
import { SocialMediaBar } from '../common/SocialMediaBar';
import { useLanguage } from '../../context/LanguageContext';
import { SUPPORTED_LANGUAGES } from '../../translations/languages';
import logoImg from '../../assets/logo-removebg-preview.png';

interface WebsiteNavbarProps {
  state: AppState;
  onOpenBooking: (serviceId?: string) => void;
  onOpenAiChat: () => void;
  onSwitchToCommandCenter?: () => void;
}

export const WebsiteNavbar: React.FC<WebsiteNavbarProps> = ({
  state,
  onOpenBooking,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [langDropdownOpen, setLangDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const { language, languageInfo, setLanguage, t, isAutoDetected } = useLanguage();

  // Close language dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setLangDropdownOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <header className="sticky top-0 z-40 bg-slate-950/95 backdrop-blur-md border-b border-slate-800 text-white transition-all">
      {/* Top Contact, Social & Language Auto-detect Bar */}
      <div className="bg-slate-900/90 border-b border-slate-800 text-[11px] text-slate-300 py-1.5 px-4 sm:px-6 lg:px-8 hidden md:block">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-5 rtl:space-x-reverse">
            <a
              href="tel:+201039464284"
              className="flex items-center space-x-1.5 rtl:space-x-reverse hover:text-emerald-400 transition font-mono"
              title="Call Dive Go Hurghada"
            >
              <Phone className="h-3 w-3 text-emerald-400" />
              <span>+2 0103 94 64 284</span>
            </a>
            <a
              href="mailto:divegohurghada@gmail.com"
              className="flex items-center space-x-1.5 rtl:space-x-reverse hover:text-cyan-400 transition"
              title="Email Dive Go Hurghada"
            >
              <Mail className="h-3 w-3 text-cyan-400" />
              <span>divegohurghada@gmail.com</span>
            </a>
            <span className="text-slate-500">·</span>
            <span className="text-slate-400">{t.navbar.location}</span>
          </div>

          <div className="flex items-center space-x-4 rtl:space-x-reverse">
            {isAutoDetected && (
              <span className="inline-flex items-center space-x-1 text-[10px] text-cyan-400 bg-cyan-950/70 border border-cyan-800/60 px-2 py-0.5 rounded-full">
                <Sparkles className="h-2.5 w-2.5" />
                <span>{t.navbar.autoDetected}: {languageInfo.name}</span>
              </span>
            )}

            <div className="flex items-center space-x-2 rtl:space-x-reverse">
              <span className="text-slate-400 text-[10px] uppercase font-bold tracking-wider mr-1">
                {t.navbar.followUs}
              </span>
              <SocialMediaBar iconSize="sm" />
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Zone 1: Single text element wordmark */}
          <a href="#" className="flex items-center space-x-3 rtl:space-x-reverse group">
            <div className="h-12 w-12 rounded-full bg-slate-900/90 border border-cyan-500/30 p-1 flex items-center justify-center shadow-lg shadow-cyan-500/20 group-hover:scale-105 transition shrink-0">
              <img
                src={logoImg}
                alt="DiveGo Hurghada Logo"
                className="h-full w-full object-contain drop-shadow"
              />
            </div>
            <div>
              <span className="font-black text-xl tracking-tight bg-gradient-to-r from-white via-cyan-100 to-cyan-400 bg-clip-text text-transparent block">
                DiveGo Hurghada
              </span>
              <span className="text-[11px] text-cyan-400 font-medium block">
                {t.navbar.wordmarkSub}
              </span>
            </div>
          </a>

          {/* Zone 2: Clean text navigation links */}
          <nav className="hidden lg:flex items-center space-x-6 rtl:space-x-reverse text-sm font-medium text-slate-300">
            <a href="#excursions" className="hover:text-cyan-400 transition-colors">
              {t.navbar.excursions}
            </a>
            <a href="#daily-diving" className="hover:text-cyan-400 transition-colors">
              {t.navbar.dailyDiving}
            </a>
            <a href="#padi-courses" className="hover:text-cyan-400 transition-colors">
              {t.navbar.padiCourses}
            </a>
            <a href="#dive-sites" className="hover:text-cyan-400 transition-colors">
              {t.navbar.diveSites}
            </a>
            <a href="#about" className="hover:text-cyan-400 transition-colors">
              {t.navbar.about}
            </a>
            <a href="#reviews" className="hover:text-cyan-400 transition-colors">
              {t.navbar.reviews}
            </a>
            <a href="#faq" className="hover:text-cyan-400 transition-colors">
              {t.navbar.faq}
            </a>
          </nav>

          {/* Zone 3: Language Selector & Primary Actions */}
          <div className="hidden sm:flex items-center space-x-3 rtl:space-x-reverse">
            {/* Native Proprietary Language Dropdown */}
            <div className="relative" ref={dropdownRef}>
              <button
                onClick={() => setLangDropdownOpen(!langDropdownOpen)}
                className="flex items-center space-x-2 rtl:space-x-reverse px-3 py-2 rounded-xl text-xs font-semibold bg-slate-900/90 hover:bg-slate-800 border border-slate-700/80 text-white shadow-sm transition cursor-pointer"
                title={t.navbar.language}
                aria-expanded={langDropdownOpen}
              >
                <span className="text-base leading-none">{languageInfo.flag}</span>
                <span className="font-bold">{languageInfo.nativeName}</span>
                <ChevronDown className={`h-3.5 w-3.5 text-slate-400 transition-transform ${langDropdownOpen ? 'rotate-180' : ''}`} />
              </button>

              {langDropdownOpen && (
                <div className="absolute right-0 rtl:right-auto rtl:left-0 mt-2 w-52 bg-slate-900/98 backdrop-blur-xl border border-slate-700 rounded-2xl shadow-2xl py-2 z-50 animate-in fade-in slide-in-from-top-2 duration-200">
                  <div className="px-3 py-1.5 border-b border-slate-800 text-[10px] font-bold text-slate-400 uppercase tracking-wider flex items-center justify-between">
                    <span>{t.navbar.language}</span>
                    <Globe className="h-3 w-3 text-cyan-400" />
                  </div>

                  <div className="max-h-72 overflow-y-auto py-1 space-y-0.5">
                    {SUPPORTED_LANGUAGES.map((lang) => {
                      const isSelected = language === lang.code;
                      return (
                        <button
                          key={lang.code}
                          onClick={() => {
                            setLanguage(lang.code);
                            setLangDropdownOpen(false);
                          }}
                          className={`w-full flex items-center justify-between px-3.5 py-2 text-xs transition cursor-pointer text-left rtl:text-right ${
                            isSelected
                              ? 'bg-cyan-500/20 text-cyan-300 font-bold'
                              : 'text-slate-300 hover:text-white hover:bg-slate-800/80'
                          }`}
                        >
                          <div className="flex items-center space-x-2.5 rtl:space-x-reverse">
                            <span className="text-lg">{lang.flag}</span>
                            <div>
                              <span className="block font-medium">{lang.nativeName}</span>
                              <span className="text-[10px] text-slate-400 block">{lang.name}</span>
                            </div>
                          </div>
                          {isSelected && <Check className="h-4 w-4 text-cyan-400" />}
                        </button>
                      );
                    })}
                  </div>
                </div>
              )}
            </div>


            {/* Instant Online Booking Action */}
            <button
              onClick={() => onOpenBooking()}
              className="flex items-center space-x-1.5 rtl:space-x-reverse px-4 py-2 bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 text-white rounded-xl text-xs font-bold shadow-md shadow-cyan-600/30 transition cursor-pointer"
            >
              <Calendar className="h-3.5 w-3.5" />
              <span>{t.navbar.bookOnline}</span>
            </button>
          </div>

          {/* Mobile Right Controls: Language Flag & Menu Toggle */}
          <div className="flex sm:hidden items-center space-x-2 rtl:space-x-reverse">
            {/* Quick Mobile Language Cycle */}
            <button
              onClick={() => setLangDropdownOpen(!langDropdownOpen)}
              className="p-1.5 bg-slate-900 border border-slate-700 rounded-lg text-sm flex items-center space-x-1 rtl:space-x-reverse"
              title="Change Language"
            >
              <span>{languageInfo.flag}</span>
            </button>

            <button
              onClick={() => onOpenBooking()}
              className="px-3 py-1.5 bg-cyan-600 text-white rounded-lg text-xs font-bold"
            >
              {t.navbar.book}
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-slate-400 hover:text-white"
            >
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="sm:hidden bg-slate-900 border-b border-slate-800 px-4 pt-2 pb-6 space-y-3 text-sm font-medium">
          {/* Mobile Language Grid */}
          <div className="pb-3 border-b border-slate-800">
            <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block mb-2">
              {t.navbar.language}:
            </span>
            <div className="grid grid-cols-3 gap-1.5">
              {SUPPORTED_LANGUAGES.map((lang) => {
                const isSelected = language === lang.code;
                return (
                  <button
                    key={lang.code}
                    onClick={() => {
                      setLanguage(lang.code);
                    }}
                    className={`flex items-center space-x-1.5 rtl:space-x-reverse px-2.5 py-1.5 rounded-lg text-xs font-medium transition ${
                      isSelected
                        ? 'bg-cyan-600 text-white font-bold shadow'
                        : 'bg-slate-800/80 text-slate-300 hover:bg-slate-700'
                    }`}
                  >
                    <span>{lang.flag}</span>
                    <span className="truncate">{lang.name}</span>
                  </button>
                );
              })}
            </div>
          </div>

          <a
            href="#excursions"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 text-slate-300 hover:text-white"
          >
            {t.navbar.excursions}
          </a>
          <a
            href="#daily-diving"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 text-slate-300 hover:text-white"
          >
            {t.navbar.dailyDiving}
          </a>
          <a
            href="#padi-courses"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 text-slate-300 hover:text-white"
          >
            {t.navbar.padiCourses}
          </a>
          <a
            href="#dive-sites"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 text-slate-300 hover:text-white"
          >
            {t.navbar.diveSites}
          </a>
          <a
            href="#about"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 text-slate-300 hover:text-white"
          >
            {t.navbar.about}
          </a>
          <a
            href="#reviews"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 text-slate-300 hover:text-white"
          >
            {t.navbar.reviews}
          </a>
          <a
            href="#faq"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 text-slate-300 hover:text-white"
          >
            {t.navbar.faq}
          </a>

          <div className="pt-3 border-t border-slate-800 flex flex-col space-y-3">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenBooking();
              }}
              className="w-full py-2.5 bg-cyan-600 hover:bg-cyan-500 text-white text-center rounded-xl font-bold cursor-pointer transition shadow-md shadow-cyan-600/30"
            >
              {t.navbar.bookOnline}
            </button>

            <div className="pt-2 border-t border-slate-800/80 flex flex-col items-center space-y-2">
              <span className="text-[11px] text-slate-400 font-semibold uppercase tracking-wider">
                {t.navbar.followUs}
              </span>
              <SocialMediaBar iconSize="md" />
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
