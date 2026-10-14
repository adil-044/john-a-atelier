import { PageHero } from '../components/PageHero'
import { Reveal } from '../components/Reveal'
import { MagneticButton } from '../components/MagneticButton'
import { services } from '../data/shop'

const rituals = services.filter((s) => s.category === 'rituals')

export function Rituals() {
  return (
    <>
      <PageHero
        eyebrow="Rituals"
        title="Wash. Mask. Finish."
        lede="Small services that make the cut feel complete."
      />
      <section className="section-tight">
        <div className="container" style={{ display: 'grid', gap: '1rem' }}>
          {rituals.map((s) => (
            <Reveal key={s.id}>
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  gap: '1rem',
                  padding: '1.25rem 0',
                  borderBottom: '1px solid var(--line)',
                }}
              >
                <div>
                  <h3 className="h3">{s.name}</h3>
                  <p className="muted">{s.blurb}</p>
                </div>
                <span className="price">${s.price}</span>
              </div>
            </Reveal>
          ))}
          <MagneticButton to="/book">Add a ritual</MagneticButton>
        </div>
      </section>
    </>
  )
}
