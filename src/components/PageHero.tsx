import { SplitTitle } from './SplitTitle'
import { Reveal } from './Reveal'

export function PageHero({
  eyebrow,
  title,
  lede,
}: {
  eyebrow: string
  title: string
  lede: string
}) {
  return (
    <header className="page-hero">
      <div className="container">
        <Reveal>
          <p className="eyebrow">{eyebrow}</p>
        </Reveal>
        <SplitTitle text={title} className="h1" />
        <Reveal delay={0.12}>
          <p className="lede">{lede}</p>
        </Reveal>
      </div>
    </header>
  )
}
