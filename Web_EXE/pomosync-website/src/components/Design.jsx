import { useState } from 'react'
import smartclockAiReal from '../assets/smartclock_ai_real.jpg'
import smartclockAi3d from '../assets/smartclock_ai_3d.jpg'
import smartclockAiSide from '../assets/smartclock_ai_side.jpg'
import smartclockAiLifestyle from '../assets/smartclock_ai_lifestyle.jpg'
import einkRed from '../assets/pomo_eink_red.jpg'
import einkBlue from '../assets/pomo_eink_blue.jpg'
import einkYellow from '../assets/pomo_eink_yellow.jpg'
import einkBlack from '../assets/pomo_eink_black.jpg'
import './Design.css'

const models = [
  {
    id: 'smartwatch',
    name: 'SmartClock AI (Bản Loa & Màn TFT)',
    views: [
      {
        label: 'Ảnh thật sản phẩm',
        img: smartclockAiReal,
        note: 'Ảnh thực tế: Vỏ đứng, màn hình Pomodoro 25:00, nút bấm Start / Reset và khe thoát âm loa ngoài I2S'
      },
      { 
        label: 'Phối cảnh 3D', 
        img: smartclockAi3d, 
        note: 'Phối cảnh 3D chuẩn nguyên mẫu thực tế: Thân máy đứng, màn hình màu TFT 25:00, 5 khe loa và đế sau bo tròn chứa pin' 
      },
      { 
        label: 'Mặt bên & Cổng kết nối', 
        img: smartclockAiSide, 
        note: 'Cổng sạc Type-C, nút bấm cơ học chuyển chế độ nhanh, jack 3.5mm và khoang pin bo tròn ở mặt sau dưới' 
      },
      {
        label: 'Không gian bàn học',
        img: smartclockAiLifestyle,
        note: 'Setup bàn làm việc tối giản với SmartClock AI phát nhạc Lo-Fi và đếm ngược Pomodoro'
      },
    ],
    specs: [
      { label: 'Vi điều khiển', value: 'DOIT ESP32 DevKit V1 (Dual-Core 240MHz)' },
      { label: 'Màn hình hiển thị', value: 'TFT LCD Color Touchscreen (MCUFRIEND)' },
      { label: 'Chip thời gian thực', value: 'RTC DS3231 I2C (Pin nuôi độc lập)' },
      { label: 'Âm thanh Loa ngoài', value: 'Module giải mã I2S DAC + Còi Buzzer' },
      { label: 'Dual-Mode Bluetooth', value: 'A2DP Audio Sink + SPP / BLE Data Sync' },
      { label: 'Ứng dụng điều khiển', value: 'Flutter Mobile App (iOS / Android / Web)' },
      { label: 'Backend & AI Hub', value: 'FastAPI + MongoDB + Gemini 2.5 Flash' },
      { label: 'Kết nối nguồn & sạc', value: 'USB Type-C + Pin Lithium tích hợp' },
    ],
  },
  {
    id: 'eink',
    name: 'SmartClock Mini (Bản Giấy Điện Tử E-ink)',
    views: [
      {
        label: 'Đỏ Cà Chua',
        img: einkRed,
        note: 'Thiết kế quả cà chua Pomodoro độc đáo với núm vặn cuống lá xanh, hiển thị To-do list và ngày giờ'
      },
      {
        label: 'Xanh Dương',
        img: einkBlue,
        note: 'Chế độ đồng hồ giờ phút lớn, Âm lịch truyền thống, pin 2.9V và nhiệt độ 27°C'
      },
      {
        label: 'Vàng Tươi',
        img: einkYellow,
        note: 'Chế độ Lịch tháng chi tiết 30/31 ngày trực quan kết hợp nhiệt độ 30°C'
      },
      {
        label: 'Đen Huyền Bí',
        img: einkBlack,
        note: 'Bộ sưu tập 6 màu sắc thời trang: Đỏ, Xanh, Vàng, Hồng, Cam, Đen'
      },
    ],
    specs: [
      { label: 'Công nghệ màn hình', value: 'E-ink Paper-like 2.13 inch (250×128) chống mỏi mắt' },
      { label: 'Thiết kế độc quyền', value: 'Hình quả cà chua Pomodoro + Núm vặn cuống lá xanh' },
      { label: 'Vi điều khiển', value: 'ESP32 Ultra-Low-Power Architecture' },
      { label: 'Thời lượng pin', value: 'Nhiều tuần sau 1 lần sạc (Pin 3.5V, siêu tiết kiệm)' },
      { label: 'Kết nối không dây', value: 'Bluetooth kết nối ứng dụng POMO mini ANH (Offline)' },
      { label: 'Trọng lượng', value: '~85 gram (Cực nhẹ, bỏ túi tiện lợi)' },
      { label: 'Bộ sưu tập màu sắc', value: 'Đỏ cà chua, Xanh dương, Vàng, Hồng, Cam, Đen' },
      { label: 'Tính năng app', value: 'Đồng hồ, Âm lịch, Lịch tháng, D-Day, Ảnh Bitmap, Bảng đỗ xe' },
    ],
  },
]

