import { motion } from 'framer-motion'
import { Check } from 'lucide-react'
import { useInView } from '../../hooks/useInView'
import { SectionLabel } from '../ui/SectionLabel'
import { SERVICES } from '../../data'
import type { Service } from '../../types'

const accentMap = {
  cyan: {
    border: 'hover:border-cyan-500/40',
    glow: 'hover:shadow-cyan-500/10',
    check: 'text-cyan-400',
    bg: 'bg-cyan-500/10',
    text: 'text-cyan-400',
  },
  violet: {
    border: 'hover:border-violet-500/40',
    glow: 'hover:shadow-violet-500/10',
    check: 'text-violet-400',
    bg: 'bg-violet-500/10',
    text: 'text-violet-400',
  },
  emerald: {
    border: 'hover:border-emerald-500/40',
    glow: 'hover:shadow-emerald-500/10',
    check: 'text-emerald-400',
    bg: 'bg-emerald-500/10',
    text: 'text-emerald-400',
  },
}

function ServiceCard({ service, index, inView }: { service: Service; index: number; inView: boolean }) {
  const ac = accentMap[service.accent]
  return (
    <motion.div
      initial={{ opacity: 0, y: 32 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.12, ease: [0.22, 1, 0.36, 1] }}
      className={`relative p-7 rounded-2xl bg-bg-card border border-border-subtle ${ac.border} hover:shadow-xl ${ac.glow} transition-all duration-300 group cursor-default`}
    >
      {/* Icon */}
      <div className={`inline-flex items-center justify-center w-12 h-12 rounded-xl ${ac.bg} text-2xl mb-5`}>
        {service.icon}
      </div>

      <h3 className="font-display font-bold text-xl text-white mb-3 group-hover:text-white transition-colors">
        {service.title}
      </h3>
      <p className="text-white/50 text-sm leading-relaxed mb-6">
        {service.description}
      </p>

      <ul className="space-y-2">
        {service.features.map(f => (
          <li key={f} className="flex items-center gap-2.5 text-sm text-white/60">
            <Check size={14} className={ac.check} />
            {f}
          </li>
        ))}
      </ul>

      {/* Subtle gradient accent top-right */}
      <div className={`absolute top-0 right-0 w-24 h-24 ${ac.bg} rounded-2xl blur-2xl opacity-0 group-hover:opacity-50 transition-opacity duration-500 pointer-events-none`} />
    </motion.div>
  )
}

export function Services() {
  const { ref, inView } = useInView()

  return (
    <section id="services" className="py-24 lg:py-32 relative">
      {/* Background accent */}
      <div className="absolute inset-0 bg-gradient-radial from-accent-violet/5 to-transparent pointer-events-none" />

      <div className="relative max-w-6xl mx-auto px-6">
        <div className="text-center mb-14" ref={ref}>
          <SectionLabel>Услуги</SectionLabel>
          <h2 className="font-display text-4xl lg:text-5xl font-bold text-white mt-2 mb-4">
            Что я делаю
          </h2>
          <p className="text-white/50 max-w-xl mx-auto">
            Каждый сервис — это законченный продукт, который можно запустить и использовать сразу
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-5">
          {SERVICES.map((s, i) => (
            <ServiceCard key={s.title} service={s} index={i} inView={inView} />
          ))}
        </div>
      </div>
    </section>
  )
}
