'use client'

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, ChevronUp, ChevronLeft, ChevronRight } from 'lucide-react';

const CourseContent: React.FC = () => {
  const [expandedModule, setExpandedModule] = useState<number | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
  const platformImages = [
    'https://paulinaodmatematyki.com/wp-content/uploads/2024/07/CleanShot-2024-07-23-at-17.32.47.png',
    'https://paulinaodmatematyki.com/wp-content/uploads/2024/12/Paulina-od-Matematyki-5-2048x1300.webp',
    'https://paulinaodmatematyki.com/wp-content/uploads/2024/12/11fe3aae32f1e20994207d29fef4679257073333.webp',
    'https://paulinaodmatematyki.com/wp-content/uploads/2024/12/Paulina-od-Matematyki-10.webp'
  ];

  const modules = [
    {
      title: 'MODUŁ 1. PODSTAWOWA WIEDZA',
      content: `- nauczysz się nazewnictwa i podziału liczb, dowiesz się jak odróżnić liczby pierwsze od złożonych oraz czy ułamki okresowe też należą do zbioru liczb wymiernych
- przypomnisz sobie jakie są cechy podzielności liczb
- przećwiczysz kolejność wykonywania działań
- dowiesz się jak wykonywać WSZYSTKIE działania na przedziałach liczbowych oraz na zbiorach
- w końcu BĘDZIESZ PEWNY kiedy zastosować wzory skróconego mnożenia, a także dowiesz się jak je zauważać
- poznasz rewelacyjny sposób jak szybko liczyć zadania z procentami, jak układać proporcje oraz dowiesz się czym się różni procent od punktu procentowego
- nauczysz się jak BŁYSKAWICZNIE zamieniać jakiekolwiek jednostki długości, pola, objętości oraz wagi
- przypomnisz sobie jak wykonuje się wszystkie działania na ułamkach zwykłych i dziesiętnych
- poznasz metodę na szybką zamianę ułamków dziesiętnych okresowych na zwykłe`
    },
    {
      title: 'MODUŁ 2. DZIAŁANIA NA PIERWIASTKACH i POTĘGACH',
      content: `- uporządkujesz sobie wiedzę w zakresie wykonywania działań na pierwiastkach, dowiesz się kiedy pierwiastki możemy do siebie dodawać, czy wszystkie pierwiastki możemy ze sobą mnożyć lub dzielić
- zobaczysz jak w najszybszy sposób potęgować pierwiastki
- pokażę Ci sposoby na obliczanie skomplikowanych działań z pierwiastkami
- w końcu nauczysz się bezbłędnie wyłączać czynnik przed znak pierwiastka i będziesz wiedział kiedy warto to zrobić
- poznasz dwie metody na usuwanie niewymierności z mianownika, również w trudnych, podchwytliwych przykładach
- zobaczysz jakie działania można wykonywać na potęgach aby maksymalnie skrócić i uprościć obliczenia oraz zobaczysz gdzie te wzory znajdziesz na maturze w tablicach maturalnych
- poznasz sposób na to jak dodawać i odejmować liczby o tej samej podstawie potęgi, a tym samym jak wykonać zadania z dowodzenia w tym zakresie
- pokażę Ci jak łatwo zamienić pierwiastek na potęgę i nauczysz się rozpoznawać kiedy warto to zrobić
- zobaczysz jak rozpatrywać przypadki w działaniach z wartością bezwzględną
- zobaczysz dlaczego zapis to NIE notacja wykładnicza`
    },
    {
      title: 'MODUŁ 3. LOGARYTMY',
      content: `- dowiesz się jak działa logarytm
- nauczysz się jak dodawać i odejmować logarytmy oraz jak dodawać liczby do logarytmów
- dowiesz się co zrobić w przypadku, kiedy w działaniu napotkasz na logarytm znajdujący się w wykładniku potęgi
- omówimy rzadko spotykane zadania maturalne z logarytmów, jakie do tej pory pojawiły się na maturze`
    },
    {
      title: 'MODUŁ 4. RÓWNANIA I NIERÓWNOŚCI LINIOWE ORAZ WYMIERNE',
      content: `- otrzymasz instrukcję jak rozwiązywać równania liniowe (również te trudne) oraz nauczysz się z niej korzystać
- nauczysz się rozwiązywać równania wymierne
- dowiesz się kiedy MUSISZ liczyć dziedzinę i jakie 3 warunki musisz wtedy wziąć pod uwagę
- pokażę Ci jak rozwiązywać nierówności liniowe i wyczulę na to, gdzie łatwo popełnić błędy
- zobaczysz jak rozłożyć równania i nierówności z wartością bezwzględną na dwa przypadki oraz dowiesz się, jak w niektórych przypadkach bez obliczeń podać prawidłową odpowiedź`
    },
    {
      title: 'MODUŁ 5. FUNKCJE',
      content: `- nauczysz się odczytywać własności z każdego wykresu funkcji
- pokażę Ci najczęstsze „haczyki" występujące w zadaniach maturalnych
- będziesz potrafił obliczać argument dla danej wartości funkcji i na odwrót
- dowiesz się jak przekształcać i przesuwać wykresy funkcji, kiedy i w jaki sposób należy odbijać wykresy funkcji
- nauczysz się przekształcać wzory funkcji według podanych założeń
- dowiesz się jak szkicować na wykresie funkcje „klamrowe", jak odczytywać ich własności i gdzie najczęściej popełnia się błędy w obliczaniu ich miejsc zerowych`
    },
    {
      title: 'MODUŁ 6. FUNKCJA LINIOWA',
      content: `- otrzymasz „ściągę" na której będą przedstawione WSZYSTKIE kluczowe informacje o funkcji liniowej „w pigułce"
- pokażę Ci BŁYSKAWICZNY sposób na szkicowanie funkcji liniowej bez sporządzania tabelki
- dowiesz się jak nie używając wzorów sprawdzić, czy proste są prostopadłe lub równoległe i jak je tworzyć
- poznasz wzór, którego nie ma w tablicach maturalnych przyśpieszający liczenie wzoru prostych przechodzących przez dane punkty
- dowiesz się jak łatwo obliczyć kąt nachylenia prostej do osi OX
- pokażę Ci jak w prosty sposób rozwiązywać niejednokrotnie skomplikowane zadania z parametrami
- rozwiążesz najbardziej typowe zadania z funkcji liniowej, które najczęściej pojawiają się na maturze oraz te rzadko spotykane`
    },
    {
      title: 'MODUŁ 7. UKŁADY RÓWNAŃ',
      content: `- dowiesz się jak rozwiązywać układy równań metodą podstawiania
- pokażę Ci jak działa metoda przeciwnych współczynników i jak jej używać
- zobaczysz jak zinterpretować wyniki układu równań na układzie współrzędnych
- dowiesz się jakie zadania z użyciem układów równań występują na egzaminie maturalnym`
    },
    {
      title: 'MODUŁ 8. FUNKCJA KWADRATOWA',
      content: `- dowiesz się dlaczego jest to najważniejszy dział który MUSISZ mieć perfekcyjnie opanowany aby przystąpić do matury
- otrzymasz „ściągę" zawierającą wszystkie informacje i wzory z działu funkcja kwadratowa – również te, których nie ma w tablicach maturalnych
- nauczysz się bezbłędnie odczytywać własności funkcji kwadratowej z każdej postaci funkcji
- pokażę Ci jak najprościej zamieniać postacie funkcji z ogólnej na kanoniczną i iloczynową i na odwrót
- zobaczysz czym różnią się postacie: ogólna, kanoniczna i iloczynowa i jakie informacje możemy odczytać z każdego wzoru
- dokładnie omówimy zadanie wyznaczania wartości maksymalnej i minimalnej w przedziale, które jest jednym z „pewniaków" maturalnych
- nauczysz się BEZBŁĘDNIE układać warunki i założenia do rozwiązywania zadań z parametrem
- poznasz proste metody na rozwiązywanie równań o stopniach wyższych niż kwadratowe
- nauczysz się rozwiązywać nierówności kwadratowe, które są kolejnym „pewniakiem" maturalnym
- zobaczysz jak z równań i nierówności wymiernych przejść do równań kwadratowych i poprawnie je rozwiązać
- zobaczysz jakich wyjątkowych zadań możesz spodziewać się na maturze i jak je rozwiązać`
    },
    {
      title: 'MODUŁ 9. FUNKCJA WYKŁADNICZA I HOMOGRAFICZNA',
      content: `- pokażę ci jak poprawnie szkicować funkcję wykładniczą i homograficzną jak odczytuje się ich własności
- zobaczysz jakich błędów unikać w funkcji wykładniczej i homograficznej
- dowiesz się jak wyglądają zadania maturalne z kontekstem praktycznym, w który będziesz musiał zastosować wiedzę z funkcji wykładniczej lub homograficznej`
    },
    {
      title: 'MODUŁ 10. CIĄGI',
      content: `- dowiesz się czym jest ciąg i jakie mamy rodzaje ciągów
- pokażę Ci jak na podstawie wzoru dowieść czy jest to ciąg arytmetyczny czy geometryczny oraz jaka jest jego monotoniczność
- zobaczysz jak w o wiele prostszy sposób niż „szkolny" rozwiązywać zadania z ciągiem arytmetycznym i geometrycznym; GWARANTUJĘ Ci, że Ci się spodoba
- nauczysz się liczyć sumy ciągów w wielu niestandardowych zadaniach
- pokażę Ci prostszą wersję wzoru na 3 kolejne wyrazy w ciągu arytmetycznym i geometrycznym, nauczę Cię jego stosowania oraz zdradzę gdzie najłatwiej można popełnić błąd
- nauczysz się rozwiązywać zadania łączone, zawierające zarówno ciąg arytmetyczny jak i geometryczny punktowane na maturze za 4-5 punktów`
    },
    {
      title: 'MODUŁ 11. TRYGONOMETRIA',
      content: `- w końcu polubisz funkcje trygonometryczne:)
- pokażę Ci proste sposoby jak obliczać funkcje trygonometryczne dla dowolnych kątów – zarówno ostrych jak i rozwartych
- pokażę Ci jak zastosować trygonometrię do obliczeń w różnych figurach
- nauczysz się stosowania wzorów redukcyjnych
- otrzymasz „ściągę" z zależnościami trygonometrycznymi, które bardzo ułatwią Ci obliczenia
- pokażę Ci, jak obliczać pola i obwody różnych figur stosując funkcje trygonometryczne`
    },
    {
      title: 'MODUŁ 12. PLANIMETRIA',
      content: `- nauczysz się dostrzegać kąty wpisane i środkowe oraz stosować zależności jakie z tego faktu wynikają
- poznasz nazwy odpowiednich odcinków w okręgu oraz ich własności
- dowiesz się jak obliczać pole pierścienia kołowego
- zobaczysz jak stosować rzadko używane wzory z tablic maturalnych, które pozwolą Ci maksymalnie szybko obliczać zadania maturalne
- pokażę Ci WSZYSTKIE własności jakie przydadzą Ci się w zadaniach z trójkątem prostokątnym, równobocznym i równoramiennym
- nauczysz się na podstawie długości boków trójkąta określać, czy jest to trójkąt ostrokątny, rozwartokątny czy też prostokątny
- poznasz wzory i zależności, które zachodzą w trójkątach wpisanych w okrąg oraz w trójkątach opisanych na okręgach
- dowiesz się jak rozwiązywać z pozoru skomplikowane zadania z czworokątami, stosując wzory z tablic maturalnych
- dowiesz się jak zauważać podobieństwo trójkątów i wielokątów oraz jak je stosować w zadaniach
- poznasz wzory na obliczanie przekątnych sześciokąta i nauczysz się obliczać pola różnych wielokątów foremnych
- pokażę Ci jak łatwo zauważać pewne zależności w zadaniach na dowodzenie`
    },
    {
      title: 'MODUŁ 13. GEOMETRIA ANALITYCZNA',
      content: `- pokażę Ci krok po kroku jak stworzyć wzór prostej symetralnej do danego odcinka lub boku figury
- podam Ci wzór dzięki któremu o wiele łatwiej obliczysz wzór prostej przechodzącej przez dwa punkty niż licząc sposobem „szkolnym"
- zobaczysz jak liczy się punkt przecięcia dwóch prostych
- nauczysz się, jak w pamięci obliczać współrzędne punktu symetrycznego względem osi układu współrzędnych oraz początku układu współrzędnych
- pokażę Ci jak oblicza się zadania maturalne za 4-5 punktów z geometrii analitycznej`
    },
    {
      title: 'MODUŁ 14. BRYŁY',
      content: `- poznasz wzory na podstawie których szybko obliczysz ilości ścian, krawędzi i wierzchołków w graniastosłupach i ostrosłupach
- dowiesz się wszystko o obliczaniu objętości, pól, przekątnych i różnych odcinków w sześcianie
- nauczysz się obliczania pól, objętości i przekątnych w graniastosłupach
- dowiesz się jak wygląda czworościan oraz jakie są wzory na obliczanie jego pola całkowitego i objętości
- nauczysz się wyznaczać odpowiednie kąty i odcinki w ostrosłupach
- poznasz wzory na obliczanie różnych wielkości w walcach, stożkach i kulach
- będziesz potrafił stworzyć przekroje różnych brył i obliczać pola tych przekrojów
- nauczysz się rozwiązywać zadania maturalne z brył punktowane na 4-5 punktów`
    },
    {
      title: 'MODUŁ 15. STATYSTYKA, KOMBINATORYKA I RACHUNEK PRAWDOPODOBIEŃSTWA',
      content: `- pokażę, Ci jak obliczać średnią arytmetyczną, medianę i dominantę mając przedstawione dane w postaci tabeli lub diagramu
- dowiesz się jak i kiedy liczyć średnią ważoną
- nauczysz się co oznaczają dane wartości statystyczne i jak wykorzystać je w zadaniach maturalnych
- pokażę Ci kilka niezawodnych metod jakimi oblicza się zadania z kombinatoryki
- dowiesz się jak łatwo zrozumieć zadania z prawdopodobieństwa
- nauczysz się rozpoznawać zadania, w których możesz i w których opłaca się stosować metodę „drzewka"`
    },
  ];

  const additionalContent = [
    { icon: '🔴', title: 'Aplikacja na smartfony', description: 'Możesz przyjść z dowolnym zadaniem matematycznym z którym masz problem', value: '797 zł' },
    { icon: '🎬', title: 'Ponad 60 lekcji', description: 'W formie video, masz do nich dostęp cały czas, 24 godziny na dobę 7 dni w tygodniu.', value: '997 zł' },
    { icon: '📓', title: '2000+ zadań z rozwiązaniami', description: 'Strategicznie dopasowane, od podstaw do matury. 1000 obowiązkowych + 1000 dodatkowych dla ambitnych.', value: '200 zł' },
    { icon: '🛟', title: 'Grupa kursantów', description: 'W każdej chwili możesz zadać nurtujące Cię pytanie ANONIMOWO i szybko uzyskać odpowiedź.', value: '300 zł' },
    { icon: '❤️', title: '30-dniowa gwarancja zwrotu pieniędzy', description: 'Gwarancja 30-dniowa jest bezwarunkowa.', value: 'Bezcenne' },
    { icon: '🧠', title: 'Dla Rodziców!', description: 'Cykl pięciu spotkań o stresie dla Rodziców maturzystów z fantastyczną Panią psycholog', value: '500 zł' },
  ];

  return (
    <section id="course-content" className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Wszystko, co otrzymasz w kursie
          </h2>
          <p className="text-gray-600">(kliknij by rozwijać)</p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="space-y-4">
            {modules.map((module, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="bg-white rounded-lg shadow-md overflow-hidden"
              >
                <button
                  onClick={() => setExpandedModule(expandedModule === index ? null : index)}
                  className="w-full p-4 text-left flex items-center justify-between hover:bg-paulina-bg-purple transition-colors"
                >
                  <span className="font-semibold text-gray-800">{module.title}</span>
                  {expandedModule === index ? <ChevronUp /> : <ChevronDown />}
                </button>
                <AnimatePresence>
                  {expandedModule === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="px-4 pb-4"
                    >
                      <div className="text-gray-600 whitespace-pre-line">{module.content}</div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="relative">
              <img
                src={platformImages[currentImageIndex]}
                alt="Widok platformy kursu"
                className="rounded-xl shadow-xl w-full"
              />
              <button
                onClick={() => setCurrentImageIndex((prev) => (prev - 1 + platformImages.length) % platformImages.length)}
                className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/80 rounded-full p-2 shadow-lg hover:bg-white transition-colors"
              >
                <ChevronLeft size={24} />
              </button>
              <button
                onClick={() => setCurrentImageIndex((prev) => (prev + 1) % platformImages.length)}
                className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/80 rounded-full p-2 shadow-lg hover:bg-white transition-colors"
              >
                <ChevronRight size={24} />
              </button>
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                {platformImages.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentImageIndex(index)}
                    className={`w-2 h-2 rounded-full transition-all ${
                      index === currentImageIndex
                        ? 'bg-paulina-accent w-6'
                        : 'bg-white/60 hover:bg-white/80'
                    }`}
                  />
                ))}
              </div>
            </div>
            <p className="text-center mt-4 text-gray-600">
              Widok z wnętrza platformy do której dostajesz dostęp od razu po dołączeniu:
            </p>
            <p className="text-center mt-2 text-sm text-gray-500">
              👉 Kliknij strzałki lub kropki aby zobaczyć więcej zdjęć platformy
            </p>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-16"
        >
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
            Co jeszcze znajdę w kursie?
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {additionalContent.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="text-3xl mb-4">{item.icon}</div>
                <h4 className="font-bold text-lg mb-2 text-gray-900">{item.title}</h4>
                <p className="text-gray-600 mb-4">{item.description}</p>
                <p className="text-paulina-accent font-semibold">Wartość: {item.value}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CourseContent;
