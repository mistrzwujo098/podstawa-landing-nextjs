'use client'

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Globe, Users, User, ChevronRight, Sparkles, Target, Award, Heart } from 'lucide-react';

const PossibilityFramework: React.FC = () => {
  const [activeStage, setActiveStage] = useState(0);
  
  const stages = [
    {
      id: 0,
      title: 'Możliwość w świecie',
      subtitle: 'Dzieje się coś niesamowitego',
      icon: Globe,
      color: 'from-blue-500 to-purple-600',
      content: {
        headline: 'Rewolucja w nauce matematyki już się zaczęła',
        description: 'Tysiące dzieci na całym świecie odkrywają, że matematyka może być fascynująca, prosta i przyjemna. Nowe metody nauki zmieniają wszystko.',
        stats: [
          { number: '2.3M', label: 'dzieci już korzysta z nowych metod nauki' },
          { number: '89%', label: 'poprawia oceny w pierwszym miesiącu' },
          { number: '156%', label: 'wzrost pewności siebie' }
        ],
        examples: [
          'W Finlandii matematyka stała się ulubionym przedmiotem 76% uczniów',
          'W Singapurze dzieci rozwiązują równania tak łatwo jak układanki',
          'W Polsce już ponad 50 szkół wdrożyło nowoczesne metody z niesamowitymi efektami'
        ],
        emotional_trigger: 'Świat się zmienia. Czy Twoje dziecko będzie częścią tej rewolucji, czy zostanie w tyle?'
      }
    },
    {
      id: 1,
      title: 'Możliwość dla innych',
      subtitle: 'Polskie rodziny już to robią',
      icon: Users,
      color: 'from-green-500 to-emerald-600',
      content: {
        headline: 'Rodzice w całej Polsce już podjęli decyzję',
        description: 'Nie jesteś sama/sam. Tysiące polskich rodzin już odkryło sekret spokojnej nauki matematyki. Zobacz, co się dzieje w domach, które wybrały zmianę.',
        stats: [
          { number: '20,847', label: 'polskich rodzin już z nami' },
          { number: '4.9/5', label: 'średnia ocena rodziców' },
          { number: '94%', label: 'poleca znajomym' }
        ],
        examples: [
          'Anna z Warszawy: "Córka sama siedzi do zadań. Pierwszy raz mam święty spokój."',
          'Tomek z Krakowa: "Syn z dwójkarza stał się prymusem. Inne mamy pytają o sekret."',
          'Magda z Gdańska: "Oszczędziłam 4000 zł na korepetycjach. Najlepsza inwestycja!"'
        ],
        emotional_trigger: 'Inne rodziny już cieszą się spokojem i sukcesami swoich dzieci. Kiedy Ty dołączysz?'
      }
    },
    {
      id: 2,
      title: 'Możliwość dla Ciebie',
      subtitle: 'Twoja rodzina może być następna',
      icon: User,
      color: 'from-paulina-accent to-paulina-orange',
      content: {
        headline: 'To może być historia Twojego dziecka',
        description: 'Wyobraź sobie: Twoje dziecko wchodzi do domu z uśmiechem, opowiada o kolejnej piątce z matematyki. Wieczory bez kłótni, bez łez, bez stresu. To możliwe już dziś.',
        stats: [
          { number: '15 min', label: 'dziennie wystarczy' },
          { number: '30 dni', label: 'do pierwszych efektów' },
          { number: '100%', label: 'gwarancja zwrotu' }
        ],
        examples: [
          'Wyobraź sobie minę dziecka, gdy po raz pierwszy powie: "Mamo, w końcu rozumiem!"',
          'Wyobraź sobie spokojny wieczór, gdy dziecko samo odrobi wszystkie zadania',
          'Wyobraź sobie dumę, gdy otrzymasz świadectwo z samymi dobrymi ocenami'
        ],
        emotional_trigger: 'Ta możliwość jest na wyciągnięcie ręki. Jedyna różnica między Tobą a tymi szczęśliwymi rodzicami to jedna decyzja.',
        cta: true
      }
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white via-blue-200 to-purple-200 bg-clip-text text-transparent">
            Otwórz drzwi do możliwości
          </h2>
          <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Każda wielka zmiana zaczyna się od zrozumienia, że <span className="text-yellow-400 font-semibold">jest możliwa</span>
          </p>
        </motion.div>

        {/* Stage Navigation */}
        <div className="flex justify-center mb-12">
          <div className="flex gap-4 p-2 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20">
            {stages.map((stage, index) => {
              const Icon = stage.icon;
              return (
                <button
                  key={stage.id}
                  onClick={() => setActiveStage(index)}
                  className={`flex items-center gap-3 px-6 py-3 rounded-xl transition-all duration-300 ${
                    activeStage === index
                      ? `bg-gradient-to-r ${stage.color} text-white shadow-lg`
                      : 'text-gray-300 hover:text-white hover:bg-white/10'
                  }`}
                >
                  <Icon size={20} />
                  <div className="text-left hidden md:block">
                    <div className="font-bold text-sm">{stage.title}</div>
                    <div className="text-xs opacity-80">{stage.subtitle}</div>
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* Stage Content */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeStage}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.5 }}
            className="max-w-6xl mx-auto"
          >
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Content Side */}
              <div>
                <motion.h3 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent"
                >
                  {stages[activeStage].content.headline}
                </motion.h3>
                
                <motion.p 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  className="text-lg text-gray-300 mb-8 leading-relaxed"
                >
                  {stages[activeStage].content.description}
                </motion.p>

                {/* Stats */}
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  className="grid grid-cols-3 gap-6 mb-8"
                >
                  {stages[activeStage].content.stats.map((stat, index) => (
                    <div key={index} className="text-center p-4 bg-white/10 rounded-xl backdrop-blur-sm border border-white/20">
                      <div className={`text-2xl md:text-3xl font-bold bg-gradient-to-r ${stages[activeStage].color} bg-clip-text text-transparent`}>
                        {stat.number}
                      </div>
                      <div className="text-xs text-gray-300 mt-1">
                        {stat.label}
                      </div>
                    </div>
                  ))}
                </motion.div>

                {/* Examples */}
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                  className="space-y-4 mb-8"
                >
                  {stages[activeStage].content.examples.map((example, index) => (
                    <motion.div 
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.6 + index * 0.1 }}
                      className="flex items-start gap-3 p-4 bg-white/5 rounded-lg border-l-4 border-gradient-to-b from-blue-400 to-purple-400"
                    >
                      <Sparkles className="text-yellow-400 mt-1 flex-shrink-0" size={20} />
                      <span className="text-gray-200">{example}</span>
                    </motion.div>
                  ))}
                </motion.div>

                {/* Emotional Trigger */}
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8 }}
                  className="p-6 bg-gradient-to-r from-yellow-400/20 to-orange-400/20 rounded-xl border border-yellow-400/30 mb-8"
                >
                  <p className="text-yellow-100 font-semibold text-lg leading-relaxed">
                    {stages[activeStage].content.emotional_trigger}
                  </p>
                </motion.div>

                {/* CTA for final stage */}
                {stages[activeStage].content.cta && (
                  <motion.div 
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.9 }}
                    className="text-center"
                  >
                    <div className="bg-gradient-to-r from-paulina-accent to-paulina-orange p-8 rounded-2xl shadow-2xl">
                      <h4 className="text-2xl font-bold text-white mb-4">
                        Możliwość jest TERAZ
                      </h4>
                      <p className="text-white/90 mb-6">
                        Każda sekunda zwlekania to kolejny moment, w którym inne dzieci zyskują przewagę
                      </p>
                      <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <motion.button
                          whileHover={{ scale: 1.02, boxShadow: '0 20px 40px rgba(0,0,0,0.3)' }}
                          whileTap={{ scale: 0.95 }}
                          className="bg-white text-paulina-accent font-bold py-4 px-8 rounded-full text-lg shadow-lg hover:shadow-xl transition-all duration-300 inline-flex items-center justify-center gap-2"
                        >
                          <Heart className="text-red-500" size={24} />
                          Zaczynam dziś - dla mojego dziecka
                          <ChevronRight size={20} />
                        </motion.button>
                        <div className="flex items-center justify-center gap-2 text-white/80 text-sm">
                          <Award size={16} />
                          <span>Dołącz do 20,847 szczęśliwych rodzin</span>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )}
              </div>

              {/* Visual Side */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.5 }}
                className="relative"
              >
                <div className={`w-full h-96 bg-gradient-to-br ${stages[activeStage].color} rounded-2xl shadow-2xl flex items-center justify-center relative overflow-hidden`}>
                  {/* Background Pattern */}
                  <div className="absolute inset-0 opacity-20">
                    <div className="absolute top-4 left-4 w-32 h-32 border-2 border-white rounded-full"></div>
                    <div className="absolute bottom-4 right-4 w-24 h-24 border border-white rounded-full"></div>
                    <div className="absolute top-1/2 left-1/2 w-40 h-40 border border-white rounded-full transform -translate-x-1/2 -translate-y-1/2"></div>
                  </div>
                  
                  {/* Central Icon */}
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                    className="relative z-10"
                  >
                    {React.createElement(stages[activeStage].icon, {
                      size: 120,
                      className: "text-white"
                    })}
                  </motion.div>

                  {/* Floating Elements */}
                  <motion.div
                    animate={{ y: [-10, 10, -10] }}
                    transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute top-8 right-8 bg-white/20 backdrop-blur-sm rounded-full p-4"
                  >
                    <Target size={24} className="text-white" />
                  </motion.div>
                  
                  <motion.div
                    animate={{ y: [10, -10, 10] }}
                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute bottom-8 left-8 bg-white/20 backdrop-blur-sm rounded-full p-4"
                  >
                    <Award size={24} className="text-white" />
                  </motion.div>
                </div>

                {/* Progress Indicator */}
                <div className="flex justify-center mt-6 gap-2">
                  {stages.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setActiveStage(index)}
                      className={`w-3 h-3 rounded-full transition-all duration-300 ${
                        index === activeStage
                          ? `bg-gradient-to-r ${stages[activeStage].color}`
                          : 'bg-white/30 hover:bg-white/50'
                      }`}
                    />
                  ))}
                </div>
              </motion.div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Navigation Buttons */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="flex justify-center gap-4 mt-12"
        >
          <button
            onClick={() => setActiveStage(Math.max(0, activeStage - 1))}
            disabled={activeStage === 0}
            className="px-6 py-3 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20 text-white disabled:opacity-50 disabled:cursor-not-allowed hover:bg-white/20 transition-all duration-300"
          >
            ← Poprzedni
          </button>
          <button
            onClick={() => setActiveStage(Math.min(stages.length - 1, activeStage + 1))}
            disabled={activeStage === stages.length - 1}
            className="px-6 py-3 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20 text-white disabled:opacity-50 disabled:cursor-not-allowed hover:bg-white/20 transition-all duration-300"
          >
            Następny →
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default PossibilityFramework;
