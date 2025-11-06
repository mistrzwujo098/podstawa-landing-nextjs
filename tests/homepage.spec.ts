import { test, expect } from '@playwright/test'

test.describe('Homepage - Podstawowe elementy', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/')
  })

  test('powinna załadować stronę główną', async ({ page }) => {
    await expect(page).toHaveTitle(/Program Ósmoklasisty 2025/)
  })

  test('powinna wyświetlić Hero section z głównym nagłówkiem', async ({ page }) => {
    const heroHeading = page.locator('h1').first()
    await expect(heroHeading).toBeVisible()
    await expect(heroHeading).toContainText('20 000 uczniów')
  })

  test('powinna wyświetlić przycisk CTA w Hero', async ({ page }) => {
    const ctaButton = page.getByRole('button', { name: /Zobacz pakiety/i })
    await expect(ctaButton).toBeVisible()
  })

  test('powinna wyświetlić social proof (gwiazdki, liczby)', async ({ page }) => {
    // Sprawdź czy jest tekst "20 000+ uczniów"
    await expect(page.getByText(/20 000\+ uczniów/i)).toBeVisible()

    // Sprawdź czy jest ocena 4.9/5
    await expect(page.getByText(/4\.9\/5/).first()).toBeVisible()

    // Sprawdź gwarancję
    await expect(page.getByText(/30 dni gwarancji/i)).toBeVisible()
  })

  test('powinna pokazać countdown do egzaminu', async ({ page }) => {
    const countdown = page.getByText(/Do egzaminu zostało/i)
    await expect(countdown).toBeVisible()
  })
})
