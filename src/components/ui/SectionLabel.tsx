interface Props { children: React.ReactNode }

/**
 * Small eyebrow label above section headings
 */
export function SectionLabel({ children }: Props) {
  return (
    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 mb-4">
      <span className="w-1.5 h-1.5 rounded-full bg-accent-cyan animate-pulse-slow" />
      <span className="text-xs font-mono uppercase tracking-widest text-white/50">{children}</span>
    </div>
  )
}
