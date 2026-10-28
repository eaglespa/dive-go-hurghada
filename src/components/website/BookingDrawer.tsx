import React, { useState } from 'react';
import {
  Calendar,
  CheckCircle2,
  AlertTriangle,
  X,
  ArrowRight,
} from 'lucide-react';
import { AppState, appStore } from '../../services/store';
import { Reservation, PaymentStatus } from '../../types';
import { useLanguage } from '../../context/LanguageContext';

interface BookingDrawerProps {
  state: AppState;
  isOpen: boolean;
  onClose: () => void;
  preselectedServiceId?: string;
  preselectedDate?: string;
  preselectedPax?: number;
}

export const BookingDrawer: React.FC<BookingDrawerProps> = ({
  state,
  isOpen,
  onClose,
  preselectedServiceId,
  preselectedDate,
  preselectedPax,
}) => {
  if (!isOpen) return null;

  const { t, getLocalizedService } = useLanguage();

  const tomorrowStr = preselectedDate || new Date(Date.now() + 86400000).toISOString().split('T')[0];
  const initialServiceId = preselectedServiceId || state.services[0]?.id || '';

  const [serviceId, setServiceId] = useState(initialServiceId);
  const [serviceDate, setServiceDate] = useState(tomorrowStr);
  const [pickupTime] = useState('08:00 AM');
  const [customerName, setCustomerName] = useState('');
  const [customerEmail, setCustomerEmail] = useState('');
  const [customerPhone, setCustomerPhone] = useState('');
  const [hotelName, setHotelName] = useState('');
  const [roomNumber, setRoomNumber] = useState('');
  const [adultsCount, setAdultsCount] = useState(preselectedPax || 2);
  const [childrenCount, setChildrenCount] = useState(0);
  const [paymentStatus, setPaymentStatus] = useState<PaymentStatus>('CASH_ON_ARRIVAL');
  const [specialRequests] = useState('');

  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [confirmedBooking, setConfirmedBooking] = useState<Reservation | null>(null);

  const selectedService = state.services.find((s) => s.id === serviceId) || state.services[0];
  const isAskPrice = selectedService?.id === 'srv-dgh-private-padi' || selectedService?.id === 'srv-dgh-tauchsafari' || selectedService?.adultPriceLabel === 'Ask' || selectedService?.priceAdult === 0;
  const calculatedTotal = selectedService && !isAskPrice
    ? adultsCount * selectedService.priceAdult +
      (selectedService.childPriceLabel ? 0 : childrenCount * (selectedService.priceChild || 0))
    : 0;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage(null);

    if (!customerName || !customerPhone || !hotelName) {
      setErrorMessage(t.bookingDrawer.errRequired);
      return;
    }

    const res = appStore.createReservation({
      serviceId,
      serviceDate,
      pickupTime,
      customerName,
      customerEmail,
      customerPhone,
      whatsappNumber: customerPhone,
      hotelName,
      roomNumber,
      adultsCount,
      childrenCount,
      paymentStatus,
      specialRequests,
      sourceChannel: 'AI_SALES_AGENT',
    });

    if (!res.success) {
      setErrorMessage(res.error || 'Unable to confirm booking.');
      return;
    }

    if (res.reservation) {
      setConfirmedBooking(res.reservation);
    }
  };

  const handleSendWhatsAppVoucher = () => {
    if (!confirmedBooking) return;
    const cleanPhone = (state.profile.whatsappNumber || '+2 0103 94 64 284').replace(/[^0-9]/g, '');
    const text = encodeURIComponent(
      `Hello Dive Go Hurghada! (https://www.divegohurghada.com/)\n\n` +
      `🎫 ${t.bookingDrawer.successId} ${confirmedBooking.bookingCode}\n` +
      `🤿 ${t.bookingDrawer.labelService}: ${confirmedBooking.serviceTitle}\n` +
      `📅 ${t.bookingDrawer.labelDate}: ${confirmedBooking.serviceDate} @ ${confirmedBooking.pickupTime}\n` +
      `👤 ${t.bookingDrawer.labelName}: ${confirmedBooking.customerName} (${confirmedBooking.adultsCount} ${t.bookingDrawer.labelAdults}, ${confirmedBooking.childrenCount} ${t.bookingDrawer.labelChildren})\n` +
      `🏨 ${t.bookingDrawer.labelHotel}: ${confirmedBooking.hotelName} (${confirmedBooking.roomNumber ? `${t.bookingDrawer.labelRoom} ${confirmedBooking.roomNumber}` : 'Lobby'})\n` +
      `💶 ${t.bookingDrawer.total} €${confirmedBooking.totalAmount}\n\n` +
      `Please confirm our hotel pickup schedule!`
    );
    window.open(`https://wa.me/${cleanPhone}?text=${text}`, '_blank');
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 overflow-y-auto">
      <div className="bg-slate-900 border border-slate-700/80 rounded-3xl max-w-xl w-full shadow-2xl overflow-hidden text-slate-200 animate-in fade-in zoom-in-95 duration-200">
        {/* Header */}
        <div className="bg-gradient-to-r from-slate-900 via-cyan-950 to-blue-950 p-5 border-b border-slate-800 flex items-center justify-between">
          <div className="flex items-center space-x-2.5 rtl:space-x-reverse">
            <div className="h-9 w-9 rounded-xl bg-cyan-500/20 border border-cyan-500/40 flex items-center justify-center text-cyan-400">
              <Calendar className="h-5 w-5" />
            </div>
            <div>
              <h3 className="font-extrabold text-base text-white">{t.bookingDrawer.title}</h3>
              <p className="text-[11px] text-cyan-300">{t.bookingDrawer.sub}</p>
            </div>
          </div>
          <button onClick={onClose} className="p-1.5 text-slate-400 hover:text-white rounded-lg transition cursor-pointer">
            <X className="h-5 w-5" />
          </button>
        </div>

        {confirmedBooking ? (
          /* Booking Confirmation State */
          <div className="p-6 text-center space-y-4">
            <div className="h-14 w-14 bg-emerald-500/20 border border-emerald-500/40 rounded-full flex items-center justify-center text-emerald-400 mx-auto">
              <CheckCircle2 className="h-8 w-8" />
            </div>

            <div>
              <h4 className="text-xl font-black text-white">{t.bookingDrawer.successTitle}</h4>
              <p className="text-xs text-slate-300 mt-1">
                {t.bookingDrawer.successNotice}
              </p>
            </div>

            <div className="bg-slate-800/80 border border-slate-700 rounded-2xl p-4 text-xs text-left rtl:text-right space-y-2">
              <div className="flex items-center justify-between border-b border-slate-700 pb-2">
                <span className="text-slate-400">{t.bookingDrawer.successId}</span>
                <span className="font-mono font-bold text-cyan-400 text-sm">{confirmedBooking.bookingCode}</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-slate-400">{t.bookingDrawer.labelService}:</span>
                <strong className="text-white">{confirmedBooking.serviceTitle}</strong>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-slate-400">{t.bookingDrawer.labelDate}:</span>
                <strong className="text-white">
                  {confirmedBooking.serviceDate} @ {confirmedBooking.pickupTime}
                </strong>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-slate-400">{t.bookingDrawer.labelHotel}:</span>
                <span className="text-slate-200">
                  {confirmedBooking.hotelName} ({confirmedBooking.roomNumber ? `${t.bookingDrawer.labelRoom} ${confirmedBooking.roomNumber}` : 'Lobby'})
                </span>
              </div>
              <div className="flex items-center justify-between border-t border-slate-700 pt-2">
                <span className="text-slate-400">{t.bookingDrawer.total}</span>
                <span className="text-base font-black text-emerald-400">
                  €{confirmedBooking.totalAmount}
                </span>
              </div>
            </div>

            <div className="space-y-2 pt-2">
              <button
                onClick={handleSendWhatsAppVoucher}
                className="w-full py-3 bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white rounded-xl font-bold text-xs shadow-lg shadow-emerald-600/30 transition flex items-center justify-center space-x-2 rtl:space-x-reverse cursor-pointer"
              >
                <span>{t.bookingDrawer.btnWhatsapp}</span>
                <ArrowRight className="h-4 w-4 rtl:rotate-180" />
              </button>

              <button
                onClick={onClose}
                className="w-full py-2 bg-slate-800 hover:bg-slate-700 text-slate-300 rounded-xl text-xs font-semibold transition cursor-pointer"
              >
                {t.bookingDrawer.btnClose}
              </button>
            </div>
          </div>
        ) : (
          /* Booking Form */
          <form onSubmit={handleSubmit} className="p-6 space-y-4 text-xs">
            {errorMessage && (
              <div className="p-3 bg-red-950/80 border border-red-800 text-red-200 rounded-xl flex items-center space-x-2 rtl:space-x-reverse">
                <AlertTriangle className="h-4 w-4 text-red-400 shrink-0" />
                <span>{errorMessage}</span>
              </div>
            )}

            {/* Service & Date */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="block text-slate-300 font-semibold mb-1">{t.bookingDrawer.labelService} *</label>
                <select
                  value={serviceId}
                  onChange={(e) => setServiceId(e.target.value)}
                  className="w-full bg-slate-800 border border-slate-700 rounded-xl px-3 py-2 text-white font-medium focus:outline-none focus:border-cyan-500"
                >
                  {state.services.map((s) => {
                    const loc = getLocalizedService(s);
                    const isAsk = s.id === 'srv-dgh-private-padi' || s.id === 'srv-dgh-tauchsafari' || s.adultPriceLabel === 'Ask' || s.priceAdult === 0;
                    return (
                      <option key={s.id} value={s.id}>
                        {isAsk ? `${loc.title} (Ask)` : `${loc.title} (€${s.priceAdult})`}
                      </option>
                    );
                  })}
                </select>
              </div>

              <div>
                <label className="block text-slate-300 font-semibold mb-1">{t.bookingDrawer.labelDate} *</label>
                <input
                  type="date"
                  required
                  value={serviceDate}
                  onChange={(e) => setServiceDate(e.target.value)}
                  className="w-full bg-slate-800 border border-slate-700 rounded-xl px-3 py-2 text-white focus:outline-none focus:border-cyan-500"
                />
              </div>
            </div>

            {/* Guest Name & Phone */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="block text-slate-300 font-semibold mb-1">{t.bookingDrawer.labelName} *</label>
                <input
                  type="text"
                  required
                  value={customerName}
                  onChange={(e) => setCustomerName(e.target.value)}
                  placeholder="e.g. Thomas Becker"
                  className="w-full bg-slate-800 border border-slate-700 rounded-xl px-3 py-2 text-white focus:outline-none focus:border-cyan-500"
                />
              </div>

              <div>
                <label className="block text-slate-300 font-semibold mb-1">{t.bookingDrawer.labelPhone} *</label>
                <input
                  type="text"
                  required
                  value={customerPhone}
                  onChange={(e) => setCustomerPhone(e.target.value)}
                  placeholder="+49 176 12345678"
                  className="w-full bg-slate-800 border border-slate-700 rounded-xl px-3 py-2 text-white font-mono focus:outline-none focus:border-cyan-500"
                />
              </div>
            </div>

            {/* Hotel & Room */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="block text-slate-300 font-semibold mb-1">{t.bookingDrawer.labelHotel} *</label>
                <input
                  type="text"
                  required
                  value={hotelName}
                  onChange={(e) => setHotelName(e.target.value)}
                  placeholder="e.g. Steigenberger ALDAU Beach"
                  className="w-full bg-slate-800 border border-slate-700 rounded-xl px-3 py-2 text-white focus:outline-none focus:border-cyan-500"
                />
              </div>

              <div>
                <label className="block text-slate-300 font-semibold mb-1">{t.bookingDrawer.labelRoom}</label>
                <input
                  type="text"
                  value={roomNumber}
                  onChange={(e) => setRoomNumber(e.target.value)}
                  placeholder="e.g. 412"
                  className="w-full bg-slate-800 border border-slate-700 rounded-xl px-3 py-2 text-white focus:outline-none focus:border-cyan-500"
                />
              </div>
            </div>

            {/* Email Address */}
            <div>
              <label className="block text-slate-300 font-semibold mb-1">{t.bookingDrawer.labelEmail}</label>
              <input
                type="email"
                value={customerEmail}
                onChange={(e) => setCustomerEmail(e.target.value)}
                placeholder="guest@example.com"
                className="w-full bg-slate-800 border border-slate-700 rounded-xl px-3 py-2 text-white focus:outline-none focus:border-cyan-500"
              />
            </div>

            {/* Pax counts & Payment */}
            <div className="grid grid-cols-3 gap-3">
              <div>
                <label className="block text-slate-300 font-semibold mb-1">{t.bookingDrawer.labelAdults}</label>
                <input
                  type="number"
                  min={1}
                  max={20}
                  value={adultsCount}
                  onChange={(e) => setAdultsCount(Number(e.target.value))}
                  className="w-full bg-slate-800 border border-slate-700 rounded-xl px-3 py-2 text-white focus:outline-none focus:border-cyan-500"
                />
              </div>

              <div>
                <label className="block text-slate-300 font-semibold mb-1">{t.bookingDrawer.labelChildren}</label>
                <input
                  type="number"
                  min={0}
                  max={10}
                  value={childrenCount}
                  onChange={(e) => setChildrenCount(Number(e.target.value))}
                  className="w-full bg-slate-800 border border-slate-700 rounded-xl px-3 py-2 text-white focus:outline-none focus:border-cyan-500"
                />
              </div>

              <div>
                <label className="block text-slate-300 font-semibold mb-1">{t.bookingDrawer.labelPayment}</label>
                <select
                  value={paymentStatus}
                  onChange={(e) => setPaymentStatus(e.target.value as any)}
                  className="w-full bg-slate-800 border border-slate-700 rounded-xl px-3 py-2 text-white focus:outline-none focus:border-cyan-500"
                >
                  <option value="CASH_ON_ARRIVAL">{t.bookingDrawer.payCash}</option>
                  <option value="DEPOSIT_PAID">{t.bookingDrawer.payCard}</option>
                </select>
              </div>
            </div>

            {/* Price Preview Card */}
            <div className="bg-slate-800/80 p-3.5 rounded-2xl border border-cyan-800/50 flex items-center justify-between">
              <div>
                <span className="text-[10px] uppercase font-bold text-slate-400 block">{t.bookingDrawer.total}</span>
                <span className="text-xl font-black text-white">{isAskPrice ? 'Ask (On Request)' : `€${calculatedTotal}`}</span>
                {selectedService?.childPriceLabel && childrenCount > 0 && (
                  <span className="text-[11px] text-cyan-300 font-semibold block">
                    + {t.bookingDrawer.labelChildren} ({childrenCount}): {selectedService.childPriceLabel}
                  </span>
                )}
                <span className="text-[10px] text-emerald-400 block">
                  ✓ {t.hero.badgeCancellation}
                </span>
              </div>

              <button
                type="submit"
                className="py-2.5 px-5 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white rounded-xl font-bold shadow-lg shadow-cyan-600/30 transition cursor-pointer"
              >
                {t.bookingDrawer.btnConfirm}
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};
