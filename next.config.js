/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ["cdn.sanity.io", "spoonacular.com"],
  },
  experimental: {
    appDir: true,
  },
};
