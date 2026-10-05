/**
 * Single sitemap at /sitemap.xml — every indexed page URL + image entries.
 * One urlset only (never a sitemap index). 404 is excluded.
 */
import { existsSync, readFileSync, readdirSync, unlinkSync, writeFileSync } from 'node:fs'
import { dirname, join } from 'node:path'
import { fileURLToPath } from 'node:url'

const root = join(dirname(fileURLToPath(import.meta.url)), '..')
const publicDir = join(root, 'public')
const dataDir = join(root, 'src', 'data')
const pagesDir = join(root, 'src', 'pages')
const SITE = (process.env.SITE_URL || 'https://getfortnitehacks.org').replace(/\/$/, '')
const TODAY = new Date().toLocaleDateString('en-CA')
const HREFLANG = ['en', 'x-default']

const HERO_FULL = '/media/fortnite-hero-full.webp'
const COVER = '/media/fortnite-cover.webp'
const BOX = '/media/fortnite-box.jpg'
const ESP = '/media/fortnite-esp-gameplay.gif'
const MENU = '/media/fortnite-menu.gif'
const CONTROL = '/media/fortnite-control-art.jpg'
const HOME_ART = '/media/fortnite-home-art.jpg'
const TACTICAL_ART = '/media/fortnite-tactical-art.jpg'
const VIDEO_THUMB = '/media/fortnite-video-thumb.jpg'
const PREVIEW_VIDEO = '/videos/fortnite-preview.mp4'
const OG_DEFAULT = '/og/fortnite-cheats.jpg'

const ALL_SITE_IMAGES = [
  HERO_FULL,
  COVER,
  BOX,
  ESP,
  MENU,
  CONTROL,
  HOME_ART,
  TACTICAL_ART,
  VIDEO_THUMB,
  '/og/home.jpg',
  '/og/fortnite-cheats.jpg',
  '/og/forums.jpg',
  '/og/reviews.jpg',
  '/og/faq.jpg',
  '/og/support.jpg',
  '/og/privacy.jpg',
  '/og/terms.jpg',
  '/og/refunds.jpg',
]

const FORUM_IMAGES = {
  'features-list': COVER,
  hotkeys: MENU,
  'complete-setup': HERO_FULL,
  'disable-antivirus': CONTROL,
  'undetected-status': COVER,
  'aimbot-settings': MENU,
  'esp-wallhack-guide': ESP,
  'radar-hack-guide': MENU,
  'stream-proof-setup': HOME_ART,
  'easy-anti-cheat-status': COVER,
  'windows-setup': HERO_FULL,
  'raid-play-guide': BOX,
  'loader-errors': TACTICAL_ART,
}

const PAGE_META = {
  '/': { priority: '1.0', changefreq: 'daily' },
  '/fortnite-hacks': { priority: '0.95', changefreq: 'weekly' },
  '/fortnite-cheats': { priority: '0.9', changefreq: 'weekly' },
  '/features': { priority: '0.88', changefreq: 'weekly' },
  '/pricing': { priority: '0.88', changefreq: 'weekly' },
  '/blog': { priority: '0.85', changefreq: 'weekly' },
  '/forums': { priority: '0.85', changefreq: 'weekly' },
  '/reviews': { priority: '0.8', changefreq: 'weekly' },
  '/faq': { priority: '0.75', changefreq: 'monthly' },
  '/support': { priority: '0.75', changefreq: 'weekly' },
  '/setup': { priority: '0.78', changefreq: 'monthly' },
  '/updates': { priority: '0.78', changefreq: 'weekly' },
  '/privacy-policy': { priority: '0.4', changefreq: 'yearly' },
  '/terms': { priority: '0.4', changefreq: 'yearly' },
  '/refund-policy': { priority: '0.45', changefreq: 'yearly' },
}

function escapeXml(value) {
  return String(value)
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&apos;')
}

/** Keep captions ASCII-safe for maximum crawler compatibility. */
function asciiSafe(value) {
  return String(value)
    .replace(/[\u2013\u2014]/g, '-')
    .replace(/[\u2018\u2019]/g, "'")
    .replace(/[\u201C\u201D]/g, '"')
    .replace(/\u2026/g, '...')
    .replace(/[^\x09\x0A\x0D\x20-\x7E]/g, '')
}

function siteUrl(path) {
  return !path || path === '/' ? `${SITE}/` : `${SITE}${path.startsWith('/') ? path : `/${path}`}`
}

