/** @type {import('next').NextConfig} */
const withLess = require('next-with-less');

const nextConfig = {
  reactStrictMode: true,
  compiler: {
    styledComponents: true,
  },
  images: {
    domains: ['productimages.hepsiburada.net', 'os.alipayobjects.com'],
  },
  lessLoaderOptions: {},
  async redirects() {
    return [
      {
        source: '/group/:id',
        destination: '/group/:id/settings',
        permanent: true,
      },
    ];
  },
};

module.exports = withLess(nextConfig);
