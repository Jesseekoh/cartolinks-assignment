import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    domains: ['images.unsplash.com', 'github.com'],
    // remotePatterns: [new URL('https://unsplash.com/photos/**')],
  },
};

export default nextConfig;
