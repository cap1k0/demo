import { NextResponse } from 'next/server'

const CMS_URL = process.env.CMS_URL || 'https://cms.bruca.space'

export async function POST(req: Request) {
  const body = await req.json().catch(() => null)
  if (body?.website) return NextResponse.json({ ok: true }) // honeypot hit: pretend success

  const email = String(body?.email || '').trim().toLowerCase()
  if (email.length > 254 || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return NextResponse.json({ error: 'Enter a valid email address.' }, { status: 400 })
  }

  try {
    const res = await fetch(`${CMS_URL}/api/demo-requests`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', 'x-demo-secret': process.env.DEMO_REQUEST_SECRET || '' },
      body: JSON.stringify({ email, source: 'demo.bruca.space' }),
      cache: 'no-store',
    })
    if (!res.ok) throw new Error(`CMS ${res.status}`)
    return NextResponse.json({ ok: true })
  } catch (err) {
    console.error('[demo] failed to save request', err)
    return NextResponse.json({ error: 'Something went wrong. Try again in a minute.' }, { status: 502 })
  }
}
