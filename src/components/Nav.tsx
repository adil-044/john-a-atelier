import { useEffect, useState } from 'react'
import { NavLink, Link, useLocation } from 'react-router-dom'
import { navLinks, shop } from '../data/shop'
import { asset } from '../lib/asset'
import { MagneticButton } from './MagneticButton'
import './Nav.css'

export function Nav() {
  const [open, setOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    setOpen(false)
  }, [location.pathname])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  return (
    <>
      <header className="nav">
        <div className="nav-inner">
          <Link to="/" className="brand" onClick={() => setOpen(false)}>
            <img src={asset('brand/logo.png')} alt="" />
            <span className="brand-text">John A</span>
          </Link>
          <nav className="nav-links" aria-label="Primary">
            {navLinks.map((l) => (
              <NavLink
                key={l.to}
                to={l.to}
                end={l.to === '/'}
                className={({ isActive }) => (isActive ? 'active' : undefined)}
              >
                {l.label}
              </NavLink>
            ))}
          </nav>
          <div className="nav-cta">
            <MagneticButton to="/book">Book</MagneticButton>
            <button
              type="button"
              className="menu-btn"
              aria-label={open ? 'Close menu' : 'Open menu'}
              aria-expanded={open}
              aria-controls="nav-drawer"
              onClick={() => setOpen((v) => !v)}
            >
              {open ? '✕' : '☰'}
            </button>
          </div>
        </div>
      </header>
      <div
        id="nav-drawer"
        className={`drawer ${open ? 'open' : ''}`}
        aria-hidden={!open}
        inert={!open ? true : undefined}
      >
        {navLinks.map((l) => (
          <NavLink key={l.to} to={l.to} end={l.to === '/'} onClick={() => setOpen(false)}>
            {l.label}
          </NavLink>
        ))}
        <a href={shop.phoneHref} style={{ marginTop: '1rem', fontSize: '1rem' }}>
          {shop.phone}
        </a>
      </div>
    </>
  )
}
