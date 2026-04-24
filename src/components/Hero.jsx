import { useMemo } from 'react'
import { motion } from 'framer-motion'

function Particles() {
  const particles = useMemo(() =>
    Array.from({ length: 40 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      size: Math.random() * 3 + 1,
      duration: Math.random() * 15 + 10,
      delay: Math.random() * 10,
      opacity: Math.random() * 0.4 + 0.1,
    })), [])

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {particles.map((p) => (
        <div
          key={p.id}
          className="particle"
          style={{
            left: `${p.x}%`,
            bottom: '-10px',
            width: p.size,
            height: p.size,
            background: `rgba(${Math.random() > 0.5 ? '99,102,241' : '6,182,212'}, ${p.opacity})`,
            animationDuration: `${p.duration}s`,
            animationDelay: `${p.delay}s`,
          }}
        />
      ))}
    </div>
  )
}

export default function Hero() {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center gradient-bg overflow-hidden">
      <Particles />

      {/* Gradient orbs */}
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-primary/20 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-accent/20 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative z-10 text-center px-4 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <p className="text-primary-light text-sm md:text-base font-medium tracking-widest uppercase mb-4">
            Welcome to my portfolio
          </p>
        </motion.div>

        <motion.h1
          className="text-4xl sm:text-5xl md:text-7xl font-extrabold font-manrope leading-tight mb-4"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          Hi, I'm{' '}
          <span className="gradient-text">Kunal Patil</span>
        </motion.h1>

        <motion.p
          className="text-lg md:text-2xl font-light mb-3 text-dark-text"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          I build scalable, real-time web applications
        </motion.p>

        <motion.div
          className="flex flex-wrap items-center justify-center gap-3 text-sm mb-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          {['Full Stack Developer', 'AI Integration', 'System Design'].map((tag, i) => (
            <span key={tag} className="tech-badge">
              {i > 0 && <span className="w-1 h-1 rounded-full bg-primary-light mr-1" />}
              {tag}
            </span>
          ))}
        </motion.div>

        <motion.div
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
        >
          <a
            href="#projects"
            className="group relative px-8 py-3.5 rounded-xl font-semibold text-white bg-gradient-to-r from-primary via-purple to-accent overflow-hidden transition-all hover:scale-105 hover:shadow-[0_0_30px_rgba(99,102,241,0.4)]"
          >
            <span className="relative z-10">View Projects</span>
          </a>
          <a
            href="#contact"
            className="px-8 py-3.5 rounded-xl font-semibold glass transition-all hover:scale-105 hover:border-primary/40"
          >
            Contact Me
          </a>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <div className="w-6 h-10 rounded-full border-2 border-primary/30 flex justify-center pt-2">
            <div className="w-1.5 h-3 rounded-full bg-primary/60" />
          </div>
        </motion.div>
      </div>
    </section>
  )
}
