import type { VercelRequest, VercelResponse } from '@vercel/node';

export default function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method === 'GET') {
    // WhatsApp webhook verification
    const mode = req.query['hub.mode'];
    const token = req.query['hub.verify_token'];
    const challenge = req.query['hub.challenge'];

    const EXPECTED_TOKEN =
      process.env.WHATSAPP_VERIFY_TOKEN || 'TRAVEL_AI_COMMAND_SECRET_2026';

    if (mode === 'subscribe' && token === EXPECTED_TOKEN) {
      console.log('[WhatsApp Webhook] Verification successful!');
      return res.status(200).send(challenge);
    }
    return res.status(403).send('Verification failed');
  }

  if (req.method === 'POST') {
    const body = req.body;
    console.log('[WhatsApp Inbound Message Received]:', JSON.stringify(body, null, 2));
    return res.status(200).json({ status: 'received' });
  }

  return res.status(405).json({ error: 'Method Not Allowed' });
}
