import type { Metadata, Viewport } from 'next'
import { Inter, Varela_Round, Montserrat } from 'next/font/google'
import './globals.css'
import TrackingScripts from '@/components/tracking/TrackingScripts'

// Optimized font loading with next/font/google
const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
})

const varelaRound = Varela_Round({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-varela',
})

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  display: 'swap',
  variable: '--font-montserrat',
})

export const metadata: Metadata = {
  title: 'Matura Podstawowa 2026 - Paulina od Matematyki',
  description: 'Zdaj Maturę Podstawową z Matmy na ponad 80% bez stresu i drogich korepetycji',
  icons: {
    icon: '/matura-bf/favicon.ico',
    apple: '/matura-bf/icon.png',
  },
}

export const viewport: Viewport = {
  themeColor: '#571A47',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pl" className={`${varelaRound.variable} ${inter.variable} ${montserrat.variable}`}>
      <head>
        {/* Preconnect to external domains for faster requests */}
        <link rel="preconnect" href="https://tracking-api.kacperczaczyk.workers.dev" />
        <link rel="preconnect" href="https://connect.facebook.net" />
        <link rel="preconnect" href="https://www.googletagmanager.com" />
        <link rel="preconnect" href="https://analytics.tiktok.com" />
        <link rel="preconnect" href="https://paulinaodmatematyki.com" />
        <link rel="preconnect" href="https://assets.mailerlite.com" />

        {/* Preload critical fonts */}
        <link
          rel="preload"
          href="/matura-bf/_next/static/media/d2eebaa28f8365b1-s.06c05dc1.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
        <link
          rel="preload"
          href="/matura-bf/_next/static/media/9068cf02accee9f5-s.093f0f19.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
      </head>
      <body>
        <TrackingScripts />
        {children}
      </body>
    </html>
  )
}
