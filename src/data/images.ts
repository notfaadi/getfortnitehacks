import { FORTNITE_HERO, FORTNITE_SOLDIER, FORTNITE_COVER, FORTNITE_MENU, FORTNITE_ESP } from './media'
import { FORTNITE_OG, getOgImageForPath, PAGE_OG } from './og'

export { FORTNITE_OG, getOgImageForPath, PAGE_OG }
export { forumOgImage } from './og'

export const FORTNITE_PRODUCT_HERO = FORTNITE_HERO
export const FORTNITE_PRODUCT_COVER = FORTNITE_COVER

export type ImageSeoFields = {
  alt: string
  title: string
  caption: string
}

export const IMAGE_SEO: Record<
  string,
  ImageSeoFields & {
    heroAlt: string
    heroTitle: string
    heroCaption: string
  }
> = {
  fortnite: {
    alt: 'Fortnite cheats product artwork for Fortnite Battle Royale on PC',
    title: 'Fortnite Hacks Product Details',
    caption: 'Fortnite Aimbot, ESP, wallhack, loot ESP, radar hack and Easy Anti-Cheat compatibility',
    heroAlt: 'Fortnite cheats silent aim Aimbot and ESP features',
    heroTitle: 'Fortnite Hacks Features',
    heroCaption: 'Review Fortnite Aimbot, ESP, radar hack and current Easy Anti-Cheat status',
  },
}

type PageImage = ImageSeoFields & { src: string; og: string }

/** On-page media + dedicated OG JPEG for Google SERP thumbnails. */
export const PAGE_IMAGES: Record<
  'home' | 'forums' | 'reviews' | 'faq' | 'support' | 'product',
  PageImage
> = {
  home: {
    src: FORTNITE_SOLDIER,
    og: PAGE_OG.home,
    alt: 'Fortnite cheats Aimbot and ESP artwork for Fortnite Battle Royale on PC',
    title: 'Fortnite Hacks',
    caption: 'Fortnite Aimbot, ESP, wallhack and radar hack overview.',
  },
  forums: {
    src: FORTNITE_HERO,
    og: PAGE_OG.forums,
    alt: 'Fortnite cheats product artwork',
    title: 'Fortnite Hacks Guides',
    caption: 'Setup, Aimbot and ESP guides for Fortnite.',
  },
  reviews: {
    src: FORTNITE_ESP,
    og: PAGE_OG.reviews,
    alt: 'Fortnite cheats review artwork',
    title: 'Fortnite Hacks Reviews',
    caption: 'Feature and compatibility feedback for Fortnite Battle Royale.',
  },
  faq: {
    src: FORTNITE_MENU,
    og: PAGE_OG.faq,
    alt: 'Fortnite cheats FAQ artwork',
    title: 'Fortnite Hacks FAQ',
    caption: 'Compatibility, feature and setup answers for Fortnite.',
  },
  support: {
    src: FORTNITE_HERO,
    og: PAGE_OG.support,
    alt: 'Fortnite cheats support artwork',
    title: 'Fortnite Hacks Support',
    caption: 'Delivery, loader and setup support for Fortnite cheats.',
  },
  product: {
    src: FORTNITE_COVER,
    og: PAGE_OG.product,
    alt: 'Fortnite Aimbot ESP and radar hack product artwork',
    title: 'Fortnite Hacks Features',
    caption: 'Product details for Fortnite Aimbot and ESP.',
  },
}

export function getGameImage(_slug: string): string {
  return FORTNITE_PRODUCT_COVER
}

export function getProductHeroImage(_slug: string): string {
  return FORTNITE_PRODUCT_COVER
}

export function getOgImage(path?: string): string {
  return getOgImageForPath(path)
}

export function getPageImage(key: keyof typeof PAGE_IMAGES) {
  return PAGE_IMAGES[key]
}

export function getImageAlt(
  slug: string,
  name: string,
  variant: 'catalog' | 'product' = 'catalog',
): string {
  const seo = IMAGE_SEO[slug]
  if (seo) return variant === 'product' ? seo.heroAlt : seo.alt
  return variant === 'product' ? `${name} product details` : `${name} product artwork`
}

export function getImageTitle(
  slug: string,
  name: string,
  variant: 'catalog' | 'product' = 'catalog',
): string {
  const seo = IMAGE_SEO[slug]
  if (seo) return variant === 'product' ? seo.heroTitle : seo.title
  return `${name} product`
}
