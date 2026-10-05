export type SeoMediaItem = {
  image: string
  video?: string
  alt: string
  title: string
  caption: string
  videoTitle?: string
  videoDescription?: string
}

/** Fortnite product art + menu stills (self-hosted). */
export const FORTNITE_HERO = '/media/fortnite-hero-full.webp'
export const FORTNITE_SOLDIER = '/media/fortnite-hero-full.webp'
export const FORTNITE_COVER = '/media/fortnite-cover.webp'
export const FORTNITE_BOX = '/media/fortnite-box.jpg'
export const FORTNITE_ESP = '/media/fortnite-esp-gameplay.gif'
export const FORTNITE_MENU = '/media/fortnite-menu.gif'
export const FORTNITE_GAMEPLAY = '/media/fortnite-esp-gameplay.gif'
export const FORTNITE_HOME_ART = '/media/fortnite-home-art.jpg'
export const FORTNITE_CONTROL = '/media/fortnite-control-art.jpg'
export const FORTNITE_TACTICAL = '/media/fortnite-tactical-art.jpg'
export const FORTNITE_VIDEO_THUMB = '/media/fortnite-video-thumb.jpg'

/** Self-hosted Fortnite Reaper preview (Bunny Stream GUID ee0735e7-…). */
export const FORTNITE_HOME_VIDEO = {
  id: 'ee0735e7-c9a3-4072-b818-98e2bb7f07ff',
  src: '/videos/fortnite-preview.mp4',
  poster: FORTNITE_VIDEO_THUMB,
  title: 'Fortnite Hacks Aimbot and ESP preview',
  caption: 'Preview of Fortnite Aimbot, ESP menu, loot highlighting and radar hack features on PC.',
} as const

export const PAGE_MEDIA = {
  home: {
    image: FORTNITE_SOLDIER,
    alt: 'Fortnite cheats Aimbot and ESP product artwork for Fortnite Battle Royale on PC',
    title: 'Fortnite Hacks for Fortnite Battle Royale',
    caption: 'Feature overview for Fortnite Aimbot, ESP, wallhack, loot ESP and radar hack.',
  },
  product: {
    image: FORTNITE_COVER,
    video: FORTNITE_HOME_VIDEO.src,
    alt: 'Fortnite ESP, silent aim Aimbot and loot highlight feature artwork',
    title: 'Fortnite Aimbot, ESP and Radar Hack Features',
    caption: 'Product overview for Fortnite Battle Royale on Windows PC.',
    videoTitle: FORTNITE_HOME_VIDEO.title,
    videoDescription: FORTNITE_HOME_VIDEO.caption,
  },
  forums: {
    image: FORTNITE_HERO,
    alt: 'Fortnite cheats product artwork',
    title: 'Fortnite Hacks Guides',
    caption: 'Reference for setup, Aimbot, ESP, loot and Easy Anti-Cheat status articles.',
  },
  reviews: {
    image: FORTNITE_ESP,
    alt: 'Fortnite cheats ESP gameplay review artwork',
    title: 'Fortnite Hacks Reviews',
    caption: 'Feature and compatibility feedback for Fortnite cheats.',
  },
  faq: {
    image: FORTNITE_MENU,
    alt: 'Fortnite cheats menu artwork for the FAQ',
    title: 'Fortnite Hacks FAQ',
    caption: 'Compatibility, status and setup answers for Fortnite Battle Royale.',
  },
  support: {
    image: FORTNITE_HERO,
    alt: 'Fortnite cheats support artwork',
    title: 'Fortnite Hacks Support',
    caption: 'Delivery, loader and setup help for Fortnite cheats.',
  },
} as const satisfies Record<string, SeoMediaItem>

const FORUM_MEDIA: Record<string, SeoMediaItem> = {
  'features-list': { ...PAGE_MEDIA.product },
  hotkeys: { ...PAGE_MEDIA.forums },
  'complete-setup': { ...PAGE_MEDIA.product },
  'disable-antivirus': { ...PAGE_MEDIA.home },
  'undetected-status': { ...PAGE_MEDIA.product },
  'aimbot-settings': { ...PAGE_MEDIA.home },
  'esp-wallhack-guide': { ...PAGE_MEDIA.reviews },
  'radar-hack-guide': { ...PAGE_MEDIA.faq },
  'stream-proof-setup': { ...PAGE_MEDIA.forums },
  'easy-anti-cheat-status': { ...PAGE_MEDIA.product },
  'windows-setup': { ...PAGE_MEDIA.support },
  'raid-play-guide': {
    image: FORTNITE_BOX,
    alt: 'Fortnite survival and loot run cheats artwork',
    title: 'Fortnite Survival and Loot Run Cheats Guide',
    caption: 'Loot run tips for Fortnite Aimbot, ESP and radar hack.',
  },
  'loader-errors': { ...PAGE_MEDIA.support },
}

export function getForumMedia(slug: string): SeoMediaItem {
  return FORUM_MEDIA[slug] || PAGE_MEDIA.forums
}
