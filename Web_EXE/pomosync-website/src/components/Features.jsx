import './Features.css'

const features = [
  {
    icon: '⏱️',
    title: 'Hệ thống Pomodoro',
    desc: 'Tích hợp đồng hồ Pomodoro thông minh với 4 núm điều chỉnh thời gian làm việc, nghỉ ngơi và số phiên.',
    tag: 'Core Feature',
  },
  {
    icon: '🖥️',
    title: 'Màn hình TFT LCD',
    desc: 'Hiển thị đồng hồ, lịch tuần (MON-SUN), pin 85%, ngày tháng và thời tiết real-time ngay trên mặt thiết bị.',
    tag: 'Smart Display',
  },
  {
    icon: '🔊',
    title: 'Loa đôi 2 kênh',
    desc: 'Hai driver tròn full-range với lưới kim loại và thiết kế dot pattern cho âm thanh rõ ràng, cân bằng.',
    tag: 'Dual Speaker',
  },
  {
    icon: '🎛️',
    title: '4 Núm Rotary Encoder',
    desc: 'Bốn núm vặn vật lý trên đỉnh: điều chỉnh âm lượng, thời gian Pomodoro, mode và độ sáng màn hình.',
    tag: 'Physical Controls',
  },
  {
    icon: '🔴',
    title: 'LED Trạng thái',
    desc: 'Đèn LED đỏ tích hợp trên khe tản nhiệt hiển thị trạng thái: đang chạy, nghỉ, sạc pin nhanh chóng.',
    tag: 'Status LED',
  },
  {
    icon: '🔌',
    title: 'USB-C & Pin nội',
    desc: 'Sạc nhanh qua cổng USB-C. Pin lithium tích hợp dùng được 12+ giờ, không cần cắm điện liên tục.',
    tag: 'USB-C Fast Charge',
  },
]

export default function Features() {
  return (
    <section id="features" className="section features">
      <div className="container">
        <header className="features__header text-center">
          <p className="eyebrow">Tính Năng</p>
          <h2 className="display-md features__title">
            Mọi thứ bạn cần.<br />Trong một thiết bị.
          </h2>
          <p className="body-lg features__sub">
            Smart Pomodoro kết hợp loa, đồng hồ, lịch và timer Pomodoro — 
            thiết kế mở cho maker, tối ưu cho người dùng.
          </p>
        </header>

        <div className="features__grid">
          {features.map((f, i) => (
            <article
              key={i}
              className="feat-card"
              style={{ animationDelay: `${i * 0.08}s` }}
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
