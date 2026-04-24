import { motion } from 'framer-motion'
import SectionWrapper, { SectionTitle } from './SectionWrapper'
import { HiLightningBolt, HiGlobeAlt, HiChip, HiServer } from 'react-icons/hi'

const highlights = [
  {
    icon: <HiServer />,
    title: 'Production-Ready Apps',
    desc: 'Built and deployed multiple full-stack applications used by real users — from dental clinics to citizen platforms.',
  },
  {
    icon: <HiGlobeAlt />,
    title: 'Real-Time Systems',
    desc: 'Deep experience with WebSockets & Socket.IO for building live dashboards, notifications, and collaborative features.',
  },
  {
    icon: <HiChip />,
    title: 'AI Integration',
    desc: 'Integrated GPT models, weather APIs, and market data to build intelligent advisory systems for agriculture.',
  },
  {
    icon: <HiLightningBolt />,
    title: 'Backend Architecture',
    desc: 'Strong understanding of REST APIs, JWT authentication, role-based access control, and scalable N-tier architectures.',
  },
]

export default function Experience() {
  return (
    <SectionWrapper id="experience">
      <div className="section-container">
        <SectionTitle title="Experience & Highlights" subtitle="What I bring to the table" />
        <div className="grid sm:grid-cols-2 gap-5 max-w-4xl mx-auto">
          {highlights.map((h, i) => (
            <motion.div
              key={h.title}
              initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="glass rounded-2xl p-6 hover:scale-[1.02] transition-all duration-300 group"
            >
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center text-xl text-white mb-4 group-hover:scale-110 transition-transform">
                {h.icon}
              </div>
              <h3 className="font-bold font-manrope text-lg mb-2">{h.title}</h3>
              <p className="text-dark-text text-sm leading-relaxed">{h.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  )
}
