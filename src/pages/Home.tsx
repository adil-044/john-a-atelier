import { HeroPan } from '../components/HeroPan'
import { HorizontalGallery } from '../components/HorizontalGallery'
import { Reveal } from '../components/Reveal'
import { MagneticButton } from '../components/MagneticButton'
import { services, reviews } from '../data/shop'

const featured = services.filter((s) =>
  ['fade', 'cut-beard', 'beard', 'kids', 'mens'].includes(s.id),
)

export function Home() {
  return (
    <>
      <HeroPan />

      <section className="section">
        <div className="container grid-2">
          <Reveal>
            <p className="eyebrow">The gap</p>
            <h2 className="display h2">Your site looks fine. It doesn’t book.</h2>
          </Reveal>
          <Reveal>
            <p className="lede">
              Contact form only. Gallery from 2021. London already trusts the chair —
              Hanna’s fades, fair prices, walk-ins. This atelier demo adds the missing
              layer: cinematic scroll, live appointments, brand that feels like a $900
              ritual at neighborhood rates.
            </p>
            <div className="btn-row">
              <MagneticButton to="/book">Try live booking</MagneticButton>
              <MagneticButton to="/atelier" className="btn-ghost">
                Read the atelier
              </MagneticButton>
            </div>
          </Reveal>
        </div>
      </section>

      <HorizontalGallery />

      <section className="section">
        <div className="container">
          <Reveal>
            <p className="eyebrow">Menu</p>
            <h2 className="display h2">Fair prices. Private energy.</h2>
          </Reveal>
          <div
            style={{
              display: 'grid',
              gap: '0',
              marginTop: '2rem',
              borderTop: '1px solid var(--line)',
            }}
          >
            {featured.map((s) => (
              <Reveal key={s.id}>
                <div
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    gap: '1.5rem',
                    padding: '1.35rem 0',
                    borderBottom: '1px solid var(--line)',
                    alignItems: 'baseline',
                  }}
                >
                  <div>
                    <strong style={{ fontSize: '1.1rem' }}>{s.name}</strong>
                    <p className="muted" style={{ margin: '0.25rem 0 0' }}>
                      {s.blurb}
                    </p>
                  </div>
                  <span className="price">${s.price}</span>
                </div>
              </Reveal>
            ))}
          </div>
          <div className="btn-row">
            <MagneticButton to="/pricing" className="btn-ghost">
              Full menu
            </MagneticButton>
          </div>
        </div>
      </section>

      <section className="section-tight">
        <div className="container">
          <Reveal>
            <p className="eyebrow">Clients</p>
            <h2 className="display h2">London already wrote the reviews.</h2>
          </Reveal>
          <div
            style={{
              display: 'grid',
              gap: '1.25rem',
              marginTop: '2rem',
              gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
            }}
          >
            {reviews.slice(0, 3).map((r) => (
              <Reveal key={r.id}>
                <blockquote
                  style={{
                    margin: 0,
                    padding: '1.5rem 0',
                    borderTop: '1px solid var(--brass)',
                  }}
                >
                  <div className="stars">★★★★★</div>
                  <p style={{ margin: '0.85rem 0', fontFamily: 'var(--font-display)', fontSize: '1.35rem', lineHeight: 1.35 }}>
                    “{r.text}”
                  </p>
                  <cite className="muted" style={{ fontStyle: 'normal' }}>
                    {r.name}
                  </cite>
                </blockquote>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <Reveal>
            <div
              style={{
                border: '1px solid var(--line)',
                padding: 'clamp(2rem, 5vw, 3.5rem)',
                background:
                  'radial-gradient(circle at 100% 0%, oklch(0.45 0.08 105 / 0.2), transparent 45%), var(--surface)',
              }}
            >
              <p className="eyebrow">Next</p>
              <h2 className="display h2">Stop losing chairs to “I’ll call later.”</h2>
              <p className="lede">
                Book online in four steps. Same prices. Same barbers. Night-and-day vs a
                contact form.
              </p>
              <div className="btn-row">
                <MagneticButton to="/book">Open booking</MagneticButton>
                <MagneticButton to="/contact" className="btn-ghost">
                  Visit us
                </MagneticButton>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  )
}
