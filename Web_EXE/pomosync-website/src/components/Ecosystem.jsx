import './Ecosystem.css'

const pillars = [
  {
    icon: '⌚',
    tag: 'PHẦN CỨNG ĐỂ BÀN IOT',
    title: 'SmartClock AI (ESP32)',
    desc: 'Thiết bị đồng hồ để bàn tích hợp vi điều khiển ESP32 Dual-Core 240MHz, màn hình màu TFT LCD cảm ứng, loa ngoài I2S DAC và chip thời gian thực RTC DS3231 độc lập.',
    features: [
      'Dual-Mode Bluetooth: A2DP phát nhạc Lo-Fi & SPP truyền dữ liệu',
      'Màn hình TFT LCD sắc nét hiển thị đồng hồ, đếm ngược & thời tiết',
      'Pin nuôi RTC DS3231 độc lập, thời gian chuẩn xác kể cả mất điện',
      '3 Nút bấm cơ học tương tác tức thì và chuông Buzzer báo chu kỳ',
    ],
    color: '#00d4ff',
  },
  {
    icon: '📱',
    tag: 'ỨNG DỤNG DI ĐỘNG',
    title: 'Flutter Mobile App',
    desc: 'Trung tâm điều khiển kết nối không dây với đồng hồ, biến quá trình học tập thành trải nghiệm thi đua thú vị, hỗ trợ tạo phòng đua bạn bè và giám sát thói quen số.',
    features: [
      'Đồng bộ chu kỳ Pomodoro 2 chiều không độ trễ qua Bluetooth SPP',
      'Thi đua nhóm (Competition) 2-5 người tính điểm PRS minh bạch',
      'Lập lịch tuần T2 - CN tự động báo thức trên màn hình đồng hồ',
      'Giám sát mở khóa điện thoại (Digital Wellbeing) triệt tiêu xao nhãng',
    ],
    color: '#06B6D4',
  },
  {
    icon: '🧠',
    tag: 'TRÍ TUỆ NHÂN TẠO',
    title: 'FastAPI & AI Coach (Gemini)',
    desc: 'Hệ thống Backend FastAPI bảo mật cao kết nối cơ sở dữ liệu MongoDB và mô hình ngôn ngữ lớn Google Gemini 2.5 Flash để cung cấp trí tuệ nhân tạo chuyên sâu.',
    features: [
      'Thu thập & phân tích dữ liệu tập trung thực tế sau mỗi phiên',
      'Công nghệ Burnout Detector đo lường chỉ số kiệt sức BRIX Index',
      'AI Coach cá nhân hóa gợi ý lịch học và lời khuyên bằng tiếng Việt',
      'API RESTful bảo mật, hỗ trợ đồng bộ dữ liệu thời gian thực và OTA',
    ],
    color: '#8B5CF6',
  },
]

export default function Ecosystem() {
  return (
    <section id="ecosystem" className="section ecosystem section-dark">
      <div className="container">
        <header className="ecosystem__header text-center">
          <p className="eyebrow-dark">HỆ SINH THÁI ĐỒNG BỘ 3 TRỤ CỘT</p>
          <h2 className="display-md ecosystem__title">
            Phần Cứng • Ứng Dụng • Trí Tuệ AI
          </h2>
          <p className="ecosystem__sub body-lg">
            Khác biệt hoàn toàn với những chiếc đồng hồ thông thường, <strong>Smart Pomodoro</strong> là 
            một hệ sinh thái công nghệ toàn diện kết hợp chặt chẽ giữa thiết bị IoT, ứng dụng di động và trí tuệ nhân tạo.
          </p>
        </header>

        {/* 3 Pillars Grid */}
        <div className="ecosystem__grid">
          {pillars.map((p, i) => (
            <div key={i} className="eco-card" style={{ '--card-accent': p.color }}>
              <div className="eco-card__glow" />
              <div className="eco-card__icon">{p.icon}</div>
              <span className="eco-card__tag">{p.tag}</span>
              <h3 className="eco-card__title">{p.title}</h3>
              <p className="eco-card__desc">{p.desc}</p>
              
              <div className="eco-card__divider" />

              <ul className="eco-card__features">
                {p.features.map((f, j) => (
                  <li key={j} className="eco-card__feat-item">
                    <span className="eco-card__check">✓</span>
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Real-time Connection Banner */}
        <div className="ecosystem__banner">
          <div className="eco-banner__item">
            <span className="eco-banner__num">240 MHz</span>
            <span className="eco-banner__label">ESP32 Dual-Core</span>
          </div>
          <div className="eco-banner__sep">⟷</div>
          <div className="eco-banner__item">
            <span className="eco-banner__num">SPP / A2DP</span>
            <span className="eco-banner__label">Dual Bluetooth</span>
          </div>
          <div className="eco-banner__sep">⟷</div>
          <div className="eco-banner__item">
            <span className="eco-banner__num">Gemini 2.5</span>
            <span className="eco-banner__label">AI Coach LLM</span>
          </div>
          <div className="eco-banner__sep">⟷</div>
          <div className="eco-banner__item">
            <span className="eco-banner__num">&lt; 0.1s</span>
            <span className="eco-banner__label">Tốc độ Đồng Bộ</span>
          </div>
        </div>
      </div>
    </section>
  )
}

