/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  images: {
    domains: ['image.ohou.se', 'bucketplace-v2-development.s3.amazonaws.com'],
  },
  experimental: { scrollRestoration: true },
};

module.exports = nextConfig;
