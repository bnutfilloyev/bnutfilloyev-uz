'use client'
import { useState, FormEvent } from 'react'
import Reveal from './Reveal'

const links = [
  { platform: 'Email',    label: 'bnutfilloyev@gmail.com', href: 'mailto:bnutfilloyev@gmail.com' },
  { platform: 'Instagram', label: '@bnutfilloyev',         href: 'https://www.instagram.com/bnutfilloyev/' },
  { platform: 'X',        label: '@bnutfilloyev',          href: 'https://x.com/bnutfilloyev' },
  { platform: 'Telegram', label: '@bnutfilloyev',          href: 'https://t.me/bnutfilloyev' },
  { platform: 'LinkedIn', label: 'linkedin.com/in/bnutfilloyev', href: 'https://linkedin.com/in/bnutfilloyev' },
  { platform: 'GitHub',   label: 'github.com/bnutfilloyev', href: 'https://github.com/bnutfilloyev' },
  { platform: 'Phone',    label: '+998 88 300 10 01',       href: 'tel:+998883001001' },
]

type Status = 'idle' | 'loading' | 'success' | 'error'

export default function Contact() {
  const [status, setStatus] = useState<Status>('idle')
  const [errorText, setErrorText] = useState('')

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setStatus('loading')
    const form = e.currentTarget
    const data = Object.fromEntries(new FormData(form))
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      })
      if (res.ok) { setStatus('success'); form.reset(); return }
      const body = await res.json().catch(() => ({}))
      setErrorText(body.error ?? 'The message could not be delivered.')
      setStatus('error')
    } catch {
      setErrorText('No connection to the server.')
      setStatus('error')
    }
  }

  return (
    <section className="contact" id="contact">
      <div className="wrap">
        <Reveal className="section-header">
          <h2 className="section-title" style={{ fontFamily: 'var(--font-serif)' }}>Contact</h2>
        </Reveal>

        <div className="contact-inner">
          <Reveal>
            <p className="contact-lead" style={{ fontFamily: 'var(--font-serif)' }}>
              Open to <strong>new projects</strong>,<br />
              collaborations &amp; full-time roles.
            </p>
            <ul className="contact-links">
              {links.map(l => (
                <li key={l.platform} className="contact-link-item">
                  <a href={l.href} className="contact-link"
                    target={l.href.startsWith('http') ? '_blank' : undefined}
                    rel={l.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  >
                    <span className="cl-platform" style={{ fontFamily: 'var(--font-mono)' }}>{l.platform}</span>
                    <span className="cl-label">{l.label}</span>
                    <span className="cl-arrow">→</span>
                  </a>
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={150}>
            <div className="contact-form-wrap">
              <p className="cform-title">Send a message</p>
              <form onSubmit={handleSubmit}>
                {/* Honeypot: hidden from people, filled in by bots */}
                <input className="hp" type="text" name="company" tabIndex={-1} autoComplete="off" aria-hidden="true" />
                <div className="frow">
                  <div className="fg">
                    <label htmlFor="f-name">Name</label>
                    <input id="f-name" name="name" type="text" placeholder="Your name" required maxLength={100} autoComplete="name" />
                  </div>
                  <div className="fg">
                    <label htmlFor="f-email">Email</label>
                    <input id="f-email" name="email" type="email" placeholder="your@email.com" required maxLength={200} autoComplete="email" />
                  </div>
                </div>
                <div className="fg">
                  <label htmlFor="f-subject">Subject</label>
                  <input id="f-subject" name="subject" type="text" placeholder="What's this about?" required maxLength={150} />
                </div>
                <div className="fg">
                  <label htmlFor="f-msg">Message</label>
                  <textarea id="f-msg" name="message" placeholder="Tell me about your project" required maxLength={5000} />
                </div>

                <button type="submit" className="btn btn-primary fsubmit" disabled={status === 'loading'}>
                  {status === 'loading' ? 'Sending…' : 'Send message'}
                </button>

                <div role="status" aria-live="polite">
                  {status === 'success' && (
                    <p className="form-msg success">Message sent. I&apos;ll reply to the email you gave.</p>
                  )}
                  {status === 'error' && (
                    <p className="form-msg error">
                      Message not sent: {errorText} You can email{' '}
                      <a href="mailto:bnutfilloyev@gmail.com">bnutfilloyev@gmail.com</a> instead.
                    </p>
                  )}
                </div>
              </form>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
