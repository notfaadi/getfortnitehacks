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
`getfortnitehacks.io` is not configured (no DNS). The `*.workers.dev` URLs are disabled in `wrangler.toml` (`workers_dev = false`); use the **Visit** link on the custom domain or open the apex URL directly.

Workers → **getfortnitehacks** → **Domains**: keep **getfortnitehacks.org** (and optionally **www** for the 301 to apex). Turn off any extra Worker URLs in **Settings** if the dashboard still shows a workers.dev toggle.
