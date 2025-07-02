'use client';

import { motion } from 'framer-motion';
import { Calendar, Clock, ArrowRight, User } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import Image from 'next/image';

export default function BlogPage() {
  const articles = [
    {
      id: 1,
      title: 'Майбутнє веб-розробки: тренди 2025 року',
      excerpt: 'Дослідження найактуальніших технологій та підходів у веб-розробці, які формуватимуть індустрію у наступному році.',
      image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=600&h=400&fit=crop&crop=center',
      author: 'Марія Коваленко',
      date: '15 грудня 2024',
      readTime: '5 хв читання',
      category: 'Веб-розробка',
      featured: true
    },
    {
      id: 2,
      title: 'Як штучний інтелект змінює бізнес-процеси',
      excerpt: 'Практичні приклади впровадження AI у різних галузях та їх вплив на ефективність компаній.',
      image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=600&h=400&fit=crop&crop=center',
      author: 'Олександр Петренко',
      date: '10 грудня 2024',
      readTime: '7 хв читання',
      category: 'Штучний інтелект',
      featured: true
    },
    {
      id: 3,
      title: 'Мобільні додатки: нативна розробка vs React Native',
      excerpt: 'Порівняння різних підходів до створення мобільних додатків та рекомендації щодо вибору технології.',
      image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=600&h=400&fit=crop&crop=center',
      author: 'Сергій Бондаренко',
      date: '5 грудня 2024',
      readTime: '6 хв читання',
      category: 'Мобільна розробка',
      featured: false
    },
    {
      id: 4,
      title: 'DevOps практики для стартапів',
      excerpt: 'Основні принципи DevOps, які допомагають молодим компаніям швидко масштабуватися та підтримувати якість.',
      image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=600&h=400&fit=crop&crop=center',
      author: 'Віктор Мельник',
      date: '28 листопада 2024',
      readTime: '8 хв читання',
      category: 'DevOps',
      featured: false
    },
    {
      id: 5,
      title: 'UX/UI дизайн: створення інтуїтивних інтерфейсів',
      excerpt: 'Принципи проектування користувацьких інтерфейсів, які покращують користувацький досвід.',
      image: 'https://images.unsplash.com/photo-1559028006-448665bd7c7f?w=600&h=400&fit=crop&crop=center',
      author: 'Анна Сидорова',
      date: '22 листопада 2024',
      readTime: '4 хв читання',
      category: 'Дизайн',
      featured: false
    },
    {
      id: 6,
      title: 'Безпека в сучасних веб-додатках',
      excerpt: 'Огляд найпоширеніших загроз безпеки та методів захисту веб-додатків від кібератак.',
      image: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=600&h=400&fit=crop&crop=center',
      author: 'Дмитро Іваненко',
      date: '15 листопада 2024',
      readTime: '9 хв читання',
      category: 'Безпека',
      featured: false
    },
  ];

  const categories = [
    'Всі категорії',
    'Веб-розробка',
    'Мобільна розробка',
    'Штучний інтелект',
    'DevOps',
    'Дизайн',
    'Безпека'
  ];

  const featuredArticles = articles.filter(article => article.featured);
  const regularArticles = articles.filter(article => !article.featured);

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
              Блог
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Останні новини та інсайти з світу технологій від наших експертів
            </p>
          </motion.div>
        </div>
      </section>

      {/* Featured Articles */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-8">
              Рекомендовані статті
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
            {featuredArticles.map((article, index) => (
              <motion.article
                key={article.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group"
              >
                <div className="relative h-64">
                  <Image
                    src={article.image}
                    alt={article.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-blue-600 text-white text-sm font-medium rounded-full">
                      {article.category}
                    </span>
                  </div>
                </div>

                <div className="p-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                    {article.title}
                  </h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {article.excerpt}
                  </p>

                  <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                    <div className="flex items-center space-x-4">
                      <div className="flex items-center space-x-1">
                        <User className="h-4 w-4" />
                        <span>{article.author}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Calendar className="h-4 w-4" />
                        <span>{article.date}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Clock className="h-4 w-4" />
                        <span>{article.readTime}</span>
                      </div>
                    </div>
                  </div>

                  <Button variant="outline" className="group" asChild>
                    <Link href={`/blog/${article.id}`}>
                      Читати далі
                      <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </Button>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* All Articles */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-8">
              Всі статті
            </h2>

            {/* Categories Filter */}
            <div className="flex flex-wrap gap-2 mb-8">
              {categories.map((category) => (
                <button
                  key={category}
                  className="px-4 py-2 bg-white text-gray-700 border border-gray-200 rounded-full hover:bg-blue-50 hover:border-blue-300 transition-colors"
                >
                  {category}
                </button>
              ))}
            </div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {regularArticles.map((article, index) => (
              <motion.article
                key={article.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group"
              >
                <div className="relative h-48">
                  <Image
                    src={article.image}
                    alt={article.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-3 left-3">
                    <span className="px-2 py-1 bg-blue-600 text-white text-xs font-medium rounded-full">
                      {article.category}
                    </span>
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors line-clamp-2">
                    {article.title}
                  </h3>
                  <p className="text-gray-600 mb-4 text-sm leading-relaxed line-clamp-3">
                    {article.excerpt}
                  </p>

                  <div className="flex items-center justify-between text-xs text-gray-500 mb-4">
                    <span>{article.author}</span>
                    <span>{article.date}</span>
                  </div>

                  <Button size="sm" variant="outline" className="w-full group" asChild>
                    <Link href={`/blog/${article.id}`}>
                      Читати далі
                      <ArrowRight className="ml-2 h-3 w-3 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </Button>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Підпишіться на наші новини
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Отримуйте найсвіжіші статті та інсайти прямо на свою пошту
            </p>
            <div className="max-w-md mx-auto flex gap-4">
              <input
                type="email"
                placeholder="Ваш email"
                className="flex-1 px-4 py-3 rounded-lg border-0 text-gray-900"
              />
              <Button className="bg-white text-blue-600 hover:bg-gray-100 px-6">
                Підписатися
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
