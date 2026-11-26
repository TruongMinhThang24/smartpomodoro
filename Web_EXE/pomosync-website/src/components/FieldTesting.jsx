import { useState, useEffect, useCallback } from 'react'
import './FieldTesting.css'

// Import real-life activity photos
import activityTeam1 from '../assets/activity_team_1.jpg'
import activityTeam2 from '../assets/activity_team_2.jpg'
import activityBoothCrowd from '../assets/activity_booth_crowd.jpg'
import activityUserDemo from '../assets/activity_user_demo.jpg'
import activityLaptopDemo from '../assets/activity_laptop_demo.jpg'
import activityProductsTable from '../assets/activity_products_table.jpg'
import activityHallView from '../assets/activity_hall_view.jpg'
import activityStandees from '../assets/activity_standees.jpg'
import activityStandeePomo from '../assets/activity_standee_pomo.jpg'

const galleryData = [
  {
    id: 1,
    category: 'team',
    categoryLabel: 'Đội Ngũ Maker',
    title: 'Đội ngũ phát triển SmartClock cùng Giảng viên Hướng dẫn',
    desc: 'Nhóm 5 thành viên cùng Giảng viên hướng dẫn tại gian hàng trải nghiệm công nghệ SmartClock ở sảnh Đại học FPT.',
    badge: 'FPT University Cần Thơ',
    img: activityTeam1,
  },
  {
    id: 2,
    category: 'crowd',
    categoryLabel: 'Gian Hàng & Sự Kiện',
    title: 'Đông đảo sinh viên trải nghiệm thực tế tại gian hàng',
    desc: 'Hàng trăm bạn sinh viên hào hứng ghé thăm, dùng thử sản phẩm SmartClock AI và các phiên bản SmartClock Mini E-ink.',
    badge: '500+ Lượt Trải Nghiệm',
    img: activityBoothCrowd,
  },
  {
    id: 3,
    category: 'demo',
    categoryLabel: 'Trải Nghiệm Trực Tiếp',
    title: 'Giới thiệu & hướng dẫn các bạn sinh viên thao tác',
    desc: 'Khách tham quan được trực tiếp cầm trên tay phiên bản SmartClock Mini cuống cà chua và trải nghiệm màn hình E-ink không mỏi mắt.',
    badge: 'Tương Tác Trực Tiếp',
    img: activityUserDemo,
  },
  {
    id: 4,
    category: 'demo',
    categoryLabel: 'Trải Nghiệm Trực Tiếp',
    title: 'Trải nghiệm kết nối App Flutter & chấm điểm PRS',
    desc: 'Khách tham quan quét mã QR kết nối Bluetooth tức thì, thử nghiệm đặt đồng hồ đếm ngược Pomodoro và cá nhân hóa giao diện.',
    badge: 'Live App Demo',
    img: activityLaptopDemo,
  },
  {
    id: 5,
    category: 'product',
    categoryLabel: 'Sản Phẩm Trưng Bày',
    title: 'Khu vực trưng bày trọn bộ SmartClock AI & SmartClock Mini',
    desc: 'Bàn trưng bày với đầy đủ các phối màu rực rỡ của SmartClock Mini (Cam, Đen, Hồng, Xanh dương, Đỏ) và mẫu flagship SmartClock AI.',
    badge: 'Hardware Showcase',
    img: activityProductsTable,
  },
  {
    id: 6,
    category: 'crowd',
    categoryLabel: 'Gian Hàng & Sự Kiện',
    title: 'Không gian mở sôi nổi tại sảnh chính trường',
    desc: 'Khu vực trải nghiệm đặt tại vị trí trung tâm sảnh lớn, thu hút sự quan tâm của giảng viên và sinh viên các chuyên ngành.',
    badge: 'Không Gian Sôi Nổi',
    img: activityHallView,
  },
  {
    id: 7,
    category: 'standee',
    categoryLabel: 'Minigame & Quà Tặng',
    title: 'Minigame 10 câu hỏi thử tài kiến thức quản lý thời gian',
    desc: 'Chương trình Minigame "Tập trung hơn cùng SmartClock" tạo sân chơi tương tác và lan tỏa phương pháp Pomodoro khoa học.',
    badge: 'Minigame Hào Hứng',
    img: activityStandees,
  },
  {
    id: 8,
    category: 'standee',
    categoryLabel: 'Minigame & Quà Tặng',
    title: 'Standee chiến dịch "Tập trung hơn cùng SmartClock"',
    desc: 'Mascot quả cà chua thân thiện và thông điệp rèn luyện thói quen học tập sâu không gián đoạn.',
    badge: 'Thông Điệp Ý Nghĩa',
    img: activityStandeePomo,
  },
  {
    id: 9,
    category: 'team',
    categoryLabel: 'Đội Ngũ Maker',
    title: 'Niềm tự hào khi mang sản phẩm đến tay người dùng thực',
    desc: 'Được nhìn thấy người dùng thực tế yêu thích chiếc đồng hồ mình tự tay thiết kế và lập trình là động lực lớn nhất của nhóm.',
    badge: 'Đam Mê Sáng Tạo',
    img: activityTeam2,
  },
]

