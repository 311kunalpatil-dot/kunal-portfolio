import { motion } from 'framer-motion'
import SectionWrapper, { SectionTitle } from './SectionWrapper'
import {
  SiReact, SiNextdotjs, SiTailwindcss, SiFramer,
  SiNodedotjs, SiExpress, SiJsonwebtokens,
  SiMongodb, SiMysql,
  SiSocketdotio, SiWebpack
} from 'react-icons/si'
import { HiCog, HiGlobeAlt, HiServer } from 'react-icons/hi'

const categories = [
  {
    title: 'Frontend',
    color: 'from-blue-500 to-cyan-400',
    skills: [
      { name: 'React', icon: <SiReact /> },
      { name: 'Next.js', icon: <SiNextdotjs /> },
      { name: 'Tailwind CSS', icon: <SiTailwindcss /> },
      { name: 'Framer Motion', icon: <SiFramer /> },
    ],
  },
  {
    title: 'Backend',
    color: 'from-purple-500 to-pink-400',
    skills: [
      { name: 'Node.js', icon: <SiNodedotjs /> },
      { name: 'Express.js', icon: <SiExpress /> },
      { name: 'REST APIs', icon: <HiServer /> },
      { name: 'JWT Auth', icon: <SiJsonwebtokens /> },
    ],
  },
  {
    title: 'Database',
    color: 'from-green-500 to-emerald-400',
    skills: [
      { name: 'MongoDB', icon: <SiMongodb /> },
      { name: 'MySQL', icon: <SiMysql /> },
    ],
  },
  {
    title: 'Other',
    color: 'from-orange-500 to-amber-400',
    skills: [
      { name: 'Socket.IO', icon: <SiSocketdotio /> },
      { name: 'WebSockets', icon: <HiGlobeAlt /> },
      { name: 'API Integration', icon: <SiWebpack /> },
      { name: 'System Design', icon: <HiCog /> },
    ],
  },
]

export default function Skills() {
  return (
    <SectionWrapper id="skills">
      <div className="section-container">
        <SectionTitle title="Skills & Tech" subtitle="Technologies I work with daily" />
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {categories.map((cat, ci) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: ci * 0.12 }}
              className="glass rounded-2xl p-6 hover:scale-[1.03] transition-all duration-300 group"
            >
              <div className={`inline-block px-3 py-1 rounded-lg text-xs font-bold text-white bg-gradient-to-r ${cat.color} mb-5`}>
                {cat.title}
              </div>
              <div className="space-y-3">
                {cat.skills.map((skill) => (
                  <div
                    key={skill.name}
                    className="flex items-center gap-3 p-2.5 rounded-xl transition-all hover:bg-primary/10 group/skill"
                  >
                    <span className="text-lg text-primary-light group-hover/skill:scale-125 transition-transform">
                      {skill.icon}
                    </span>
                    <span className="text-sm font-medium">{skill.name}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  )
}
