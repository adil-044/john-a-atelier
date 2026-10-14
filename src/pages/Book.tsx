import { useSearchParams } from 'react-router-dom'
import { PageHero } from '../components/PageHero'
import { BookingWizard } from '../components/BookingWizard'
import { Reveal } from '../components/Reveal'

export function Book() {
  const [params] = useSearchParams()
  return (
    <>
      <PageHero
        eyebrow="Book"
        title="The feature your site is missing."
        lede="No more contact-form limbo. Pick service, barber, time — confirm. Demo stores in this browser."
      />
      <section className="section-tight">
        <div className="container">
          <Reveal>
            <BookingWizard initialServiceId={params.get('service') ?? undefined} />
          </Reveal>
        </div>
      </section>
    </>
  )
}
