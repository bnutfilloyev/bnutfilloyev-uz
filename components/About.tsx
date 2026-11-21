import Reveal from './Reveal'

interface GitHubStats { repos: number; followers: number }

export default function About({ stats }: { stats: GitHubStats | null }) {
  return (
    <section className="about" id="about">
      <div className="wrap">
        <Reveal className="section-header">
          <h2 className="section-title" style={{ fontFamily: 'var(--font-serif)' }}>About</h2>
        </Reveal>

        <div className="about-grid">
          <Reveal className="about-text">
            <p>
              I&apos;m a <strong>Machine Learning Engineer</strong> with 5+ years of experience
              building production AI trusted at national scale. My work lives at the intersection
              of computer vision, biometrics, and edge AI — engineering systems that operate
              reliably under real-world constraints, not just in notebooks.
            </p>
            <p>
              At <strong>UZINFOCOM LLC</strong>, I was a core engineer on MyID and PalmID — biometric
              platforms embedded in Uzbekistan&apos;s banking infrastructure. That meant adversarial conditions,
              regulatory compliance, encrypted model deployment on IoT devices, and latency
              budgets measured in milliseconds.
            </p>
            <p>
              I hold degrees in <strong>Software Engineering</strong> (TUIT) and
              <strong> Artificial Intelligence</strong> (Innopolis University), and have won three
              national and international AI competitions. Today I work at AI Implementation Group
              and build side projects that push the boundaries of what&apos;s possible.
            </p>
          </Reveal>

          <Reveal delay={150}>
            <ul className="about-facts" style={{ fontFamily: 'var(--font-mono)' }}>
              {[
                { key: 'Current',   val: 'AI Implementation Group' },
                { key: 'Location',  val: 'Tashkent, Uzbekistan' },
                { key: 'Education', val: 'TUIT + Innopolis University' },
                { key: 'GitHub',    val: <a href="https://github.com/bnutfilloyev" target="_blank" rel="noopener noreferrer">@bnutfilloyev</a> },
                { key: 'Public repos', val: stats ? `${stats.repos}` : '75' },
                { key: 'GitHub followers', val: stats ? `${stats.followers}` : '95' },
              ].map((f, i) => (
                <li key={i} className="about-fact">
                  <span className="fact-key">{f.key}</span>
                  <span className="fact-val">{f.val}</span>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
