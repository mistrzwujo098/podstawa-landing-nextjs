import { useState, useEffect } from 'react'

/**
 * Hook to detect if animations should be reduced
 * Returns true if:
 * 1. User has prefers-reduced-motion enabled
 * 2. Device is mobile (< 768px) for performance
 */
export function useReducedMotion() {
  const [shouldReduceMotion, setShouldReduceMotion] = useState(false)

  useEffect(() => {
    // Check prefers-reduced-motion
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)')

    // Check if mobile
    const isMobile = window.innerWidth < 768

    // Reduce motion if either condition is true
    setShouldReduceMotion(mediaQuery.matches || isMobile)

    // Listen for changes in prefers-reduced-motion
    const handleChange = () => {
      const newIsMobile = window.innerWidth < 768
      setShouldReduceMotion(mediaQuery.matches || newIsMobile)
    }

    mediaQuery.addEventListener('change', handleChange)
    window.addEventListener('resize', handleChange)

    return () => {
      mediaQuery.removeEventListener('change', handleChange)
      window.removeEventListener('resize', handleChange)
    }
  }, [])

  return shouldReduceMotion
}
