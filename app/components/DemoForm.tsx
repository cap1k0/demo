'use client'
import { useState } from 'react'

export default function DemoForm() {
  const [state, setState] = useState<'idle' | 'loading' | 'done' | 'error'>('idle')
  const [message, setMessage] = useState('')

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const form = new FormData(e.currentTarget)
    setState('loading')
    try {
      const res = await fetch('/api/request-demo', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: form.get('email'), website: form.get('website') }),
      })
      const data = await res.json().catch(() => ({}))
      if (!res.ok) throw new Error(data.error || 'Something went wrong. Try again in a minute.')
      setState('done')
    } catch (err) {
      setMessage(err instanceof Error ? err.message : 'Something went wrong.')
      setState('error')
    }
  }

  if (state === 'done') {
    return (
      <p role="status" className="rounded-md border border-blue-200 bg-blue-50 px-4 py-3 text-blue-900">
        Request received. We will email you to schedule your demo.
      </p>
    )
  }

  return (
    <form onSubmit={onSubmit} className="flex flex-col gap-3 sm:flex-row" noValidate>
      <label htmlFor="email" className="sr-only">Work email</label>
      <input
        id="email" name="email" type="email" required autoComplete="email" placeholder="you@company.com"
        className="w-full rounded-md border border-neutral-300 px-4 py-2.5 outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-600/30"
      />
      {/* honeypot: hidden from people, filled by bots */}
      <input name="website" tabIndex={-1} autoComplete="off" aria-hidden="true" className="absolute left-[-9999px]" />
      <button
        type="submit" disabled={state === 'loading'}
        className="whitespace-nowrap rounded-md bg-blue-600 px-5 py-2.5 font-medium text-white hover:bg-blue-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 disabled:opacity-60"
      >
        {state === 'loading' ? 'Sending…' : 'Request demo'}
      </button>
      {state === 'error' && <p role="alert" className="text-sm text-red-700 sm:basis-full">{message}</p>}
    </form>
  )
}
