import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import SectionWrapper, { SectionTitle } from './SectionWrapper'
import { HiCode, HiChip, HiLightningBolt } from 'react-icons/hi'

const stats = [
  { label: 'Projects Completed', value: 8, suffix: '+' },
  { label: 'Tech Stack', value: 15, suffix: '+' },
  { label: 'GitHub Repos', value: 10, suffix: '+' },
]

function Counter({ value, suffix }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true })
  return (
    <span ref={ref}>
      <motion.span
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : {}}
      >
        {inView ? value : 0}{suffix}
      </motion.span>
    </span>
  )
}

export default function About() {
  return (
    <SectionWrapper id="about">
      <div className="section-container">
        <SectionTitle title="About Me" subtitle="Building real-world systems that solve real problems" />

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-5">
            <p className="text-dark-text leading-relaxed text-base md:text-lg">
              I'm a <span className="text-primary-light font-semibold">BTech CSE Second Year</span> student from India
              with a deep passion for building production-ready web applications. I specialize in crafting
              scalable backend architectures and real-time systems that handle real-world complexity.
            </p>
            <p className="text-dark-text leading-relaxed text-base md:text-lg">
              From healthcare platforms with live bed tracking to AI-powered crop advisory systems,
              I focus on turning ideas into fully functional, deployed products. My approach combines
              clean code, robust architecture, and modern user experiences.
            </p>

            <div className="flex flex-wrap gap-3 pt-2">
              {[
                { icon: <HiCode />, text: 'Full Stack Development' },
                { icon: <HiChip />, text: 'AI Integration' },
                { icon: <HiLightningBolt />, text: 'Real-Time Systems' },
              ].map((item) => (
                <div key={item.text} className="flex items-center gap-2 tech-badge text-sm">
                  <span className="text-primary">{item.icon}</span>
                  {item.text}
                </div>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-3 gap-4">
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                className="glass rounded-2xl p-5 text-center neon-glow transition-all hover:scale-105"
              >
                <div className="text-3xl md:text-4xl font-bold gradient-text mb-1">
                  <Counter value={stat.value} suffix={stat.suffix} />
                </div>
                <div className="text-xs text-dark-text font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </SectionWrapper>
  )
}
