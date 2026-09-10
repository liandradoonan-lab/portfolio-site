/** @type {import('next').NextConfig} */
const nextConfig = {
  // `next build` and `next dev` both write to .next by default, so running a
  // build while the dev server is up wipes what it's serving and the site
  // renders unstyled. `npm run verify` sets this to a scratch directory so a
  // check build can't touch the running server. Unset everywhere else — Vercel
  // builds into .next as normal.
  distDir: process.env.NEXT_DIST_DIR || ".next",

  // ...and type-check against a config that lists only that build's own
  // generated types. tsconfig.json lists .next/types, where the dev server
  // leaves a stale file behind for any route deleted while it runs; a verify
  // build reading it would fail over a page that no longer exists.
  ...(process.env.NEXT_DIST_DIR
    ? { typescript: { tsconfigPath: "tsconfig.verify.json" } }
    : {}),

  images: {
    // Goodreads serves every cover from this host.
    remotePatterns: [
      { protocol: "https", hostname: "i.gr-assets.com" },
      { protocol: "https", hostname: "images-na.ssl-images-amazon.com" },
    ],
  },
};

export default nextConfig;
