import type { Metadata, Viewport } from 'next'
import { Inter, Varela_Round, Montserrat } from 'next/font/google'
import './globals.css'
import TrackingScripts from '@/components/tracking/TrackingScripts'
// Tracking: FB Pixel, Google Ads, TikTok managed by Cloudflare Zaraz (auto-injected on edge)

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
  metadataBase: new URL('https://paulinaodmatematyki.com'),
  alternates: { canonical: '/matura' },
  title: 'Kurs Matura Podstawowa 2026 – zdaj na 80%+ bez korepetycji',
  description:
    'Kurs maturalny z matematyki od Pauliny od Matematyki. 999 zł – wideo lekcje krok po kroku, arkusze próbne, system LAPS. 24 000+ uczniów, 99% zdawalność.',
  icons: {
    icon: '/matura/favicon.ico',
    apple: '/matura/icon.png',
  },
}

export const viewport: Viewport = {
  themeColor: '#571A47',
}

const courseJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Course',
  name: 'Matura Podstawowa z Matematyki 2026 – Paulina od Matematyki',
  description:
    'Kompleksowy kurs przygotowujący do matury z matematyki na poziomie podstawowym. System LAPS, wideo lekcje, arkusze próbne. Zdaj na ponad 80% bez stresu.',
  url: 'https://paulinaodmatematyki.com/matura',
  provider: {
    '@type': 'EducationalOrganization',
    name: 'Paulina od Matematyki',
    sameAs: 'https://paulinaodmatematyki.com',
  },
  instructor: {
    '@type': 'Person',
    name: 'Paulina Miś',
    jobTitle: 'Twórca kursów matematycznych',
    award: [
      'Orły Edukacji 2019',
      'Orły Edukacji 2020',
      'Orły Edukacji 2021',
      'Orły Edukacji 2022',
      'Orły Edukacji 2023',
      'Orły Edukacji 2024',
    ],
  },
  educationalLevel: 'Szkoła ponadpodstawowa',
  about: { '@type': 'Thing', name: 'Matematyka – matura podstawowa' },
  hasCourseInstance: {
    '@type': 'CourseInstance',
    courseMode: 'online',
    courseWorkload: 'PT40H',
  },
  offers: {
    '@type': 'Offer',
    price: '999',
    priceCurrency: 'PLN',
    availability: 'https://schema.org/InStock',
  },
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '4.9',
    reviewCount: '24000',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pl" className={`${varelaRound.variable} ${inter.variable} ${montserrat.variable}`}>
      <head>
        <link rel="preconnect" href="https://paulinaodmatematyki.com" />
        <link rel="preconnect" href="https://assets.mailerlite.com" />

        {/* Course structured data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(courseJsonLd) }}
        />
      </head>
      <body>
        <TrackingScripts />
        {children}
      </body>
    </html>
  )
}
