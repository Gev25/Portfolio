import { motion } from 'framer-motion'
import { useInView } from '../../hooks/useInView'
import { SectionLabel } from '../ui/SectionLabel'
import { SKILLS } from '../../data'

export function About() {
  const { ref, inView } = useInView()

  const container = {
    hidden: {},
    show: { transition: { staggerChildren: 0.08 } },
  }
  const item = {
    hidden: { opacity: 0, y: 24 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } },
  }

  return (
    <section id="about" className="py-24 lg:py-32">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Left: text */}
          <motion.div
            ref={ref}
            variants={container}
            initial="hidden"
            animate={inView ? 'show' : 'hidden'}
          >
            <motion.div variants={item}>
              <SectionLabel>Обо мне</SectionLabel>
            </motion.div>

            <motion.h2
              variants={item}
              className="font-display text-4xl lg:text-5xl font-bold text-white mt-2 mb-6 leading-tight"
            >
              Я решаю задачи бизнеса,{' '}
              <span className="text-gradient-cyan">а не просто пишу код</span>
            </motion.h2>

            <motion.p variants={item} className="text-white/60 text-lg leading-relaxed mb-4">
              3 года разрабатываю продукты для малого и среднего бизнеса. Работал с командами в Армении, России и Европе.
            </motion.p>

            <motion.p variants={item} className="text-white/60 leading-relaxed mb-4">
              Специализируюсь на двух направлениях: <span className="text-white/90">веб-приложениях</span> (CRM, SaaS, дашборды) и{' '}
              <span className="text-white/90">Telegram-ботах</span> для автоматизации продаж и поддержки. В обоих случаях моя цель — чтобы продукт работал на вас, а не требовал постоянного внимания.
            </motion.p>

            <motion.p variants={item} className="text-white/50 leading-relaxed text-sm">
              Не беру проекты, в которые не верю. Если вижу, что задача решается проще — скажу честно.
            </motion.p>
          </motion.div>

          {/* Right: skills grid */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="grid grid-cols-2 gap-3">
              {SKILLS.map((skill, i) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={inView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.4, delay: 0.4 + i * 0.07 }}
                  className="p-4 rounded-xl bg-bg-card border border-border-subtle hover:border-border transition-colors duration-300 group"
                >
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-xl">{skill.icon}</span>
                    <span className="text-sm font-medium text-white/80 group-hover:text-white transition-colors">
                      {skill.name}
                    </span>
                  </div>
                  {/* Skill bar */}
                  <div className="h-1 bg-white/5 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={inView ? { width: `${skill.level}%` } : {}}
                      transition={{ duration: 0.8, delay: 0.6 + i * 0.07, ease: 'easeOut' }}
                      className="h-full bg-gradient-to-r from-accent-cyan to-accent-violet rounded-full"
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  )
}
