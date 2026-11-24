import { useState } from 'react'
import einkRed from '../assets/pomo_eink_red.jpg'
import einkBlue from '../assets/pomo_eink_blue.jpg'
import einkYellow from '../assets/pomo_eink_yellow.jpg'
import einkPink from '../assets/pomo_eink_pink.jpg'
import einkOrange from '../assets/pomo_eink_orange.jpg'
import einkBlack from '../assets/pomo_eink_black.jpg'

import appImgClockList from '../assets/eink_app_1.jpg'
import appImgClockDetail from '../assets/eink_app_5.jpg'
import appImgPhoto from '../assets/eink_app_6.jpg'
import appImgText from '../assets/eink_app_7.jpg'
import appImgCountdown from '../assets/eink_app_8.jpg'
import appImgParking from '../assets/eink_app_9.png'
import './MiniEink.css'

const einkColors = [
  { name: 'Đỏ Cà Chua (Red)', color: '#EF4444', img: einkRed, desc: 'Biểu tượng quả cà chua Pomodoro truyền thống, hiển thị danh sách Việc hôm nay' },
  { name: 'Xanh Dương Pastel (Blue)', color: '#38BDF8', img: einkBlue, desc: 'Hiển thị giờ phút lớn, Âm lịch truyền thống, pin 2.9V và nhiệt độ 27°C' },
  { name: 'Vàng Nắng (Yellow)', color: '#FACC15', img: einkYellow, desc: 'Giao diện Lịch tháng 30/31 ngày trực quan kết hợp nhiệt độ phòng 30°C' },
  { name: 'Hồng Dễ Thương (Pink)', color: '#F472B6', img: einkPink, desc: 'Gam màu ngọt ngào, tạo điểm nhấn tươi tắn cho góc học tập' },
  { name: 'Cam Năng Động (Orange)', color: '#FB923C', img: einkOrange, desc: 'Màu cam nổi bật tiếp thêm năng lượng và nhiệt huyết làm việc' },
  { name: 'Đen Huyền Bí (Black)', color: '#1E293B', img: einkBlack, desc: 'Thiết kế đen bóng tối giản, sang trọng cho bàn làm việc hiện đại' },
]

const einkAppFeatures = [
  {
    id: 'clock-lunar',
    tabName: '🕒 Đồng Hồ & Âm Lịch',
    title: 'Đồng Hồ, Âm Lịch & Lịch Tháng',
    badge: 'CHẾ ĐỘ CHÍNH',
    desc: 'Hiển thị giờ phút sắc nét trên nền giấy điện tử, tích hợp Âm lịch Việt Nam, cảm biến nhiệt độ phòng (°C) và điện áp pin (3.5V). Hỗ trợ chuyển sang chế độ Lịch tháng toàn diện.',
    screenshot: appImgClockDetail,
    tags: ['Âm lịch 24-08', 'Nhiệt độ 29°C', 'Báo pin 3.5V', 'Đồng bộ giờ 1-chạm'],
  },
  {
    id: 'photos',
    tabName: '🖼️ Tải Ảnh Cá Nhân',
    title: 'Ảnh Toàn Màn Hình & Ảnh Kèm Đồng Hồ',
    badge: 'CÁ NHÂN HÓA',
    desc: 'Tự do chọn ảnh từ điện thoại, app tự động chuyển đổi sang thuật toán đen trắng 1-bit tương phản cao chuẩn E-ink. Hỗ trợ 2 tỷ lệ: Ảnh toàn màn hình (212×104 px) hoặc Ảnh ghép kèm đồng hồ (126×104 px).',
    screenshot: appImgPhoto,
    tags: ['212×104 Toàn màn hình', '126×104 Kèm giờ', 'Chuyển đổi Bitmap Đen Trắng', 'Xem trước thời gian thực'],
  },
  {
    id: 'countdown',
    tabName: '🎯 Đếm Ngày D-Day',
    title: 'Đếm Ngược Mục Tiêu & Sự Kiện',
    badge: 'KỶ LUẬT & ĐỘNG LỰC',
    desc: 'Đếm ngược số ngày đến các cột mốc quan trọng trong năm với các nhãn mẫu gợi ý nhanh: DEADLINE, EXAM, TET, EVENT, VACATION. Màn hình tự động hiển thị số ngày còn lại to rõ.',
    screenshot: appImgCountdown,
    tags: ['Đếm ngược D-Day', 'Nhãn DEADLINE / EXAM / TET', 'Tự động báo HÔM NAY', 'Chuông nhắc nhở'],
  },
  {
    id: 'messages',
    tabName: '✍️ Lời Nhắn & Ghi Chú',
    title: 'Văn Bản, Lời Nhắn & Bảng Giá',
    badge: 'GHI CHÚ THÔNG MINH',
    desc: 'Gửi lời nhắn động viên mỗi sáng (ví dụ: "Chúc bạn một ngày tốt lành!"), ghi nhớ việc cần làm hoặc hiển thị bảng giá sản phẩm bằng font chữ pixel retro độc đáo.',
    screenshot: appImgText,
    tags: ['Soạn văn bản tùy ý', 'Font Pixel Retro', 'Lưu nhiều mẫu thiết kế', 'Truyền Bluetooth tức thì'],
  },
  {
    id: 'parking',
    tabName: '🅿️ Bảng Số Đỗ Xe',
    title: 'Bảng Số Điện Thoại Khi Dừng Đỗ',
    badge: 'TIỆN ÍCH THỰC TẾ',
    desc: 'Biến chiếc đồng hồ E-ink thành bảng thông báo số điện thoại lịch sự đặt trên taplo ô tô khi dừng đỗ xe ngoài đường, kèm biểu tượng Parking [P] chuẩn chỉ.',
    screenshot: appImgParking,
    tags: ['Biểu tượng [P] Parking', 'Hiển thị 10 số rõ nét', 'Không sợ nắng nóng làm hỏng', 'Tiết kiệm pin tuyệt đối'],
  },
  {
    id: 'connect',
    tabName: '📱 Quản Lý Thiết Bị',
    title: 'Ứng Dụng POMO mini ANH (v1.1.5)',
    badge: '100% OFFLINE BẢO MẬT',
    desc: 'Quét và quản lý nhiều đồng hồ cùng lúc (DLG-CLOCK), kết nối Bluetooth nhanh dưới 2 mét, hỗ trợ bù giờ đồng hồ (Hour Offset) và đảm bảo 100% Offline không thu thập thông tin cá nhân.',
    screenshot: appImgClockList,
    tags: ['POMO mini ANH v1.1.5', '100% Offline', 'Quản lý nhiều đồng hồ', 'Bù giờ Hour Offset'],
  },
]

