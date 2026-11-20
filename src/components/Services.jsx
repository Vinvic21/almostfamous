import { PenTool, Palette, Feather, Anchor, Gem } from 'lucide-react'
import { services } from '../data/businessInfo.js'

const icons = { pen: PenTool, palette: Palette, feather: Feather, anchor: Anchor, gem: Gem }

export default function Services() {
  return (
    <section id="services" className="section services">
      <div className="container">
        <div className="section-head">
          <p className="kicker reveal">What we do</p>
          <h2 className="reveal" style={{ '--d': '60ms' }}>
            Tattoos &amp; <span className="accent">piercings</span>
          </h2>
        </div>
        <ul className="service-grid">
          {services.map((s, i) => {
            const Icon = icons[s.icon]
            return (
              <li key={s.title} className="service clay reveal" style={{ '--d': `${i * 80}ms` }}>
                <span className="service-icon">
                  <Icon size={26} aria-hidden="true" />
                </span>
                <h3>{s.title}</h3>
                <p>{s.text}</p>
              </li>
            )
          })}
        </ul>
      </div>
    </section>
  )
}
