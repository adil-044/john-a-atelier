import { PageHero } from '../components/PageHero'
import { Reveal } from '../components/Reveal'
import { faqs } from '../data/shop'
import { MagneticButton } from '../components/MagneticButton'

export function FAQ() {
  return (
    <>
      <PageHero eyebrow="FAQ" title="Straight answers." lede="Booking, location, kids, why this rebuild." />
      <section className="section-tight">
        <div className="container" style={{ maxWidth: 720, display: 'grid', gap: '0.75rem' }}>
          {faqs.map((f) => (
            <Reveal key={f.q}>
              <details style={{ borderBottom: '1px solid var(--line)', padding: '1rem 0', cursor: 'pointer' }}>
                <summary style={{ fontWeight: 700, listStyle: 'none' }}>{f.q}</summary>
                <p className="muted" style={{ marginTop: '0.65rem' }}>
                  {f.a}
                </p>
              </details>
            </Reveal>
          ))}
          <MagneticButton to="/book">Book anyway</MagneticButton>
        </div>
      </section>
    </>
  )
}
