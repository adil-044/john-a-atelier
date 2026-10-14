import { useMemo, useState } from 'react'
import { services, team, shop } from '../data/shop'
import { nextDays, saveBooking, timeSlots, type Booking } from '../lib/bookingStore'
import { MagneticButton } from './MagneticButton'
import './BookingWizard.css'

const bookable = services.filter((s) => s.bookable)
const barbers = ['Any available', ...team.filter((t) => t.id !== 'crew').map((t) => t.name)]

function formatDay(iso: string) {
  return new Date(`${iso}T12:00:00`).toLocaleDateString(undefined, {
    weekday: 'short',
    month: 'short',
    day: 'numeric',
  })
}

export function BookingWizard({ initialServiceId }: { initialServiceId?: string }) {
  const days = useMemo(() => nextDays(12), [])
  const [step, setStep] = useState(1)
  const [serviceId, setServiceId] = useState(initialServiceId ?? '')
  const [barber, setBarber] = useState(barbers[0])
  const [date, setDate] = useState(days[0])
  const [time, setTime] = useState('')
  const [name, setName] = useState('')
  const [phone, setPhone] = useState('')
  const [email, setEmail] = useState('')
  const [notes, setNotes] = useState('')
  const [done, setDone] = useState<Booking | null>(null)

  const service = bookable.find((s) => s.id === serviceId)

  const confirm = () => {
    if (!service || !time || !name || !phone) return
    setDone(
      saveBooking({
        id: crypto.randomUUID(),
        serviceId: service.id,
        serviceName: service.name,
        price: service.price,
        barber,
        date,
        time,
        name,
        phone,
        email,
        notes,
        createdAt: new Date().toISOString(),
      }),
    )
    setStep(5)
  }

  if (done && step === 5) {
    return (
      <div className="book-panel success-box">
        <p className="display h2">Chair reserved</p>
        <p className="lede" style={{ marginInline: 'auto' }}>
          {done.name} — {done.serviceName} with {done.barber} on {formatDay(done.date)} at{' '}
          {done.time}.
        </p>
        <p className="muted" style={{ marginTop: '1rem' }}>
          Demo saved locally. Production SMS + calendar to {shop.phone}.
        </p>
        <div className="btn-row" style={{ justifyContent: 'center' }}>
          <MagneticButton
            onClick={() => {
              setDone(null)
              setStep(1)
              setServiceId('')
              setTime('')
              setName('')
              setPhone('')
              setEmail('')
              setNotes('')
            }}
          >
            Book another
          </MagneticButton>
          <MagneticButton href={shop.phoneHref} className="btn-ghost">
            Call shop
          </MagneticButton>
        </div>
      </div>
    )
  }

  return (
    <div className="book-wrap">
      <div>
        <div className="book-steps">
          {[
            ['1', 'Service'],
            ['2', 'Barber'],
            ['3', 'When'],
            ['4', 'Details'],
          ].map(([n, label]) => (
            <span
              key={n}
              className={`book-step ${step === Number(n) ? 'on' : ''} ${
                step > Number(n) ? 'done' : ''
              }`}
            >
              {n}. {label}
            </span>
          ))}
        </div>

        {step === 1 && (
          <div className="book-panel">
            <h3 className="h3">Select service</h3>
            <div className="service-pick" style={{ marginTop: '1rem' }}>
              {bookable.map((s) => (
                <button
                  key={s.id}
                  type="button"
                  className={serviceId === s.id ? 'selected' : ''}
                  onClick={() => setServiceId(s.id)}
                >
                  <span>
                    <strong>{s.name}</strong>
                    <span className="muted">
                      {' '}
                      · {s.duration} min · {s.blurb}
                    </span>
                  </span>
                  <span className="price">${s.price}</span>
                </button>
              ))}
            </div>
            <div className="btn-row">
              <MagneticButton disabled={!serviceId} onClick={() => serviceId && setStep(2)}>
                Continue
              </MagneticButton>
            </div>
          </div>
        )}

        {step === 2 && (
          <div className="book-panel">
            <h3 className="h3">Request a barber</h3>
            <div className="chip-row" style={{ marginTop: '1rem' }}>
              {barbers.map((b) => (
                <button
                  key={b}
                  type="button"
                  className={`chip ${barber === b ? 'selected' : ''}`}
                  onClick={() => setBarber(b)}
                >
                  {b}
                </button>
              ))}
            </div>
            <div className="btn-row">
              <MagneticButton className="btn-ghost" onClick={() => setStep(1)}>
                Back
              </MagneticButton>
              <MagneticButton onClick={() => setStep(3)}>Continue</MagneticButton>
            </div>
          </div>
        )}

        {step === 3 && (
          <div className="book-panel">
            <h3 className="h3">Date & time</h3>
            <p className="muted">Day</p>
            <div className="chip-row" style={{ margin: '0.5rem 0 1.25rem' }}>
              {days.map((d) => (
                <button
                  key={d}
                  type="button"
                  className={`chip ${date === d ? 'selected' : ''}`}
                  onClick={() => setDate(d)}
                >
                  {formatDay(d)}
                </button>
              ))}
            </div>
            <p className="muted">Time</p>
            <div className="chip-row" style={{ marginTop: '0.5rem' }}>
              {timeSlots.map((t) => (
                <button
                  key={t}
                  type="button"
                  className={`chip ${time === t ? 'selected' : ''}`}
                  onClick={() => setTime(t)}
                >
                  {t}
                </button>
              ))}
            </div>
            <div className="btn-row">
              <MagneticButton className="btn-ghost" onClick={() => setStep(2)}>
                Back
              </MagneticButton>
              <MagneticButton disabled={!time} onClick={() => time && setStep(4)}>
                Continue
              </MagneticButton>
            </div>
          </div>
        )}

        {step === 4 && (
          <div className="book-panel">
            <h3 className="h3">Your details</h3>
            <form
              className="book-form"
              style={{ marginTop: '1rem' }}
              onSubmit={(e) => {
                e.preventDefault()
                confirm()
              }}
            >
              <label>
                Name
                <input required value={name} onChange={(e) => setName(e.target.value)} />
              </label>
              <label>
                Phone
                <input required value={phone} onChange={(e) => setPhone(e.target.value)} />
              </label>
              <label>
                Email
                <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
              </label>
              <label>
                Notes
                <textarea
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  placeholder="Fade height, kid’s age…"
                />
              </label>
              <div className="btn-row">
                <MagneticButton className="btn-ghost" onClick={() => setStep(3)}>
                  Back
                </MagneticButton>
                <MagneticButton
                  onClick={(e) => {
                    e.preventDefault()
                    confirm()
                  }}
                >
                  Confirm appointment
                </MagneticButton>
              </div>
            </form>
          </div>
        )}
      </div>

      <aside className="book-summary">
        <h3 className="h3">Appointment</h3>
        <dl>
          <div>
            <dt>Service</dt>
            <dd>{service?.name ?? '—'}</dd>
          </div>
          <div>
            <dt>Price</dt>
            <dd>{service ? `$${service.price}` : '—'}</dd>
          </div>
          <div>
            <dt>Barber</dt>
            <dd>{barber}</dd>
          </div>
          <div>
            <dt>When</dt>
            <dd>
              {formatDay(date)}
              {time ? ` · ${time}` : ''}
            </dd>
          </div>
          <div>
            <dt>Atelier</dt>
            <dd>
              {shop.address}
              <br />
              {shop.city}
            </dd>
          </div>
        </dl>
      </aside>
    </div>
  )
}
