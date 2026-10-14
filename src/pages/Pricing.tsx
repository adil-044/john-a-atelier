import { PageHero } from '../components/PageHero'
import { Reveal } from '../components/Reveal'
import { MagneticButton } from '../components/MagneticButton'
import { services } from '../data/shop'

export function Pricing() {
  return (
    <>
      <PageHero
        eyebrow="Pricing"
        title="Affordable. Never cheap looking."
        lede="Live menu: fade $20 · cut & beard $35 · beard $20 · kids $20 · wash $5."
      />
      <section className="section-tight">
        <div className="container">
          <Reveal>
            <table style={{ width: '100%', borderCollapse: 'collapse' }}>
              <thead>
                <tr
                  style={{
                    textAlign: 'left',
                    color: 'var(--brass)',
                    fontSize: '0.68rem',
                    letterSpacing: '0.18em',
                    textTransform: 'uppercase',
                  }}
                >
                  <th style={{ padding: '0.75rem 0' }}>Service</th>
                  <th>Time</th>
                  <th>Price</th>
                </tr>
              </thead>
              <tbody>
                {services.map((s) => (
                  <tr key={s.id} style={{ borderTop: '1px solid var(--line)' }}>
                    <td style={{ padding: '1rem 0' }}>
                      <strong>{s.name}</strong>
                      <div className="muted" style={{ fontSize: '0.9rem' }}>
                        {s.blurb}
                      </div>
                    </td>
                    <td className="muted">{s.duration}m</td>
                    <td>
                      <span className="price" style={{ fontSize: '1.7rem' }}>
                        ${s.price}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </Reveal>
          <div className="btn-row">
            <MagneticButton to="/book">Book at these prices</MagneticButton>
          </div>
        </div>
      </section>
    </>
  )
}
