import { PageHero } from '../components/PageHero'
import { Reveal } from '../components/Reveal'
import { MagneticButton } from '../components/MagneticButton'
import { services } from '../data/shop'

export function Services() {
  return (
    <>
      <PageHero
        eyebrow="Services"
        title="What we do in the chair."
        lede="Fades, cuts, beards, kids, wash, mask, ear care — menu from the live shop."
      />
      <section className="section-tight">
        <div className="container" style={{ display: 'grid', gap: 0 }}>
          {services.map((s) => (
            <Reveal key={s.id}>
              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: '1fr auto',
                  gap: '1rem',
                  padding: '1.4rem 0',
                  borderBottom: '1px solid var(--line)',
                }}
              >
                <div>
                  <h3 className="h3">{s.name}</h3>
                  <p className="muted" style={{ margin: '0.35rem 0 0' }}>
                    {s.blurb} · {s.duration} min
                  </p>
                </div>
                <span className="price">${s.price}</span>
              </div>
            </Reveal>
          ))}
          <div className="btn-row">
            <MagneticButton to="/book">Book a service</MagneticButton>
          </div>
        </div>
      </section>
    </>
  )
}
