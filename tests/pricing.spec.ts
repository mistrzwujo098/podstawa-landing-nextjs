import { test, expect } from '@playwright/test'

test.describe('Sekcja Pricing', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/')
    // Scroll do sekcji pricing
    const pricingSection = page.locator('#pricing')
    await pricingSection.scrollIntoViewIfNeeded()
    await page.waitForTimeout(500)
  })

  test('powinna wyświetlić wszystkie 3 pakiety', async ({ page }) => {
    await expect(page.getByText('Standard')).toBeVisible()
    await expect(page.getByText('Premium')).toBeVisible()
    await expect(page.getByText('Expert')).toBeVisible()
  })

  test('pakiet Premium powinien być oznaczony jako najpopularniejszy', async ({ page }) => {
    await expect(page.getByText(/NAJCZĘŚCIEJ WYBIERANY/i)).toBeVisible()
  })

  test('każdy pakiet powinien mieć cenę', async ({ page }) => {
    // Sprawdź czy są widoczne ceny (999, 1499, 2499)
    await expect(page.getByText(/999 zł/)).toBeVisible()
    await expect(page.getByText(/1499 zł/)).toBeVisible()
    await expect(page.getByText(/2499 zł/)).toBeVisible()
  })

  test('każdy pakiet powinien mieć przekreśloną starą cenę', async ({ page }) => {
    await expect(page.getByText(/1497 zł/)).toBeVisible()
    await expect(page.getByText(/2297 zł/)).toBeVisible()
    await expect(page.getByText(/3497 zł/)).toBeVisible()
  })

  test('powinien pokazać opcję płatności w ratach', async ({ page }) => {
    await expect(page.getByText(/rat 0%/i)).toBeVisible()
  })

  test('przycisk "Wybieram ten pakiet" powinien być klikalny', async ({ page }) => {
    const buyButton = page.getByRole('button', { name: /Wybieram ten pakiet/i }).first()
    await expect(buyButton).toBeVisible()
    await expect(buyButton).toBeEnabled()
  })

  test('powinna pokazać porównanie z korepetycjami', async ({ page }) => {
    await expect(page.getByText(/Zaoszczędź.*zł na korepetycjach/i)).toBeVisible()
  })

  test('każdy pakiet powinien mieć listę funkcji', async ({ page }) => {
    // Sprawdź czy są checkmarki z features
    await expect(page.getByText(/materiału video/i)).toBeVisible()
    await expect(page.getByText(/zadań z rozwiązaniami/i)).toBeVisible()
    await expect(page.getByText(/Gwarancja satysfakcji/i)).toBeVisible()
  })
})
