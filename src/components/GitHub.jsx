import { motion } from 'framer-motion'
import SectionWrapper, { SectionTitle } from './SectionWrapper'
import { HiExternalLink } from 'react-icons/hi'
import { SiGithub } from 'react-icons/si'

export default function GitHub() {
  const username = 'kunalpatil'

  return (
    <SectionWrapper id="github">
      <div className="section-container">
        <SectionTitle title="GitHub Activity" subtitle="My open source contributions and coding activity" />

        <div className="max-w-4xl mx-auto space-y-6">
          {/* Stats cards */}
          <div className="grid sm:grid-cols-2 gap-5">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="glass rounded-2xl p-6 flex items-center justify-center overflow-hidden"
            >
              <img
                src={`https://github-readme-stats.vercel.app/api?username=${username}&show_icons=true&theme=radical&hide_border=true&bg_color=00000000&title_color=818cf8&icon_color=06b6d4&text_color=a1a1aa`}
                alt="GitHub Stats"
                className="w-full max-w-md"
                loading="lazy"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="glass rounded-2xl p-6 flex items-center justify-center overflow-hidden"
            >
              <img
                src={`https://github-readme-stats.vercel.app/api/top-langs/?username=${username}&layout=compact&theme=radical&hide_border=true&bg_color=00000000&title_color=818cf8&text_color=a1a1aa`}
                alt="Top Languages"
                className="w-full max-w-md"
                loading="lazy"
              />
            </motion.div>
          </div>

          {/* Contribution graph */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="glass rounded-2xl p-6 flex items-center justify-center overflow-hidden"
          >
            <img
              src={`https://github-readme-streak-stats.herokuapp.com?user=${username}&theme=radical&hide_border=true&background=00000000&ring=818cf8&fire=06b6d4&currStreakLabel=818cf8`}
              alt="GitHub Streak"
              className="w-full max-w-2xl"
              loading="lazy"
            />
          </motion.div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="text-center pt-4"
          >
            <a
              href={`https://github.com/${username}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold glass hover:bg-primary/20 hover:scale-105 transition-all"
            >
              <SiGithub /> View Full Profile <HiExternalLink />
            </a>
          </motion.div>
        </div>
      </div>
    </SectionWrapper>
  )
}
