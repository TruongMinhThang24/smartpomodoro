import { useState, useEffect } from 'react'
import './BackToTop.css'

export default function BackToTop() {
  const [visible, setVisible] = useState(false)
  const [scrollPercent, setScrollPercent] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight
      if (totalHeight > 0) {
        setScrollPercent(Math.min(100, Math.round((scrollY / totalHeight) * 100)))
      }
      setVisible(scrollY > 350)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <div className={`floating-actions ${visible ? 'floating-actions--visible' : ''}`}>
      {/* Facebook Messenger Quick Link */}
      <a
        href="https://www.facebook.com/share/1BKpFDM9oK/?mibextid=wwXIfr"
        target="_blank"
        rel="noopener noreferrer"
        className="floating-btn floating-btn--chat"
        title="Nhắn tin tư vấn trên Facebook Fanpage"
        aria-label="Tư vấn Fanpage"
      >
        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2C6.477 2 2 6.145 2 11.258c0 2.908 1.455 5.503 3.735 7.159V22l3.438-1.887c.898.249 1.846.385 2.827.385 5.523 0 10-4.145 10-9.258C22 6.145 17.523 2 12 2zm1.042 12.445l-2.583-2.756-5.042 2.756 5.542-5.885 2.667 2.756 4.958-2.756-5.542 5.885z" />
        </svg>
        <span className="floating-tooltip">Tư vấn ngay</span>
      </a>

      {/* Back to Top Button with Circular Progress */}
      <button
        type="button"
        className="floating-btn floating-btn--top"
        onClick={scrollToTop}
        title="Lên đầu trang"
        aria-label="Lên đầu trang"
      >
        <svg className="floating-progress-ring" width="48" height="48" viewBox="0 0 48 48">
          <circle
            className="floating-progress-track"
            cx="24"
            cy="24"
            r="20"
            fill="none"
            strokeWidth="3"
          />
          <circle
            className="floating-progress-bar"
            cx="24"
            cy="24"
            r="20"
            fill="none"
            strokeWidth="3"
            style={{
              strokeDasharray: 125.66,
              strokeDashoffset: 125.66 - (125.66 * scrollPercent) / 100,
            }}
          />
        </svg>
        <span className="floating-arrow">↑</span>
      </button>
    </div>
  )
}
