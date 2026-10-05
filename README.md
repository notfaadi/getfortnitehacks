# Fortnite Hacks (getfortnitehacks.org)

Static Astro site for Fortnite Battle Royale — aimbot, ESP, wallhack, loot ESP, radar hack — Cloudflare Workers ready.

Worldwide English SEO targeting **fortnite hacks**, **fortnite cheats**, and **undetected fortnite hacks**.

```bash
npm install
npm run dev
npm run build
npx wrangler deploy
```

Cloudflare CI runs `npm run build` then `npx wrangler deploy`.

**Live URL:** [https://getfortnitehacks.org](https://getfortnitehacks.org) — the only public domain for this site.

### “This site can’t be reached” / `DNS_PROBE_FINISHED_NXDOMAIN`

If the address bar shows **`getfortnitehacks.io`**, that is the wrong domain — `.io` has **no DNS** and will never load. The project was moved to **`.org`**. Use exactly:

`https://getfortnitehacks.org`

Delete old `.io` bookmarks and pick the **`.org`** suggestion in Chrome. If you **own** `getfortnitehacks.io`, add it in Cloudflare and set a **301 redirect** to `https://getfortnitehacks.org/$1` (see commented routes in `wrangler.toml` after the zone is on your account).

The `*.workers.dev` URLs are disabled in `wrangler.toml` (`workers_dev = false`); open the custom domain or the apex URL above.

Workers → **getfortnitehacks** → **Domains**: keep **getfortnitehacks.org** (and optionally **www** for the 301 to apex). Turn off any extra Worker URLs in **Settings** if the dashboard still shows a workers.dev toggle.
