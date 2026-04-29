# Gevor Abrahamyan — Portfolio Landing Page

Продающий одностраничный сайт для фриланс-разработчика.  
**Стек:** React 18 + Vite + TypeScript + Tailwind CSS + Framer Motion

---

## 📁 Структура проекта

```
portfolio/
├── public/
│   └── favicon.svg
├── src/
│   ├── components/
│   │   ├── sections/          # Секции лендинга
│   │   │   ├── Navbar.tsx     # Sticky навигация со ScrollSpy
│   │   │   ├── Hero.tsx       # Первый экран
│   │   │   ├── About.tsx      # Обо мне + навыки
│   │   │   ├── Services.tsx   # Карточки услуг
│   │   │   ├── Projects.tsx   # Портфолио с фильтром
│   │   │   ├── WhyMe.tsx      # Почему я
│   │   │   ├── Contact.tsx    # Форма + контакты
│   │   │   └── Footer.tsx
│   │   └── ui/                # Переиспользуемые UI компоненты
│   │       ├── AnimatedText.tsx
│   │       ├── Badge.tsx
│   │       └── SectionLabel.tsx
│   ├── data/
│   │   └── index.ts           # Весь контент (проекты, услуги и т.д.)
│   ├── hooks/
│   │   ├── useInView.ts       # IntersectionObserver хук
│   │   └── useScrollSpy.ts    # Активная ссылка в навбаре
│   ├── types/
│   │   └── index.ts           # TypeScript интерфейсы
│   ├── App.tsx                # Сборка + lazy loading секций
│   ├── main.tsx
│   └── index.css              # Tailwind + кастомные стили
├── index.html                 # SEO meta теги
├── tailwind.config.js
├── vite.config.ts
└── vercel.json
```

---

## 🚀 Запуск локально

```bash
# 1. Установить зависимости
npm install

# 2. Запустить dev-сервер
npm run dev

# Откроется на http://localhost:5173
```

---

## 🏗️ Production билд

```bash
npm run build
# Артефакты — в папке /dist

# Превью билда
npm run preview
```

---

## ☁️ Деплой на Vercel

### Вариант 1 — через Vercel CLI (рекомендуется)

```bash
# Установить CLI
npm i -g vercel

# Деплой (следуй инструкциям в терминале)
vercel

# Production деплой
vercel --prod
```

### Вариант 2 — через GitHub + Vercel Dashboard

1. Залить проект в GitHub репозиторий
2. Открыть [vercel.com](https://vercel.com) → New Project
3. Выбрать репозиторий
4. Настройки уже определятся автоматически (Vite проект):
   - **Framework Preset:** Vite
   - **Build Command:** `npm run build`
   - **Output Directory:** `dist`
5. Нажать **Deploy** — сайт будет готов через ~1 минуту

### Настройка домена

В Vercel Dashboard → Settings → Domains → добавить свой домен.

---

## ✏️ Кастомизация

### Изменить контент
Весь контент (проекты, услуги, скиллы) — в файле `src/data/index.ts`

### Изменить контакты
В `src/components/sections/Contact.tsx` — заменить `href` ссылки на Telegram и Email.

### Подключить форму
Форма отправки в `Contact.tsx` готова к интеграции. Варианты:
- **[Formspree](https://formspree.io)** — бесплатно, просто: замени `fetch` на их endpoint
- **EmailJS** — отправка прямо из браузера без бэкенда
- **Telegram Bot API** — отправлять форму себе в Telegram (самый удобный вариант)

### Цвета и шрифты
В `tailwind.config.js` → секция `theme.extend`

---

## ⚡ Оптимизации

- **Lazy loading** всех секций кроме Hero через `React.lazy + Suspense`
- **Code splitting** через Vite rollupOptions (vendor, motion в отдельных chunks)
- **CSS-only** анимации где возможно
- **IntersectionObserver** вместо scroll listeners для анимаций появления
- **Passive event listeners** для scroll events
