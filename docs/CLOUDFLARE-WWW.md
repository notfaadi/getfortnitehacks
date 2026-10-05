# Fix Seobility “www / non-www 301” (required DNS)

Seobility checks **both** `https://getfortnitehacks.org` and `https://www.getfortnitehacks.org`.  
The Worker already returns **301 → apex** for `www` (see `workers/site.js`).  
**You must make `www` resolve to Cloudflare** or the audit keeps failing.

## Steps (about 2 minutes)

After `wrangler deploy`, Cloudflare may auto-add **www** when `custom_domain = true` is set in `wrangler.toml`. If **www** still does not resolve, add DNS manually:

1. Open **Cloudflare** → zone **getfortnitehacks.org** → **DNS** → **Add record**
   - **Type:** `CNAME`
   - **Name:** `www`
   - **Target:** `getfortnitehacks.org` (or `@` if the UI offers it)
   - **Proxy status:** Proxied (orange cloud)
2. Open **Workers & Pages** → **getfortnitehacks** → **Domains** → **Add domain**
   - Add **`www.getfortnitehacks.org`** (Production), in addition to the apex.
3. Wait 2–5 minutes, then verify:

```bash
curl -I https://www.getfortnitehacks.org/
# HTTP/1.1 301 Moved Permanently
# Location: https://getfortnitehacks.org/
```

Or run: `npm run verify:live`

## Re-run Seobility

Use **`https://getfortnitehacks.org/`** as the audit URL (not `.io`, not `workers.dev`).
