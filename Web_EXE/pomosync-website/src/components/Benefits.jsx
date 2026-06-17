import './Benefits.css'
import productLifestyle from '../assets/product_lifestyle.png'

const benefits = [
  {
    num: '01',
    title: 'Năng suất cao hơn 40%',
    desc: 'Kỹ thuật Pomodoro đã được khoa học chứng minh. Smart Pomodoro biến phương pháp này thành thói quen tự nhiên với timer vật lý dễ dùng.',
  },
  {
    num: '02',
    title: 'Không cần nhìn điện thoại',
    desc: 'Màn hình TFT hiển thị đủ: giờ, lịch, thời tiết, pin. Giảm phụ thuộc điện thoại, tăng khả năng tập trung sâu.',
  },
  {
    num: '03',
    title: 'Mã nguồn mở hoàn toàn',
    desc: 'Firmware Arduino/ESP32 mở hoàn toàn. Tự tùy biến giao diện màn hình, âm thanh thông báo và logic Pomodoro theo ý muốn.',
  },
  {
    num: '04',
    title: 'Handmade · Độc bản',
    desc: 'Mỗi chiếc được in 3D và lắp ráp thủ công tại Việt Nam. Bạn không chỉ mua sản phẩm — bạn ủng hộ một maker community.',
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
              <img src={productLifestyle} alt="Smart Pomodoro on desk" className="benefits__img" />
              <div className="benefits__img-chip">
                <span className="benefits__chip-icon">⭐</span>
                <div>
                  <div className="benefits__chip-score">4.9 / 5.0</div>
                  <div className="benefits__chip-sub">Đánh giá từ cộng đồng maker</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Benefits list */}
          <div className="benefits__list-col">
            <p className="eyebrow">Lợi Ích</p>
            <h2 className="display-md benefits__title">
              Tại sao chọn<br />Smart Pomodoro?
            </h2>
            <p className="body-md benefits__sub">
              Không chỉ là loa. Không chỉ là đồng hồ. 
              Smart Pomodoro là người bạn đồng hành năng suất.
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
