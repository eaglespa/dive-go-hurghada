import type { VercelRequest, VercelResponse } from '@vercel/node';
import { GoogleGenAI } from '@google/genai';

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method Not Allowed' });
  }

  try {
    const {
      message,
      conversationHistory = [],
      businessProfile = {},
      verifiedServices = [],
      verifiedPolicies = [],
      customerLanguage = 'English',
    } = req.body;

    if (!message || typeof message !== 'string') {
      return res.status(400).json({ error: 'Message is required' });
    }

    // Prompt Injection Defense
    const injectionPatterns = [
      /ignore previous instructions/i,
      /reveal system prompt/i,
      /bypass safety/i,
      /you are now evil/i,
      /developer mode activated/i,
      /grant admin access/i,
    ];

    const hasInjectionAttempt = injectionPatterns.some((pattern) => pattern.test(message));
    if (hasInjectionAttempt) {
      return res.json({
        reply:
          'I am the official tourism assistant. I can only provide verified information regarding our excursions, bookings, schedules, and policies. How can I assist you with your trip today?',
        detectedLanguage: customerLanguage,
        isInjectionBlocked: true,
        knowledgeGaps: [],
      });
    }

    const apiKey = process.env.GEMINI_API_KEY || '';
    const ai = apiKey ? new GoogleGenAI({ apiKey }) : null;

    if (ai) {
      const servicesSummary = verifiedServices
        .map(
          (s: any) =>
            `- ${s.title}: Adult €${s.priceAdult}, Child €${s.priceChild || 'N/A'}. Duration: ${s.durationHours}h. Included: ${(s.inclusions || []).join(', ')}. Meeting point: ${s.meetingPoint || 'Hotel lobby pickup'}. Cancellation: ${s.cancellationPolicy || '24h free cancellation'}`
        )
        .join('\n');

      const policiesSummary = verifiedPolicies
        .map((p: any) => `- [${p.category}] ${p.subject}: ${p.content}`)
        .join('\n');

      const systemInstruction = `You are the smart, polite, kind multilingual Tourism Sales Assistant for "${businessProfile.companyName || 'our excursions agency'}".
Location: ${businessProfile.location || 'Hurghada, Red Sea, Egypt'}.
Supported Currency: ${businessProfile.currency || 'EUR (€)'}.

CRITICAL OPERATIONAL RULES:
1. STRICT TRUTH: ONLY quote prices, services, duration, and policies from the VERIFIED SERVICES & POLICIES list below. NEVER fabricate availability, prices, or free perks.
2. IF UNCERTAIN: If the customer asks a question not covered by the verified facts, DO NOT GUESS. Politely state that you will check with the operations manager and flag it.
3. LANGUAGE: Automatically respond in the language used by the customer.
4. SALES STYLE: Helpful, welcoming, consultative. Ask relevant details like date of interest, number of adults/children, and hotel name for pickup.
5. NO UNAUTHORIZED ACTIONS: Do not confirm booking without collecting name, date, hotel, and guest count.

VERIFIED SERVICES:
${servicesSummary || 'No services configured yet.'}

VERIFIED POLICIES:
${policiesSummary || 'Standard 24-hour free cancellation policy applies.'}
`;

      const prompt = `Customer says: "${message}"\n\nPlease reply kindly and accurately based strictly on the verified facts above.`;

      const geminiResponse = await ai.models.generateContent({
        model: 'gemini-2.0-flash',
        contents: prompt,
        config: {
          systemInstruction,
          temperature: 0.3,
        },
      });

      const replyText =
        geminiResponse.text ||
        'Thank you for reaching out! Let me check our available excursions for you.';

      return res.json({
        reply: replyText,
        detectedLanguage: customerLanguage,
        isInjectionBlocked: false,
        source: 'gemini-2.0-flash',
      });
    }

    // Rule-based fallback
    const lower = message.toLowerCase();
    let reply = '';
    const isArabic = /[\u0600-\u06FF]/.test(message);
    const isGerman = /\b(hallo|guten|ausflug|buchen|preis|tauchen|delphin|kinder)\b/i.test(message);

    const matchingService = verifiedServices.find((s: any) =>
      lower.includes((s.title || '').toLowerCase())
    );

    if (isArabic) {
      if (matchingService) {
        reply = `أهلاً بك! رحلة ${matchingService.title} متاحة بسعر ${matchingService.priceAdult}€ للبالغين و ${matchingService.priceChild || 0}€ للأطفال. تشمل الرحلة الانتقالات والمعدات. في أي يوم ترغب بالحجز وكم عدد الأفراد؟`;
      } else {
        reply = `أهلاً وسهلاً بك في ${businessProfile.companyName || 'مركز رحلات البحر الأحمر'}! يسعدنا مساعدتك في حجز أجمل الرحلات البحرية والغوص ورحلات السفاري. ما هي الرحلة التي ترغب بالاستفسار عنها؟`;
      }
    } else if (isGerman) {
      if (matchingService) {
        reply = `Hallo und herzlich willkommen! Der Ausflug "${matchingService.title}" kostet €${matchingService.priceAdult} pro Erwachsenem und €${matchingService.priceChild || 0} für Kinder. Dauer: ca. ${matchingService.durationHours} Stunden inklusive Hotel-Transfer. Für welches Datum möchten Sie reservieren?`;
      } else {
        reply = `Willkommen bei ${businessProfile.companyName || 'unserem Ausflugs-Service'}! Wir bieten geführte Bootstouren, Tauchgänge und Wüstensafaris mit geprüfter Qualität an. Welcher Ausflug interessiert Sie?`;
      }
    } else {
      if (matchingService) {
        reply = `Welcome! Our "${matchingService.title}" is available at €${matchingService.priceAdult} per adult and €${matchingService.priceChild || 0} per child. It runs for ${matchingService.durationHours} hours with pickup from your hotel lobby included. Which date would you like to reserve?`;
      } else if (lower.includes('price') || lower.includes('cost') || lower.includes('how much')) {
        const pricesList = verifiedServices.map((s: any) => `${s.title}: €${s.priceAdult}`).join(', ');
        reply = `Here are our verified trip rates: ${pricesList || 'Please check our services list'}. All trips include hotel transfer and equipment. How many guests will be joining?`;
      } else {
        reply = `Hello! Welcome to ${businessProfile.companyName || 'Travel AI Command Center'}. We are happy to help you discover the best excursions, diving trips, and desert safaris. How many guests are in your group and which activities interest you most?`;
      }
    }

    return res.json({
      reply,
      detectedLanguage: isArabic ? 'Arabic' : isGerman ? 'German' : 'English',
      isInjectionBlocked: false,
      source: 'local-resilient-sales-engine',
    });
  } catch (error: any) {
    console.error('AI Chat Error:', error);
    return res.status(500).json({
      error: 'AI service temporarily unavailable',
      details: error.message,
    });
  }
}
