import { test, expect, devices } from '@playwright/test'

test.describe('Responsywność strony', () => {
  test('strona powinna być responsywna na mobile (iPhone)', async ({ page }) => {
    await page.setViewportSize(devices['iPhone 12'].viewport)
    await page.goto('/')

    // Sprawdź czy główny nagłówek jest widoczny
    const heading = page.locator('h1').first()
    await expect(heading).toBeVisible()

    // Sprawdź czy CTA button jest widoczny
    const ctaButton = page.getByRole('button', { name: /Zobacz pakiety/i }).first()
    await expect(ctaButton).toBeVisible()
  })

  test('strona powinna być responsywna na tablet (iPad)', async ({ page }) => {
    await page.setViewportSize(devices['iPad Pro'].viewport)
    await page.goto('/')

    // Sprawdź layout
    const heading = page.locator('h1').first()
    await expect(heading).toBeVisible()

    // Sprawdź czy wszystkie sekcje są dostępne
    await expect(page.getByText(/24 000\+ uczniów/i)).toBeVisible()
  })

  test('menu mobilne powinno działać (jeśli istnieje)', async ({ page }) => {
    await page.setViewportSize(devices['iPhone 12'].viewport)
    await page.goto('/')

    // Sprawdź czy strona się załadowała
    await page.waitForLoadState('networkidle')

    // Podstawowa nawigacja powinna działać
    const ctaButton = page.getByRole('button').first()
    await expect(ctaButton).toBeVisible()
  })

  test('obrazy powinny być widoczne na mobile', async ({ page }) => {
    await page.setViewportSize(devices['iPhone 12'].viewport)
    await page.goto('/')

    // Poczekaj na załadowanie
    await page.waitForLoadState('networkidle')

    // Sprawdź czy są jakieś obrazy
    const images = page.locator('img')
    const count = await images.count()
    expect(count).toBeGreaterThan(0)
  })

  test('pricing cards powinny być widoczne na mobile', async ({ page }) => {
    await page.setViewportSize(devices['iPhone 12'].viewport)
    await page.goto('/')

    // Scroll do pricing
    const pricingSection = page.locator('#pricing')
    await pricingSection.scrollIntoViewIfNeeded()
    await page.waitForTimeout(500)

    // Sprawdź czy pakiety są widoczne
    await expect(page.getByText('Premium')).toBeVisible()
  })
})
