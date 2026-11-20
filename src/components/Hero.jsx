import { Phone, MapPin, Clock, ChevronDown } from 'lucide-react'
import { business, images } from '../data/businessInfo.js'

export default function Hero() {
  return (
    <section id="top" className="hero" style={{ '--hero-img': `url(${images.hero})` }}>
      <div className="hero-bg" aria-hidden="true" />
      <div className="hero-glow" aria-hidden="true" />
      <div className="container hero-inner">
        <div className="hero-copy">
          <p className="eyebrow reveal">
            <Clock size={14} aria-hidden="true" /> Open daily · 12 pm – 9 pm
          </p>
          <h1 className="reveal" style={{ '--d': '80ms' }}>
            Almost <span className="accent">Famous</span>
            <span className="h1-sub">Tattoos &amp; Piercings</span>
          </h1>
          <p className="lead reveal" style={{ '--d': '160ms' }}>
            Tattoos and piercings on Forest Ave in Portland, Maine. Call the shop to talk about your idea.
          </p>
          <div className="hero-actions reveal" style={{ '--d': '240ms' }}>
            <a className="btn btn-clay" href={business.phoneHref}>
              <Phone size={18} aria-hidden="true" /> Call {business.phoneDisplay}
            </a>
            <a className="btn btn-ghost" href={business.mapsDirections} target="_blank" rel="noopener noreferrer">
              <MapPin size={18} aria-hidden="true" /> Get directions
            </a>
          </div>
        </div>

        <div className="hero-card clay reveal" style={{ '--d': '320ms' }}>
          <img src={images.logo} alt="Almost Famous Tattoos & Piercings logo" width="383" height="207" />
          <address>
            {business.address.street}
            <br />
            {business.address.city}, {business.address.region} {business.address.postal}
          </address>
        </div>
      </div>
      <a className="scroll-cue" href="#about" aria-label="Scroll to About">
        <ChevronDown size={28} />
      </a>
    </section>
  )
}
