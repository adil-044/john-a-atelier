import { useRef } from 'react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { gallery } from '../data/shop'
import './HorizontalGallery.css'

gsap.registerPlugin(ScrollTrigger)

export function HorizontalGallery() {
  const section = useRef<HTMLElement>(null)
  const track = useRef<HTMLDivElement>(null)
  const bar = useRef<HTMLSpanElement>(null)

  useGSAP(
    () => {
      const el = section.current
      const row = track.current
      if (!el || !row) return

      const getScroll = () => Math.max(0, row.scrollWidth - window.innerWidth)

      gsap.to(row, {
        x: () => -getScroll(),
        ease: 'none',
        scrollTrigger: {
          trigger: el,
          start: 'top top',
          end: () => `+=${getScroll()}`,
          pin: true,
          scrub: 1,
          anticipatePin: 1,
          invalidateOnRefresh: true,
          onUpdate: (self) => {
            if (bar.current) bar.current.style.width = `${self.progress * 100}%`
          },
        },
      })
    },
    { scope: section },
  )

  return (
    <section ref={section} className="hgal" aria-label="Works gallery">
      <div className="hgal-inner">
        <div className="container hgal-head">
          <p className="eyebrow">Collection</p>
          <h2 className="display h2">Pan through the work</h2>
        </div>
        <div ref={track} className="hgal-track">
          {gallery.map((g, i) => (
            <figure key={`${g.src}-${i}`} className="hgal-card">
              <img src={g.src} alt={g.alt} loading={i < 2 ? 'eager' : 'lazy'} />
              <figcaption>
                {String(i + 1).padStart(2, '0')} — {g.alt}
              </figcaption>
            </figure>
          ))}
        </div>
        <div className="hgal-progress" aria-hidden>
          <span ref={bar} />
        </div>
      </div>
    </section>
  )
}
