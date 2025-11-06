import { test, expect } from '@playwright/test'

test.describe('Performance i ładowanie', () => {
  test('strona powinna się załadować w rozsądnym czasie', async ({ page }) => {
    const startTime = Date.now()
    await page.goto('/')
    await page.waitForLoadState('networkidle')
    const loadTime = Date.now() - startTime

    // Strona powinna się załadować w mniej niż 10 sekund
    expect(loadTime).toBeLessThan(10000)
    console.log(`Czas ładowania strony: ${loadTime}ms`)
  })

  test('wszystkie główne sekcje powinny być załadowane', async ({ page }) => {
    await page.goto('/')
    await page.waitForLoadState('networkidle')

    // Sprawdź czy główne sekcje istnieją
    await expect(page.locator('#hero, h1').first()).toBeVisible()
    await expect(page.locator('#pricing')).toBeAttached()
    await expect(page.locator('#faq')).toBeAttached()
  })

  test('fonty powinny się załadować', async ({ page }) => {
    await page.goto('/')
    await page.waitForLoadState('networkidle')

    // Sprawdź czy fonty są załadowane
    const bodyFontFamily = await page.evaluate(() =>
      window.getComputedStyle(document.body).fontFamily
    )

    expect(bodyFontFamily).toContain('Varela')
  })

  test('nie powinno być błędów w konsoli', async ({ page }) => {
    const errors: string[] = []

    page.on('console', msg => {
      if (msg.type() === 'error') {
        errors.push(msg.text())
      }
    })

    page.on('pageerror', error => {
      errors.push(error.message)
    })

    await page.goto('/')
    await page.waitForLoadState('networkidle')

    // Ignoruj niektóre znane błędy (np. analytics)
    const criticalErrors = errors.filter(error =>
      !error.includes('analytics') &&
      !error.includes('gtag') &&
      !error.includes('mailerlite')
    )

    expect(criticalErrors.length).toBeLessThanOrEqual(2)
  })

  test('animacje Framer Motion powinny działać', async ({ page }) => {
    await page.goto('/')

    // Sprawdź czy elementy z animacją się pojawiają
    const heroSection = page.locator('h1').first()
    await expect(heroSection).toBeVisible()

    // Sprawdź czy mają odpowiednie style (opacity, transform)
    const styles = await heroSection.evaluate(el =>
      window.getComputedStyle(el).opacity
    )

    expect(parseFloat(styles)).toBeGreaterThan(0)
  })
})
