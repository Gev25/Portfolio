import { motion } from 'framer-motion'

interface Props {
  text: string
  className?: string
  delay?: number
}

/**
 * Reveals text word-by-word with stagger animation
 */
export function AnimatedText({ text, className = '', delay = 0 }: Props) {
  const words = text.split(' ')

  return (
    <span className={className} aria-label={text}>
      {words.map((word, i) => (
        <motion.span
          key={i}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: delay + i * 0.06, ease: [0.22, 1, 0.36, 1] }}
          className="inline-block mr-[0.25em]"
        >
          {word}
        </motion.span>
      ))}
    </span>
  )
}
