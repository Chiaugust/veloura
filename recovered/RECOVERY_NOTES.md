# Veloura Build Recovery Notes

This folder contains readable copies of the current production bundles:

- `storefront.bundle.readable.js`
- `storefront.bundle.readable.css`
- `admin.bundle.readable.js`
- `admin.bundle.readable.css`

## What this repo is

This is not the original Vite source tree. It is a built static export:

- no `src/`
- no `package.json`
- no `vite.config.*`
- no sourcemaps

That means the original file/module structure is gone. We can still recover behavior and content from the bundles, but not the original source layout exactly.

## Entry points

- Root site: `index.html` -> `assets/index-CODWsF-p.js` + `assets/index-BTtPldg6.css`
- Admin site: `admin/index.html` -> `admin/assets/index-D2XDVCKZ.js` + `admin/assets/index-HhHmgmNl.css`

Notes:

- `assets/index-D2XDVCKZ.js` and `admin/assets/index-D2XDVCKZ.js` are identical copies.
- `assets/index-HhHmgmNl.css` and `admin/assets/index-HhHmgmNl.css` are identical copies.

## Stack that survived the build

- React 19.2.3
- Wouter for routing
- TanStack Query client is bundled
- Lucide icons
- Tailwind-style utility output plus CSS custom properties
- Radix-style UI primitives are present in the bundle

## Storefront routes that are actually wired

- `/`
- `/shop`
- `/product/:id`
- `/cart`
- `/checkout`
- `/about`

## Storefront behavior summary

- The product detail route is not truly dynamic right now. `/product/:id` renders a hardcoded Aura product page and does not meaningfully use the route param.
- The shop page uses local arrays for products.
- The catalog is artificially expanded to 24 items by duplicating the 12-product dataset with new IDs.
- Cart state is local React state seeded with sample items.
- Checkout state is local React state seeded with a sample item.
- The floating cart drawer opens from a custom browser event: `open-cart-sidebar`.
- Checkout UI includes card, Apple Pay, and PayPal-style presentation, but no real payment integration was found.
- A WhatsApp floating CTA is hardcoded to `https://wa.me/1234567890`.

## Storefront content inventory

Recovered public content includes:

- 12 named wig products
- 4 collection tiles
- testimonial cards
- FAQ section
- About page / founder story page
- cart drawer
- cart page
- checkout page

Important storefront quirks:

- Several nav/footer links are placeholders pointing to `/` instead of dedicated pages.
- The public site references `Hair Quiz`, `Reviews`, and `Install & Care`, but these are not backed by real routes in the current root bundle.

## Admin behavior summary

Admin routes:

- `/admin`
- `/admin/products`
- `/admin/orders`
- `/admin/customers`
- `/admin/content`
- `/admin/analytics`
- `/admin/promotions`
- `/admin/settings`

The admin app is mostly a dashboard/demo layer driven by in-bundle arrays and `useState`, not a real backend:

- products can be added/removed in local state
- orders/customers are mock records
- content pages/blog/media are mock records
- promotions/coupons are mock records
- settings are form defaults only
- analytics charts and totals are static sample values

One place where the admin bundle is still useful:

- it contains seed content paths like `/about`, `/contact`, `/faq`, `/returns`, `/promo/holiday`

Those appear in admin content data, not as confirmed live storefront routes in the current root build.

## Theme / design system

Root CSS variables:

- `--background: #fcfaf8`
- `--foreground: #1d1816`
- `--primary: #53432d`
- `--secondary: #e0dad1`
- `--accent: #d9c9a6`

Fonts loaded from Google Fonts:

- `Montserrat`
- `Playfair Display`

## Metadata issues worth fixing later

Both HTML entry files still contain build-time metadata that should be reviewed:

- `twitter:site` is `@replit`
- Open Graph image points to a `worf.replit.dev` URL
- viewport uses `maximum-scale=1`
- OG description text shows mojibake in the HTML (`itâ€™s`)

## Practical next step

If you want to keep working from this export, use the readable files in this folder as the editing reference and then either:

1. patch the current built files directly, or
2. rebuild a fresh `src/` project by splitting the recovered bundles back into components page-by-page.
