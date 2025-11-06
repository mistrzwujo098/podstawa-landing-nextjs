# Kurs Landing - Next.js

Strona sprzedażowa kursu dla ósmoklasistów przepisana z React do Next.js.

## 🚀 Technologie

- **Next.js 16** - Framework React z renderowaniem po stronie serwera
- **TypeScript** - Statyczne typowanie
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Biblioteka do animacji
- **Lucide React** - Ikony
- **Canvas Confetti** - Efekty confetti
- **Recharts** - Wykresy i diagramy

## 📦 Instalacja

Projekt jest już skonfigurowany i gotowy do użycia. Wszystkie zależności zostały zainstalowane.

## 🛠️ Dostępne komendy

```bash
# Uruchomienie serwera deweloperskiego
npm run dev

# Build produkcyjny
npm run build

# Uruchomienie produkcyjnej wersji
npm run start

# Linting
npm run lint
```

## 🏗️ Struktura projektu

```
kurs-landing-nextjs/
├── app/
│   ├── layout.tsx          # Główny layout aplikacji
│   ├── page.tsx            # Strona główna
│   └── globals.css         # Globalne style CSS
├── components/             # Wszystkie komponenty React (29 komponentów)
│   ├── HeroSimple.tsx
│   ├── PricingSimple.tsx
│   ├── FAQ.tsx
│   └── ... (pozostałe komponenty)
├── tailwind.config.ts      # Konfiguracja Tailwind CSS
├── tsconfig.json           # Konfiguracja TypeScript
├── next.config.mjs         # Konfiguracja Next.js
└── package.json

```

## 🎨 Customowe kolory (Tailwind)

Projekt używa customowych kolorów Pauliny:

- `paulina-primary`: #571A47
- `paulina-accent`: #EC9A4F
- `paulina-blue`: #06AEEF
- `paulina-bg-purple`: #F7EEF4
- `paulina-bg-yellow`: #FEF1D3
- `paulina-pink`: #F5E6E8
- `paulina-orange`: #FF9B50
- `paulina-purple`: #6B2C6B
- `paulina-teal`: #20B2AA

## 📝 Komponenty

Wszystkie 29 komponentów zostały przeniesione z oryginalnej aplikacji React:

1. HeroSimple
2. RegistrationDeadline
3. ParentTestimonials
4. Problems
5. Solutions
6. WhatYouDiscover
7. MechanismExplanation
8. WhyUs
9. CourseContent
10. Testimonials
11. PricingSimple
12. ComparisonTable
13. ObjectionHandling
14. FAQ
15. Footer
16. CTAButton
17. ScrollProgress
... i pozostałe

## 🔧 Różnice względem wersji React

- **'use client' directive**: Wszystkie komponenty wykorzystujące hooks lub Framer Motion oznaczone jako client components
- **Next.js Image**: Gotowe do użycia z Next.js Image dla lepszej optymalizacji obrazów
- **App Router**: Wykorzystuje najnowszy Next.js App Router zamiast Pages Router
- **Viewport metadata**: ThemeColor przeniesiony do viewport export zgodnie z Next.js 14+

## 🚀 Uruchomienie

1. Przejdź do katalogu projektu:
```bash
cd kurs-landing-nextjs
```

2. Uruchom serwer deweloperski:
```bash
npm run dev
```

3. Otwórz przeglądarkę pod adresem: http://localhost:3000

## 📱 Responsywność

Strona jest w pełni responsywna i dostosowana do urządzeń:
- Desktop
- Tablet
- Mobile

## 🎯 Produkcja

Aby zbudować wersję produkcyjną:

```bash
npm run build
npm run start
```

Build produkcyjny będzie zoptymalizowany i gotowy do wdrożenia.

## 🔗 Deploy

Projekt można wdrożyć na:
- **Vercel** (zalecane dla Next.js)
- **Netlify**
- **Cloudflare Pages**
- Dowolny hosting wspierający Node.js

## ✨ Funkcje

- ✅ Animacje Framer Motion
- ✅ Smooth scroll
- ✅ Exit intent detection
- ✅ Progress bar przy scrollowaniu
- ✅ Countdown timer
- ✅ Responsywny design
- ✅ SEO-friendly metadata
- ✅ TypeScript
- ✅ Tailwind CSS z customowymi kolorami
- ✅ MailerLite integration

## 📄 Licencja

Projekt prywatny - Paulina od Matematyki
