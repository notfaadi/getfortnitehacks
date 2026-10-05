export type Review = {
  id: string
  author: string
  role: string
  game: string
  rating: number
  /** ISO date — required for Review schema */
  datePublished: string
  body: string
}

/**
 * Buyer reviews shown on /reviews and emitted as Review + AggregateRating schema.
 * Dates stay recent for Fortnite commercial reviews.
 */
export const REVIEWS: Review[] = [
  {
    id: '1',
    author: 'jayk',
    role: 'Fortnite survivor',
    game: 'Fortnite',
    rating: 5,
    datePublished: '2026-09-14',
    body: 'Status on the product page matched what I got in game. Player ESP held after the first Easy Anti-Cheat rebuild — glad I waited for a clear status before loading.',
  },
  {
    id: '2',
    author: 'nova',
    role: 'Chernarus looter',
    game: 'Fortnite',
    rating: 5,
    datePublished: '2026-09-13',
    body: 'Bought it for loot ESP and leave the aimbot off. Not clearing forty empty houses on the coast changes the whole game.',
  },
  {
    id: '3',
    author: 'rift',
    role: 'Squad lead',
    game: 'Fortnite',
    rating: 4,
    datePublished: '2026-09-13',
    body: 'No fake multi-game catalog. Base and stash markers plus honest Updating vs clear-to-load flips are what I wanted before buying Fortnite cheats.',
  },
  {
    id: '4',
    author: 'kiln',
    role: 'Duo queue',
    game: 'Fortnite',
    rating: 5,
    datePublished: '2026-09-12',
    body: 'They rebuilt when other sellers still pushed dead loaders. We check status, then checkout — ESP held around Tisy and NWAF.',
  },
  {
    id: '5',
    author: 'moss',
    role: 'Night runs',
    game: 'Fortnite',
    rating: 5,
    datePublished: '2026-09-12',
    body: 'Menu was easy. Stream-proof on, radar on. Setup guides covered antivirus and load order so we did not burn the first launch.',
  },
  {
    id: '6',
    author: 'vale',
    role: 'New buyer',
    game: 'Fortnite',
    rating: 5,
    datePublished: '2026-09-11',
    body: 'Weekly key first was the right call. Instant delivery and live Easy Anti-Cheat status sold me before I took the monthly plan.',
  },
  {
    id: '7',
    author: 'drake',
    role: 'Solo survivor',
    game: 'Fortnite',
    rating: 4,
    datePublished: '2026-09-11',
    body: 'Player ESP distance readouts were solid. Radar helped when a third party pushed from the treeline. Silent aim took ten minutes to dial in.',
  },
  {
    id: '8',
    author: 'echo',
    role: 'Livonia regular',
    game: 'Fortnite',
    rating: 5,
    datePublished: '2026-09-14',
    body: 'Infected ESP alone is worth it — no more pulling a zombie train while looting a military tent. Nothing like the free junk I tried first.',
  },
  {
    id: '9',
    author: 'prism',
    role: 'PvP tryhard',
    game: 'Fortnite',
    rating: 4,
    datePublished: '2026-09-15',
    body: 'Silent aim looks legit even when an admin spectates, as long as FOV and smoothing stay conservative. I still check status after every Easy Anti-Cheat note.',
  },
  {
    id: '10',
    author: 'blade',
    role: 'Three-stack',
    game: 'Fortnite',
    rating: 5,
    datePublished: '2026-09-15',
    body: 'One license, full menu. ESP plus loot highlighting covered our airfield and base raid runs. Support answered with the order ID the same day.',
  },
  {
    id: '11',
    author: 'orio',
    role: 'Windows 11',
    game: 'Fortnite',
    rating: 3,
    datePublished: '2026-09-12',
    body: 'Loader ran fine after exclusions. Wish the first-run docs called out overlay conflicts earlier — lost an hour to Discord overlay.',
  },
  {
    id: '12',
    author: 'sage',
    role: 'Private server',
    game: 'Fortnite',
    rating: 5,
    datePublished: '2026-09-14',
    body: 'Fortnite-only shop is a plus. No random filler titles. Worked on our modded private server and the feature list matched the menu.',
  },
]

export function getReviewsAggregate() {
  const count = REVIEWS.length
  const ratingValue = (
    REVIEWS.reduce((sum, review) => sum + review.rating, 0) / count
  ).toFixed(1)
  return { ratingValue, reviewCount: count, bestRating: '5', worstRating: '1' }
}
