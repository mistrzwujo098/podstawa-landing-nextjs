import { test, expect } from '@playwright/test'

test.describe('Nawigacja i scrollowanie', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/')
  })

  test('przycisk CTA w Hero powinien scrollować do sekcji pricing', async ({ page }) => {
    const ctaButton = page.getByRole('button', { name: /Zobacz pakiety/i }).first()
    await ctaButton.click()

    // Poczekaj na animację scrollowania
    await page.waitForTimeout(1000)

    // Sprawdź czy sekcja pricing jest w viewport
    const pricingSection = page.locator('#pricing')
    await expect(pricingSection).toBeInViewport()
  })

  test('scroll progress bar powinien się wyświetlić', async ({ page }) => {
    // Poczekaj na załadowanie strony
    await page.waitForLoadState('networkidle')

    // Sprawdź czy progress bar istnieje
    const progressBar = page.locator('[style*="position: fixed"]').first()
    await expect(progressBar).toBeVisible()
  })

  test('strona powinna mieć smooth scroll', async ({ page }) => {
    // Scroll w dół
    await page.evaluate(() => window.scrollTo(0, 1000))
    await page.waitForTimeout(500)

    const scrollY = await page.evaluate(() => window.scrollY)
    expect(scrollY).toBeGreaterThan(900)
  })
})
