import './Footer.css'
import logoPomo from '../assets/logo_pomo.png'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container-wide footer__inner">
        <div className="footer__brand">
          <div className="footer__logo">
            <img src={logoPomo} alt="Smart Pomodoro Logo" className="footer__logo-img" />
            <div className="footer__brand-text">
              <span className="footer__logo-text">
                <span className="footer__logo-smart">Smart</span>{' '}
                <span className="footer__logo-pomo">Pomodoro</span>
              </span>
              <span className="footer__logo-sub">FOCUS · PLAN · ACHIEVE</span>
            </div>
          </div>
          <p className="footer__tagline">
            SmartPomodoro — Hệ sinh thái đồng hồ thông minh SmartClock AI &amp; SmartClock Mini (Dự án EXE401). 
            Tập trung sâu hơn. Làm việc thông minh hơn.
          </p>
          <div className="footer__socials">
            <a href="https://www.facebook.com/share/1BKpFDM9oK/?mibextid=wwXIfr" target="_blank" rel="noopener" aria-label="Facebook" className="footer__social">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.469h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.469h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
              </svg>
            </a>
            <a href="https://www.tiktok.com/@smartpomodorohourglass?_r=1&_t=ZS-97HiUtYFgrx" target="_blank" rel="noopener" aria-label="Tiktok" className="footer__social">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 2.23-.9 4.45-2.43 6.08-1.48 1.6-3.66 2.56-5.88 2.62-2.3.06-4.63-.5-6.38-2.02-1.78-1.55-2.8-3.92-2.73-6.27.06-2.22.95-4.38 2.39-6.01 1.4-1.58 3.51-2.58 5.67-2.67 0 1.34.02 2.68.01 4.02-.95.03-1.89.28-2.69.83-.87.59-1.44 1.57-1.52 2.62-.08 1.07.31 2.14 1.03 2.93.7.77 1.77 1.22 2.83 1.25 1.44.04 2.87-.61 3.65-1.78.68-1.01 1-2.25.96-3.46-.05-3.83-.02-7.66-.02-11.49z"/>
              </svg>
            </a>
          </div>
        </div>

        <div className="footer__cols">
          <div className="footer__col">
            <h4>Hệ Sinh Thái</h4>
            <a href="#ecosystem">3 Trụ Cột Công Nghệ</a>
            <a href="#app">Ứng Dụng Flutter Mobile</a>
            <a href="#competition">Thi Đua Năng Suất PRS</a>
            <a href="#features">Tính Năng Nổi Bật</a>
          </div>
          <div className="footer__col">
            <h4>Phần Cứng & Dự Án</h4>
            <a href="#design">Thông Số Kỹ Thuật</a>
            <a href="#evolution">Lộ Trình Phát Triển</a>
            <a href="#experience">Trải Nghiệm Thực Tế</a>
            <a href="#team">Nhóm Sáng Lập</a>
          </div>
          <div className="footer__col">
            <h4>Hỗ Trợ & Liên Hệ</h4>
            <a href="#contact">Đặt Hàng & Tư Vấn</a>
            <p className="footer__address">Địa chỉ: Số 600, Đường Nguyễn Văn Cừ nối dài, Phường An Bình, Thành phố Cần Thơ</p>
          </div>
        </div>
      </div>

      <div className="footer__bottom container-wide">
        <p>© 2026 SmartPomodoro · Dự Án EXE401 · Made with ❤️ in Vietnam</p>
        <div className="footer__bottom-links">
          <a href="#">Chính sách bảo mật</a>
          <a href="#">Điều khoản sử dụng</a>
        </div>
      </div>
    </footer>
  )
}
