import { FORTNITE_OG } from './images'
import { PAGE_OG } from './og'

export const SITE_URL = 'https://getfortnitehacks.org'
export const SITE_NAME = 'Fortnite Hacks'
export const SITE_HOST = 'getfortnitehacks.org'

/**
 * Sole purpose — used in schema + about copy.
 * Single-product site: Fortnite / Fortnite Battle Royale cheats for PC (worldwide).
 * Canonical host is apex https://getfortnitehacks.org (www 301s to apex in the Worker).
 */
export const SITE_PURPOSE =
  'Buy Fortnite cheats for Fortnite Battle Royale on Windows PC — silent-aim Aimbot, player and loot ESP, wallhack, radar hack and live Easy Anti-Cheat status with instant digital delivery.'

export const SITE_ABOUT = [
  'fortnite hacks',
  'fortnite hack',
  'fortnite hacks',
  'fortnite hack',
  'fortnite standalone cheats',
  'fortnite aimbot',
  'fortnite esp',
  'fortnite wallhack',
  'fortnite radar hack',
  'easy-anti-cheat fortnite hacks',
  'fortnite hack aimbot',
] as const

/** Offer price shown on product schema + purchase UI. */
export const PRODUCT_PRICE_USD = '35'
export const PRODUCT_PRICE_LIFETIME_USD = '150'

export const SEO_REGIONS = [
  { hreflang: 'en', label: 'English' },
  { hreflang: 'x-default', label: 'Default' },
] as const

export const OG_IMAGE = FORTNITE_OG

export type PageSeo = {
  title: string
  description: string
  path: string
  ogType?: 'website' | 'article' | 'product'
  /** Prefer /og/*.jpg (1200x630) for Google SERP thumbnails */
  image?: string
  imageAlt?: string
  robots?: string
}

const INDEX_ROBOTS =
  'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1'

export const SEO = {
  home: {
    title: 'Fortnite Hacks — Undetected ESP, Wallhack & Aimbot | 2026',
    description:
      'Buy undetected Fortnite hacks for Windows PC — silent aimbot, ESP wallhack, loot markers & 2D radar. Check live Easy Anti-Cheat status, compare 2026 plans from $35, instant digital delivery.',
    path: '/',
    ogType: 'website',
    image: PAGE_OG.home,
    imageAlt: 'Fortnite Hacks — undetected ESP, aimbot and wallhack for PC',
    robots: INDEX_ROBOTS,
  },
  blog: {
    title: 'Fortnite Hacks Blog 2026 | Meta Guides & Tips',
    description:
      'Fortnite hacks blog: ranked meta, loot routes, and pro tips for PC and controllers. Pair guides with ESP, soft aim, and cloud DMA pages.',
    path: '/blog',
    ogType: 'website',
    image: PAGE_OG.forums,
    imageAlt: 'Fortnite Hacks blog',
    robots: INDEX_ROBOTS,
  },
  forums: {
    title: 'Fortnite Hacks Guides | Aimbot, ESP, Radar & Status',
    description:
      'Fortnite cheats guides hub — silent aim, player and loot ESP, radar hack, antivirus exclusions, loader setup and Easy Anti-Cheat status articles before you buy.',
    path: '/forums',
    ogType: 'website',
    image: PAGE_OG.forums,
    imageAlt: 'Fortnite Hacks setup guides for Aimbot, ESP and Easy Anti-Cheat',
    robots: INDEX_ROBOTS,
  },
  reviews: {
    title: 'Fortnite Hacks Reviews | ESP Soft Aim Feedback',
    description:
      'Real Fortnite hacks reviews from buyers: ESP boxes, soft aim, radar, controllers, and cloud DMA — rated 4.4/5 across 10 reviews.',
    path: '/reviews',
    ogType: 'website',
    image: PAGE_OG.reviews,
    imageAlt: 'Fortnite Hacks buyer reviews for Fortnite Battle Royale',
    robots: INDEX_ROBOTS,
  },
  faq: {
    title: 'Fortnite Hacks FAQ | ESP, Soft Aim & EAC Answers',
    description:
      'Fortnite hacks FAQ: ESP boxes, soft aim, cloud DMA, controller support, EAC maintenance, and pricing for PC. Clear answers before you buy.',
    path: '/faq',
    ogType: 'website',
    image: PAGE_OG.faq,
    imageAlt: 'Fortnite Hacks FAQ — price, Easy Anti-Cheat and setup',
    robots: INDEX_ROBOTS,
  },
  support: {
    title: 'Fortnite Hacks Support | Help & Contact',
    description:
      'Contact fortnite hacks support for licenses, ESP setup, soft aim profiles, and cloud DMA on PC and controllers. Include your order ID for faster help.',
    path: '/support',
    ogType: 'website',
    image: PAGE_OG.support,
    imageAlt: 'Fortnite Hacks support for loader and delivery help',
    robots: INDEX_ROBOTS,
  },
  product: {
    title: 'Fortnite Hacks Price & Checkout | Aimbot, ESP, Radar',
    description:
      'Fortnite cheats price and checkout — silent aim Aimbot, player ESP, loot ESP, wallhack, radar hack, spoofer and live Easy Anti-Cheat status from $35.',
    path: '/fortnite-cheats',
    ogType: 'product',
    image: PAGE_OG.product,
    imageAlt: 'Fortnite Aimbot, ESP and radar hack product details',
    robots: INDEX_ROBOTS,
  },
} as const satisfies Record<string, PageSeo>

export const HOME_HEADINGS = {
  h1: 'Fortnite Hacks — Undetected ESP, Wallhack & Aimbot',
  h2Features: 'Fortnite Aimbot, ESP, loot ESP & radar hack',
  h2Featured: 'Fortnite ESP and silent aim Aimbot',
  h2About: 'Clear Easy Anti-Cheat status before you buy Fortnite cheats',
  h2Access: 'Buy Fortnite Hacks',
  h2Faq: 'Fortnite Hacks FAQ',
} as const

export function absoluteUrl(path: string) {
  if (!path || path === '/') return `${SITE_URL}/`
  return `${SITE_URL}${path.startsWith('/') ? path : `/${path}`}`
}
