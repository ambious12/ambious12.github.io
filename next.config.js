/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  basePath: "https://ambious12.github.io/",
  images: {
    domains: ['127.0.0.1', 'localhost', 'ambious12.github.io'],
  },
};

module.exports = nextConfig;
