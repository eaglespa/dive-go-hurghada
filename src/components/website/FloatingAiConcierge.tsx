import React, { useState, useRef, useEffect } from 'react';
import {
  Bot,
  User,
  Send,
  X,
  Calendar,
} from 'lucide-react';
import { AppState } from '../../services/store';
import { AiService } from '../../services/aiService';
import { useLanguage } from '../../context/LanguageContext';

interface FloatingAiConciergeProps {
  state: AppState;
  isOpen: boolean;
  onToggle: () => void;
  onOpenBooking: (serviceId?: string) => void;
  initialQuery?: string;
}

interface ChatMessage {
  id: string;
  role: 'user' | 'assistant';
  text: string;
  timestamp: string;
  source?: string;
}

export const FloatingAiConcierge: React.FC<FloatingAiConciergeProps> = ({
  state,
  isOpen,
  onToggle,
  onOpenBooking,
  initialQuery,
}) => {
  const { language, languageInfo, isRtl, t } = useLanguage();

  const getFallbackErrorMessage = (lang: string, phone: string) => {
    switch (lang) {
      case 'ar':
        return `رحلات الغوص اليومي باليخت متوفرة من 50€، الغوص التجريبي للمبتدئين من 50€، ورحلة بيت الدلافين من 40€. للتفاصيل والحجز الفوري يسعدنا تواصلك على واتساب: ${phone}!`;
      case 'de':
        return `Tägliches Bootstauchen ab €50, Schnuppertauchen ab €50 und Dolphin House ab €40. Bitte kontaktieren Sie unseren WhatsApp-Service unter ${phone}!`;
      case 'ru':
        return `Дейли-дайвинг с яхты от €50, пробные погружения от €50, Дельфиний дом от €40. Пожалуйста, напишите нам в WhatsApp: ${phone}!`;
      case 'fr':
        return `Plongée quotidienne en bateau dès 50€, baptême dès 50€ et Dolphin House dès 40€. Contactez notre assistance WhatsApp au ${phone} !`;
      case 'pl':
        return `Codzienne nurkowanie z łodzi od 50€, nurkowanie intro 50€, Dolphin House 40€. Skontaktuj się z obsługą WhatsApp pod numerem ${phone}!`;
      case 'it':
        return `Immersioni giornaliere in barca da 50€, battesimo del mare da 50€ e Dolphin House da 40€. Contattaci su WhatsApp al ${phone}!`;
      case 'cs':
        return `Denní potápění z lodi od 50€, zkušební ponory od 50€ a Dolphin House od 40€. Kontaktujte naši WhatsApp podporu na čísle ${phone}!`;
      case 'nl':
        return `Dagelijks bootduiken vanaf €50, introductieduiken vanaf €50 en Dolphin House vanaf €40. Neem contact op via WhatsApp: ${phone}!`;
      default:
        return `Daily boat diving is €50, Discover Scuba is €50, and Dolphin House is €40. Please message our WhatsApp desk at ${phone}!`;
    }
  };

  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: 'welcome-msg',
      role: 'assistant',
      text: t.concierge.welcomeMsg,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    },
  ]);

  const [inputText, setInputText] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [chatRtl, setChatRtl] = useState(isRtl);

  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Sync RTL with language changes
  useEffect(() => {
    setChatRtl(isRtl);
  }, [isRtl]);

  // Update welcome message when language changes if no user messages sent yet
  useEffect(() => {
    setMessages((prev) => {
      if (prev.length === 1 && prev[0].role === 'assistant') {
        return [
          {
            ...prev[0],
            text: t.concierge.welcomeMsg,
          },
        ];
      }
      return prev;
    });
  }, [t.concierge.welcomeMsg]);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isTyping]);

  useEffect(() => {
    if (initialQuery && initialQuery.trim().length > 0) {
      handleSendMessage(initialQuery);
    }
  }, [initialQuery]);

  const handleSendMessage = async (textToSend?: string) => {
    const query = (textToSend || inputText).trim();
    if (!query || isTyping) return;

    const userMsg: ChatMessage = {
      id: `usr-${Date.now()}`,
      role: 'user',
      text: query,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    };

    setMessages((prev) => [...prev, userMsg]);
    if (!textToSend) setInputText('');
    setIsTyping(true);

    if (/[\u0600-\u06FF]/.test(query)) {
      setChatRtl(true);
    }

    try {
      const response = await AiService.sendChatMessage({
        message: query,
        conversationHistory: messages.map((m) => ({ role: m.role, text: m.text })),
        businessProfile: state.profile,
        verifiedServices: state.services,
        verifiedPolicies: state.knowledgeBase,
        customerLanguage: languageInfo.name,
      });

      setMessages((prev) => [
        ...prev,
        {
          id: `asst-${Date.now()}`,
          role: 'assistant',
          text: response.reply,
          timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
          source: response.source,
        },
      ]);
    } catch (e: any) {
      setMessages((prev) => [
        ...prev,
        {
          id: `err-${Date.now()}`,
          role: 'assistant',
          text: getFallbackErrorMessage(
            language,
            state.profile.whatsappNumber || '+2 0103 94 64 284'
          ),
          timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        },
      ]);
    } finally {
      setIsTyping(false);
    }
  };

  return (
    <>
      {/* Floating Trigger Button */}
      {!isOpen && (
        <button
          onClick={onToggle}
          className="fixed bottom-6 right-6 z-50 p-4 bg-gradient-to-tr from-cyan-500 via-blue-600 to-indigo-600 hover:from-cyan-400 hover:to-blue-500 text-white rounded-full shadow-2xl shadow-cyan-600/40 flex items-center space-x-2 rtl:space-x-reverse group transition-all duration-300 hover:scale-105 cursor-pointer"
          title={t.concierge.title}
        >
          <div className="relative">
            <Bot className="h-6 w-6" />
            <span className="absolute -top-1 -right-1 h-3 w-3 bg-emerald-400 rounded-full border-2 border-slate-900 animate-pulse" />
          </div>
          <span className="text-xs font-bold hidden sm:inline pr-1 rtl:pr-0 rtl:pl-1">
            {t.concierge.title} ({languageInfo.nativeName})
          </span>
        </button>
      )}

      {/* Floating Chat Window */}
      {isOpen && (
        <div className="fixed bottom-6 right-6 z-50 w-full sm:w-[400px] h-[540px] bg-slate-900 border border-slate-700/80 rounded-3xl shadow-2xl overflow-hidden flex flex-col animate-in fade-in slide-in-from-bottom-5 duration-200">
          {/* Header */}
          <div className="bg-gradient-to-r from-slate-900 via-cyan-950 to-blue-950 p-4 border-b border-slate-800 flex items-center justify-between">
            <div className="flex items-center space-x-2.5 rtl:space-x-reverse">
              <div className="h-9 w-9 rounded-xl bg-cyan-500/20 border border-cyan-500/40 flex items-center justify-center text-cyan-400">
                <Bot className="h-5 w-5" />
              </div>
              <div>
                <h3 className="font-extrabold text-sm text-white flex items-center space-x-1.5 rtl:space-x-reverse">
                  <span>{t.concierge.title}</span>
                  <span className="text-[10px] text-emerald-400 font-bold">● {t.concierge.onlineBadge}</span>
                </h3>
                <span className="text-[10px] text-cyan-300">{t.concierge.sub} • {languageInfo.nativeName}</span>
              </div>
            </div>

            <div className="flex items-center space-x-1 rtl:space-x-reverse">
              <button
                onClick={() => setChatRtl(!chatRtl)}
                className={`px-2 py-0.5 rounded text-[10px] font-bold ${
                  chatRtl ? 'bg-cyan-600 text-white' : 'bg-slate-800 text-slate-400'
                }`}
                title="Toggle Text Direction"
              >
                {chatRtl ? 'RTL' : 'LTR'}
              </button>
              <button
                onClick={onToggle}
                className="p-1.5 text-slate-400 hover:text-white rounded-lg transition cursor-pointer"
              >
                <X className="h-4 w-4" />
              </button>
            </div>
          </div>

          {/* Quick Suggestions Strip */}
          <div className="bg-slate-950/80 px-3 py-2 border-b border-slate-800/80 flex overflow-x-auto space-x-1.5 rtl:space-x-reverse no-scrollbar text-[11px]">
            <button
              onClick={() => handleSendMessage(t.concierge.quickPrompt1)}
              className="px-2.5 py-1 rounded-lg bg-slate-800 hover:bg-slate-700 text-cyan-300 shrink-0 whitespace-nowrap transition cursor-pointer"
            >
              🤿 {t.concierge.quickPrompt1.slice(0, 24)}...
            </button>
            <button
              onClick={() => handleSendMessage(t.concierge.quickPrompt2)}
              className="px-2.5 py-1 rounded-lg bg-slate-800 hover:bg-slate-700 text-cyan-300 shrink-0 whitespace-nowrap transition cursor-pointer"
            >
              🐬 {t.concierge.quickPrompt2.slice(0, 24)}...
            </button>
            <button
              onClick={() => handleSendMessage(t.concierge.quickPrompt3)}
              className="px-2.5 py-1 rounded-lg bg-slate-800 hover:bg-slate-700 text-cyan-300 shrink-0 whitespace-nowrap transition cursor-pointer"
            >
              ✓ {t.concierge.quickPrompt3.slice(0, 24)}...
            </button>
          </div>

          {/* Messages Feed */}
          <div
            dir={chatRtl ? 'rtl' : 'ltr'}
            className="flex-1 p-4 overflow-y-auto space-y-3 bg-gradient-to-b from-slate-900 to-slate-950 text-xs"
          >
            {messages.map((m) => {
              const isAsst = m.role === 'assistant';
              return (
                <div
                  key={m.id}
                  className={`flex items-start gap-2.5 ${
                    isAsst ? 'justify-start' : 'justify-end flex-row-reverse'
                  }`}
                >
                  <div
                    className={`h-7 w-7 rounded-lg flex items-center justify-center shrink-0 text-xs ${
                      isAsst ? 'bg-cyan-600 text-white' : 'bg-slate-700 text-slate-200'
                    }`}
                  >
                    {isAsst ? <Bot className="h-3.5 w-3.5" /> : <User className="h-3.5 w-3.5" />}
                  </div>

                  <div className={`max-w-[82%] space-y-1 ${isAsst ? 'items-start' : 'items-end'}`}>
                    <div
                      className={`p-3 rounded-2xl leading-relaxed shadow-sm ${
                        isAsst
                          ? 'bg-slate-800/90 text-slate-200 border border-slate-700/70'
                          : 'bg-gradient-to-r from-cyan-600 to-blue-600 text-white font-medium'
                      }`}
                    >
                      {m.text}
                    </div>

                    <div className="flex items-center space-x-1.5 rtl:space-x-reverse text-[9px] text-slate-500 px-1">
                      <span>{m.timestamp}</span>
                      {m.source && <span className="font-mono text-cyan-500">· {m.source}</span>}
                    </div>
                  </div>
                </div>
              );
            })}

            {isTyping && (
              <div className="flex items-center space-x-2 rtl:space-x-reverse text-xs text-cyan-400 py-1">
                <Bot className="h-4 w-4 animate-bounce" />
                <span className="animate-pulse">Checking verified facts...</span>
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          {/* Quick Book Now Action Bar */}
          <div className="px-4 py-2 bg-slate-950 border-t border-slate-800 flex items-center justify-between text-xs">
            <span className="text-slate-400 text-[11px]">{t.concierge.btnBook}</span>
            <button
              onClick={() => onOpenBooking()}
              className="flex items-center space-x-1 rtl:space-x-reverse px-3 py-1 bg-cyan-600 hover:bg-cyan-500 text-white rounded-lg text-[11px] font-bold shadow-sm transition cursor-pointer"
            >
              <Calendar className="h-3 w-3" />
              <span>{t.navbar.bookOnline}</span>
            </button>
          </div>

          {/* Input Bar */}
          <div className="p-3 bg-slate-900 border-t border-slate-800">
            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleSendMessage();
              }}
              className="flex items-center space-x-2 rtl:space-x-reverse"
            >
              <input
                dir={chatRtl ? 'rtl' : 'ltr'}
                type="text"
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
                placeholder={t.concierge.placeholder}
                className="flex-1 bg-slate-800 border border-slate-700 rounded-xl px-3 py-2 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-cyan-500"
              />
              <button
                type="submit"
                disabled={!inputText.trim() || isTyping}
                className="p-2.5 bg-cyan-600 hover:bg-cyan-500 disabled:opacity-40 text-white rounded-xl shadow-md transition cursor-pointer"
              >
                <Send className="h-3.5 w-3.5" />
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
};
