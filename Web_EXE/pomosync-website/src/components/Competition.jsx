import { useState } from 'react'
import './Competition.css'

export default function Competition() {
  const [activePeriod, setActivePeriod] = useState('week')
  const [simWorkMin, setSimWorkMin] = useState(120)
  const [simCompleted, setSimCompleted] = useState(4)
  const [simUnlocks, setSimUnlocks] = useState(2)

  // Calculate PRS score interactively
  const calculatedPRS = (simWorkMin * 1) + (simCompleted * 15) - (simUnlocks * 10)

  return (
    <section id="competition" className="section competition">
      <div className="container">
        <header className="competition__header text-center">
          <p className="eyebrow">TÍNH NĂNG ĐỘC QUYỀN • GAMIFICATION</p>
          <h2 className="display-md competition__title">
            Thi Đua Năng Suất Cùng Bạn Bè.<br />
            Kỷ Luật Thép Với Điểm PRS.
          </h2>
          <p className="body-lg competition__sub">
            Biến việc học một mình nhàm chán thành đấu trường năng suất đầy cảm hứng.
            Tạo phòng thi đua 2 - 5 thành viên với mã code 6 ký tự và leo bảng xếp hạng thời gian thực!
          </p>
        </header>

        {/* 2-Column layout: Interactive PRS Calculator & Live Leaderboard */}
        <div className="competition__grid">
          {/* Left: PRS Formula & Interactive Calculator */}
          <div className="competition__card competition__calc">
            <div className="comp-card__tag">CÔNG THỨC MINH BẠCH</div>
            <h3 className="comp-card__title">Chỉ Số Năng Suất (PRS - Productivity Score)</h3>
            <p className="comp-card__desc">
              Thay vì chỉ tính giờ ngồi lì vô nghĩa, hệ thống đo lường <strong>chất lượng tập trung thực tế</strong>.
              Dữ liệu được lấy tự động từ đồng hồ và điện thoại, không thể gian lận:
            </p>

            {/* Formula badge */}
            <div className="prs-formula-box">
              <code>PRS = (Thời gian tập trung) + (Thưởng hoàn thành) - (Phạt xao nhãng)</code>
            </div>

            {/* Interactive sliders */}
            <div className="prs-simulator">
              <h4 className="prs-sim__title">Trải nghiệm tính điểm thực tế:</h4>
              
              <div className="sim-control">
                <div className="sim-label-row">
                  <span>Thời gian tập trung:</span>
                  <strong className="sim-val">{simWorkMin} phút (+{simWorkMin}đ)</strong>
                </div>
                <input
                  type="range"
                  min="25"
                  max="300"
                  step="5"
                  value={simWorkMin}
                  onChange={(e) => setSimWorkMin(Number(e.target.value))}
                  className="sim-slider"
                />
              </div>

              <div className="sim-control">
                <div className="sim-label-row">
                  <span>Phiên hoàn thành trọn vẹn:</span>
                  <strong className="sim-val text-green">{simCompleted} phiên (+{simCompleted * 15}đ)</strong>
                </div>
                <input
                  type="range"
                  min="0"
                  max="10"
                  step="1"
                  value={simCompleted}
                  onChange={(e) => setSimCompleted(Number(e.target.value))}
                  className="sim-slider"
                />
              </div>

              <div className="sim-control">
                <div className="sim-label-row">
                  <span>Mở khóa điện thoại (xao nhãng):</span>
                  <strong className="sim-val text-red">{simUnlocks} lần (-{simUnlocks * 10}đ)</strong>
                </div>
                <input
                  type="range"
                  min="0"
                  max="10"
                  step="1"
                  value={simUnlocks}
                  onChange={(e) => setSimUnlocks(Number(e.target.value))}
                  className="sim-slider"
                />
              </div>

              {/* Total calculated result */}
              <div className="sim-result-card">
                <span>Tổng Điểm PRS Đạt Được:</span>
                <span className="sim-total-prs">{calculatedPRS} PTS</span>
              </div>
            </div>
          </div>

          {/* Right: Simulated Leaderboard */}
          <div className="competition__card competition__leaderboard">
            <div className="comp-card__tag">BẢNG XẾP HẠNG THỜI GIAN THỰC</div>
            <h3 className="comp-card__title">Phòng Thi Đua #ABX829</h3>
            <p className="comp-card__desc">
              Hệ thống tự động gom nhóm dữ liệu trong 24h, 7 ngày hoặc 30 ngày từ máy chủ MongoDB với tốc độ phản hồi cực nhanh (&lt; 0.1s).
            </p>

            {/* Filter buttons */}
            <div className="comp-filter-tabs">
              <button
                className={`comp-filter-btn ${activePeriod === 'day' ? 'active' : ''}`}
                onClick={() => setActivePeriod('day')}
              >
                Hôm Nay
              </button>
              <button
                className={`comp-filter-btn ${activePeriod === 'week' ? 'active' : ''}`}
                onClick={() => setActivePeriod('week')}
              >
                7 Ngày Gần Nhất
              </button>
              <button
                className={`comp-filter-btn ${activePeriod === 'month' ? 'active' : ''}`}
                onClick={() => setActivePeriod('month')}
              >
                Tháng Này
              </button>
            </div>

            {/* Leaderboard list */}
            <div className="comp-ranks">
              <div className="comp-rank-item comp-rank-item--gold">
                <span className="comp-medal">🥇</span>
                <div className="comp-user-meta">
                  <span className="comp-name">Chí Bảo (You)</span>
                  <span className="comp-stats">8 phiên • 0 mở khóa • Streak 5 ngày</span>
                </div>
                <span className="comp-score">485 pts</span>
              </div>

              <div className="comp-rank-item comp-rank-item--silver">
                <span className="comp-medal">🥈</span>
                <div className="comp-user-meta">
                  <span className="comp-name">Minh Thắng</span>
                  <span className="comp-stats">7 phiên • 1 mở khóa • Streak 4 ngày</span>
                </div>
                <span className="comp-score">415 pts</span>
              </div>

              <div className="comp-rank-item comp-rank-item--bronze">
                <span className="comp-medal">🥉</span>
                <div className="comp-user-meta">
                  <span className="comp-name">Thúy Anh</span>
                  <span className="comp-stats">6 phiên • 2 mở khóa • Streak 3 ngày</span>
                </div>
                <span className="comp-score">360 pts</span>
              </div>

              <div className="comp-rank-item">
                <span className="comp-medal">4</span>
                <div className="comp-user-meta">
                  <span className="comp-name">Huỳnh Như</span>
                  <span className="comp-stats">5 phiên • 2 mở khóa</span>
                </div>
                <span className="comp-score">290 pts</span>
              </div>

              <div className="comp-rank-item">
                <span className="comp-medal">5</span>
                <div className="comp-user-meta">
                  <span className="comp-name">Triệu Vy</span>
                  <span className="comp-stats">4 phiên • 3 mở khóa</span>
                </div>
                <span className="comp-score">230 pts</span>
              </div>
            </div>

            <div className="comp-room-info">
              <span>Mã phòng: <strong>ABX829</strong></span>
              <span>Thời hạn: <strong>7 ngày</strong></span>
              <span>Quy mô: <strong>Tối đa 5 người</strong></span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

