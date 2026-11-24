import { useState, useRef, useEffect, useCallback } from 'react'
import smartclockAiReal from '../assets/smartclock_ai_real.jpg'
import einkRed from '../assets/pomo_eink_red.jpg'
import v1Img from '../assets/v1_product.png'
import v2Img from '../assets/product_hero.png'
import './Evolution.css'

const versions = [
  {
    tag: 'v1.0',
    year: '2025',
    name: 'Nguyên mẫu đầu tiên',
    subtitle: 'LED Dot-Matrix · Hình trụ',
    desc: 'Hình trụ nhỏ gọn với màn hình LED dot-matrix đỏ. Prototype thủ công 100%, vỏ in 3D, mạch tự thiết kế — khởi đầu của giấc mơ maker.',
    img: v1Img,
    highlights: ['LED dot-matrix đỏ', 'Vỏ trụ 3D print', 'Firmware v0.1', 'Dùng cá nhân'],
    accent: '#ff6b35',
  },
  {
    tag: 'v2.0',
    year: '2025',
    name: 'Smart Pomodoro Speaker',
    subtitle: 'TFT LCD · Dual Speaker · Rotary',
    desc: 'Nâng cấp toàn diện: hộp để bàn, 2 loa tròn dot-pattern, màn hình TFT màu hiển thị đồng hồ/lịch/thời tiết và núm vặn rotary encoder.',
    img: v2Img,
    highlights: ['Màn hình TFT màu', 'Loa kép Stereo', 'Vỏ in 3D thẩm mỹ', 'USB-C + Pin nội'],
    accent: '#00d4ff',
  },
  {
    tag: 'v3.0',
    year: '2026',
    name: 'SmartClock Mini (E-ink)',
    subtitle: 'Quả Cà Chua · Giấy Điện Tử E-ink',
    desc: 'Phiên bản nhỏ gọn hình quả cà chua với núm vặn cuống lá xanh, màn hình e-ink monochrome 2.13", điều khiển qua app POMO mini ANH 100% Offline.',
    img: einkRed,
    highlights: ['Thiết kế quả cà chua', 'Núm cuống lá xanh', 'Màn E-ink 2.13 inch', 'App POMO mini ANH'],
    accent: '#a855f7',
  },
  {
    tag: 'v4.0 (Hiện Tại)',
    year: '10/2026',
    name: 'SmartClock AI & Mini Ecosystem',
    subtitle: 'ESP32 Smart Clock + Flutter App + Gemini AI',
    desc: 'Cột mốc hoàn thiện toàn diện: Hệ sinh thái IoT đồng bộ 3 trụ cột kết nối không dây Bluetooth SPP/A2DP, thi đua năng suất nhóm với công thức điểm PRS, Trợ lý ảo Gemini 2.5 Flash và Digital Wellbeing chống xao nhãng.',
    img: smartclockAiReal,
    highlights: ['Đồng hồ AI ESP32 thật', 'Loa Bluetooth A2DP Lo-Fi', 'Thi đua xếp hạng PRS', 'Trợ lý AI Gemini 2.5 Coach'],
    accent: '#10b981',
  },
]

