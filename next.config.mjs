/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'v0.blob.com',
        port: '',
        pathname: '/**',
      },
    ],
    formats: ['image/avif', 'image/webp'],
    minimumCacheTTL: 60,
  },
  experimental: {
    // Remove optimizeCss which requires critters
    serverActions: true,
    scrollRestoration: true,
  },
  // Enable compression
  compress: true,
  
  // Optimize output
  poweredByHeader: false,
  reactStrictMode: true,
};

export default nextConfig;