export default function Design() {
  const [activeModel, setActiveModel] = useState(0)
  const [activeView, setActiveView] = useState(0)

  const currentModel = models[activeModel]
  const currentView = currentModel.views[activeView] || currentModel.views[0]

  const selectOrder = (interestKey) => {
    window.dispatchEvent(new CustomEvent('smartpomo:select-product', { detail: interestKey }))
  }

  return (
    <section id="design" className="section design section-dark">
      <div className="container-wide">
        <header className="design__header text-center">
          <p className="eyebrow-dark">THIẾT KẾ & PHẦN CỨNG</p>
          <h2 className="display-md design__title">
            2 Lựa Chọn Phần Cứng Đẳng Cấp.<br />Phù Hợp Mọi Nhu Cầu.
          </h2>
          <p className="design__sub body-md">
            Lựa chọn phiên bản <strong>SmartClock AI màn hình màu tích hợp Loa</strong> hoặc
            phiên bản <strong>SmartClock Mini E-ink nhỏ gọn siêu tiết kiệm pin</strong> tùy theo phong cách của bạn.
          </p>

          {/* Model Switcher Tabs */}
          <div className="design__model-switcher">
            {models.map((m, idx) => (
              <button
                key={m.id}
                type="button"
                className={`design__model-btn ${idx === activeModel ? 'active' : ''}`}
                onClick={() => {
                  setActiveModel(idx)
                  setActiveView(0)
                }}
              >
                {m.name}
              </button>
            ))}
          </div>
        </header>

        <div className="design__body">
          {/* Image viewer */}
          <div className="design__viewer">
            <div className="design__img-stage">
              <img src={currentView.img} alt={currentView.label} className="design__img" />
              <p className="design__img-note">{currentView.note}</p>
            </div>
            <div className="design__view-tabs">
              {currentModel.views.map((v, i) => (
                <button
                  key={i}
                  type="button"
                  className={`design__tab ${i === activeView ? 'design__tab--active' : ''}`}
                  onClick={() => setActiveView(i)}
                >
                  {v.label}
                </button>
              ))}
            </div>
          </div>

          {/* Specs */}
          <div className="design__specs">
            <h3 className="design__specs-title">Thông số: {currentModel.name}</h3>
            <ul className="design__spec-list">
              {currentModel.specs.map((s, i) => (
                <li key={i} className="design__spec-item">
                  <span className="design__spec-label">{s.label}</span>
                  <span className="design__spec-value">{s.value}</span>
                </li>
              ))}
            </ul>
            <a
              href="#contact"
              className="btn-primary design__specs-cta"
              onClick={() => selectOrder(currentModel.id === 'eink' ? 'eink' : 'purchase')}
            >
              Đặt hàng {currentModel.name} →
            </a>
          </div>
        </div>

        {/* Quick Comparison Matrix Table */}
        <div className="design__comparison">
          <div className="design__comparison-header text-center">
            <span className="design__comparison-pill">BẢNG ĐỐI CHIẾU TRỰC QUAN</span>
            <h3 className="design__comparison-title">
              So Sánh Nhanh 2 Dòng Sản Phẩm SmartClock
            </h3>
            <p className="design__comparison-sub">
              Giúp bạn dễ dàng chọn lựa người bạn đồng hành hoàn hảo cho không gian bàn học hay di động
            </p>
          </div>

          <div className="design__table-wrap">
            <table className="design__table">
              <thead>
                <tr>
                  <th>Đặc Điểm & Tiêu Chí</th>
                  <th className="th-highlight">
                    <span className="th-badge th-badge--ai">FLAGSHIP</span>
                    <span className="th-title">SmartClock AI</span>
                  </th>
                  <th>
                    <span className="th-badge th-badge--eink">E-INK</span>
                    <span className="th-title">SmartClock Mini</span>
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="td-feature">📍 Định vị sử dụng</td>
                  <td className="td-highlight">Bàn làm việc, góc học tập cố định</td>
                  <td>Bỏ túi, giảng đường, thư viện, du lịch</td>
                </tr>
                <tr>
                  <td className="td-feature">🖥️ Công nghệ màn hình</td>
                  <td className="td-highlight">TFT LCD Color Cảm ứng sống động</td>
                  <td>E-ink Paper-like 2.13" (Không mỏi mắt)</td>
                </tr>
                <tr>
                  <td className="td-feature">🔊 Âm thanh & Loa</td>
                  <td className="td-highlight">Loa ngoài I2S Stereo DAC + Nhạc Lo-Fi</td>
                  <td>Còi Buzzer báo hoàn thành chu kỳ</td>
                </tr>
                <tr>
                  <td className="td-feature">⚡ Vi điều khiển</td>
                  <td className="td-highlight">ESP32 Dual-Core 240MHz</td>
                  <td>ESP32 Ultra-Low Power</td>
                </tr>
                <tr>
                  <td className="td-feature">🔋 Pin & Nguồn điện</td>
                  <td className="td-highlight">Cổng sạc Type-C + Pin Lithium</td>
                  <td>Pin 3.5V siêu tiết kiệm (Dùng nhiều tuần)</td>
                </tr>
                <tr>
                  <td className="td-feature">📱 Ứng dụng điều khiển</td>
                  <td className="td-highlight">Flutter Mobile App (Cloud + AI Gemini)</td>
                  <td>POMO mini ANH (100% Offline bảo mật)</td>
                </tr>
                <tr>
                  <td className="td-feature">🧠 Trí tuệ nhân tạo</td>
                  <td className="td-highlight">Gemini 2.5 Flash Coach + BRIX Index</td>
                  <td>Tập trung hiển thị & Kỷ luật không xao nhãng</td>
                </tr>
                <tr>
                  <td className="td-feature">✨ Tiện ích nổi bật</td>
                  <td className="td-highlight">Thi đua phòng PRS, Lịch tuần, Thời tiết</td>
                  <td>Âm lịch, D-Day, Ảnh Bitmap, Bảng đỗ xe [P]</td>
                </tr>
                <tr>
                  <td className="td-feature">🛒 Lựa chọn ngay</td>
                  <td className="td-highlight">
                    <a href="#contact" className="btn-primary design__table-cta" onClick={() => selectOrder('purchase')}>
                      Đặt SmartClock AI →
                    </a>
                  </td>
                  <td>
                    <a href="#contact" className="btn-ghost design__table-cta" onClick={() => selectOrder('eink')}>
                      Đặt SmartClock Mini →
                    </a>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  )
}
