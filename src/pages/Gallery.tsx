import { PageHero } from '../components/PageHero'
import { HorizontalGallery } from '../components/HorizontalGallery'
import { Reveal } from '../components/Reveal'
import { gallery } from '../data/shop'
import { MagneticButton } from '../components/MagneticButton'

export function Gallery() {
  return (
    <>
      <PageHero
        eyebrow="Gallery"
        title="Scroll sideways. Feel the shop."
        lede="Pinned horizontal pan — the move your 2021 grid can’t do. Mix of shop assets + studio stills until fresh shoots land."
      />
      <HorizontalGallery />
      <section className="section-tight">
        <div
          className="container"
          style={{
            display: 'grid',
            gap: '1rem',
            gridTemplateColumns: 'repeat(auto-fill, minmax(240px, 1fr))',
          }}
        >
          {gallery.map((g) => (
            <Reveal key={g.src}>
              <figure style={{ margin: 0, border: '1px solid var(--line)' }}>
                <img src={g.src} alt={g.alt} style={{ width: '100%', height: 280, objectFit: 'cover' }} loading="lazy" />
                <figcaption className="muted" style={{ padding: '0.65rem 0.85rem', fontSize: '0.75rem' }}>
                  {g.credit}
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
        <div className="container btn-row">
          <MagneticButton to="/book">Book from the look</MagneticButton>
        </div>
      </section>
    </>
  )
}
