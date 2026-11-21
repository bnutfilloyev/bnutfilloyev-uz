export default function Footer() {
  return (
    <footer className="footer" role="contentinfo">
      <div className="wrap" style={{ fontFamily: 'var(--font-mono)' }}>
        <span className="footer-left">© {new Date().getFullYear()} Bekhruz Nutfilloev</span>
        <nav className="footer-links" aria-label="Social links">
          {[
            { label: 'Instagram', href: 'https://www.instagram.com/bnutfilloyev/' },
            { label: 'X',         href: 'https://x.com/bnutfilloyev' },
            { label: 'Telegram',  href: 'https://t.me/bnutfilloyev' },
            { label: 'LinkedIn',  href: 'https://linkedin.com/in/bnutfilloyev' },
            { label: 'GitHub',    href: 'https://github.com/bnutfilloyev' },
          ].map(l => (
            <a key={l.label} href={l.href} target="_blank" rel="noopener noreferrer">{l.label}</a>
          ))}
        </nav>
        <span className="footer-right">ML Engineer · Tashkent, UZ</span>
      </div>
    </footer>
  )
}
