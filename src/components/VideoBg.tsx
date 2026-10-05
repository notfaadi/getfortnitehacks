import { FORTNITE_HERO } from '../data/media'
import { HeroBackdrop } from './HeroBackdrop'

type VideoBgProps = {
  /** @deprecated Hero uses animated mesh; image prop is ignored. */
  image?: string
  imageAlt?: string
}

/** Full-bleed hero background for home and forums headers. */
export function VideoBg(_props: VideoBgProps) {
  return (
    <div className="hero-video-wrap absolute inset-0 z-0 overflow-hidden pointer-events-none select-none">
      <img
        src={FORTNITE_HERO}
        alt=""
        className="sr-only"
        width={1}
        height={1}
        loading="lazy"
        decoding="async"
      />
      <HeroBackdrop />
      <div className="hero-video-tint pointer-events-none absolute inset-0 z-[2] opacity-40" aria-hidden />
      <div className="absolute inset-x-0 bottom-0 z-[3] h-48 bg-gradient-to-t from-z-bg via-z-bg/85 to-transparent" />
      <div className="absolute inset-x-0 top-0 z-[3] h-28 bg-gradient-to-b from-z-bg/80 to-transparent" />
    </div>
  )
}
