import './Benefits.css'
import smartclockAiLifestyle from '../assets/smartclock_ai_lifestyle.jpg'

const benefits = [
  {
    num: '01',
    title: 'Bứt phá năng suất với Pomodoro & PRS',
    desc: 'Kỹ thuật Pomodoro kết hợp hệ thống điểm thi đua PRS (Productivity Ranking Score) kích thích động lực học tập liên tục mỗi ngày.',
  },
  {
    num: '02',
    title: 'Cai nghiện smartphone & tập trung sâu',
    desc: 'Theo dõi thời gian trên màn hình đồng hồ ESP32 độc lập. Tính năng Digital Wellbeing ghi nhận số lần mở khóa điện thoại để triệt tiêu xao nhãng.',
  },
  {
    num: '03',
    title: 'Trợ lý AI Gemini 2.5 & BRIX Detector',
    desc: 'Phân tích dữ liệu học tập cá nhân, cảnh báo nguy cơ kiệt sức (Burnout BRIX) và đồng hành đưa ra lời khuyên khoa học.',
  },
  {
    num: '04',
    title: 'Không gian âm thanh thư giãn A2DP Lo-Fi',
    desc: 'Tận hưởng âm thanh Lo-Fi, White Noise chất lượng cao phát trực tiếp từ điện thoại sang loa ngoài đồng hồ qua kết nối Bluetooth I2S.',
  },
]

export default function Benefits() {
  return (
    <section id="benefits" className="section benefits">
      <div className="container">
        <div className="benefits__split">
          {/* Left: Image */}
          <div className="benefits__img-col">
            <div className="benefits__img-wrap">
              <img src={smartclockAiLifestyle} alt="SmartClock AI trên bàn học" className="benefits__img" />
              <div className="benefits__img-chip">
                <span className="benefits__chip-icon">⭐</span>
                <div>
                  <div className="benefits__chip-score">4.95 / 5.0</div>
                  <div className="benefits__chip-sub">Hệ sinh thái AI & Smartwatch EXE401</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Benefits list */}
          <div className="benefits__list-col">
            <p className="eyebrow">LỢI ÍCH ĐỘT PHÁ</p>
            <h2 className="display-md benefits__title">
              Tại sao chọn<br />Smart Pomodoro?
            </h2>
            <p className="body-md benefits__sub">
              Không chỉ là đồng hồ. Không chỉ là ứng dụng. 
              Đây là hệ sinh thái công nghệ toàn diện giúp bạn kiến tạo thói quen kỷ luật và làm việc đỉnh cao.
            </p>

            <ul className="benefits__list">
              {benefits.map((b, i) => (
                <li key={i} className="benefit-item">
                  <span className="benefit-item__num">{b.num}</span>
                  <div className="benefit-item__body">
                    <h3 className="benefit-item__title">{b.title}</h3>
                    <p className="benefit-item__desc">{b.desc}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
