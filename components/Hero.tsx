'use client'
import { useState, useEffect } from 'react'

function useScramble(text: string, delay = 300) {
  const [displayed, setDisplayed] = useState(text)
  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    const CHARS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
    let frame = 0
    const FRAMES = 24
    let iv: ReturnType<typeof setInterval>
    const t = setTimeout(() => {
      iv = setInterval(() => {
        setDisplayed(
          text.split('').map((ch, i) => {
            if (ch === ' ') return ' '
            if (frame / FRAMES > i / text.length) return ch
            return CHARS[Math.floor(Math.random() * CHARS.length)]
          }).join('')
        )
        if (++frame > FRAMES) { setDisplayed(text); clearInterval(iv) }
      }, 38)
    }, delay)
    return () => { clearTimeout(t); clearInterval(iv) }
  }, [text, delay])
  return displayed
}

const facts = [
  { value: '5+ years', label: 'Experience' },
  { value: '10M+',     label: 'MyID requests a month' },
  { value: '50+',      label: 'Banks served' },
  { value: '99.7%',    label: 'Biometric accuracy' },
]

export default function Hero() {
  const first = useScramble('Bekhruz', 200)
  const last  = useScramble('Nutfilloev', 400)

  return (
    <section className="hero" id="home">
      <div className="wrap">
        <h1 className="hero-name" style={{ fontFamily: 'var(--font-serif)' }} aria-label="Bekhruz Nutfilloev">
          <span className="line-1" aria-hidden="true">{first}</span>
          <span className="line-2" aria-hidden="true">{last}</span>
        </h1>

        <div className="hero-bottom">
          <p className="hero-role">
            <strong>Machine Learning Engineer</strong> — building production AI
            at national scale. Tashkent, Uzbekistan.
          </p>
          <div className="hero-actions">
            <a href="#work" className="btn btn-primary">View work</a>
            <a href="/resume.pdf" download="Bekhruz_Nutfilloev_Resume.pdf" className="btn btn-ghost">
              Download resume
            </a>
          </div>
        </div>

        <dl className="hero-meta">
          {facts.map(f => (
            <div key={f.label} className="hero-fact">
              <dt className="hero-fact-label" style={{ fontFamily: 'var(--font-mono)' }}>{f.label}</dt>
              <dd className="hero-fact-value" style={{ fontFamily: 'var(--font-serif)' }}>{f.value}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  )
}
