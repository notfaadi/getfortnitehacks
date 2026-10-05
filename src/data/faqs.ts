export type FaqItem = {
  q: string
  a: string
}

/** Master FAQ — visible on /faq and reused in sections. */
export const SITE_FAQS: FaqItem[] = [
  {
    q: 'What are Fortnite Hacks?',
    a: 'Fortnite Hacks are Fortnite Battle Royale tools on getfortnitehacks.io — silent-aim Aimbot, player ESP, wallhack, infected and loot ESP, and a 2D radar hack — with live Easy Anti-Cheat status after game patches.',
  },
  {
    q: 'How much do Fortnite cheats cost?',
    a: `Fortnite cheats start from $35 for short access. Longer licenses cost more. Always confirm live Easy Anti-Cheat status and the price on getfortnitehacks.io before checkout.`,
  },
  {
    q: 'Do you sell Fortnite hacks for other games?',
    a: 'No. getfortnitehacks.io sells Fortnite cheats / Fortnite hacks only — one product, no multi-game catalog.',
  },
  {
    q: 'Is Aimbot the main feature?',
    a: 'Aimbot is optional. Most buyers lead with Fortnite ESP, loot highlighting and radar awareness, then enable silent aim only if they want it.',
  },
  {
    q: 'How do you handle Easy Anti-Cheat updates?',
    a: 'We publish live clear-to-load or Updating labels after Fortnite and Easy Anti-Cheat patches. Always check status on getfortnitehacks.io before you load.',
  },
  {
    q: 'What is Fortnite ESP / wallhack?',
    a: 'Fortnite ESP and wallhack show survivors, infected and loot through walls with distance and health when supported. Loot ESP highlights guns, ammo and medical gear so empty houses stop wasting your time.',
  },
  {
    q: 'What is a Fortnite radar hack?',
    a: 'The radar hack is a 2D overlay for off-screen survivors and third parties — useful for military loot approaches and avoiding ambushes on Chernarus or Livonia.',
  },
  {
    q: 'What features are included?',
    a: 'Fortnite Aimbot with silent aim, player ESP, infected ESP, loot and item ESP, radar hack, base and stash intel, spoofer and stream-proof options — Fortnite Battle Royale on Windows PC only. See the Features Checklist guide for the full list.',
  },
  {
    q: 'Do Fortnite Hacks work on official and private servers?',
    a: 'Yes. The cheats run on official Fortnite servers and on private servers using most common mod setups. Heavily modded servers with custom anti-cheat scripts can behave differently — ask support before you buy.',
  },
  {
    q: 'How do I buy Fortnite cheats?',
    a: 'Start on the homepage, confirm live Easy Anti-Cheat status and review the price from $35. Open Product details for compatibility and features, then continue to checkout for digital delivery.',
  },
  {
    q: 'How do I load Fortnite Hacks?',
    a: 'After checkout, follow the Complete Setup forum thread for the current load order. If status is Updating, wait rather than forcing an outdated build.',
  },
  {
    q: 'Where do I get Fortnite Hacks support?',
    a: 'Use the Support page and your checkout order channel. Include current Easy Anti-Cheat status and whether you need load, menu or delivery help.',
  },
  {
    q: 'Where can I read Fortnite Hacks reviews?',
    a: 'Player reviews with ratings are on the Reviews page. They cover ESP usefulness, status honesty and patch survival before you buy.',
  },
  {
    q: 'What is your refund policy?',
    a: 'Digital licenses follow the Refunds page — delivery failures and extended Updating windows can qualify; change of mind after a working key does not.',
  },
  {
    q: 'Is this the official Fortnite site?',
    a: 'No. We sell Fortnite Hacks only. Buy and play the game from fortnite.com. We are not affiliated with Bohemia Interactive or Fortnite.',
  },
]

/** Commercial questions shown on the homepage; FAQ schema lives on /faq only. */
export const HOME_FAQS: FaqItem[] = [
  SITE_FAQS[1],
  SITE_FAQS[4],
  SITE_FAQS[5],
  SITE_FAQS[9],
]

export const PRODUCT_PAGE_FAQS: FaqItem[] = [
  SITE_FAQS[1],
  SITE_FAQS[4],
  SITE_FAQS[5],
  SITE_FAQS[6],
  SITE_FAQS[9],
  SITE_FAQS[11],
]
