'use client';

import { motion } from 'framer-motion';
import { Target, Eye, Heart, Shield, Users, TrendingUp } from 'lucide-react';
import Image from 'next/image';

export default function AboutPage() {

  const values = [
    {
      icon: Target,
      title: 'Якість',
      description: 'Ми ніколи не йдемо на компроміси з якістю та завжди прагнемо досконалості в кожному проекті.',
    },
    {
      icon: TrendingUp,
      title: 'Інновації',
      description: 'Постійно вивчаємо нові технології та впроваджуємо найсучасніші рішення.',
    },
    {
      icon: Users,
      title: 'Партнерство',
      description: 'Будуємо довгострокові партнерські відносини, засновані на довірі та взаємній повазі.',
    },
    {
      icon: Shield,
      title: 'Надійність',
      description: 'Завжди дотримуємось термінів та гарантуємо надійність наших рішень.',
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-50 via-white to-purple-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Про InnovTech Solutions
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Ваш надійний партнер в цифровій трансформації
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="relative">
                <Image
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&h=400&fit=crop&crop=center"
                  alt="Team collaboration"
                  width={600}
                  height={400}
                  className="rounded-2xl shadow-lg"
                />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div>
                <div className="flex items-center mb-4">
                  <Target className="h-8 w-8 text-blue-600 mr-3" />
                  <h2 className="text-3xl font-bold text-gray-900">
                    Наша місія
                  </h2>
                </div>
                <p className="text-gray-600 text-lg leading-relaxed">
                  Допомагаємо українським та міжнародним компаніям впроваджувати найсучасніші технологічні рішення для досягнення бізнес-цілей
                </p>
              </div>

              <div>
                <div className="flex items-center mb-4">
                  <Eye className="h-8 w-8 text-purple-600 mr-3" />
                  <h2 className="text-3xl font-bold text-gray-900">
                    Наше бачення
                  </h2>
                </div>
                <p className="text-gray-600 text-lg leading-relaxed">
                  Стати провідною IT-компанією в Україні, яка створює інноваційні продукти світового рівня
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Наші цінності
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 text-center"
              >
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <value.icon className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {value.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Наша історія
              </h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  InnovTech Solutions була заснована в 2019 році групою досвідчених розробників,
                  які мали спільну мету - створювати інноваційні технологічні рішення для українського та міжнародного ринку.
                </p>
                <p>
                  За 5 років роботи ми виросли від невеликої команди з 3 осіб до повноцінної IT-компанії
                  з більш ніж 20 експертами. Ми успішно реалізували понад 150 проектів для клієнтів
                  з різних галузей - від стартапів до великих корпорацій.
                </p>
                <p>
                  Сьогодні ми продовжуємо розвиватися, освоюючи нові технології та розширюючи
                  спектр наших послуг, завжди залишаючись вірними нашим основним цінностям.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <Image
                src="https://images.unsplash.com/photo-1557804506-669a67965ba0?w=600&h=400&fit=crop&crop=center"
                alt="Company growth"
                width={600}
                height={400}
                className="rounded-2xl shadow-lg"
              />
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
