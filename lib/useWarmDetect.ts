'use client'

import { useEffect, useState } from 'react'

const STORAGE_KEY = 'warm_visitor'
const EXPIRY_KEY = 'warm_visitor_expiry'
const TTL_MS = 30 * 24 * 60 * 60 * 1000

export function useWarmDetect(): boolean {
  const [isWarm, setIsWarm] = useState(false)

  useEffect(() => {
    if (typeof window === 'undefined') return

    const params = new URLSearchParams(window.location.search)
    const fromUrl = params.get('warm') === '1' || params.get('utm_source') === 'email'

    if (fromUrl) {
      const expiry = Date.now() + TTL_MS
      try {
        localStorage.setItem(STORAGE_KEY, 'true')
        localStorage.setItem(EXPIRY_KEY, String(expiry))
      } catch {}
      setIsWarm(true)
      return
    }

    try {
      const stored = localStorage.getItem(STORAGE_KEY)
      const expiryStr = localStorage.getItem(EXPIRY_KEY)
      if (stored === 'true' && expiryStr) {
        const expiry = parseInt(expiryStr, 10)
        if (Date.now() < expiry) {
          setIsWarm(true)
        } else {
          localStorage.removeItem(STORAGE_KEY)
          localStorage.removeItem(EXPIRY_KEY)
        }
      }
    } catch {}
  }, [])

  return isWarm
}
