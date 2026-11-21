import type { Metadata, Viewport } from 'next'
import { existsSync } from 'node:fs'
import path from 'node:path'
import Link from 'next/link'
import { Space_Grotesk } from 'next/font/google'
import s from './mlgap.module.css'

const grotesk = Space_Grotesk({
  subsets: ['latin'],
  weight: ['500', '700'],
  variable: '--font-grotesk',
  display: 'swap',
})

const TITLE = '99.9% in the Lab. 19 Million in Real Life. — Bekhruz Nutfilloev'
const DESCRIPTION = 'Slides and resources from the ML Gap talk at Techstars Startup Week Tashkent.'
const URL = 'https://bnutfilloyev.uz/mlgap'
const TELEGRAM = 'https://t.me/bnutfilloyev'
const LINKEDIN = 'https://linkedin.com/in/bnutfilloyev'

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: URL },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: URL,
    siteName: 'Bekhruz Nutfilloev',
    type: 'website',
  },
  twitter: {
    card: 'summary',
    title: TITLE,
    description: DESCRIPTION,
  },
}

export const viewport: Viewport = {
  themeColor: '#0F1217',
}

// Checked at build time: drop public/mlgap/slides.pdf in and redeploy to switch the CTA on.
const hasSlides = existsSync(path.join(process.cwd(), 'public', 'mlgap', 'slides.pdf'))

// Slide 43 order ("@bnutfilloyev on Instagram · X · Telegram"), then LinkedIn.
const channels = [
  { name: 'Instagram', href: 'https://www.instagram.com/bnutfilloyev/' },
  { name: 'X',         href: 'https://x.com/bnutfilloyev' },
  { name: 'Telegram',  href: TELEGRAM },
  { name: 'LinkedIn',  href: LINKEDIN },
]

const steps = [
  { n: '01', name: 'Capture',  q: 'Is the frame usable?',   d: 'Blur, light, pose.' },
  { n: '02', name: 'Liveness', q: 'Is it a live person?',   d: 'Not paper, screen, mask or deepfake.' },
  { n: '03', name: 'Match',    q: 'Is it you?',             d: 'Compared with your reference photo.' },
  { n: '04', name: 'Decision', q: 'Yes, no, or try again.', d: 'The threshold decides.' },
]

const lessons = [
  'Metrics are not the product.',
  'Your users are not your test set.',
  'Your most motivated user is a fraudster.',
]

type Resource = { name: string; desc: string; href: string; host: string }

const standards: Resource[] = [
  {
    name: 'ISO/IEC 30107-3',
    desc: 'Biometric presentation attack detection — testing and reporting. Where APCER and BPCER are defined.',
    href: 'https://www.iso.org/standard/79520.html',
    host: 'iso.org',
  },
]

const datasets: Resource[] = [
  {
    name: 'CelebA-Spoof',
    desc: 'Large-scale face anti-spoofing dataset with rich annotations.',
    href: 'https://github.com/ZhangYuanhan-AI/CelebA-Spoof',
    host: 'github.com',
  },
  {
    name: 'OULU-NPU',
    desc: 'Mobile face presentation attack database with real-world variations.',
    href: 'https://sites.google.com/site/oulunpudatabase/',
    host: 'sites.google.com',
  },
  {
    name: 'CASIA-SURF',
    desc: 'Large-scale multi-modal face anti-spoofing dataset and benchmark.',
    href: 'https://arxiv.org/abs/1812.00408',
    host: 'arxiv.org',
  },
]

function ResourceList({ items }: { items: Resource[] }) {
  return (
    <ul className={s.resources}>
      {items.map(r => (
        <li key={r.name}>
          <a href={r.href} target="_blank" rel="noopener noreferrer" className={s.resource}>
            <span className={s.resName}>{r.name}</span>
            <span className={s.resDesc}>{r.desc}</span>
            <span className={s.resHost}>
              {r.host} <span aria-hidden="true">↗</span>
            </span>
          </a>
        </li>
      ))}
    </ul>
  )
}

