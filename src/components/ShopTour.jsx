import { images } from '../data/businessInfo.js'

export default function ShopTour() {
  return (
    <section id="shop" className="shop" style={{ '--shop-img': `url(${images.counter})` }}>
      <div className="shop-bg" aria-hidden="true" />
      <div className="container shop-inner">
        <div className="shop-card clay reveal">
          <p className="kicker">Inside the shop</p>
          <h2>
            Clean stations. Loud <span className="accent">colour</span>.
          </h2>
          <p>
            Diamond-plate counters, framed art on every wall and a lobby stocked with flash sheets. Come in and have a look
            around.
          </p>
        </div>
        <div className="shop-photos">
          <figure className="clay photo tilt-r reveal">
            <img src={images.flash} alt="Flash sheet display stands next to a gumball machine in the lobby" loading="lazy" width="690" height="776" />
          </figure>
        </div>
      </div>
    </section>
  )
}
