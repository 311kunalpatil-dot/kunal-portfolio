import { useEffect, useState } from 'react'

export default function CursorGlow() {
  const [pos, setPos] = useState({ x: -100, y: -100 })

  useEffect(() => {
    const handler = (e) => setPos({ x: e.clientX, y: e.clientY })
    window.addEventListener('mousemove', handler)
    return () => window.removeEventListener('mousemove', handler)
  }, [])

  return (
    <div
      className="pointer-events-none fixed z-50 hidden md:block"
      style={{
        left: pos.x - 150,
        top: pos.y - 150,
        width: 300,
        height: 300,
        background: 'radial-gradient(circle, rgba(99,102,241,0.08) 0%, transparent 70%)',
        borderRadius: '50%',
        transition: 'left 0.1s ease-out, top 0.1s ease-out',
      }}
    />
  )
}
