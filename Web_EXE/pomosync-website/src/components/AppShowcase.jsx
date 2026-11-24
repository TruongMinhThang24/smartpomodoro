import { useState } from 'react'
import './AppShowcase.css'

const appScreens = [
  {
    id: 'pomodoro',
    badge: 'CỐT LÕI',
    title: 'Pomodoro AI Đồng Bộ',
    subtitle: 'Kết nối Bluetooth SPP • Đồng bộ 1 chạm với ESP32',
    desc: 'Theo dõi chu kỳ 25/5 hoặc tùy chỉnh thời gian làm việc. Toàn bộ thông số thời gian đếm ngược, trạng thái tạm dừng và hoàn thành phiên được truyền tải trực tiếp giữa màn hình đồng hồ và điện thoại.',
    color: '#FF6B35',
    screenData: {
      header: 'Đang Tập Trung',
      timer: '24:18',
      mode: 'PHIÊN THỨ 2 / 4',
      status: 'Đã kết nối: ESP32_Pomodoro_Data',
      metrics: [
        { label: 'Thời gian làm', val: '25 phút' },
        { label: 'Nghỉ giải lao', val: '5 phút' },
        { label: 'Số lần tạm dừng', val: '0 lần' },
        { label: 'Âm thanh Loa', val: 'Lo-Fi Chill' },
      ],
      aiTip: '💡 AI Coach: Bạn đang duy trì sự tập trung rất tốt! Hãy cố gắng hoàn thành trọn vẹn phiên này để nhận trọn +15 điểm thưởng PRS.',
    },
  },
  {
    id: 'competition',
    badge: 'GAMIFICATION',
    title: 'Thi Đua Năng Suất (Competition)',
    subtitle: 'Đua top cùng bạn bè • Công thức điểm PRS minh bạch',
    desc: 'Tạo phòng thi đua 2 - 5 thành viên với mã code 6 ký tự. Bảng xếp hạng tự động tính điểm theo thời gian tập trung thực tế, cộng điểm hoàn thành phiên và trừ điểm nếu mở khóa điện thoại xao nhãng.',
    color: '#FFB800',
    screenData: {
      header: 'Phòng Thi Đua #ABX829',
      timer: 'Top 1 Hôm Nay',
      mode: 'CHU KỲ TUẦN • 5 THÀNH VIÊN',
      status: 'Xếp hạng tính theo điểm PRS',
      leaderboard: [
        { rank: '🥇 1', name: 'Chí Bảo (Bạn)', prs: '385 pts', sessions: '8 phiên' },
        { rank: '🥈 2', name: 'Minh Thắng', prs: '340 pts', sessions: '7 phiên' },
        { rank: '🥉 3', name: 'Thúy Anh', prs: '295 pts', sessions: '6 phiên' },
        { rank: '4', name: 'Huỳnh Như', prs: '260 pts', sessions: '5 phiên' },
        { rank: '5', name: 'Triệu Vy', prs: '220 pts', sessions: '4 phiên' },
      ],
      aiTip: '🏆 Công thức PRS = Thời gian tập trung (+1đ/p) + Thưởng phiên (+15đ) - Mở khóa điện thoại (-10đ/lần).',
    },
  },
  {
    id: 'ai-coach',
    badge: 'AI GEMINI',
    title: 'Trợ Lý Ảo AI Coach (Gemini)',
    subtitle: 'Phân tích dữ liệu học tập • Cảnh báo Burnout',
    desc: 'Tích hợp mô hình ngôn ngữ lớn Google Gemini 2.5 Flash. AI phân tích lịch sử tập trung, đo lường chỉ số kiệt sức (Burnout BRIX Index) và gợi ý lịch học cũng như thời gian nghỉ ngơi khoa học nhất.',
    color: '#8B5CF6',
    screenData: {
      header: 'AI Hub & Coach',
      timer: 'Sức Khỏe: Tốt (BRIX 18%)',
      mode: 'MÔ HÌNH GEMINI 2.5 FLASH',
      status: 'Đã phân tích 14 ngày qua',
      chat: [
        { sender: 'user', text: 'Hôm nay mình thấy hơi mỏi mắt sau 3 ca học liên tục.' },
        { sender: 'ai', text: 'Theo dữ liệu đồng hồ ESP32, bạn đã tập trung liên tục 110 phút và chỉ tạm dừng 1 lần. Mức BRIX cảnh báo quá tải nhẹ. Hãy bật loa nghe White Noise 10 phút và nhìn xa 20m nhé!' },
      ],
      aiTip: '✨ Trợ lý tự động đề xuất bài học, thời gian biểu và điều chỉnh chu kỳ Pomodoro theo nhịp sinh học của bạn.',
    },
  },
  {
    id: 'wellbeing',
    badge: 'KỶ LUẬT THÉP',
    title: 'Digital Wellbeing (Kỷ Luật Số)',
    subtitle: 'Đếm số lần mở khóa điện thoại • Triệt tiêu xao nhãng',
    desc: 'Theo dõi trực tiếp hành vi sử dụng điện thoại khi đang trong phiên Pomodoro. Mỗi lần mở khóa màn hình sẽ bị ghi nhận vào hệ thống nhằm giúp bạn hình thành thói quen không chạm vào smartphone khi đang học.',
    color: '#10B981',
    screenData: {
      header: 'Thống Kê Kỷ Luật Số',
      timer: 'Mở khóa: 2 lần',
      mode: 'MỨC ĐỘ TẬP TRUNG: 92%',
      status: 'Giảm 65% so với tuần trước',
      metrics: [
        { label: 'Thời gian học thực', val: '4h 15m' },
        { label: 'Thời gian xao nhãng', val: '8 phút' },
        { label: 'Phiên chuẩn 100%', val: '6/7 phiên' },
        { label: 'Chuỗi ngày Streak', val: '5 ngày 🔥' },
      ],
      aiTip: '🎯 Bạn đã tiết kiệm được hơn 1.5 giờ lướt mạng xã hội mỗi ngày nhờ việc để điện thoại xa và nhìn đồng hồ!',
    },
  },
  {
    id: 'schedule',
    badge: 'QUẢN LÝ THỜI GIAN',
    title: 'Lịch Nhắc Nhở Tuần (Schedule)',
    subtitle: 'Đồng bộ thời khóa biểu T2 - CN • Báo thức lên ESP32',
    desc: 'Lập kế hoạch môn học, dự án hay ca làm việc cho từng ngày trong tuần. Đúng giờ hẹn, hệ thống sẽ tự động gửi thông báo và kích hoạt màn hình đồng hồ ESP32 kèm chuông báo nhắc việc.',
    color: '#06B6D4',
    screenData: {
      header: 'Thời Khóa Biểu Tuần',
      timer: '14:00 - Ôn tập EXE401',
      mode: 'HÔM NAY: THỨ NĂM',
      status: 'Đã đồng bộ sang RTC DS3231',
      scheduleList: [
        { time: '08:00 - 10:00', task: 'Lập trình Firmware ESP32', done: true },
        { time: '10:15 - 11:45', task: 'Thiết kế giao diện Flutter App', done: true },
        { time: '14:00 - 16:30', task: 'Ôn tập & Báo cáo đồ án EXE401', current: true },
        { time: '19:30 - 21:00', task: 'Đua top Pomodoro cùng nhóm', done: false },
      ],
      aiTip: '⏰ Màn hình đồng hồ sẽ tự động sáng và rung chuông nhắc việc trước 5 phút.',
    },
  },
]

