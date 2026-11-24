import { useState, useEffect, useRef } from 'react'
import logoPomo from '../assets/logo_pomo.png'
import './Navbar.css'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [dropdownOpen, setDropdownOpen] = useState(false)
  const [scrollProgress, setScrollProgress] = useState(0)
  const [active, setActive] = useState('#home')
  const dropdownRef = useRef(null)

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20)
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight
      if (totalHeight > 0) {
        setScrollProgress((window.scrollY / totalHeight) * 100)
      }
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Close dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setDropdownOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  const handleNav = (href) => {
    setActive(href)
    setMenuOpen(false)
    setDropdownOpen(false)
  }

  return (
    <nav className={`navbar ${scrolled ? 'navbar--scrolled' : ''} ${menuOpen ? 'navbar--open' : ''}`}>
      {/* Scroll Progress Line */}
      <div className="navbar__progress" style={{ width: `${scrollProgress}%` }} aria-hidden="true" />

      <div className="navbar__inner">
        <a href="#home" className="navbar__logo" onClick={() => handleNav('#home')}>
          <img src={logoPomo} alt="Smart Pomodoro Logo" className="navbar__logo-img" />
          <span className="navbar__brand">
            <span className="navbar__logo-text">
              <span className="navbar__logo-smart">Smart</span>{' '}
              <span className="navbar__logo-pomo">Pomodoro</span>
            </span>
            <span className="navbar__logo-sub">FOCUS · PLAN · ACHIEVE</span>
          </span>
        </a>

        <ul className="navbar__links">
          {/* 1. SẢN PHẨM DROPDOWN */}
          <li
            className={`navbar__item navbar__item--dropdown ${dropdownOpen ? 'navbar__item--open' : ''}`}
            ref={dropdownRef}
            onMouseEnter={() => setDropdownOpen(true)}
            onMouseLeave={() => setDropdownOpen(false)}
          >
            <button
              type="button"
              className={`navbar__link navbar__link--dropdown ${
                active === '#ecosystem' || active === '#eink' ? 'navbar__link--active' : ''
              }`}
              onClick={() => setDropdownOpen((v) => !v)}
              aria-expanded={dropdownOpen}
            >
              <span>Sản Phẩm</span>
              <svg
                className={`navbar__chevron ${dropdownOpen ? 'navbar__chevron--rotated' : ''}`}
                width="12"
                height="12"
                viewBox="0 0 12 12"
                fill="none"
              >
                <path
                  d="M2.5 4.5L6 8L9.5 4.5"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>

            <div className={`navbar__dropdown ${dropdownOpen ? 'navbar__dropdown--visible' : ''}`}>
              <a
                href="#ecosystem"
                className="navbar__dropdown-item"
                onClick={() => handleNav('#ecosystem')}
              >
                <div className="navbar__dropdown-icon navbar__dropdown-icon--ai">🤖</div>
                <div className="navbar__dropdown-content">
                  <div className="navbar__dropdown-header">
                    <span className="navbar__dropdown-title">SmartClock AI</span>
                    <span className="navbar__dropdown-badge navbar__dropdown-badge--ai">Flagship</span>
                  </div>
                  <p className="navbar__dropdown-desc">Bản để bàn · ESP32 · Loa Bluetooth · Màn hình màu</p>
                </div>
              </a>

              <div className="navbar__dropdown-divider" />

              <a
                href="#eink"
                className="navbar__dropdown-item"
                onClick={() => handleNav('#eink')}
              >
                <div className="navbar__dropdown-icon navbar__dropdown-icon--eink">🍅</div>
                <div className="navbar__dropdown-content">
                  <div className="navbar__dropdown-header">
                    <span className="navbar__dropdown-title">SmartClock Mini</span>
                    <span className="navbar__dropdown-badge navbar__dropdown-badge--eink">E-ink</span>
                  </div>
                  <p className="navbar__dropdown-desc">Bản bỏ túi 2.13" · Núm xoay cà chua · Pin trâu dịu mắt</p>
                </div>
              </a>
            </div>
          </li>

          {/* 2. ỨNG DỤNG APP */}
          <li className="navbar__item">
            <a
              href="#app"
              className={`navbar__link ${active === '#app' ? 'navbar__link--active' : ''}`}
              onClick={() => handleNav('#app')}
            >
              Ứng Dụng App
            </a>
          </li>

          {/* 3. TRẢI NGHIỆM & ĐỘI NGŨ */}
          <li className="navbar__item">
            <a
              href="#experience"
              className={`navbar__link ${active === '#experience' || active === '#team' ? 'navbar__link--active' : ''}`}
              onClick={() => handleNav('#experience')}
            >
              Trải Nghiệm & Đội Ngũ
            </a>
          </li>

          {/* 4. LIÊN HỆ */}
          <li className="navbar__item">
            <a
              href="#contact"
              className={`navbar__link ${active === '#contact' ? 'navbar__link--active' : ''}`}
              onClick={() => handleNav('#contact')}
            >
              Liên Hệ
            </a>
          </li>
        </ul>

        <a href="#contact" className="navbar__cta">
          <span>Đặt Mua Ngay</span>
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
            <path d="M2.5 7H11.5M11.5 7L7.5 3M11.5 7L7.5 11" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </a>

        <button
          className="navbar__burger"
          aria-label="Toggle menu"
          onClick={() => setMenuOpen((v) => !v)}
        >
          <span /><span /><span />
        </button>
      </div>

      {/* Mobile menu */}
      <div className="navbar__mobile">
        <div className="navbar__mobile-group-title">SẢN PHẨM</div>
        <a
          href="#ecosystem"
          className={`navbar__mobile-link ${active === '#ecosystem' ? 'navbar__mobile-link--active' : ''}`}
          onClick={() => handleNav('#ecosystem')}
        >
          🤖 SmartClock AI (Bản để bàn)
        </a>
        <a
          href="#eink"
          className={`navbar__mobile-link ${active === '#eink' ? 'navbar__mobile-link--active' : ''}`}
          onClick={() => handleNav('#eink')}
        >
          🍅 SmartClock Mini (Bản E-ink)
        </a>

        <div className="navbar__mobile-divider" />

        <a
          href="#app"
          className={`navbar__mobile-link ${active === '#app' ? 'navbar__mobile-link--active' : ''}`}
          onClick={() => handleNav('#app')}
        >
          📱 Ứng Dụng App
        </a>
        <a
          href="#experience"
          className={`navbar__mobile-link ${active === '#experience' ? 'navbar__mobile-link--active' : ''}`}
          onClick={() => handleNav('#experience')}
        >
          👥 Trải Nghiệm & Đội Ngũ
        </a>
        <a
          href="#contact"
          className={`navbar__mobile-link ${active === '#contact' ? 'navbar__mobile-link--active' : ''}`}
          onClick={() => handleNav('#contact')}
        >
          ✉️ Liên Hệ
        </a>

        <a href="#contact" className="btn-primary" style={{ margin: '16px 20px 0' }}>
          Đặt Mua Ngay
        </a>
      </div>
    </nav>
  )
}
