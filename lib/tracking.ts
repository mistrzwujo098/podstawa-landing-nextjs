/**
 * Tracking System
 *
 * Handles event tracking across multiple platforms:
 * - Facebook Pixel (client-side)
 * - Google Ads (client-side)
 * - TikTok Pixel (client-side)
 * - Server-side tracking via Cloudflare Workers
 */

import { trackingConfig, isTrackingEnabled } from './tracking-config'

// Event types based on standard e-commerce events
export type TrackingEventType =
  | 'PageView'
  | 'ViewContent'
  | 'Lead'
  | 'InitiateCheckout'
  | 'Purchase'
  | 'Contact'
  | 'StartRegistration'
  | 'StartTrial'
  | 'CustomEvent'

export interface TrackingEventData {
  event_name: TrackingEventType
  event_id: string
  event_time: number
  event_source_url: string
  user_agent: string
  value?: number
  currency?: string
  content_name?: string
  content_category?: string
  [key: string]: any
}

/**
 * Generate unique event ID
 */
function generateEventId(): string {
  return `${Date.now()}_${Math.random().toString(36).substr(2, 9)}`
}

/**
 * Get current URL safely (works on server and client)
 */
function getCurrentUrl(): string {
  if (typeof window !== 'undefined') {
    return window.location.href
  }
  return ''
}

/**
 * Get user agent safely (works on server and client)
 */
function getUserAgent(): string {
  if (typeof navigator !== 'undefined') {
    return navigator.userAgent
  }
  return ''
}

/**
 * Main tracking function - sends events to all platforms
 */
export async function trackEvent(
  eventType: TrackingEventType,
  eventData: Partial<TrackingEventData> = {}
): Promise<void> {
  if (!isTrackingEnabled()) {
    if (process.env.NODE_ENV === 'development') {
      console.log('[Tracking] Dev mode - event:', eventType, eventData)
    }
    return
  }

  const fullEventData: TrackingEventData = {
    event_name: eventType,
    event_id: generateEventId(),
    event_time: Math.floor(Date.now() / 1000),
    event_source_url: getCurrentUrl(),
    user_agent: getUserAgent(),
    currency: 'PLN',
    ...eventData,
  }

  // Client-side pixel tracking
  trackClientSide(eventType, fullEventData)

  // Server-side tracking via Cloudflare Workers
  if (trackingConfig.workerUrl) {
    try {
      await fetch(`${trackingConfig.workerUrl}/event`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          projectId: trackingConfig.projectId,
          event: fullEventData,
        }),
      })
    } catch (error) {
      console.error('[Tracking] Server-side error:', error)
    }
  }

  console.log('[Tracking] Event sent:', eventType)
}

/**
 * Client-side pixel tracking
 */
function trackClientSide(eventType: TrackingEventType, data: TrackingEventData) {
  // Facebook Pixel
  if (typeof window !== 'undefined' && (window as any).fbq) {
    ;(window as any).fbq('track', eventType, {
      value: data.value,
      currency: data.currency,
      content_name: data.content_name,
      content_category: data.content_category,
    })
  }

  // Google Ads
  if (typeof window !== 'undefined' && (window as any).gtag) {
    ;(window as any).gtag('event', eventType, {
      value: data.value,
      currency: data.currency,
      event_category: data.content_category,
      event_label: data.content_name,
    })
  }

  // TikTok Pixel
  if (typeof window !== 'undefined' && (window as any).ttq) {
    ;(window as any).ttq.track(eventType, {
      value: data.value,
      currency: data.currency,
      content_name: data.content_name,
    })
  }
}

// ============================================
// Helper Functions for Common Events
// ============================================

/**
 * Track page view
 */
export function pageView(pageName?: string) {
  trackEvent('PageView', {
    content_name: pageName || getCurrentUrl(),
  })
}

/**
 * Track content view (e.g., button clicks, section views)
 */
export function viewContent(contentName: string, value?: number) {
  trackEvent('ViewContent', {
    content_name: contentName,
    value,
  })
}

/**
 * Track lead generation (e.g., newsletter signup)
 */
export function lead(contentName?: string) {
  trackEvent('Lead', {
    content_name: contentName || 'Lead',
  })
}

/**
 * Track checkout initiation
 */
export function initiateCheckout(value: number, contentName: string) {
  trackEvent('InitiateCheckout', {
    value,
    content_name: contentName,
  })
}

/**
 * Track purchase
 */
export function purchase(value: number, contentName: string, orderId?: string) {
  trackEvent('Purchase', {
    value,
    content_name: contentName,
    order_id: orderId,
  })
}

/**
 * Track contact event
 */
export function contact(method?: string) {
  trackEvent('Contact', {
    content_name: method || 'Contact',
  })
}

/**
 * Track registration start
 */
export function startRegistration(packageName: string) {
  trackEvent('StartRegistration', {
    content_name: packageName,
  })
}

/**
 * Track trial start
 */
export function startTrial(trialType: string) {
  trackEvent('StartTrial', {
    content_name: trialType,
  })
}

/**
 * Track custom event
 */
export function custom(eventName: string, data?: Record<string, any>) {
  trackEvent('CustomEvent', {
    content_name: eventName,
    ...data,
  })
}

/**
 * Initialize tracking (called on app load)
 */
export function initTracking() {
  if (!isTrackingEnabled()) {
    console.log('[Tracking] Disabled in development mode')
    return
  }

  console.log('[Tracking] Initialized')

  // Track initial page view
  if (typeof window !== 'undefined') {
    pageView()
  }
}

// Export tracking object with all methods
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
