/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // copied from https://nextjs.org/docs/api-reference/next.config.js/rewrites
  async rewrites() {
    return [
      {
        source: "/about",
        destination: "/",
      },
    ];
  },
};

module.exports = nextConfig;
