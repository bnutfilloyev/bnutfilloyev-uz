import Reveal from './Reveal'

const projects = [
  {
    num: '01',
    name: 'MyID — National Biometric Platform',
    desc: 'End-to-end facial recognition pipeline deployed across 50+ banks nationwide. Processes 10M+ authentication requests monthly at 99.7% accuracy with sub-200ms latency. Liveness detection achieving 98.5% anti-spoofing accuracy.',
    tags: ['PyTorch', 'ArcFace', 'ONNX', 'C/C++', 'TensorRT', 'FAISS'],
    year: '2021–2025',
    cat: 'Biometrics',
    link: null,
    org: 'UZINFOCOM',
  },
  {
    num: '02',
    name: 'PalmID — Palm Vein Recognition',
    desc: 'Production-ready palm vein recognition with C/C++ SDK for IoT deployment. 60% inference time reduction via ONNX + TensorRT acceleration. AES-256 model encryption on edge devices.',
    tags: ['C/C++', 'ONNX Runtime', 'TensorRT', 'CUDA', 'IoT'],
    year: '2022–2024',
    cat: 'Edge AI',
    link: null,
    org: 'UZINFOCOM',
  },
  {
    num: '03',
    name: 'AI Candidate Matching System',
    desc: 'RAG-based HR platform with semantic search across 1.6M student database. LaBSE multilingual embeddings, LangGraph orchestration, Qdrant vector store. End-to-end query in 3–5 seconds.',
    tags: ['RAG', 'LangGraph', 'Qdrant', 'LaBSE', 'FastAPI', 'PostgreSQL'],
    year: '2025–2026',
    cat: 'LLM / Search',
    link: null,
    org: 'AI Impl. Group',
  },
  {
    num: '04',
    name: 'Robocontest.uz — Autonomous Robotics',
    desc: 'Computer vision systems for competitive robotics supporting 500+ participants. Real-time object detection and tracking optimized for embedded hardware.',
    tags: ['YOLO', 'OpenCV', 'NVIDIA Jetson', 'TypeScript'],
    year: '2025',
    cat: 'Computer Vision',
    link: 'https://robocontest.uz',
    org: null,
  },
  {
    num: '05',
    name: 'Chest X-Ray Pneumonia Detection',
    desc: 'Full-stack medical AI for pneumonia detection from chest X-rays. EfficientNetB0 → ONNX, FastAPI backend, React frontend.',
    tags: ['EfficientNetB0', 'ONNX', 'FastAPI', 'React', 'TypeScript'],
    year: '2025',
    cat: 'Medical AI',
    link: 'https://github.com/bnutfilloyev/chest-xray-pneumonia-detection',
    org: null,
  },
  {
    num: '06',
    name: 'Proxora Global LLC',
    desc: 'Founded and led an IT consulting firm delivering AI-powered digital transformation solutions to 15+ enterprise clients across Uzbekistan.',
    tags: ['AI Strategy', 'MLOps', 'Consulting'],
    year: '2024–2025',
    cat: 'Venture',
    link: null,
    org: null,
  },
]

export default function Work() {
  return (
    <section className="work" id="work">
      <div className="wrap">
        <Reveal className="section-header">
          <h2 className="section-title" style={{ fontFamily: 'var(--font-serif)' }}>Selected Work</h2>
        </Reveal>

        <ul className="project-list">
          {projects.map((p, i) => (
            <Reveal key={p.num} as="li" className="project-item" delay={i * 60}>
              <span className="project-num" style={{ fontFamily: 'var(--font-mono)' }}>{p.year}</span>
              <div className="project-body">
                <h3 className="project-name">{p.name}</h3>
                <p className="project-desc">{p.desc}</p>
                <div className="project-tags">
                  {p.tags.map(t => (
                    <span key={t} className="tag" style={{ fontFamily: 'var(--font-mono)' }}>{t}</span>
                  ))}
                </div>
              </div>
              <div className="project-meta" style={{ fontFamily: 'var(--font-mono)' }}>
                <span className="project-cat">{p.cat}</span>
                <div className="project-links-meta">
                  {p.link && (
                    <a href={p.link} target="_blank" rel="noopener noreferrer" className="proj-link">
                      {p.link.includes('github') ? 'GitHub ↗' : 'Live ↗'}
                    </a>
                  )}
                  {p.org && <span className="proj-link">{p.org}</span>}
                </div>
              </div>
              {p.link && <span className="project-arrow" aria-hidden="true">↗</span>}
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  )
}
