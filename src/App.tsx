import { lazy, Suspense } from 'react'
import { Navbar } from './components/sections/Navbar'
import { Hero } from './components/sections/Hero'
import { Footer } from './components/sections/Footer'

// Lazy-loaded sections for better initial load performance
const About = lazy(() => import('./components/sections/About').then(m => ({ default: m.About })))
const Services = lazy(() => import('./components/sections/Services').then(m => ({ default: m.Services })))
const Projects = lazy(() => import('./components/sections/Projects').then(m => ({ default: m.Projects })))
const WhyMe = lazy(() => import('./components/sections/WhyMe').then(m => ({ default: m.WhyMe })))
const Contact = lazy(() => import('./components/sections/Contact').then(m => ({ default: m.Contact })))

/**
 * Minimal loading placeholder so layout doesn't jump
 */
function SectionLoader() {
  return <div className="py-24 flex justify-center"><span className="w-6 h-6 rounded-full border-2 border-accent-cyan/20 border-t-accent-cyan/60 animate-spin" /></div>
}

export default function App() {
  return (
    <div className="min-h-screen bg-bg text-white noise">
      <Navbar />

      <main>
        <Hero />

        <Suspense fallback={<SectionLoader />}>
          <About />
        </Suspense>

        <Suspense fallback={<SectionLoader />}>
          <Services />
        </Suspense>

        <Suspense fallback={<SectionLoader />}>
          <Projects />
        </Suspense>

        <Suspense fallback={<SectionLoader />}>
          <WhyMe />
        </Suspense>

        <Suspense fallback={<SectionLoader />}>
          <Contact />
        </Suspense>
      </main>

      <Footer />
    </div>
  )
}
