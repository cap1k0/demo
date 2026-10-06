import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  metadataBase: new URL('https://demo.bruca.space'),
  title: 'Request a demo | Bruca',
  description: 'See how Bruca finds and fixes biased wording in text, product copy and brand stories.',
  robots: { index: true, follow: true },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
