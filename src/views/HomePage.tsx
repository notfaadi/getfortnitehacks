import {
  ArrowRight,
  Check,
  Crosshair,
  Eye,
  Radar,
  Sparkles,
  Star,
} from 'lucide-react'
import { Navbar } from '../components/Navbar'
import { VideoBg } from '../components/VideoBg'
import { SiteFooter } from '../components/SiteFooter'
import { HeroSearch } from '../components/HeroSearch'
import { FaqSection } from '../components/FaqSection'
import { guidePath } from '../data/games'
import { CheckoutLink } from '../components/CheckoutLink'
import { SocialShare } from '../components/SocialShare'
import { HOME_FAQS } from '../data/faqs'
import { HOME_HEADINGS, PRODUCT_PRICE_USD, SEO, SITE_NAME, SITE_PURPOSE } from '../data/site'
import { BLOGS, blogPath } from '../data/blogs'

const HERO_FEATURES = [
  { icon: Eye, label: 'ESP / wallhack' },
  { icon: Crosshair, label: '2D radar' },
  { icon: Star, label: 'Soft aim' },
  { icon: Check, label: 'Patch updates' },
] as const

const FEATURES = [
  {
    icon: Crosshair,
    label: 'Silent Aimbot',
    desc: 'FOV, smoothing, and bone selection — hits look natural in replays and spectator views.',
    featured: true,
  },
  {
    icon: Eye,
    label: 'Player ESP',
    desc: 'Boxes, distance, shield, and loadout intel through builds and terrain.',
    featured: false,
  },
  {
    icon: Radar,
    label: '2D Radar',
    desc: 'Track off-screen players during rotations and endgame without tunnel vision.',
    featured: false,
  },
  {
    icon: Sparkles,
    label: 'Loot ESP',
    desc: 'Chests, floor loot, and supply drops filtered by rarity so you gear up fast.',
    featured: false,
  },
] as const

const TRUST_TAGS = [
  'Silent aim',
  'Player ESP',
  'Loot ESP',
  'Radar hack',
  'HWID spoofer',
  'Instant delivery',
] as const

const MARQUEE = [...TRUST_TAGS, ...TRUST_TAGS]

