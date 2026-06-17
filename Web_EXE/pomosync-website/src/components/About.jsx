import './About.css'

const milestones = [
  { year: '2025', text: 'Ý tưởng Smart Pomodoro ra đời trong phòng trọ sinh viên tại TP.HCM.' },
  { year: '2025', text: 'Prototype v1 hoàn thiện — in 3D, hàn tay, flash firmware ESP32 đầu tiên.' },
  { year: '2026', text: 'Ra mắt cộng đồng maker Việt Nam, nhận 200+ đơn đặt hàng đầu tiên.' },
  { year: '2026', text: 'Phiên bản v2 với màn hình TFT màu, loa đôi cải tiến và firmware mới.' },
]

const values = [
  { icon: '🛠️', label: 'Made by Makers', desc: 'Mỗi sản phẩm được in 3D và lắp ráp thủ công bởi đội ngũ kỹ sư trẻ Việt Nam.' },
  { icon: '📖', label: 'Open Source', desc: 'Firmware Arduino/ESP32 mở hoàn toàn. Fork, sửa và đóng góp trên GitHub.' },
  { icon: '🌱', label: 'Community First', desc: 'Xây dựng cùng cộng đồng maker — mọi feedback đều trở thành tính năng mới.' },
]

export default function About() {
  return (
    <section id="about" className="section about section-dark">
      <div className="container">
        <div className="about__intro text-center">
          <p className="eyebrow-dark">Về Chúng Tôi</p>
          <h2 className="display-md about__title">
            Làm bởi maker.<br />Dành cho mọi người.
          </h2>
          <p className="about__desc body-lg">
            Smart Pomodoro bắt đầu như một dự án cá nhân — một chiếc loa thông minh
            tích hợp timer Pomodoro để giúp người làm việc tại nhà tập trung hơn.
            Hôm nay, nó là sản phẩm handmade được hàng trăm người tin dùng
            và là biểu tượng của maker culture Việt Nam.
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
