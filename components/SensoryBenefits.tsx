'use client'

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Play, Pause, Eye, Ear, Heart, Brain, Smile, Star } from 'lucide-react';

const SensoryBenefits: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  const visualizationScenes = [
    {
      id: 'morning_peace',
      title: 'Spokojny poranek',
      icon: Smile,
      visual: '🌅',
      description: 'Wyobraź sobie...',
      scene: 'Jest 7:30 rano. Słyszysz kroki dziecka na schodach - ale tym razem to nie ciężkie, zmęczone kroki. To lekkie, pewne siebie tupanie. Wchodzi do kuchni z uśmiechem.',
      dialogue: '"Mamo, wczoraj rozwiązałem wszystkie zadania z matematyki w 20 minut! Mogę dziś pójść wcześniej z kolegami na plac zabaw?"',
      emotion: 'Czujesz ciepło rozlewające się po całym ciele. To uczucie dumy i ulgi jednocześnie.',
      sensory_details: [
        'Zapach kawy miesza się z radością wypełniającą kuchnię',
        'Widzisz błysk w oczach dziecka - ten sam, który miało jako maluch',
        'Słyszysz pewność w jego głosie, nie strach jak dawniej',
        'Czujesz, jak napięcie opuszcza Twoje ramiona po raz pierwszy od miesięcy'
      ]
    },
    {
      id: 'homework_time',
      title: 'Czas na zadania',
      icon: Brain,
      visual: '📚',
      description: 'Za 3 miesiące...',
      scene: 'Godzina 16:00. Słyszysz jak dziecko woła z pokoju: "Mamo, zaczynam matmę!" Nie musisz nic mówić. Nie musisz przypominać. Samo się organizuje.',
      dialogue: '"Dzisiaj mam zadania z równań. Pamiętasz jak się wcześniej męczyłem? Teraz to jest jak układanka - wszystko ma sens!"',
      emotion: 'Masz łzy w oczach, ale to łzy radości. Twoje dziecko w końcu wierzy w siebie.',
      sensory_details: [
        'Cisza w domu - nie ma krzyków, kłótni ani płaczu',
        'Widzisz dziecko skupione, ale nie zestresowane',
        'Słyszysz szelest kartek i pewne ruchy długopisa',
        'Czujesz spokój, jakiego nie znałaś od lat'
      ]
    },
    {
      id: 'test_day',
      title: 'Dzień klasówki',
      icon: Star,
      visual: '📝',
      description: 'Za pół roku...',
      scene: 'Rano przed klasówką z matematyki. Pamiętasz jak kiedyś dziecko wymiotowało ze stresu? Dziś wstaje z łóżka wypoczęte, zjada śniadanie i mówi:',
      dialogue: '"Mamo, już nie mogę się doczekać tej klasówki! Wiem, że dam radę. Wczoraj przeszedłem wszystkie wzory i jest super!"',
      emotion: 'Twoje serce śpiewa. To Twoje dziecko - pewne siebie, gotowe na wyzwania.',
      sensory_details: [
        'Widzisz prosty plecy zamiast zgarbionej sylwetki',
        'Słyszysz pewny, energiczny głos',
        'Czujesz jak dumą wypełnia się Twoja klatka piersiowa',
        'Smakujesz słodycz tego momentu - Twoje dziecko wygrało z własnymi lękami'
      ]
    },
    {
      id: 'results_day',
      title: 'Dzień wyników',
      icon: Heart,
      visual: '🏆',
      description: 'Po roku...',
      scene: 'Dziecko wraca ze szkoły, trzymając w ręku arkusz z wynikami egzaminu. Nie musi nic mówić - jego uśmiech mówi wszystko.',
      dialogue: '"Mamo, 94%! Jestem w pierwszej dziesiątce w całej szkole! Pani powiedziała, że to jeden z najlepszych wyników, jakie widziała!"',
      emotion: 'Płaczesz, śmiejesz się, ściskasz dziecko. To jeden z najważniejszych momentów Twojego życia.',
      sensory_details: [
        'Widzisz czerwone pięć na kartce - tak wyraźną, tak piękną',
        'Słyszysz dumę w głosie dziecka, ale też wdzięczność',
        'Czujesz jak wszystkie te miesiące niepewności spływają z Ciebie',
        'Smakujesz triumf - nie swój, ale swojego dziecka'
      ]
    },
    {
      id: 'future_vision',
      title: 'Za 5 lat',
      icon: Eye,
      visual: '🎓',
      description: 'Daleka przyszłość...',
      scene: 'Twoje dziecko stoi na scenie podczas wręczania dyplomów. Skończyło wymarzone studia, dostało pracę w fantastycznej firmie. Podchodzi do Ciebie z dyplomem.',
      dialogue: '"Mamo, to wszystko dzięki Tobie. Pamiętasz jak kupiłaś mi ten kurs z matematyki? To zmieniło całe moje życie. Nauczyłem się nie tylko matematyki - nauczyłem się, że mogę osiągnąć wszystko."',
      emotion: 'To moment, w którym rozumiesz, że jedna decyzja zmieniła całe życie Twojego dziecka.',
      sensory_details: [
        'Widzisz łzy dumy w oczach dorosłego już dziecka',
        'Słyszysz jak brzmią Twoje osiągnięcia w jego słowach',
        'Czujesz ciężar tego momentu - jedna decyzja, cały świat możliwości',
        'Smakujesz spełnienie - jako rodzic osiągnąłeś to, o czym marzy każdy'
      ]
    }
  ];

  const [activeScene, setActiveScene] = useState(0);
  const [isAutoPlay, setIsAutoPlay] = useState(false);

  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isAutoPlay) {
      interval = setInterval(() => {
        setActiveScene((prev) => (prev + 1) % visualizationScenes.length);
      }, 8000);
    }
    return () => clearInterval(interval);
  }, [isAutoPlay, visualizationScenes.length]);

  const currentScene = visualizationScenes[activeScene];
  const Icon = currentScene.icon;

  return (
    <section className="py-20 bg-gradient-to-br from-purple-50 via-pink-50 to-blue-50 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-64 h-64 bg-purple-400 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-pink-400 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-blue-400 rounded-full blur-3xl animate-pulse delay-2000 transform -translate-x-1/2 -translate-y-1/2"></div>
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
            Zamknij oczy i <span className="text-purple-600">wyobraź sobie</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            To nie są tylko słowa. To <span className="font-bold text-pink-600">Twoja przyszłość</span> - tak bliska, że już możesz ją poczuć, zobaczyć, usłyszeć...
          </p>

          {/* Immersion Controls */}
          <div className="flex justify-center gap-4 mt-8">
            <button
              onClick={() => setIsAutoPlay(!isAutoPlay)}
              className={`flex items-center gap-2 px-6 py-3 rounded-full transition-all ${
                isAutoPlay 
                  ? 'bg-purple-600 text-white shadow-lg' 
                  : 'bg-white text-purple-600 border-2 border-purple-600'
              }`}
            >
              {isAutoPlay ? <Pause size={20} /> : <Play size={20} />}
              {isAutoPlay ? 'Zatrzymaj wizualizację' : 'Rozpocznij podróż'}
            </button>
            
          </div>
        </motion.div>

        {/* Scene Selection */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {visualizationScenes.map((scene, index) => {
            const SceneIcon = scene.icon;
            return (
              <button
                key={scene.id}
                onClick={() => setActiveScene(index)}
                className={`flex items-center gap-2 px-4 py-3 rounded-xl transition-all duration-300 ${
                  activeScene === index
                    ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg transform scale-105'
                    : 'bg-white text-gray-600 hover:bg-purple-50 shadow-md hover:shadow-lg'
                }`}
              >
                <SceneIcon size={20} />
                <span className="font-semibold text-sm">{scene.title}</span>
                <span className="text-2xl">{scene.visual}</span>
              </button>
            );
          })}
        </div>

        {/* Main Visualization */}
        <motion.div
          key={activeScene}
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="max-w-6xl mx-auto"
        >
          <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
            {/* Header */}
            <div className="bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 p-8 text-white text-center">
              <div className="flex items-center justify-center gap-4 mb-4">
                <Icon size={48} />
                <span className="text-6xl">{currentScene.visual}</span>
              </div>
              <h3 className="text-3xl font-bold mb-2">{currentScene.title}</h3>
              <p className="text-xl opacity-90">{currentScene.description}</p>
            </div>

            {/* Scene Content */}
            <div className="p-8">
              {/* Setting Description */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="mb-8"
              >
                <div className="flex items-start gap-4 p-6 bg-gradient-to-r from-purple-50 to-pink-50 rounded-2xl border-l-4 border-purple-400">
                  <Eye className="text-purple-600 mt-1 flex-shrink-0" size={24} />
                  <div>
                    <h4 className="font-bold text-gray-900 mb-2 text-lg">Scena</h4>
                    <p className="text-gray-700 text-lg leading-relaxed">{currentScene.scene}</p>
                  </div>
                </div>
              </motion.div>

              {/* Dialogue */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="mb-8"
              >
                <div className="flex items-start gap-4 p-6 bg-gradient-to-r from-green-50 to-blue-50 rounded-2xl border-l-4 border-green-400">
                  <Ear className="text-green-600 mt-1 flex-shrink-0" size={24} />
                  <div>
                    <h4 className="font-bold text-gray-900 mb-2 text-lg">Słyszysz</h4>
                    <blockquote className="text-gray-700 text-lg italic leading-relaxed">
                      {currentScene.dialogue}
                    </blockquote>
                  </div>
                </div>
              </motion.div>

              {/* Emotional Response */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7 }}
                className="mb-8"
              >
                <div className="flex items-start gap-4 p-6 bg-gradient-to-r from-pink-50 to-red-50 rounded-2xl border-l-4 border-pink-400">
                  <Heart className="text-pink-600 mt-1 flex-shrink-0" size={24} />
                  <div>
                    <h4 className="font-bold text-gray-900 mb-2 text-lg">Czujesz</h4>
                    <p className="text-gray-700 text-lg leading-relaxed font-semibold">{currentScene.emotion}</p>
                  </div>
                </div>
              </motion.div>

              {/* Sensory Details */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.9 }}
                className="mb-8"
              >
                <h4 className="font-bold text-gray-900 mb-4 text-lg flex items-center gap-2">
                  <Brain className="text-blue-600" size={24} />
                  Wszystkie zmysły mówią Ci:
                </h4>
                <div className="grid md:grid-cols-2 gap-4">
                  {currentScene.sensory_details.map((detail, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 1 + index * 0.1 }}
                      className="flex items-start gap-3 p-4 bg-gradient-to-r from-yellow-50 to-orange-50 rounded-xl"
                    >
                      <div className="w-2 h-2 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-gray-700 leading-relaxed">{detail}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>

        {/* Reality Check */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="mt-16 text-center"
        >
          <div className="bg-gradient-to-r from-purple-900 to-pink-900 text-white rounded-3xl p-12 max-w-5xl mx-auto shadow-2xl">
            <h3 className="text-3xl md:text-4xl font-bold mb-6">
              To nie jest fantazja
            </h3>
            <p className="text-xl mb-8 opacity-90 leading-relaxed">
              To jest <span className="font-bold text-yellow-300">przyszłość tysięcy polskich rodzin</span>, które już podjęły tę decyzję.
              <br />
              Jedyna różnica między nimi a Tobą to <span className="font-bold text-yellow-300">jeden klik</span>.
            </p>

            {/* Success Stories Preview */}
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              {[
                { name: 'Anna K.', result: '92%', before: 'płacz każdego dnia', after: 'uśmiech i pewność siebie' },
                { name: 'Tomek N.', result: '87%', before: 'dwójki z matematyki', after: 'najlepszy w klasie' },
                { name: 'Magda W.', result: '89%', before: '3000 zł na korepetycje', after: 'oszczędności i spokój' }
              ].map((story, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.2 + index * 0.2 }}
                  className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20"
                >
                  <div className="text-2xl font-bold text-yellow-300 mb-1">{story.result}</div>
                  <div className="text-sm font-semibold mb-2">{story.name}</div>
                  <div className="text-xs opacity-80">
                    <div className="text-red-200">Przed: {story.before}</div>
                    <div className="text-green-200">Po: {story.after}</div>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1.5 }}
              className="space-y-4"
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-yellow-400 to-orange-500 text-purple-900 font-bold py-4 px-8 rounded-full text-lg shadow-lg hover:shadow-xl transition-all duration-300 inline-flex items-center gap-2"
              >
                <Heart className="text-red-600" size={24} />
                Sprawiam, że ta wizja stanie się rzeczywistością
                <Star size={24} className="text-yellow-600" />
              </motion.button>
              
              <p className="text-sm text-white/70 max-w-2xl mx-auto">
                Za 30 dni możesz patrzeć na te słowa i wiedzieć, że była to najlepsza decyzja w Twoim życiu.
                <br />
                <span className="font-semibold text-yellow-300">Lub żałować, że nie podjęłaś jej dziś.</span>
              </p>
            </motion.div>
          </div>
        </motion.div>

        {/* Progress Indicator */}
        <div className="flex justify-center mt-8">
          <div className="flex gap-2">
            {visualizationScenes.map((_, index) => (
              <div
                key={index}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === activeScene
                    ? 'bg-gradient-to-r from-purple-500 to-pink-500 scale-125'
                    : index < activeScene
                    ? 'bg-green-400'
                    : 'bg-gray-300'
                }`}
              />
            ))}
          </div>
        </div>
      </div>

    </section>
  );
};

export default SensoryBenefits;
