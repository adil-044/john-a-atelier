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

      const tween = gsap.to(row, {
        x: () => -getScroll(),
        ease: 'none',
        scrollTrigger: {
          trigger: el,
          start: 'top top',
          end: () => `+=${getScroll() + window.innerHeight * 0.35}`,
          pin: true,
          scrub: 0.65,
          anticipatePin: 1,
          invalidateOnRefresh: true,
          onUpdate: (self) => {
            if (bar.current) {
              bar.current.style.width = `${self.progress * 100}%`
            }
          },
        },
      })

      gsap.utils.toArray<HTMLElement>('.hgal-card img').forEach((img) => {
        gsap.fromTo(
          img,
          { scale: 1.18, xPercent: -4 },
          {
            scale: 1,
            xPercent: 4,
            ease: 'none',
            scrollTrigger: {
              trigger: img.parentElement,
              containerAnimation: tween,
              start: 'left 90%',
              end: 'right 10%',
              scrub: true,
            },
          },
        )
      })
    },
    { scope: section },
  )

  return (
    <section ref={section} className="hgal" aria-label="Works gallery">
      <div className="hgal-sticky">
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
