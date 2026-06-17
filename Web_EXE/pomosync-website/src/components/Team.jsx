import './Team.css'
import thuyAnhImg from '../assets/THUYANH.jpg'
import thangImg from '../assets/THANG.jpg'
import tranImg from '../assets/TRAN.jpg'
import trieuvyImg from '../assets/TRIEUVY.jpg'
import baoImg from '../assets/BAO.jpg'

const team = [
  {
    name: 'Dương Thị Thúy Anh',
    avatar: thuyAnhImg,
  },
  {
    name: 'Bùi Thị Huyền Trân',
    avatar: tranImg,
  },
  {
    name: 'Lê Triệu Vy',
    avatar: trieuvyImg,
  },
  {
    name: 'Nguyễn Thị Huỳnh Như',
    avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&h=150&fit=crop&crop=faces',
  },
  {
    name: 'Trương Minh Thắng',
    avatar: thangImg,
  },
  {
    name: 'Vương Chí Bảo',
    avatar: baoImg,
  },
]

export default function Team() {
  return (
    <section id="team" className="section team">
      <div className="container">
        <header className="team__header text-center">
          <p className="eyebrow">Nhóm Của Chúng Tôi</p>
          <h2 className="display-md team__title">
            6 người. 1 đam mê.<br />Vô số mã nguồn.
          </h2>
          <p className="body-lg team__sub">
            Đội ngũ maker trẻ Việt Nam xây dựng Smart Pomodoro từ đam mê
            với phần cứng, phần mềm và cộng đồng công nghệ mở.
          </p>
        </header>

        <div className="team__grid">
          {team.map((m, i) => (
            <article key={i} className="member-card" style={{ animationDelay: `${i * 0.07}s` }}>
              <img src={m.avatar} alt={m.name} className="member-card__avatar" loading="lazy" />
              <div className="member-card__body">
                <h3 className="member-card__name">{m.name}</h3>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
