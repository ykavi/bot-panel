/** @type {import('next').NextConfig} */
const withLess = require('next-with-less');

const nextConfig = {
  reactStrictMode: true,
  compiler: {
    styledComponents: true,
  },
  images: {
    domains: ['productimages.hepsiburada.net'],
  },
  lessLoaderOptions: {},
};

module.exports = withLess(nextConfig);
