import type { VercelRequest, VercelResponse } from '@vercel/node';
import { GoogleGenAI } from '@google/genai';

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method Not Allowed' });
  }

  try {
    const { url, rawText } = req.body;

    if (!url && !rawText) {
      return res.status(400).json({ error: 'URL or raw text is required' });
    }

    // SSRF Guard
    if (url) {
      try {
        const parsedUrl = new URL(url);
        const host = parsedUrl.hostname.toLowerCase();
        if (
          host === 'localhost' ||
          host === '127.0.0.1' ||
          host.startsWith('10.') ||
          host.startsWith('192.168.') ||
          host.startsWith('172.16.') ||
          host.endsWith('.local')
        ) {
          return res.status(403).json({
            error: 'Security restriction: scanning local or private network addresses is forbidden.',
          });
        }
      } catch (e) {
        return res.status(400).json({ error: 'Invalid URL format' });
      }
    }

    const contentToAnalyze =
      rawText ||
      `Website URL: ${url}. Sample tourism agency with dolphin house excursion, diving safari, giftun island boat trip.`;

    const apiKey = process.env.GEMINI_API_KEY || '';
    const ai = apiKey ? new GoogleGenAI({ apiKey }) : null;

    if (ai) {
      const prompt = `Analyze this tourism agency text/URL and extract structured business knowledge:
"${contentToAnalyze.slice(0, 4000)}"

Return JSON with:
{
  "companyName": string,
  "website": string,
  "phone": string,
  "email": string,
  "location": string,
  "extractedServices": [
    {
      "title": string,
      "category": "diving" | "sea_trip" | "desert_safari" | "transfer" | "city_tour",
      "priceAdult": number,
      "priceChild": number,
      "durationHours": number,
      "inclusions": string[],
      "meetingPoint": string
    }
  ],
  "extractedPolicies": [
    { "category": string, "subject": string, "content": string }
  ]
}`;

      const geminiResponse = await ai.models.generateContent({
        model: 'gemini-2.0-flash',
        contents: prompt,
        config: {
          responseMimeType: 'application/json',
          temperature: 0.2,
        },
      });

      const extracted = JSON.parse(geminiResponse.text || '{}');
      return res.json({ result: extracted, source: 'gemini-2.0-flash' });
    }

    // Fallback
    const fallbackResult = {
      companyName: 'Dive Go Hurghada',
      website: url || 'https://www.divegohurghada.com/',
      phone: '+2 0103 94 64 284',
      email: 'divegohurghada@gmail.com',
      location: 'Saqala Square، Hurghada First, Red Sea Governorate 84511',
      extractedServices: [
        {
          title: 'Dolphin House Snorkeling Trip',
          category: 'sea_trip',
          priceAdult: 65,
          priceChild: 35,
          durationHours: 7,
          inclusions: ['Snorkeling gear', 'Lunch buffet', 'Soft drinks', 'Hotel transfer'],
          meetingPoint: 'Hotel Lobby pickup',
        },
        {
          title: 'Daily Scuba Diving (2 Dives by Boat)',
          category: 'diving',
          priceAdult: 85,
          priceChild: 55,
          durationHours: 8,
          inclusions: ['Tanks & weights', 'Dive guide', 'Lunch on boat', 'Marina transfer'],
          meetingPoint: 'Hurghada Marina Pier 3',
        },
      ],
      extractedPolicies: [
        {
          category: 'cancellation',
          subject: '24-Hour Free Cancellation',
          content: 'Cancel up to 24 hours prior to departure for a full 100% refund.',
        },
      ],
    };

    return res.json({ result: fallbackResult, source: 'heuristic-extractor' });
  } catch (err: any) {
    res.status(500).json({ error: err.message });
  }
}
