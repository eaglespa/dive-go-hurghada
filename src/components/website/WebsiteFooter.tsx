import React from 'react';
import { Phone, Mail, MapPin } from 'lucide-react';
import { AppState } from '../../services/store';
import { SocialMediaBar } from '../common/SocialMediaBar';
import { useLanguage } from '../../context/LanguageContext';
import logoImg from '../../assets/logo-removebg-preview.png';

interface WebsiteFooterProps {
  state: AppState;
  onSwitchToCommandCenter?: () => void;
}

export const WebsiteFooter: React.FC<WebsiteFooterProps> = ({ state }) => {
  const { t } = useLanguage();
  const phone = state.profile.whatsappNumber || '+2 0103 94 64 284';

  return (
    <footer className="bg-slate-950 text-slate-400 text-xs border-t border-slate-900 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Col 1: Brand & Social Follow */}
          <div className="space-y-4 md:col-span-1">
            <div className="flex items-center space-x-3 rtl:space-x-reverse">
              <div className="h-11 w-11 rounded-full bg-slate-900/90 border border-cyan-500/30 p-1 flex items-center justify-center shadow-lg shadow-cyan-500/20 shrink-0">
                <img
                  src={logoImg}
                  alt="DiveGo Hurghada Logo"
                  className="h-full w-full object-contain drop-shadow"
                />
              </div>
              <div>
                <span className="font-extrabold text-base text-white block">DiveGo Hurghada</span>
                <span className="text-[10px] text-cyan-400 font-medium">{t.footer.sub}</span>
              </div>
            </div>
            <p className="text-slate-400 text-[11px] leading-relaxed">
              {t.footer.desc}
            </p>
            <div className="text-[11px] text-cyan-400 font-medium">
              {t.footer.badge}
            </div>

            {/* Social Media Links with Icons */}
            <div className="pt-2">
              <span className="text-[11px] font-bold text-white uppercase tracking-wider block mb-2">
                {t.navbar.followUs}
              </span>
              <SocialMediaBar iconSize="sm" />
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div className="space-y-2.5">
            <span className="font-bold text-white text-xs uppercase tracking-wider block">
              {t.footer.headingExcursions}
            </span>
            <ul className="space-y-1.5 text-slate-400 text-[11px]">
              <li>
                <a href="#daily-diving" className="hover:text-white transition">
                  {t.navbar.dailyDiving}
                </a>
              </li>
              <li>
                <a href="#excursions" className="hover:text-white transition">
                  {t.navbar.excursions}
                </a>
              </li>
              <li>
                <a href="#padi-courses" className="hover:text-white transition">
                  {t.navbar.padiCourses}
                </a>
              </li>
              <li>
                <a href="#dive-sites" className="hover:text-white transition">
                  {t.navbar.diveSites}
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-white transition">
                  {t.navbar.about}
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3: Contact & Address */}
          <div className="space-y-2.5">
            <span className="font-bold text-white text-xs uppercase tracking-wider block">
              {t.footer.headingContact}
            </span>
            <ul className="space-y-2 text-[11px] text-slate-300">
              <li className="flex items-start space-x-2 rtl:space-x-reverse">
                <MapPin className="h-4 w-4 text-cyan-400 shrink-0 mt-0.5" />
                <span>{state.profile.location || 'Saqala Square، Hurghada First, Red Sea Governorate 84511'}</span>
              </li>
              <li className="flex items-center space-x-2 rtl:space-x-reverse">
                <Phone className="h-4 w-4 text-emerald-400 shrink-0" />
                <a
                  href="tel:+201039464284"
                  className="hover:underline font-mono text-emerald-300"
                  title="Call Dive Go Hurghada"
                >
                  +2 0103 94 64 284
                </a>
              </li>
              <li className="flex items-center space-x-2 rtl:space-x-reverse">
                <Mail className="h-4 w-4 text-blue-400 shrink-0" />
                <a
                  href="mailto:divegohurghada@gmail.com"
                  className="hover:underline text-blue-300"
                  title="Email Dive Go Hurghada"
                >
                  divegohurghada@gmail.com
                </a>
              </li>
            </ul>
          </div>

          {/* Col 4: Hours & Departures */}
          <div className="space-y-3 p-4 bg-slate-900 rounded-2xl border border-slate-800">
            <span className="font-bold text-white text-xs block">{t.footer.headingHours}</span>
            <ul className="space-y-1.5 text-[11px] text-slate-300">
              <li>{t.footer.hoursDesk}</li>
              <li>{t.footer.hoursDepartures}</li>
              <li>{t.footer.hoursTransfers}</li>
              <li className="text-emerald-400 font-medium pt-1">
                {t.footer.hoursCancellation}
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Strip */}
        <div className="pt-8 border-t border-slate-900 flex flex-col md:flex-row items-center justify-between gap-4 text-[11px] text-slate-500">
          <div className="flex flex-wrap items-center gap-x-2 gap-y-1 text-center md:text-left rtl:md:text-right">
            <span>
              © {new Date().getFullYear()} Dive Go Hurghada (
              <a href="https://www.divegohurghada.com/" target="_blank" rel="noreferrer" className="text-slate-400 hover:underline">
                https://www.divegohurghada.com/
              </a>
              ). {t.footer.rightsReserved}
            </span>
            <span className="hidden sm:inline text-slate-700">·</span>
            <div className="relative group inline-block" title="+201203031230 - +201224278490">
              <span className="text-slate-400 hover:text-cyan-300 transition-colors font-medium cursor-pointer inline-flex items-center gap-1 px-1.5 py-0.5 rounded-md hover:bg-slate-900 border border-transparent hover:border-cyan-500/30">
                <span>Designed by</span>
                <span className="text-cyan-400 font-bold group-hover:underline">Romero's Studios</span>
              </span>

              {/* Hover Floating Phone Badge */}
              <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 hidden group-hover:flex flex-col items-center z-50 pointer-events-auto">
                <div className="bg-slate-950/95 border border-cyan-500/40 rounded-xl p-2.5 shadow-2xl backdrop-blur-md text-white whitespace-nowrap space-y-1.5 text-center">
                  <div className="text-[10px] uppercase font-bold text-cyan-400 tracking-wider flex items-center justify-center gap-1">
                    <Phone className="h-3 w-3 text-cyan-400" />
                    <span>Romero's Studios</span>
                  </div>
                  <div className="flex items-center justify-center gap-2 text-xs font-mono font-semibold">
                    <a
                      href="tel:+201203031230"
                      className="text-slate-200 hover:text-cyan-300 transition-colors bg-slate-900 px-2 py-1 rounded-lg border border-slate-800 hover:border-cyan-500/50"
                      title="Call +201203031230"
                    >
                      +201203031230
                    </a>
                    <span className="text-slate-600">-</span>
                    <a
                      href="tel:+201224278490"
                      className="text-slate-200 hover:text-cyan-300 transition-colors bg-slate-900 px-2 py-1 rounded-lg border border-slate-800 hover:border-cyan-500/50"
                      title="Call +201224278490"
                    >
                      +201224278490
                    </a>
                  </div>
                </div>
                <div className="w-2.5 h-2.5 bg-slate-950 border-r border-b border-cyan-500/40 rotate-45 -mt-1.5" />
              </div>
            </div>
          </div>
          <div className="flex items-center space-x-4 rtl:space-x-reverse">
            <span>{t.hero.badgeCancellation}</span>
            <span>·</span>
            <span>{t.footer.padiCertified}</span>
            <span>·</span>
            <span>{t.footer.languagesText}</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
