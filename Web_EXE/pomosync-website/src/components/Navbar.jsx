import { useState, useEffect } from 'react'
import './Navbar.css'

const links = [
  { href: '#home', label: 'Trang Chủ' },
  { href: '#features', label: 'Tính Năng' },
  { href: '#design', label: 'Thiết Kế' },
  { href: '#benefits', label: 'Lợi Ích' },
  { href: '#about', label: 'Về Chúng Tôi' },
  { href: '#evolution', label: 'Phiên Bản' },
  { href: '#team', label: 'Nhóm' },
  { href: '#contact', label: 'Liên Hệ' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [active, setActive] = useState('#home')

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const handleNav = (href) => {
    setActive(href)
    setMenuOpen(false)
  }

  return (
    <nav className={`navbar ${scrolled ? 'navbar--scrolled' : ''} ${menuOpen ? 'navbar--open' : ''}`}>
      <div className="navbar__inner">
        <a href="#home" className="navbar__logo" onClick={() => handleNav('#home')}>
          <span className="navbar__logo-icon">⏱</span>
          <span className="navbar__logo-text">Smart Pomodoro</span>
        </a>

        <ul className="navbar__links">
          {links.map(l => (
            <li key={l.href}>
              <a
                href={l.href}
                className={`navbar__link ${active === l.href ? 'navbar__link--active' : ''}`}
                onClick={() => handleNav(l.href)}
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <a href="#contact" className="navbar__cta">Mua Ngay</a>

        <button
          className="navbar__burger"
          aria-label="Toggle menu"
          onClick={() => setMenuOpen(v => !v)}
        >
          <span /><span /><span />
        </button>
      </div>

      {/* Mobile menu */}
      <div className="navbar__mobile">
        {links.map(l => (
          <a
            key={l.href}
            href={l.href}
            className={`navbar__mobile-link ${active === l.href ? 'navbar__mobile-link--active' : ''}`}
            onClick={() => handleNav(l.href)}
          >
            {l.label}
          </a>
        ))}
        <a href="#contact" className="btn-primary" style={{margin:'16px 20px 0'}}>Mua Ngay</a>
      </div>
    </nav>
  )
}
