import React, { useState, useEffect } from 'react';
import {
  Clock,
  Users,
  MessageSquare,
  Sparkles,
  ArrowRight,
  Zap,
  ChevronLeft,
  ChevronRight,
  Images,
  MapPin,
  Compass,
  Share2,
  Check,
  Link2,
  Mail,
} from 'lucide-react';
import { AppState } from '../../services/store';
import { ServiceItem } from '../../types';
import { useLanguage } from '../../context/LanguageContext';
import padiLogo from '../../assets/padi_logo.jpg';
import cmasLogo from '../../assets/CMAS.jpg';
import bsacLogo from '../../assets/BSAC_Logo_2017.jpeg';
import defaultHeroImg from '../../assets/images/hero_red_sea_diving_1790535752456.jpg';

// Import photos for the Hurghada Quad Desert Safari slideshow
import susaf1 from '../../assets/images/SUSAF (1).avif';
import susaf2 from '../../assets/images/SUSAF (1).jpeg';
import susaf3 from '../../assets/images/SUSAF (1).jpg';
import susaf4 from '../../assets/images/SUSAF (1).webp';
import susaf5 from '../../assets/images/SUSAF (2).jpg';
import susaf6 from '../../assets/images/SUSAF (2).webp';
import susaf7 from '../../assets/images/SUSAF (3).jpg';
import susaf8 from '../../assets/images/SUSAF (4).jpg';
import susaf9 from '../../assets/images/SUSAF (5).jpg';
import susaf10 from '../../assets/images/SUSAF (6).jpg';
import susaf11 from '../../assets/images/SUSAF (7).jpg';
import susaf12 from '../../assets/images/SUSAF (8).jpg';

const quadSafariSlideshowImages: string[] = [
  susaf1,
  susaf2,
  susaf3,
  susaf4,
  susaf5,
  susaf6,
  susaf7,
  susaf8,
  susaf9,
  susaf10,
  susaf11,
  susaf12,
];

// Import photos for Dolphin House Snorkeling Safari slideshow
import dolphineJpg1 from '../../assets/images/DOLPHINE (1).jpg';
import dolphineWebp1 from '../../assets/images/DOLPHINE (1).webp';
import dolphineJpg2 from '../../assets/images/DOLPHINE (2).jpg';
import dolphineJpg3 from '../../assets/images/DOLPHINE (3).jpg';
import dolphineJpg4 from '../../assets/images/DOLPHINE (4).jpg';
import dolphineJpg5 from '../../assets/images/DOLPHINE (5).jpg';
import dolphineJpg6 from '../../assets/images/DOLPHINE (6).jpg';
import dolphineJpg7 from '../../assets/images/DOLPHINE (7).jpg';
import dolphineJpg8 from '../../assets/images/DOLPHINE (8).jpg';
import dolphineJpg9 from '../../assets/images/DOLPHINE (9).jpg';
import dolphineJpg10 from '../../assets/images/DOLPHINE (10).jpg';
import dolphineJpg11 from '../../assets/images/DOLPHINE (11).jpg';
import dolphineJpg12 from '../../assets/images/DOLPHINE (12).jpg';

const dolphinHouseSlideshowImages: string[] = [
  dolphineJpg1,
  dolphineWebp1,
  dolphineJpg2,
  dolphineJpg3,
  dolphineJpg4,
  dolphineJpg5,
  dolphineJpg6,
  dolphineJpg7,
  dolphineJpg8,
  dolphineJpg9,
  dolphineJpg10,
  dolphineJpg11,
  dolphineJpg12,
];

// Import photos for Daily Boat Diving & Intro Dives slideshow
import dailyJpg1 from '../../assets/images/DAILY (1).jpg';
import dailyWebp1 from '../../assets/images/DAILY (1).webp';
import dailyJpg2 from '../../assets/images/DAILY (2).jpg';
import dailyWebp2 from '../../assets/images/DAILY (2).webp';
import dailyJpg3 from '../../assets/images/DAILY (3).jpg';
import dailyWebp3 from '../../assets/images/DAILY (3).webp';
import dailyJpg4 from '../../assets/images/DAILY (4).jpg';
import dailyWebp4 from '../../assets/images/DAILY (4).webp';
import dailyJpg5 from '../../assets/images/DAILY (5).jpg';
import dailyJpg6 from '../../assets/images/DAILY (6).jpg';
import dailyJpg7 from '../../assets/images/DAILY (7).jpg';
import dailyJpg8 from '../../assets/images/DAILY (8).jpg';
import dailyJpg9 from '../../assets/images/DAILY (9).jpg';
import dailyJpg10 from '../../assets/images/DAILY (10).jpg';
import dailyJpg11 from '../../assets/images/DAILY (11).jpg';
import dailyJpg12 from '../../assets/images/DAILY (12).jpg';
import dailyJpg13 from '../../assets/images/DAILY (13).jpg';

