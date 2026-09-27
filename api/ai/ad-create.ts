import type { VercelRequest, VercelResponse } from '@vercel/node';
import { GoogleGenAI } from '@google/genai';

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method Not Allowed' });
  }

  try {
    const { service, targetPlatform = 'Instagram', language = 'English' } = req.body;

    if (!service || !service.title) {
      return res.status(400).json({ error: 'Service details required' });
    }

    const apiKey = process.env.GEMINI_API_KEY || '';
    const ai = apiKey ? new GoogleGenAI({ apiKey }) : null;

    if (ai) {
      const prompt = `Generate a high-converting, strictly truthful social media ad campaign for ${targetPlatform} in ${language}.
Service Details:
Title: ${service.title}
Category: ${service.category}
Price Adult: €${service.priceAdult}
Price Child: €${service.priceChild || 'Free'}
Duration: ${service.durationHours} hours
Inclusions: ${(service.inclusions || []).join(', ')}
Cancellation: ${service.cancellationPolicy || '24h free cancellation'}

Output structured JSON with:
1. headline (catchy, no false claims)
2. caption (engaging, highlighting real inclusions and verified price)
3. callToAction (e.g. 'Book your spot via WhatsApp')
4. hashtags (5-8 relevant tags)
5. imagePrompt (vivid description for generating promotional visual without text overlay)`;

      const geminiResponse = await ai.models.generateContent({
        model: 'gemini-2.0-flash',
        contents: prompt,
        config: {
          responseMimeType: 'application/json',
          temperature: 0.7,
        },
      });

      const parsed = JSON.parse(geminiResponse.text || '{}');
      return res.json({ ad: parsed, source: 'gemini-2.0-flash' });
    }

    // Local fallback
    const ad = {
      headline: `Experience the Magic of ${service.title}`,
      caption: `Dive into turquoise waters and unforgettable memories! Enjoy our ${service.title} (${service.durationHours} hrs) with hotel transfer and gear included. Just €${service.priceAdult} per adult. Flexible 24h cancellation! 🌊☀️`,
      callToAction: `Reserve instantly via WhatsApp or direct message.`,
      hashtags: [
        `#${service.title.replace(/\s+/g, '')}`,
        '#TravelAdventures',
        '#RedSeaExcursions',
        '#ScubaDiving',
        '#Wanderlust',
      ],
      imagePrompt: `Cinematic professional photograph of crystal clear turquoise ocean, vibrant coral reef with colorful tropical fish and sun rays piercing the water surface, 8k resolution, authentic travel editorial photography.`,
    };

    return res.json({ ad, source: 'local-engine' });
  } catch (err: any) {
    res.status(500).json({ error: err.message });
  }
}
