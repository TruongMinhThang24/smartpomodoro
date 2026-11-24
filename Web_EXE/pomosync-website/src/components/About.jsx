import './About.css'

const milestones = [
  { year: '2025', text: 'Ý tưởng khởi nguồn từ đồ án nghiên cứu giải pháp nâng cao tính kỷ luật học tập cho sinh viên.' },
  { year: '2025', text: 'Chế tạo thành công nguyên mẫu phần cứng ESP32 tích hợp màn hình TFT cảm ứng và loa ngoài I2S.' },
  { year: '2026', text: 'Phát triển ứng dụng Flutter App và hệ thống thi đua năng suất nhóm với công thức điểm PRS.' },
  { year: '10/2026', text: 'Tích hợp Trợ lý AI Google Gemini 2.5 Flash & ra mắt chính thức hệ sinh thái SmartClock (EXE401).' },
]

const values = [
  { icon: '🛠️', label: 'Tâm Huyết Kỹ Sư Trẻ', desc: 'Sản phẩm được phát triển và tối ưu bởi đội ngũ sinh viên đam mê công nghệ nhúng IoT và trí tuệ nhân tạo.' },
  { icon: '🧠', label: 'Trí Tuệ Nhân Tạo AI', desc: 'Ứng dụng mô hình LLM tiên tiến nhất giúp phân tích dữ liệu học tập và bảo vệ sức khỏe tinh thần (chống Burnout).' },
  { icon: '🤝', label: 'Gắn Kết & Kỷ Luật', desc: 'Xây dựng môi trường học tập thi đua lành mạnh, biến áp lực bài vở thành động lực bứt phá mỗi ngày.' },
]

export default function About() {
  return (
    <section id="about" className="section about section-dark">
      <div className="container">
        <div className="about__intro text-center">
          <p className="eyebrow-dark">VỀ DỰ ÁN EXE401</p>
          <h2 className="display-md about__title">
            Giải Pháp Năng Suất Đột Phá.<br />Kiến Tạo Thế Hệ Kỷ Luật.
          </h2>
          <p className="about__desc body-lg">
            <strong>SmartClock</strong> là dự án khởi nghiệp công nghệ thuộc môn học EXE401,
            nhằm giải quyết triệt để vấn đề xao nhãng vì điện thoại thông minh và thiếu động lực tự học của học sinh, sinh viên.
            Chúng tôi kết hợp sức mạnh của thiết bị phần cứng IoT thông minh, ứng dụng di động tiện ích và Trí tuệ Nhân tạo thế hệ mới.
          </p>
        </div>

        {/* Timeline */}
        <div className="about__timeline">
          {milestones.map((m, i) => (
            <div key={i} className="about__milestone">
              <div className="about__milestone-year">{m.year}</div>
              <div className="about__milestone-line">
                <div className="about__milestone-dot" />
                {i < milestones.length - 1 && <div className="about__milestone-track" />}
              </div>
              <p className="about__milestone-text">{m.text}</p>
            </div>
          ))}
        </div>

        {/* Values */}
        <div className="about__values">
          {values.map((v, i) => (
            <div key={i} className="about__value-card">
              <span className="about__value-icon">{v.icon}</span>
              <h3 className="about__value-label">{v.label}</h3>
              <p className="about__value-desc">{v.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
