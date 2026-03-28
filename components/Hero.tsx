'use client'
import { useState, useEffect } from 'react'

function useScramble(text: string, delay = 300) {
  const [displayed, setDisplayed] = useState(text)
  useEffect(() => {
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

function Counter({ target, suffix = '' }: { target: number; suffix?: string }) {
  const [val, setVal] = useState(0)
  useEffect(() => {
    const dur = 1400
    const start = performance.now()
    const run = (now: number) => {
      const p = Math.min((now - start) / dur, 1)
      setVal(Math.round(target * (1 - Math.pow(1 - p, 3))))
      if (p < 1) requestAnimationFrame(run)
    }
    const t = setTimeout(() => requestAnimationFrame(run), 600)
    return () => clearTimeout(t)
  }, [target])
  return <>{val}{suffix}</>
}

export default function Hero() {
  const first = useScramble('Bekhruz', 200)
  const last  = useScramble('Nutfilloev', 400)

  return (
    <section className="hero" id="home">
      <div className="wrap">
        <h1 className="hero-name" style={{ fontFamily: 'var(--font-serif)' }}>
          <span className="line-1">{first}</span>
          <span className="line-2">{last}</span>
        </h1>

        <div className="hero-bottom">
          <p className="hero-role">
            <strong>Machine Learning Engineer</strong> — building production AI
            at national scale. Tashkent, Uzbekistan.
          </p>
          <div className="hero-actions">
            <a href="#work" className="btn btn-primary">View Work</a>
            <a href="/resume.pdf" download="Bekhruz_Nutfilloev_Resume.pdf" className="btn btn-ghost">
              Resume ↓
            </a>
          </div>
        </div>

        <div className="hero-meta" style={{ fontFamily: 'var(--font-mono)' }}>
          <span className="hero-meta-item">Experience — <span>5+ years</span></span>
          <span className="hero-meta-item">
            MyID requests / month — <span><Counter target={10} suffix="M+" /></span>
          </span>
          <span className="hero-meta-item">
            Banks served — <span><Counter target={50} suffix="+" /></span>
          </span>
          <span className="hero-meta-item">Biometric accuracy — <span>99.7%</span></span>
        </div>
      </div>
    </section>
  )
}
