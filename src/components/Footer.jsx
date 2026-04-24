import { SiGithub } from 'react-icons/si'
import { FaLinkedin } from 'react-icons/fa'
import { HiMail, HiHeart } from 'react-icons/hi'

export default function Footer() {
  return (
    <footer className="border-t border-dark-border">
      <div className="max-w-7xl mx-auto px-4 py-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-dark-text text-sm flex items-center gap-1">
          Built with <HiHeart className="text-red-400" /> by{' '}
          <span className="gradient-text font-semibold">Kunal Patil</span>
        </p>
        <div className="flex items-center gap-4">
          {[
            { icon: <SiGithub />, href: 'https://github.com/311kunalpatil-dot' },
            { icon: <FaLinkedin />, href: 'https://www.linkedin.com/in/kunal-patil-0413b6361?utm_source=share_via&utm_content=profile&utm_medium=member_android' },
            { icon: <HiMail />, href: 'mailto:311kunalpatil@gmail.com' },
          ].map((link, i) => (
            <a
              key={i}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-dark-text hover:text-primary-light transition-colors hover:scale-110 transform"
            >
              {link.icon}
            </a>
          ))}
        </div>
        <p className="text-dark-text text-xs">
          © {new Date().getFullYear()} All rights reserved.
        </p>
      </div>
    </footer>
  )
}
