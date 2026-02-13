'use client'

import React, { useState, useEffect, useMemo } from 'react';
import { motion } from 'framer-motion';
import { throttle } from '@/utils/throttle';

const ScrollProgress: React.FC = () => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [activeSection, setActiveSection] = useState('');

  const sections = [
    { id: 'hero', name: 'Start', icon: '🏠' },
    { id: 'testimonials', name: 'Opinie', icon: '⭐' },
    { id: 'problems', name: 'Problem', icon: '❓' },
    { id: 'solutions', name: 'Rozwiązanie', icon: '✅' },
    { id: 'mechanism', name: 'Jak działa', icon: '⚙️' },
    { id: 'course-content', name: 'Program', icon: '📚' },
    { id: 'pricing', name: 'Cennik', icon: '💳' },
    { id: 'faq', name: 'FAQ', icon: '💬' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (window.scrollY / totalHeight) * 100;
      setScrollProgress(progress);

      // Determine active section
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section.id);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section.id);
            break;
          }
        }
      }
    };

    // Throttle scroll event to max 1x per 100ms for performance
    const throttledScroll = throttle(handleScroll, 100);

    window.addEventListener('scroll', throttledScroll);
    handleScroll(); // Initial call

    return () => window.removeEventListener('scroll', throttledScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 80; // Account for fixed header
      const elementPosition = element.offsetTop - offset;
      
      window.scrollTo({
        top: elementPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <>
      {/* Progress Bar */}
      <div className="fixed top-0 left-0 right-0 h-1 bg-gray-200 z-[60]">
        <motion.div
          className="h-full bg-gradient-to-r from-paulina-accent to-paulina-primary"
          style={{ width: `${scrollProgress}%` }}
          initial={{ width: 0 }}
          animate={{ width: `${scrollProgress}%` }}
          transition={{ duration: 0.1 }}
        />
      </div>

      {/* Desktop Navigation Dots */}
      <div className="fixed right-4 top-1/2 transform -translate-y-1/2 z-40 hidden lg:block">
        <div className="bg-white rounded-full shadow-lg p-2">
          {sections.map((section, index) => (
            <motion.button
              key={section.id}
              onClick={() => scrollToSection(section.id)}
              className={`block w-10 h-10 rounded-full mb-2 last:mb-0 transition-all duration-300 relative group ${
                activeSection === section.id
                  ? 'bg-paulina-accent text-white'
                  : 'bg-gray-100 hover:bg-paulina-bg-purple'
              }`}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="text-sm">{section.icon}</span>
              
              {/* Tooltip */}
              <div className="absolute right-full mr-2 top-1/2 transform -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none">
                <div className="bg-gray-900 text-white text-xs px-2 py-1 rounded whitespace-nowrap">
                  {section.name}
                </div>
              </div>
            </motion.button>
          ))}
        </div>
      </div>

    </>
  );
};

export default ScrollProgress;
