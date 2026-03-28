export default function Footer() {
  return (
    <footer className="footer" role="contentinfo">
      <div className="wrap" style={{ fontFamily: 'var(--font-mono)' }}>
        <span className="footer-left">Bekhruz Nutfilloev — © 2026</span>
        <nav className="footer-links" aria-label="Social links">
          {[
            { label: 'GitHub',   href: 'https://github.com/bnutfilloyev' },
            { label: 'LinkedIn', href: 'https://linkedin.com/in/bnutfilloyev' },
            { label: 'Telegram', href: 'https://t.me/bnutfilloyev' },
            { label: 'Twitter',  href: 'https://twitter.com/bnutfilloyev' },
          ].map(l => (
            <a key={l.label} href={l.href} target="_blank" rel="noopener noreferrer">{l.label}</a>
          ))}
        </nav>
        <span className="footer-right">ML Engineer · Tashkent, UZ</span>
      </div>
    </footer>
  )
}
