import type { PageSeo } from './site'

export type SeoLandingPage = {
  slug: string
  h1: string
  intro: string
  sections: { heading: string; body: string[] }[]
  related: { label: string; href: string }[]
} & PageSeo

const DEFAULT_RELATED = [
  { label: 'Pricing', href: '/pricing' },
  { label: 'Features', href: '/features' },
  { label: 'Setup guide', href: '/setup' },
  { label: 'FAQ', href: '/faq' },
] as const

function page(
  slug: string,
  title: string,
  description: string,
  h1: string,
  intro: string,
  sections: { heading: string; body: string[] }[],
  related = [...DEFAULT_RELATED],
): SeoLandingPage {
  return {
    slug,
    title,
    description,
    path: `/${slug}`,
    h1,
    intro,
    sections,
    related,
    ogType: 'website',
    robots: 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1',
  }
}

export const SEO_LANDING_PAGES: SeoLandingPage[] = [
  page(
    'fortnite-hacks',
    'Fortnite Hacks 2026 | Undetected ESP Aimbot Guide',
    'Fortnite hacks for Windows PC: undetected ESP wallhack, radar hack, and Aimbot with EAC maintenance. Compare fortnite cheats options and buy the full package.',
    'Fortnite Hacks — Undetected ESP, Aimbot & Wallhack',
    'Fortnite Hacks bundles ESP boxes, soft aim, 2D radar, and cloud DMA for Windows PC and controllers — with honest Easy Anti-Cheat maintenance after every patch.',
    [
      {
        heading: 'One stack for Battle Royale and Zero Build',
        body: [
          'Search “fortnite hacks” and you get noise. This pillar page is the product overview: undetected ESP wallhack overlays, loot markers, soft aim profiles, and radar cues in one license.',
          'Check live status on the Updates page before queueing. After EAC rebuilds we publish clear-to-load or Updating labels — no fake permanent UD claims.',
        ],
      },
      {
        heading: 'What you get at checkout',
        body: [
          'Player boxes with distance and shield readouts, category toggles for loot, soft aim with FOV and bone priority, and a 2D radar for off-screen threats.',
          'Cloud DMA options and controller-friendly menus are included where the current build supports them. Compare monthly and lifetime pricing before you buy.',
        ],
      },
    ],
  ),
  page(
    'fortnite-esp',
    'Fortnite ESP 2026 | Player Boxes & Wallhack',
    'Fortnite ESP for PC and controllers — player boxes, loot markers, and distance readouts. Part of our undetected fortnite hacks with cloud DMA support.',
    'Fortnite ESP — Player Boxes & Wallhack',
    'Fortnite ESP reveals squads, vehicles, and loot through builds with colour-coded boxes, distance text, and filters — bundled inside Fortnite Hacks.',
    [
      {
        heading: 'ESP boxes and wallhack visibility',
        body: [
          'Wallhack-style ESP draws player boxes through terrain and builds so you see third parties before they swing. Tune colours, max distance, and squad vs solo filters.',
          'Loot markers highlight chests, floor loot, and supply drops by rarity — skip empty POIs and leave spawn with a usable loadout.',
        ],
      },
      {
        heading: 'Controllers and PC',
        body: [
          'Menus support mouse navigation on PC and readable layouts for controller players pairing soft aim with ESP.',
          'Pair this page with the Setup guide for exclusions, loader order, and first-match toggles.',
        ],
      },
    ],
  ),
  page(
    'fortnite-aimbot',
    'Fortnite Aimbot 2026 | Soft Aim for PC & Controllers',
    'Fortnite aimbot with soft aim tuning for PC and controllers. FOV, bone priority, and hotkeys bundled with ESP boxes in our fortnite hacks package.',
    'Fortnite Aimbot — Soft Aim for PC & Controllers',
    'Soft aim keeps tracking natural — FOV cones, smoothing, and per-weapon profiles instead of snap cheats that die in replays.',
    [
      {
        heading: 'Soft aim tuning',
        body: [
          'Set FOV, smoothing, and bone priority for AR, SMG, and sniper profiles. Hotkeys let you disable assist between fights.',
          'Soft aim ships with ESP so you tag targets before enabling assist — standard for ranked and Zero Build.',
        ],
      },
      {
        heading: 'Maintenance and risk',
        body: [
          'Easy Anti-Cheat updates can require rebuilds. Read the EAC maintenance guide and Updates log before loading after patch day.',
        ],
      },
    ],
  ),
  page(
    'features',
    'Fortnite Hacks Features | ESP, Soft Aim, Cloud DMA',
    'Full fortnite hacks feature list: ESP boxes, soft aim, radar, cloud DMA, and toggles for PC and controllers. Review controls before checkout.',
    'Fortnite Hacks Features — Full Control List',
    'Every toggle in the Fortnite Hacks package — ESP, soft aim, radar, cloud DMA, stream-proof options, and spoofer tools when enabled on your build.',
    [
      {
        heading: 'Combat and awareness',
        body: [
          'Player ESP / wallhack, loot ESP, 2D radar hack, and soft aim with weapon profiles.',
          'In-match mod menu style toggles let you enable features between zones without restarting.',
        ],
      },
      {
        heading: 'Platform support',
        body: [
          'Built for Windows PC with controller support on supported builds. Cloud DMA paths are documented on Setup when available.',
        ],
      },
    ],
  ),
  page(
    'pricing',
    'Fortnite Hacks Pricing | $35/mo or $150 Life',
    'Fortnite hacks pricing: $35/month or $150 lifetime for ESP, soft aim, boxes, and cloud DMA on PC and controllers. Instant delivery — pick a plan.',
    'Fortnite Hacks Pricing — Monthly & Lifetime',
    'Choose monthly access from $35 or a $150 lifetime license for ESP boxes, soft aim, radar, and cloud DMA — instant digital delivery after checkout.',
    [
      {
        heading: 'Plans',
        body: [
          'Monthly suits players testing status through a full patch cycle. Lifetime fits long-term mains who want one payment and update access.',
          'Prices and checkout live on Zadeyo — confirm EAC status is clear before you pay.',
        ],
      },
      {
        heading: 'What is included',
        body: [
          'Both plans include the full feature stack: ESP, soft aim, radar, setup guides, and maintenance updates while your license is active.',
        ],
      },
    ],
  ),
  page(
    'setup',
    'Fortnite Hacks Setup | PC & Controller Guide',
    'Set up fortnite hacks on PC and controllers — activate ESP boxes, soft aim profiles, and cloud DMA. Check EAC updates before your first queue.',
    'Fortnite Hacks Setup — PC & Controller Guide',
    'Step-by-step setup: antivirus exclusions, loader order, ESP and soft aim profiles, and controller bind tips before your first queue.',
    [
      {
        heading: 'Before first launch',
        body: [
          'Confirm Updates shows clear-to-load. Add exclusions, run loader as admin, and load menu before opening Fortnite.',
          'Import a soft aim profile or start conservative — raise FOV only after a creative warmup.',
        ],
      },
      {
        heading: 'Controller players',
        body: [
          'Navigate the mod menu with your mapped keys, test ESP distance in Creative, then enable soft aim in pubs.',
        ],
      },
    ],
  ),
  page(
    'updates',
    'Fortnite Hacks Updates | EAC Maintenance Log',
    'Fortnite hacks update log: EAC rebuilds for ESP boxes, soft aim, and cloud DMA on PC and controllers. Check status before queueing after patches.',
    'Fortnite Hacks Updates — Maintenance Log',
    'Patch-day log for Easy Anti-Cheat rebuilds affecting ESP, soft aim, and cloud DMA — check here before queueing after Fortnite updates.',
    [
      {
        heading: 'How we post status',
        body: [
          'After Fortnite or EAC patches we label builds Undetected, Updating, or Use with caution until QA finishes.',
          'Subscribe to the homepage status badge and revisit this log on patch weeks.',
        ],
      },
      {
        heading: 'What to do when Updating',
        body: [
          'Do not force old loaders. Wait for the posted rebuild, re-read Setup if steps change, then load when status clears.',
        ],
      },
    ],
  ),
  page(
    'undetected-fortnite-cheats',
    'Undetected Fortnite Hacks 2026 | EAC Safe',
    'Undetected fortnite hacks with EAC maintenance for ESP boxes, soft aim, and cloud DMA on PC and controllers. Check status before you queue.',
    'Undetected Fortnite Hacks — EAC Maintenance',
    'Undetected means maintained — ESP, soft aim, and cloud DMA rebuilt after EAC patches with public status labels.',
    [
      {
        heading: 'Honest status language',
        body: [
          'No cheat stays undetected forever. We publish maintenance timelines and rebuild notes instead of permanent UD marketing.',
        ],
      },
      {
        heading: 'Before you queue',
        body: [
          'Match homepage status with this page and Updates after patch day. Pair with buyer reviews for real patch survival stories.',
        ],
      },
    ],
  ),
  page(
    'fortnite-wallhack',
    'Fortnite Wallhack 2026 | ESP Boxes & Visibility',
    'Fortnite wallhack ESP with player boxes and loot markers for PC and controllers. Undetected fortnite cheats with cloud DMA — learn overlays and buy.',
    'Fortnite Wallhack — ESP Boxes & Visibility',
    'Fortnite wallhack is player ESP — boxes, skeletons, and distance through builds plus loot visibility toggles.',
    [
      {
        heading: 'Wallhack vs ESP',
        body: [
          'Players search “wallhack” for see-through-enemy overlays. Our wallhack module is the ESP box stack with colour and distance controls.',
        ],
      },
      {
        heading: 'Stream and squad play',
        body: [
          'Use stream-proof modes when recording. Lower max distance in stacked lobbies to keep overlays readable.',
        ],
      },
    ],
  ),
  page(
    'fortnite-radar-hack',
    'Fortnite Radar Hack 2026 | 2D Threat Overlay',
    'Fortnite radar hack for flank awareness on PC and controllers. Bundled with ESP boxes, soft aim, and cloud DMA in our fortnite hacks package.',
    'Fortnite Radar Hack — 2D Threat Awareness',
    '2D radar shows off-screen players as blips — pair with ESP boxes for reboot van rotations and endgame zones.',
    [
      {
        heading: 'When radar wins fights',
        body: [
          'Third parties during revives and rotate deadzones are where radar pays off. Tune blip size and opacity in the mod menu.',
        ],
      },
      {
        heading: 'Included in one license',
        body: [
          'Radar ships with soft aim and ESP — no separate SKU. See Features for the full toggle list.',
        ],
      },
    ],
  ),
  page(
    'eac-bypass-fortnite',
    'EAC Bypass Fortnite | Hack Maintenance Guide',
    'How fortnite hacks rebuild after EAC patches — ESP boxes, soft aim, and cloud DMA maintenance for PC and controllers. Read before queueing.',
    'EAC Bypass — Fortnite Hacks Maintenance',
    'Easy Anti-Cheat updates force rebuilds — this guide explains maintenance for ESP, soft aim, and cloud DMA without unsafe “bypass” myths.',
    [
      {
        heading: 'Maintenance, not magic bypass',
        body: [
          'Sustainable fortnite hacks rely on developer rebuilds after EAC changes — not permanent kernel claims.',
        ],
      },
      {
        heading: 'Your workflow',
        body: [
          'Patch day: read Updates, wait for clear status, reload loader, test in Creative, then ranked.',
        ],
      },
    ],
  ),
  page(
    'fortnite-cheats-2026',
    'Fortnite Cheats 2026 | Hacks with ESP & Cloud DMA',
    'Best fortnite cheats 2026: ESP boxes, soft aim, and cloud DMA for PC and controllers. Undetected fortnite hacks with EAC maintenance — compare and buy.',
    'Fortnite Cheats 2026 — ESP, Soft Aim & Cloud DMA',
    '2026 buyer snapshot for fortnite cheats — ESP boxes, soft aim, cloud DMA, controller support, and EAC maintenance in one package.',
    [
      {
        heading: 'What changed in 2026',
        body: [
          'Tighter EAC cycles mean status honesty matters more than feature bullet spam. Compare cloud DMA and controller menus before checkout.',
        ],
      },
      {
        heading: 'Compare before you buy',
        body: [
          'Read Best Fortnite Hacks buyer guide and competitor comparison posts on the blog, then pick monthly or lifetime pricing.',
        ],
      },
    ],
  ),
  page(
    'fortnite-cheat-download',
    'Fortnite Hack Download 2026 | Instant Access',
    'Fortnite hack download with instant license delivery — ESP boxes, soft aim, and cloud DMA for PC and controllers. Buy, activate, and play.',
    'Fortnite Hack Download — Instant License Delivery',
    'Digital delivery after checkout — download loader, activate ESP and soft aim, and follow Setup before queueing.',
    [
      {
        heading: 'Instant delivery flow',
        body: [
          'Pay on checkout, receive license email, download from the panel, and run Setup steps in order.',
        ],
      },
      {
        heading: 'Support',
        body: [
          'Stuck on delivery or loader errors? Open Support with order ID for faster help.',
        ],
      },
    ],
  ),
  page(
    'fortnite-mod-menu',
    'Fortnite Mod Menu 2026 | ESP & Soft Aim Toggles',
    'Fortnite mod menu for in-match toggles — ESP boxes, soft aim, radar, and cloud DMA on PC and controllers. Undetected fortnite hacks package.',
    'Fortnite Mod Menu — In-Client Control Panel',
    'In-match mod menu toggles for ESP boxes, soft aim, radar, and cloud DMA without restarting Fortnite between modes.',
    [
      {
        heading: 'Menu layout',
        body: [
          'Tabs group combat, visuals, radar, and misc. Bind a menu key you will not mis-press in builds.',
        ],
      },
      {
        heading: 'Safe toggling',
        body: [
          'Disable soft aim in pre-game lobby if you warm up on stream. Re-enable after bus drop.',
        ],
      },
    ],
  ),
  page(
    'fortnite-soft-aim',
    'Fortnite Soft Aim 2026 | Smooth Aimbot Settings',
    'Fortnite soft aim settings for natural tracking on PC and controllers. Smoothness, FOV, and bone priority — included in our fortnite hacks with ESP boxes.',
    'Fortnite Soft Aim — Smooth Aimbot Controls',
    'Soft aim keeps assist believable — tune smoothness, FOV, and bone priority per weapon class.',
    [
      {
        heading: 'Recommended baselines',
        body: [
          'Start with a small FOV and high smoothing on ARs. Snipers get tighter cones and head priority.',
        ],
      },
      {
        heading: 'Controller soft aim',
        body: [
          'Pair with ESP tagging so you know when assist is worth enabling on pad.',
        ],
      },
    ],
  ),
  page(
    'best-fortnite-cheats',
    'Best Fortnite Hacks 2026 | Buyer Guide',
    'Best fortnite hacks for 2026: ESP boxes, soft aim, cloud DMA, and EAC maintenance on PC and controllers. Use this checklist before checkout.',
    'Best Fortnite Hacks — 2026 Buyer Guide',
    'Checklist for picking fortnite hacks in 2026 — status honesty, ESP quality, soft aim, cloud DMA, pricing, and support response times.',
    [
      {
        heading: 'Checklist',
        body: [
          'Verify live EAC status, read recent reviews, confirm controller support, compare monthly vs lifetime, and skim Updates for patch survival.',
        ],
      },
      {
        heading: 'Why Fortnite Hacks',
        body: [
          'Single-game focus, full feature stack, public maintenance log, and instant delivery — see Features and Pricing next.',
        ],
      },
    ],
  ),
  page(
    'fortnite-aimbot-hack',
    'Fortnite Aimbot Hack 2026 | Soft Aim Assist',
    'Fortnite aimbot hack with soft aim for PC and controllers. FOV, bone priority, and hotkeys — bundled with ESP boxes in our fortnite hacks package.',
    'Fortnite Aimbot Hack — Soft Aim Assist',
    'Keyword landing for aimbot hack searches — maps to soft aim profiles, hotkeys, and ESP pairing inside Fortnite Hacks.',
    [
      {
        heading: 'Soft aim vs rage aimbot',
        body: [
          'We ship soft aim tuned for believable tracking — not rage snaps that trigger reports and replays.',
        ],
      },
      {
        heading: 'Included features',
        body: [
          'FOV, bone priority, weapon profiles, and hotkeys ship with ESP boxes and radar in one license.',
        ],
      },
    ],
  ),
  page(
    'fortnite-esp-hack',
    'Fortnite ESP Hack 2026 | Player Boxes & Loot',
    'Fortnite ESP hack with player boxes and loot markers for PC and controllers. Undetected fortnite cheats with cloud DMA — see overlays and buy.',
    'Fortnite ESP Hack — Player Boxes Guide',
    'ESP hack landing — player boxes, loot markers, distance readouts, and cloud DMA compatibility.',
    [
      {
        heading: 'Player boxes',
        body: [
          'Colour by threat, show distance and shields, and filter max range for endgame readability.',
        ],
      },
      {
        heading: 'Loot ESP',
        body: [
          'Mark chests and floor loot by tier so routes stay efficient in ranked.',
        ],
      },
    ],
  ),
  page(
    'fortnite-unlock-all',
    'Fortnite Unlock All 2026 | What It Really Means',
    'Fortnite unlock all explained vs real fortnite hacks — ESP boxes, soft aim, and cloud DMA for PC and controllers. Know what you are buying.',
    'Fortnite Unlock All — What Players Search For',
    '“Unlock all” usually means skins — Fortnite Hacks sells gameplay overlays (ESP, soft aim, radar), not cosmetic unlockers.',
    [
      {
        heading: 'What we do not sell',
        body: [
          'We do not sell skin unlockers or V-Bucks generators. Those are scams unrelated to our ESP and soft aim stack.',
        ],
      },
      {
        heading: 'What you actually get',
        body: [
          'Gameplay tools: ESP boxes, soft aim, radar, and cloud DMA on supported builds — see Features for details.',
        ],
      },
    ],
  ),
]

export const SEO_LANDING_SLUGS = SEO_LANDING_PAGES.map((p) => p.slug)

export function getSeoLandingPage(slug: string) {
  return SEO_LANDING_PAGES.find((p) => p.slug === slug)
}
