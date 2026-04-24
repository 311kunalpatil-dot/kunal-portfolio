import { useState, useRef } from 'react'
import { motion, useMotionValue, useTransform } from 'framer-motion'
import SectionWrapper, { SectionTitle } from './SectionWrapper'
import { HiExternalLink, HiCode } from 'react-icons/hi'

const projects = [
  {
    title: 'DigiPetals',
    subtitle: 'Real-Time Healthcare System',
    desc: 'Real-time hospital bed & blood tracking system with Socket.IO live updates, role-based dashboards for 7 user roles, and geo-location based district-level management.',
    tech: ['React', 'Node.js', 'Socket.IO', 'MongoDB', 'Express'],
    gradient: 'from-rose-500 via-pink-500 to-purple-600',
    emoji: '🏥',
    github: '#',
    live: '#',
  },
  {
    title: 'AgriLink',
    subtitle: 'AI Crop Advisory Platform',
    desc: 'AI-powered crop recommendation system using weather & market data APIs with multi-language support (EN, HI, MR) and GPT-based advisory for farmers.',
    tech: ['React', 'Node.js', 'OpenAI API', 'REST APIs', 'MongoDB'],
    gradient: 'from-green-500 via-emerald-500 to-teal-600',
    emoji: '🌾',
    github: '#',
    live: '#',
  },
  {
    title: 'SmartCity Connect',
    subtitle: 'Citizen Issue Reporting Platform',
    desc: 'Citizen issue reporting & tracking platform with WhatsApp notifications, gamification system, role-based admin dashboard, and real-time status updates.',
    tech: ['React', 'Node.js', 'MongoDB', 'Twilio', 'Express'],
    gradient: 'from-blue-500 via-indigo-500 to-violet-600',
    emoji: '🏙️',
    github: '#',
    live: '#',
  },
  {
    title: 'Matoshree Dental Clinic',
    subtitle: 'Full-Stack Clinic Website',
    desc: 'Production-deployed clinic website with appointment booking, admin dashboard, patient management, and production-ready security features.',
    tech: ['React', 'Node.js', 'MongoDB', 'Express', 'JWT'],
    gradient: 'from-cyan-500 via-sky-500 to-blue-600',
    emoji: '🦷',
    github: '#',
    live: '#',
  },
  {
    title: 'SuperMart IMS',
    subtitle: 'Inventory Management System',
    desc: 'Desktop inventory management app built with Java Swing and MySQL, following N-tier architecture with DAO pattern for clean separation of concerns.',
    tech: ['Java', 'Swing', 'MySQL', 'JDBC', 'DAO Pattern'],
    gradient: 'from-amber-500 via-orange-500 to-red-600',
    emoji: '🛒',
    github: '#',
    live: null,
  },
]

function ProjectCard({ project, index }) {
  const cardRef = useRef(null)
  const x = useMotionValue(0)
  const y = useMotionValue(0)
  const rotateX = useTransform(y, [-100, 100], [5, -5])
  const rotateY = useTransform(x, [-100, 100], [-5, 5])

  const handleMouse = (e) => {
    const rect = cardRef.current.getBoundingClientRect()
    x.set(e.clientX - rect.left - rect.width / 2)
    y.set(e.clientY - rect.top - rect.height / 2)
  }

  const handleLeave = () => {
    x.set(0)
    y.set(0)
  }

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      onMouseMove={handleMouse}
      onMouseLeave={handleLeave}
      style={{ rotateX, rotateY, transformStyle: 'preserve-3d' }}
      className="glass rounded-2xl overflow-hidden group hover:shadow-[0_0_40px_rgba(99,102,241,0.15)] transition-shadow duration-500"
    >
      {/* Gradient header */}
      <div className={`relative h-44 bg-gradient-to-br ${project.gradient} flex items-center justify-center overflow-hidden`}>
        <div className="absolute inset-0 bg-black/10" />
        <span className="text-6xl relative z-10 group-hover:scale-125 transition-transform duration-500">
          {project.emoji}
        </span>
        {/* Shine effect */}
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 translate-x-[-100%] group-hover:translate-x-[200%]" style={{ transition: 'transform 0.8s ease' }} />
      </div>

      <div className="p-6">
        <h3 className="text-lg font-bold font-manrope mb-1 group-hover:text-primary-light transition-colors">
          {project.title}
        </h3>
        <p className="text-primary-light text-xs font-semibold tracking-wide uppercase mb-3">
          {project.subtitle}
        </p>
        <p className="text-dark-text text-sm leading-relaxed mb-4">
          {project.desc}
        </p>

        <div className="flex flex-wrap gap-1.5 mb-5">
          {project.tech.map((t) => (
            <span key={t} className="tech-badge text-[11px]">{t}</span>
          ))}
        </div>

        <div className="flex gap-3">
          <a
            href={project.github}
            className="flex items-center gap-1.5 px-4 py-2 rounded-lg text-xs font-semibold glass hover:bg-primary/20 transition-all hover:scale-105"
          >
            <HiCode className="text-sm" /> GitHub
          </a>
          {project.live && (
            <a
              href={project.live}
              className="flex items-center gap-1.5 px-4 py-2 rounded-lg text-xs font-semibold bg-gradient-to-r from-primary to-accent text-white hover:scale-105 transition-transform"
            >
              <HiExternalLink className="text-sm" /> Live Demo
            </a>
          )}
        </div>
      </div>
    </motion.div>
  )
}

export default function Projects() {
  const [filter, setFilter] = useState('All')
  const filters = ['All', 'Full Stack', 'AI', 'Real-Time', 'Desktop']

  const tagMap = {
    'Full Stack': ['DigiPetals', 'AgriLink', 'SmartCity Connect', 'Matoshree Dental Clinic'],
    'AI': ['AgriLink'],
    'Real-Time': ['DigiPetals', 'SmartCity Connect'],
    'Desktop': ['SuperMart IMS'],
  }

  const filtered = filter === 'All'
    ? projects
    : projects.filter((p) => tagMap[filter]?.includes(p.title))

  return (
    <SectionWrapper id="projects">
      <div className="section-container">
        <SectionTitle title="Featured Projects" subtitle="Real-world applications built with modern tech stacks" />

        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {filters.map((f) => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={`px-5 py-2 rounded-xl text-sm font-medium transition-all ${
                filter === f
                  ? 'bg-gradient-to-r from-primary to-accent text-white shadow-[0_0_20px_rgba(99,102,241,0.3)]'
                  : 'glass hover:bg-primary/10'
              }`}
            >
              {f}
            </button>
          ))}
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((project, i) => (
            <ProjectCard key={project.title} project={project} index={i} />
          ))}
        </div>
      </div>
    </SectionWrapper>
  )
}