export default function Evolution() {
  const [active, setActive] = useState(3) // Mặc định mở phiên bản mới nhất v4.0
  const trackRef = useRef(null)
  const startX = useRef(0)
  const currentX = useRef(0)
  const isDragging = useRef(false)

  const goTo = useCallback((idx) => {
    const clamped = Math.max(0, Math.min(versions.length - 1, idx))
    setActive(clamped)
  }, [])

  // Keyboard navigation
  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === 'ArrowRight') goTo(active + 1)
      if (e.key === 'ArrowLeft') goTo(active - 1)
    }
    window.addEventListener('keydown', handleKey)
    return () => window.removeEventListener('keydown', handleKey)
  }, [active, goTo])

  // Touch / mouse drag handlers
  const onDragStart = (e) => {
    isDragging.current = true
    startX.current = e.touches ? e.touches[0].clientX : e.clientX
    currentX.current = 0
    if (trackRef.current) trackRef.current.style.transition = 'none'
  }
  const onDragMove = (e) => {
    if (!isDragging.current) return
    const x = e.touches ? e.touches[0].clientX : e.clientX
    currentX.current = x - startX.current
    if (trackRef.current) {
      const offset = -(active * 100) + (currentX.current / trackRef.current.parentElement.offsetWidth) * 100
      trackRef.current.style.transform = `translateX(${offset}%)`
    }
  }
  const onDragEnd = () => {
    if (!isDragging.current) return
    isDragging.current = false
    if (trackRef.current) trackRef.current.style.transition = ''
    const threshold = 60
    if (currentX.current < -threshold) goTo(active + 1)
    else if (currentX.current > threshold) goTo(active - 1)
    else goTo(active) // snap back
    currentX.current = 0
  }

  return (
    <section id="evolution" className="section evo">
      <div className="container">
        <header className="evo__header text-center">
          <p className="eyebrow">Hành Trình Đổi Mới</p>
          <h2 className="display-md evo__title">
            Từ Prototype Đơn Sơ Đến<br />Hệ Sinh Thái AI Toàn Diện.
          </h2>
          <p className="body-lg evo__sub">
            Vuốt để khám phá 4 thế hệ phát triển của dự án Smart Pomodoro.
          </p>
        </header>

        {/* ── Swipe Carousel ── */}
        <div
          className="evo__carousel"
          onMouseDown={onDragStart}
          onMouseMove={onDragMove}
          onMouseUp={onDragEnd}
          onMouseLeave={onDragEnd}
          onTouchStart={onDragStart}
          onTouchMove={onDragMove}
          onTouchEnd={onDragEnd}
        >
          <div
            className="evo__track"
            ref={trackRef}
            style={{ transform: `translateX(-${active * 100}%)` }}
          >
            {versions.map((v, i) => (
              <div className="evo__slide" key={i}>
                <div className="evo__card" style={{ '--v-accent': v.accent }}>
                  {/* Image */}
                  <div className="evo__card-img">
                    <img src={v.img} alt={v.name} draggable="false" />
                    <span className="evo__card-badge">{v.tag}</span>
                  </div>

                  {/* Info */}
                  <div className="evo__card-body">
                    <div className="evo__card-meta">
                      <span className="evo__card-year">{v.year}</span>
                      <span className="evo__card-dot">·</span>
                      <span className="evo__card-sub">{v.subtitle}</span>
                    </div>
                    <h3 className="evo__card-name">{v.name}</h3>
                    <p className="evo__card-desc">{v.desc}</p>
                    <ul className="evo__card-hl">
                      {v.highlights.map((h, j) => (
                        <li key={j}><span className="evo__hl-dot" />{h}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Nav arrows */}
          <button
            className="evo__arrow evo__arrow--prev"
            onClick={() => goTo(active - 1)}
            disabled={active === 0}
            aria-label="Previous"
          >
            ‹
          </button>
          <button
            className="evo__arrow evo__arrow--next"
            onClick={() => goTo(active + 1)}
            disabled={active === versions.length - 1}
            aria-label="Next"
          >
            ›
          </button>
        </div>

        {/* ── Dots / Progress ── */}
        <div className="evo__nav">
          {versions.map((v, i) => (
            <button
              key={i}
              className={`evo__dot ${i === active ? 'evo__dot--active' : ''}`}
              style={{ '--dot-accent': v.accent }}
              onClick={() => goTo(i)}
              aria-label={v.tag}
            >
              <span className="evo__dot-inner" />
              <span className="evo__dot-label">{v.tag}</span>
            </button>
          ))}
          {/* Progress bar */}
          <div className="evo__progress">
            <div
              className="evo__progress-fill"
              style={{
                width: `${((active) / (versions.length - 1)) * 100}%`,
                background: `linear-gradient(90deg, ${versions[0].accent}, ${versions[active].accent})`,
              }}
            />
          </div>
        </div>
      </div>
    </section>
  )
}
