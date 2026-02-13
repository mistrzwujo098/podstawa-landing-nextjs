/**
 * Tracking via Cloudflare Zaraz
 *
 * Zaraz handles loading FB Pixel, Google Ads, TikTok and Conversion API.
 * We only fire custom events through zaraz.track().
 * PageView is handled automatically by Zaraz.
 */

declare global {
  interface Window {
    zaraz?: {
      track: (eventName: string, properties?: Record<string, unknown>) => void
      ecommerce: (eventName: string, properties?: Record<string, unknown>) => void
    }
  }
}

function zarazTrack(eventName: string, properties?: Record<string, unknown>): void {
  if (typeof window === 'undefined' || !window.zaraz) {
    if (process.env.NODE_ENV === 'development') {
      console.log('[Zaraz] Dev mode - event:', eventName, properties)
    }
    return
  }
  try {
    window.zaraz.track(eventName, properties)
  } catch (error) {
    console.error('[Zaraz] Tracking error:', error)
  }
}

export function pageView() {
  // PageView is handled automatically by Zaraz
}

export function viewContent(contentName: string, value?: number) {
  zarazTrack('ViewContent', { content_name: contentName, value, currency: 'PLN' })
}

export function lead(contentName?: string) {
  zarazTrack('Lead', { content_name: contentName || 'Lead' })
}

export function initiateCheckout(value: number, contentName: string) {
  zarazTrack('InitiateCheckout', { content_name: contentName, value, currency: 'PLN' })
}

export function purchase(value: number, contentName: string, orderId?: string) {
  zarazTrack('Purchase', { content_name: contentName, value, currency: 'PLN', order_id: orderId })
}

export function contact(method?: string) {
  zarazTrack('Contact', { content_name: method || 'Contact' })
}

export function startRegistration(packageName: string) {
  zarazTrack('StartRegistration', { content_name: packageName })
}

export function startTrial(trialType: string) {
  zarazTrack('StartTrial', { content_name: trialType })
}

export function custom(eventName: string, data?: Record<string, any>) {
  zarazTrack(eventName, data)
}

export function initTracking() {
  // No-op: Zaraz auto-initializes on edge
}

export const tracking = {
  pageView,
  viewContent,
  lead,
  initiateCheckout,
  purchase,
  contact,
  startRegistration,
  startTrial,
  custom,
}
