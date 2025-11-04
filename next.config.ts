import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: ['cdn.pixabay.com'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.pixabay.com',
        pathname: '/photo/**',
      },
    ],
  },
}

export default nextConfig;