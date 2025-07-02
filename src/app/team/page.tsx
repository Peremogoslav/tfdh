'use client';

import { motion } from 'framer-motion';
import { Github, Linkedin, Twitter, Mail } from 'lucide-react';
import Image from 'next/image';

export default function TeamPage() {
  const team = [
    {
      name: 'Олександр Петренко',
      position: 'CEO & Засновник',
      bio: 'Досвідчений технологічний лідер з 10+ років в IT. Спеціалізується на стратегічному плануванні та управлінні командами.',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face',
      social: {
        linkedin: '#',
        github: '#',
        twitter: '#',
        email: 'alex@innovtech.ua'
      },
      skills: ['Leadership', 'Strategy', 'Business Development']
    },
    {
      name: 'Марія Коваленко',
      position: 'CTO & Lead Developer',
      bio: 'Експерт у веб-технологіях з глибокими знаннями React, Node.js та хмарних рішень. Веде технічну команду.',
      image: 'https://images.unsplash.com/photo-1494790108755-2616b332c5cc?w=400&h=400&fit=crop&crop=face',
      social: {
        linkedin: '#',
        github: '#',
        twitter: '#',
        email: 'maria@innovtech.ua'
      },
      skills: ['React', 'Node.js', 'TypeScript', 'AWS']
    },
    {
      name: 'Дмитро Іваненко',
      position: 'Senior Full-Stack Developer',
      bio: 'Універсальний розробник з досвідом створення складних веб-додатків та мобільних рішень.',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face',
      social: {
        linkedin: '#',
        github: '#',
        twitter: '#',
        email: 'dmitry@innovtech.ua'
      },
      skills: ['Full-Stack', 'React', 'Python', 'Database Design']
    },
    {
      name: 'Анна Сидорова',
      position: 'UI/UX Designer',
      bio: 'Креативний дизайнер з пристрастю до створення інтуїтивних та красивих користувацьких інтерфейсів.',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&crop=face',
      social: {
        linkedin: '#',
        github: '#',
        twitter: '#',
        email: 'anna@innovtech.ua'
      },
      skills: ['UI/UX', 'Figma', 'Prototyping', 'User Research']
    },
    {
      name: 'Віктор Мельник',
      position: 'DevOps Engineer',
      bio: 'Спеціаліст з автоматизації та інфраструктури, забезпечує надійність та масштабованість наших рішень.',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop&crop=face',
      social: {
        linkedin: '#',
        github: '#',
        twitter: '#',
        email: 'viktor@innovtech.ua'
      },
      skills: ['DevOps', 'Docker', 'Kubernetes', 'CI/CD']
    },
    {
      name: 'Ольга Шевченко',
      position: 'Project Manager',
      bio: 'Досвідчений проект-менеджер, який забезпечує своєчасну та якісну реалізацію проектів.',
      image: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=400&h=400&fit=crop&crop=face',
      social: {
        linkedin: '#',
        github: '#',
        twitter: '#',
        email: 'olga@innovtech.ua'
      },
      skills: ['Project Management', 'Agile', 'Scrum', 'Communication']
    },
    {
      name: 'Сергій Бондаренко',
      position: 'Mobile Developer',
      bio: 'Спеціаліст з розробки мобільних додатків для iOS та Android, працює з React Native та нативними технологіями.',
      image: 'https://images.unsplash.com/photo-1520813792240-56fc4a3765a7?w=400&h=400&fit=crop&crop=face',
      social: {
        linkedin: '#',
        github: '#',
        twitter: '#',
        email: 'sergey@innovtech.ua'
      },
      skills: ['React Native', 'iOS', 'Android', 'Flutter']
    },
    {
      name: 'Тетяна Кравченко',
      position: 'QA Engineer',
      bio: 'Експерт з забезпечення якості, відповідальна за тестування та контроль якості всіх наших продуктів.',
      image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&h=400&fit=crop&crop=face',
      social: {
        linkedin: '#',
        github: '#',
        twitter: '#',
        email: 'tetyana@innovtech.ua'
      },
      skills: ['QA Testing', 'Automation', 'Manual Testing', 'Bug Tracking']
    },
  ];

  const stats = [
    { number: '20+', label: 'Членів команди' },
    { number: '8+', label: 'Років досвіду' },
    { number: '150+', label: 'Успішних проектів' },
    { number: '98%', label: 'Задоволеність клієнтів' },
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
              Наша команда
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Досвідчені професіонали, які створюють майбутнє технологій
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="text-3xl md:text-4xl font-bold text-blue-600 mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-600 text-sm md:text-base">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Grid */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 group"
              >
                <div className="relative mb-6">
                  <div className="w-24 h-24 mx-auto rounded-full overflow-hidden">
                    <Image
                      src={member.image}
                      alt={member.name}
                      width={96}
                      height={96}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                </div>

                <div className="text-center mb-4">
                  <h3 className="text-xl font-bold text-gray-900 mb-1">
                    {member.name}
                  </h3>
                  <p className="text-blue-600 font-medium mb-3">
                    {member.position}
                  </p>
                  <p className="text-gray-600 text-sm leading-relaxed mb-4">
                    {member.bio}
                  </p>
                </div>

                <div className="mb-4">
                  <div className="flex flex-wrap gap-1 justify-center">
                    {member.skills.map((skill) => (
                      <span
                        key={skill}
                        className="px-2 py-1 bg-blue-100 text-blue-700 text-xs font-medium rounded-full"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex justify-center space-x-3">
                  <a
                    href={member.social.linkedin}
                    className="p-2 text-gray-400 hover:text-blue-600 transition-colors"
                    aria-label="LinkedIn"
                  >
                    <Linkedin className="h-4 w-4" />
                  </a>
                  <a
                    href={member.social.github}
                    className="p-2 text-gray-400 hover:text-gray-900 transition-colors"
                    aria-label="GitHub"
                  >
                    <Github className="h-4 w-4" />
                  </a>
                  <a
                    href={member.social.twitter}
                    className="p-2 text-gray-400 hover:text-blue-400 transition-colors"
                    aria-label="Twitter"
                  >
                    <Twitter className="h-4 w-4" />
                  </a>
                  <a
                    href={`mailto:${member.social.email}`}
                    className="p-2 text-gray-400 hover:text-red-500 transition-colors"
                    aria-label="Email"
                  >
                    <Mail className="h-4 w-4" />
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Culture Section */}
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
                Наша культура
              </h2>
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    Інновації та творчість
                  </h3>
                  <p className="text-gray-600">
                    Ми заохочуємо експерименти та нові ідеї, створюючи середовище для професійного зростання.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    Командна робота
                  </h3>
                  <p className="text-gray-600">
                    Наша сила - у співпраці. Кожен член команди важливий для досягнення спільних цілей.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    Безперервне навчання
                  </h3>
                  <p className="text-gray-600">
                    Ми інвестуємо в розвиток наших співробітників, забезпечуючи доступ до найновіших технологій.
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <Image
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=600&h=400&fit=crop&crop=center"
                alt="Team collaboration"
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
