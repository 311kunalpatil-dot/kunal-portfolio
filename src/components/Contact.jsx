import { useState } from 'react'
import { motion } from 'framer-motion'
import SectionWrapper, { SectionTitle } from './SectionWrapper'
import { HiMail, HiLocationMarker } from 'react-icons/hi'
import { SiGithub } from 'react-icons/si'
import { FaLinkedin } from 'react-icons/fa'

const contactLinks = [
  { icon: <HiMail />, label: 'Email', value: '311kunalpatil@gmail.com', href: 'mailto:311kunalpatil@gmail.com' },
  { icon: <FaLinkedin />, label: 'LinkedIn', value: 'linkedin.com/in/kunal-patil', href: 'https://www.linkedin.com/in/kunal-patil-0413b6361?utm_source=share_via&utm_content=profile&utm_medium=member_android' },
  { icon: <SiGithub />, label: 'GitHub', value: 'github.com/311kunalpatil-dot', href: 'https://github.com/311kunalpatil-dot' },
  { icon: <HiLocationMarker />, label: 'Location', value: 'India', href: null },
]

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 3000)
    setForm({ name: '', email: '', message: '' })
  }

  return (
    <SectionWrapper id="contact">
      <div className="section-container">
        <SectionTitle title="Get In Touch" subtitle="Have a project in mind? Let's talk!" />

        <div className="grid md:grid-cols-2 gap-10 max-w-5xl mx-auto">
          {/* Contact info */}
          <div className="space-y-5">
            <p className="text-dark-text leading-relaxed">
              I'm always open to discussing new projects, creative ideas, or opportunities to be part of something great.
            </p>
            <div className="space-y-3">
              {contactLinks.map((item, i) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                >
                  {item.href ? (
                    <a
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-4 p-4 glass rounded-xl hover:bg-primary/10 transition-all group"
                    >
                      <span className="text-xl text-primary group-hover:scale-110 transition-transform">{item.icon}</span>
                      <div>
                        <div className="text-xs text-dark-text">{item.label}</div>
                        <div className="text-sm font-medium">{item.value}</div>
                      </div>
                    </a>
                  ) : (
                    <div className="flex items-center gap-4 p-4 glass rounded-xl">
                      <span className="text-xl text-primary">{item.icon}</span>
                      <div>
                        <div className="text-xs text-dark-text">{item.label}</div>
                        <div className="text-sm font-medium">{item.value}</div>
                      </div>
                    </div>
                  )}
                </motion.div>
              ))}
            </div>
          </div>

          {/* Contact form */}
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="glass rounded-2xl p-8 space-y-5"
          >
            {['name', 'email'].map((field) => (
              <div key={field}>
                <label className="block text-xs font-semibold uppercase tracking-wider text-dark-text mb-2">
                  {field}
                </label>
                <input
                  type={field === 'email' ? 'email' : 'text'}
                  required
                  value={form[field]}
                  onChange={(e) => setForm({ ...form, [field]: e.target.value })}
                  className="w-full bg-transparent border border-dark-border rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-primary/50 focus:shadow-[0_0_15px_rgba(99,102,241,0.15)] transition-all"
                  placeholder={`Your ${field}`}
                />
              </div>
            ))}
            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-dark-text mb-2">
                Message
              </label>
              <textarea
                required
                rows={4}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                className="w-full bg-transparent border border-dark-border rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-primary/50 focus:shadow-[0_0_15px_rgba(99,102,241,0.15)] transition-all resize-none"
                placeholder="Your message..."
              />
            </div>
            <button
              type="submit"
              className="w-full py-3.5 rounded-xl font-semibold text-white bg-gradient-to-r from-primary via-purple to-accent hover:scale-[1.02] hover:shadow-[0_0_30px_rgba(99,102,241,0.3)] transition-all"
            >
              {submitted ? '✓ Message Sent!' : 'Send Message'}
            </button>
          </motion.form>
        </div>
      </div>
    </SectionWrapper>
  )
}
