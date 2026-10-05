/**
 * Worker entry for Astro static output in ./dist.
 * IMPORTANT: Always fetch assets via https://assets.local — never the request
 * hostname — or Cloudflare returns HTTP 522 on custom domains.
 *
 * Single canonical host: https://getfortnitehacks.org (apex, no www).
 * All other hostnames (.io, www.*, http) → 301 to apex .org.
 * Canonical/hreflang live only in HTML — do not duplicate via Link headers.
 */
const CANONICAL_HOST = 'getfortnitehacks.org'

function assetsFetch(env, request, pathname) {
  return env.ASSETS.fetch(new Request(new URL(pathname, 'https://assets.local'), request))
}

function withHtmlCharset(response) {
  const contentType = response.headers.get('content-type') || ''
  const primary = contentType.split(',')[0].trim()
  if (!primary.toLowerCase().startsWith('text/html')) return response
  if (/charset=/i.test(primary)) {
    if (contentType.includes(',')) {
      const headers = new Headers(response.headers)
      headers.set('content-type', primary)
      return new Response(response.body, {
        status: response.status,
        statusText: response.statusText,
        headers,
      })
    }
    return response
  }
  const headers = new Headers(response.headers)
  headers.set('content-type', 'text/html; charset=utf-8')
  return new Response(response.body, {
    status: response.status,
    statusText: response.statusText,
    headers,
  })
}

function normalizePathname(pathname) {
  if (!pathname || pathname === '/') return '/'
  return pathname.replace(/\/$/, '') || '/'
}

/** 301 to https://getfortnitehacks.org{path} unless hostname is exactly apex + HTTPS. */
function toCanonicalSiteUrl(url) {
  const host = url.hostname.toLowerCase()
  const path = normalizePathname(url.pathname)
  if (host === CANONICAL_HOST && url.protocol === 'https:') return null

  const next = new URL(url.toString())
  next.protocol = 'https:'
  next.hostname = CANONICAL_HOST
  next.pathname = path
  return next
}

export default {
  async fetch(request, env) {
    const url = new URL(request.url)
    const canonical = toCanonicalSiteUrl(url)
    if (canonical) {
      return Response.redirect(canonical.toString(), 301)
    }

    const assetResponse = await assetsFetch(env, request, url.pathname + url.search)
    const response = withHtmlCharset(assetResponse)

    const headers = new Headers(response.headers)
    if (!headers.has('Strict-Transport-Security')) {
      headers.set('Strict-Transport-Security', 'max-age=31536000; includeSubDomains; preload')
    }
    return new Response(response.body, {
      status: response.status,
      statusText: response.statusText,
      headers,
    })
  },
}
