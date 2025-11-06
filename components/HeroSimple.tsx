'use client'

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Star, Shield, Users, CheckCircle, ChevronRight } from 'lucide-react';
import { tracking } from '@/lib/tracking';
import { useReducedMotion } from '@/hooks/useReducedMotion';

const HeroSimple: React.FC = () => {
  const shouldReduceMotion = useReducedMotion();

  // Use conditional animation variants - ensure opacity: 1 when animations disabled
  const fadeIn = shouldReduceMotion
    ? { initial: { opacity: 1 }, animate: { opacity: 1 } }
    : { initial: { opacity: 0, y: 20 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.6 } };

  const scaleIn = shouldReduceMotion
    ? { initial: { opacity: 1 }, animate: { opacity: 1 } }
    : { initial: { opacity: 0, scale: 0.9 }, animate: { opacity: 1, scale: 1 }, transition: { duration: 0.6, delay: 0.2 } };

  const scrollToPricing = () => {
    // Track button click
    tracking.viewContent('Hero CTA - Zobacz pakiety')

    const element = document.getElementById('pricing');
    element?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <section id="hero" className="relative bg-gradient-to-b from-paulina-bg-purple via-white to-paulina-bg-yellow pt-20 pb-12 px-4 sm:px-6 md:px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Column - Content */}
          <motion.div {...fadeIn}>
            {/* Trust Badge */}
            <div className="inline-flex items-center gap-2 bg-white rounded-full px-4 py-2 shadow-md mb-6">
              <Shield className="text-paulina-primary" size={16} />
              <span className="text-sm font-semibold text-gray-700">Program zgodny z CKE 2026</span>
            </div>

            {/* Main Headline - Skrócony */}
            <h1 className="text-2xl sm:text-4xl md:text-5xl font-bold text-paulina-primary leading-tight mb-6">
              Zdaj Maturę Podstawową: <span className="text-paulina-accent">80%+ bez korepetycji</span>
            </h1>

            {/* Subheadline - Rozszerzony */}
            <p className="text-base sm:text-lg text-gray-700 mb-8">
              Sprawdzona przez <span className="font-bold text-paulina-primary">20 000 uczniów</span> metoda, która sprawia, że
              <span className="font-bold text-paulina-accent"> sam chcesz się uczyć</span> tylko 15 minut dziennie
            </p>

            {/* Social Proof */}
            <div className="flex flex-wrap gap-6 mb-8">
              <div className="flex items-center gap-2">
                <Users className="text-paulina-primary" size={20} />
                <span className="text-sm font-semibold">20 000+ uczniów</span>
              </div>
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="text-paulina-accent fill-current" size={16} />
                ))}
                <span className="text-sm font-semibold ml-1">4.9/5</span>
              </div>
              <div className="flex items-center gap-2">
                <Shield className="text-paulina-primary" size={20} />
                <span className="text-sm font-semibold">30 dni gwarancji</span>
              </div>
            </div>

            {/* Key Benefits */}
            <div className="space-y-3 mb-8">
              {[
                'Uczysz się SAM - koniec z kłótniami o naukę',
                'Zaoszczędzisz 3600 zł (vs 6 miesięcy korepetycji)',
                '30-dniowa gwarancja zwrotu bez pytań'
              ].map((benefit, index) => {
                const benefitAnimation = shouldReduceMotion
                  ? { initial: { opacity: 1 }, animate: { opacity: 1 } }
                  : { initial: { opacity: 0, x: -20 }, animate: { opacity: 1, x: 0 }, transition: { delay: 0.3 + index * 0.1 } };

                return (
                <motion.div
                  key={index}
                  {...benefitAnimation}
                  className="flex items-center gap-3"
                >
                  <CheckCircle className="text-paulina-accent flex-shrink-0" size={20} />
                  <span className="text-sm sm:text-base text-gray-700">{benefit}</span>
                </motion.div>
                );
              })}
            </div>

            {/* CTA Button */}
            <motion.button
              onClick={scrollToPricing}
              whileHover={shouldReduceMotion ? {} : { scale: 1.05 }}
              whileTap={shouldReduceMotion ? {} : { scale: 0.95 }}
              className="inline-flex items-center gap-2 px-6 sm:px-8 py-3 sm:py-4 bg-paulina-accent text-white font-bold rounded-full shadow-2xl transform transition-all duration-300 hover:bg-paulina-primary hover:shadow-3xl group"
            >
              <span className="text-base sm:text-lg">Zobacz pakiety i ceny</span>
              <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </motion.button>

            {/* Urgency */}
            <p className="text-sm text-gray-600 mt-4">
              ⚠️ Do matury zostało tylko <span className="font-bold text-paulina-accent">{Math.ceil((new Date('2026-05-05').getTime() - new Date().getTime()) / (1000 * 60 * 60 * 24))} dni</span>
            </p>
          </motion.div>

          {/* Right Column - Image */}
          <motion.div
            {...scaleIn}
            className="relative hidden md:block"
          >
            <div className="relative">
              <Image
                src="https://paulinaodmatematyki.com/wp-content/uploads/2025/06/hero-1.webp"
                alt="Paulina od Matematyki"
                width={800}
                height={800}
                priority
                unoptimized
                className="rounded-2xl shadow-xl w-full max-w-md mx-auto"
              />
              
              {/* Floating Stats - desktop only, keep animations */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 }}
                className="absolute -bottom-6 -left-6 bg-white rounded-xl shadow-xl p-4"
              >
                <p className="text-3xl font-bold text-paulina-primary">84%</p>
                <p className="text-xs text-gray-600">Średni wynik</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1 }}
                className="absolute -top-6 -right-6 bg-white rounded-xl shadow-xl p-4"
              >
                <p className="text-2xl font-bold text-paulina-accent">98%</p>
                <p className="text-xs text-gray-600">Zadowolonych rodziców</p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Sticky Mobile CTA - white background with colored button */}
      <div className="fixed bottom-0 left-0 right-0 z-50 md:hidden bg-white border-t-2 border-gray-200 p-4 shadow-2xl" data-testid="sticky-cta">
        <button
          onClick={scrollToPricing}
          className="w-full py-3 bg-paulina-primary text-white font-bold text-lg rounded-full shadow-xl hover:bg-paulina-accent transition-all duration-300"
        >
          Zobacz Pakiety (98% wybiera Premium)
        </button>
      </div>
    </section>
  );
};

export default HeroSimple;
