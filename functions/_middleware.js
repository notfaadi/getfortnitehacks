/**
 * Host redirects for legacy Pages Functions (if invoked).
 * Canonical: https://getfortnitehacks.io — 301 all other hosts (www, .org, http).
 */
const CANONICAL_HOST = 'getfortnitehacks.io'

function toCanonicalSiteUrl(url) {
  const host = url.hostname.toLowerCase()
  const bare = host.startsWith('www.') ? host.slice(4) : host
  let path = url.pathname
  if (path !== '/' && path.endsWith('/')) path = path.replace(/\/$/, '')
  const needsHostFix = bare !== CANONICAL_HOST
  const needsHttps = url.protocol !== 'https:'
  if (!needsHostFix && !needsHttps) return null

  const next = new URL(url.toString())
  next.protocol = 'https:'
  next.hostname = CANONICAL_HOST
  next.pathname = path || '/'
  return next
}

export async function onRequest(context) {
  const url = new URL(context.request.url)
  const canonical = toCanonicalSiteUrl(url)
  if (canonical) {
    return Response.redirect(canonical.toString(), 301)
  }
  return context.next()
}