const dailyDivingSlideshowImages: string[] = [
  dailyJpg1,
  dailyWebp1,
  dailyJpg2,
  dailyWebp2,
  dailyJpg3,
  dailyWebp3,
  dailyJpg4,
  dailyWebp4,
  dailyJpg5,
  dailyJpg6,
  dailyJpg7,
  dailyJpg8,
  dailyJpg9,
  dailyJpg10,
  dailyJpg11,
  dailyJpg12,
  dailyJpg13,
];

// Import photos for Private Speedboat & Dolphin Watching slideshow
import speedAvif1 from '../../assets/images/SPEED (1).avif';
import speedJpg1 from '../../assets/images/SPEED (1).jpg';
import speedWebp1 from '../../assets/images/SPEED (1).webp';
import speedAvif2 from '../../assets/images/SPEED (2).avif';
import speedJpg2 from '../../assets/images/SPEED (2).jpg';
import speedWebp2 from '../../assets/images/SPEED (2).webp';
import speedJpg3 from '../../assets/images/SPEED (3).jpg';
import speedWebp3 from '../../assets/images/SPEED (3).webp';
import speedJpg4 from '../../assets/images/SPEED (4).jpg';
import speedWebp4 from '../../assets/images/SPEED (4).webp';
import speedJpg5 from '../../assets/images/SPEED (5).jpg';
import speedJpg6 from '../../assets/images/SPEED (6).jpg';
import speedJpg7 from '../../assets/images/SPEED (7).jpg';
import speedJpg8 from '../../assets/images/SPEED (8).jpg';
import speedJpg9 from '../../assets/images/SPEED (9).jpg';
import speedJpg10 from '../../assets/images/SPEED (10).jpg';
import speedJpg11 from '../../assets/images/SPEED (11).jpg';
import speedJpg12 from '../../assets/images/SPEED (12).jpg';
import speedJpg13 from '../../assets/images/SPEED (13).jpg';
import speedJpg14 from '../../assets/images/SPEED (14).jpg';
import speedJpg15 from '../../assets/images/SPEED (15).jpg';
import speedJpg16 from '../../assets/images/SPEED (16).jpg';
import speedJpg17 from '../../assets/images/SPEED (17).jpg';
import speedJpg18 from '../../assets/images/SPEED (18).jpg';

const speedboatSlideshowImages: string[] = [
  speedAvif1,
  speedJpg1,
  speedWebp1,
  speedAvif2,
  speedJpg2,
  speedWebp2,
  speedJpg3,
  speedWebp3,
  speedJpg4,
  speedWebp4,
  speedJpg5,
  speedJpg6,
  speedJpg7,
  speedJpg8,
  speedJpg9,
  speedJpg10,
  speedJpg11,
  speedJpg12,
  speedJpg13,
  speedJpg14,
  speedJpg15,
  speedJpg16,
  speedJpg17,
  speedJpg18,
];

// Import all 18 photos for the 7-day diving safari slideshow
const safariImageModules = import.meta.glob<{ default: string }>(
  '../../assets/images/diving 7 days (*).jpeg',
  { eager: true }
);

const safariSlideshowImages: string[] = Object.entries(safariImageModules)
  .sort(([pathA], [pathB]) => {
    const numA = parseInt(pathA.match(/\((\d+)\)/)?.[1] || '0', 10);
    const numB = parseInt(pathB.match(/\((\d+)\)/)?.[1] || '0', 10);
    return numA - numB;
  })
  .map(([, mod]) => mod.default);

// Import photos for Private Diving Lessons & PADI Certification slideshow
import padiJpg1 from '../../assets/images/PADI (1).jpg';
import padiJpg2 from '../../assets/images/PADI (2).jpg';
import padiWebp2 from '../../assets/images/PADI (2).webp';
import padiJpg3 from '../../assets/images/PADI (3).jpg';
import padiWebp3 from '../../assets/images/PADI (3).webp';
import padiJpg4 from '../../assets/images/PADI (4).jpg';
import padiWebp4 from '../../assets/images/PADI (4).webp';
import padiJpg5 from '../../assets/images/PADI (5).jpg';
import padiWebp5 from '../../assets/images/PADI (5).webp';
import padiJpg6 from '../../assets/images/PADI (6).jpg';
import padiWebp6 from '../../assets/images/PADI (6).webp';
import padiJpg7 from '../../assets/images/PADI (7).jpg';
import padiWebp7 from '../../assets/images/PADI (7).webp';
import padiJpg8 from '../../assets/images/PADI (8).jpg';
import padiJpg9 from '../../assets/images/PADI (9).jpg';
import padiWebp9 from '../../assets/images/PADI (9).webp';
import padiJpg10 from '../../assets/images/PADI (10).jpg';
import padiJpg11 from '../../assets/images/PADI (11).jpg';
import padiJpg12 from '../../assets/images/PADI (12).jpg';
import padiJpg13 from '../../assets/images/PADI (13).jpg';
import padiJpg14 from '../../assets/images/PADI (14).jpg';
import padiJpg15 from '../../assets/images/PADI (15).jpg';

