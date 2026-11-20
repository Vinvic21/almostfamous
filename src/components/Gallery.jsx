import { useEffect, useRef, useState } from 'react'
import { X } from 'lucide-react'
import { gallery } from '../data/businessInfo.js'

export default function Gallery() {
  const [active, setActive] = useState(null)
  const dialogRef = useRef(null)
  const lastTrigger = useRef(null)

  useEffect(() => {
    const d = dialogRef.current
    if (!d) return
    if (active !== null && !d.open) d.showModal()
    if (active === null && d.open) d.close()
  }, [active])

  const close = () => {
    setActive(null)
    lastTrigger.current?.focus()
  }

  return (
    <section id="gallery" className="section gallery">
      <div className="container">
        <div className="section-head">
          <p className="kicker reveal">The work</p>
          <h2 className="reveal" style={{ '--d': '60ms' }}>
            Pieces from the <span className="accent">shop</span>
          </h2>
        </div>

        <ul className="masonry">
          {gallery.map((g, i) => (
            <li key={g.src} className={`reveal ${g.tall ? 'is-tall' : ''} ${g.wide ? 'is-wide' : ''}`} style={{ '--d': `${i * 70}ms` }}>
              <button
                type="button"
                className="tile clay"
                onClick={(e) => {
                  lastTrigger.current = e.currentTarget
                  setActive(i)
                }}
                aria-label={`Enlarge: ${g.alt}`}
              >
                <img src={g.src} alt="" loading="lazy" />
                <span className="tile-label">{g.label}</span>
              </button>
            </li>
          ))}
        </ul>
      </div>

      <dialog ref={dialogRef} className="lightbox" onClose={() => setActive(null)} onClick={(e) => e.target === dialogRef.current && close()}>
        {active !== null && (
          <figure>
            <img src={gallery[active].src} alt={gallery[active].alt} />
            <figcaption>{gallery[active].label}</figcaption>
          </figure>
        )}
        <button className="lightbox-close btn btn-clay btn-sm" type="button" onClick={close} aria-label="Close image">
          <X size={18} /> Close
        </button>
      </dialog>
    </section>
  )
}
