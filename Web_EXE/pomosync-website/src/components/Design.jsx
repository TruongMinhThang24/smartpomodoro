import { useState } from 'react'
import productHero from '../assets/product_hero.png'
import productFront from '../assets/product_front.png'
import productSide from '../assets/product_side.png'
import './Design.css'

const views = [
  { 
    label: 'Phối cảnh 3D', 
    img: productHero, 
    note: 'Hai loa tròn dot-pattern + màn hình TFT + 4 núm điều khiển trên đỉnh' 
  },
  { 
    label: 'Mặt trước', 
    img: productFront, 
    note: 'Front view: bố cục loa trái–màn hình–loa phải đối xứng hoàn hảo' 
  },
  { 
    label: 'Mặt bên', 
    img: productSide, 
    note: 'Khe tản nhiệt dọc, LED đỏ trạng thái và cổng USB-C ở góc dưới' 
  },
]

const specs = [
  { label: 'Kích thước', value: '~200 × 90 × 75 mm' },
  { label: 'Vỏ máy', value: 'Nhựa 3D Print (PLA/PETG)' },
  { label: 'Màn hình', value: 'TFT LCD 2.8" full color' },
  { label: 'Loa', value: '2× 40mm full-range driver' },
  { label: 'Điều khiển', value: '4× Rotary Encoder knob' },
  { label: 'Kết nối', value: 'USB-C sạc + truyền dữ liệu' },
  { label: 'LED', value: 'LED đỏ trạng thái (khe tản nhiệt)' },
  { label: 'Pin', value: 'Li-ion 3000mAh, 12+ giờ' },
]

export default function Design() {
  const [active, setActive] = useState(0)

  return (
    <section id="design" className="section design section-dark">
      <div className="container-wide">
        <header className="design__header text-center">
          <p className="eyebrow-dark">Thiết Kế</p>
          <h2 className="display-md design__title">
            Handcrafted.<br />Mỗi chi tiết có lý do.
          </h2>
          <p className="design__sub body-md">
            Vỏ máy in 3D thủ công, lưới loa dot-pattern độc đáo — 
            thiết kế bởi maker, dành cho maker và người yêu công nghệ.
          </p>
        </header>

        <div className="design__body">
          {/* Image viewer */}
          <div className="design__viewer">
            <div className="design__img-stage">
              <img src={views[active].img} alt={views[active].label} className="design__img" />
              <p className="design__img-note">{views[active].note}</p>
            </div>
            <div className="design__view-tabs">
              {views.map((v, i) => (
                <button
                  key={i}
                  className={`design__tab ${i === active ? 'design__tab--active' : ''}`}
                  onClick={() => setActive(i)}
                >
                  {v.label}
                </button>
              ))}
            </div>
          </div>

          {/* Specs */}
          <div className="design__specs">
            <h3 className="design__specs-title">Thông số kỹ thuật</h3>
            <ul className="design__spec-list">
              {specs.map((s, i) => (
                <li key={i} className="design__spec-item">
                  <span className="design__spec-label">{s.label}</span>
                  <span className="design__spec-value">{s.value}</span>
                </li>
              ))}
            </ul>
            <a href="#contact" className="btn-primary design__specs-cta">Đặt hàng ngay</a>
          </div>
        </div>
      </div>
    </section>
  )
}
