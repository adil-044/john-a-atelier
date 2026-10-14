import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Layout } from './components/Layout'
import { Home } from './pages/Home'
import { Atelier } from './pages/Atelier'
import { Services } from './pages/Services'
import { Pricing } from './pages/Pricing'
import { Fades } from './pages/Fades'
import { Beard } from './pages/Beard'
import { Kids } from './pages/Kids'
import { Rituals } from './pages/Rituals'
import { Gallery } from './pages/Gallery'
import { Team } from './pages/Team'
import { Reviews } from './pages/Reviews'
import { Book } from './pages/Book'
import { Private } from './pages/Private'
import { FAQ } from './pages/FAQ'
import { Contact } from './pages/Contact'

export default function App() {
  return (
    <BrowserRouter basename={import.meta.env.BASE_URL}>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="atelier" element={<Atelier />} />
          <Route path="services" element={<Services />} />
          <Route path="pricing" element={<Pricing />} />
          <Route path="fades" element={<Fades />} />
          <Route path="beard" element={<Beard />} />
          <Route path="kids" element={<Kids />} />
          <Route path="rituals" element={<Rituals />} />
          <Route path="gallery" element={<Gallery />} />
          <Route path="team" element={<Team />} />
          <Route path="reviews" element={<Reviews />} />
          <Route path="book" element={<Book />} />
          <Route path="private" element={<Private />} />
          <Route path="faq" element={<FAQ />} />
          <Route path="contact" element={<Contact />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
