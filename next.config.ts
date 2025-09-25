import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  /* existing config options */
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'placehold.co',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'picsum.photos',
        port: '',
        pathname: '/**',
      },
    ],
  },

  webpack: (config) => {
    // Add fallbacks for Node modules that some packages may try to use
    config.resolve.fallback = {
      fs: false,
      path: false,
      os: false,
      crypto: false,
      module: false,
    };
    return config;
  },
};

export default nextConfig;
