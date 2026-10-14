export const shop = {
  name: 'John A Barbershop',
  short: 'John A',
  tagline: 'Where tradition meets modern grooming.',
  phone: '226-977-6344',
  phoneHref: 'tel:+12269776344',
  email: 'barbershopjohna@gmail.com',
  emailHref: 'mailto:barbershopjohna@gmail.com',
  website: 'https://johnabarbershop.com',
  address: '240 Commissioners Road W #105',
  city: 'London, ON N6J 1Y1',
  mapsUrl:
    'https://www.google.com/maps/search/?api=1&query=240+Commissioners+Road+W+105+London+ON',
  hours: [
    { day: 'Mon – Sat', time: '10:00 AM – 8:00 PM' },
    { day: 'Sunday', time: '11:00 AM – 5:00 PM' },
  ],
  note: 'Walk-ins welcome. Appointments preferred.',
} as const

export type Service = {
  id: string
  name: string
  price: number
  duration: number
  category: string
  blurb: string
  bookable?: boolean
}

export const services: Service[] = [
  {
    id: 'fade',
    name: 'Fade & Taper',
    price: 20,
    duration: 35,
    category: 'cuts',
    blurb: 'Skin to soft taper. Blade-clean perimeter.',
    bookable: true,
  },
  {
    id: 'cut-beard',
    name: 'Haircut & Beard',
    price: 35,
    duration: 50,
    category: 'cuts',
    blurb: 'Full composition — head + beard as one silhouette.',
    bookable: true,
  },
  {
    id: 'beard',
    name: 'Beard Trim & Shaping',
    price: 20,
    duration: 25,
    category: 'beard',
    blurb: 'Line, density, and edge. Nothing accidental.',
    bookable: true,
  },
  {
    id: 'kids',
    name: 'Kids Haircut',
    price: 20,
    duration: 30,
    category: 'kids',
    blurb: 'Junior under 14. Patient chair. Same finish.',
    bookable: true,
  },
  {
    id: 'wash',
    name: 'Hair Wash & Conditioning',
    price: 5,
    duration: 10,
    category: 'rituals',
    blurb: 'Clean canvas before the cut.',
    bookable: true,
  },
  {
    id: 'mask',
    name: 'Face Mask',
    price: 15,
    duration: 20,
    category: 'rituals',
    blurb: 'Hydrate. Refresh. Leave the chair clearer.',
    bookable: true,
  },
  {
    id: 'ear',
    name: 'Ear Wax Removal',
    price: 10,
    duration: 15,
    category: 'rituals',
    blurb: 'Hygienic finish for complete grooming.',
    bookable: true,
  },
  {
    id: 'mens',
    name: "Men's Haircut",
    price: 25,
    duration: 40,
    category: 'cuts',
    blurb: 'Classic or contemporary. Built to your bone structure.',
    bookable: true,
  },
]

export const team = [
  {
    id: 'john',
    name: 'John',
    role: 'Owner · Master Barber',
    focus: 'Fades · Composition · Leadership',
    bio: 'The standard. Quiet precision. Shop named after the craft.',
  },
  {
    id: 'hanna',
    name: 'Hanna',
    role: 'Senior Barber',
    focus: 'Skin fades · Line-ups · Regulars',
    bio: 'Clients ask for Hanna by name. Clean fade. Exact recall.',
  },
  {
    id: 'crew',
    name: 'The Chair',
    role: 'Barbers · London ON',
    focus: 'Walk-ins · Kids · Full stacks',
    bio: 'Commissioners Rd. Same bar every time.',
  },
]

export const reviews = [
  {
    id: '1',
    name: 'Mohammad Kasem',
    text: 'Absolutely amazing haircut! Clean lines, perfect fade — exceeded expectations.',
  },
  {
    id: '2',
    name: 'Zieyrn Porovic',
    text: 'Buzzcut skin fade and lineup — amazing people, great service. 100% recommend.',
  },
  {
    id: '3',
    name: 'Mohammed Alhadhuri',
    text: 'Hanna always gives a clean fade and knows exactly what I want. Highly recommend!',
  },
  {
    id: '4',
    name: 'Jen Arlt',
    text: 'Took my son here — great job, great prices. This is our new go-to shop.',
  },
  {
    id: '5',
    name: 'Dhwanil',
    text: 'Professional, precise, comfortable vibe. Highly recommend this barber!',
  },
  {
    id: '6',
    name: 'Fahim Naeemi',
    text: 'My favorite barber in town. I’ve been coming here for years — always the best.',
  },
]

