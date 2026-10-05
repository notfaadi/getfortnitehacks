import { SITE_URL } from '../data/site'

type SocialShareProps = {
  path: string
  title: string
}

/** Crawlable share links (Seobility social signals — no third-party widgets). */
export function SocialShare({ path, title }: SocialShareProps) {
  const pageUrl = path === '/' ? `${SITE_URL}/` : `${SITE_URL}${path.startsWith('/') ? path : `/${path}`}`
  const encodedUrl = encodeURIComponent(pageUrl)
  const encodedTitle = encodeURIComponent(title)

  const links = [
    {
      label: 'Share on X',
      href: `https://twitter.com/intent/tweet?url=${encodedUrl}&text=${encodedTitle}`,
    },
    {
      label: 'Share on Facebook',
      href: `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`,
    },
    {
      label: 'Share on Reddit',
      href: `https://www.reddit.com/submit?url=${encodedUrl}&title=${encodedTitle}`,
    },
  ] as const

  return (
    <nav aria-label="Share this page" className="flex flex-wrap items-center gap-3">
      <span className="text-xs font-medium uppercase tracking-wider text-white/45">Share</span>
      {links.map((link) => (
        <a
          key={link.label}
          href={link.href}
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-full border border-z-soft/25 px-3 py-1.5 text-xs font-medium text-white/70 transition-colors hover:border-z-soft/40 hover:text-white"
        >
          {link.label}
        </a>
      ))}
    </nav>
  )
}
