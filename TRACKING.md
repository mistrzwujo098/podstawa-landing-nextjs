# 📊 Tracking Implementation - Kurs Landing

## ✅ Status: Implementacja zakończona

Tracking został w pełni zaimplementowany z integracją Facebook Pixel, Google Ads i TikTok Pixel.

---

## 🔧 Konfiguracja

### Zmienne środowiskowe

Plik `.env.local`:
```bash
# Project Configuration
NEXT_PUBLIC_PROJECT_ID=lamiglowki

# Tracking Worker URL
NEXT_PUBLIC_TRACKING_WORKER_URL=https://tracking-api.kacperczaczyk.workers.dev

# Facebook Pixel (Public ID only)
NEXT_PUBLIC_FACEBOOK_PIXEL_ID=328860071729858

# Google Ads Conversion ID
NEXT_PUBLIC_GOOGLE_ADS_ID=AW-405660852

# TikTok Pixel (Public ID only)
NEXT_PUBLIC_TIKTOK_PIXEL_ID=CQ762UBC77U6L0AM30HG

# Optional: Enable tracking w development (domyślnie wyłączone)
# NEXT_PUBLIC_ENABLE_DEV_TRACKING=true
```

### ⚠️ Bezpieczeństwo

**Access Tokeny są bezpiecznie przechowywane w Cloudflare Workers KV** - NIE są widoczne w kodzie frontendu!

---

## 📁 Struktura plików

```
kurs-landing-nextjs/
├── lib/
│   ├── tracking-config.ts      # Konfiguracja (używa env vars)
│   └── tracking.ts              # Główna logika trackingu
├── components/
│   └── tracking/
│       └── TrackingScripts.tsx  # Pixel scripts (FB, Google, TikTok)
├── app/
│   └── layout.tsx               # Import TrackingScripts
├── .env.local                   # Zmienne środowiskowe (gitignored)
└── .env.example                 # Przykład konfiguracji
```

---

## 🎯 Zaimplementowane eventy

### 1. **PageView** (Automatyczny)
- Wysyłany przy każdym ładowaniu strony
- Trackowany przez wszystkie platformy (FB, Google, TikTok)

### 2. **ViewContent**
- Hero CTA click ("Zobacz pakiety i ceny")
- Lokalizacja: `components/HeroSimple.tsx`

### 3. **InitiateCheckout**
- Kliknięcie przycisku zakupu pakietu
- Wartość: cena pakietu
- Nazwa: "Pakiet Standard/Premium/Expert"
- Lokalizacja: `components/PricingSimple.tsx`

---

## 💻 Jak używać trackingu

### Podstawowe użycie:

```typescript
import { tracking } from '@/lib/tracking'

// Wyświetlenie contentu
tracking.viewContent('Nazwa contentu', 299)

// Rozpoczęcie checkout
tracking.initiateCheckout(1499, 'Pakiet Premium')

// Zakup
tracking.purchase(1499, 'Pakiet Premium', 'order_123')

// Lead (newsletter signup)
tracking.lead('Newsletter Signup')

// Custom event
tracking.custom('Special Event', {
  value: 100,
  content_name: 'Custom Action'
})
```

### Dostępne funkcje:

```typescript
tracking.pageView(pageName?)          // Widok strony
tracking.viewContent(name, value?)    // Widok contentu
tracking.lead(contentName?)           // Lead generation
tracking.initiateCheckout(value, name) // Rozpoczęcie zakupu
tracking.purchase(value, name, orderId?) // Zakup
tracking.contact(method?)             // Kontakt
tracking.startRegistration(packageName) // Rejestracja
tracking.startTrial(trialType)        // Rozpoczęcie trial
tracking.custom(eventName, data?)     // Custom event
```

---

## 📊 Gdzie dodać tracking

### Przykład 1: Przycisk w FAQ

```typescript
'use client'
import { tracking } from '@/lib/tracking'

export default function FAQ() {
  const handleFAQClick = (question: string) => {
    tracking.viewContent(`FAQ: ${question}`)
  }

  return (
    <button onClick={() => handleFAQClick('Ile kosztuje kurs?')}>
      Pytanie
    </button>
  )
}
```

### Przykład 2: Newsletter signup

```typescript
'use client'
import { tracking } from '@/lib/tracking'

export default function Newsletter() {
  const handleSubmit = async (email: string) => {
    // Track lead
    tracking.lead('Newsletter Subscription')

    // Wyślij email
    await submitNewsletter(email)
  }

  return <form onSubmit={handleSubmit}>...</form>
}
```

### Przykład 3: Scroll tracking

