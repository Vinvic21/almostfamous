import { business, images } from '../data/businessInfo.js'

export default function About() {
  return (
    <section id="about" className="section about">
      <div className="container about-grid">
        <div className="about-media">
          <figure className="clay photo tilt-l reveal">
            <img src={images.sign} alt="Almost Famous Tattoos & Piercings sign on Forest Ave" loading="lazy" width="575" height="669" />
          </figure>
          <figure className="clay photo tilt-r reveal" style={{ '--d': '140ms' }}>
            <img src={images.lobby} alt="Waiting area inside the shop with orange walls and flash art" loading="lazy" width="690" height="776" />
          </figure>
        </div>
        <div className="about-copy">
          <p className="kicker reveal">About the shop</p>
          <h2 className="reveal" style={{ '--d': '60ms' }}>
            A bright orange room full of <span className="accent">art</span>
          </h2>
          <p className="reveal" style={{ '--d': '120ms' }}>
            {business.name} is a tattoo and piercing shop at {business.address.street} in {business.address.city}, Maine.
            Walk in and you will find framed art on orange walls, flash sheets to browse and a comfortable place to wait.
          </p>
          <p className="reveal" style={{ '--d': '180ms' }}>
            The shop does tattoos and piercings under one roof. The best way to ask about an idea, a piercing or timing is
            to call or stop by.
          </p>
          <a className="btn btn-clay reveal" style={{ '--d': '240ms' }} href={business.phoneHref}>
            Talk to the shop
          </a>
        </div>
      </div>
    </section>
  )
}
