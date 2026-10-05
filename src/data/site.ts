import { FORTNITE_OG } from './images'
import { PAGE_OG } from './og'

export const SITE_URL = 'https://getfortnitehacks.io'
export const SITE_NAME = 'Fortnite Hacks'
export const SITE_HOST = 'getfortnitehacks.io'

/**
 * Sole purpose — used in schema + about copy.
 * Single-product site: Fortnite / Fortnite Battle Royale cheats for PC (worldwide).
 * Canonical host is apex https://getfortnitehacks.io (www 301s to apex in the Worker).
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
    title: 'Fortnite Hacks | Fortnite Cheat Aimbot, ESP & Hacks',
    description:
      'Buy Fortnite cheats for Fortnite Battle Royale — silent aim Aimbot, player and loot ESP, wallhack and radar hack from $35. Check live Easy Anti-Cheat status, then checkout.',
    path: '/',
    ogType: 'website',
    image: PAGE_OG.home,
    imageAlt: 'Fortnite Hacks — Fortnite Aimbot, ESP and radar hack for PC',
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
    title: 'Fortnite Hacks Reviews | Buyer Feedback on Fortnite Hacks',
    description:
      'Read Fortnite cheats reviews covering silent aim, player ESP, loot ESP and Easy Anti-Cheat rebuilds before you buy a Fortnite Battle Royale license for PC.',
    path: '/reviews',
    ogType: 'website',
    image: PAGE_OG.reviews,
    imageAlt: 'Fortnite Hacks buyer reviews for Fortnite Battle Royale',
    robots: INDEX_ROBOTS,
  },
  faq: {
    title: 'Fortnite Hacks FAQ | Price, Easy Anti-Cheat Status & Setup',
    description:
      'FAQ for buying Fortnite cheats on Windows PC — price, Aimbot and ESP features, Easy Anti-Cheat status, private server support, loader setup and delivery.',
    path: '/faq',
    ogType: 'website',
    image: PAGE_OG.faq,
    imageAlt: 'Fortnite Hacks FAQ — price, Easy Anti-Cheat and setup',
    robots: INDEX_ROBOTS,
  },
  support: {
    title: 'Fortnite Hacks Support | Loader, Delivery & Setup Help',
    description:
      'Get help buying and loading Fortnite cheats — delivery email, Windows setup, antivirus exclusions, loader errors and Easy Anti-Cheat status updates.',
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
  h1: 'Fortnite Hacks — Fortnite Cheat Aimbot, ESP & Hacks',
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
