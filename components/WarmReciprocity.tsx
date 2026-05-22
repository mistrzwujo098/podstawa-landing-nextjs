'use client'

import { useWarmDetect } from '@/lib/useWarmDetect'

type Variant = 'continuity' | 'exclusive' | 'comeback'

interface WarmReciprocityProps {
  variant: Variant
  ctaHref?: string
  ctaLabel?: string
}

const COPY: Record<Variant, { headline: string; body: React.ReactNode; closer: string }> = {
  continuity: {
    headline: 'Edycja 2026/27 rusza dla Was wcześniej.',
    body: (
      <>
        <p className="mb-4">
          Bo byliście w programie. Bo metoda, którą znacie, działała. Bo Wasze dziecko poszło dalej z wynikiem, z którego jesteście dumni.
        </p>
        <p>
          Dla Was: pierwszeństwo zapisów zanim pójdzie do wszystkich. Wcześniejszy start w wakacje. Kilka rzeczy, których nowi kursanci nie dostaną od razu.
        </p>
      </>
    ),
    closer: 'To nie jest program lojalnościowy. To po prostu pamięć.',
  },
  exclusive: {
    headline: 'Edycja 2026/27 ruszyła. Dla Was wcześniej.',
    body: (
      <>
        <p className="mb-4">
          Kursanci 2025/26 mają dostęp przed otwarciem dla wszystkich. Cena wstępna do końca wakacji. Start w wakacje (nowi zaczynają we wrześniu).
        </p>
        <p>
          Platforma pamięta gdzie poprzednia edycja się skończyła. Nie zaczynacie od zera.
        </p>
      </>
    ),
    closer: '',
  },
  comeback: {
    headline: 'Wiem, że maj się właśnie skończył.',
    body: (
      <>
        <p className="mb-4">
          Nie piszę o wstydzie. Nie piszę o tym co poszło nie tak. Piszę o tym co jest teraz.
        </p>
        <p className="mb-4">
          Sierpień to drugi termin matury. Jest. Naprawdę. I daje Ci realnie 90 dni jeśli zaczniesz teraz.
        </p>
        <p>
          Nie mówię &quot;da się&quot;, bo nie wiem jaka jest Twoja sytuacja. Mówię: z planem jest inaczej niż bez planu. I ten plan mam.
        </p>
      </>
    ),
    closer: '',
  },
}

export default function WarmReciprocity({ variant, ctaHref = '#pricing', ctaLabel }: WarmReciprocityProps) {
  const isWarm = useWarmDetect()
  if (!isWarm) return null

  const { headline, body, closer } = COPY[variant]
  const defaultLabel = variant === 'comeback' ? 'Chcę plan na sierpień' : 'Przejdź do pakietów - wcześniejszy dostęp'
  const label = ctaLabel ?? defaultLabel

  return (
    <section className="py-12 md:py-16 px-4" style={{ background: '#fbf9f7' }}>
      <div className="max-w-3xl mx-auto">
        <div className="border-l-4 border-paulina-accent pl-6 md:pl-8">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-paulina-accent mb-4">
            Dla Was, byłych kursantów
          </p>
          <h2 className="text-2xl md:text-3xl font-bold text-paulina-primary mb-6 leading-tight">
            {headline}
          </h2>
          <div className="text-base md:text-lg text-gray-700 leading-relaxed mb-6">
            {body}
          </div>
          {closer && (
            <p className="text-base md:text-lg italic text-paulina-primary mb-6">
              {closer}
            </p>
          )}
          <a
            href={ctaHref}
            className="inline-flex items-center gap-2 px-6 py-3 bg-paulina-primary text-white font-semibold rounded-full hover:bg-paulina-accent transition-colors"
          >
            {label}
          </a>
        </div>
      </div>
    </section>
  )
}
