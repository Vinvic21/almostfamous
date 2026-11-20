const words = ['Tattoos', 'Piercings', 'Custom Art', 'Colour', 'Black & Grey', 'Flash', 'Portland, ME']

export default function Marquee() {
  const row = [...words, ...words]
  return (
    <div className="marquee" aria-hidden="true">
      <div className="marquee-track">
        {row.map((w, i) => (
          <span key={i}>
            {w}
            <i>✦</i>
          </span>
        ))}
      </div>
    </div>
  )
}
