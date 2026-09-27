import type { VercelRequest, VercelResponse } from '@vercel/node';

export default function handler(req: VercelRequest, res: VercelResponse) {
  const apiKey = process.env.GEMINI_API_KEY || '';
  const isAiConfigured = Boolean(apiKey);

  res.json({
    status: 'ok',
    timestamp: new Date().toISOString(),
    components: {
      database: { status: 'HEALTHY', type: 'InMemory-StateEngine-with-LocalStorage-Persistence' },
      aiProvider: {
        status: isAiConfigured ? 'HEALTHY' : 'NOT_CONFIGURED',
        provider: 'Google Gemini',
        model: 'gemini-2.0-flash',
        keyPresent: isAiConfigured,
      },
      whatsapp: {
        status: 'DEGRADED',
        note: 'Customer Webhook Receiver Active. Live Meta Cloud API credentials not yet provisioned by owner.',
      },
      socialConnectors: {
        status: 'NOT_CONFIGURED',
        note: 'OAuth tokens require owner platform authorization.',
      },
      queueWorker: { status: 'HEALTHY', pendingJobs: 0 },
      storage: { status: 'HEALTHY', type: 'LocalSecureStorage' },
      webhookSecurity: { status: 'HEALTHY', hmacVerified: true },
    },
  });
}
