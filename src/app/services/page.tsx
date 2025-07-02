'use client';

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import {
  Code,
  Smartphone,
  Brain,
  Globe,
  Server,
  ShoppingCart,
  ArrowRight,
  CheckCircle
} from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

export default function ServicesPage() {
  const services = [
    {
      icon: Code,
      title: 'Веб-розробка',
      description: 'Створення сучасних веб-сайтів та додатків',
      features: [
        'Адаптивний дизайн',
        'SEO-оптимізація',
        'Швидкодія',
        'Безпека'
      ],
      technologies: ['React', 'Next.js', 'TypeScript', 'Node.js'],
      image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=600&h=400&fit=crop&crop=center'
    },
    {
      icon: Smartphone,
      title: 'Мобільна розробка',
      description: 'Розробка мобільних додатків для всіх платформ',
      features: [
        'iOS та Android',
        'React Native',
        'Flutter',
        'Нативна розробка'
      ],
      technologies: ['React Native', 'Flutter', 'Swift', 'Kotlin'],
      image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=600&h=400&fit=crop&crop=center'
    },
    {
      icon: Brain,
      title: 'AI-рішення',
      description: 'Впровадження штучного інтелекту у ваш бізнес',
      features: [
        'Машинне навчання',
        'Обробка природної мови',
        'Комп\'ютерний зір',
        'Автоматизація процесів'
      ],
      technologies: ['Python', 'TensorFlow', 'PyTorch', 'OpenAI API'],
      image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=600&h=400&fit=crop&crop=center'
    },
    {
      icon: Globe,
      title: 'DevOps і Хмарні рішення',
      description: 'Налаштування інфраструктури та деплой',
      features: [
        'AWS, Azure, GCP',
        'Docker, Kubernetes',
        'CI/CD pipeline',
        'Моніторинг'
      ],
      technologies: ['AWS', 'Docker', 'Kubernetes', 'Terraform'],
      image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=600&h=400&fit=crop&crop=center'
    },
    {
      icon: Server,
      title: 'Backend розробка',
      description: 'Надійні серверні рішення та API',
      features: [
        'REST та GraphQL API',
        'Бази даних',
        'Мікросервіси',
        'Безпека'
      ],
      technologies: ['Node.js', 'Python', 'PostgreSQL', 'MongoDB'],
      image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=600&h=400&fit=crop&crop=center'
    },
    {
      icon: ShoppingCart,
      title: 'E-commerce рішення',
      description: 'Інтернет-магазини та платформи продажів',
      features: [
        'Інтернет-магазини',
        'Системи оплати',
        'Управління товарами',
        'Аналітика'
      ],
      technologies: ['Shopify', 'WooCommerce', 'Magento', 'Custom'],
      image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop&crop=center'
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
              Наші послуги
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Повний спектр IT-послуг для вашого бізнесу - від ідеї до реалізації
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100"
              >
                <div className="relative h-48">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                  <div className="absolute bottom-4 left-4">
                    <service.icon className="h-12 w-12 text-white" />
                  </div>
                </div>

                <div className="p-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {service.description}
                  </p>

                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-gray-900 mb-3">
                      Що включено:
                    </h4>
                    <div className="grid grid-cols-2 gap-2">
                      {service.features.map((feature) => (
                        <div key={feature} className="flex items-center space-x-2">
                          <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
                          <span className="text-sm text-gray-600">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-gray-900 mb-3">
                      Технології:
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {service.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 bg-blue-100 text-blue-700 text-xs font-medium rounded-full"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <Button className="w-full bg-blue-600 hover:bg-blue-700" asChild>
                    <Link href="/contact">
                      Обговорити проект
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
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
              Як ми працюємо
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Наш процес розробки забезпечує якість та своєчасність виконання
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { step: '01', title: 'Аналіз', description: 'Досліджуємо ваші потреби та цілі' },
              { step: '02', title: 'Планування', description: 'Створюємо детальний план проекту' },
              { step: '03', title: 'Розробка', description: 'Втілюємо ідеї в реальність' },
              { step: '04', title: 'Запуск', description: 'Тестуємо та запускаємо проект' },
            ].map((item, index) => (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                  {item.step}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-600">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Готові розпочати ваш проект?
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Отримайте безкоштовну консультацію та оцінку вартості вашого проекту
            </p>
            <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100" asChild>
              <Link href="/contact">
                Зв'язатися з нами
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