export const gallery = [
  {
    src: '/brand/hero1.jpg',
    alt: 'John A — shop atmosphere',
    credit: 'John A Barbershop',
  },
  {
    src: '/brand/hero2.jpg',
    alt: 'Classic chair energy',
    credit: 'John A Barbershop',
  },
  {
    src: '/brand/img2.jpg',
    alt: 'Precision work',
    credit: 'John A Barbershop',
  },
  {
    src: '/brand/img10.jpg',
    alt: 'Detail finish',
    credit: 'John A Barbershop',
  },
  {
    src: 'https://images.pexels.com/photos/18503604/pexels-photo-18503604.jpeg?auto=compress&cs=tinysrgb&w=1400',
    alt: 'Clipper precision',
    credit: 'Rahib Hamidov / Pexels',
  },
  {
    src: 'https://images.pexels.com/photos/39559324/pexels-photo-39559324.jpeg?auto=compress&cs=tinysrgb&w=1400',
    alt: 'Modern fade profile',
    credit: 'Brian Silva / Pexels',
  },
  {
    src: 'https://images.pexels.com/photos/12464845/pexels-photo-12464845.jpeg?auto=compress&cs=tinysrgb&w=1400',
    alt: 'Scissor detail',
    credit: 'izzet çakallı / Pexels',
  },
  {
    src: 'https://images.pexels.com/photos/7697444/pexels-photo-7697444.jpeg?auto=compress&cs=tinysrgb&w=1400',
    alt: 'Gold razor still life',
    credit: 'RDNE / Pexels',
  },
  {
    src: 'https://images.pexels.com/photos/7195807/pexels-photo-7195807.jpeg?auto=compress&cs=tinysrgb&w=1600',
    alt: 'Atelier interior',
    credit: 'Max Vakhtbovych / Pexels',
  },
  {
    src: 'https://images.pexels.com/photos/11333875/pexels-photo-11333875.jpeg?auto=compress&cs=tinysrgb&w=1400',
    alt: 'Monochrome trim',
    credit: 'Sự Minh / Pexels',
  },
]

export const faqs = [
  {
    q: 'Do you take appointments?',
    a: 'Yes — this demo books a chair online. Walk-ins still welcome when the floor is open.',
  },
  {
    q: 'Where are you?',
    a: '240 Commissioners Road W #105, London ON — easy access near Commissioners.',
  },
  {
    q: 'Who should I request?',
    a: 'Many clients ask for Hanna for skin fades. John sets the house standard. Pick either in booking.',
  },
  {
    q: 'Kids?',
    a: 'Kids under 14 — $20. Patient chair. Same sharp finish.',
  },
  {
    q: 'Why rebuild the site?',
    a: 'Current site has no live booking and an aging gallery. This demo shows appointment-first, cinematic gallery, and a brand that matches the cut.',
  },
]

export const navLinks = [
  { to: '/', label: 'Home' },
  { to: '/atelier', label: 'Atelier' },
  { to: '/services', label: 'Services' },
  { to: '/pricing', label: 'Pricing' },
  { to: '/fades', label: 'Fades' },
  { to: '/beard', label: 'Beard' },
  { to: '/kids', label: 'Kids' },
  { to: '/rituals', label: 'Rituals' },
  { to: '/gallery', label: 'Gallery' },
  { to: '/team', label: 'Team' },
  { to: '/reviews', label: 'Reviews' },
  { to: '/book', label: 'Book' },
  { to: '/private', label: 'Private' },
  { to: '/faq', label: 'FAQ' },
  { to: '/contact', label: 'Contact' },
] as const
