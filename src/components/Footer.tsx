'use client';

import Link from 'next/link';
import { Github, Linkedin, Twitter, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {

  const navigation = [
    { name: 'Головна', href: "/" },
    { name: 'Про нас', href: "/about" },
    { name: 'Послуги', href: "/services" },
    { name: 'Команда', href: "/team" },
    { name: 'Блог', href: "/blog" },
    { name: 'Контакти', href: "/contact" },
  ];

  const socialLinks = [
    { name: 'LinkedIn', icon: Linkedin, href: '#' },
    { name: 'Twitter', icon: Twitter, href: '#' },
  ];

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
            <div className="text-2xl font-bold mb-4">InnovTech Solutions</div>
            <p className="text-gray-300 mb-6 max-w-md">
              InnovTech Solutions - ваш надійний партнер у створенні інноваційних IT-рішень
            </p>
            <div className="space-y-2">
              <div className="flex items-center space-x-2 text-sm text-gray-300">
                <MapPin className="h-4 w-4" />
                <span>Київ, Україна</span>
              </div>
              <div className="flex items-center space-x-2 text-sm text-gray-300">
                <Phone className="h-4 w-4" />
                <span>+380 44 123 45 67</span>
              </div>
              <div className="flex items-center space-x-2 text-sm text-gray-300">
                <Mail className="h-4 w-4" />
                <span>hello@innovtech.ua</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Швидкі посилання</h3>
            <ul className="space-y-2">
              {navigation.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Слідкуйте за нами</h3>
            <div className="flex space-x-4">
              {socialLinks.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-gray-400 hover:text-white transition-colors"
                  aria-label={item.name}
                >
                  <item.icon className="h-6 w-6" />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © {new Date().getFullYear()} InnovTech Solutions. Всі права захищені.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
