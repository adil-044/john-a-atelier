import { useRef, type ReactNode } from 'react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { cn } from '../lib/cn'

gsap.registerPlugin(ScrollTrigger)

export function Reveal({
  children,
  className,
  delay = 0,
}: {
  children: ReactNode
  className?: string
  delay?: number
}) {
  const ref = useRef<HTMLDivElement>(null)

  useGSAP(
    () => {
      const el = ref.current
      if (!el) return
      gsap.fromTo(
        el,
        { autoAlpha: 0.001, y: 40, filter: 'blur(6px)' },
        {
          autoAlpha: 1,
          y: 0,
          filter: 'blur(0px)',
          duration: 1.05,
          delay,
          ease: 'power3.out',
          scrollTrigger: { trigger: el, start: 'top 88%' },
        },
      )
    },
    { scope: ref },
  )

  return (
    <div ref={ref} className={cn(className)} style={{ opacity: 1 }}>
      {children}
    </div>
  )
}
