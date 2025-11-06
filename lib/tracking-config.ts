/**
 * Tracking Configuration
 *
 * Centralizes all tracking-related configuration using environment variables.
 * Only public IDs are stored here - access tokens are secured in Cloudflare Workers.
 */

export const trackingConfig = {
  // Project identifier
  projectId: process.env.NEXT_PUBLIC_PROJECT_ID || 'lamiglowki',

  // Cloudflare Worker URL for server-side tracking
  workerUrl: process.env.NEXT_PUBLIC_TRACKING_WORKER_URL || '',

  // Facebook Pixel (public ID only)
  facebook: {
    pixelId: process.env.NEXT_PUBLIC_FACEBOOK_PIXEL_ID || '',
  },

  // Google Ads
  google: {
    conversionId: process.env.NEXT_PUBLIC_GOOGLE_ADS_ID || '',
  },

  // TikTok Pixel (public ID only)
  tiktok: {
    pixelId: process.env.NEXT_PUBLIC_TIKTOK_PIXEL_ID || '',
  },
}

/**
 * Check if tracking is enabled
 * Disabled in development mode unless explicitly enabled
 */
export function isTrackingEnabled(): boolean {
  const isDev = process.env.NODE_ENV === 'development'
  const forceEnabled = process.env.NEXT_PUBLIC_ENABLE_DEV_TRACKING === 'true'

  if (isDev && !forceEnabled) {
    return false
  }

  return !!(
    trackingConfig.facebook.pixelId ||
    trackingConfig.google.conversionId ||
    trackingConfig.tiktok.pixelId
  )
}
