import { motion } from 'framer-motion'
import { ArrowDown, Send, FolderOpen } from 'lucide-react'
import { AnimatedText } from '../ui/AnimatedText'

/**
 * Hero section — first screen, must immediately hook the visitor
 */
export function Hero() {
  const scrollTo = (href: string) =>
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col justify-center overflow-hidden dot-grid"
    >
      {/* Atmospheric background blobs */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent-cyan/8 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-accent-violet/8 rounded-full blur-[100px]" />
      </div>

      <div className="relative max-w-6xl mx-auto px-6 pt-24 pb-20">
        <div className="max-w-4xl">

          {/* Status badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/20 mb-8"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400" />
            </span>
            <span className="text-sm text-emerald-400 font-medium">Открыт для новых проектов</span>
          </motion.div>

          {/* Name */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="font-mono text-sm text-white/40 mb-3 tracking-wider"
          >
            👋 Привет, я
          </motion.p>

          {/* Main heading */}
          <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl font-extrabold leading-[1.05] mb-4">
            <AnimatedText
              text="Gevor Abrahamyan"
              className="text-white block"
              delay={0.25}
            />
            <span className="block mt-2">
              <AnimatedText
                text="Full Stack &"
                className="text-white/30"
                delay={0.5}
              />
              {' '}
              <AnimatedText
                text="Telegram Dev"
                className="text-gradient-cyan"
                delay={0.65}
              />
            </span>
          </h1>

          {/* Subheadline — benefit-focused */}
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="mt-6 text-lg sm:text-xl text-white/50 max-w-2xl leading-relaxed"
          >
            Превращаю идеи в рабочие продукты — веб-приложения и Telegram-боты, которые{' '}
            <span className="text-white/80">приносят клиентов</span> и{' '}
            <span className="text-white/80">автоматизируют рутину</span>
          </motion.p>

          {/* Stats row */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.1 }}
            className="flex flex-wrap gap-6 mt-8 mb-10"
          >
            {[
              { value: '30+', label: 'проектов сдано' },
              { value: '3 года', label: 'коммерческого опыта' },
              { value: '100%', label: 'в срок' },
            ].map(stat => (
              <div key={stat.label} className="flex items-baseline gap-2">
                <span className="font-display font-bold text-2xl text-accent-cyan">{stat.value}</span>
                <span className="text-sm text-white/40">{stat.label}</span>
              </div>
            ))}
          </motion.div>

          {/* CTA buttons */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.25 }}
            className="flex flex-wrap gap-3"
          >
            <button
              onClick={() => scrollTo('#contact')}
              className="group flex items-center gap-2 px-6 py-3.5 rounded-xl bg-accent-cyan text-bg font-semibold text-sm hover:bg-accent-cyan/90 transition-all duration-200 shadow-lg shadow-accent-cyan/20"
            >
              <Send size={16} className="group-hover:translate-x-0.5 transition-transform" />
              Связаться со мной
            </button>
            <button
              onClick={() => scrollTo('#projects')}
              className="group flex items-center gap-2 px-6 py-3.5 rounded-xl bg-white/5 border border-white/10 text-white/80 font-semibold text-sm hover:bg-white/10 hover:text-white transition-all duration-200"
            >
              <FolderOpen size={16} />
              Посмотреть проекты
            </button>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.button
          onClick={() => scrollTo('#about')}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 0.5 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/20 hover:text-white/40 transition-colors"
          aria-label="Scroll down"
        >
          <span className="text-xs font-mono tracking-widest uppercase">Scroll</span>
          <motion.div
            animate={{ y: [0, 5, 0] }}
            transition={{ repeat: Infinity, duration: 1.5, ease: 'easeInOut' }}
          >
            <ArrowDown size={16} />
          </motion.div>
        </motion.button>
      </div>
    </section>
  )
}
