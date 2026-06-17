import { useState, useEffect, useRef } from 'react'
import productHero from '../assets/product_hero.png'
import productFront from '../assets/product_front.png'
import productTop from '../assets/product_top.png'
import productSide from '../assets/product_side.png'
import productLifestyle from '../assets/product_lifestyle.png'
import './Hero.css'

const slides = [
  {
    img: productHero,
    label: '3D Render',
    angle: 'Phối cảnh',
  },
  {
    img: productFront,
    label: 'Front View',
    angle: 'Mặt trước',
  },
  {
    img: productTop,
    label: 'Top View',
    angle: 'Nhìn từ trên',
  },
  {
    img: productSide,
    label: 'Side View',
    angle: 'Mặt bên',
  },
  {
    img: productLifestyle,
    label: 'In Use',
    angle: 'Thực tế',
  },
]

export default function Hero({ heroRef }) {
  const [active, setActive] = useState(0)
  const [animating, setAnimating] = useState(false)
  const intervalRef = useRef(null)

  const goTo = (i) => {
    if (animating || i === active) return
    setAnimating(true)
    setTimeout(() => {
      setActive(i)
      setAnimating(false)
    }, 300)
  }

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setActive(prev => {
        setAnimating(true)
        setTimeout(() => setAnimating(false), 300)
        return (prev + 1) % slides.length
      })
    }, 3800)
    return () => clearInterval(intervalRef.current)
  }, [])

  return (
    <section id="home" className="hero" ref={heroRef}>
      {/* Background glow orbs */}
      <div className="hero__bg" aria-hidden="true">
        <div className="hero__orb hero__orb--1" />
        <div className="hero__orb hero__orb--2" />
        <div className="hero__orb hero__orb--3" />
      </div>

      <div className="hero__content container">
        {/* Left: Text */}
        <div className="hero__text animate-fadeUp">
          <div className="hero__kicker animate-fadeUp delay-1">
            <span className="hero__kicker-dot" />
            <p className="eyebrow">Mới nhất · Smart Pomodoro</p>
          </div>
          <h1 className="display-xl hero__headline animate-fadeUp delay-2">
            Tập trung.<br />Âm thanh.<br />
            <span className="hero__headline--accent">Thông minh.</span>
          </h1>
          <p className="body-lg hero__sub animate-fadeUp delay-3">
            Smart Pomodoro — thiết bị loa thông minh tích hợp đồng hồ, lịch, 
            thời tiết và hệ thống Pomodoro giúp bạn làm việc hiệu quả hơn mỗi ngày.
          </p>
          <div className="hero__actions animate-fadeUp delay-4">
            <a href="#contact" className="btn-primary">Mua Ngay</a>
            <a href="#features" className="btn-link">Khám Phá thêm</a>
          </div>
          <div className="hero__stats animate-fadeUp delay-5">
            <div className="hero__stat">
              <span className="hero__stat-num">2×</span>
              <span className="hero__stat-label">Loa full-range</span>
            </div>
            <div className="hero__stat-sep" />
            <div className="hero__stat">
              <span className="hero__stat-num">LCD</span>
              <span className="hero__stat-label">Màn hình TFT</span>
            </div>
            <div className="hero__stat-sep" />
            <div className="hero__stat">
              <span className="hero__stat-num">4</span>
              <span className="hero__stat-label">Núm điều khiển</span>
            </div>
          </div>
        </div>

        {/* Right: Image Carousel */}
        <div className="hero__visual animate-scaleIn delay-2">
          <div className="hero__img-wrap">
            <img
              src={slides[active].img}
              alt={slides[active].label}
              className={`hero__img ${animating ? 'hero__img--out' : 'hero__img--in'}`}
            />
            {/* Floating badges */}
            <div className="hero__badge hero__badge--tl">
              <span>⏱️</span> Pomodoro Timer
            </div>
            <div className="hero__badge hero__badge--br">
              <span style={{color:'var(--cyan)'}}>●</span> LCD LIVE
            </div>
          </div>

          {/* Angle selector */}
          <div className="hero__angles">
            {slides.map((s, i) => (
              <button
                key={i}
                className={`hero__angle-btn ${i === active ? 'hero__angle-btn--active' : ''}`}
                onClick={() => goTo(i)}
                aria-label={s.label}
              >
                <img src={s.img} alt={s.label} className="hero__thumb" />
                <span className="hero__thumb-label">{s.angle}</span>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="hero__scroll-hint">
        <div className="hero__scroll-line" />
        <span>Cuộn xuống</span>
      </div>
    </section>
  )
}
