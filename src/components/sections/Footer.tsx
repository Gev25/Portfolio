export function Footer() {
  return (
    <footer className="border-t border-border-subtle py-8">
      <div className="max-w-6xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-sm text-white/30 font-mono">
          © {new Date().getFullYear()} Gevor Abrahamyan
        </p>
        <p className="text-xs text-white/20 font-mono">
          Built with React + Vite + Tailwind
        </p>
      </div>
    </footer>
  )
}