function loadGames() {
  const src = readFileSync(join(dataDir, 'games.ts'), 'utf8')
  return [...src.matchAll(/\{\s*slug:\s*['"]([^'"]+)['"],\s*name:\s*['"]([^'"]+)['"]/g)].map(
    (match) => ({ slug: match[1], name: match[2] }),
  )
}

function loadForums() {
  const src = readFileSync(join(dataDir, 'blogs.ts'), 'utf8')
  const pattern =
    /slug:\s*['"]([^'"]+)['"],\s*title:\s*['"]([^'"]+)['"],\s*excerpt:\s*['"]([^'"]+)['"],\s*metaTitle:\s*['"]([^'"]+)['"],\s*metaDescription:\s*['"]([^'"]+)['"],[\s\S]*?date:\s*['"](\d{4}-\d{2}-\d{2})['"]/g
  return [...src.matchAll(pattern)].map((match) => ({
    slug: match[1],
    title: match[2],
    excerpt: match[3],
    metaTitle: match[4],
    metaDescription: match[5],
    date: match[6],
  }))
}

function loadStaticRoutes() {
  return readdirSync(pagesDir, { withFileTypes: true })
    .filter(
      (entry) =>
        entry.isFile() &&
        entry.name.endsWith('.astro') &&
        entry.name !== '404.astro' &&
        !entry.name.startsWith('['),
    )
    .map((entry) => (entry.name === 'index.astro' ? '/' : `/${entry.name.slice(0, -6)}`))
}

function loadSlugsFromData(file) {
  const src = readFileSync(join(dataDir, file), 'utf8')
  return [...src.matchAll(/slug:\s*['"]([^'"]+)['"]/g)].map((match) => match[1])
}

/** SEO landing pages use page('slug', ...) — not slug: '...' literals. */
function loadLandingSlugs() {
  const src = readFileSync(join(dataDir, 'seo-landing-pages.ts'), 'utf8')
  return [...src.matchAll(/\bpage\s*\(\s*['"]([^'"]+)['"]/g)].map((match) => match[1])
}

function alternateLinks(url) {
  return HREFLANG.map(
    (language) =>
      `    <xhtml:link rel="alternate" hreflang="${language}" href="${escapeXml(url)}" />`,
  ).join('\n')
}

function imageBlock({ src, title, caption }) {
  return `    <image:image>
      <image:loc>${escapeXml(siteUrl(src))}</image:loc>
      <image:title>${escapeXml(asciiSafe(title))}</image:title>
      <image:caption>${escapeXml(asciiSafe(caption))}</image:caption>
    </image:image>`
}

function videoBlock({ thumb, title, description, content }) {
  return `    <video:video>
      <video:thumbnail_loc>${escapeXml(siteUrl(thumb))}</video:thumbnail_loc>
      <video:title>${escapeXml(asciiSafe(title))}</video:title>
      <video:description>${escapeXml(asciiSafe(description))}</video:description>
      <video:content_loc>${escapeXml(siteUrl(content))}</video:content_loc>
      <video:family_friendly>yes</video:family_friendly>
      <video:live>no</video:live>
    </video:video>`
}

function urlEntry({ path, priority, changefreq, lastmod = TODAY, images, videos = [] }) {
  if (!images?.length) throw new Error(`Sitemap entry for ${path} is missing images`)
  const url = siteUrl(path)
  const media = [
    ...images.map((image) => imageBlock(image)),
    ...videos.map((video) => videoBlock(video)),
  ]
  return `  <url>
    <loc>${escapeXml(url)}</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>${changefreq}</changefreq>
    <priority>${priority}</priority>
${alternateLinks(url)}
${media.join('\n')}
  </url>`
}

function imagesForPath(path, games, forums) {
  if (path === '/') {
    return [
      {
        src: '/og/home.jpg',
        title: 'Fortnite Hacks Open Graph',
        caption: 'Google and social preview image for getfortnitehacks.org homepage.',
      },
      {
        src: HERO_FULL,
        title: 'Fortnite Hacks Hero',
        caption: 'Buy Fortnite cheats - Fortnite Aimbot, ESP and radar hack hero artwork for PC.',
      },
      {
        src: COVER,
        title: 'Fortnite Hacks Product Cover',
        caption: 'Fortnite cheats product cover for checkout and social previews.',
      },
      {
        src: VIDEO_THUMB,
        title: 'Fortnite Hacks Preview Thumbnail',
        caption: 'Thumbnail for the Fortnite Aimbot and ESP preview video.',
      },
      {
        src: OG_DEFAULT,
        title: 'Fortnite Hacks Product Social Preview',
        caption: 'Default Open Graph image for getfortnitehacks.org product pages.',
      },
    ]
  }

  const game = games.find((g) => path === `/${g.slug}-cheats`)
  if (game) {
    return [
      {
        src: '/og/fortnite-cheats.jpg',
        title: 'Fortnite Hacks Open Graph',
        caption: 'Google and social preview for the Fortnite cheats product page.',
      },
      {
        src: COVER,
        title: 'Fortnite Aimbot ESP Product Artwork',
        caption: 'Product features, compatibility, status and price before checkout.',
      },
      {
        src: HERO_FULL,
        title: `${game.name} Cheats Product Hero`,
        caption: `Hero artwork for ${game.name} Aimbot, ESP and radar hack product details.`,
      },
      {
        src: MENU,
        title: `${game.name} Cheats Menu Preview`,
        caption: `Menu and Aimbot settings preview for ${game.name} cheats.`,
      },
      {
        src: ESP,
        title: `${game.name} ESP Gameplay`,
        caption: `Player ESP and wallhack preview for ${game.name}.`,
      },
      {
        src: VIDEO_THUMB,
        title: 'Fortnite Hacks Preview Thumbnail',
        caption: 'Thumbnail for the Fortnite cheats preview video.',
      },
    ]
  }

  if (path === '/forums') {
    return [
      {
        src: '/og/forums.jpg',
        title: 'Fortnite Hacks Forums Open Graph',
        caption: 'Google preview image for the Fortnite Hacks guides index.',
      },
      {
        src: MENU,
        title: 'Fortnite Hacks Forum Artwork',
        caption: 'Artwork reference for Fortnite setup and feature guides.',
      },
    ]
  }

  if (path.startsWith('/forums/')) {
    const slug = path.slice('/forums/'.length)
    const forum = forums.find((f) => f.slug === slug)
    return [
      {
        src: `/og/forums-${slug}.jpg`,
        title: `${forum?.title || slug} Open Graph`,
        caption:
          forum?.metaDescription ||
          `Google preview image for ${forum?.title || slug} on getfortnitehacks.org.`,
      },
      {
        src: FORUM_IMAGES[slug] || MENU,
        title: `${forum?.title || slug} Artwork`,
        caption:
          forum?.excerpt ||
          `Visible Fortnite Hacks guide artwork for ${forum?.title || slug}.`,
      },
    ]
  }

  if (path === '/reviews') {
    return [
      {
        src: '/og/reviews.jpg',
        title: 'Fortnite Hacks Reviews Open Graph',
        caption: 'Google preview image for Fortnite cheats reviews.',
      },
    ]
  }
  if (path === '/faq') {
    return [
      {
        src: '/og/faq.jpg',
        title: 'Fortnite Hacks FAQ Open Graph',
        caption: 'Google preview image for the Fortnite Hacks FAQ.',
      },
    ]
  }
  if (path === '/support') {
    return [
      {
        src: '/og/support.jpg',
        title: 'Fortnite Hacks Support Open Graph',
        caption: 'Google preview image for Fortnite Hacks support.',
      },
    ]
  }
  if (path === '/privacy-policy') {
    return [
      {
        src: '/og/privacy.jpg',
        title: 'Fortnite Hacks Privacy Policy',
        caption: 'Privacy policy preview for getfortnitehacks.org orders and support.',
      },
    ]
  }
  if (path === '/terms') {
    return [
      {
        src: '/og/terms.jpg',
        title: 'Fortnite Hacks Terms of Use',
        caption: 'License terms preview for Fortnite Hacks.',
      },
    ]
  }
  if (path === '/refund-policy') {
    return [
      {
        src: '/og/refunds.jpg',
        title: 'Fortnite Hacks Refund Policy',
        caption: 'Refund rules preview for digital Fortnite Hacks licenses.',
      },
    ]
  }

  return [{ src: OG_DEFAULT, title: 'Fortnite Hacks', caption: 'Fortnite Hacks page artwork.' }]
}

function videosForPath(path) {
  if (path === '/fortnite-cheats') {
    return [
      {
        thumb: VIDEO_THUMB,
        title: 'Fortnite Hacks Aimbot and ESP Preview',
        description:
          'Self-hosted Fortnite cheats preview showing Aimbot, ESP menu and survival gameplay visuals on PC.',
        content: PREVIEW_VIDEO,
      },
    ]
  }
  return []
}

function collectAllPaths(games, forums, staticRoutes) {
  const landing = loadLandingSlugs()
  const faqArticles = loadSlugsFromData('seo-faq-articles.ts')
  const reviewArticles = loadSlugsFromData('seo-review-articles.ts')
  const intelBlog = loadSlugsFromData('intel-blog.ts')

  const paths = new Set([
    ...staticRoutes,
    ...games.map((game) => `/${game.slug}-cheats`),
    ...forums.map((forum) => `/forums/${forum.slug}`),
    ...landing.map((slug) => `/${slug}`),
    ...faqArticles.map((slug) => `/faq/${slug}`),
    ...reviewArticles.map((slug) => `/reviews/${slug}`),
    ...intelBlog.map((slug) => `/blog/${slug}`),
  ])
  paths.delete('/404')
  paths.delete('/[slug]')
  return [...paths]
}

function buildSitemap(games, forums, allPaths) {
  const forumByPath = new Map(forums.map((f) => [`/forums/${f.slug}`, f]))

  const sorted = [...allPaths].sort((a, b) => {
    const rank = (path) => {
      if (path === '/') return 0
      if (path.endsWith('-cheats')) return 1
      if (path === '/forums') return 2
      if (path.startsWith('/forums/')) return 3
      if (path === '/reviews') return 4
      if (path === '/faq') return 5
      if (path === '/support') return 6
      return 10
    }
    const diff = rank(a) - rank(b)
    return diff !== 0 ? diff : a.localeCompare(b)
  })

  const entries = sorted.map((path) => {
    const meta = PAGE_META[path] || {
      priority: path.startsWith('/forums/') ? '0.8' : '0.5',
      changefreq: path.startsWith('/forums/') ? 'monthly' : 'weekly',
    }
    const forum = forumByPath.get(path)
    return urlEntry({
      path,
      priority: meta.priority,
      changefreq: meta.changefreq,
      lastmod: forum?.date || TODAY,
      images: imagesForPath(path, games, forums),
      videos: videosForPath(path),
    })
  })

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xhtml="http://www.w3.org/1999/xhtml"
        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1"
        xmlns:video="http://www.google.com/schemas/sitemap-video/1.1">
${entries.join('\n')}
</urlset>
`
}

function validate(games, forums, allPaths, sitemap) {
  const errors = []
  if (forums.some((forum) => ['instructions', 'how-to-load'].includes(forum.slug))) {
    errors.push('Retired forum slug remains indexed')
  }
  for (const game of games) {
    const page = join(pagesDir, `${game.slug}-cheats.astro`)
    if (!existsSync(page)) errors.push(`Product route has no page file: /${game.slug}-cheats`)
  }
  if (forums.length && !existsSync(join(pagesDir, 'forums', '[slug].astro'))) {
    errors.push('Forum routes have no dynamic page file: src/pages/forums/[slug].astro')
  }
  for (const image of ALL_SITE_IMAGES) {
    const diskPath = join(publicDir, image.replace(/^\//, ''))
    if (!existsSync(diskPath)) errors.push(`Missing image asset on disk: ${image}`)
  }

  const expectedUrls = new Set(allPaths.map(siteUrl))
  const pageLocs = [...sitemap.matchAll(/<url>\s*<loc>([^<]+)<\/loc>/g)].map((match) => match[1])
  const imageLocs = [...sitemap.matchAll(/<image:loc>([^<]+)<\/image:loc>/g)].map((match) => match[1])
  const urlBlocks = sitemap.match(/<url>[\s\S]*?<\/url>/g) || []

  for (const url of expectedUrls) {
    if (!pageLocs.includes(url)) errors.push(`Missing URL: ${url}`)
  }
  for (const url of pageLocs) {
    if (!expectedUrls.has(url)) errors.push(`Unexpected URL: ${url}`)
  }
  if (new Set(pageLocs).size !== pageLocs.length) errors.push('sitemap.xml contains duplicate page URLs')
  if (sitemap.includes('<sitemapindex')) errors.push('sitemap.xml must be a single urlset, not an index')
  if ((sitemap.match(/<urlset[\s>]/g) || []).length !== 1) {
    errors.push('sitemap.xml must contain exactly one <urlset>')
  }
  if (urlBlocks.length !== expectedUrls.size) {
    errors.push(`Expected ${expectedUrls.size} <url> entries, found ${urlBlocks.length}`)
  }
  for (const block of urlBlocks) {
    const loc = block.match(/<loc>([^<]+)<\/loc>/)?.[1] || '(unknown)'
    if (!block.includes('<image:image>') || !block.includes('<image:loc>')) {
      errors.push(`URL missing image entry: ${loc}`)
    }
  }
  for (const image of ALL_SITE_IMAGES) {
    if (!imageLocs.includes(siteUrl(image))) errors.push(`Sitemap missing required image: ${image}`)
  }
  if (!sitemap.includes(siteUrl(PREVIEW_VIDEO))) {
    errors.push('Sitemap missing Fortnite preview video content_loc')
  }
  if (/Tarkov|tarkovcheats|EFT Reaper|Warzone|warzonecheats|Ricochet/i.test(sitemap)) {
    errors.push('Sitemap still contains legacy Tarkov/Warzone labels')
  }
  if (!sitemap.includes('getfortnitehacks.org')) {
    errors.push('Sitemap must target getfortnitehacks.org')
  }
  if (/tarkovcheats|warzonecheats|wardogshacks|theisle/i.test(sitemap)) {
    errors.push('Sitemap contains a non-Fortnite domain')
  }
  if (imageLocs.length < expectedUrls.size) {
    errors.push('Image count is lower than page count - every URL needs an image')
  }
  if (/[^\x09\x0A\x0D\x20-\x7E]/.test(sitemap.replace(/https?:\/\//g, ''))) {
    // Allow non-ascii only inside https URLs if any; captions should be ascii.
  }
  if (errors.length) throw new Error(`Sitemap validation failed:\n- ${errors.join('\n- ')}`)
}

function main() {
  const games = loadGames()
  const forums = loadForums()
  const staticRoutes = loadStaticRoutes()
  const allPaths = collectAllPaths(games, forums, staticRoutes)
  const sitemap = buildSitemap(games, forums, allPaths)
  validate(games, forums, allPaths, sitemap)

  const robotsTxt = [
      'User-agent: Googlebot',
      'Allow: /',
      'Allow: /sitemap.xml',
      'Allow: /robots.txt',
      'Allow: /media/',
      'Allow: /og/',
      'Allow: /videos/',
      '',
      'User-agent: Google-InspectionTool',
      'Allow: /',
      'Allow: /sitemap.xml',
      'Allow: /robots.txt',
      'Allow: /media/',
      'Allow: /og/',
      'Allow: /videos/',
      '',
      'User-agent: Bingbot',
      'Allow: /',
      'Allow: /sitemap.xml',
      'Allow: /robots.txt',
      'Allow: /media/',
      'Allow: /og/',
      'Allow: /videos/',
      '',
      'User-agent: *',
      'Allow: /',
      'Allow: /sitemap.xml',
      'Allow: /robots.txt',
      'Allow: /media/',
      'Allow: /og/',
      'Allow: /videos/',
      'Disallow: /404',
      'Disallow: /404.html',
      '',
      `Sitemap: ${siteUrl('/sitemap.xml')}`,
      '',
    ].join('\n')

  const distDir = join(root, 'dist')
  for (const dir of [publicDir, ...(existsSync(distDir) ? [distDir] : [])]) {
    writeFileSync(join(dir, 'sitemap.xml'), sitemap, 'utf8')
    writeFileSync(join(dir, 'robots.txt'), robotsTxt, 'utf8')
  }

  for (const name of [
    'sitemap-pages.xml',
    'sitemap-products.xml',
    'sitemap-forums.xml',
    'sitemap-images.xml',
    'sitemap-blogs.xml',
    'sitemap-regions.xml',
    'sitemap-index.xml',
    'sitemap_index.xml',
  ]) {
    for (const dir of [publicDir, join(root, 'dist')]) {
      const path = join(dir, name)
      if (existsSync(path)) unlinkSync(path)
    }
  }

  console.log(
    `Sitemap OK: ${allPaths.length} pages in single sitemap.xml (${siteUrl('/sitemap.xml')})`,
  )
}

main()
