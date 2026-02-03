'use client'

import { motion } from 'framer-motion'
import { BookOpen, Sparkles, Clock, Target, ArrowRight } from 'lucide-react'

interface QualifierGateProps {
  onShowFullPage: () => void
  courseType: 'egzamin' | 'matura' | 'rozszerzenie'
}

const courseNames = {
  egzamin: 'Program Ósmoklasisty',
  matura: 'Program Matura Podstawa',
  rozszerzenie: 'Program Matura Rozszerzenie'
}

const courseTargets = {
  egzamin: 'egzaminie ósmoklasisty',
  matura: 'maturze podstawowej',
  rozszerzenie: 'maturze rozszerzonej'
}

export default function QualifierGate({ onShowFullPage, courseType }: QualifierGateProps) {
  const courseName = courseNames[courseType]
  const courseTarget = courseTargets[courseType]

  return (
    <div className="min-h-screen bg-gradient-to-br from-paulina-light via-white to-purple-50 flex items-center justify-center p-4 md:p-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-3xl w-full"
      >
        {/* Header */}
        <div className="text-center mb-8 md:mb-12">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, type: "spring" }}
            className="inline-flex items-center justify-center w-16 h-16 md:w-20 md:h-20 bg-paulina-primary/10 rounded-full mb-6"
          >
            <BookOpen className="w-8 h-8 md:w-10 md:h-10 text-paulina-primary" />
          </motion.div>

          <h1 className="text-2xl md:text-4xl font-bold text-gray-900 mb-4">
            Zanim przejdziesz dalej...
          </h1>

          <p className="text-lg md:text-xl text-gray-600">
            Chcę się upewnić, że wybierasz najlepszą opcję dla siebie
          </p>
        </div>

        {/* Two Options */}
        <div className="grid md:grid-cols-2 gap-6 md:gap-8">

          {/* Option 1: Full Course */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="bg-white rounded-2xl p-6 md:p-8 shadow-lg border-2 border-paulina-primary/20 hover:border-paulina-primary/50 transition-all"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 bg-paulina-primary/10 rounded-lg">
                <Target className="w-6 h-6 text-paulina-primary" />
              </div>
              <h2 className="text-xl font-bold text-gray-900">Kurs Główny</h2>
            </div>

            <p className="text-gray-600 mb-4">
              <strong>{courseName}</strong> to kompleksowe przygotowanie do {courseTarget}.
            </p>

            <ul className="space-y-3 mb-6 text-sm text-gray-600">
              <li className="flex items-start gap-2">
                <span className="text-paulina-primary mt-0.5">✓</span>
                <span>Wynik powyżej <strong>80%</strong> bez drogich korepetycji</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-paulina-primary mt-0.5">✓</span>
                <span>Pełna ścieżka nauki krok po kroku</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-paulina-primary mt-0.5">✓</span>
                <span>Wymaga <strong>regularnej pracy</strong> przez kilka miesięcy</span>
              </li>
            </ul>

            <div className="flex items-center gap-2 text-sm text-amber-700 bg-amber-50 p-3 rounded-lg mb-6">
              <Clock className="w-4 h-4 flex-shrink-0" />
              <span>Najlepszy wybór jeśli masz czas na systematyczną naukę</span>
            </div>

            <button
              onClick={onShowFullPage}
              className="w-full py-4 px-6 bg-paulina-primary hover:bg-paulina-primary/90 text-white font-semibold rounded-xl transition-all flex items-center justify-center gap-2 group"
            >
              Tak, chcę kurs główny
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </motion.div>

          {/* Option 2: Minikursy */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
            className="bg-white rounded-2xl p-6 md:p-8 shadow-lg border-2 border-gray-100 hover:border-paulina-accent/50 transition-all"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 bg-paulina-accent/10 rounded-lg">
                <Sparkles className="w-6 h-6 text-paulina-accent" />
              </div>
              <h2 className="text-xl font-bold text-gray-900">Minikursy</h2>
            </div>

            <p className="text-gray-600 mb-4">
              Szybkie kursy skupione na <strong>konkretnych umiejętnościach</strong> i technikach egzaminacyjnych.
            </p>

            <ul className="space-y-3 mb-6 text-sm text-gray-600">
              <li className="flex items-start gap-2">
                <span className="text-paulina-accent mt-0.5">✓</span>
                <span>Szybkie efekty - dodaj <strong>10-20%</strong> do wyniku</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-paulina-accent mt-0.5">✓</span>
                <span>Pewniaki, Strategie Strzelania, Arkusze</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-paulina-accent mt-0.5">✓</span>
                <span>Idealne gdy <strong>mało czasu</strong> do egzaminu</span>
              </li>
            </ul>

            <div className="flex items-center gap-2 text-sm text-green-700 bg-green-50 p-3 rounded-lg mb-6">
              <Sparkles className="w-4 h-4 flex-shrink-0" />
              <span>Już od 97 zł - szybki start bez dużego zobowiązania</span>
            </div>

            <a
              href="https://paulinaodmatematyki.com/minikursy/"
              className="w-full py-4 px-6 bg-gray-100 hover:bg-gray-200 text-gray-800 font-semibold rounded-xl transition-all flex items-center justify-center gap-2 group"
            >
              Sprawdź minikursy
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
          </motion.div>
        </div>

        {/* Bottom note */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="text-center text-sm text-gray-500 mt-8"
        >
          Nie wiesz co wybrać? Napisz do mnie na <a href="mailto:kontakt@paulinaodmatematyki.com" className="text-paulina-primary hover:underline">kontakt@paulinaodmatematyki.com</a>
        </motion.p>
      </motion.div>
    </div>
  )
}
