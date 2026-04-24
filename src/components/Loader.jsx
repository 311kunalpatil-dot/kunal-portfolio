import { motion } from 'framer-motion'

export default function Loader() {
  return (
    <motion.div
      className="loader-container"
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.5 }}
    >
      <div className="flex flex-col items-center gap-6">
        <div className="loader-ring" />
        <motion.span
          className="gradient-text text-xl font-manrope font-bold tracking-wider"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          KP
        </motion.span>
      </div>
    </motion.div>
  )
}
