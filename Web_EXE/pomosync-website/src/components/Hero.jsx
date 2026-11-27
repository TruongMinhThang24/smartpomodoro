import { useState, useEffect, useRef } from 'react'
import smartclockAiReal from '../assets/smartclock_ai_real.jpg'
import smartclockAi3d from '../assets/smartclock_ai_3d.jpg'
import smartclockAiLifestyle from '../assets/smartclock_ai_lifestyle.jpg'
import './Hero.css'

const slides = [
  {
    id: 'ai-real',
    modelType: 'ai',
    img: smartclockAiReal,
    title: 'SmartClock AI',
    badge: 'FLAGSHIP ĐỂ BÀN',
    badgeColor: 'var(--cyan)',
    angle: 'Ảnh Thật AI',
    desc: 'Bản để bàn vỏ đứng tích hợp ESP32, màn hình màu Pomodoro 25:00, nút bấm Start / Reset & loa ngoài I2S.',
    specs: ['ESP32 Dual-Core 240MHz', 'Loa Bluetooth A2DP', 'Màn hình màu TFT', 'RTC DS3231'],
  },
  {
    id: '3d-render',
    modelType: '3d',
    img: smartclockAi3d,
    title: 'Phối Cảnh 3D SmartClock AI',
    badge: '3D CAD RENDER',
    badgeColor: 'var(--purple)',
    angle: 'Phối Cảnh 3D',
    desc: 'Phối cảnh 3D chuẩn nguyên mẫu: Thân đứng gọn gàng, màn hình màu Pomodoro 25:00, 5 khe loa và phần đế sau bo tròn chứa pin.',
    specs: ['Thiết kế chuẩn nguyên mẫu', 'Màn hình màu TFT LCD', '5 Khe thoát âm ngang', 'Đế pin sau bo tròn'],
  },
  {
    id: 'lifestyle',
    modelType: 'desk',
    img: smartclockAiLifestyle,
    title: 'Góc Bàn Học & Làm Việc',
    badge: 'LIFESTYLE MINIMALISM',
    badgeColor: 'var(--green)',
    angle: 'Góc Làm Việc',
    desc: 'SmartClock AI đặt vững chãi trên bàn làm việc, ánh sáng màn hình dịu mắt tạo cảm hứng tập trung sâu không xao nhãng.',
    specs: ['Setup bàn tối giản', 'Lo-Fi Chill Sound', 'Không đèn xanh hại mắt', 'Giảm 65% xao nhãng'],
  },
]

