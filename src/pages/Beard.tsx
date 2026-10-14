import { PageHero } from '../components/PageHero'
import { Reveal } from '../components/Reveal'
import { MagneticButton } from '../components/MagneticButton'

export function Beard() {
  return (
    <>
      <PageHero
        eyebrow="Beard"
        title="Shape. Density. Edge."
        lede="Beard trim & shaping $20. Stack with a cut for $35."
      />
      <section className="section-tight">
        <div className="container grid-2">
          <Reveal>
            <h2 className="display h2">One silhouette</h2>
            <p className="lede">
              Cheek line to neckline treated as architecture — not an afterthought.
            </p>
            <div className="btn-row">
              <MagneticButton to="/book">Book beard work</MagneticButton>
            </div>
          </Reveal>
          <Reveal>
            <img
              src="https://images.pexels.com/photos/39559324/pexels-photo-39559324.jpeg?auto=compress&cs=tinysrgb&w=1200"
              alt="Beard style"
              style={{ width: '100%', height: 'min(70vh, 560px)', objectFit: 'cover' }}
            />
          </Reveal>
        </div>
      </section>
    </>
  )
}
