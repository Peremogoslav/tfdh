'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Button } from '@/components/ui/button';
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Send,
  CheckCircle,
  MessageSquare,
  AlertCircle
} from 'lucide-react';
import Image from 'next/image';

interface FormData {
  name: string;
  email: string;
  company?: string;
  subject: string;
  message: string;
  budget: string;
  timeline: string;
}

export default function ContactPage() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm<FormData>();

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    // Симуляція відправки форми
    await new Promise(resolve => setTimeout(resolve, 1500));
    setIsSubmitted(true);
    setIsSubmitting(false);
    reset();
    setTimeout(() => setIsSubmitted(false), 5000);
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: 'Адреса офісу',
      details: ['', 'Київ, Україна, 01001'],
    },
    {
      icon: Phone,
      title: 'Телефон',
      details: ['+380 44 123 45 67', '+380 67 890 12 34'],
    },
    {
      icon: Mail,
      title: 'Email',
      details: ['hello@innovtech.ua', 'support@innovtech.ua'],
    },
    {
      icon: Clock,
      title: 'Години роботи',
      details: ['Пн-Пт: 9:00 - 18:00', 'Сб-Нд: За домовленістю'],
    },
  ];

  const services = [
    'Веб-розробка',
    'Мобільна розробка',
    'AI-рішення',
    'DevOps і хмарні рішення',
    'Backend розробка',
    'E-commerce рішення',
    'Консультації',
    'Інше'
  ];

  const budgetRanges = [
    'До $5,000',
    '$5,000 - $15,000',
    '$15,000 - $50,000',
    '$50,000 - $100,000',
    'Більше $100,000',
    'Обговорюється'
  ];

  const timelineOptions = [
    'До 1 місяця',
    '1-3 місяці',
    '3-6 місяців',
    '6-12 місяців',
    'Більше року',
    'Обговорюється'
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
              Зв'яжіться з нами
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Готові обговорити ваш проект? Ми тут, щоб допомогти втілити ваші ідеї в реальність
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {contactInfo.map((info, index) => (
              <motion.div
                key={info.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center p-6 bg-gray-50 rounded-2xl hover:bg-blue-50 transition-colors"
              >
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <info.icon className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  {info.title}
                </h3>
                <div className="space-y-1">
                  {info.details.map((detail) => (
                    <p key={detail} className="text-gray-600 text-sm">
                      {detail}
                    </p>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Map */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <div className="flex items-center mb-6">
                  <MessageSquare className="h-6 w-6 text-blue-600 mr-3" />
                  <h2 className="text-2xl font-bold text-gray-900">
                    Розкажіть про ваш проект
                  </h2>
                </div>

                {isSubmitted ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-8"
                  >
                    <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-4" />
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      Дякуємо за звернення!
                    </h3>
                    <p className="text-gray-600">
                      Ми зв'яжемося з вами найближчим часом
                    </p>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Ім'я *
                        </label>
                        <input
                          type="text"
                          {...register('name', {
                            required: 'Імя є обов\'язковим полем',
                            minLength: { value: 2, message: 'Імя повинно містити мінімум 2 символи' }
                          })}
                          className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors ${
                            errors.name ? 'border-red-300 bg-red-50' : 'border-gray-300'
                          }`}
                          placeholder="Ваше ім'я"
                        />
                        {errors.name && (
                          <div className="flex items-center mt-1 text-red-600 text-sm">
                            <AlertCircle className="h-4 w-4 mr-1" />
                            {errors.name.message}
                          </div>
                        )}
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Email *
                        </label>
                        <input
                          type="email"
                          {...register('email', {
                            required: 'Email є обов\'язковим полем',
                            pattern: {
                              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                              message: 'Введіть коректний email'
                            }
                          })}
                          className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors ${
                            errors.email ? 'border-red-300 bg-red-50' : 'border-gray-300'
                          }`}
                          placeholder="your@email.com"
                        />
                        {errors.email && (
                          <div className="flex items-center mt-1 text-red-600 text-sm">
                            <AlertCircle className="h-4 w-4 mr-1" />
                            {errors.email.message}
                          </div>
                        )}
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Компанія
                        </label>
                        <input
                          type="text"
                          {...register('company')}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                          placeholder="Назва компанії"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Тип проекту *
                        </label>
                        <select
                          {...register('subject', { required: 'Оберіть тип проекту' })}
                          className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors ${
                            errors.subject ? 'border-red-300 bg-red-50' : 'border-gray-300'
                          }`}
                        >
                          <option value="">Оберіть послугу</option>
                          {services.map((service) => (
                            <option key={service} value={service}>
                              {service}
                            </option>
                          ))}
                        </select>
                        {errors.subject && (
                          <div className="flex items-center mt-1 text-red-600 text-sm">
                            <AlertCircle className="h-4 w-4 mr-1" />
                            {errors.subject.message}
                          </div>
                        )}
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Бюджет *
                        </label>
                        <select
                          {...register('budget', { required: 'Оберіть бюджет проекту' })}
                          className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors ${
                            errors.budget ? 'border-red-300 bg-red-50' : 'border-gray-300'
                          }`}
                        >
                          <option value="">Оберіть бюджет</option>
                          {budgetRanges.map((range) => (
                            <option key={range} value={range}>
                              {range}
                            </option>
                          ))}
                        </select>
                        {errors.budget && (
                          <div className="flex items-center mt-1 text-red-600 text-sm">
                            <AlertCircle className="h-4 w-4 mr-1" />
                            {errors.budget.message}
                          </div>
                        )}
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Терміни *
                        </label>
                        <select
                          {...register('timeline', { required: 'Оберіть терміни виконання' })}
                          className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors ${
                            errors.timeline ? 'border-red-300 bg-red-50' : 'border-gray-300'
                          }`}
                        >
                          <option value="">Оберіть терміни</option>
                          {timelineOptions.map((option) => (
                            <option key={option} value={option}>
                              {option}
                            </option>
                          ))}
                        </select>
                        {errors.timeline && (
                          <div className="flex items-center mt-1 text-red-600 text-sm">
                            <AlertCircle className="h-4 w-4 mr-1" />
                            {errors.timeline.message}
                          </div>
                        )}
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Повідомлення *
                      </label>
                      <textarea
                        {...register('message', {
                          required: 'Повідомлення є обов\'язковим полем',
                          minLength: { value: 10, message: 'Повідомлення повинно містити мінімум 10 символів' }
                        })}
                        rows={5}
                        className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors ${
                          errors.message ? 'border-red-300 bg-red-50' : 'border-gray-300'
                        }`}
                        placeholder="Розкажіть детальніше про ваш проект..."
                      />
                      {errors.message && (
                        <div className="flex items-center mt-1 text-red-600 text-sm">
                          <AlertCircle className="h-4 w-4 mr-1" />
                          {errors.message.message}
                        </div>
                      )}
                    </div>

                    <Button
                      type="submit"
                      className="w-full"
                      size="lg"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        <>
                          <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2" />
                          Надсилання...
                        </>
                      ) : (
                        <>
                          Надіслати повідомлення
                          <Send className="ml-2 h-5 w-5" />
                        </>
                      )}
                    </Button>
                  </form>
                )}
              </div>
            </motion.div>

            {/* Office Image & Info */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  Візьміть участь у безкоштовній консультації
                </h3>
                <p className="text-gray-600 mb-6">
                  Наша команда експертів готова обговорити ваш проект та запропонувати найкращі рішення.
                  Консультація абсолютно безкоштовна і без зобов'язань.
                </p>
                <ul className="space-y-3">
                  {[
                    'Аналіз ваших потреб та цілей',
                    'Рекомендації щодо технологій',
                    'Оцінка термінів та бюджету',
                    'Відповіді на всі ваші питання'
                  ].map((item) => (
                    <li key={item} className="flex items-center space-x-3">
                      <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-white rounded-2xl overflow-hidden shadow-lg">
                <Image
                  src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=600&h=300&fit=crop&crop=center"
                  alt="Our office"
                  width={600}
                  height={300}
                  className="w-full h-64 object-cover"
                />
                <div className="p-6">
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">
                    Наш офіс у Києві
                  </h4>
                  <p className="text-gray-600 text-sm">
                    Завітайте до нас у сучасний офіс в центрі Києва. Ми завжди раді зустрітися особисто
                    та обговорити ваші проекти за чашкою кави.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
