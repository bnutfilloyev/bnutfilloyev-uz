import Reveal from './Reveal'

const cats = [
  {
    label: 'Biometric AI',
    items: ['ArcFace / FaceNet', 'Liveness Detection', 'Palm Vein Recognition', 'Anti-Spoofing', 'YOLO', 'OpenCV'],
  },
  {
    label: 'Edge & Optimization',
    items: ['NVIDIA Jetson', 'CUDA / TensorRT', 'ONNX / ONNX Runtime', 'Model Quantization', 'AES-256 Encryption', 'C/C++ SDK'],
  },
  {
    label: 'ML & Frameworks',
    items: ['PyTorch', 'TensorFlow / Keras', 'Scikit-learn', 'LangGraph / LangChain', 'RAG / Vector Search', 'Python / C/C++'],
  },
  {
    label: 'MLOps & Infra',
    items: ['Docker / CI/CD', 'MLflow / TorchServe', 'FastAPI', 'Qdrant / FAISS', 'ElasticSearch', 'PostgreSQL'],
  },
]

export default function Skills() {
  return (
    <section className="skills" id="skills">
      <div className="wrap">
        <Reveal className="section-header">
          <h2 className="section-title" style={{ fontFamily: 'var(--font-serif)' }}>Skills</h2>
        </Reveal>

        <Reveal delay={100}>
          <div className="skills-grid">
            {cats.map(c => (
              <div key={c.label} className="skills-cell">
                <span className="skills-cell-label" style={{ fontFamily: 'var(--font-mono)' }}>
                  {c.label}
                </span>
                <ul className="skills-items">
                  {c.items.map(item => (
                    <li key={item} className="skill-item">{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  )
}