export default function MiniEink() {
  const [selectedColor, setSelectedColor] = useState(0)
  const [activeFeature, setActiveFeature] = useState(0)

  const activeEink = einkColors[selectedColor]
  const feat = einkAppFeatures[activeFeature]

  return (
    <section id="eink" className="section mini-eink">
      <div className="container">
        {/* Transition Kicker Divider */}
        <div className="mini-eink__transition-divider">
          <span className="mini-eink__kicker-pill">🍅 BỘ SƯU TẬP MỞ RỘNG • THIẾT KẾ CÀ CHUA POMODORO</span>
        </div>

        <header className="mini-eink__header text-center">
          <h2 className="display-md mini-eink__title">
            SmartClock Mini (E-ink).<br />
            Thiết Kế Cà Chua Đáng Yêu • Ứng Dụng POMO mini ANH.
          </h2>
          <p className="body-lg mini-eink__sub">
            Được lấy cảm hứng từ quả cà chua Pomodoro truyền thống với <strong>núm cuống lá xanh</strong> độc đáo, 
            SmartClock Mini sở hữu màn hình giấy điện tử E-ink 2.13 inch không ánh sáng xanh, 
            siêu tiết kiệm pin và bộ sưu tập 6 sắc màu thời trang rực rỡ!
          </p>
        </header>

        {/* Top Product Overview Grid */}
        <div className="mini-eink__grid">
          {/* Left: Product Image & Floating badges */}
          <div className="mini-eink__visual">
            <div className="mini-eink__img-wrap">
              <img
                src={activeEink.img}
                alt={activeEink.name}
                className="mini-eink__img"
              />
              <div className="mini-eink__badge mini-eink__badge--tl">
                <span>🍅</span> Cuống Lá Xanh Pomodoro
              </div>
              <div className="mini-eink__badge mini-eink__badge--br">
                <span>⚡</span> Pin dùng nhiều tuần
              </div>
            </div>

            {/* Color switcher preview */}
            <div className="mini-eink__color-picker">
              <span className="mini-eink__color-label">Chọn màu sắc:</span>
              <div className="mini-eink__color-dots">
                {einkColors.map((c, idx) => (
                  <button
                    key={idx}
                    className={`mini-eink__color-dot ${idx === selectedColor ? 'active' : ''}`}
                    style={{ backgroundColor: c.color }}
                    onClick={() => setSelectedColor(idx)}
                    title={c.name}
                  />
                ))}
              </div>
              <span className="mini-eink__selected-name">{activeEink.name}</span>
            </div>
          </div>

          {/* Right: Key Hardware Strengths */}
          <div className="mini-eink__content">
            <div className="mini-eink__tag">ĐẶC QUYỀN MÀN HÌNH E-INK 2.13 INCH</div>
            <h3 className="mini-eink__heading">Không Ánh Sáng Xanh • Dịu Mắt Suốt Ngày Dài</h3>
            <p className="mini-eink__desc">
              {activeEink.desc}. Kích thước màn hình <strong>2.13 inch (độ phân giải 250×128 px)</strong> mô phỏng trang sách giấy.
              Dù bạn đọc trong phòng hay ngoài trời, màn hình luôn rõ nét, không chớp nháy và không gây nhức mỏi mắt.
            </p>

            <div className="mini-eink__features-list">
              <div className="mini-eink__feat-item">
                <span className="mini-eink__feat-icon">🗓️</span>
                <div>
                  <strong>Tích hợp Âm lịch & Cảm biến nhiệt độ:</strong>
                  <p>Hiển thị chi tiết Thứ, Ngày, Tháng, Âm lịch truyền thống, độ C và điện áp pin trực quan.</p>
                </div>
              </div>

              <div className="mini-eink__feat-item">
                <span className="mini-eink__feat-icon">🔋</span>
                <div>
                  <strong>Bền bỉ vượt bậc với Pin 3.5V:</strong>
                  <p>Màn E-ink chỉ tiêu tốn năng lượng khi chuyển đổi nội dung. Pin duy trì nhiều tuần không lo hết điện.</p>
                </div>
              </div>

              <div className="mini-eink__feat-item">
                <span className="mini-eink__feat-icon">🔒</span>
                <div>
                  <strong>100% Offline & Bảo Mật Quyền Riêng Tư:</strong>
                  <p>Không cần internet, không tạo tài khoản, bảo mật tuyệt đối dữ liệu cá nhân của bạn.</p>
                </div>
              </div>

              <div className="mini-eink__feat-item">
                <span className="mini-eink__feat-icon">🪶</span>
                <div>
                  <strong>Kích thước bỏ túi ~85 gram:</strong>
                  <p>Dễ dàng đặt trên bàn làm việc, góc học tập hoặc mang theo trong balo mà không hề vướng víu.</p>
                </div>
              </div>
            </div>

            <div className="mini-eink__actions">
              <a
                href="#contact"
                className="btn-primary"
                onClick={() => window.dispatchEvent(new CustomEvent('smartpomo:select-product', { detail: 'eink' }))}
              >
                Đặt Mua Bản Mini E-ink →
              </a>
              <a href="#eink-app" className="btn-link">Khám phá App POMO mini ANH bên dưới ↓</a>
            </div>
          </div>
        </div>

        {/* ── App Features Interactive Showcase (POMO mini ANH) ── */}
        <div id="eink-app" className="eink-app-section">
          <header className="eink-app__header text-center">
            <span className="eink-app__pill">ỨNG DỤNG ĐIỀU KHIỂN CHUYÊN BIỆT</span>
            <h3 className="eink-app__title">Trải Nghiệm Ứng Dụng POMO mini ANH</h3>
            <p className="eink-app__desc">
              Kết nối Bluetooth một chạm, điều khiển mọi nội dung trên chiếc đồng hồ E-ink một cách trực quan nhất.
            </p>
          </header>

          {/* Navigation feature tabs */}
          <div className="eink-app__tabs">
            {einkAppFeatures.map((f, i) => (
              <button
                key={f.id}
                className={`eink-app__tab-btn ${i === activeFeature ? 'active' : ''}`}
                onClick={() => setActiveFeature(i)}
              >
                {f.tabName}
              </button>
            ))}
          </div>

          {/* Interactive feature display stage */}
          <div className="eink-app__stage">
            {/* Left detail card */}
            <div className="eink-app__detail">
              <div className="eink-app__badge">{feat.badge}</div>
              <h4 className="eink-app__feat-title">{feat.title}</h4>
              <p className="eink-app__feat-desc">{feat.desc}</p>

              <div className="eink-app__tag-cloud">
                {feat.tags.map((t, idx) => (
                  <span key={idx} className="eink-tag-chip">✓ {t}</span>
                ))}
              </div>

              <div className="eink-app__cta-wrap">
                <a href="#contact" className="btn-primary">Trải Nghiệm Cùng Đồng Hồ</a>
              </div>
            </div>

            {/* Right screenshot simulator frame */}
            <div className="eink-app__screen-wrap">
              <div className="eink-phone-frame">
                <div className="eink-phone-island" />
                <div className="eink-phone-body">
                  <img
                    src={feat.screenshot}
                    alt={feat.title}
                    className="eink-screenshot-img animate-fade"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}
