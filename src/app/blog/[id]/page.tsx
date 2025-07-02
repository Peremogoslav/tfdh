'use client';

import { motion } from 'framer-motion';
import { Calendar, Clock, User, ArrowLeft, Share2, Eye } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import Image from 'next/image';
import { useParams } from 'next/navigation';

export default function BlogArticlePage() {
  const params = useParams();
  const articleId = params.id;

  // Mock data - в реальном проекте это будет загружаться из API или базы данных
  const articles = {
    '1': {
      id: 1,
      title: 'Майбутнє веб-розробки: тренди 2025 року',
      content: `
        <p class="text-lg text-gray-600 mb-6">Веб-розробка постійно еволюціонує, і 2025 рік обіцяє принести революційні зміни в індустрію. У цій статті ми розглянемо ключові тренди, які формуватимуть майбутнє веб-технологій.</p>

        <h2 class="text-2xl font-bold text-gray-900 mb-4 mt-8">1. Штучний інтелект у веб-розробці</h2>
        <p class="text-gray-700 mb-4">AI інтеграція стає не просто трендом, а необхідністю. Від персоналізованого контенту до автоматичної оптимізації коду - штучний інтелект змінює спосіб створення веб-додатків.</p>

        <h3 class="text-xl font-semibold text-gray-900 mb-3 mt-6">Ключові напрямки AI в веб-розробці:</h3>
        <ul class="list-disc list-inside text-gray-700 mb-4 space-y-1">
          <li>Автоматична генерація коду та компонентів</li>
          <li>Персоналізація користувацького досвіду</li>
          <li>Автоматичне тестування та виявлення помилок</li>
          <li>Оптимізація продуктивності в реальному часі</li>
        </ul>

        <h2 class="text-2xl font-bold text-gray-900 mb-4 mt-8">2. Progressive Web Apps (PWA) 2.0</h2>
        <p class="text-gray-700 mb-4">PWA технології продовжують розвиватися, пропонуючи досвід, який максимально наближений до нативних додатків. Нові API та можливості браузерів відкривають нові горизонти.</p>

        <h2 class="text-2xl font-bold text-gray-900 mb-4 mt-8">3. Server-Side Technologies</h2>
        <p class="text-gray-700 mb-4">Next.js, Nuxt.js та інші full-stack фреймворки стають стандартом для розробки сучасних веб-додатків. Server-side rendering та статична генерація забезпечують оптимальну продуктивність.</p>

        <h2 class="text-2xl font-bold text-gray-900 mb-4 mt-8">4. Micro-Frontend Architecture</h2>
        <p class="text-gray-700 mb-4">Архітектура мікро-фронтенду дозволяє командам працювати незалежно над різними частинами додатка, покращуючи масштабованість та швидкість розробки.</p>

        <h2 class="text-2xl font-bold text-gray-900 mb-4 mt-8">Висновки</h2>
        <p class="text-gray-700 mb-4">2025 рік буде роком, коли веб-розробка стане ще більш інтелігентною, швидкою та орієнтованою на користувача. Компанії, які адаптуються до цих трендів, отримають значну конкурентну перевагу.</p>
      `,
      image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800&h=400&fit=crop&crop=center',
      author: 'Марія Коваленко',
      date: '15 грудня 2024',
      readTime: '5 хв читання',
      category: 'Веб-розробка',
      views: '1,234'
    },
    '2': {
      id: 2,
      title: 'Як штучний інтелект змінює бізнес-процеси',
      content: `
        <p class="text-lg text-gray-600 mb-6">Штучний інтелект вже не є науковою фантастикою - це реальність, яка трансформує бізнес-процеси в різних галузях. Розглянемо, як AI впливає на сучасні компанії.</p>

        <h2 class="text-2xl font-bold text-gray-900 mb-4 mt-8">Автоматизація рутинних завдань</h2>
        <p class="text-gray-700 mb-4">AI дозволяє автоматизувати багато рутинних завдань, звільняючи час співробітників для більш творчої та стратегічної роботи.</p>

        <h2 class="text-2xl font-bold text-gray-900 mb-4 mt-8">Аналіз великих даних</h2>
        <p class="text-gray-700 mb-4">Машинне навчання дає можливість аналізувати величезні обсяги даних та виявляти закономірності, недоступні людському аналізу.</p>

        <h2 class="text-2xl font-bold text-gray-900 mb-4 mt-8">Персоналізація клієнтського досвіду</h2>
        <p class="text-gray-700 mb-4">AI дозволяє створювати унікальний досвід для кожного клієнта, підвищуючи лояльність та конверсію.</p>
      `,
      image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=400&fit=crop&crop=center',
      author: 'Олександр Петренко',
      date: '10 грудня 2024',
      readTime: '7 хв читання',
      category: 'Штучний інтелект',
      views: '987'
    },
    // Добавим больше статей для других ID
  };

  const article = articles[articleId as keyof typeof articles];

  if (!article) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Стаття не знайдена</h1>
          <Link href="/blog">
            <Button>Повернутися до блогу</Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      {/* Article Header */}
      <section className="relative bg-gradient-to-br from-blue-50 via-white to-purple-50 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Link href="/blog" className="inline-flex items-center text-blue-600 hover:text-blue-700 mb-6 group">
              <ArrowLeft className="h-4 w-4 mr-2 group-hover:-translate-x-1 transition-transform" />
              Назад до блогу
            </Link>

            <div className="mb-6">
              <span className="px-4 py-2 bg-blue-600 text-white text-sm font-medium rounded-full">
                {article.category}
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              {article.title}
            </h1>

            <div className="flex flex-wrap items-center gap-6 text-gray-600 mb-8">
              <div className="flex items-center space-x-2">
                <User className="h-4 w-4" />
                <span>{article.author}</span>
              </div>
              <div className="flex items-center space-x-2">
                <Calendar className="h-4 w-4" />
                <span>{article.date}</span>
              </div>
              <div className="flex items-center space-x-2">
                <Clock className="h-4 w-4" />
                <span>{article.readTime}</span>
              </div>
              <div className="flex items-center space-x-2">
                <Eye className="h-4 w-4" />
                <span>{article.views} переглядів</span>
              </div>
            </div>

            <div className="flex gap-4">
              <Button size="sm" variant="outline" className="gap-2">
                <Share2 className="h-4 w-4" />
                Поділитися
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Article Image */}
      <section className="py-8">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative h-96 rounded-2xl overflow-hidden shadow-2xl"
          >
            <Image
              src={article.image}
              alt={article.title}
              fill
              className="object-cover"
            />
          </motion.div>
        </div>
      </section>

      {/* Article Content */}
      <section className="py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="prose prose-lg max-w-none"
          >
            <p className="text-lg text-gray-600 mb-6">
              Веб-розробка постійно еволюціонує, і 2025 рік обіцяє принести революційні зміни в індустрію.
              У цій статті ми розглянемо ключові тренди, які формуватимуть майбутнє веб-технологій.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mb-4 mt-8">1. Штучний інтелект у веб-розробці</h2>
            <p className="text-gray-700 mb-4">
              AI інтеграція стає не просто трендом, а необхідністю. Від персоналізованого контенту до
              автоматичної оптимізації коду - штучний інтелект змінює спосіб створення веб-додатків.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mb-3 mt-6">Ключові напрямки AI в веб-розробці:</h3>
            <ul className="list-disc list-inside text-gray-700 mb-4 space-y-1">
              <li>Автоматична генерація коду та компонентів</li>
              <li>Персоналізація користувацького досвіду</li>
              <li>Автоматичне тестування та виявлення помилок</li>
              <li>Оптимізація продуктивності в реальному часі</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mb-4 mt-8">2. Progressive Web Apps (PWA) 2.0</h2>
            <p className="text-gray-700 mb-4">
              PWA технології продовжують розвиватися, пропонуючи досвід, який максимально наближений до
              нативних додатків. Нові API та можливості браузерів відкривають нові горизонти.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mb-4 mt-8">3. Server-Side Technologies</h2>
            <p className="text-gray-700 mb-4">
              Next.js, Nuxt.js та інші full-stack фреймворки стають стандартом для розробки сучасних
              веб-додатків. Server-side rendering та статична генерація забезпечують оптимальну продуктивність.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mb-4 mt-8">4. Micro-Frontend Architecture</h2>
            <p className="text-gray-700 mb-4">
              Архітектура мікро-фронтенду дозволяє командам працювати незалежно над різними частинами
              додатка, покращуючи масштабованість та швидкість розробки.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mb-4 mt-8">Висновки</h2>
            <p className="text-gray-700 mb-4">
              2025 рік буде роком, коли веб-розробка стане ще більш інтелігентною, швидкою та
              орієнтованою на користувача. Компанії, які адаптуються до цих трендів, отримають значну конкурентну перевагу.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Author Bio */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl p-8 shadow-lg"
          >
            <div className="flex items-start space-x-4">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center">
                <User className="h-8 w-8 text-blue-600" />
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {article.author}
                </h3>
                <p className="text-gray-600 mb-4">
                  Експерт у галузі веб-технологій з понад 8 років досвіду. Спеціалізується на React, Node.js та хмарних рішеннях.
                </p>
                <div className="flex space-x-3">
                  <Button size="sm" variant="outline">Всі статті автора</Button>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Related Articles */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Схожі статті</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Мок данные для похожих статей */}
            {[
              {
                title: 'React vs Vue: що обрати в 2025?',
                excerpt: 'Порівняння популярних JavaScript фреймворків',
                category: 'Веб-розробка',
                readTime: '4 хв читання'
              },
              {
                title: 'TypeScript best practices',
                excerpt: 'Найкращі практики роботи з TypeScript',
                category: 'Веб-розробка',
                readTime: '6 хв читання'
              }
            ].map((relatedArticle) => (
              <motion.div
                key={relatedArticle.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <span className="px-3 py-1 bg-blue-100 text-blue-700 text-sm font-medium rounded-full">
                  {relatedArticle.category}
                </span>
                <h3 className="text-xl font-bold text-gray-900 mt-4 mb-2">
                  {relatedArticle.title}
                </h3>
                <p className="text-gray-600 mb-4">
                  {relatedArticle.excerpt}
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500">{relatedArticle.readTime}</span>
                  <Button size="sm" variant="outline">Читати</Button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
