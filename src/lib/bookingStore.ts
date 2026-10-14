export type Booking = {
  id: string
  serviceId: string
  serviceName: string
  price: number
  barber: string
  date: string
  time: string
  name: string
  phone: string
  email: string
  notes: string
  createdAt: string
}

const KEY = 'johna-bookings-v1'

export function loadBookings(): Booking[] {
  try {
    const raw = localStorage.getItem(KEY)
    return raw ? (JSON.parse(raw) as Booking[]) : []
  } catch {
    return []
  }
}

export function saveBooking(booking: Booking) {
  const all = loadBookings()
  all.unshift(booking)
  localStorage.setItem(KEY, JSON.stringify(all))
  return booking
}

export function nextDays(count = 14): string[] {
  const out: string[] = []
  const d = new Date()
  for (let i = 0; i < count; i++) {
    const x = new Date(d)
    x.setDate(d.getDate() + i)
    out.push(x.toISOString().slice(0, 10))
  }
  return out
}

export const timeSlots = [
  '10:00 AM',
  '10:30 AM',
  '11:00 AM',
  '11:30 AM',
  '12:00 PM',
  '12:30 PM',
  '1:00 PM',
  '1:30 PM',
  '2:00 PM',
  '2:30 PM',
  '3:00 PM',
  '3:30 PM',
  '4:00 PM',
  '4:30 PM',
  '5:00 PM',
  '5:30 PM',
  '6:00 PM',
  '6:30 PM',
  '7:00 PM',
  '7:30 PM',
]
