import { Redis } from '@upstash/redis'

export const config = { runtime: 'edge' }

const redis = new Redis({
  url: process.env.KV_REST_API_URL,
  token: process.env.KV_REST_API_TOKEN,
})

export default async function handler(req) {
  if (req.method !== 'POST') {
    return new Response('Method not allowed', { status: 405 })
  }

  try {
    const { sessionId, messages, page, leadCaptured, leadData } = await req.json()

    if (!sessionId) {
      return new Response(JSON.stringify({ error: 'Missing sessionId' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' }
      })
    }

    const session = {
      id: sessionId,
      messages,
      page,
      leadCaptured: leadCaptured || false,
      leadData: leadData || null,
      messageCount: messages?.length || 0,
      timestamp: new Date().toISOString(),
      userAgent: req.headers.get('user-agent') || '',
    }

    // Store session with 30-day TTL
    await redis.set(`chat:${sessionId}`, JSON.stringify(session), { ex: 2592000 })

    // Add to sorted set for listing sessions (score = unix timestamp)
    await redis.zadd('chat:sessions', { score: Date.now(), member: sessionId })

    return new Response(JSON.stringify({ ok: true }), {
      headers: { 'Content-Type': 'application/json' }
    })
  } catch (err) {
    return new Response(JSON.stringify({ error: 'Failed to save' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' }
    })
  }
}
