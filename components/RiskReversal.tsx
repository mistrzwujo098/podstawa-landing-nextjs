'use client'

import React from 'react';
import { motion } from 'framer-motion';
import { Shield, CheckCircle, Heart, RefreshCcw } from 'lucide-react';

const RiskReversal: React.FC = () => {
  const guaranteeFeatures = [
    {
      icon: RefreshCcw,
      title: 'Pełen zwrot pieniędzy',
      description: 'Przez 30 dni od zakupu możesz poprosić o zwrot - bez pytań, bez komplikacji'
    },
    {
      icon: Heart,
      title: 'Bez presji',
      description: 'Nie musisz decydować dzisiaj czy kurs pasuje - masz miesiąc na przetestowanie'
    },
    {
      icon: Shield,
      title: 'Zero ryzyka dla Ciebie',
      description: 'Całe ryzyko biorę na siebie. Nie stracisz ani złotówki jeśli nie będziesz zadowolony'
    }
  ];

  return (
    <section id="guarantee" className="py-16 bg-gradient-to-b from-white to-paulina-bg-purple">
      <div className="max-w-5xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="inline-block mb-6">
            <div className="w-24 h-24 mx-auto rounded-full bg-gradient-to-br from-green-400 to-green-600 flex items-center justify-center shadow-2xl">
              <Shield className="text-white" size={48} />
            </div>
          </div>

          <h2 className="text-3xl md:text-4xl font-bold text-paulina-primary mb-4">
            30-Dniowa Gwarancja "Spokoju"
          </h2>
          <p className="text-xl text-gray-600">
            Nie musisz decydować dzisiaj. Masz miesiąc na przetestowanie.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-gradient-to-br from-green-50 to-green-100 border-4 border-green-500 rounded-3xl p-8 md:p-12 shadow-2xl"
        >
          {/* Main Promise */}
          <div className="text-center mb-10">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              Jak działa gwarancja?
            </h3>
            <p className="text-lg text-gray-700 mb-6">
              Kupujesz kurs. Przez 30 dni testujesz. Jeśli nie podoba się - piszesz:{' '}
              <span className="font-bold text-paulina-primary">"Chcę zwrot"</span>.
            </p>
            <div className="bg-white rounded-xl p-6 inline-block shadow-lg">
              <p className="text-3xl font-bold text-green-600 mb-2">
                Dostajesz pieniądze z powrotem.
              </p>
              <p className="text-lg text-gray-600">
                Bez pytań. Bez komplikacji. Bez tłumaczenia się.
              </p>
            </div>
          </div>

          {/* Features Grid */}
          <div className="grid md:grid-cols-3 gap-6 mb-10">
            {guaranteeFeatures.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                className="bg-white rounded-xl p-6 text-center shadow-md"
              >
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br from-green-400 to-green-600 flex items-center justify-center">
                  <feature.icon className="text-white" size={28} />
                </div>
                <h4 className="font-bold text-lg text-paulina-primary mb-2">
                  {feature.title}
                </h4>
                <p className="text-sm text-gray-600">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Why This Guarantee */}
          <div className="bg-white rounded-xl p-6 mb-8">
            <h4 className="font-bold text-xl text-paulina-primary mb-4 flex items-center gap-2">
              <CheckCircle className="text-green-600" size={24} />
              Dlaczego oferuję tę gwarancję?
            </h4>
            <p className="text-gray-700 mb-3">
              Szczerze: Wiem, że kurs działa. <span className="font-bold">98% rodziców poleca kurs znajomym.</span> Zwroty zdarzają się rzadko ({"<"}2%).
            </p>
            <p className="text-gray-700">
              Ci co zwracają i tak by nie korzystali z kursu - oszczędzam czas na wsparciu dla niezadowolonych, a Ty masz spokój że nie ryzykujesz pieniędzy.
            </p>
          </div>

          {/* What Happens */}
          <div className="bg-paulina-primary text-white rounded-xl p-6">
            <h4 className="font-bold text-xl mb-4">Co się stanie jeśli poprosisz o zwrot?</h4>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <span className="text-2xl">1️⃣</span>
                <p>Piszesz maila: "Chcę zwrot środków" (nie musisz tłumaczyć dlaczego)</p>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-2xl">2️⃣</span>
                <p>W ciągu 24-48h dostajesz potwierdzenie</p>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-2xl">3️⃣</span>
                <p>W ciągu 3-5 dni roboczych pieniądze wracają na Twoje konto</p>
              </div>
            </div>
          </div>

          {/* Bottom CTA */}
          <div className="text-center mt-8">
            <p className="text-2xl font-bold text-gray-900 mb-2">
              Ty nie ryzykujesz NIC.
            </p>
            <p className="text-lg text-gray-700">
              Całe ryzyko biorę na siebie.
            </p>
          </div>
        </motion.div>

        {/* Trust Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center mt-8"
        >
          <div className="inline-flex items-center gap-3 bg-white rounded-full px-6 py-3 shadow-lg">
            <Shield className="text-green-600" size={24} />
            <span className="font-semibold text-gray-900">Gwarancja honorowana od 2019 roku · 0 problemów</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default RiskReversal;
