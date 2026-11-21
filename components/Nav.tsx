'use client'
import { useState, useEffect } from 'react'

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen]         = useState(false)

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 40)
      const fill = document.getElementById('progress-fill')
      if (fill) {
        const pct = window.scrollY / (document.body.scrollHeight - window.innerHeight)
        fill.style.transform = `scaleX(${pct})`
      }
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    if (!open) return
    const shut = () => { setOpen(false); document.body.style.overflow = '' }
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') shut() }
    const onResize = () => { if (window.innerWidth > 768) shut() }
    window.addEventListener('keydown', onKey)
    window.addEventListener('resize', onResize)
    return () => {
      window.removeEventListener('keydown', onKey)
      window.removeEventListener('resize', onResize)
    }
  }, [open])

  const close = () => { setOpen(false); document.body.style.overflow = '' }
  const toggle = () => {
    const next = !open
    setOpen(next)
    document.body.style.overflow = next ? 'hidden' : ''
  }

  return (
    <>
      <nav id="mobile-nav" className={`mobile-nav${open ? ' open' : ''}`} aria-label="Mobile navigation">
        {['Work','About','Skills','Resume','Contact'].map(s => (
          <a key={s} href={`#${s.toLowerCase()}`} onClick={close}>{s}</a>
        ))}
      </nav>

      <header className={`nav${scrolled ? ' scrolled' : ''}`} role="banner">
        <div className="wrap">
          <nav className="nav-inner" style={{ display:'flex', alignItems:'center', justifyContent:'space-between' }}>
            <a href="#" className="nav-logo" style={{ fontFamily:'var(--font-serif)' }}>
              B<span>.</span>N
            </a>

            <ul className="nav-links" role="list" style={{ fontFamily:'var(--font-sans)' }}>
              {['Work','About','Skills','Resume','Contact'].map(s => (
                <li key={s}><a href={`#${s.toLowerCase()}`}>{s}</a></li>
              ))}
            </ul>

            <div className="nav-right">
              <div className="nav-status" style={{ fontFamily:'var(--font-mono)' }}>
                <span className="nav-status-dot" aria-hidden="true" />
                Available
              </div>
              <a href="#contact" className="nav-hire">Hire me</a>
              <button
                className={`hamburger${open ? ' open' : ''}`}
                onClick={toggle}
                aria-label="Toggle navigation"
                aria-expanded={open}
                aria-controls="mobile-nav"
              >
                <span /><span /><span />
              </button>
            </div>
          </nav>
        </div>
      </header>
    </>
  )
}
