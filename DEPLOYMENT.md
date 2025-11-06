# 🚀 Instrukcja Wdrożenia

## Szybkie Wdrożenie na Vercel (Zalecane)

Vercel to najlepsza platforma dla Next.js (stworzona przez twórców Next.js).

### Krok 1: Przygotowanie

```bash
# Upewnij się, że projekt się buduje
cd kurs-landing-nextjs
npm run build
```

### Krok 2: Wdrożenie przez Vercel CLI

```bash
# Zainstaluj Vercel CLI
npm i -g vercel

# Zaloguj się
vercel login

# Wdróż projekt
vercel
```

### Krok 3: Wdrożenie przez GitHub (Automatyczne)

1. Utwórz repozytorium na GitHub
2. Push kod do GitHub:
```bash
git init
git add .
git commit -m "Initial commit - Kurs Landing Next.js"
git branch -M main
git remote add origin <your-repo-url>
git push -u origin main
```

3. Idź na [vercel.com](https://vercel.com)
4. Kliknij "Import Project"
5. Wybierz swoje repozytorium
6. Vercel automatycznie wykryje Next.js i skonfiguruje wszystko
7. Kliknij "Deploy"

### Konfiguracja Vercel (opcjonalna)

W `vercel.json`:
```json
{
  "buildCommand": "npm run build",
  "devCommand": "npm run dev",
  "installCommand": "npm install",
  "framework": "nextjs",
  "outputDirectory": ".next"
}
```

---

## Cloudflare Pages

### Deploy przez Git:

1. Push do GitHub/GitLab
2. Idź na [Cloudflare Pages](https://pages.cloudflare.com)
3. Połącz repozytorium
4. Ustaw konfigurację:
   - **Framework preset**: Next.js
   - **Build command**: `npm run build`
   - **Build output directory**: `.next`

---

## Netlify

### Deploy przez CLI:

```bash
# Zainstaluj Netlify CLI
npm i -g netlify-cli

# Zaloguj się
netlify login

# Deploy
netlify deploy --prod
```

### Konfiguracja `netlify.toml`:

```toml
[build]
  command = "npm run build"
  publish = ".next"

[[plugins]]
  package = "@netlify/plugin-nextjs"
```

---

## Tradycyjny Hosting (VPS/Server)

### Wymagania:
- Node.js 18+
- PM2 (process manager)

### Kroki:

1. **Skopiuj pliki na serwer**:
```bash
rsync -av kurs-landing-nextjs/ user@server:/var/www/kurs-landing/
```

2. **Zainstaluj zależności i zbuduj**:
```bash
ssh user@server
cd /var/www/kurs-landing
npm ci --production
npm run build
```

3. **Zainstaluj PM2**:
```bash
npm install -g pm2
```

4. **Uruchom aplikację**:
```bash
pm2 start npm --name "kurs-landing" -- start
pm2 save
pm2 startup
```

5. **Nginx jako Reverse Proxy**:

```nginx
server {
    listen 80;
    server_name twoja-domena.pl;

    location / {
        proxy_pass http://localhost:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
    }
}
```

6. **SSL z Let's Encrypt**:
```bash
sudo certbot --nginx -d twoja-domena.pl
```

---

## Docker

### `Dockerfile`:

```dockerfile
FROM node:18-alpine AS base

# Dependencies
FROM base AS deps
WORKDIR /app
COPY package*.json ./
RUN npm ci

# Build
FROM base AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .
RUN npm run build

# Production
FROM base AS runner
WORKDIR /app

ENV NODE_ENV=production

RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

COPY --from=builder /app/public ./public
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

USER nextjs

EXPOSE 3000

ENV PORT=3000
ENV HOSTNAME="0.0.0.0"

CMD ["node", "server.js"]
```

### Dodaj do `next.config.mjs`:
```javascript
output: 'standalone',
```

### Build i uruchom:
```bash
docker build -t kurs-landing .
docker run -p 3000:3000 kurs-landing
```

---

## Zmienne Środowiskowe

Jeśli używasz zmiennych środowiskowych, stwórz `.env.production`:

```bash
NEXT_PUBLIC_API_URL=https://api.example.com
MAILERLITE_API_KEY=your_key_here
```

Na Vercel/Netlify/Cloudflare dodaj je w panelu administracyjnym.

---

## Checklist przed wdrożeniem

- [ ] `npm run build` działa bez błędów
- [ ] `npm run test` przechodzi pomyślnie
- [ ] Sprawdzone na różnych przeglądarkach
- [ ] Sprawdzone na mobile
- [ ] Obrazy są zoptymalizowane
- [ ] Meta tags SEO są ustawione
- [ ] Analytics tracking jest skonfigurowane (MailerLite)
- [ ] Domena jest skonfigurowana
- [ ] SSL jest włączony
- [ ] Backup jest skonfigurowany

---

## Monitoring i Analytics

Po wdrożeniu zalecam:

1. **Vercel Analytics** - wbudowane w Vercel
2. **Google Analytics 4** - dodaj w `app/layout.tsx`
3. **Sentry** - monitorowanie błędów
4. **Uptime monitoring** - UptimeRobot, Pingdom

---

## Aktualizacje

### Przez Vercel/Netlify/Cloudflare:
Po każdym pushu do GitHub, strona automatycznie się aktualizuje.

### Ręcznie na VPS:
```bash
ssh user@server
cd /var/www/kurs-landing
git pull
npm ci
npm run build
pm2 restart kurs-landing
```

---

## Wsparcie

W razie problemów:
- Dokumentacja Next.js: https://nextjs.org/docs
- Vercel Support: https://vercel.com/support
- GitHub Issues: (link do repo)

---

**Ostatnia aktualizacja**: 2025-11-05
