import React, { useState } from 'react';
import { Compass, Waves, Eye, Navigation, Fish } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';

export const WebsiteDiveSites: React.FC = () => {
  const [selectedSiteIndex, setSelectedSiteIndex] = useState<number | null>(null);
  const { t, getLocalizedDiveSite } = useLanguage();

  const originalSites = [
    {
      name: 'Shaab El Erg (Dolphin House)',
      type: 'Horseshoe Reef & Protected Lagoon',
      depth: '5 – 18 Meters',
      visibility: '30+ Meters',
      highlights: 'Resident pod of wild spinner dolphins, table corals, blue-spotted rays, hawksbill turtles.',
      level: 'All Levels (Divers & Snorkelers)',
      marineBio: 'Spinner dolphins, blue-spotted stingrays, giant clams',
      coordinates: '27° 28\' N, 33° 53\' E',
      badgeColor: 'border-emerald-500/50 text-emerald-300 bg-emerald-950/80 shadow-emerald-950/60',
      glowClass: 'hover:border-emerald-400/80 hover:shadow-[0_20px_50px_rgba(16,185,129,0.25)]',
      accentColor: 'text-emerald-400',
    },
    {
      name: 'Giftun Island Marine Reserve',
      type: 'National Park Reefs & Coral Gardens',
      depth: '8 – 25 Meters',
      visibility: '35 Meters',
      highlights: 'Lush gorgonian coral gardens, napoleon wrasse, schools of barracuda, crystal turquoise lagoons.',
      level: 'Open Water & Snorkelers',
      marineBio: 'Napoleon wrasse, clownfish anemones, moray eels',
      coordinates: '27° 14\' N, 33° 55\' E',
      badgeColor: 'border-cyan-500/50 text-cyan-300 bg-cyan-950/80 shadow-cyan-950/60',
      glowClass: 'hover:border-cyan-400/80 hover:shadow-[0_20px_50px_rgba(6,182,212,0.25)]',
      accentColor: 'text-cyan-400',
    },
    {
      name: 'Abu Ramada (The Aquarium)',
      type: 'Reef Pinnacle, Plateau & Wall',
      depth: '10 – 30 Meters',
      visibility: '30 Meters',
      highlights: 'Giant moray eels, bannerfish, clownfish anemones, eagle rays, gentle drift dives along drop-offs.',
      level: 'Certified Divers (OW / AOW)',
      marineBio: 'Spotted eagle rays, barracuda, glassfish swarms',
      coordinates: '27° 09\' N, 33° 59\' E',
      badgeColor: 'border-blue-500/50 text-blue-300 bg-blue-950/80 shadow-blue-950/60',
      glowClass: 'hover:border-blue-400/80 hover:shadow-[0_20px_50px_rgba(59,130,246,0.25)]',
      accentColor: 'text-blue-400',
    },
    {
      name: 'Abu Nuhas Shipwreck Graveyard',
      type: 'Historical Shipwrecks (Red Sea Ridge)',
      depth: '12 – 32 Meters',
      visibility: '25 – 30 Meters',
      highlights: 'Carnatic (1869), Giannis D, Chrisoula K wrecks, covered in soft corals and glassfish colonies.',
      level: 'Advanced Open Water (AOW)',
      marineBio: 'Lionfish, glassfish, soft coral blooms, crocodile fish',
      coordinates: '27° 34\' N, 33° 55\' E',
      badgeColor: 'border-amber-500/50 text-amber-300 bg-amber-950/80 shadow-amber-950/60',
      glowClass: 'hover:border-amber-400/80 hover:shadow-[0_20px_50px_rgba(245,158,11,0.25)]',
      accentColor: 'text-amber-400',
    },
  ];

  return (
    <section id="dive-sites" className="py-24 bg-slate-900/70 text-white border-t border-slate-900 relative overflow-hidden">
      {/* Dynamic Background Caustic Glows */}
      <div className="absolute top-1/2 right-1/4 w-[600px] h-[400px] bg-blue-500/10 blur-[160px] rounded-full pointer-events-none animate-aura-drift" />
      <div className="absolute bottom-10 left-10 w-[500px] h-[400px] bg-cyan-500/10 blur-[150px] rounded-full pointer-events-none animate-aura-drift" style={{ animationDelay: '-7s' }} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-1.5 rtl:space-x-reverse px-4 py-1.5 rounded-full bg-slate-900/90 backdrop-blur-md border border-cyan-500/40 text-cyan-300 text-xs font-semibold mb-4 shadow-xl shadow-cyan-950/60 hover:border-cyan-400 hover:scale-105 transition-all duration-300">
            <Compass className="h-3.5 w-3.5 text-cyan-400 animate-pulse" />
            <span>{t.diveSites.kicker}</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight mb-4 text-balance">
            {t.diveSites.title}
          </h2>
          <p className="text-sm text-slate-300 leading-relaxed text-balance">
            {t.diveSites.description}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {originalSites.map((orig, i) => {
            const site = getLocalizedDiveSite(i, orig);
            const isHovered = selectedSiteIndex === i;

            return (
              <div
                key={i}
                onMouseEnter={() => setSelectedSiteIndex(i)}
                onMouseLeave={() => setSelectedSiteIndex(null)}
                className={`bg-gradient-to-b from-slate-900/95 via-slate-900/90 to-slate-950/95 border rounded-3xl p-7 shadow-2xl space-y-5 transition-all duration-500 card-sheen relative cursor-pointer hover:-translate-y-2.5 ${orig.glowClass} ${
                  isHovered
                    ? 'scale-[1.01]'
                    : 'border-slate-800/80 hover:border-slate-700'
                }`}
              >
                {/* Site Header */}
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <span className="text-[11px] font-bold uppercase tracking-wider text-cyan-400 flex items-center space-x-1.5 rtl:space-x-reverse mb-1.5">
                      <Navigation className="h-3.5 w-3.5" />
                      <span>{site.type}</span>
                    </span>
                    <h3 className="text-2xl font-black text-white group-hover:text-cyan-300 transition-colors">
                      {site.name}
                    </h3>
                  </div>

                  <span
                    className={`px-3.5 py-1.5 rounded-full text-[11px] font-black border shrink-0 transition-all duration-300 shadow-md ${
                      orig.badgeColor
                    } ${isHovered ? 'scale-105 shadow-lg' : ''}`}
                  >
                    {site.level}
                  </span>
                </div>

                {/* Highlights Card */}
                <p className="text-xs text-slate-300 leading-relaxed bg-slate-950/80 p-4 rounded-2xl border border-slate-800/90 shadow-inner">
                  {site.highlights}
                </p>

                {/* Marine Bio & Coordinates */}
                <div className="flex items-center justify-between text-[11px] text-slate-400 pt-1">
                  <div className="flex items-center space-x-1.5 rtl:space-x-reverse text-cyan-300 font-medium">
                    <Fish className="h-4 w-4 text-cyan-400 shrink-0" />
                    <span>{t.diveSites.bioLabel} {site.marineBio}</span>
                  </div>
                  <span className="font-mono text-[10px] text-slate-400 bg-slate-950 px-2 py-0.5 rounded-lg border border-slate-800">{site.coordinates}</span>
                </div>

                {/* Depth & Visibility Metrics Bar */}
                <div className="grid grid-cols-2 gap-3 text-xs text-slate-300 pt-4 border-t border-slate-800/80">
                  <div className="flex items-center space-x-2.5 rtl:space-x-reverse bg-slate-950/70 p-3 rounded-xl border border-slate-800/90 hover:border-cyan-500/40 transition-colors">
                    <div className="p-1.5 rounded-lg bg-cyan-950/80 border border-cyan-500/40 text-cyan-400 shrink-0">
                      <Waves className="h-4 w-4" />
                    </div>
                    <div>
                      <span className="text-[10px] text-slate-400 block">{t.diveSites.depthLabel}</span>
                      <strong className="text-white font-bold">{site.depth}</strong>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2.5 rtl:space-x-reverse bg-slate-950/70 p-3 rounded-xl border border-slate-800/90 hover:border-emerald-500/40 transition-colors">
                    <div className="p-1.5 rounded-lg bg-emerald-950/80 border border-emerald-500/40 text-emerald-400 shrink-0">
                      <Eye className="h-4 w-4" />
                    </div>
                    <div>
                      <span className="text-[10px] text-slate-400 block">{t.diveSites.visibilityLabel}</span>
                      <strong className="text-white font-bold">{site.visibility}</strong>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
