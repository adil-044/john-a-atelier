import { PageHero } from '../components/PageHero'
import { Reveal } from '../components/Reveal'
import { MagneticButton } from '../components/MagneticButton'
import { shop } from '../data/shop'
import { asset } from '../lib/asset'

export function Atelier() {
  return (
    <>
      <PageHero
        eyebrow="Atelier"
        title="Tradition. Modern blade. London ON."
        lede="John A Barbershop near Commissioners Road — expert men’s cuts, skin fades, beard work, kids, rituals. Walk-ins welcome. Appointments preferred."
      />
      <section className="section-tight">
        <div className="container grid-2">
          <Reveal>
            <img
              src={asset('brand/hero2.jpg')}
              alt="John A interior"
              style={{ width: '100%', height: 'min(70vh, 560px)', objectFit: 'cover' }}
            />
          </Reveal>
          <Reveal>
            <h2 className="display h2">Why rebuild</h2>
            <p className="lede">
              Current site works as a brochure. Gallery ages. Booking is a form that
              waits. This demo shows the shop as an appointment house — still fair
              priced, still welcoming — with motion and conversion your competitors
              don’t have.
            </p>
            <p className="muted">
              {shop.address}, {shop.city}. Mon–Sat 10–8. Sun 11–5.
            </p>
            <div className="btn-row">
              <MagneticButton to="/book">Reserve</MagneticButton>
              <MagneticButton href={shop.mapsUrl} className="btn-ghost">
                Directions
              </MagneticButton>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  )
}
