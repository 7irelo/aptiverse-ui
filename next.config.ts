/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['cdn.pixabay.com'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.pixabay.com',
        port: '',
        pathname: '/photo/**',
      },
      {
        protocol: 'https',
        hostname: 'cdn.pixabay.com',
        pathname: '**',
      },
    ],
  },
  experimental: {
    optimizeCss: false,
  },
}

module.exports = nextConfig