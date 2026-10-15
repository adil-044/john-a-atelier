import { useState } from 'react'
import { NavLink, Link } from 'react-router-dom'
import { navLinks, shop } from '../data/shop'
import { asset } from '../lib/asset'
import { MagneticButton } from './MagneticButton'
import './Nav.css'

export function Nav() {
  const [open, setOpen] = useState(false)

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
              className="menu-btn"
              aria-label="Menu"
              aria-expanded={open}
              onClick={() => setOpen((v) => !v)}
            >
              {open ? '✕' : '☰'}
            </button>
          </div>
        </div>
      </header>
      <div className={`drawer ${open ? 'open' : ''}`} hidden={!open}>
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