export function HomePage() {
  return (
    <div className="min-h-screen overflow-x-hidden text-white">
      <section id="home" className="relative flex min-h-[100svh] flex-col overflow-x-clip">
        <VideoBg />

        <div className="relative z-20 flex min-h-[100svh] flex-col">
          <Navbar onVideo />

          <main className="hero-main-corner relative flex flex-1 flex-col justify-center pb-12 pt-6 sm:pb-16">
            <div className="relative z-30 w-full max-w-lg text-left">
              <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-[2.75rem] lg:leading-tight">
                {HOME_HEADINGS.h1}
              </h1>
              <p className="mt-4 max-w-md text-base leading-relaxed text-white/90 sm:text-lg">
                Undetected Fortnite wallhack, ESP, and aimbot for PC in 2026 —{' '}
                {HOME_HEADINGS.h2Features.toLowerCase()} with Easy Anti-Cheat maintenance included.
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-4">
                <CheckoutLink className="cta-gradient inline-flex items-center justify-center gap-2 rounded-full px-7 py-3 text-sm font-semibold text-white transition-opacity hover:opacity-90">
                  Get access now
                  <ArrowRight className="h-4 w-4" strokeWidth={2.5} />
                </CheckoutLink>
                <a
                  href={guidePath('fortnite')}
                  className="inline-flex items-center justify-center rounded-full border border-z-soft/35 bg-[rgba(28,22,48,0.88)] px-6 py-3 text-sm font-semibold text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.1)] backdrop-blur-xl transition-[background-color,border-color] hover:border-z-soft/50 hover:bg-[rgba(36,28,58,0.95)]"
                >
                  Explore features
                </a>
              </div>

              <ul className="mt-10 grid max-w-sm grid-cols-2 gap-x-6 gap-y-4">
                {HERO_FEATURES.map(({ icon: Icon, label }) => (
                  <li key={label} className="flex items-center gap-2.5 text-sm font-medium text-white">
                    <Icon className="h-[1.15rem] w-[1.15rem] shrink-0" strokeWidth={1.75} aria-hidden />
                    {label}
                  </li>
                ))}
              </ul>
            </div>
          </main>
        </div>
      </section>

      <div className="overflow-hidden border-y border-z-soft/10 bg-z-band/80 py-3">
        <div className="home-marquee-track px-6 text-xs font-medium uppercase tracking-[0.18em] text-white/35">
          {MARQUEE.map((tag, i) => (
            <span key={`${tag}-${i}`} className="inline-flex items-center gap-2.5">
              {tag}
              <span className="h-1 w-1 rounded-full bg-z-accent/50" aria-hidden />
            </span>
          ))}
        </div>
      </div>

      <div className="hero-to-body" aria-hidden />

      <div className="page-body relative z-10">
        <section id="features" className="page-band page-x border-t border-z-soft/15 py-16 sm:py-20">
          <div className="mx-auto max-w-6xl">
            <div className="max-w-2xl">
              <p className="text-xs font-medium uppercase tracking-[0.2em] text-z-soft/80">
                Toolkit
              </p>
              <h2 className="mt-3 text-3xl font-bold tracking-tight text-white sm:text-4xl">
                {HOME_HEADINGS.h2Features}
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-white/55 sm:text-base">
                Everything you need for Battle Royale — tuned for performance and readable in-game.
              </p>
            </div>

            <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:grid-rows-2">
              {FEATURES.map(({ icon: Icon, label, desc, featured }) => (
                <div
                  key={label}
                  className={`page-card flex h-full flex-col rounded-2xl p-6 sm:p-7 ${
                    featured ? 'home-bento-main lg:col-span-1 lg:row-span-2' : ''
                  }`}
                >
                  <div className="icon-well mb-5">
                    <Icon className="h-5 w-5" strokeWidth={1.75} />
                  </div>
                  <p className="text-lg font-semibold text-white">{label}</p>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-white/55">{desc}</p>
                  {featured ? (
                    <a
                      href={guidePath('fortnite')}
                      className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-z-soft hover:text-white"
                    >
                      Full feature list
                      <ArrowRight className="h-4 w-4" strokeWidth={1.75} />
                    </a>
                  ) : null}
                </div>
              ))}
              <div className="page-card flex flex-col justify-between rounded-2xl border border-z-accent/25 bg-gradient-to-br from-z-accent/15 to-transparent p-6 sm:p-7 lg:col-span-1">
                <div>
                  <p className="text-xs font-medium uppercase tracking-wider text-z-soft/90">
                    Easy Anti-Cheat
                  </p>
                  <p className="mt-2 text-lg font-semibold text-white">Status you can trust</p>
                  <p className="mt-2 text-sm leading-relaxed text-white/55">
                    We update labels after patches — clear to load, updating, or use with caution.
                    No fake “always UD” claims.
                  </p>
                </div>
                <a
                  href="/faq"
                  className="mt-4 inline-flex w-fit items-center gap-1.5 rounded-full border border-z-soft/30 px-4 py-2 text-sm font-medium text-white hover:bg-white/5"
                >
                  Read FAQ
                  <ArrowRight className="h-3.5 w-3.5" strokeWidth={1.75} />
                </a>
              </div>
            </div>
          </div>
        </section>

        <section id="picks" className="page-x py-16 sm:py-24">
          <div className="mx-auto max-w-6xl">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <p className="text-xs font-medium uppercase tracking-[0.2em] text-z-soft/80">
                  Forums
                </p>
                <h2 className="mt-3 text-3xl font-bold tracking-tight text-white sm:text-4xl">
                  Level up before you buy
                </h2>
                <p className="mt-3 max-w-xl text-sm leading-relaxed text-white/55 sm:text-base">
                  Aimbot tuning, ESP setup, radar tips, loader fixes, and EAC status breakdowns.
                </p>
              </div>
              <a
                href="/forums"
                className="inline-flex items-center gap-2 rounded-full border border-z-soft/25 px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:border-z-soft/40 hover:bg-white/5"
              >
                All guides
                <ArrowRight className="h-4 w-4" strokeWidth={1.75} />
              </a>
            </div>

            <div className="relative z-20 mt-8 max-w-xl">
              <HeroSearch placeholder="Search Fortnite guides…" />
            </div>

            <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {BLOGS.slice(0, 6).map((post) => (
                <a
                  key={post.slug}
                  href={blogPath(post.slug)}
                  className="page-card group relative flex h-full flex-col overflow-hidden rounded-2xl p-5 sm:p-6"
                >
                  <div
                    className="pointer-events-none absolute -right-8 -top-8 h-24 w-24 rounded-full bg-z-accent/10 blur-2xl transition-opacity group-hover:opacity-100"
                    aria-hidden
                  />
                  <p className="text-xs uppercase tracking-wider text-z-soft/70">{post.tag}</p>
                  <p className="mt-2 text-lg font-semibold tracking-tight text-white">{post.title}</p>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-white/55">{post.excerpt}</p>
                  <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-z-soft transition-colors group-hover:text-white">
                    {post.tag} guide
                    <ArrowRight
                      className="h-4 w-4 transition-transform group-hover:translate-x-0.5"
                      strokeWidth={1.75}
                    />
                  </span>
                </a>
              ))}
            </div>

            <div className="page-card mt-10 flex flex-col gap-6 overflow-hidden rounded-3xl border border-z-soft/20 p-6 sm:flex-row sm:items-center sm:justify-between sm:p-10">
              <div className="relative">
                <p className="text-xs font-medium uppercase tracking-wider text-white/45">
                  Ready to load?
                </p>
                <p className="mt-2 text-2xl font-bold text-white sm:text-3xl">
                  Fortnite Hacks — full product page
                </p>
                <p className="mt-2 max-w-md text-sm text-white/55">
                  Pricing, checkout, feature breakdown, and live compatibility in one place.
                </p>
              </div>
              <a
                href={guidePath('fortnite')}
                className="cta-gradient cta-shine inline-flex shrink-0 items-center justify-center rounded-full px-8 py-3.5 text-sm font-semibold text-white"
              >
                View product
              </a>
            </div>
          </div>
        </section>

        <section id="about" className="page-band page-x border-t border-white/10 py-16 sm:py-20">
          <div className="mx-auto grid max-w-6xl gap-5 lg:grid-cols-2 lg:gap-6">
            <div className="page-card flex h-full min-h-[260px] flex-col justify-between rounded-3xl p-6 sm:p-10">
              <div>
                <p className="text-xs font-medium uppercase tracking-[0.2em] text-z-soft/80">
                  About {SITE_NAME}
                </p>
                <h2 className="mt-3 text-2xl font-bold tracking-tight text-white sm:text-3xl">
                  {HOME_HEADINGS.h2About}
                </h2>
                <p className="mt-4 text-sm leading-relaxed text-white/55 sm:text-base">
                  {SITE_PURPOSE} Clear features, honest status labels, and deep forums for setup.
                  Then check{' '}
                  <a
                    href="/fortnite-cheats"
                    className="text-z-soft underline-offset-2 hover:underline"
                  >
                    the feature list
                  </a>
                  ,{' '}
                  <a href="/reviews" className="text-z-soft underline-offset-2 hover:underline">
                    reviews
                  </a>
                  , or{' '}
                  <a href="/support" className="text-z-soft underline-offset-2 hover:underline">
                    loader help
                  </a>
                  .
                </p>
              </div>
              <a
                href={guidePath('fortnite')}
                className="mt-8 inline-flex w-fit items-center gap-1.5 text-sm font-semibold text-white hover:text-z-soft"
              >
                Product details
                <ArrowRight className="h-4 w-4" strokeWidth={1.75} />
              </a>
            </div>

            <div
              id="access"
              className="page-card relative flex h-full min-h-[260px] flex-col justify-between overflow-hidden rounded-3xl border border-z-accent/20 p-6 sm:p-10"
            >
              <div
                className="pointer-events-none absolute inset-0 bg-gradient-to-br from-z-accent/12 via-transparent to-z-deep/10"
                aria-hidden
              />
              <div className="relative">
                <p className="text-xs font-medium uppercase tracking-[0.2em] text-z-soft/80">
                  Checkout
                </p>
                <h2 className="mt-3 text-2xl font-bold tracking-tight text-white sm:text-3xl">
                  {HOME_HEADINGS.h2Access}
                </h2>
                <p className="mt-4 text-sm leading-relaxed text-white/55 sm:text-base">
                  Confirm EAC status is clear, then checkout for instant delivery on supported
                  Windows builds — worldwide.
                </p>
              </div>
              <CheckoutLink className="cta-gradient cta-shine relative mt-8 inline-flex w-full items-center justify-center rounded-full px-6 py-3.5 text-sm font-semibold text-white sm:w-fit">
                Get license — ${PRODUCT_PRICE_USD}
              </CheckoutLink>
            </div>
          </div>
        </section>

        <FaqSection
          id="faq"
          heading={HOME_HEADINGS.h2Faq}
          intro="EAC status, aimbot and ESP, delivery and checkout — before you buy."
          items={HOME_FAQS}
          moreHref="/faq"
          moreLabel="Full FAQ →"
        />

        <section className="page-x border-t border-z-soft/15 py-8">
          <div className="mx-auto max-w-6xl">
            <SocialShare path={SEO.home.path} title={SEO.home.title} />
          </div>
        </section>

        <SiteFooter currentPath="/" />
      </div>
    </div>
  )
}
