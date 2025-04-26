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
    serverActions: true,
    optimizeCss: true,
    scrollRestoration: true,
  },
  // Enable compression
  compress: true,
  // Add headers for caching static assets
  async headers() {
    return [
      {
        // Fix: Use valid pattern for image files
        source: '/:path(.+)\\.(jpg|jpeg|gif|png|svg|ico|webp|avif)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          }
        ],
      },
      {
        // Fix: Use valid pattern for JS and CSS files
        source: '/:path(.+)\\.(js|css)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          }
        ],
      },
      {
        // Fix: Use valid pattern for font files
        source: '/:path(.+)\\.(woff|woff2|eot|ttf|otf)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          }
        ],
      },
    ];
  },
  // Optimize output
  poweredByHeader: false,
  reactStrictMode: true,
};

export default nextConfig;
