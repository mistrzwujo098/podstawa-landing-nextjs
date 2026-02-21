'use client'

import React from 'react';
import Image from 'next/image';
import { Star, Shield, Users, CheckCircle, ChevronRight } from 'lucide-react';
import { tracking } from '@/lib/tracking';

const HeroSimple: React.FC = () => {
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
          <div className="animate-fade-in-up">
            {/* Trust Badge - January Offer */}
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-paulina-primary to-paulina-accent text-white rounded-full px-4 py-2 shadow-md mb-6">
              <Shield className="text-white" size={16} />
              <span className="text-sm font-semibold">Sprawdzona metoda 24 000+ uczniów</span>
            </div>

            {/* Main Headline - Skrócony */}
            <h1 className="text-2xl sm:text-4xl md:text-5xl font-bold text-paulina-primary leading-tight mb-6">
              Zdaj Maturę Podstawową: <span className="text-paulina-accent">80%+ bez korepetycji</span>
            </h1>

            {/* Subheadline - Rozszerzony */}
            <p className="text-base sm:text-lg text-gray-700 mb-8">
              Sprawdzona przez <span className="font-bold text-paulina-primary">24 000 uczniów</span> metoda, która sprawia, że dziecko samo siada do nauki. <span className="font-bold text-paulina-accent">Wystarczy 20 minut dziennie</span>
            </p>

            {/* Social Proof */}
            <div className="flex flex-wrap gap-6 mb-8">
              <div className="flex items-center gap-2">
                <Users className="text-paulina-primary" size={20} />
                <span className="text-sm font-semibold">24 000+ uczniów</span>
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
                'Zaoszczędzisz 1400 zł (vs 4 miesiące korepetycji)',
                '30-dniowa gwarancja zwrotu bez pytań'
              ].map((benefit, index) => (
                <div
                  key={index}
                  className="flex items-center gap-3 animate-slide-in-left"
                  style={{ animationDelay: `${0.3 + index * 0.1}s` }}
                >
                  <CheckCircle className="text-paulina-accent flex-shrink-0" size={20} />
                  <span className="text-sm sm:text-base text-gray-700">{benefit}</span>
                </div>
              ))}
            </div>

            {/* CTA Button */}
            <button
              onClick={scrollToPricing}
              className="inline-flex items-center gap-2 px-6 sm:px-8 py-3 sm:py-4 bg-paulina-accent text-white font-bold rounded-full shadow-2xl transform transition-all duration-300 hover:bg-paulina-primary hover:shadow-3xl hover:scale-[1.02] active:scale-[0.95] group"
            >
              <span className="text-base sm:text-lg">Zobacz pakiety i ceny</span>
              <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>

            {/* Urgency */}
            <div className="text-sm text-gray-600 mt-4">
              <p>⚠️ Do matury zostało tylko <span className="font-bold text-paulina-accent">{Math.ceil((new Date('2026-05-05').getTime() - new Date().getTime()) / (1000 * 60 * 60 * 24))} dni</span></p>
              <p className="mt-1">Program wymaga minimum 3 miesięcy regularnej nauki. Zapisz się teraz — Twoje dziecko będzie gotowe na czas.</p>
            </div>
          </div>

          {/* Right Column - Image */}
          <div className="relative hidden md:block">
            <div className="relative">
              <Image
                src="https://paulinaodmatematyki.com/wp-content/uploads/2024/12/podstawa-okladka.webp"
                alt="Paulina od Matematyki - Kurs Matura Podstawowa"
                width={800}
                height={800}
                sizes="(max-width: 768px) 0px, (max-width: 1280px) 45vw, 560px"
                priority
                unoptimized
                className="rounded-2xl shadow-xl w-full max-w-md mx-auto"
              />

              {/* Floating Stats - desktop only */}
              <div
                className="absolute -bottom-6 -left-6 bg-white rounded-xl shadow-xl p-4 animate-fade-in-up"
                style={{ animationDelay: '0.8s' }}
              >
                <p className="text-3xl font-bold text-paulina-primary">24 000+</p>
                <p className="text-xs text-gray-600">Kursantów</p>
              </div>

              <div
                className="absolute -top-6 -right-6 bg-white rounded-xl shadow-xl p-4 animate-fade-in-up"
                style={{ animationDelay: '1s' }}
              >
                <p className="text-2xl font-bold text-paulina-accent">98%</p>
                <p className="text-xs text-gray-600">Poleca znajomym</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Sticky Mobile CTA - white background with colored button */}
      <div className="fixed bottom-0 left-0 right-0 z-50 md:hidden bg-white border-t-2 border-gray-200 p-4 shadow-2xl" data-testid="sticky-cta">
        <button
          onClick={scrollToPricing}
          className="w-full py-3 bg-paulina-primary text-white font-bold text-lg rounded-full shadow-xl hover:bg-paulina-accent transition-all duration-300"
        >
          Zobacz pakiety i ceny
        </button>
      </div>
    </section>
  );
};

export default HeroSimple;
