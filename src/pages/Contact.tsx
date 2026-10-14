import { PageHero } from '../components/PageHero'
import { Reveal } from '../components/Reveal'
import { MagneticButton } from '../components/MagneticButton'
import { shop } from '../data/shop'

export function Contact() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Commissioners Road West."
        lede={`${shop.address} · ${shop.city}`}
      />
      <section className="section-tight">
        <div className="container grid-2">
          <Reveal>
            <div style={{ display: 'grid', gap: '1.25rem' }}>
              <div>
                <p className="eyebrow">Phone</p>
                <a href={shop.phoneHref} style={{ fontSize: '1.5rem', fontFamily: 'var(--font-display)' }}>
                  {shop.phone}
                </a>
              </div>
              <div>
                <p className="eyebrow">Email</p>
                <a href={shop.emailHref}>{shop.email}</a>
              </div>
              <div>
                <p className="eyebrow">Hours</p>
                {shop.hours.map((h) => (
                  <p key={h.day} className="muted" style={{ margin: '0.2rem 0' }}>
                    <strong style={{ color: 'var(--text)' }}>{h.day}</strong> — {h.time}
                  </p>
                ))}
              </div>
              <div className="btn-row">
                <MagneticButton to="/book">Book online</MagneticButton>
                <MagneticButton href={shop.mapsUrl} className="btn-ghost">
                  Maps
                </MagneticButton>
              </div>
            </div>
          </Reveal>
          <Reveal>
            <img
              src="/brand/img10.jpg"
              alt="John A"
              style={{ width: '100%', height: 'min(60vh, 480px)', objectFit: 'cover', border: '1px solid var(--line)' }}
            />
          </Reveal>
        </div>
      </section>
    </>
  )
}
