import { PageHero } from '../components/PageHero'
import { Reveal } from '../components/Reveal'
import { MagneticButton } from '../components/MagneticButton'
import { team } from '../data/shop'

export function Team() {
  return (
    <>
      <PageHero
        eyebrow="Team"
        title="Names clients repeat."
        lede="John. Hanna. The chair that London trusts."
      />
      <section className="section-tight">
        <div className="container" style={{ display: 'grid', gap: '2rem' }}>
          {team.map((t) => (
            <Reveal key={t.id}>
              <div style={{ borderTop: '1px solid var(--brass)', paddingTop: '1.25rem' }}>
                <p className="eyebrow">{t.role}</p>
                <h2 className="display h2">{t.name}</h2>
                <p style={{ color: 'var(--brass)' }}>{t.focus}</p>
                <p className="muted">{t.bio}</p>
              </div>
            </Reveal>
          ))}
          <MagneticButton to="/book">Request a barber</MagneticButton>
        </div>
      </section>
    </>
  )
}