const padiCertificationSlideshowImages: string[] = [
  padiJpg1,
  padiJpg2,
  padiWebp2,
  padiJpg3,
  padiWebp3,
  padiJpg4,
  padiWebp4,
  padiJpg5,
  padiWebp5,
  padiJpg6,
  padiWebp6,
  padiJpg7,
  padiWebp7,
  padiJpg8,
  padiJpg9,
  padiWebp9,
  padiJpg10,
  padiJpg11,
  padiJpg12,
  padiJpg13,
  padiJpg14,
  padiJpg15,
];

const CardImageSlideshow: React.FC<{
  images: string[];
  alt: string;
  counterPosition?: 'top-right' | 'bottom-left';
}> = ({ images, alt, counterPosition = 'top-right' }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (!images || images.length <= 1) return;
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 3200);
    return () => clearInterval(timer);
  }, [images]);

  const prevSlide = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const nextSlide = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  return (
    <div className="relative w-full h-full overflow-hidden bg-slate-900 select-none">
      {images.map((src, idx) => (
        <img
          key={src}
          src={src}
          alt={`${alt} photo ${idx + 1}`}
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ease-in-out group-hover:scale-105 ${
            idx === currentIndex ? 'opacity-100 z-0' : 'opacity-0 pointer-events-none'
          }`}
          referrerPolicy="no-referrer"
        />
      ))}

      {/* Manual Slide Navigation Controls */}
      <button
        type="button"
        onClick={prevSlide}
        className="absolute left-2.5 top-1/2 -translate-y-1/2 z-20 p-1.5 rounded-full bg-slate-950/80 hover:bg-cyan-600 text-white border border-slate-700/80 hover:border-cyan-400 backdrop-blur-md opacity-0 group-hover:opacity-100 transition-all duration-300 cursor-pointer shadow-lg hover:scale-110 active:scale-95"
        title="Previous photo"
      >
        <ChevronLeft className="h-4 w-4" />
      </button>

      <button
        type="button"
        onClick={nextSlide}
        className="absolute right-2.5 top-1/2 -translate-y-1/2 z-20 p-1.5 rounded-full bg-slate-950/80 hover:bg-cyan-600 text-white border border-slate-700/80 hover:border-cyan-400 backdrop-blur-md opacity-0 group-hover:opacity-100 transition-all duration-300 cursor-pointer shadow-lg hover:scale-110 active:scale-95"
        title="Next photo"
      >
        <ChevronRight className="h-4 w-4" />
      </button>

      {/* Photo Counter Badge */}
      <div
        className={`absolute z-20 flex items-center space-x-1.5 rtl:space-x-reverse bg-slate-950/90 backdrop-blur-md px-2.5 py-1 rounded-full border border-cyan-500/40 text-[10px] font-bold text-cyan-300 shadow-xl ${
          counterPosition === 'bottom-left'
            ? 'bottom-4 left-4 rtl:left-auto rtl:right-4'
            : 'top-4 right-4 rtl:right-auto rtl:left-4'
        }`}
      >
        <Images className="h-3 w-3 text-cyan-400" />
        <span>
          {currentIndex + 1} / {images.length}
        </span>
      </div>

      {/* Slide indicator dots */}
      <div className="absolute bottom-2 left-1/2 -translate-x-1/2 z-20 flex items-center space-x-1 pointer-events-none">
        {images.map((_, i) => (
          <span
            key={i}
            className={`h-1 rounded-full transition-all duration-300 ${
              i === currentIndex ? 'w-3.5 bg-cyan-400' : 'w-1 bg-white/40'
            }`}
          />
        ))}
      </div>
    </div>
  );
};

interface WebsiteExcursionsProps {
  state: AppState;
  onOpenBooking: (serviceId?: string) => void;
  onOpenAiChat: (prefilledQuery?: string) => void;
}

export const WebsiteExcursions: React.FC<WebsiteExcursionsProps> = ({
  state,
  onOpenBooking,
  onOpenAiChat,
}) => {
  const [activeFilter, setActiveFilter] = useState<string>('all');
  const [copiedServiceId, setCopiedServiceId] = useState<string | null>(null);
  const { t, language, getLocalizedService } = useLanguage();

  const cleanWhatsappNumber = (state.profile.whatsappNumber || '+2 0103 94 64 284').replace(/[^0-9]/g, '');
  const facebookUrl = state.profile.facebookUrl || 'https://www.facebook.com/people/DiveGo-Hurghada/61593699815956/';
  const instagramUrl = state.profile.instagramUrl || 'https://www.instagram.com/dive_go.hurghada';
  const tiktokUrl = state.profile.tiktokUrl || 'https://www.tiktok.com/@dive_go_hurghada';
  const emailAddress = state.profile.email || 'divegohurghada@gmail.com';

  const handleShareTrip = async (service: ServiceItem, title: string) => {
    const url = `${window.location.origin}/#excursions`;
    const shareData = {
      title: `${title} | DiveGo Hurghada`,
      text: `Check out "${title}" with DiveGo Hurghada in the Red Sea! 🤿🌊`,
      url: url,
    };

    if (navigator.share) {
      try {
        await navigator.share(shareData);
        return;
      } catch {
        // User cancelled or unsupported
      }
    }

    try {
      await navigator.clipboard.writeText(`${title} - ${url}`);
      setCopiedServiceId(service.id);
      setTimeout(() => setCopiedServiceId(null), 2500);
    } catch {
      // Fallback
    }
  };

  const getCategoryBadge = (cat: string) => {
    switch (cat) {
      case 'diving':
        return t.excursions.filterDiving.replace(/🤿|🌊|🐬|🏜️/g, '').trim();
      case 'sea_trip':
        return t.excursions.filterSeaTrip.replace(/🤿|🌊|🐬|🏜️/g, '').trim();
      case 'desert_safari':
        return t.excursions.filterSafari.replace(/🤿|🌊|🐬|🏜️/g, '').trim();
      default:
        return cat.replace('_', ' ').toUpperCase();
    }
  };

  const getLocalizedAiPrompt = (title: string) => {
    switch (language) {
      case 'de':
        return `Bitte erzählen Sie mir mehr über "${title}". Wie ist der Zeitplan, die Hotelabholung und was soll ich mitbringen?`;
      case 'ru':
        return `Пожалуйста, расскажите подробнее об экскурсии "${title}". Какое расписание, трансфер из отеля и что взять с собой?`;
      case 'ar':
        return `من فضلك أخبرني بالمزيد عن رحلة "${title}". ما هو موعد الانطلاق، كيفية التوصيل من الفندق وما الذي يجب إحضاره؟`;
      case 'fr':
        return `Veuillez m'en dire plus sur "${title}". Quels sont les horaires, la prise en charge à l'hôtel et que dois-je apporter ?`;
      case 'pl':
        return `Proszę opowiedzieć mi więcej o "${title}". Jaki jest harmonogram, odbiór z hotelu i co powinienem zabrać?`;
      case 'it':
        return `Per favore dimmi di più su "${title}". Qual è il programma, il prelievo in hotel e cosa dovrei portare?`;
      case 'cs':
        return `Řekněte mi prosím více o "${title}". Jaký je harmonogram, vyzvednutí v hotelu a co si vzít s sebou?`;
      case 'nl':
        return `Vertel me alstublieft meer over "${title}". Wat is het schema, de hoteltransfer en wat moet ik meenemen?`;
      default:
        return `Please tell me more about "${title}". What is the schedule, hotel pickup, and what should I bring?`;
    }
  };

  const getImageForService = (service: ServiceItem) => {
    const titleLower = service.title.toLowerCase();
    if (service.id === 'srv-dgh-private-padi' || titleLower.includes('padi') || titleLower.includes('private diving')) {
      return padiJpg1;
    }
    if (service.id === 'srv-dgh-private-speedboat' || titleLower.includes('speedboat') || titleLower.includes('orange bay')) {
      return speedJpg1;
    }
    if (service.id === 'srv-dgh-dolphin-house' || titleLower.includes('dolphin')) {
      return dolphineJpg1;
    }
    if (service.id === 'srv-dgh-daily-dive' || titleLower.includes('intro') || titleLower.includes('daily')) {
      return dailyJpg1;
    }
    if (service.id === 'srv-dgh-desert-safari' || service.category === 'desert_safari' || titleLower.includes('quad')) {
      return susaf3;
    }
    if (service.category === 'sea_trip') {
      return dolphineJpg1;
    }
    if (service.category === 'diving') {
      return dailyJpg1;
    }
    return defaultHeroImg;
  };

  const filteredServices = state.services.filter((s) => {
    if (activeFilter === 'all') return true;
    if (activeFilter === 'diving') return s.category === 'diving';
    if (activeFilter === 'sea_trip') return s.category === 'sea_trip';
    if (activeFilter === 'desert_safari') return s.category === 'desert_safari';
    return true;
  });

  return (
    <section id="excursions" className="py-24 bg-slate-950 text-white border-t border-slate-900 relative overflow-hidden">
      {/* Ambient background glow */}
      <div className="absolute top-1/3 left-1/4 w-[500px] h-[500px] bg-cyan-500/5 blur-[150px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center space-x-1.5 rtl:space-x-reverse px-3 py-1 rounded-full bg-cyan-950/80 border border-cyan-800/80 text-cyan-300 text-xs font-semibold mb-3">
            <Sparkles className="h-3.5 w-3.5 text-cyan-400" />
            <span>{t.excursions.kicker}</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight mb-4 text-balance">
            {t.excursions.title}
          </h2>
          <p className="text-sm text-slate-400 leading-relaxed text-balance">
            {t.excursions.description}
          </p>

          {/* Interactive Filter Control */}
          <div className="inline-flex p-1.5 bg-slate-900/90 backdrop-blur-md border border-slate-800 rounded-2xl mt-8 gap-1.5 text-xs shadow-xl flex-wrap justify-center">
            {[
              { id: 'all', label: t.excursions.filterAll },
              { id: 'diving', label: t.excursions.filterDiving },
              { id: 'sea_trip', label: t.excursions.filterSeaTrip },
              { id: 'desert_safari', label: t.excursions.filterSafari },
            ].map((f) => {
              const isActive = activeFilter === f.id;
              return (
                <button
                  key={f.id}
                  onClick={() => setActiveFilter(f.id)}
                  className={`px-4 py-2.5 rounded-xl font-bold transition-all duration-300 cursor-pointer ${
                    isActive
                      ? 'bg-gradient-to-r from-cyan-600 to-blue-600 text-white shadow-lg shadow-cyan-600/40 scale-102'
                      : 'text-slate-400 hover:text-white hover:bg-slate-800/70'
                  }`}
                >
                  {f.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* Excursions Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredServices.map((service) => {
            const loc = getLocalizedService(service);
            const imgSrc = getImageForService(service);
            const isSafari = service.id === 'srv-dgh-tauchsafari';
            const isDesertSafari = service.id === 'srv-dgh-desert-safari';
            const isDolphinHouse = service.id === 'srv-dgh-dolphin-house';
            const isDailyDive = service.id === 'srv-dgh-daily-dive';
            const isSpeedboat = service.id === 'srv-dgh-private-speedboat';
            const isPrivatePadi =
              service.id === 'srv-dgh-private-padi' ||
              service.title.toLowerCase().includes('padi') ||
              service.title.toLowerCase().includes('private diving');
            const isAskPrice =
              service.id === 'srv-dgh-private-padi' ||
              service.id === 'srv-dgh-tauchsafari' ||
              service.adultPriceLabel === 'Ask' ||
              service.priceAdult === 0;

            const durationDisplay = isSafari
              ? '7 Days'
              : `${(service.id === 'srv-dgh-private-padi' || service.durationHours === 24) ? 8 : service.durationHours} ${t.excursions.hoursDuration}`;

            const destinations = isSafari
              ? ['North', 'South', 'Sharm El Sheikh', 'Dahab']
              : service.destinations;

            const hasLogos = service.id === 'srv-dgh-private-padi' || service.title.toLowerCase().includes('padi');

            return (
              <div
                key={service.id}
                className="bg-slate-900/90 border border-slate-800 hover:border-cyan-500/50 rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl hover:shadow-cyan-950/50 transition-all duration-500 flex flex-col group card-sheen hover:-translate-y-2"
              >
                {/* Visual Header with Image Zoom or Slideshow */}
                <div className="relative h-60 w-full overflow-hidden bg-slate-800">
                  {isSafari && safariSlideshowImages.length > 0 ? (
                    <CardImageSlideshow images={safariSlideshowImages} alt={loc.title} />
                  ) : isDesertSafari && quadSafariSlideshowImages.length > 0 ? (
                    <CardImageSlideshow images={quadSafariSlideshowImages} alt={loc.title} />
                  ) : isDolphinHouse && dolphinHouseSlideshowImages.length > 0 ? (
                    <CardImageSlideshow images={dolphinHouseSlideshowImages} alt={loc.title} />
                  ) : isDailyDive && dailyDivingSlideshowImages.length > 0 ? (
                    <CardImageSlideshow images={dailyDivingSlideshowImages} alt={loc.title} />
                  ) : isSpeedboat && speedboatSlideshowImages.length > 0 ? (
                    <CardImageSlideshow images={speedboatSlideshowImages} alt={loc.title} />
                  ) : isPrivatePadi && padiCertificationSlideshowImages.length > 0 ? (
                    <CardImageSlideshow
                      images={padiCertificationSlideshowImages}
                      alt={loc.title}
                      counterPosition={hasLogos ? 'bottom-left' : 'top-right'}
                    />
                  ) : (
                    <img
                      src={imgSrc}
                      alt={loc.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                      referrerPolicy="no-referrer"
                    />
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-black/30 group-hover:opacity-80 transition-opacity pointer-events-none" />

                  {/* Category Chip */}
                  <div className="absolute top-4 left-4 rtl:left-auto rtl:right-4 z-20">
                    <span className="px-3.5 py-1.5 rounded-full text-[11px] font-extrabold bg-slate-950/90 backdrop-blur-md text-cyan-300 border border-slate-700/80 shadow-md flex items-center space-x-1 rtl:space-x-reverse">
                      <Zap className="h-3 w-3 text-cyan-400" />
                      <span>{getCategoryBadge(service.category)}</span>
                    </span>
                  </div>

                  {/* Floating Certifications Badge on Image */}
                  {hasLogos && (
                    <div className="absolute top-4 right-4 rtl:right-auto rtl:left-4 z-20 flex items-center gap-1.5 bg-slate-950/90 backdrop-blur-md px-2.5 py-1.5 rounded-2xl border border-cyan-500/40 shadow-xl">
                      <div className="bg-white px-1 py-0.5 rounded shadow-sm flex items-center justify-center">
                        <img src={padiLogo} alt="PADI" className="h-4.5 w-auto object-contain" />
                      </div>
                      <div className="bg-white px-1 py-0.5 rounded shadow-sm flex items-center justify-center">
                        <img src={cmasLogo} alt="CMAS" className="h-4.5 w-auto object-contain" />
                      </div>
                      <div className="bg-white px-1 py-0.5 rounded shadow-sm flex items-center justify-center">
                        <img src={bsacLogo} alt="BSAC" className="h-4.5 w-auto object-contain" />
                      </div>
                    </div>
                  )}

                  {/* Price Tag with Glowing Gradient */}
                  <div className="absolute bottom-4 right-4 rtl:right-auto rtl:left-4 z-20 bg-slate-950/95 backdrop-blur-md px-4 py-2 rounded-2xl border border-cyan-500/40 group-hover:border-cyan-400 group-hover:scale-105 transition-all text-right rtl:text-left shadow-xl">
                    <span className="text-xl font-black text-white group-hover:text-cyan-300 transition-colors">
                      {isAskPrice ? 'Ask' : `€${service.priceAdult}`}
                    </span>
                    <span className="text-[10px] text-slate-400 block -mt-0.5">
                      {isAskPrice ? 'Price on Request' : t.excursions.perAdult}
                    </span>
                  </div>
                </div>

                {/* Content Body */}
                <div className="p-6 flex-1 flex flex-col justify-between space-y-5">
                  <div className="space-y-2.5">
                    <h3 className="text-lg font-bold text-white group-hover:text-cyan-300 transition-colors duration-200">
                      {loc.title}
                    </h3>
                    <p className="text-xs text-slate-400 leading-relaxed line-clamp-3">
                      {loc.description}
                    </p>
                  </div>

                  {/* Meta Specs */}
                  <div className="grid grid-cols-2 gap-2 text-[11px] bg-slate-950/70 p-3 rounded-2xl border border-slate-800 text-slate-300">
                    <div className="flex items-center space-x-2 rtl:space-x-reverse">
                      <Clock className="h-3.5 w-3.5 text-cyan-400 shrink-0" />
                      <span className="font-medium">{durationDisplay}</span>
                    </div>
                    <div className="flex items-center space-x-2 rtl:space-x-reverse">
                      <Users className="h-3.5 w-3.5 text-blue-400 shrink-0" />
                      <span className="font-medium">
                        {t.excursions.child}: {service.childPriceLabel || '(Ask)'}
                      </span>
                    </div>
                  </div>

                  {/* Safari Destinations Strip */}
                  {destinations && destinations.length > 0 && (
                    <div className="bg-gradient-to-r from-slate-950 via-slate-900 to-slate-950 p-3 rounded-2xl border border-cyan-500/30 space-y-2 shadow-inner">
                      <div className="flex items-center justify-between text-cyan-300 text-[10px] font-black uppercase tracking-wider">
                        <div className="flex items-center space-x-1.5 rtl:space-x-reverse">
                          <Compass className="h-3.5 w-3.5 text-cyan-400" />
                          <span>Safari Destinations & Routes</span>
                        </div>
                        <span className="text-[9px] text-slate-400 font-normal">7 Days Liveaboard</span>
                      </div>
                      <div className="flex flex-wrap gap-1.5">
                        {destinations.map((dest) => (
                          <span
                            key={dest}
                            className="px-2.5 py-1 rounded-xl text-[10px] font-bold bg-cyan-950/80 border border-cyan-700/60 text-cyan-200 flex items-center gap-1 shadow-sm hover:border-cyan-400 transition-colors"
                          >
                            <MapPin className="h-2.5 w-2.5 text-cyan-400 shrink-0" />
                            {dest}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Official Certification Partner Logos */}
                  {hasLogos && (
                    <div className="bg-gradient-to-r from-slate-950 via-slate-900 to-slate-950 p-2.5 rounded-2xl border border-cyan-500/30 flex items-center justify-between gap-2 shadow-inner">
                      <div>
                        <span className="text-[10px] font-black uppercase tracking-wider text-cyan-300 block">
                          Certified Courses
                        </span>
                        <span className="text-[10px] text-slate-400">
                          PADI · CMAS · BSAC Recognized
                        </span>
                      </div>
                      <div className="flex items-center gap-1.5 shrink-0">
                        <div className="bg-white px-1.5 py-0.5 rounded-lg shadow-sm border border-slate-200/40 hover:scale-105 transition-transform">
                          <img src={padiLogo} alt="PADI" className="h-6 w-auto object-contain" />
                        </div>
                        <div className="bg-white px-1.5 py-0.5 rounded-lg shadow-sm border border-slate-200/40 hover:scale-105 transition-transform">
                          <img src={cmasLogo} alt="CMAS" className="h-6 w-auto object-contain" />
                        </div>
                        <div className="bg-white px-1.5 py-0.5 rounded-lg shadow-sm border border-slate-200/40 hover:scale-105 transition-transform">
                          <img src={bsacLogo} alt="BSAC" className="h-6 w-auto object-contain" />
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Inclusions Highlights */}
                  <div className="space-y-1.5">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block">
                      {t.excursions.inclusions}
                    </span>
                    <div className="flex flex-wrap gap-1 text-[11px] text-slate-300">
                      {loc.inclusions.slice(0, 3).map((inc, i) => (
                        <span key={i} className="text-slate-300">
                          ✓ {inc}
                          {i < 2 ? ' · ' : ''}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="pt-2 flex items-center space-x-2.5 rtl:space-x-reverse">
                    <button
                      onClick={() => onOpenBooking(service.id)}
                      className="flex-1 py-3 px-4 bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 text-white rounded-xl text-xs font-bold shadow-md shadow-cyan-600/30 hover:shadow-cyan-500/50 hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center space-x-2 rtl:space-x-reverse cursor-pointer group/btn"
                    >
                      <span>{t.excursions.bookOnline}</span>
                      <ArrowRight className="h-4 w-4 group-hover/btn:translate-x-1 rtl:group-hover/btn:-translate-x-1 transition-transform" />
                    </button>

                    <button
                      onClick={() => onOpenAiChat(getLocalizedAiPrompt(loc.title))}
                      className="p-3 bg-slate-800 hover:bg-slate-700 text-cyan-400 hover:text-cyan-300 border border-slate-700 hover:border-cyan-500/40 rounded-xl transition-all duration-200 cursor-pointer hover:scale-105"
                      title={t.excursions.askAi}
                    >
                      <MessageSquare className="h-4 w-4" />
                    </button>

                    <button
                      type="button"
                      onClick={() => handleShareTrip(service, loc.title)}
                      className={`p-3 border rounded-xl transition-all duration-200 cursor-pointer hover:scale-105 ${
                        copiedServiceId === service.id
                          ? 'bg-emerald-950/80 border-emerald-500/60 text-emerald-300 shadow-md shadow-emerald-900/30'
                          : 'bg-slate-800 hover:bg-slate-700 text-cyan-400 hover:text-cyan-300 border-slate-700 hover:border-cyan-500/40'
                      }`}
                      title={copiedServiceId === service.id ? 'Trip link copied!' : 'Share this excursion'}
                      aria-label="Share excursion"
                    >
                      {copiedServiceId === service.id ? (
                        <Check className="h-4 w-4 text-emerald-400" />
                      ) : (
                        <Share2 className="h-4 w-4" />
                      )}
                    </button>
                  </div>

                  {/* Social Media Links & Share Strip */}
                  <div className="pt-3 border-t border-slate-800/80 flex items-center justify-between gap-2">
                    <div className="flex items-center space-x-1.5 rtl:space-x-reverse text-slate-400 text-[10px] font-bold uppercase tracking-wider">
                      <Share2 className="h-3 w-3 text-cyan-400 shrink-0" />
                      <span>
                        {language === 'ar'
                          ? 'مشاركة وتواصل:'
                          : language === 'de'
                          ? 'Teilen & Folgen:'
                          : language === 'ru'
                          ? 'Поделиться:'
                          : 'Share & Follow:'}
                      </span>
                    </div>

                    <div className="flex items-center gap-1.5 flex-wrap justify-end">
                      {/* WhatsApp Desk */}
                      <a
                        href={`https://wa.me/${cleanWhatsappNumber}?text=${encodeURIComponent(
                          `Hello DiveGo Hurghada! I am inquiring about "${loc.title}". Can you please send details and availability?`
                        )}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Inquire or Share on WhatsApp"
                        title="WhatsApp DiveGo Desk"
                        className="p-1.5 rounded-lg bg-slate-950/80 border border-slate-800/90 text-slate-400 hover:text-[#25D366] hover:border-[#25D366]/50 hover:bg-[#25D366]/10 transition-all duration-200 hover:scale-110 shadow-sm"
                      >
                        <svg className="h-3.5 w-3.5" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.65 3.742-.983zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
                        </svg>
                      </a>

                      {/* Facebook */}
                      <a
                        href={facebookUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Dive Go Hurghada Facebook"
                        title="Facebook Page"
                        className="p-1.5 rounded-lg bg-slate-950/80 border border-slate-800/90 text-slate-400 hover:text-[#1877F2] hover:border-[#1877F2]/50 hover:bg-[#1877F2]/10 transition-all duration-200 hover:scale-110 shadow-sm"
                      >
                        <svg className="h-3.5 w-3.5" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                        </svg>
                      </a>

                      {/* Instagram */}
                      <a
                        href={instagramUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Dive Go Hurghada Instagram"
                        title="Instagram Profile"
                        className="p-1.5 rounded-lg bg-slate-950/80 border border-slate-800/90 text-slate-400 hover:text-pink-400 hover:border-pink-500/50 hover:bg-pink-500/10 transition-all duration-200 hover:scale-110 shadow-sm"
                      >
                        <svg className="h-3.5 w-3.5" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                        </svg>
                      </a>

                      {/* TikTok */}
                      <a
                        href={tiktokUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Dive Go Hurghada TikTok"
                        title="TikTok Channel"
                        className="p-1.5 rounded-lg bg-slate-950/80 border border-slate-800/90 text-slate-400 hover:text-cyan-300 hover:border-cyan-400/50 hover:bg-cyan-400/10 transition-all duration-200 hover:scale-110 shadow-sm"
                      >
                        <svg className="h-3.5 w-3.5" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64c.298-.002.595.042.88.13V9.4a6.33 6.33 0 0 0-1-.08A6.34 6.34 0 0 0 3 15.66a6.34 6.34 0 0 0 10.82 4.49 6.27 6.27 0 0 0 1.95-4.52V8.09a8.16 8.16 0 0 0 4.82 1.57V6.69z" />
                        </svg>
                      </a>

                      {/* Email */}
                      <a
                        href={`mailto:${emailAddress}?subject=${encodeURIComponent(
                          `Inquiry: ${loc.title}`
                        )}&body=${encodeURIComponent(
                          `Hello Dive Go Hurghada,\n\nI would like more information and booking details for "${loc.title}".\n\nThank you!`
                        )}`}
                        aria-label="Email Dive Go Hurghada"
                        title="Email Inquiry"
                        className="p-1.5 rounded-lg bg-slate-950/80 border border-slate-800/90 text-slate-400 hover:text-amber-400 hover:border-amber-400/50 hover:bg-amber-400/10 transition-all duration-200 hover:scale-110 shadow-sm"
                      >
                        <Mail className="h-3.5 w-3.5" />
                      </a>

                      {/* Copy Trip Link / Native Share */}
                      <button
                        type="button"
                        onClick={() => handleShareTrip(service, loc.title)}
                        aria-label="Copy trip link or share"
                        title={copiedServiceId === service.id ? 'Copied link!' : 'Copy trip link or share'}
                        className={`p-1.5 rounded-lg border transition-all duration-200 hover:scale-110 shadow-sm cursor-pointer flex items-center space-x-1 rtl:space-x-reverse ${
                          copiedServiceId === service.id
                            ? 'bg-emerald-950/80 border-emerald-500/60 text-emerald-300'
                            : 'bg-slate-950/80 border-slate-800/90 text-slate-400 hover:text-cyan-300 hover:border-cyan-400/50 hover:bg-cyan-400/10'
                        }`}
                      >
                        {copiedServiceId === service.id ? (
                          <>
                            <Check className="h-3.5 w-3.5 text-emerald-400" />
                            <span className="text-[9px] font-bold text-emerald-300">Copied!</span>
                          </>
                        ) : (
                          <Link2 className="h-3.5 w-3.5" />
                        )}
                      </button>
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