export default function Hero({ heroRef }) {
  const [active, setActive] = useState(0)
  const [animating, setAnimating] = useState(false)
  
  // Interactive Live Pomodoro Simulator
  const [pomoSeconds, setPomoSeconds] = useState(25 * 60)
  const [isRunning, setIsRunning] = useState(false)

  const timerRef = useRef(null)

  const goTo = (i) => {
    if (animating || i === active) return
    setAnimating(true)
    setTimeout(() => {
      setActive(i)
      setAnimating(false)
    }, 250)
  }

  // Auto slide
  useEffect(() => {
    const interval = setInterval(() => {
      setActive((prev) => {
        setAnimating(true)
        setTimeout(() => setAnimating(false), 250)
        return (prev + 1) % slides.length
      })
    }, 4500)
    return () => clearInterval(interval)
  }, [])

  // Interactive Live Timer logic
  useEffect(() => {
    if (isRunning) {
      timerRef.current = setInterval(() => {
        setPomoSeconds((prev) => {
          if (prev <= 1) {
            setIsRunning(false)
            clearInterval(timerRef.current)
            return 25 * 60
          }
          return prev - 1
        })
      }, 1000)
    } else {
      clearInterval(timerRef.current)
    }
    return () => clearInterval(timerRef.current)
  }, [isRunning])

  const formatTimer = (totalSec) => {
    const mins = Math.floor(totalSec / 60)
    const secs = totalSec % 60
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`
  }

  const adjustMinutes = (delta) => {
    if (isRunning) return
    setPomoSeconds((prev) => Math.max(5 * 60, Math.min(90 * 60, prev + delta * 60)))
  }

  const jumpToOrder = (interest) => {
    window.dispatchEvent(new CustomEvent('smartpomo:select-product', { detail: interest }))
  }

  const currentSlide = slides[active]

  return (
    <section id="home" className="hero" ref={heroRef}>
      {/* Background ambient glow orbs */}
      <div className="hero__bg" aria-hidden="true">
        <div className="hero__orb hero__orb--1" />
        <div className="hero__orb hero__orb--2" />
        <div className="hero__orb hero__orb--3" />
      </div>

      <div className="hero__content container">
        {/* Left: Text & Interactive Timer */}
        <div className="hero__text animate-fadeUp">
          <div className="hero__top-badges animate-fadeUp delay-1">
            <div className="hero__kicker">
              <span className="hero__kicker-dot" />
              <p className="eyebrow">HỆ SINH THÁI SMARTPOMODORO • ESP32 + FLUTTER + AI</p>
            </div>
            <a href="#experience" className="hero__proof-pill">
              <span className="hero__proof-stars">★ 4.95/5</span>
              <span>500+ lượt trải nghiệm tại ĐH FPT</span>
            </a>
          </div>

          <h1 className="hero__headline animate-fadeUp delay-2">
            <span className="hero__headline-line">Làm Chủ Thời Gian</span>
            <span className="hero__headline-line">
              Tập Trung Cùng <span className="hero__headline--accent">Trí Tuệ AI</span>
            </span>
          </h1>

          <div className="hero__feature-pills animate-fadeUp delay-2">
            <span className="hero__feat-pill"><span>⏱️</span> Tập trung sâu</span>
            <span className="hero__feat-pill"><span>🎧</span> Âm thanh Lo-Fi</span>
            <span className="hero__feat-pill"><span>🧠</span> Gemini AI Coach</span>
          </div>

          <p className="body-lg hero__sub animate-fadeUp delay-3">
            <strong>Smart Pomodoro</strong> kết hợp đồng hồ phần cứng <strong>SmartClock AI</strong>, 
            bản bỏ túi <strong>Mini E-ink</strong>, ứng dụng Flutter và Trợ lý AI Gemini — 
            giải pháp toàn diện giúp rèn kỷ luật số và thi đua năng suất cùng bạn bè.
          </p>

          <div className="hero__actions animate-fadeUp delay-4">
            <a href="#contact" className="btn-primary" onClick={() => jumpToOrder('purchase')}>
              <span>Đặt Mua & Trải Nghiệm</span>
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M3 8H13M13 8L8.5 3.5M13 8L8.5 12.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
            <a href="#ecosystem" className="btn-ghost">
              <span>Khám Phá Hệ Sinh Thái</span>
            </a>
            <a href="#eink" className="btn-link">
              Bản Mini E-ink 🍅 →
            </a>
          </div>

          {/* Interactive Mini Live Pomodoro Simulator Card */}
          <div className="hero__pomo-card animate-fadeUp delay-4">
            <div className="hero__pomo-header">
              <div className="hero__pomo-live-tag">
                <span className={`hero__pomo-pulse ${isRunning ? 'hero__pomo-pulse--running' : ''}`} />
                <span>MÔ PHỎNG POMODORO THỰC TẾ</span>
              </div>
              <span className="hero__pomo-status">
                {isRunning ? '🟢 Đang Đếm Ngược...' : '⚪ Sẵn Sàng'}
              </span>
            </div>

            <div className="hero__pomo-body">
              <div className="hero__pomo-clock-wrap">
                <div className="hero__pomo-clock">
                  <span className="hero__pomo-time">{formatTimer(pomoSeconds)}</span>
                  <span className="hero__pomo-mode">PHIÊN {Math.round(pomoSeconds / 60)} PHÚT TẬP TRUNG</span>
                </div>
                <div className="hero__pomo-steppers" title="Điều chỉnh thời gian (+5m / -5m)">
                  <button type="button" className="hero__pomo-step" onClick={() => adjustMinutes(5)} disabled={isRunning}>+5m</button>
                  <button type="button" className="hero__pomo-step" onClick={() => adjustMinutes(-5)} disabled={isRunning}>-5m</button>
                </div>
              </div>

              <div className="hero__pomo-controls">
                <button
                  type="button"
                  className={`hero__pomo-btn ${isRunning ? 'hero__pomo-btn--pause' : 'hero__pomo-btn--start'}`}
                  onClick={() => setIsRunning(!isRunning)}
                >
                  {isRunning ? '⏸ Tạm Dừng' : '▶ Bắt Đầu'}
                </button>
                <button
                  type="button"
                  className="hero__pomo-btn hero__pomo-btn--reset"
                  onClick={() => {
                    setIsRunning(false)
                    setPomoSeconds(25 * 60)
                  }}
                >
                  ↻ Reset
                </button>
              </div>
            </div>

            <div className="hero__pomo-tip">
              <span className="hero__pomo-tip-icon">✨</span>
              <span>
                <strong>Gemini AI Coach:</strong> Khi chu kỳ Pomodoro chạy trên đồng hồ, dữ liệu sẽ tự động đồng bộ sang Flutter App và tính điểm thi đua PRS.
              </span>
            </div>
          </div>

          {/* Hardware Stats Grid */}
          <div className="hero__stats animate-fadeUp delay-5">
            <div className="hero__stat">
              <span className="hero__stat-num">Dual-BT</span>
              <span className="hero__stat-label">A2DP & SPP Live</span>
            </div>
            <div className="hero__stat-sep" />
            <div className="hero__stat">
              <span className="hero__stat-num">2 Dòng</span>
              <span className="hero__stat-label">AI TFT & Mini E-ink</span>
            </div>
            <div className="hero__stat-sep" />
            <div className="hero__stat">
              <span className="hero__stat-num">Gemini</span>
              <span className="hero__stat-label">AI Coach 2.5</span>
            </div>
            <div className="hero__stat-sep" />
            <div className="hero__stat">
              <span className="hero__stat-num">PRS</span>
              <span className="hero__stat-label">Thi đua nhóm</span>
            </div>
          </div>
        </div>

        {/* Right: Interactive Hardware Stage */}
        <div className="hero__visual animate-scaleIn delay-2">
          {/* Main Stage */}
          <div className="hero__stage">
            <div className="hero__img-wrap">
              <img
                src={currentSlide.img}
                alt={currentSlide.title}
                className={`hero__img ${animating ? 'hero__img--out' : 'hero__img--in'}`}
              />

              {/* Pedestal light reflection */}
              <div className="hero__pedestal-glow" />

              {/* Floating tech badges */}
              <div className="hero__badge hero__badge--tl">
                <span>⏱️</span>
                <div>
                  <strong>{currentSlide.title}</strong>
                  <small>{currentSlide.badge}</small>
                </div>
              </div>

              <div className="hero__badge hero__badge--br">
                <span className="hero__badge-pulse" />
                <div>
                  <strong>{currentSlide.specs[0]}</strong>
                  <small>{currentSlide.specs[1]}</small>
                </div>
              </div>
            </div>

            {/* Slide Information Bar */}
            <div className="hero__slide-info">
              <div className="hero__slide-desc">
                <p>{currentSlide.desc}</p>
              </div>
              <div className="hero__slide-tags">
                {currentSlide.specs.map((spec, sIdx) => (
                  <span key={sIdx} className="hero__slide-tag">{spec}</span>
                ))}
              </div>
            </div>

            {/* Quick Angle / Model Selector Buttons */}
            <div className="hero__angles">
              {slides.map((s, i) => (
                <button
                  key={s.id}
                  type="button"
                  className={`hero__angle-btn ${i === active ? 'hero__angle-btn--active' : ''}`}
                  onClick={() => goTo(i)}
                  aria-label={s.title}
                >
                  <img src={s.img} alt={s.title} className="hero__thumb" />
                  <div className="hero__thumb-text">
                    <span className="hero__thumb-label">{s.angle}</span>
                    <span className="hero__thumb-badge">{s.modelType.toUpperCase()}</span>
                  </div>
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
