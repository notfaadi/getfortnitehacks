/**
 * Post-deploy check: www must resolve and 301 to https://getfortnitehacks.org/
 * Run: npm run verify:live
 */
const APEX = 'https://getfortnitehacks.org/'
const WWW = 'https://www.getfortnitehacks.org/'

const failures = []

async function head(url) {
  const res = await fetch(url, { method: 'HEAD', redirect: 'manual' })
  return { status: res.status, location: res.headers.get('location') }
}

try {
  const apex = await head(APEX)
  if (apex.status !== 200) {
    failures.push(`${APEX} expected 200, got ${apex.status}`)
  }

  let www
  try {
    www = await head(WWW)
  } catch (err) {
    failures.push(
      `${WWW} could not be reached (${err.message}). Add www CNAME + Worker custom domain — see docs/CLOUDFLARE-WWW.md`,
    )
    process.exit(1)
  }

  if (www.status !== 301 && www.status !== 308) {
    failures.push(`${WWW} expected 301/308 redirect, got ${www.status}`)
  } else {
    const loc = (www.location || '').replace(/\/$/, '')
    const want = APEX.replace(/\/$/, '')
    if (loc !== want) {
      failures.push(`${WWW} Location must be ${APEX}, got ${www.location ?? '(missing)'}`)
    }
  }

  const httpApex = await head('http://getfortnitehacks.org/')
  if (httpApex.status !== 301 && httpApex.status !== 308) {
    failures.push(`http://getfortnitehacks.org/ expected 301 to HTTPS apex, got ${httpApex.status}`)
  }
} catch (err) {
  failures.push(`Live verify failed: ${err.message}`)
}

if (failures.length) {
  console.error('Live canonical verify failed:\n- ' + failures.join('\n- '))
  process.exit(1)
}

console.log('Live canonical verify passed (apex 200, www 301 → apex, http → https).')
