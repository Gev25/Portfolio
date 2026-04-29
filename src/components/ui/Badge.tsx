interface Props {
  children: React.ReactNode
  variant?: 'cyan' | 'violet' | 'emerald' | 'default'
}

const variants = {
  cyan: 'bg-cyan-500/10 text-cyan-400 border-cyan-500/20',
  violet: 'bg-violet-500/10 text-violet-400 border-violet-500/20',
  emerald: 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20',
  default: 'bg-white/5 text-white/60 border-white/10',
}

export function Badge({ children, variant = 'default' }: Props) {
  return (
    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium border font-mono ${variants[variant]}`}>
      {children}
    </span>
  )
}
