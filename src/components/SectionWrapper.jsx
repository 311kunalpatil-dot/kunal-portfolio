import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

export default function SectionWrapper({ children, id, className = '' }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id={id} ref={ref} className={className}>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.7, ease: 'easeOut' }}
      >
        {children}
      </motion.div>
    </section>
  )
}

export function SectionTitle({ title, subtitle }) {
  return (
    <div className="mb-12 md:mb-16">
      <h2 className="text-3xl md:text-4xl font-bold font-manrope mb-3">
        <span className="gradient-text">{title}</span>
      </h2>
      {subtitle && (
        <p className="text-dark-text text-base md:text-lg max-w-2xl">
          {subtitle}
        </p>
      )}
    </div>
  )
}
