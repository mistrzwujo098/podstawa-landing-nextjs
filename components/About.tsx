'use client'

import React from 'react';
import { motion } from 'framer-motion';

const About: React.FC = () => {
  const achievements = [
    '🎓 Stypendystka Stypendium Ministra Nauki i Szkolnictwa Wyższego',
    '🏆 Otrzymałam w 2021, 2022, 2023, 2024 i 2025 roku I miejsce w Opolu w plebiscycie Orły Edukacji',
    '🎬 Twórca kanału na YouTube „Skuteczne Korepetycje” z ponad 13 mln wyświetleń filmów',
    '👟 Pasjonatka sportów (w 2020 roku przebiegłam Nocny Maraton Warszawski)',
    '❤️ Uczniowie mówią, że potrafię tłumaczyć skomplikowane rzeczy w prosty i logiczny sposób'
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Kim ja w ogóle jestem?
          </h2>
          <p className="text-xl text-gray-600">
            Zaufało mi już ponad 24 000 uczniów i się nie zawiedli!
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-4"
          >
            {achievements.map((achievement, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="bg-paulina-bg-purple rounded-lg p-4 shadow-md"
              >
                <p className="text-gray-800">{achievement}</p>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <img
              src="https://paulinaodmatematyki.com/wp-content/uploads/2024/12/Paulina-od-Matematyki-2-1.webp"
              alt="Paulina od Matematyki"
              className="rounded-xl shadow-xl w-full"
            />
            <div className="absolute -bottom-6 -left-6 bg-paulina-accent text-white p-4 rounded-lg shadow-lg">
              <p className="font-bold text-2xl">13M+</p>
              <p className="text-sm">wyświetleń na YouTube</p>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12 text-center"
        >
          <h3 className="text-2xl font-bold text-gray-900 mb-4">A tutaj mnie widzieli:</h3>
          <div className="flex flex-wrap justify-center gap-4 text-gray-600">
            <span>TVP Opole</span>
            <span>•</span>
            <span>Forbes Women</span>
            <span>•</span>
            <span>Pytanie na śniadanie</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
