import { useState } from 'react'
import './Contact.css'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', message: '', interest: 'purchase' })
  const [sent, setSent] = useState(false)

  const handleChange = e => setForm(prev => ({ ...prev, [e.target.name]: e.target.value }))
  const handleSubmit = e => {
    e.preventDefault()
    setSent(true)
  }

  return (
    <section id="contact" className="section contact">
      <div className="container">
        <div className="contact__split">
          {/* Left info */}
          <div className="contact__info">
            <p className="eyebrow">Liên Hệ</p>
            <h2 className="display-md contact__title">
              Đặt hàng.<br />Cùng làm cộng đồng.
            </h2>
            <p className="body-md contact__sub">
              Đặt hàng Smart Pomodoro, hỏi về firmware, tham gia cộng đồng maker
              hoặc đề xuất tính năng mới — chúng tôi luôn lắng nghe.
            </p>

            <div className="contact__channels">
              <a href="mailto:hello@smartpomodoro.vn" className="contact__channel">
                <span className="contact__channel-icon">✉️</span>
                <div>
                  <div className="contact__channel-label">Email</div>
                  <div className="contact__channel-value">hello@smartpomodoro.vn</div>
                </div>
              </a>
              <a href="https://www.facebook.com/share/1BKpFDM9oK/?mibextid=wwXIfr" target="_blank" rel="noopener" className="contact__channel">
                <span className="contact__channel-icon">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.469h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.469h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                </span>
                <div>
                  <div className="contact__channel-label">Facebook</div>
                  <div className="contact__channel-value">facebook.com/smart-pomodoro</div>
                </div>
              </a>
              <a href="https://www.tiktok.com/@smartpomodorohourglass?_r=1&_t=ZS-97HiUtYFgrx" target="_blank" rel="noopener" className="contact__channel">
                <span className="contact__channel-icon">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 2.23-.9 4.45-2.43 6.08-1.48 1.6-3.66 2.56-5.88 2.62-2.3.06-4.63-.5-6.38-2.02-1.78-1.55-2.8-3.92-2.73-6.27.06-2.22.95-4.38 2.39-6.01 1.4-1.58 3.51-2.58 5.67-2.67 0 1.34.02 2.68.01 4.02-.95.03-1.89.28-2.69.83-.87.59-1.44 1.57-1.52 2.62-.08 1.07.31 2.14 1.03 2.93.7.77 1.77 1.22 2.83 1.25 1.44.04 2.87-.61 3.65-1.78.68-1.01 1-2.25.96-3.46-.05-3.83-.02-7.66-.02-11.49z"/>
                  </svg>
                </span>
                <div>
                  <div className="contact__channel-label">Tiktok</div>
                  <div className="contact__channel-value">@smartpomodorohourglass</div>
                </div>
              </a>
            </div>
          </div>

          {/* Right form */}
          <div className="contact__form-wrap">
            {sent ? (
              <div className="contact__success">
                <span className="contact__success-icon">✅</span>
                <h3>Cảm ơn bạn!</h3>
                <p>Chúng tôi sẽ liên hệ trong vòng 24 giờ làm việc.</p>
                <button className="btn-ghost" onClick={() => setSent(false)}>Gửi thêm</button>
              </div>
            ) : (
              <form className="contact__form" onSubmit={handleSubmit}>
                <div className="contact__row">
                  <div className="contact__field">
                    <label htmlFor="cf-name">Họ và tên</label>
                    <input
                      id="cf-name"
                      name="name"
                      type="text"
                      placeholder="Nguyễn Văn A"
                      value={form.name}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="contact__field">
                    <label htmlFor="cf-email">Email</label>
                    <input
                      id="cf-email"
                      name="email"
                      type="email"
                      placeholder="example@email.com"
                      value={form.email}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>
                <div className="contact__field">
                  <label htmlFor="cf-phone">Số điện thoại</label>
                  <input
                    id="cf-phone"
                    name="phone"
                    type="tel"
                    placeholder="+84 900 000 000"
                    value={form.phone}
                    onChange={handleChange}
                  />
                </div>
                <div className="contact__field">
                  <label htmlFor="cf-interest">Quan tâm đến</label>
                  <select id="cf-interest" name="interest" value={form.interest} onChange={handleChange}>
                    <option value="purchase">Mua sản phẩm</option>
                    <option value="enterprise">Giá doanh nghiệp</option>
                    <option value="demo">Xem demo</option>
                    <option value="other">Khác</option>
                  </select>
                </div>
                <div className="contact__field">
                  <label htmlFor="cf-message">Lời nhắn</label>
                  <textarea
                    id="cf-message"
                    name="message"
                    rows="4"
                    placeholder="Cho chúng tôi biết bạn cần gì..."
                    value={form.message}
                    onChange={handleChange}
                  />
                </div>
                <button type="submit" className="btn-primary contact__submit">Gửi tin nhắn →</button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
