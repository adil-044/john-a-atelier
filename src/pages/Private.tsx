import { PageHero } from '../components/PageHero'
import { Reveal } from '../components/Reveal'
import { MagneticButton } from '../components/MagneticButton'

export function Private() {
  return (
    <>
      <PageHero
        eyebrow="Private"
        title="Same craft. Appointment energy."
        lede="Neighborhood prices. Members’-club presentation. Book Hanna or John ahead of the rush."
      />
      <section className="section-tight">
        <div className="container" style={{ maxWidth: 640 }}>
          <Reveal>
            <p className="lede">
              Private isn’t a $900 tariff — it’s how the brand feels online. Preferential
              chair requests, reminder SMS (on go-live), and a site that doesn’t look like
              every other London shop theme.
            </p>
            <div className="btn-row">
              <MagneticButton to="/book">Claim a slot</MagneticButton>
              <MagneticButton to="/contact" className="btn-ghost">
                Talk to John
              </MagneticButton>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  )
}
