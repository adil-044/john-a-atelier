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
          end: () => `+=${Math.max(getScroll(), window.innerWidth)}`,
          pin: true,
          // transform pin plays nicer with Lenis than fixed pin
          pinType: 'transform',
          scrub: 0.65,
          anticipatePin: 1,
          invalidateOnRefresh: true,
          onUpdate: (self) => {
            if (bar.current) bar.current.style.width = `${self.progress * 100}%`
          },
        },
      })

      const st = tween.scrollTrigger

      /* Images can land late — refresh so end distance is real */
      const imgs = Array.from(row.querySelectorAll('img'))
      let pending = imgs.filter((img) => !img.complete).length
      const onImg = () => {
        pending -= 1
        if (pending <= 0) ScrollTrigger.refresh()
      }
      imgs.forEach((img) => {
        if (!img.complete) {
          img.addEventListener('load', onImg, { once: true })
          img.addEventListener('error', onImg, { once: true })
        }
      })
      requestAnimationFrame(() => ScrollTrigger.refresh())

      /* Pointer drag — works even if scrub/pin flakes */
      let dragging = false
      let startX = 0
      let originX = 0

      const clampX = (x: number) => Math.max(-getScroll(), Math.min(0, x))

      const onDown = (e: PointerEvent) => {
        if (e.button !== 0) return
        dragging = true
        el.classList.add('is-dragging')
        startX = e.clientX
        originX = Number(gsap.getProperty(row, 'x')) || 0
        window.__lenis?.stop()
        el.setPointerCapture(e.pointerId)
      }

      const onMove = (e: PointerEvent) => {
        if (!dragging) return
        e.preventDefault()
        const next = clampX(originX + (e.clientX - startX))
        gsap.set(row, { x: next })
        const max = getScroll() || 1
        if (bar.current) bar.current.style.width = `${(-next / max) * 100}%`
        if (st) st.scroll(st.start + (-next / max) * (st.end - st.start))
      }

      const onUp = (e: PointerEvent) => {
        if (!dragging) return
        dragging = false
        el.classList.remove('is-dragging')
        window.__lenis?.start()
        try {
          el.releasePointerCapture(e.pointerId)
        } catch {
          /* already released */
        }
      }

      el.addEventListener('pointerdown', onDown)
      el.addEventListener('pointermove', onMove)
      el.addEventListener('pointerup', onUp)
      el.addEventListener('pointercancel', onUp)

      return () => {
        el.removeEventListener('pointerdown', onDown)
        el.removeEventListener('pointermove', onMove)
        el.removeEventListener('pointerup', onUp)
        el.removeEventListener('pointercancel', onUp)
        window.__lenis?.start()
      }
    },
    { scope: section },
  )

  return (
    <section ref={section} className="hgal" aria-label="Works gallery">
      <div className="hgal-inner">
        <div className="container hgal-head">
          <p className="eyebrow">Collection</p>
          <h2 className="display h2">Pan through the work</h2>
          <p className="hgal-hint">Scroll or drag</p>
        </div>
        <div ref={track} className="hgal-track">
          {gallery.map((g, i) => (
            <figure key={`${g.src}-${i}`} className="hgal-card">
              <img src={g.src} alt={g.alt} loading={i < 2 ? 'eager' : 'lazy'} draggable={false} />
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
