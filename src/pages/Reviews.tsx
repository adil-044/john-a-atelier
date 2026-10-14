import { PageHero } from '../components/PageHero'
import { Reveal } from '../components/Reveal'
import { MagneticButton } from '../components/MagneticButton'
import { reviews } from '../data/shop'

export function Reviews() {
  return (
    <>
      <PageHero
        eyebrow="Reviews"
        title="Proof on the record."
        lede="Real client voices from the live site — fades, kids, Hanna, longevity."
      />
      <section className="section-tight">
        <div className="container" style={{ display: 'grid', gap: '1.5rem', maxWidth: 760 }}>
          {reviews.map((r) => (
            <Reveal key={r.id}>
              <blockquote style={{ margin: 0, padding: '1.5rem 0', borderBottom: '1px solid var(--line)' }}>
                <div className="stars">★★★★★</div>
                <p
                  style={{
                    fontFamily: 'var(--font-display)',
                    fontSize: 'clamp(1.3rem, 3vw, 1.75rem)',
                    lineHeight: 1.35,
                    margin: '0.75rem 0',
                  }}
                >
                  “{r.text}”
                </p>
                <cite className="muted" style={{ fontStyle: 'normal' }}>
                  {r.name}
                </cite>
              </blockquote>
            </Reveal>
          ))}
          <MagneticButton to="/book">Become the next one</MagneticButton>
        </div>
      </section>
    </>
  )
}
