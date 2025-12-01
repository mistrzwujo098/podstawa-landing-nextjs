/** @type {import('next').NextConfig} */
const nextConfig = {
  basePath: '/matura-bf-dogrywka',
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'paulinaodmatematyki.com',
        pathname: '/wp-content/uploads/**',
      },
    ],
  },
}

export default nextConfig
