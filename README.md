# portfolio-site

Next.js 14 (App Router) · TypeScript · Tailwind · Framer Motion.

```bash
npm run dev     # http://localhost:3000
npm run verify  # production build, safe to run while dev is up
npm run build   # production build (what Vercel runs)
```

`next dev` and `next build` both write to `.next`, so running a build while the
dev server is up wipes what it's serving and the site renders with no CSS —
Times, purple links, white background. `npm run verify` is the same build
pointed at `.next-verify` instead, so it can't touch the running server. Use it
for local checks; leave `npm run build` for deploys.

## Design tokens

Five colours, no others. Defined in `tailwind.config.ts`.

| Token | Hex | Role |
| --- | --- | --- |
| `ink` | `#000000` | Page background |
| `teal` | `#124559` | Surface — active nav pill, cards, rows |
| `air` | `#598392` | Accent — links, buttons, hover |
| `beige` | `#EFF6E0` | Primary text |
| `ash` | `#AEC3B0` | Muted text, borders, dividers |

## Fonts

- **Fraunces** (display / headings) — `next/font/google`, self-hosted, exposed as
  `--font-fraunces` and used via the `font-display` Tailwind utility.
- **Switzer** (body / UI) — Fontshare CDN `<link>` in `app/layout.tsx`, used via
  the `font-sans` utility.
> **Adding a Fontshare family: one `<link>` per family.** The API silently drops
> every `f[]` parameter after the first, so a combined URL returns only the first
> family and the rest fall back with no error anywhere. Verify a new face with
> `document.fonts` rather than by eye — a fallback can look plausible.

> The build plan called for **Neue Montreal** from Fontshare. Neue Montreal is a
> Pangram Pangram typeface and is not on Fontshare — there is no family, and no
> CDN URL, to link. Switzer (Indian Type Foundry, ITF Free Font License) is
> Fontshare's neo-grotesque in the same lane and is the stand-in. To swap it for
> something else, change the `f[]=` slug in `app/layout.tsx` and the `sans` stack
> in `tailwind.config.ts` — nothing else references the family.

## Nav

A centred masthead: the wordmark sits above the pill nav and is itself the link
home, so there is no "Home" item in the pill. On `/` no pill is active, which is
correct — home isn't one of the pill's destinations.

On `/` the wordmark is withheld until you scroll, so the page doesn't say
"Liandra Doonan" directly above "Hi, I'm Liandra!". It is present from the start
on every other route.

The header is transparent over `ink` and gains a blur + hairline border once the
page scrolls, at which point the wordmark shrinks (36px → 20px) so a masthead this
size doesn't follow you down the page. The active link is a teal pill with beige
text, moved between links with a Framer `layoutId` on the shared spring — beige on
teal is 9.37:1, where the original air-on-teal was 2.52:1.

Note that air only became safe for normal-size text when the background went to
black: it measures 4.48:1 on the old `#01161E` (below the 4.5:1 AA floor) and
5.09:1 on `#000000`. If the background is ever lightened again, re-check air
before using it for body copy.

## Headings

The home hero is two columns on desktop (text left, photo right), stacked on
mobile, top-aligned and sitting high on the page. The photo slot in
`app/page.tsx` is a placeholder — the comment above it has the exact
`next/image` block to paste in once there's a file in `public/`.

Every heading on the site, home included, is Fraunces' display cut. The home
title briefly ran through Switzer 800, Clash Display 700 and Switzer 500 before
coming back to the serif — if it's revisited again, the size override lives in
`app/page.tsx` and the family comes from the `h1` rule below.

Fraunces' display cut — `opsz` 144, weight 400 — set once on `h1`–`h4` in
`app/globals.css`. Hairline serifs are the point; if a heading ever needs to hold
up below ~20px, drop that rule's `opsz` for that element rather than changing the
global.

## Motion

`lib/motion.ts` holds the shared language: `pageTransition` (crossfade + 8px
slide, 250ms), `fadeUp` (400ms reveal), `stagger` (60ms), and `expandSpring`
(stiffness 300, damping 30) for the experience-row hover expansions.

`MotionProvider` sets `reducedMotion="user"`, so `prefers-reduced-motion`
drops every transform site-wide and leaves the opacity fades in place.
