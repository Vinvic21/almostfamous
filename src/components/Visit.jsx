import { Phone, MapPin, Clock, Facebook } from 'lucide-react'
import { business } from '../data/businessInfo.js'

const dayIndex = () => (new Date().getDay() + 6) % 7 // Monday = 0

export default function Visit() {
  const today = dayIndex()
  return (
    <section id="visit" className="section visit">
      <div className="container">
        <div className="section-head">
          <p className="kicker reveal">Find us</p>
          <h2 className="reveal" style={{ '--d': '60ms' }}>
            Come <span className="accent">visit</span>
          </h2>
        </div>

        <div className="visit-grid">
          <div className="clay visit-card reveal">
            <h3>
              <MapPin size={20} aria-hidden="true" /> Location
            </h3>
            <address>
              {business.name}
              <br />
              {business.address.street}
              <br />
              {business.address.city}, {business.address.region} {business.address.postal}
            </address>
            <div className="visit-actions">
              <a className="btn btn-clay" href={business.mapsDirections} target="_blank" rel="noopener noreferrer">
                <MapPin size={18} aria-hidden="true" /> Directions
              </a>
              <a className="btn btn-ghost" href={business.phoneHref}>
                <Phone size={18} aria-hidden="true" /> {business.phoneDisplay}
              </a>
              <a className="btn btn-ghost" href={business.facebook} target="_blank" rel="noopener noreferrer">
                <Facebook size={18} aria-hidden="true" /> Facebook
              </a>
            </div>
          </div>

          <div className="clay visit-card reveal" style={{ '--d': '120ms' }}>
            <h3>
              <Clock size={20} aria-hidden="true" /> Hours
            </h3>
            <table className="hours">
              <caption className="sr-only">Opening hours</caption>
              <tbody>
                {business.hours.map(([day, time], i) => (
                  <tr key={day} className={i === today ? 'is-today' : ''}>
                    <th scope="row">{day}</th>
                    <td>{time}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            <p className="note">{business.hoursNote}</p>
          </div>
        </div>
      </div>
    </section>
  )
}
