import { useEffect, useState } from 'react'
import Logo from './Logo.jsx'

const LINKS = [
  ['#features', 'Product'],
  ['#how', 'How it works'],
  ['#why', 'Why irisAI'],
  ['#setup', 'Setup'],
  ['#resources', 'How teams use it'],
]

export default function Header() {
  const [open, setOpen] = useState(false)
  const [on, setOn] = useState(false)

  useEffect(() => {
    const onScroll = () => setOn(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    if (!open) return
    const onKey = (e) => { if (e.key === 'Escape') setOpen(false) }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [open])

  const close = () => setOpen(false)
  const toggle = () => setOpen((v) => !v)

  return (
    <header className={`site ${on ? 'on' : ''} ${open ? 'menu-open' : ''}`}>
      <div className="nav-bar">
        <div className="nav-pill">
          <Logo />
          <nav className="main" aria-label="Primary">
            {LINKS.map(([href, label]) => (
              <a key={href} href={href}>{label}</a>
            ))}
          </nav>
          <button
            type="button"
            className={`nav-burger ${open ? 'open' : ''}`}
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
            onClick={toggle}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
        <a className="btn btn-primary nav-cta" href="#cta">Get started</a>
      </div>

      <div className={`nav-mobile ${open ? 'open' : ''}`}>
        <nav className="nav-mobile-links" aria-label="Mobile">
          {LINKS.map(([href, label]) => (
            <a key={href} href={href} onClick={close}>{label}</a>
          ))}
        </nav>
        <a className="btn btn-primary nav-mobile-cta" href="#cta" onClick={close}>
          Get started
        </a>
      </div>
    </header>
  )
}
