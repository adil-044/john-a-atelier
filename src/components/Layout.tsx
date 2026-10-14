import { Outlet, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import gsap from 'gsap'
import { Nav } from './Nav'
import { Footer } from './Footer'
import { useLenis } from '../hooks/useLenis'

export function Layout() {
  const location = useLocation()
  useLenis()

  useEffect(() => {
    window.scrollTo(0, 0)
    const main = document.querySelector('.main')
    if (main) {
      gsap.fromTo(
        main,
        { autoAlpha: 0, y: 12 },
        { autoAlpha: 1, y: 0, duration: 0.5, ease: 'power2.out' },
      )
    }
  }, [location.pathname])

  return (
    <div className="site">
      <div className="noise" aria-hidden />
      <Nav />
      <div className="demo-banner">
        <strong>Atelier demo for John</strong> — live booking your current site is missing.
        Gallery pans. Prices match johnabarbershop.com.
      </div>
      <main className="main">
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}
