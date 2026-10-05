export type GameStatus = 'Undetected' | 'Updating' | 'Use with caution'

export type Game = {
  slug: string
  name: string
  status: GameStatus
  popular?: boolean
}

/** Site is Fortnite cheats only — no other titles in the catalog. */
export const GAMES: Game[] = [
  { slug: 'fortnite', name: 'Fortnite', status: 'Undetected', popular: true },
]

export function getGame(slug: string) {
  return GAMES.find((g) => g.slug === slug)
}

export function guidePath(slug: string) {
  return `/${slug.toLowerCase()}-cheats`
}

export function parseGuideSlug(param: string) {
  const lower = param.toLowerCase()
  return lower.endsWith('-cheats') ? lower.slice(0, -7) : lower
}

export const GUIDE_FEATURES = [
  {
    name: 'Fortnite Aimbot (silent aim)',
    text: 'Silent-aim tracking with FOV, smoothing and bone selection — shots land near the crosshair and still look legit in replays and spectator views.',
  },
  {
    name: 'Player ESP / Wallhack',
    text: 'See enemy players through builds and terrain with distance, shield, and loadout info when the build supports it — spot third parties before they swing.',
  },
  {
    name: 'Loot ESP',
    text: 'Highlight chests, floor loot, supply drops, and rare weapons by tier so you gear up fast instead of clearing empty POIs.',
  },
  {
    name: 'Item & Weapon ESP',
    text: 'Filter by rarity and item type — shotguns, heals, mats — so your loadout is ready before the first fight.',
  },
  {
    name: 'Radar Hack',
    text: '2D radar for off-screen players across the Battle Royale island — track rotations and endgame zones without tunnel vision.',
  },
  {
    name: 'Build & Edit Intel',
    text: 'Optional overlays for enemy build patterns and weak edits when supported — useful for box fights and piece control.',
  },
  {
    name: 'Battle Royale & competitive modes',
    text: 'Built for Fortnite Battle Royale and core PvP modes on Windows PC with Easy Anti-Cheat status posted after patches.',
  },
  {
    name: 'Spoofer + Cleaner',
    text: 'Protect hardware identifiers and refresh traces after bans or hardware swaps — included with the package.',
  },
  {
    name: 'Easy Anti-Cheat status + support',
    text: 'Live clear-to-load or Updating status is reviewed after Easy Anti-Cheat and Fortnite patches before you load.',
  },
] as const

/** @deprecated use PRODUCT_PAGE_FAQS from faqs.ts — kept as alias */
export { PRODUCT_PAGE_FAQS as PRODUCT_FAQS } from './faqs'
