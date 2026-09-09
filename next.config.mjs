/** @type {import('next').NextConfig} */
const nextConfig = {
  // `next build` and `next dev` both write to .next by default, so running a
  // build while the dev server is up wipes what it's serving and the site
  // renders unstyled. `npm run verify` sets this to a scratch directory so a
  // check build can't touch the running server. Unset everywhere else — Vercel
  // builds into .next as normal.
  distDir: process.env.NEXT_DIST_DIR || ".next",

  images: {
    // Goodreads serves every cover from this host.
    remotePatterns: [
      { protocol: "https", hostname: "i.gr-assets.com" },
      { protocol: "https", hostname: "images-na.ssl-images-amazon.com" },
    ],
  },
};

export default nextConfig;
