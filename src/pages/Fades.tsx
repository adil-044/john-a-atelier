import { PageHero } from '../components/PageHero'
import { Reveal } from '../components/Reveal'
import { MagneticButton } from '../components/MagneticButton'

export function Fades() {
  return (
    <>
      <PageHero
        eyebrow="Fades"
        title="Skin. Soft. Exact."
        lede="Fade & taper from $20. Clients name Hanna for the blend that holds."
      />
      <section className="section-tight">
        <div className="container grid-2">
          <Reveal>
            <img
              src="https://images.pexels.com/photos/18503604/pexels-photo-18503604.jpeg?auto=compress&cs=tinysrgb&w=1200"
              alt="Fade detail"
              style={{ width: '100%', height: 'min(70vh, 560px)', objectFit: 'cover' }}
            />
          </Reveal>
          <Reveal>
            <h2 className="display h2">The London fade standard</h2>
            <p className="lede">
              Clean perimeter. Measured height. No guesswork on the second visit.
            </p>
            <div className="btn-row">
              <MagneticButton to="/book">Book a fade</MagneticButton>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  )
}
