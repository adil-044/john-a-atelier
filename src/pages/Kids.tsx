import { PageHero } from '../components/PageHero'
import { Reveal } from '../components/Reveal'
import { MagneticButton } from '../components/MagneticButton'

export function Kids() {
  return (
    <>
      <PageHero
        eyebrow="Kids"
        title="Junior chair. Adult finish."
        lede="Kids under 14 — $20. Parents already call this the new go-to."
      />
      <section className="section-tight">
        <div className="container">
          <Reveal>
            <p className="lede">
              Patient pacing. Clean lines kids are proud to show. Book dad + junior same
              afternoon.
            </p>
            <div className="btn-row">
              <MagneticButton to="/book">Book kids cut</MagneticButton>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  )
}
