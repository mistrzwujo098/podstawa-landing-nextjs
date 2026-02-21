/** @type {import('next').NextConfig} */
const nextConfig = {
  basePath: '/matura',
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'paulinaodmatematyki.com',
        pathname: '/wp-content/uploads/**',
      },
    ],
  },
  experimental: {
    inlineCss: true,
    optimizePackageImports: ['lucide-react'],
  },
}

export default nextConfig
