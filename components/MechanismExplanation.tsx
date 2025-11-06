'use client'

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { PlayCircle, PauseCircle, RotateCcw, CheckCircle, ArrowRight, Brain, Target, Zap, Clock, Award, Users } from 'lucide-react';

const MechanismExplanation: React.FC = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const lapsSteps = [
    {
      letter: 'L',
      name: 'LEARN',
      title: 'Uczenie przez Zrozumienie',
      color: 'from-blue-500 to-blue-700',
      icon: Brain,
      duration: '5 min',
      description: 'Nie pamięci, ale głębokiego rozumienia',
      how_it_works: 'Zamiast suchego tłumaczenia wzorów, Paulina pokazuje DLACZEGO tak się dzieje. Dziecko nie uczy się "a² + b² = c²" - rozumie, dlaczego pitagorejczyk to odkrył.',
      what_child_experiences: [
        'Moment "AHA!" gdy wszystko staje się jasne',
        'Widzenie logicznych połączeń między tematami',
        'Pewność, że matematyka ma sens',
        'Radość z odkrywania, nie męczenie się'
      ],
      parent_sees: 'Dziecko mówi "teraz rozumiem!" zamiast "nie wiem jak"',
      science: 'Neuroplastyczność mózgu - gdy rozumiemy mechanizm, mózg tworzy silniejsze połączenia neuronowe.',
      example: 'Równania nie są już zagadką - to logiczny puzzle, który dziecko potrafi ułożyć krok po kroku'
    },
    {
      letter: 'A',
      name: 'APPLY',
      title: 'Zastosowanie w Praktyce',
      color: 'from-green-500 to-green-700',
      icon: Target,
      duration: '5 min',
      description: 'Od teorii do pewności w działaniu',
      how_it_works: 'Każda lekcja kończy się praktyką. Ale to nie bezmyślne rozwiązywanie - to inteligentne zastosowanie zrozumianych zasad w różnych sytuacjach.',
      what_child_experiences: [
        'Satysfakcja z samodzielnego rozwiązywania',
        'Pewność, że potrafi poradzić sobie z każdym zadaniem',
        'Budowanie śmiałości w podejściu do problemów',
        'Rozpoznawanie wzorców w zadaniach'
      ],
      parent_sees: 'Dziecko samo bierze się za zadania domowe, bez przypominania',
      science: 'Teoria flow - gdy umiejętności są proporcjonalne do wyzwania, osiągamy stan optymalnej koncentracji.',
      example: 'Zadania z funkcji nie są już straszne - dziecko wie dokładnie, jakie kroki podjąć'
    },
    {
      letter: 'P',
      name: 'PRACTICE',
      title: 'Praktyka z Systemem',
      color: 'from-purple-500 to-purple-700',
      icon: Zap,
      duration: '3 min',
      description: 'Automatyzacja przez inteligentne powtarzanie',
      how_it_works: 'System LAPS wie, kiedy dziecko potrzebuje powtórki. Nie za wcześnie (nudzi się), nie za późno (zapomina). Dokładnie wtedy, gdy mózg jest gotowy utrwalić.',
      what_child_experiences: [
        'Naturalne przechodzenie od świadomego myślenia do automatyzmu',
        'Radość z tego, że "już to potrafię"',
        'Pewność przed każdą klasówką',
        'Brak stresu przy rozwiązywaniu zadań'
      ],
      parent_sees: 'Dziecko rozwiązuje zadania coraz szybciej i z coraz większą pewnością',
      science: 'Krzywa zapominania Ebbinghausa - optymalne odstępy czasowe maksymalizują retencję.',
      example: 'Mnożenie, ułamki, równania - wszystko staje się tak naturalne jak jazda na rowerze'
    },
    {
      letter: 'S',
      name: 'SUCCEED',
      title: 'Sukces i Pewność Siebie',
      color: 'from-yellow-500 to-orange-500',
      icon: Award,
      duration: '2 min',
      description: 'Budowanie trwałej pewności siebie',
      how_it_works: 'Każdy sukces jest celebrowany. System pokazuje dziecku jego postępy, przypomina o małych zwycięstwach. To buduje pozytywne skojarzenia z matematyką.',
      what_child_experiences: [
        'Dumę z własnych osiągnięć',
        'Wiarę, że może pokonać każde wyzwanie',
        'Radość z uczenia się nowych rzeczy',
        'Motywację do dalszej nauki'
      ],
      parent_sees: 'Dziecko samo opowiada o swoich postępach i prosi o trudniejsze zadania',
      science: 'Teoria samoskuteczności Bandury - wiara we własne możliwości zwiększa rzeczywistą skuteczność.',
      example: 'Egzamin ósmoklasisty lub matura to już nie stres, ale okazja do pokazania umiejętności'
    }
  ];

  const whyItWorks = [
    {
      icon: Clock,
      title: 'Tylko 15 minut dziennie',
      description: 'Mózg dziecka może się skupić maksymalnie 15-20 minut. Wykorzystujemy to okno na maksimum.',
      benefit: 'Dziecko nie ma czasu się znudzić czy zgubić'
    },
    {
      icon: Brain,
      title: 'Respektuje sposób uczenia się mózgu',
      description: 'Każdy krok LAPS odpowiada naturalnym procesom neurologicznym uczenia się.',
      benefit: 'Nauka jest łatwa, bo jest naturalna'
    },
    {
      icon: Users,
      title: 'Sprawdzone na 20,847 dzieciach',
      description: 'Każda reakcja dziecka została przewidziana i przetestowana przez lata.',
      benefit: 'Nie ma niespodzianek - system po prostu działa'
    }
  ];

  const startAnimation = () => {
    setIsAnimating(true);
    setActiveStep(0);
    
    const interval = setInterval(() => {
      setActiveStep((prev) => {
        if (prev < lapsSteps.length - 1) {
          return prev + 1;
        } else {
          setIsAnimating(false);
          clearInterval(interval);
          return prev;
        }
      });
    }, 3000);
  };

  const resetAnimation = () => {
    setIsAnimating(false);
    setActiveStep(0);
  };

  const currentStep = lapsSteps[activeStep];
  const StepIcon = currentStep.icon;

  return (
    <section id="mechanism" className="py-20 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-full h-full">
          <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="brain-pattern" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
                <circle cx="50" cy="50" r="2" fill="currentColor" />
                <path d="M20,20 Q50,10 80,20 Q90,50 80,80 Q50,90 20,80 Q10,50 20,20" stroke="currentColor" strokeWidth="1" fill="none" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#brain-pattern)" />
          </svg>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Jak działa system <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-orange-500 bg-clip-text text-transparent">LAPS</span>?
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed mb-8">
            To nie jest magia - to nauka o tym, jak mózg dziecka najłatwiej przyswaja matematykę.
            <br />
            <span className="font-bold text-purple-600">15 minut dziennie. 4 proste kroki. Gwarantowany efekt.</span>
          </p>

          {/* Animation Controls */}
          <div className="flex justify-center gap-4">
            <motion.button
              onClick={startAnimation}
              disabled={isAnimating}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold py-4 px-8 rounded-full shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <PlayCircle size={24} />
              {isAnimating ? 'Trwa demonstracja...' : 'Zobacz jak to działa'}
            </motion.button>
            
            <motion.button
              onClick={resetAnimation}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-2 bg-white text-gray-700 font-semibold py-4 px-6 rounded-full border-2 border-gray-300 hover:border-purple-400 transition-all"
            >
              <RotateCcw size={20} />
              Reset
            </motion.button>
          </div>
        </motion.div>

        {/* LAPS Visual Explanation */}
        <div className="grid lg:grid-cols-2 gap-12 items-start mb-20">
          {/* Left Side - Step Details */}
          <motion.div
            key={activeStep}
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            {/* Step Header */}
            <div className="flex items-center gap-4 mb-8">
              <div className={`w-20 h-20 bg-gradient-to-r ${currentStep.color} rounded-2xl flex items-center justify-center text-white text-3xl font-bold shadow-lg`}>
                {currentStep.letter}
              </div>
              <div>
                <h3 className="text-3xl font-bold text-gray-900">{currentStep.name}</h3>
                <p className="text-lg text-gray-600">{currentStep.title}</p>
                <div className="flex items-center gap-2 mt-2">
                  <Clock size={16} className="text-purple-600" />
                  <span className="text-sm font-semibold text-purple-600">{currentStep.duration}</span>
                </div>
              </div>
            </div>

            {/* How it Works */}
            <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
              <h4 className="font-bold text-gray-900 mb-3 flex items-center gap-2">
                <Brain className="text-blue-600" size={20} />
                Jak to działa?
              </h4>
              <p className="text-gray-700 leading-relaxed">
                {currentStep.how_it_works}
              </p>
            </div>

            {/* What Child Experiences */}
            <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-2xl p-6 border-l-4 border-green-400">
              <h4 className="font-bold text-gray-900 mb-3 flex items-center gap-2">
                <StepIcon className="text-green-600" size={20} />
                Co czuje dziecko?
              </h4>
              <ul className="space-y-2">
                {currentStep.what_child_experiences.map((experience, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-start gap-2"
                  >
                    <CheckCircle className="text-green-500 mt-0.5 flex-shrink-0" size={16} />
                    <span className="text-gray-700 text-sm">{experience}</span>
                  </motion.li>
                ))}
              </ul>
            </div>

            {/* What Parent Sees */}
            <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-2xl p-6 border-l-4 border-purple-400">
              <h4 className="font-bold text-gray-900 mb-3 flex items-center gap-2">
                <Users className="text-purple-600" size={20} />
                Co widzisz jako rodzic?
              </h4>
              <p className="text-gray-700 font-semibold italic">
                "{currentStep.parent_sees}"
              </p>
            </div>

            {/* Science Behind */}
            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-6 border-l-4 border-blue-400">
              <h4 className="font-bold text-gray-900 mb-3 flex items-center gap-2">
                <Zap className="text-blue-600" size={20} />
                Nauka stojąca za tym
              </h4>
              <p className="text-gray-700 text-sm leading-relaxed">
                {currentStep.science}
              </p>
            </div>
          </motion.div>

          {/* Right Side - Visual Process */}
          <div className="relative">
            {/* LAPS Circle */}
            <div className="relative w-80 h-80 mx-auto mb-8">
              <svg className="w-full h-full" viewBox="0 0 200 200">
                {/* Background Circle */}
                <circle
                  cx="100"
                  cy="100"
                  r="90"
                  fill="none"
                  stroke="#e5e7eb"
                  strokeWidth="4"
                />
                
                {/* Progress Circle */}
                <motion.circle
                  cx="100"
                  cy="100"
                  r="90"
                  fill="none"
                  stroke="url(#gradient)"
                  strokeWidth="6"
                  strokeLinecap="round"
                  strokeDasharray={`${2 * Math.PI * 90}`}
                  strokeDashoffset={2 * Math.PI * 90 * (1 - (activeStep + 1) / lapsSteps.length)}
                  className="transition-all duration-1000"
                />
                
                <defs>
                  <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#3b82f6" />
                    <stop offset="33%" stopColor="#10b981" />
                    <stop offset="66%" stopColor="#8b5cf6" />
                    <stop offset="100%" stopColor="#f59e0b" />
                  </linearGradient>
                </defs>

                {/* Letter Positions */}
                {lapsSteps.map((step, index) => {
                  const angle = (index / lapsSteps.length) * 2 * Math.PI - Math.PI / 2;
                  const x = 100 + 70 * Math.cos(angle);
                  const y = 100 + 70 * Math.sin(angle);
                  
                  return (
                    <motion.g key={index}>
                      <circle
                        cx={x}
                        cy={y}
                        r="15"
                        fill={index <= activeStep ? `url(#gradient-${index})` : '#f3f4f6'}
                        className="transition-all duration-500"
                      />
                      <text
                        x={x}
                        y={y + 5}
                        textAnchor="middle"
                        className="text-sm font-bold fill-white"
                      >
                        {step.letter}
                      </text>
                      
                      <defs>
                        <linearGradient id={`gradient-${index}`} x1="0%" y1="0%" x2="100%" y2="100%">
                          <stop offset="0%" stopColor={index === 0 ? '#3b82f6' : index === 1 ? '#10b981' : index === 2 ? '#8b5cf6' : '#f59e0b'} />
                          <stop offset="100%" stopColor={index === 0 ? '#1e40af' : index === 1 ? '#047857' : index === 2 ? '#6b21a8' : '#d97706'} />
                        </linearGradient>
                      </defs>
                    </motion.g>
                  );
                })}
              </svg>

              {/* Center Content */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <motion.div
                    key={activeStep}
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    className={`w-16 h-16 bg-gradient-to-r ${currentStep.color} rounded-full flex items-center justify-center mb-2 mx-auto shadow-lg`}
                  >
                    <StepIcon className="text-white" size={28} />
                  </motion.div>
                  <div className="text-lg font-bold text-gray-900">{currentStep.name}</div>
                  <div className="text-sm text-gray-600">{currentStep.duration}</div>
                </div>
              </div>
            </div>

            {/* Step Navigation */}
            <div className="flex justify-center gap-2">
              {lapsSteps.map((step, index) => (
                <button
                  key={index}
                  onClick={() => setActiveStep(index)}
                  className={`w-12 h-12 rounded-xl border-2 transition-all ${
                    index === activeStep
                      ? `bg-gradient-to-r ${step.color} border-transparent text-white`
                      : 'bg-white border-gray-300 text-gray-600 hover:border-purple-300'
                  }`}
                >
                  {step.letter}
                </button>
              ))}
            </div>

            {/* Example in Action */}
            <motion.div
              key={activeStep}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="mt-8 p-6 bg-white rounded-2xl shadow-lg border border-gray-100"
            >
              <h4 className="font-bold text-gray-900 mb-3 flex items-center gap-2">
                <Target className="text-orange-600" size={20} />
                Przykład w praktyce
              </h4>
              <p className="text-gray-700 leading-relaxed">
                {currentStep.example}
              </p>
            </motion.div>
          </div>
        </div>

        {/* Why It Works Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-purple-900 to-indigo-900 text-white rounded-3xl p-12 mb-16"
        >
          <h3 className="text-3xl font-bold text-center mb-12">
            Dlaczego system LAPS działa lepiej niż tradycyjne metody?
          </h3>
          
          <div className="grid md:grid-cols-3 gap-8">
            {whyItWorks.map((reason, index) => {
              const Icon = reason.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2 }}
                  className="text-center"
                >
                  <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <Icon className="text-yellow-300" size={32} />
                  </div>
                  <h4 className="text-xl font-bold mb-3">{reason.title}</h4>
                  <p className="text-white/80 mb-4 leading-relaxed">{reason.description}</p>
                  <p className="text-yellow-300 font-semibold">{reason.benefit}</p>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-3xl p-12 max-w-4xl mx-auto border-2 border-purple-200">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              Teraz rozumiesz mechanizm
            </h3>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              System LAPS to nie przypadek - to efekt <span className="font-bold text-purple-600">5 lat badań</span> nad tym,
              jak dzieci najłatwiej uczą się matematyki.
              <br />
              <span className="text-lg text-gray-500">Sprawdzone na 20,847 uczniach. 84% sukcesu. Gwarantowane.</span>
            </p>
            
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => {
                const element = document.getElementById('pricing');
                element?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="bg-gradient-to-r from-purple-600 to-blue-600 text-white font-bold py-4 px-8 rounded-full text-lg shadow-lg hover:shadow-xl transition-all duration-300 inline-flex items-center gap-2"
            >
              Chcę, żeby moje dziecko skorzystało z systemu LAPS
              <ArrowRight size={20} />
            </motion.button>
            
            <p className="text-sm text-gray-500 mt-4">
              30-dniowa gwarancja zwrotu • Bez ryzyka • Natychmiastowy dostęp
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default MechanismExplanation;
