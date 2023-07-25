/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images:{
    domains:["127.0.0.1",'ambious12.github.io']
  },
  // basePath: "https://ambious12.github.io/",
};

module.exports = nextConfig;
