import type { NextConfig } from 'next';
import type { Configuration } from 'webpack';

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'res.cloudinary.com',
        pathname: '/dgyocpguk/**',
      },
    ],
  },
  webpack: (config: Configuration) => {
    config.resolve = {
      ...config.resolve,
      fallback: {
        ...config.resolve?.fallback,
        fs: false,
        path: false,
        os: false,
      },
      alias: {
        ...config.resolve?.alias,
        '@nodelib/fs.scandir': false,
      },
    };
    return config;
  },
};

export default nextConfig;
