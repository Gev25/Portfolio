import type { Project, Service, WhyItem } from '../types'

export const PROJECTS: Project[] = [
  {
    id: '1',
    title: 'CRM для автосервиса',
    description: 'Полноценная система управления клиентами, записями и финансами для автосервиса. Интеграция с Telegram-ботом для уведомлений клиентов.',
    tech: ['React', 'Node.js', 'PostgreSQL', 'Telegram Bot'],
    link: '#',
    category: 'Web App',
  },
  {
    id: '2',
    title: 'Telegram-бот для доставки',
    description: 'Бот для курьерской службы с автоматическим распределением заказов, трекингом и статистикой. Обрабатывает 500+ заказов/день.',
    tech: ['Python', 'Telegram Bot', 'Redis', 'PostgreSQL'],
    link: '#',
    category: 'Telegram Bot',
  },
  {
    id: '3',
    title: 'SaaS платформа аналитики',
    description: 'Дашборд для анализа продаж e-commerce магазинов с визуализацией данных, отчётами и экспортом в PDF.',
    tech: ['React', 'TypeScript', 'Node.js', 'Chart.js'],
    link: '#',
    category: 'Web App',
  },
  {
    id: '4',
    title: 'Бот для онлайн-школы',
    description: 'Автоматизация записи на курсы, рассылка материалов, прием оплат через ЮKassa. Рост конверсии на 35%.',
    tech: ['Python', 'Telegram Bot', 'MongoDB'],
    link: '#',
    category: 'Telegram Bot',
  },
  {
    id: '5',
    title: 'Маркетплейс недвижимости',
    description: 'Платформа для агентства недвижимости с фильтрацией, картой объектов и личным кабинетом агента.',
    tech: ['React', 'Node.js', 'PostgreSQL'],
    link: '#',
    category: 'Web App',
  },
]

export const SERVICES: Service[] = [
  {
    icon: '🤖',
    title: 'Telegram-боты',
    description: 'Автоматизирую продажи, поддержку и внутренние процессы. Бот работает 24/7 без вашего участия.',
    features: [
      'Приём оплат (ЮKassa, Stripe)',
      'Интеграция с CRM',
      'Рассылки и воронки',
      'Административная панель',
    ],
    accent: 'cyan',
  },
  {
    icon: '🌐',
    title: 'Веб-приложения',
    description: 'Разрабатываю SaaS, CRM, дашборды и лендинги, которые решают реальные задачи бизнеса.',
    features: [
      'React + TypeScript frontend',
      'REST/GraphQL API',
      'Авторизация и безопасность',
      'Деплой и CI/CD',
    ],
    accent: 'violet',
  },
  {
    icon: '🔧',
    title: 'Доработка проектов',
    description: 'Починю, ускорю или расширю ваш существующий проект. Разберусь в любом легаси-коде.',
    features: [
      'Рефакторинг и оптимизация',
      'Добавление новых фич',
      'Исправление багов',
      'Code review',
    ],
    accent: 'emerald',
  },
]

export const WHY_ITEMS: WhyItem[] = [
  {
    icon: '⚡',
    title: 'Сроки = закон',
    description: 'Работаю по чёткому ТЗ с дедлайнами. Ни одного просроченного проекта за 3 года практики.',
  },
  {
    icon: '🧹',
    title: 'Код без хаоса',
    description: 'Пишу так, чтобы через год любой разработчик мог разобраться. Документация — обязательно.',
  },
  {
    icon: '🛡️',
    title: 'Поддержка после сдачи',
    description: 'Бесплатная поддержка 30 дней после релиза. Не пропадаю после оплаты.',
  },
  {
    icon: '🎯',
    title: 'Фокус на результат',
    description: 'Мне важно не "сделать задачу", а чтобы ваш бизнес получил ощутимую пользу от продукта.',
  },
]

export const SKILLS = [
  { name: 'React / TypeScript', icon: '⚛️', level: 90 },
  { name: 'Node.js / Express', icon: '🟢', level: 85 },
  { name: 'Python / FastAPI', icon: '🐍', level: 80 },
  { name: 'Telegram Bots', icon: '📱', level: 92 },
  { name: 'PostgreSQL / MongoDB', icon: '🗄️', level: 78 },
  { name: 'Docker / CI/CD', icon: '🐳', level: 72 },
]

export const NAV_LINKS = [
  { label: 'Обо мне', href: '#about' },
  { label: 'Услуги', href: '#services' },
  { label: 'Проекты', href: '#projects' },
  { label: 'Почему я', href: '#why' },
  { label: 'Контакты', href: '#contact' },
]
