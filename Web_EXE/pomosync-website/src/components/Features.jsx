import './Features.css'

const features = [
  {
    icon: '⏱️',
    title: 'Pomodoro AI Đồng Bộ',
    desc: 'Quản lý chu kỳ làm việc & nghỉ ngơi khoa học, đồng bộ đếm ngược tức thời giữa đồng hồ ESP32 và App qua Bluetooth SPP.',
    tag: 'ESP32 & App Sync',
  },
  {
    icon: '🎵',
    title: 'Loa Bluetooth A2DP Kép',
    desc: 'Vừa truyền dữ liệu học tập vừa stream nhạc Lo-Fi, White Noise chất lượng cao qua module giải mã âm thanh I2S DAC.',
    tag: 'Dual-Mode Audio',
  },
  {
    icon: '🧠',
    title: 'Trợ Lý Ảo AI Coach (Gemini)',
    desc: 'Phân tích dữ liệu học tập cá nhân, đo lường nguy cơ kiệt sức (Burnout BRIX) và đưa ra chiến lược nâng cao hiệu suất.',
    tag: 'Gemini 2.5 LLM',
  },
  {
    icon: '🏆',
    title: 'Thi Đua Năng Suất Nhóm',
    desc: 'Tạo phòng thi đua 2 - 5 người bạn bằng mã code 6 số. Bảng xếp hạng thời gian thực với điểm PRS minh bạch chống gian lận.',
    tag: 'PRS Competition',
  },
  {
    icon: '📵',
    title: 'Kỷ Luật Số (Digital Wellbeing)',
    desc: 'Tự động đếm số lần mở khóa điện thoại (Unlock Count) trong giờ học để triệt tiêu xao nhãng và tạo thói quen kỷ luật.',
    tag: 'Anti-Distraction',
  },
  {
    icon: '📅',
    title: 'Thời Khóa Biểu Tuần',
    desc: 'Lập lịch trình học tập từ Thứ 2 đến Chủ Nhật, tự động nhắc nhở và kích hoạt màn hình đồng hồ kèm chuông báo.',
    tag: 'Weekly Schedule',
  },
  {
    icon: '🕰️',
    title: 'Chip RTC DS3231 Độc Lập',
    desc: 'Chip thời gian thực chuyên dụng tích hợp pin nuôi riêng, giữ giờ chuẩn xác 100% kể cả khi ngắt nguồn hoặc không có Wi-Fi.',
    tag: 'High Precision RTC',
  },
  {
    icon: '🔄',
    title: 'Cập Nhật Không Dây OTA',
    desc: 'Dễ dàng nâng cấp Firmware đồng hồ và đồng bộ các thiết lập hệ thống từ xa thông qua ứng dụng di động.',
    tag: 'Wireless OTA Update',
  },
]

export default function Features() {
  return (
    <section id="features" className="section features">
      <div className="container">
        <header className="features__header text-center">
          <p className="eyebrow">TÍNH NĂNG VƯỢT TRỘI</p>
          <h2 className="display-md features__title">
            Công Nghệ Thông Minh.<br />Kỷ Luật Khoa Học.
          </h2>
          <p className="body-lg features__sub">
            Hệ sinh thái <strong>Smart Pomodoro</strong> trang bị đầy đủ công cụ từ phần cứng đến phần mềm
            giúp bạn làm chủ thời gian và bứt phá kết quả học tập, công việc.
          </p>
        </header>

        <div className="features__grid">
          {features.map((f, i) => (
            <article
              key={i}
              className="feat-card"
              style={{ animationDelay: `${i * 0.06}s` }}
            >
              <div className="feat-card__icon">{f.icon}</div>
              <span className="feat-card__tag">{f.tag}</span>
              <h3 className="feat-card__title">{f.title}</h3>
              <p className="feat-card__desc">{f.desc}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
