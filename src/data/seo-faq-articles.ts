export type FaqArticle = {
  slug: string
  title: string
  description: string
  h1: string
  paragraphs: string[]
}

export const FAQ_ARTICLES: FaqArticle[] = [
  {
    slug: 'what-are-fortnite-hacks',
    title: 'What is Fortnite Hacks? | FAQ',
    description:
      'Fortnite Hacks explained: undetected ESP, radar, and aimbot for Fortnite on Windows PC with Easy Anti-Cheat (EAC) maintenance.',
    h1: 'What are Fortnite Hacks?',
    paragraphs: [
      'Fortnite Hacks is a single-package cheat stack for Fortnite Battle Royale and Zero Build on Windows PC — ESP wallhack boxes, loot markers, 2D radar, and soft aim with public Easy Anti-Cheat status.',
      'Licenses deliver digitally after checkout. Always confirm Updates and homepage status before loading after patches.',
    ],
  },
  {
    slug: 'are-fortnite-hacks-undetected-in-2026',
    title: 'Are Fortnite Hacks Undetected in 2026? | FAQ',
    description:
      'How Fortnite Hacks stays maintained after Easy Anti-Cheat (EAC) patches in 2026 — and why no cheat can promise permanent undetected status.',
    h1: 'Are Fortnite Hacks undetected in 2026?',
    paragraphs: [
      'Undetected is a maintenance state, not a lifetime guarantee. We rebuild ESP, soft aim, and cloud DMA paths after EAC updates and publish clear labels.',
      'Read the Updates log on patch weeks and avoid loading when status shows Updating.',
    ],
  },
  {
    slug: 'battle-royale-and-zero-build',
    title: 'Battle Royale and Zero Build Support | FAQ',
    description:
      'Fortnite Hacks works in Battle Royale and Zero Build — ESP, radar, and aimbot for Windows PC.',
    h1: 'Battle Royale and Zero Build support',
    paragraphs: [
      'ESP boxes and radar help in both modes — tune loot ESP down in Zero Build if you only need player awareness.',
      'Soft aim profiles can differ per mode; save separate configs in the mod menu.',
    ],
  },
  {
    slug: 'esp-wallhack-radar-or-aimbot',
    title: 'What Is Included: ESP, Wallhack, Radar, Aimbot | FAQ',
    description:
      'One Fortnite Hacks license includes ESP wallhack, loot markers, 2D radar cues, and configurable Aimbot for Windows PC.',
    h1: 'ESP, wallhack, radar, and aimbot in one license',
    paragraphs: [
      'You do not buy ESP and aimbot separately — one checkout unlocks the full toggle set documented on Features.',
      'Controller and cloud DMA support depend on the active build; check Setup for the current matrix.',
    ],
  },
  {
    slug: 'how-are-licenses-delivered',
    title: 'How Are Fortnite Hacks Licenses Delivered? | FAQ',
    description:
      'Fortnite Hacks licenses are delivered digitally after payment confirmation. Timing varies by payment method and order review.',
    h1: 'How licenses are delivered',
    paragraphs: [
      'After payment clears you receive email with license details and loader access. Most orders deliver within minutes.',
      'If delivery stalls, contact Support with order ID — do not charge back before opening a ticket.',
    ],
  },
  {
    slug: 'where-to-check-updates',
    title: 'Where to Check Fortnite / Easy Anti-Cheat (EAC) Updates | FAQ',
    description:
      'Check the Updates page after Fortnite or Easy Anti-Cheat (EAC) patches to confirm the latest Fortnite Hacks build status.',
    h1: 'Where to check updates',
    paragraphs: [
      'Use the Updates maintenance log and homepage status badge together after every Fortnite patch.',
      'Blog posts on patch weeks summarize meta changes; status for the cheat itself lives on Updates.',
    ],
  },
  {
    slug: 'how-to-contact-support',
    title: 'How to Contact Fortnite Hacks Support | FAQ',
    description:
      'Contact Fortnite Hacks support via the Support page or support@fortnitehack.net with your order details for faster help.',
    h1: 'How to contact support',
    paragraphs: [
      'Open Support from the nav and include order ID, Windows version, and a short description of loader or menu errors.',
      'Attach screenshots only when needed — never share passwords.',
    ],
  },
  {
    slug: 'what-is-a-fortnite-wallhack',
    title: 'What Is a Fortnite Wallhack? | FAQ',
    description:
      'A Fortnite wallhack is ESP that reveals enemy squads, vehicles, and loot through walls — with distance, colours, and category toggles.',
    h1: 'What is a Fortnite wallhack?',
    paragraphs: [
      'Wallhack searches map to our ESP box module — see enemies through builds with configurable colours and distance.',
      'Pair wallhack ESP with radar for off-screen awareness during rotates.',
    ],
  },
  {
    slug: 'does-fortnite-hacks-include-radar-hack',
    title: 'Does Fortnite Hacks Include a Radar Hack? | FAQ',
    description: 'Yes — Fortnite Hacks includes 2D radar overlays for nearby threats outside your FOV.',
    h1: 'Radar hack included',
    paragraphs: [
      '2D radar blips show players outside camera view — included in the standard license at no extra cost.',
      'Tune opacity and size in the mod menu so radar stays readable in endgame.',
    ],
  },
  {
    slug: 'eac-anti-cheat-and-fortnite-hacks',
    title: 'How Easy Anti-Cheat (EAC) Affects Fortnite Hacks | FAQ',
    description:
      'Easy Anti-Cheat (EAC) may require Fortnite Hacks rebuilds after patches. Updates notes explain the maintenance workflow.',
    h1: 'Easy Anti-Cheat and Fortnite Hacks',
    paragraphs: [
      'EAC updates can break loaders until developers rebuild. We post Updating status instead of silent failures.',
      'Read eac-bypass-fortnite and Updates for the honest maintenance story — not “permanent bypass” ads.',
    ],
  },
  {
    slug: 'buy-undetected-fortnite-cheats-windows-pc',
    title: 'Buy Undetected Fortnite Cheats for Windows PC | FAQ',
    description:
      'Buy monthly or lifetime Fortnite Hacks licenses for Windows PC — ESP, radar, and aimbot in one stack. Compare pricing before checkout.',
    h1: 'Buy undetected Fortnite cheats on Windows PC',
    paragraphs: [
      'Compare monthly ($35) and lifetime ($150) on Pricing — confirm status is clear, then checkout via our affiliate link.',
      'Windows PC is required; verify controller support on Setup if you play on pad.',
    ],
  },
]

export function getFaqArticle(slug: string) {
  return FAQ_ARTICLES.find((a) => a.slug === slug)
}

export function faqArticlePath(slug: string) {
  return `/faq/${slug}`
}