export default function MlGap() {
  return (
    <div className={`${s.page} ${grotesk.variable}`}>
      <header className={s.hero}>
        <div className={s.container}>
          <p className={s.eyebrow}>
            ML GAP <span className={s.sep}>·</span> TECHSTARS STARTUP WEEK TASHKENT{' '}
            <span className={s.sep}>·</span> 24.11.2026
          </p>

          <div className={s.frame}>
            <span className={`${s.corner} ${s.tl}`} aria-hidden="true" />
            <span className={`${s.corner} ${s.tr}`} aria-hidden="true" />
            <span className={`${s.corner} ${s.bl}`} aria-hidden="true" />
            <span className={`${s.corner} ${s.br}`} aria-hidden="true" />
            <span className={s.scanLine} aria-hidden="true" />
            <h1 className={s.title}>
              <span className={s.line}>99.9%</span>{' '}
              <span className={s.line}>in the Lab.</span>{' '}
              <span className={`${s.line} ${s.orange}`}>19 Million</span>{' '}
              <span className={s.line}>in Real Life.</span>
            </h1>
          </div>

          <div className={s.intro}>
            <p className={s.subtitle}>
              How biometric systems are built, tested and defended — lessons from MyID and PalmID.
            </p>
            <p className={s.byline}>
              <span className={s.name}>Bekhruz Nutfilloev</span>
              <span className={s.role}>Lead AI Engineer, AIIG (AI Implementation Group)</span>
            </p>
          </div>

          <div className={s.actions}>
            {hasSlides ? (
              <a href="/mlgap/slides.pdf" className={s.primary}>
                Download the slides (PDF)
              </a>
            ) : (
              <p className={s.pending} aria-disabled="true">
                <span className={s.rec} aria-hidden="true" />
                Slides go live right after the talk
              </p>
            )}

            <div className={s.follow}>
              <p className={s.followHead} id="follow">@bnutfilloyev on</p>
              <ul className={s.channels} aria-labelledby="follow">
                {channels.map(c => (
                  <li key={c.name}>
                    <a
                      href={c.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={s.channel}
                      aria-label={`@bnutfilloyev on ${c.name}`}
                    >
                      {c.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </header>

      <main>
        <section className={`${s.section} ${s.panel}`} aria-labelledby="anatomy">
          <div className={s.container}>
            <h2 id="anatomy" className={s.h2}>Anatomy of two seconds</h2>
            <div className={s.track}>
              <span className={`${s.tick} ${s.tickStart}`} aria-hidden="true">0 s</span>
              <ol className={s.steps}>
                {steps.map(st => (
                  <li key={st.n} className={s.step}>
                    <span className={s.node} aria-hidden="true" />
                    <h3 className={s.stepName}>
                      <span className={s.stepNum}>{st.n}</span> {st.name}
                    </h3>
                    <p className={s.stepQ}>{st.q}</p>
                    <p className={s.stepD}>{st.d}</p>
                  </li>
                ))}
              </ol>
              <span className={`${s.tick} ${s.tickEnd}`} aria-hidden="true">2 s</span>
            </div>
          </div>
        </section>

        <section className={s.section} aria-labelledby="lessons">
          <div className={s.container}>
            <h2 id="lessons" className={s.h2}>Three lessons</h2>
            <ul className={s.lessons}>
              {lessons.map(l => (
                <li key={l} className={s.lesson}>{l}</li>
              ))}
            </ul>
          </div>
        </section>

        <section className={`${s.section} ${s.panel}`} aria-labelledby="deeper">
          <div className={s.container}>
            <h2 id="deeper" className={s.h2}>Go deeper</h2>
            <h3 className={s.groupHead}>The standard</h3>
            <ResourceList items={standards} />
            <h3 className={s.groupHead}>Face anti-spoofing datasets</h3>
            <ResourceList items={datasets} />
          </div>
        </section>
      </main>

      <footer className={s.footer}>
        <div className={s.container}>
          <a href={TELEGRAM} target="_blank" rel="noopener noreferrer" className={s.ask}>
            Questions? <span className={s.cyan}>Ask me on Telegram</span>
          </a>
          <Link href="/" className={s.home}>
            bnutfilloyev.uz
          </Link>
        </div>
      </footer>
    </div>
  )
}
