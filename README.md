# Valorant Hacks — Marketing Site

Static Astro 7 site for [valoranthack.net](https://valoranthack.net). Primary SEO keyword: **valorant hacks** (secondary: valorant cheats, aimbot, ESP).

## Stack

- Astro 7 + Tailwind CSS 4 + TypeScript
- 22-locale i18n (English at root, `/es/`, `/fr/`, …)
- Cloudflare Pages deployment with `functions/_middleware.js`

## Quick start

```bash
npm install
npm run generate:i18n   # after editing scripts/i18n-data/*
node scripts/generate-blog-posts.mjs
npm run dev
```

Build and validate sitemaps:

```bash
npm run build:validate
```

## Deploy (Cloudflare Pages)

1. Create a Cloudflare Pages project named **valoranthacks**
2. Connect this repo or upload `dist/` after `npm run build`
3. Build command: `npm run build`
4. Output directory: `dist`
5. Add custom domain **valoranthack.net** (apex) and redirect **www** → apex
6. Enable SSL **Always Use HTTPS**

CLI deploy:

```bash
npm run pages:deploy
```

## Environment

- Node.js >= 22.12.0
- Checkout URL: Zadeyo Valorant product (`siteConfig.checkoutUrl` in `src/data/site.ts`)

## License

Private — for valoranthack.net deployment only.
