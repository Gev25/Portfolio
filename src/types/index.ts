export interface Project {
  id: string
  title: string
  description: string
  tech: string[]
  link?: string
  category: string
}

export interface Service {
  icon: string
  title: string
  description: string
  features: string[]
  accent: 'cyan' | 'violet' | 'emerald'
}

export interface Skill {
  name: string
  level: number
  icon: string
}

export interface WhyItem {
  icon: string
  title: string
  description: string
}
