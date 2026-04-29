import { useState } from 'react'
import { motion } from 'framer-motion'
import { Send, Mail, MessageCircle, CheckCircle } from 'lucide-react'
import { useInView } from '../../hooks/useInView'
import { SectionLabel } from '../ui/SectionLabel'

interface FormState {
  name: string
  email: string
  message: string
}

/**
 * Contact section with form + direct links
 * Form is purely client-side here; hook it up to Formspree/EmailJS in production
 */
export function Contact() {
  const { ref, inView } = useInView()
  const [form, setForm] = useState<FormState>({ name: '', email: '', message: '' })
  const [sent, setSent] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }))

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    // TODO: Replace with real endpoint e.g. https://formspree.io/f/YOUR_ID
    await new Promise(r => setTimeout(r, 1200))
    setLoading(false)
    setSent(true)
  }

  return (
    <section id="contact" className="py-24 lg:py-32 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-mesh pointer-events-none opacity-60" />

      <div className="relative max-w-6xl mx-auto px-6">
        <div className="text-center mb-14" ref={ref}>
          <SectionLabel>Контакты</SectionLabel>
          <h2 className="font-display text-4xl lg:text-5xl font-bold text-white mt-2 mb-4">
            Готов к работе
          </h2>
          <p className="text-white/50 max-w-md mx-auto">
            Расскажите о вашем проекте — отвечу в течение нескольких часов
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">

          {/* Left: form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            {sent ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="flex flex-col items-center justify-center gap-4 p-12 rounded-2xl bg-bg-card border border-emerald-500/20 text-center"
              >
                <CheckCircle size={48} className="text-emerald-400" />
                <h3 className="font-display font-bold text-xl text-white">Сообщение отправлено!</h3>
                <p className="text-white/50 text-sm">Отвечу в ближайшее время. Спасибо!</p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm text-white/50 mb-1.5 font-medium">Имя</label>
                    <input
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      required
                      placeholder="Иван Иванов"
                      className="w-full px-4 py-3 rounded-xl bg-bg-card border border-border-subtle hover:border-border focus:border-accent-cyan/50 focus:outline-none focus:ring-1 focus:ring-accent-cyan/30 text-white placeholder-white/20 text-sm transition-all duration-200"
                    />
                  </div>
                  <div>
                    <label className="block text-sm text-white/50 mb-1.5 font-medium">Email</label>
                    <input
                      name="email"
                      type="email"
                      value={form.email}
                      onChange={handleChange}
                      required
                      placeholder="ivan@example.com"
                      className="w-full px-4 py-3 rounded-xl bg-bg-card border border-border-subtle hover:border-border focus:border-accent-cyan/50 focus:outline-none focus:ring-1 focus:ring-accent-cyan/30 text-white placeholder-white/20 text-sm transition-all duration-200"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm text-white/50 mb-1.5 font-medium">Сообщение</label>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    placeholder="Расскажите о проекте: что нужно сделать, какие сроки и бюджет..."
                    className="w-full px-4 py-3 rounded-xl bg-bg-card border border-border-subtle hover:border-border focus:border-accent-cyan/50 focus:outline-none focus:ring-1 focus:ring-accent-cyan/30 text-white placeholder-white/20 text-sm transition-all duration-200 resize-none"
                  />
                </div>
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-accent-cyan text-bg font-semibold text-sm hover:bg-accent-cyan/90 disabled:opacity-60 disabled:cursor-not-allowed transition-all duration-200 shadow-lg shadow-accent-cyan/20"
                >
                  {loading ? (
                    <span className="flex items-center gap-2">
                      <span className="w-4 h-4 rounded-full border-2 border-bg/30 border-t-bg animate-spin" />
                      Отправка...
                    </span>
                  ) : (
                    <>
                      <Send size={16} />
                      Отправить сообщение
                    </>
                  )}
                </button>
              </form>
            )}
          </motion.div>

          {/* Right: contact links */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            className="space-y-4"
          >
            <p className="text-white/50 text-sm leading-relaxed mb-6">
              Предпочитаете написать напрямую? Я всегда на связи через Telegram — обычно отвечаю в течение пары часов.
            </p>

            {[
              {
                icon: <MessageCircle size={20} />,
                label: 'Telegram',
                value: '@gevabrahamyan',
                href: 'https://t.me/gevabrahamyan',
                accent: 'text-cyan-400 bg-cyan-500/10 border-cyan-500/20',
              },
              {
                icon: <Mail size={20} />,
                label: 'Email',
                value: 'abrahamyangev609@gmail.com',
                href: 'mailto:abrahamyangev609@gmail.com',
                accent: 'text-violet-400 bg-violet-500/10 border-violet-500/20',
              },
            ].map(c => (
              <a
                key={c.label}
                href={c.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`flex items-center gap-4 p-5 rounded-2xl border ${c.accent} hover:opacity-80 transition-opacity duration-200`}
              >
                <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${c.accent}`}>
                  {c.icon}
                </div>
                <div>
                  <p className="text-xs text-white/30 font-mono uppercase tracking-wider mb-0.5">{c.label}</p>
                  <p className="text-white font-medium">{c.value}</p>
                </div>
              </a>
            ))}

            {/* Availability note */}
            <div className="mt-6 p-5 rounded-2xl bg-bg-card border border-border-subtle">
              <div className="flex items-center gap-2 mb-2">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span className="text-sm font-medium text-white/80">Беру проекты прямо сейчас</span>
              </div>
              <p className="text-xs text-white/40 leading-relaxed">
                Обычно стартуем в течение 1–3 дней после обсуждения деталей
              </p>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  )
}
