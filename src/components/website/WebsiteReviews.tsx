import React, { useState, useEffect, useRef } from 'react';
import {
  Star,
  ChevronLeft,
  ChevronRight,
  Quote,
  CheckCircle2,
  ThumbsUp,
  MessageSquare,
  Award,
  Sparkles,
  PlusCircle,
  X,
  Send,
} from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';
import { getLocalizedReviews, CustomerReview } from '../../translations/reviewsTranslations';


export const WebsiteReviews: React.FC = () => {
  const { t, language } = useLanguage();

  const categories = [
    { id: 'ALL', label: t.reviews.catAll },
    { id: 'DIVING', label: t.reviews.catDiving },
    { id: 'DOLPHIN', label: t.reviews.catDolphin },
    { id: 'PADI', label: t.reviews.catPadi },
    { id: 'SAFARI', label: t.reviews.catSafari },
  ];

  const [userCustomReviews, setUserCustomReviews] = useState<CustomerReview[]>(() => {
    try {
      const saved = localStorage.getItem('dive_go_hurghada_user_reviews');
      if (saved) {
        const parsed = JSON.parse(saved);
        if (Array.isArray(parsed)) return parsed;
      }
    } catch (e) {
      // fallback
    }
    return [];
  });

  const baseReviews = getLocalizedReviews(language);
  const reviews = [...userCustomReviews, ...baseReviews];

  const [activeCategory, setActiveCategory] = useState<string>('ALL');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlay, setIsAutoPlay] = useState(true);
  const [showReviewModal, setShowReviewModal] = useState(false);

  // New review form state
  const [formName, setFormName] = useState('');
  const [formCity, setFormCity] = useState('');
  const [formTrip, setFormTrip] = useState('Daily Boat Diving (2 Guided Dives)');
  const [formCategory, setFormCategory] = useState<'DIVING' | 'DOLPHIN' | 'PADI' | 'SAFARI'>('DIVING');
  const [formRating, setFormRating] = useState(5);
  const [formComment, setFormComment] = useState('');
  const [formSubmitted, setFormSubmitted] = useState(false);

  // Filtered reviews
  const filteredReviews = reviews.filter((r) =>
    activeCategory === 'ALL' ? true : r.category === activeCategory
  );

  // Reset index when filter changes
  useEffect(() => {
    setCurrentIndex(0);
  }, [activeCategory]);

  // Autoplay timer
  useEffect(() => {
    if (!isAutoPlay || filteredReviews.length <= 1) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % filteredReviews.length);
    }, 4500);
    return () => clearInterval(interval);
  }, [isAutoPlay, filteredReviews.length]);

  const handlePrev = () => {
    setIsAutoPlay(false);
    setCurrentIndex((prev) => (prev === 0 ? filteredReviews.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setIsAutoPlay(false);
    setCurrentIndex((prev) => (prev + 1) % filteredReviews.length);
  };

  const handleSubmitNewReview = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formName || !formComment) return;

    const newRev: CustomerReview = {
      id: `rev-${Date.now()}`,
      author: formName,
      cityCountry: formCity || 'Hurghada Traveler 🌍',
      avatarText: formName.slice(0, 2).toUpperCase(),
      category: formCategory,
      tripTitle: formTrip,
      rating: formRating,
      date: 'Just now',
      comment: formComment,
      verified: true,
      highlightTag: 'Verified Direct Guest',
      source: 'Direct Guest',
    };

    const updated = [newRev, ...userCustomReviews];
    setUserCustomReviews(updated);
    try {
      localStorage.setItem('dive_go_hurghada_user_reviews', JSON.stringify(updated));
    } catch (e) {
      // ignore
    }

    setFormSubmitted(true);
    setTimeout(() => {
      setFormSubmitted(false);
      setShowReviewModal(false);
      setFormName('');
      setFormCity('');
      setFormComment('');
      setActiveCategory('ALL');
      setCurrentIndex(0);
    }, 1500);
  };

  // Determine window of 3 reviews to display responsively
  const getVisibleReviews = () => {
    if (filteredReviews.length === 0) return [];
    if (filteredReviews.length <= 3) return filteredReviews;

    const items: CustomerReview[] = [];
    for (let i = 0; i < 3; i++) {
      const idx = (currentIndex + i) % filteredReviews.length;
      items.push(filteredReviews[idx]);
    }
    return items;
  };

  const visibleReviews = getVisibleReviews();

  return (
    <section id="reviews" className="py-20 bg-slate-900/60 text-white border-t border-slate-900 relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-cyan-500/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header Section */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-6">
          <div className="max-w-2xl">
            <span className="text-cyan-400 font-bold text-xs uppercase tracking-wider block mb-2">
              {t.reviews.kicker}
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight leading-tight text-balance">
              {t.reviews.title}
            </h2>
            <p className="text-sm text-slate-400 mt-2 leading-relaxed text-balance">
              {t.reviews.description}
            </p>
          </div>

          {/* Social Proof Score Card */}
          <div className="flex items-center gap-4 bg-slate-950/80 border border-slate-800 p-4 rounded-2xl shrink-0 backdrop-blur-sm shadow-xl">
            <div className="text-center border-r border-slate-800 pr-4 rtl:border-r-0 rtl:border-l rtl:pr-0 rtl:pl-4">
              <span className="text-3xl font-black text-white block">4.9</span>
              <div className="flex text-amber-400 text-xs">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-3.5 w-3.5 fill-amber-400" />
                ))}
              </div>
              <span className="text-[10px] text-slate-400 mt-0.5 block">{t.reviews.reviewsCount}</span>
            </div>

            <div className="space-y-1 text-xs">
              <div className="flex items-center space-x-1.5 rtl:space-x-reverse text-emerald-400 font-bold text-[11px]">
                <CheckCircle2 className="h-3.5 w-3.5" />
                <span>{t.reviews.verifiedGuests}</span>
              </div>
              <div className="flex items-center space-x-1.5 rtl:space-x-reverse text-cyan-400 text-[11px]">
                <Award className="h-3.5 w-3.5" />
                <span>{t.reviews.award}</span>
              </div>
              <button
                onClick={() => setShowReviewModal(true)}
                className="text-[11px] text-white hover:text-cyan-300 font-semibold underline flex items-center space-x-1 rtl:space-x-reverse cursor-pointer pt-0.5"
              >
                <PlusCircle className="h-3 w-3" />
                <span>{t.reviews.leaveReview}</span>
              </button>
            </div>
          </div>
        </div>

        {/* Category Filter Chips & Carousel Nav Controls */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
          {/* Category Tabs */}
          <div className="flex overflow-x-auto space-x-2 rtl:space-x-reverse pb-1 sm:pb-0 no-scrollbar">
            {categories.map((cat) => {
              const isActive = activeCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className={`px-3.5 py-1.5 rounded-xl text-xs font-bold whitespace-nowrap transition cursor-pointer ${
                    isActive
                      ? 'bg-cyan-600 text-white shadow-md shadow-cyan-600/30'
                      : 'bg-slate-900 hover:bg-slate-800 text-slate-300 border border-slate-800'
                  }`}
                >
                  {cat.label}
                </button>
              );
            })}
          </div>

          {/* Carousel Arrow Controls */}
          <div className="flex items-center space-x-2 rtl:space-x-reverse self-end sm:self-auto">
            <span className="text-[11px] text-slate-400 mr-2 rtl:mr-0 rtl:ml-2 hidden sm:inline">
              {t.reviews.showing} {currentIndex + 1} {t.reviews.of} {filteredReviews.length}
            </span>
            <button
              onClick={handlePrev}
              aria-label="Previous Review"
              className="p-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-white border border-slate-800 hover:border-slate-700 transition cursor-pointer"
            >
              <ChevronLeft className="h-4 w-4" />
            </button>
            <button
              onClick={handleNext}
              aria-label="Next Review"
              className="p-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-white border border-slate-800 hover:border-slate-700 transition cursor-pointer"
            >
              <ChevronRight className="h-4 w-4" />
            </button>
          </div>
        </div>

        {/* Carousel Cards Container (Paused on hover) */}
        <div
          onMouseEnter={() => setIsAutoPlay(false)}
          onMouseLeave={() => setIsAutoPlay(true)}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 transition-all duration-500 ease-in-out"
        >
          {visibleReviews.map((rev) => (
            <div
              key={rev.id}
              className="bg-slate-900/90 border border-slate-800 hover:border-cyan-500/40 rounded-3xl p-6 shadow-xl space-y-4 flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 relative group"
            >
              {/* Highlight Tag & Source */}
              <div className="flex items-center justify-between text-[11px]">
                <span className="px-2.5 py-0.5 rounded-full font-bold bg-cyan-950 text-cyan-300 border border-cyan-800">
                  {rev.highlightTag}
                </span>
                <span className="text-slate-400 text-[10px] flex items-center space-x-1">
                  <CheckCircle2 className="h-3 w-3 text-emerald-400" />
                  <span>{rev.source}</span>
                </span>
              </div>

              {/* Stars & Testimonial Quote */}
              <div className="space-y-2.5">
                <div className="flex items-center space-x-1 text-amber-400">
                  {[...Array(rev.rating)].map((_, idx) => (
                    <Star key={idx} className="h-3.5 w-3.5 fill-amber-400" />
                  ))}
                </div>

                <p className="text-xs text-slate-300 leading-relaxed italic relative pl-4 border-l-2 border-cyan-500/30">
                  "{rev.comment}"
                </p>
              </div>

              {/* Author & Trip Details */}
              <div className="pt-4 border-t border-slate-800 flex items-center justify-between text-xs">
                <div className="flex items-center space-x-3">
                  <div className="h-9 w-9 rounded-full bg-gradient-to-tr from-cyan-600 to-blue-600 flex items-center justify-center font-bold text-white text-xs shrink-0 shadow-sm">
                    {rev.avatarText}
                  </div>
                  <div>
                    <h4 className="font-bold text-white text-sm leading-tight">{rev.author}</h4>
                    <p className="text-slate-400 text-[11px]">{rev.cityCountry}</p>
                  </div>
                </div>

                <div className="text-right">
                  <span className="text-[10px] text-cyan-400 block font-medium max-w-[130px] truncate">
                    {rev.tripTitle}
                  </span>
                  <span className="text-[10px] text-slate-400">{rev.date}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Carousel Pagination Dots */}
        <div className="flex justify-center items-center space-x-2 mt-8">
          {filteredReviews.map((_, i) => (
            <button
              key={i}
              onClick={() => {
                setIsAutoPlay(false);
                setCurrentIndex(i);
              }}
              aria-label={`Jump to review slide ${i + 1}`}
              className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
                currentIndex === i ? 'w-8 bg-cyan-400' : 'w-2 bg-slate-800 hover:bg-slate-700'
              }`}
            />
          ))}
        </div>
      </div>

      {/* Guest "Leave a Review" Modal */}
      {showReviewModal && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 overflow-y-auto">
          <div className="bg-slate-900 border border-slate-700 rounded-3xl max-w-lg w-full p-6 shadow-2xl relative animate-in fade-in zoom-in-95 duration-200">
            <button
              onClick={() => setShowReviewModal(false)}
              className="absolute top-5 right-5 text-slate-400 hover:text-white transition"
            >
              <X className="h-5 w-5" />
            </button>

            {formSubmitted ? (
              <div className="text-center py-8 space-y-3">
                <div className="h-12 w-12 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/40 flex items-center justify-center mx-auto">
                  <CheckCircle2 className="h-6 w-6" />
                </div>
                <h3 className="text-lg font-bold text-white">{t.reviews.modalSuccess}</h3>
              </div>
            ) : (
              <form onSubmit={handleSubmitNewReview} className="space-y-4 text-xs">
                <div className="flex items-center space-x-2 rtl:space-x-reverse">
                  <Sparkles className="h-5 w-5 text-cyan-400" />
                  <h3 className="text-base font-bold text-white">{t.reviews.modalTitle}</h3>
                </div>
                <p className="text-slate-400 text-[11px]">
                  {t.reviews.description}
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-slate-300 font-semibold mb-1">{t.reviews.modalName} *</label>
                    <input
                      type="text"
                      required
                      value={formName}
                      onChange={(e) => setFormName(e.target.value)}
                      placeholder="e.g. David Miller"
                      className="w-full bg-slate-800 border border-slate-700 rounded-xl px-3 py-2 text-white focus:outline-none focus:border-cyan-500"
                    />
                  </div>

                  <div>
                    <label className="block text-slate-300 font-semibold mb-1">{t.reviews.modalCity}</label>
                    <input
                      type="text"
                      value={formCity}
                      onChange={(e) => setFormCity(e.target.value)}
                      placeholder="e.g. Berlin, Germany 🇩🇪"
                      className="w-full bg-slate-800 border border-slate-700 rounded-xl px-3 py-2 text-white focus:outline-none focus:border-cyan-500"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-slate-300 font-semibold mb-1">{t.reviews.modalTrip}</label>
                    <select
                      value={formTrip}
                      onChange={(e) => {
                        setFormTrip(e.target.value);
                        if (e.target.value.includes('Dolphin')) setFormCategory('DOLPHIN');
                        else if (e.target.value.includes('PADI')) setFormCategory('PADI');
                        else if (e.target.value.includes('Safari')) setFormCategory('SAFARI');
                        else setFormCategory('DIVING');
                      }}
                      className="w-full bg-slate-800 border border-slate-700 rounded-xl px-3 py-2 text-white focus:outline-none focus:border-cyan-500"
                    >
                      <option value={t.reviews.catDiving}>{t.reviews.catDiving}</option>
                      <option value={t.navbar.dailyDiving}>{t.navbar.dailyDiving}</option>
                      <option value={t.reviews.catDolphin}>{t.reviews.catDolphin}</option>
                      <option value={t.reviews.catPadi}>{t.reviews.catPadi}</option>
                      <option value={t.reviews.catSafari}>{t.reviews.catSafari}</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-slate-300 font-semibold mb-1">{t.reviews.modalRating}</label>
                    <div className="flex items-center space-x-1 rtl:space-x-reverse pt-1.5">
                      {[1, 2, 3, 4, 5].map((s) => (
                        <button
                          key={s}
                          type="button"
                          onClick={() => setFormRating(s)}
                          className="p-1 cursor-pointer transition hover:scale-110"
                        >
                          <Star
                            className={`h-5 w-5 ${
                              s <= formRating ? 'text-amber-400 fill-amber-400' : 'text-slate-600'
                            }`}
                          />
                        </button>
                      ))}
                    </div>
                  </div>
                </div>

                <div>
                  <label className="block text-slate-300 font-semibold mb-1">{t.reviews.modalComment} *</label>
                  <textarea
                    required
                    rows={3}
                    value={formComment}
                    onChange={(e) => setFormComment(e.target.value)}
                    placeholder="Tell us about the dive boat, instructors, lunch, marine life you saw..."
                    className="w-full bg-slate-800 border border-slate-700 rounded-xl px-3 py-2 text-white focus:outline-none focus:border-cyan-500"
                  />
                </div>

                <div className="flex items-center justify-end space-x-2 rtl:space-x-reverse pt-2">
                  <button
                    type="button"
                    onClick={() => setShowReviewModal(false)}
                    className="px-4 py-2 bg-slate-800 hover:bg-slate-700 text-slate-300 rounded-xl transition cursor-pointer"
                  >
                    {t.reviews.modalCancel}
                  </button>
                  <button
                    type="submit"
                    className="px-5 py-2 bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 text-white rounded-xl font-bold shadow-md shadow-cyan-600/30 flex items-center space-x-1.5 rtl:space-x-reverse cursor-pointer transition"
                  >
                    <Send className="h-3.5 w-3.5" />
                    <span>{t.reviews.modalSubmit}</span>
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      )}
    </section>
  );
};
