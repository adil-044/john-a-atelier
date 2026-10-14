import { useRef, type ButtonHTMLAttributes, type ReactNode } from 'react'
import { Link } from 'react-router-dom'
import gsap from 'gsap'
import { cn } from '../lib/cn'

type Props = {
  children: ReactNode
  className?: string
  to?: string
  href?: string
} & ButtonHTMLAttributes<HTMLButtonElement>

export function MagneticButton({ children, className, to, href, ...rest }: Props) {
  const ref = useRef<HTMLElement>(null)

  const onMove = (e: React.MouseEvent) => {
    const el = ref.current
    if (!el) return
    const rect = el.getBoundingClientRect()
    const x = e.clientX - rect.left - rect.width / 2
    const y = e.clientY - rect.top - rect.height / 2
    gsap.to(el, { x: x * 0.22, y: y * 0.22, duration: 0.4, ease: 'power3.out' })
  }

  const onLeave = () => {
    const el = ref.current
    if (!el) return
    gsap.to(el, { x: 0, y: 0, duration: 0.7, ease: 'power4.out' })
  }

  const cls = cn('btn', className)

  if (to) {
    return (
      <Link
        ref={ref as React.RefObject<HTMLAnchorElement>}
        to={to}
        className={cls}
        onMouseMove={onMove}
        onMouseLeave={onLeave}
      >
        {children}
      </Link>
    )
  }

  if (href) {
    return (
      <a
        ref={ref as React.RefObject<HTMLAnchorElement>}
        href={href}
        className={cls}
        onMouseMove={onMove}
        onMouseLeave={onLeave}
      >
        {children}
      </a>
    )
  }

  return (
    <button
      ref={ref as React.RefObject<HTMLButtonElement>}
      type="button"
      className={cls}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      {...rest}
    >
      {children}
    </button>
  )
}
