/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    // Goodreads serves every cover from this host.
    remotePatterns: [
      { protocol: "https", hostname: "i.gr-assets.com" },
      { protocol: "https", hostname: "images-na.ssl-images-amazon.com" },
    ],
  },
};

export default nextConfig;
