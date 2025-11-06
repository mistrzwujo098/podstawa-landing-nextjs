import { test, expect } from '@playwright/test'

test.describe('Komponenty strony', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/')
  })

  test('sekcja Problems powinna być widoczna', async ({ page }) => {
    const problemsSection = page.getByText(/Czy Twoje dziecko też/i)
    await expect(problemsSection).toBeVisible()

    // Sprawdź czy są listy problemów
    await expect(page.getByText(/Odkładanie nauki/i)).toBeVisible()
  })

  test('sekcja Solutions powinna być widoczna', async ({ page }) => {
    await page.evaluate(() => window.scrollTo(0, 1500))
    await page.waitForTimeout(500)

    // Sprawdź czy sekcja z rozwiązaniami jest widoczna
    const solutions = page.locator('text=/rozwiązanie|metoda|system/i').first()
    await expect(solutions).toBeVisible()
  })

  test('sekcja Course Content powinna mieć rozwijane moduły', async ({ page }) => {
    // Scroll do sekcji z contentem
    await page.evaluate(() => window.scrollTo(0, 3000))
    await page.waitForTimeout(500)

    // Znajdź pierwszy moduł i kliknij
    const moduleButton = page.getByText(/MODUŁ 1/i).first()

    if (await moduleButton.isVisible()) {
      await moduleButton.click()
      await page.waitForTimeout(300)

      // Sprawdź czy content się rozwinął
      await expect(page.getByText(/Podział i nazwy liczb/i)).toBeVisible()
    }
  })

  test('FAQ powinien mieć rozwijane pytania', async ({ page }) => {
    // Scroll do FAQ
    const faqSection = page.locator('#faq')
    await faqSection.scrollIntoViewIfNeeded()
    await page.waitForTimeout(500)

    // Znajdź pierwsze pytanie
    const firstQuestion = page.getByText(/Jak długo mam dostęp do kursu/i).first()

    if (await firstQuestion.isVisible()) {
      await firstQuestion.click()
      await page.waitForTimeout(300)

      // Sprawdź czy odpowiedź się pokazała
      await expect(page.getByText(/12 miesięcy|24 miesiące/i)).toBeVisible()
    }
  })

  test('sekcja Testimonials powinna być widoczna', async ({ page }) => {
    // Scroll w dół do testimonials
    await page.evaluate(() => window.scrollTo(0, 4000))
    await page.waitForTimeout(500)

    // Sprawdź czy jest jakaś opinia/testimonial
    const testimonial = page.locator('text=/opinia|mama|dziecko|córka|syn/i').first()
    await expect(testimonial).toBeVisible()
  })
})