```typescript
'use client'
import { useEffect } from 'react'
import { tracking } from '@/lib/tracking'

export default function Component() {
  useEffect(() => {
    const handleScroll = () => {
      const scrollPercent = (window.scrollY / document.body.scrollHeight) * 100

      if (scrollPercent > 75) {
        tracking.viewContent('75% Page Scroll')
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return <div>...</div>
}
```

---

## 🧪 Testowanie

### Development mode

Domyślnie tracking jest **wyłączony w development**. Aby włączyć:

```bash
# .env.local
NEXT_PUBLIC_ENABLE_DEV_TRACKING=true
```

### Sprawdzanie w konsoli przeglądarki

Gdy tracking jest aktywny, zobaczysz logi:
```
[Tracking] Initialized
[Tracking] Event sent: PageView
[Tracking] Event sent: InitiateCheckout
```

### Testowanie pixel scripts

1. Otwórz DevTools → Network tab
2. Filtruj: `facebook.com`, `googletagmanager.com`, `analytics.tiktok.com`
3. Kliknij CTA button
4. Sprawdź czy requesty są wysyłane

### Facebook Pixel Helper

Zainstaluj rozszerzenie: [Facebook Pixel Helper](https://chrome.google.com/webstore/detail/facebook-pixel-helper/fdgfkebogiimcoedlicjlajpkdmockpc)

---

## 🔍 Debugging

### Sprawdź czy zmienne środowiskowe są załadowane:

```typescript
// W komponencie
console.log('Project ID:', process.env.NEXT_PUBLIC_PROJECT_ID)
console.log('Facebook Pixel:', process.env.NEXT_PUBLIC_FACEBOOK_PIXEL_ID)
```

### Sprawdź czy tracking jest włączony:

```typescript
import { isTrackingEnabled } from '@/lib/tracking-config'

console.log('Tracking enabled:', isTrackingEnabled())
```

### Sprawdź czy pixel scripts są załadowane:

```javascript
// W konsoli przeglądarki
console.log('Facebook:', typeof fbq)      // should be 'function'
console.log('Google:', typeof gtag)       // should be 'function'
console.log('TikTok:', typeof ttq)        // should be 'function'
```

---

## 📈 Monitoring

### Facebook Events Manager
https://business.facebook.com/events_manager2/list/pixel/YOUR_PIXEL_ID/overview

### Google Ads Conversions
https://ads.google.com/aw/conversions

### TikTok Events Manager
https://ads.tiktok.com/i18n/events_manager

---

## 🚀 Production Deployment

Na Cloudflare Pages dodaj te same zmienne środowiskowe w Settings → Environment Variables:

```
NEXT_PUBLIC_PROJECT_ID=lamiglowki
NEXT_PUBLIC_TRACKING_WORKER_URL=https://tracking-api.kacperczaczyk.workers.dev
NEXT_PUBLIC_FACEBOOK_PIXEL_ID=328860071729858
NEXT_PUBLIC_GOOGLE_ADS_ID=AW-405660852
NEXT_PUBLIC_TIKTOK_PIXEL_ID=CQ762UBC77U6L0AM30HG
```

---

## 📝 Eventy do dodania w przyszłości

Sugerowane miejsca gdzie warto dodać tracking:

- [ ] **CTAButton component** - floating CTA button clicks
- [ ] **FAQ expand** - które pytania są najczęściej otwierane
- [ ] **CourseContent expand** - które moduły są przeglądane
- [ ] **Testimonials carousel** - interakcje z opiniami
- [ ] **Scroll depth** - 25%, 50%, 75%, 100%
- [ ] **Time on page** - po 30s, 60s, 120s
- [ ] **Exit intent** - gdy użytkownik chce opuścić stronę
- [ ] **Video play** - jeśli dodasz video
- [ ] **Phone number click** - tracking kontaktu
- [ ] **Email click** - tracking emaila

---

## ✅ Checklist wdrożenia

- [x] Utworzone pliki tracking
- [x] Dodany TrackingScripts do layout
- [x] Skonfigurowane zmienne środowiskowe
- [x] Dodany tracking do Hero CTA
- [x] Dodany tracking do Pricing buttons
- [x] Build przeszedł bez błędów
- [ ] Przetestowane na localhost
- [ ] Zweryfikowane w Facebook Pixel Helper
- [ ] Sprawdzone w Network tab
- [ ] Dodane zmienne na Cloudflare Pages
- [ ] Przetestowane na production

---

## 🔗 Linki

- **Tracking Worker**: https://tracking-api.kacperczaczyk.workers.dev
- **Project ID**: `lamiglowki`
- **Facebook Pixel**: 328860071729858
- **Google Ads**: AW-405660852
- **TikTok Pixel**: CQ762UBC77U6L0AM30HG

---

**Data implementacji**: 2025-11-05
**Status**: ✅ Gotowe do testowania
