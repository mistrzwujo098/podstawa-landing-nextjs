'use client'

import { useEffect } from 'react'
import dynamic from 'next/dynamic'
import HeroSimple from '@/components/HeroSimple'
import CountdownBanner from '@/components/CountdownBanner'
import RegistrationDeadline from '@/components/RegistrationDeadline'
import ParentTestimonials from '@/components/ParentTestimonials'
import Problems from '@/components/Problems'
import MechanismExplanation from '@/components/MechanismExplanation'
import Solutions from '@/components/Solutions'
import CourseContent from '@/components/CourseContent'
import PricingSimple from '@/components/PricingSimple'
import FAQ from '@/components/FAQ'
import CTAButton from '@/components/CTAButton'
import ScrollProgress from '@/components/ScrollProgress'
import WhatYouDiscover from '@/components/WhatYouDiscover'
import WhyUs from '@/components/WhyUs'
import PossibilityInWorld from '@/components/PossibilityInWorld'

// Lazy load components below fold for better LCP
const RealTestimonials = dynamic(() => import('@/components/RealTestimonials'))
const BlackFridayOffer = dynamic(() => import('@/components/BlackFridayOffer'))
const RiskReversal = dynamic(() => import('@/components/RiskReversal'))
const ComparisonTable = dynamic(() => import('@/components/ComparisonTable'))
const ObjectionHandling = dynamic(() => import('@/components/ObjectionHandling'))
const Footer = dynamic(() => import('@/components/Footer'))

export default function Home() {
  // Track user engagement
  useEffect(() => {
    // Track time on page
    const startTime = Date.now()

    const handleUnload = () => {
      const timeSpent = Date.now() - startTime
      // Send to analytics
      console.log(`User spent ${Math.floor(timeSpent / 1000)}s on page`)
    }

    window.addEventListener('beforeunload', handleUnload)

    return () => {
      window.removeEventListener('beforeunload', handleUnload)
    }
  }, [])

  return (
    <div className="App">
      {/* Black Friday Countdown Banner - Above the Fold */}
      <CountdownBanner />

      {/* Scroll Progress & Navigation */}
      <ScrollProgress />

      {/* Registration Deadline Notice */}
      <RegistrationDeadline />

      {/* Hero Section */}
      <HeroSimple />

      {/* Possibility in World - Belief Shift Step 1 */}
      <PossibilityInWorld />

      {/* Social Proof */}
      <ParentTestimonials />

      {/* Problem & Solution */}
      <Problems />
      <Solutions />

      {/* How It Works - LAPS Method - DISABLED (duplicates MechanismExplanation) */}
      {/* <HowItWorks /> */}

      {/* What You Discover */}
      <WhatYouDiscover />

      {/* Mechanism Explanation */}
      <MechanismExplanation />

      {/* Why Choose Us */}
      <WhyUs />

      {/* Course Content */}
      <CourseContent />

      {/* Real Testimonials - 11 authentic reviews */}
      <RealTestimonials />

      {/* Black Friday Offer - Value Stacking + Countdown */}
      <BlackFridayOffer />

      {/* Risk Reversal - 30 Day Guarantee */}
      <RiskReversal />

      {/* Pricing */}
      <PricingSimple />

      {/* Comparison Table */}
      <ComparisonTable />

      {/* Objections & FAQ */}
      <ObjectionHandling />
      <FAQ />

      {/* Footer & Persistent CTA */}
      <Footer />
      <CTAButton />
    </div>
  )
}
