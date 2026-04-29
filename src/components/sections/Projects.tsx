import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ExternalLink } from 'lucide-react'
import { useInView } from '../../hooks/useInView'
import { SectionLabel } from '../ui/SectionLabel'
import { Badge } from '../ui/Badge'
import { PROJECTS } from '../../data'

const ALL = 'Все'

/**
 * Map tech names to badge variants
 */
function getTechVariant(tech: string): 'cyan' | 'violet' | 'emerald' | 'default' {
  if (['React', 'TypeScript'].includes(tech)) return 'cyan'
  if (['Python', 'FastAPI'].includes(tech)) return 'emerald'
  if (['Telegram Bot'].includes(tech)) return 'violet'
  return 'default'
}

export function Projects() {
  const { ref, inView } = useInView()
  const categories = [ALL, ...Array.from(new Set(PROJECTS.map(p => p.category)))]
  const [active, setActive] = useState(ALL)

  const filtered = active === ALL ? PROJECTS : PROJECTS.filter(p => p.category === active)

  return (
    <section id="projects" className="py-24 lg:py-32">
      <div className="max-w-6xl mx-auto px-6">

        {/* Header */}
        <div className="text-center mb-10" ref={ref}>
          <SectionLabel>Портфолио</SectionLabel>
          <h2 className="font-display text-4xl lg:text-5xl font-bold text-white mt-2 mb-4">
            Избранные проекты
          </h2>
          <p className="text-white/50 max-w-xl mx-auto text-sm">
            Реальные проекты с измеримым результатом для бизнеса
          </p>
        </div>

        {/* Filter tabs */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2 }}
          className="flex flex-wrap justify-center gap-2 mb-10"
        >
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={`relative px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                active === cat
                  ? 'text-white'
                  : 'text-white/40 hover:text-white/70'
              }`}
            >
              {active === cat && (
                <motion.span
                  layoutId="filter-bg"
                  className="absolute inset-0 rounded-full bg-white/8 border border-white/10"
                  transition={{ type: 'spring', stiffness: 400, damping: 35 }}
                />
              )}
              <span className="relative">{cat}</span>
            </button>
          ))}
        </motion.div>

        {/* Projects grid */}
        <motion.div layout className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          <AnimatePresence mode="popLayout">
            {filtered.map((project, i) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3, delay: i * 0.06 }}
                className="group flex flex-col p-6 rounded-2xl bg-bg-card border border-border-subtle hover:border-border transition-all duration-300 hover:shadow-xl hover:shadow-black/20"
              >
                {/* Category pill */}
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-mono text-white/30 uppercase tracking-widest">
                    {project.category}
                  </span>
                  <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <ExternalLink size={14} className="text-white/60" />
                  </div>
                </div>

                <h3 className="font-display font-bold text-lg text-white mb-2 group-hover:text-accent-cyan transition-colors duration-300">
                  {project.title}
                </h3>

                <p className="text-white/50 text-sm leading-relaxed flex-1 mb-5">
                  {project.description}
                </p>

                {/* Tech tags */}
                <div className="flex flex-wrap gap-1.5 mb-5">
                  {project.tech.map(t => (
                    <Badge key={t} variant={getTechVariant(t)}>{t}</Badge>
                  ))}
                </div>

                {/* CTA */}
                <a
                  href={project.link ?? '#'}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm text-white/50 hover:text-accent-cyan font-medium transition-colors duration-200 mt-auto"
                >
                  Смотреть проект <ExternalLink size={13} />
                </a>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

      </div>
    </section>
  )
}