export default function AppShowcase() {
  const [activeTab, setActiveTab] = useState(0)
  const current = appScreens[activeTab]

  return (
    <section id="app" className="section app-showcase">
      <div className="container">
        <header className="app-showcase__header text-center">
          <p className="eyebrow">ỨNG DỤNG DI ĐỘNG FLUTTER</p>
          <h2 className="display-md app-showcase__title">
            Trực quan. Mạnh mẽ.<br />
            Đồng bộ hoàn hảo với Đồng hồ.
          </h2>
          <p className="body-lg app-showcase__sub">
            Ứng dụng di động <strong>Smart Pomodoro</strong> (Flutter) mang đến trải nghiệm điều khiển,
            thi đua năng suất, theo dõi kỷ luật số và trò chuyện với trợ lý ảo AI một cách mượt mà nhất.
          </p>
        </header>

        {/* Feature navigation tabs */}
        <div className="app-showcase__tabs">
          {appScreens.map((tab, idx) => (
            <button
              key={tab.id}
              className={`app-tab-btn ${idx === activeTab ? 'app-tab-btn--active' : ''}`}
              onClick={() => setActiveTab(idx)}
              style={{ '--tab-accent': tab.color }}
            >
              <span className="app-tab-badge">{tab.badge}</span>
              <span className="app-tab-name">{tab.title.split(' (')[0]}</span>
            </button>
          ))}
        </div>

        {/* Main showcase stage */}
        <div className="app-showcase__stage">
          {/* Left: Detailed text & capabilities */}
          <div className="app-showcase__info">
            <div className="app-showcase__pill" style={{ color: current.color, borderColor: current.color }}>
              {current.badge}
            </div>
            <h3 className="app-showcase__feature-title">{current.title}</h3>
            <p className="app-showcase__feature-subtitle">{current.subtitle}</p>
            <p className="app-showcase__feature-desc">{current.desc}</p>

            <div className="app-showcase__highlights">
              <div className="app-showcase__hl-item">
                <span className="app-showcase__hl-dot" style={{ backgroundColor: current.color }} />
                <span>Đồng bộ 2 chiều không dây với Smartwatch ESP32</span>
              </div>
              <div className="app-showcase__hl-item">
                <span className="app-showcase__hl-dot" style={{ backgroundColor: current.color }} />
                <span>Lưu trữ đám mây MongoDB & Máy chủ bảo mật FastAPI</span>
              </div>
              <div className="app-showcase__hl-item">
                <span className="app-showcase__hl-dot" style={{ backgroundColor: current.color }} />
                <span>Trực quan hóa đồ thị và chỉ số tiến độ thời gian thực</span>
              </div>
            </div>

            <div className="app-showcase__cta">
              <a href="#contact" className="btn-primary">Tải App & Trải Nghiệm</a>
              <a href="#ecosystem" className="btn-link">Xem Hệ Sinh Thái →</a>
            </div>
          </div>

          {/* Right: Phone mockup simulation */}
          <div className="app-showcase__phone-wrap">
            <div className="phone-mockup">
              {/* Phone speaker notch */}
              <div className="phone-mockup__notch">
                <div className="phone-mockup__camera" />
                <div className="phone-mockup__speaker" />
              </div>

              {/* Phone screen UI */}
              <div className="phone-mockup__screen">
                {/* Top App bar */}
                <div className="phone-appbar">
                  <div className="phone-appbar__title">SmartClock</div>
                  <div className="phone-appbar__status">
                    <span className="phone-dot-online" /> SPP Connected
                  </div>
                </div>

                {/* Body Content based on active tab */}
                <div className="phone-content animate-fade">
                  <div className="phone-card phone-card--hero" style={{ borderColor: current.color }}>
                    <div className="phone-card__tag">{current.screenData.mode}</div>
                    <div className="phone-card__big-timer">{current.screenData.timer}</div>
                    <div className="phone-card__status">{current.screenData.status}</div>
                  </div>

                  {/* If metrics exist */}
                  {current.screenData.metrics && (
                    <div className="phone-metrics-grid">
                      {current.screenData.metrics.map((m, i) => (
                        <div key={i} className="phone-metric-item">
                          <span className="phone-metric-label">{m.label}</span>
                          <span className="phone-metric-val">{m.val}</span>
                        </div>
                      ))}
                    </div>
                  )}

                  {/* If leaderboard exists */}
                  {current.screenData.leaderboard && (
                    <div className="phone-leaderboard">
                      {current.screenData.leaderboard.map((item, i) => (
                        <div key={i} className="phone-leader-row">
                          <span className="phone-leader-rank">{item.rank}</span>
                          <span className="phone-leader-name">{item.name}</span>
                          <span className="phone-leader-score">{item.prs}</span>
                        </div>
                      ))}
                    </div>
                  )}

                  {/* If chat exists */}
                  {current.screenData.chat && (
                    <div className="phone-chat-box">
                      {current.screenData.chat.map((msg, i) => (
                        <div key={i} className={`phone-bubble phone-bubble--${msg.sender}`}>
                          <p>{msg.text}</p>
                        </div>
                      ))}
                    </div>
                  )}

                  {/* If schedule list exists */}
                  {current.screenData.scheduleList && (
                    <div className="phone-schedule-list">
                      {current.screenData.scheduleList.map((sc, i) => (
                        <div key={i} className={`phone-schedule-item ${sc.current ? 'phone-schedule-item--active' : ''}`}>
                          <span className="phone-sc-time">{sc.time}</span>
                          <span className="phone-sc-task">{sc.task}</span>
                          <span className="phone-sc-check">{sc.done ? '✓' : sc.current ? '⏱' : '○'}</span>
                        </div>
                      ))}
                    </div>
                  )}

                  {/* AI Tip card at bottom */}
                  <div className="phone-tip-box">
                    <p>{current.screenData.aiTip}</p>
                  </div>
                </div>

                {/* Bottom App Navigation Bar */}
                <div className="phone-bottom-nav">
                  <span className={`phone-nav-btn ${activeTab === 0 ? 'active' : ''}`} onClick={() => setActiveTab(0)}>⏱️</span>
                  <span className={`phone-nav-btn ${activeTab === 1 ? 'active' : ''}`} onClick={() => setActiveTab(1)}>🏆</span>
                  <span className={`phone-nav-btn ${activeTab === 2 ? 'active' : ''}`} onClick={() => setActiveTab(2)}>🧠</span>
                  <span className={`phone-nav-btn ${activeTab === 3 ? 'active' : ''}`} onClick={() => setActiveTab(3)}>📊</span>
                  <span className={`phone-nav-btn ${activeTab === 4 ? 'active' : ''}`} onClick={() => setActiveTab(4)}>📅</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

