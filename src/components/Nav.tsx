import { useState } from 'react'
import { NavLink } from 'react-router-dom'

const links = [
  { to: '/', label: 'Home' },
  { to: '/bridal-crew', label: 'Bridal Crew' },
  { to: '/venues', label: 'Venues' },
  { to: '/schedule', label: 'Schedule' },
  { to: '/attire', label: 'Attire' },
  { to: '/financials', label: 'Financials' },
  { to: '/accommodation', label: 'Accommodation' },
  { to: '/bachelorette', label: 'Bachelorette' },
]

export default function Nav() {
  const [open, setOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      {/* Blur layer */}
      <div
        className="absolute inset-0 backdrop-blur-sm"
        style={{
          WebkitMaskImage: 'linear-gradient(to bottom, black 50%, transparent 100%)',
          maskImage: 'linear-gradient(to bottom, black 50%, transparent 100%)',
        }}
      />

      {/* Nav content sits above the blur layer */}
      <nav className="relative w-full px-6 h-14 flex items-center justify-end">

        {/* Desktop links */}
        <ul className="hidden md:flex gap-6 items-center">
          {links.map(link => (
            <li key={link.to}>
              <NavLink
                to={link.to}
                end={link.to === '/'}
                className={({ isActive }) =>
                  `text-sm tracking-wide transition-colors pb-0.5 ${
                    isActive
                      ? 'text-rose'
                      : 'border-transparent text-warm-gray hover:text-charcoal'
                  }`
                }
              >
                {link.label}
              </NavLink>
            </li>
          ))}
        </ul>

        {/* Mobile hamburger */}
        <button
          className="md:hidden text-charcoal"
          onClick={() => setOpen(prev => !prev)}
          aria-label="Toggle menu"
        >
          {open ? <span>✕</span> : <span>☰</span>}
        </button>

      </nav>

      {/* Mobile dropdown */}
      {open && (
        <ul className="md:hidden flex flex-col border-t border-border/20 bg-blush/60 backdrop-blur-sm px-6 py-4 gap-4">
          {links.map(link => (
            <li key={link.to}>
              <NavLink
                to={link.to}
                end={link.to === '/'}
                className={({ isActive }) =>
                  `text-sm tracking-wide ${isActive ? 'text-rose' : 'text-warm-gray hover:text-charcoal'}`
                }
                onClick={() => setOpen(false)}
              >
                {link.label}
              </NavLink>
            </li>
          ))}
        </ul>
      )}
    </header>
  )
}