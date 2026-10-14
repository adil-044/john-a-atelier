import { useRef } from 'react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { cn } from '../lib/cn'

export function SplitTitle({
  text,
  className,
  as: Tag = 'h1',
}: {
  text: string
  className?: string
  as?: 'h1' | 'h2' | 'p'
}) {
  const ref = useRef<HTMLElement>(null)

  useGSAP(
    () => {
      const el = ref.current
      if (!el) return
      gsap.fromTo(
        el.querySelectorAll('.char'),
        { yPercent: 115, opacity: 0 },
        {
          yPercent: 0,
          opacity: 1,
          duration: 1,
          stagger: 0.016,
          ease: 'power4.out',
          delay: 0.08,
        },
      )
    },
    { scope: ref, dependencies: [text] },
  )

  return (
    <Tag ref={ref as never} className={cn('display', className)} aria-label={text}>
      {text.split(' ').map((word, wi) => (
        <span key={`${word}-${wi}`} className="split" style={{ marginRight: '0.28em' }}>
          {word.split('').map((ch, ci) => (
            <span key={`${ch}-${ci}`} className="char">
              {ch}
            </span>
          ))}
        </span>
      ))}
    </Tag>
  )
}
