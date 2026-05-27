'use client'

import { useEffect } from 'react'
import dynamic from 'next/dynamic'
import HeroSimple from '@/components/HeroSimple'
import WarmReciprocity from '@/components/WarmReciprocity'
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
import WhosItFor from '@/components/WhosItFor'

// Lazy load components below fold for better LCP
const SectionPlaceholder = () => <div className="min-h-[400px]" />;
const RealTestimonials = dynamic(() => import('@/components/RealTestimonials'), { loading: SectionPlaceholder })
const RiskReversal = dynamic(() => import('@/components/RiskReversal'), { loading: SectionPlaceholder })
const ComparisonTable = dynamic(() => import('@/components/ComparisonTable'), { loading: SectionPlaceholder })
const ObjectionHandling = dynamic(() => import('@/components/ObjectionHandling'), { loading: SectionPlaceholder })
const Footer = dynamic(() => import('@/components/Footer'), { loading: SectionPlaceholder })
const ExitPopup = dynamic(() => import('@/components/ExitPopup'))

export default function Home() {
  // Track user engagement
  useEffect(() => {
    // Track time on page
    const startTime = Date.now()

    const handleUnload = () => {
      const timeSpent = Date.now() - startTime
      // Send to analytics
      if (process.env.NODE_ENV === 'development') {
        console.log(`User spent ${Math.floor(timeSpent / 1000)}s on page`)
      }
    }

    window.addEventListener('beforeunload', handleUnload)

    return () => {
      window.removeEventListener('beforeunload', handleUnload)
    }
  }, [])

  return (
    <div className="App">
      {/* Scroll Progress & Navigation */}
      <ScrollProgress />

      {/* Hero Section */}
      <HeroSimple />

      {/* Warm-only: reciprocity dla byłych kursantów (renderowane tylko gdy ?warm=1 lub ?utm_source=email) */}
      <WarmReciprocity variant="exclusive" />

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

      {/* Risk Reversal - 30 Day Guarantee */}
      <RiskReversal />

      {/* Who Is It For - Self-Belief */}
      <WhosItFor />

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
      <ExitPopup />
    </div>
  )
}
