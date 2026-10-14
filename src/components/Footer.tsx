import { Link } from 'react-router-dom'
import { shop, navLinks } from '../data/shop'
import './Footer.css'

export function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-grid">
        <div>
          <img src="/brand/logo.png" alt="John A" className="footer-logo" />
          <p className="muted" style={{ marginTop: '1rem', maxWidth: '28ch' }}>
            {shop.tagline} Precision cuts. Timeless style.
          </p>
        </div>
        <div>
          <p className="footer-label">Visit</p>
          <p>
            {shop.address}
            <br />
            {shop.city}
          </p>
          <p style={{ marginTop: '0.75rem' }}>
            <a href={shop.phoneHref}>{shop.phone}</a>
            <br />
            <a href={shop.emailHref}>{shop.email}</a>
          </p>
        </div>
        <div>
          <p className="footer-label">Navigate</p>
          <div className="footer-links">
            {navLinks.slice(0, 8).map((l) => (
              <Link key={l.to} to={l.to}>
                {l.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
      <div className="container footer-bottom">
        <span>© {new Date().getFullYear()} John A Barbershop · London ON</span>
        <span className="muted">Atelier demo by Uptisement · Live booking prototype</span>
      </div>
    </footer>
  )
}
