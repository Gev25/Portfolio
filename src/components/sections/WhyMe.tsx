import { motion } from 'framer-motion'
import { useInView } from '../../hooks/useInView'
import { SectionLabel } from '../ui/SectionLabel'
import { WHY_ITEMS } from '../../data'

export function WhyMe() {
  const { ref, inView } = useInView()

  return (
    <section id="why" className="py-24 lg:py-32 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 dot-grid opacity-50 pointer-events-none" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent-cyan/20 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent-violet/20 to-transparent" />

      <div className="relative max-w-6xl mx-auto px-6">
        <div className="text-center mb-14" ref={ref}>
          <SectionLabel>Почему я</SectionLabel>
          <h2 className="font-display text-4xl lg:text-5xl font-bold text-white mt-2 mb-4">
            Больше, чем просто разработчик
          </h2>
          <p className="text-white/50 max-w-xl mx-auto">
            То, что отличает меня от других фрилансеров
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {WHY_ITEMS.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="p-6 rounded-2xl bg-bg-card border border-border-subtle hover:border-border transition-all duration-300 text-center group hover:-translate-y-1"
            >
              <motion.div
                whileHover={{ scale: 1.15, rotate: [0, -5, 5, 0] }}
                transition={{ duration: 0.4 }}
                className="text-3xl mb-4 inline-block"
              >
                {item.icon}
              </motion.div>
              <h3 className="font-display font-bold text-white mb-2 group-hover:text-accent-cyan transition-colors">
                {item.title}
              </h3>
              <p className="text-sm text-white/50 leading-relaxed">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Social proof strip */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="mt-14 p-8 rounded-2xl bg-bg-card border border-border-subtle text-center"
        >
          <p className="text-white/70 text-lg leading-relaxed max-w-3xl mx-auto">
            <span className="text-accent-cyan font-semibold">"</span>
            Работает быстро, всегда на связи, проект сдал чётко в срок.
            Бот уже второй месяц работает без сбоев и приносит заявки каждый день.
            <span className="text-accent-cyan font-semibold">"</span>
          </p>
          <p className="mt-3 text-sm text-white/30 font-mono">— Клиент, онлайн-школа</p>
        </motion.div>
      </div>
    </section>
  )
}
