import { useEffect, useState } from 'react'
import { Menu, X, Phone } from 'lucide-react'
import { business, images } from '../data/businessInfo.js'

const links = [
  ['About', '#about'],
  ['Services', '#services'],
  ['Gallery', '#gallery'],
  ['The Shop', '#shop'],
  ['Visit', '#visit'],
]

export default function Header() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const onKey = (e) => e.key === 'Escape' && setOpen(false)
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [])

  return (
    <header className={`site-header ${scrolled ? 'is-scrolled' : ''}`}>
      <div className="container header-inner">
        <a className="brand" href="#top" aria-label={`${business.name} – home`} onClick={() => setOpen(false)}>
          <img src={images.logo} alt="" width="120" height="65" />
          <span className="sr-only">{business.name}</span>
        </a>

        <nav className={`nav ${open ? 'is-open' : ''}`} aria-label="Main">
          <ul>
            {links.map(([label, href]) => (
              <li key={href}>
                <a href={href} onClick={() => setOpen(false)}>{label}</a>
              </li>
            ))}
          </ul>
        </nav>

        <a className="btn btn-clay btn-sm header-call" href={business.phoneHref}>
          <Phone size={16} aria-hidden="true" />
          <span>{business.phoneDisplay}</span>
        </a>

        <button
          className="menu-toggle"
          type="button"
          aria-expanded={open}
          aria-label={open ? 'Close menu' : 'Open menu'}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
    </header>
  )
}
