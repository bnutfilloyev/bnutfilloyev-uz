import Reveal from './Reveal'

export default function Resume() {
  return (
    <section className="resume" id="resume">
      <div className="wrap">
        <Reveal className="section-header">
          <h2 className="section-title" style={{ fontFamily: 'var(--font-serif)' }}>Experience</h2>
          <span className="section-count" style={{ fontFamily: 'var(--font-mono)' }}>2021–present</span>
        </Reveal>

        <div className="resume-cols">
          <Reveal>
            <p className="resume-col-head" style={{ fontFamily: 'var(--font-mono)' }}>Work history</p>
            <ul className="exp-list">
              {[
                {
                  date: 'January 2025 — Present',
                  role: 'Lead AI Engineer',
                  org: 'AI Implementation Group',
                  desc: 'Architect and deploy production ML models for enterprise-scale AI solutions. Design MLOps pipelines for automated model training, testing, deployment, and monitoring.',
                },
                {
                  date: 'January — September 2025',
                  role: 'Lead AI Engineer',
                  org: 'Robocontest.uz',
                  desc: 'Computer vision for autonomous robotics platform supporting 500+ participants. Real-time object detection optimized for embedded hardware.',
                },
                {
                  date: 'September 2024 — November 2025',
                  role: 'CEO & Founder',
                  org: 'Proxora Global LLC',
                  desc: 'Founded IT consulting firm, AI-powered digital transformation for 15+ enterprise clients.',
                },
                {
                  date: 'November 2021 — January 2025',
                  role: 'Machine Learning Engineer & Researcher',
                  org: 'UZINFOCOM LLC',
                  desc: 'Core engineer on MyID facial recognition (50+ banks, 10M+ monthly requests, 99.7% accuracy). PalmID C/C++ SDK: 60% inference speedup via TensorRT. ArcFace/FaceNet on edge with 8× memory reduction.',
                },
                {
                  date: 'May — August 2021',
                  role: 'Computer Vision Engineer',
                  org: 'TASS Vision',
                  desc: 'Object detection on NVIDIA Jetson at 30 FPS. 45% latency reduction via CUDA optimization.',
                },
                {
                  date: 'January — July 2021',
                  role: 'Machine Learning Engineer Intern',
                  org: 'TTSUzbekistan',
                  desc: 'Automatic speech recognition for Uzbek with SOVA ASR — 92% word accuracy.',
                },
              ].map((e) => (
                <li key={e.date} className="exp-item">
                  <p className="exp-date" style={{ fontFamily: 'var(--font-mono)' }}>{e.date}</p>
                  <p className="exp-role">{e.role}</p>
                  <p className="exp-org">{e.org}</p>
                  {e.desc && <p className="exp-desc">{e.desc}</p>}
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={150}>
            <p className="resume-col-head" style={{ fontFamily: 'var(--font-mono)' }}>Education</p>
            <ul className="exp-list">
              {[
                { date: '2020 — 2024', role: 'B.Sc. Software Engineering', org: 'Tashkent University of Information Technology' },
                { date: '2022 — 2023', role: 'B.Eng. Artificial Intelligence', org: 'Innopolis University' },
              ].map(e => (
                <li key={e.date} className="exp-item">
                  <p className="exp-date" style={{ fontFamily: 'var(--font-mono)' }}>{e.date}</p>
                  <p className="exp-role">{e.role}</p>
                  <p className="exp-org">{e.org}</p>
                </li>
              ))}
            </ul>

            <p className="resume-col-head" style={{ fontFamily: 'var(--font-mono)', marginTop: 40 }}>Awards</p>
            <ul className="exp-list">
              {[
                { role: 'World AI & Data Challenge', org: 'Winner' },
                { role: 'Open Data Challenge Uzbekistan', org: 'Winner' },
                { role: 'Voice AI Challenge 2021', org: 'Winner' },
              ].map(e => (
                <li key={e.role} className="exp-item">
                  <p className="exp-role">{e.role}</p>
                  <p className="exp-org">{e.org}</p>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>

        <Reveal delay={200} className="resume-cta">
          <div className="resume-cta-text">
            <h3>Full resume available</h3>
            <p>PDF — detailed experience, projects and references.</p>
          </div>
          <a href="/resume.pdf" download="Bekhruz_Nutfilloev_Resume.pdf" className="btn btn-primary">
            Download PDF ↓
          </a>
        </Reveal>
      </div>
    </section>
  )
}