const categories = [
  { key: 'all', label: 'Tất Cả Hoạt Động' },
  { key: 'crowd', label: 'Gian Hàng & Không Khí' },
  { key: 'demo', label: 'Trải Nghiệm Trực Tiếp' },
  { key: 'product', label: 'Sản Phẩm Trưng Bày' },
  { key: 'team', label: 'Đội Ngũ Maker' },
]

export default function FieldTesting() {
  const [activeCategory, setActiveCategory] = useState('all')
  const [selectedIndex, setSelectedIndex] = useState(0)
  const [isLightboxOpen, setIsLightboxOpen] = useState(false)

  const filteredItems = activeCategory === 'all'
    ? galleryData
    : galleryData.filter(item => item.category === activeCategory)

  // Ensure selected index is valid when filtered
  const currentItem = filteredItems[selectedIndex] || filteredItems[0] || galleryData[0]

  const handleNext = useCallback(() => {
    setSelectedIndex((prev) => (prev + 1) % filteredItems.length)
  }, [filteredItems.length])

  const handlePrev = useCallback(() => {
    setSelectedIndex((prev) => (prev - 1 + filteredItems.length) % filteredItems.length)
  }, [filteredItems.length])

  // Keyboard navigation for lightbox
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!isLightboxOpen) return
      if (e.key === 'Escape') setIsLightboxOpen(false)
      if (e.key === 'ArrowRight') handleNext()
      if (e.key === 'ArrowLeft') handlePrev()
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [isLightboxOpen, handleNext, handlePrev])

  return (
    <section id="experience" className="section field-testing">
      <div className="container">
        {/* Header */}
        <header className="field-testing__header text-center">
          <div className="field-testing__pill">
            <span className="field-testing__pill-dot" />
            <span>Hoạt Động Trải Nghiệm Thực Tế</span>
          </div>
          <h2 className="display-md field-testing__title">
            SmartPomodoro Tại Gian Hàng Trải Nghiệm<br />
            <span className="field-testing__highlight">Đại Học FPT Cần Thơ</span>
          </h2>
          <p className="body-lg field-testing__sub">
            Sản phẩm được đưa ra kiểm chứng thực tế tại sự kiện công nghệ sinh viên.
            Hàng trăm bạn trẻ đã trực tiếp cầm trên tay, trải nghiệm tính năng và đóng góp phản hồi quý báu.
          </p>
        </header>

        {/* Real-world Impact Metrics */}
        <div className="field-testing__metrics">
          <div className="metric-box">
            <span className="metric-box__num">500+</span>
            <span className="metric-box__label">Lượt trải nghiệm trực tiếp</span>
            <span className="metric-box__desc">Sinh viên ghé thăm & thử nghiệm tính năng tại gian hàng</span>
          </div>
          <div className="metric-box">
            <span className="metric-box__num">98%</span>
            <span className="metric-box__label">Phản hồi tích cực</span>
            <span className="metric-box__desc">Yêu thích màn hình E-ink dịu mắt & loa Bluetooth AI</span>
          </div>
          <div className="metric-box">
            <span className="metric-box__num">100+</span>
            <span className="metric-box__label">Phiên Pomodoro thử nghiệm</span>
            <span className="metric-box__desc">Hoàn thành các chu kỳ tập trung 25 phút tại chỗ</span>
          </div>
          <div className="metric-box">
            <span className="metric-box__num">2 Dòng</span>
            <span className="metric-box__label">Sản phẩm thực tế</span>
            <span className="metric-box__desc">SmartClock AI để bàn & SmartClock Mini bỏ túi</span>
          </div>
        </div>

        {/* Category Filter Tabs */}
        <div className="field-testing__tabs">
          {categories.map((cat) => (
            <button
              key={cat.key}
              type="button"
              className={`field-testing__tab ${activeCategory === cat.key ? 'field-testing__tab--active' : ''}`}
              onClick={() => {
                setActiveCategory(cat.key)
                setSelectedIndex(0)
              }}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Spotlight Showcase */}
        <div className="field-testing__spotlight">
          <div
            className="field-testing__spotlight-imgwrap"
            onClick={() => setIsLightboxOpen(true)}
            title="Nhấn để phóng to ảnh"
          >
            <img
              src={currentItem.img}
              alt={currentItem.title}
              className="field-testing__spotlight-img"
            />
            <div className="field-testing__spotlight-overlay">
              <span className="field-testing__zoom-btn">
                🔍 Nhấn để xem toàn màn hình
              </span>
            </div>
            <div className="field-testing__spotlight-badge">
              {currentItem.badge}
            </div>
          </div>

          <div className="field-testing__spotlight-info">
            <div className="field-testing__info-meta">
              <span className="field-testing__cat-tag">{currentItem.categoryLabel}</span>
              <span className="field-testing__count-tag">
                {selectedIndex + 1} / {filteredItems.length}
              </span>
            </div>
            <h3 className="field-testing__spotlight-title">{currentItem.title}</h3>
            <p className="field-testing__spotlight-desc">{currentItem.desc}</p>

            <div className="field-testing__spotlight-nav">
              <button
                type="button"
                className="field-testing__nav-btn"
                onClick={handlePrev}
                aria-label="Ảnh trước"
              >
                ← Ảnh trước
              </button>
              <button
                type="button"
                className="field-testing__nav-btn field-testing__nav-btn--primary"
                onClick={handleNext}
                aria-label="Ảnh kế tiếp"
              >
                Ảnh kế tiếp →
              </button>
            </div>
          </div>
        </div>

        {/* Thumbnails strip */}
        <div className="field-testing__thumbs">
          {filteredItems.map((item, idx) => (
            <button
              key={item.id}
              type="button"
              className={`field-testing__thumb ${selectedIndex === idx ? 'field-testing__thumb--active' : ''}`}
              onClick={() => setSelectedIndex(idx)}
              aria-label={item.title}
            >
              <img src={item.img} alt={item.title} loading="lazy" />
              <span className="field-testing__thumb-num">#{idx + 1}</span>
            </button>
          ))}
        </div>

        {/* Real User Testimonial Quotes from the Event */}
        <div className="field-testing__quotes">
          <div className="quote-card">
            <div className="quote-card__stars">★★★★★</div>
            <p className="quote-card__text">
              “Màn hình E-ink của bản SmartClock Mini hiển thị như mực trên giấy thật, nhìn rất dễ chịu và không hề gây xao nhãng như màn hình điện thoại.”
            </p>
            <div className="quote-card__author">
              <div className="quote-card__avatar">🎓</div>
              <div>
                <strong>Sinh viên K18 FPT University</strong>
                <span>Trải nghiệm tại gian hàng</span>
              </div>
            </div>
          </div>

          <div className="quote-card">
            <div className="quote-card__stars">★★★★★</div>
            <p className="quote-card__text">
              “SmartClock AI phiên bản để bàn có loa Bluetooth phát nhạc tập trung rất hay. Chế độ đồng bộ thời gian thực qua ESP32 và chip RTC cực kỳ chính xác.”
            </p>
            <div className="quote-card__author">
              <div className="quote-card__avatar">💻</div>
              <div>
                <strong>Sinh viên Kỹ thuật Phần mềm</strong>
                <span>Thành viên tham gia Minigame</span>
              </div>
            </div>
          </div>

          <div className="quote-card">
            <div className="quote-card__stars">★★★★★</div>
            <p className="quote-card__text">
              “Ứng dụng POMO trên điện thoại kết nối Bluetooth rất nhanh, đổi ảnh nền 212x104 pixel đen trắng độc lạ và theo dõi điểm PRS thi đua bạn bè.”
            </p>
            <div className="quote-card__author">
              <div className="quote-card__avatar">✨</div>
              <div>
                <strong>Khách tham quan gian hàng</strong>
                <span>Đã đăng ký trải nghiệm</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Lightbox Modal */}
      {isLightboxOpen && (
        <div className="field-testing__lightbox" onClick={() => setIsLightboxOpen(false)}>
          <div className="field-testing__lightbox-content" onClick={(e) => e.stopPropagation()}>
            <button
              type="button"
              className="field-testing__lightbox-close"
              onClick={() => setIsLightboxOpen(false)}
              aria-label="Đóng"
            >
              ✕
            </button>
            <img
              src={currentItem.img}
              alt={currentItem.title}
              className="field-testing__lightbox-img"
            />
            <div className="field-testing__lightbox-caption">
              <span className="field-testing__lightbox-badge">{currentItem.badge}</span>
              <h4>{currentItem.title}</h4>
              <p>{currentItem.desc}</p>
            </div>
            <button
              type="button"
              className="field-testing__lightbox-nav field-testing__lightbox-nav--prev"
              onClick={handlePrev}
              aria-label="Trước"
            >
              ‹
            </button>
            <button
              type="button"
              className="field-testing__lightbox-nav field-testing__lightbox-nav--next"
              onClick={handleNext}
              aria-label="Sau"
            >
              ›
            </button>
          </div>
        </div>
      )}
    </section>
  )
}
