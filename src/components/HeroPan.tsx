import { useRef } from 'react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { SplitTitle } from './SplitTitle'
import { MagneticButton } from './MagneticButton'
import { Reveal } from './Reveal'
import { shop } from '../data/shop'
import { asset } from '../lib/asset'
import './HeroPan.css'

export function HeroPan() {
  const root = useRef<HTMLElement>(null)
  const media = useRef<HTMLDivElement>(null)

  useGSAP(
    () => {
      const el = root.current
      const layer = media.current
      if (!el || !layer) return

      const onMove = (e: MouseEvent) => {
        const rect = el.getBoundingClientRect()
        const x = (e.clientX - rect.left) / rect.width - 0.5
        const y = (e.clientY - rect.top) / rect.height - 0.5
        gsap.to(layer, {
          x: x * 28,
          y: y * 18,
          duration: 1.1,
          ease: 'power3.out',
        })
      }

      el.addEventListener('mousemove', onMove)
      gsap.to(layer.querySelector('img'), {
        scale: 1.08,
        duration: 14,
        ease: 'sine.inOut',
        yoyo: true,
        repeat: -1,
      })

      return () => el.removeEventListener('mousemove', onMove)
    },
    { scope: root },
  )

  return (
    <section ref={root} className="hero-pan">
      <div ref={media} className="hero-pan-media" aria-hidden>
        <img src={asset('brand/hero1.jpg')} alt="" width={1600} height={1000} />
      </div>
      <div className="container hero-pan-content">
        <div className="hero-mark">
          <img src={asset('brand/logo.png')} alt="John A Barbershop" />
          <span>London · Ontario</span>
        </div>
        <SplitTitle text="The cut should feel like a private appointment." className="h1" />
        <Reveal delay={0.2}>
          <p className="lede" style={{ marginTop: '1.2rem' }}>
            Commissioners Road. Skin fades named after Hanna. Online booking your current
            site still doesn’t have — until now.
          </p>
        </Reveal>
        <Reveal delay={0.3}>
          <div className="btn-row">
            <MagneticButton to="/book">Reserve a chair</MagneticButton>
            <MagneticButton to="/gallery" className="btn-ghost">
              Enter gallery
            </MagneticButton>
          </div>
        </Reveal>
        <Reveal delay={0.4}>
          <div className="hero-meta">
            <div>
              <strong>From $20</strong>
              <span>Fade & taper</span>
            </div>
            <div>
              <strong>Walk-ins</strong>
              <span>Appointments preferred</span>
            </div>
            <div>
              <strong>{shop.phone}</strong>
              <span>Call John A</span>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
