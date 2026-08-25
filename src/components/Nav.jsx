import './Nav.css'

const LINKS = [
  { href: '#work', label: 'Work' },
  { href: '#skills', label: 'Skills' },
  { href: '#log', label: 'Log' },
  { href: '#contact', label: 'Contact' },
]

export default function Nav() {
  return (
    <header className="nav">
      <div className="container nav__inner">
        <a href="#top" className="nav__brand mono">
          Naksh<span className="nav__brand-dot">.</span>Goyal
        </a>
        <nav className="nav__links">
          {LINKS.map((link) => (
            <a key={link.href} href={link.href} className="nav__link mono">
              {link.label}
            </a>
          ))}
        </nav>
        <a href="#contact" className="nav__cta mono">
          Get in Touch
        </a>
      </div>
    </header>
  )
}
