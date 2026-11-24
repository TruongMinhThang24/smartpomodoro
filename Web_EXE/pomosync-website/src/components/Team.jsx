import './Team.css'
import thuyAnhImg from '../assets/THUYANH.jpg'
import thangImg from '../assets/THANG.jpg'
import trieuvyImg from '../assets/TRIEUVY.jpg'
import baoImg from '../assets/BAO.jpg'
import huynhNhuImg from '../assets/HUYNHNHU.jpg'
import teamGroupImg from '../assets/activity_team_1.jpg'

const team = [
  {
    name: 'Dương Thị Thúy Anh',
    avatar: thuyAnhImg,
  },
  {
    name: 'Lê Triệu Vy',
    avatar: trieuvyImg,
  },
  {
    name: 'Nguyễn Thị Huỳnh Như',
    avatar: huynhNhuImg,
  },
  {
    name: 'Trương Minh Thắng',
    avatar: thangImg,
  },
  {
    name: 'Vòng Chí Bảo',
    avatar: baoImg,
  },
]

export default function Team() {
  return (
    <section id="team" className="section team">
      <div className="container">
        <header className="team__header text-center">
          <p className="eyebrow">Đội Ngũ Maker</p>
          <h2 className="display-md team__title">
            5 thành viên. 1 đam mê.<br />Vô số mã nguồn.
          </h2>
          <p className="body-lg team__sub">
            Đội ngũ kỹ sư trẻ phát triển hệ sinh thái Smart Pomodoro từ đam mê
            với phần cứng IoT, ứng dụng di động Flutter và trí tuệ nhân tạo Gemini.
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

        {/* Group Photo Showcase */}
        <div className="team__group-banner">
          <div className="team__group-imgwrap">
            <img
              src={teamGroupImg}
              alt="Đội ngũ SmartClock cùng Giảng viên Hướng dẫn tại Đại học FPT"
              className="team__group-img"
              loading="lazy"
            />
          </div>
          <div className="team__group-caption">
            <span className="team__group-badge">FPT UNIVERSITY CẦN THƠ</span>
            <h4 className="team__group-title">
              Đội Ngũ Phát Triển Smart Pomodoro Cùng Giảng Viên Hướng Dẫn
            </h4>
            <p className="team__group-desc">
              Hình ảnh thực tế của nhóm tại sự kiện trưng bày và trải nghiệm sản phẩm. Với tinh thần học hỏi và không ngừng cải tiến, nhóm cam kết tiếp tục hoàn thiện cả 2 dòng sản phẩm SmartClock AI và SmartClock Mini E-ink để mang lại trải nghiệm tốt nhất cho người dùng.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
